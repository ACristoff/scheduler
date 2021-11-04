import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

//manages the text for the spots left in the sidebar
function formatSpots(spotsLeft) {
    if (spotsLeft === 0) {
      return 'no spots remaining'
    } else if (spotsLeft === 1) {
      return '1 spot remaining'
    } else {
      return `${spotsLeft} spots remaining`
    }
}

//formats each specific day in the sidebar
export default function DayListItem(props) {
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
