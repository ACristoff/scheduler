import { useState, useEffect  } from "react";
import axios from 'axios';

function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

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
    // const newDay = {...day, spots}
    const newDays = state.days.map(d => d.name === state.day ? {...day, spots} : d)
    // console.log(newDays)
    return newDays
  }


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

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev , days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  return { state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;