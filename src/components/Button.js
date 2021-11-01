import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}


// export default function Button(props) {
//   // let buttonClass = "button";

//   // if (props.confirm) {
//   //   buttonClass += " button--confirm";
//   // }

//   // if (props.danger) {
//   //   buttonClass += " button--danger";
//   // }

//   // classNames('button', {' button--confirm' : props.confirm}, {'button--danger' : props.danger})

//   return (
//     <button
//       className={classNames('button', {' button--confirm' : props.confirm}, {'button--danger' : props.danger})}
//       onClick={props.onClick}
//       disabled={props.disabled}
//     >
//       {props.children}
//     </button>
//   );
// }


// export default function Button(props) {
//   let buttonClass = "button";

//   if (props.confirm) {
//     buttonClass += " button--confirm";
//   } else if (props.danger) {
//     buttonClass += " button--danger"
//   }

//   let clickAction = "";
//   if (props.Clickable) {
//     clickAction += "button-clicked"
//   }

//   return <button className={buttonClass} onClick={clickAction} >{props.children}</button>;
// }


