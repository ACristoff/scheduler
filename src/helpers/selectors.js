//transforms data in order to grab the appointments for the day
export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(daysObj => daysObj.name === day)

  if (!filteredDay[0]) {
    return [];
  }

  return filteredDay[0].appointments.map(appointment => state.appointments[appointment])
}


//transforms data in order to grab all the interviewers for day.
export function getInterviewersForDay(state, day) {

  const foundDay = state.days.find(d => d.name === day) 
  if (!foundDay) {
    return [];
  }

  return foundDay.interviewers.map(id => state.interviewers[id])
}

//transforms data to grab a specific interview
export function getInterview(state, interview) {
  if (!interview) {
    return null
  }

  const id = interview.interviewer;
  const interviewer = state.interviewers[id]

  return {...interview, interviewer}
}

