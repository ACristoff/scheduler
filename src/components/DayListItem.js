import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


// day-list__item all the time
// day-list__item--selected class name if props.selected is true
// day-list__item--full class name if props.spots is 0.
function formatSpots(spotsLeft) {
    if (spotsLeft === 0) {
      return 'no spots remaining'
    } else if (spotsLeft === 1) {
      return '1 spot remaining'
    } else {
      return `${spotsLeft} spots remaining`
    }
}

export default function DayListItem(props) {
  // let full = false;
  // if (props.spots === 0) {
  //   full = true;
  // }
  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full" : props.spots === 0
  });


  return (
    <li onClick={() => props.setDay(props.name)} className={dayListItemClass} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
