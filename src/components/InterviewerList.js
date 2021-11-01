import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';


function InterviewerList(props) {

  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
}

export default InterviewerList;

// const interviewers = [
//   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
//   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
//   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
//   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
//   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
// ];

// function selectedDay(dayListed, currentDay) {
//   if (dayListed === currentDay) return true; 
//   return false;
// }

// export default function DayList(props) {
//   const { days } = props;
//   console.log(props)

//   const output = days.map(day => <DayListItem name={day.name} spots={day.spots} key={day.id} selected={selectedDay(day.name, props.day)} setDay={props.setDay}/>)
//   return <ul>
//           {output}
//         </ul>
// }