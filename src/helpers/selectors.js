//transforms data in order to grab the appointments for the day
export function getAppointmentsForDay(state, day) {
  const resultsArr = []

  const filteredDay = state.days.filter(daysObj => daysObj.name === day)

  if (filteredDay[0] === undefined) {
    return [];
  }

  for (const appointment of filteredDay[0].appointments) {
    let resultObj = {};

    resultObj.id = appointment;
    resultObj.time = state.appointments[appointment].time;
    resultObj.interview = state.appointments[appointment].interview;
    resultsArr.push(resultObj)
  }

  return resultsArr
}


//transforms data in order to grab all the interviewers for day. This one is different because I wanted to test 2 different methods for solving this problem.
export function getInterviewersForDay(state, day) {
  // const resultsArr = [];

  const foundDay = state.days.find(d => d.name === day) 
  if (!foundDay) {
    return [];
  }
  // for (const id of foundDay.interviewers) {
  //   const interviewer = state.interviewers[id]
  //   resultsArr.push(interviewer)
  // } 

  // return resultsArr; 

  //preferred react method, the above is commented so I can compare
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

