import React from "react";
import DayListItem from "./DayListItem";

//the day list container for our days on the sidebar
export default function DayList(props) {
  const { days } = props;

  const output = days.map(day => <DayListItem name={day.name} spots={day.spots} key={day.id} selected={day.name === props.value} setDay={props.onChange}/>)
  return <ul>
          {output}
        </ul>
}

