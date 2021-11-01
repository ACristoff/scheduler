// import InterviewerListItem from "components/InterviewerListItem";

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

  //preferred react method, the above is commented so I know what I'm doing
  return foundDay.interviewers.map(id => state.interviewers[id])
}

export function getInterview(state, interview) {


  if (!interview) {
    return null
  }

  const id = interview.interviewer;
  const interviewer = state.interviewers[id]

  return {...interview, interviewer}

  // resultObj.student = interview.student
  // resultObj.interviewer = {}
  // resultObj.interviewer.id = interview.interviewer
  // resultObj.interviewer.name = state.interviewers[interview.interviewer].name
  // resultObj.interviewer.avatar = state.interviewers[interview.interviewer].avatar

  // return resultObj;
}

