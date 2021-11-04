import { useState, useEffect  } from "react";
import axios from 'axios';


//this function manages state and my axios requests
function useApplicationData() {

  //the container for all my relevant states
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //sets the default day
  const setDay = day => setState({ ...state, day });

  //algorithm for updating spots whenever a succesful put or delete request is made
  function updateSpots(appointments, state) {
    const dayIndex = state.days.findIndex(day => day.name === state.day)
    const day = state.days[dayIndex];
    let spots = 0;

    for (const id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    const newDays = state.days.map(d => d.name === state.day ? {...day, spots} : d)
    return newDays
  }

  //posts an interview request after building a new state for submission, then sets the state to match
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(appointments, state)

    const newState = {
      ...state,
      appointments: appointments,
      days
    }

    return axios.put(`/api/appointments/${id}`, {interview})
    .then((res) => {
      setState({
        ...newState
      });
    })
  }  

  //deletes an interview request after building a new state for submission, then sets the state to match
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    const days = updateSpots(appointments, state)

    const newState = {
      ...state,
      appointments: appointments,
      days
    }

    return axios.delete(`/api/appointments/${id}`)
    .then((res) => {
      setState({
        ...newState
      })
    })
  }

  //updates the state to match when any other effect is made
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev , days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  //returns the state and functions to whichever components require it
  return { state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;