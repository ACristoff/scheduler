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

  // function updateSpots2(id, updateUp) {
  //   for (const day in state.days) {
  //     const foundDay = state.days[day].appointments.find(appointment => appointment === id)
  //     if (foundDay) {
  //       if (updateUp) {
  //         const updatedDay = {
  //           ...state.days[day],
  //           spots: state.days[day].spots -1
  //         }
  //         const updatedDays = {
  //           ...state.days,
  //           [day]: updatedDay
  //         }
  
  //         return updatedDays
  //       }

  //       const updatedDay = {
  //         ...state.days[day],
  //         spots: state.days[day].spots +1
  //       }
  //       const updatedDays = {
  //         ...state.days,
  //         [day]: updatedDay
  //       }

  //       return updatedDays
  //     }
  //   }
  // }

  function updateSpots(requestType) {
    const dayIndex = state.days.findIndex(day => day.name === state.day)

    const days = state.days

    if (requestType === 'create') {
      days[dayIndex].spots -= 1
    } else {
      days[dayIndex].spots += 1
    }
    return days
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


    const days = updateSpots('create')

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
    const days = updateSpots()

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