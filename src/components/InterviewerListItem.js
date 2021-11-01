import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

function InterviewerListItem(props) {

  const interviewerClass = classNames('interviewers__item', {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

}

export default InterviewerListItem;

// return (
//   <li onClick={props.setInterviewer} className={InterviewerListItemClass}>
//     <img
//       className="interviewers__item-image"
//       src={props.avatar}
//       alt={props.name}
//     />
//     {props.selected && <p>{props.name}</p>}
//   </li>
// );

//<li onClick={() => props.setDay(props.name)} className={dayListItemClass}>

//return (props.yourName && <h1>Hello {props.yourName}</h1>);

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };

//interviewers__item--selected

// const dayListItemClass = classNames("day-list__item", {
//   "day-list__item--selected": props.selected,
//   "day-list__item--full" : props.spots === 0
// });

// return (
//   <li onClick={() => props.setDay(props.name)} className={dayListItemClass}>
//     <h2 className="text--regular">{props.name}</h2>
//     <h3 className="text--light">{formatSpots(props.spots)}</h3>
//   </li>
// );