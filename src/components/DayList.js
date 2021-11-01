import React from "react";
import DayListItem from "./DayListItem";


// function selectedDay(dayListed, currentDay) {
//   if (dayListed === currentDay) return true; 
//   return false;
// }

export default function DayList(props) {
  const { days } = props;

  const output = days.map(day => <DayListItem name={day.name} spots={day.spots} key={day.id} selected={day.name === props.value} setDay={props.onChange}/>)
  return <ul>
          {output}
        </ul>
}

