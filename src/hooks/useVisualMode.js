import { useState } from "react";

//this function manages the appointment window. It maintains a history of items, allowing you to click forward and click backwards in time with replacements when required.
function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  //I played around with these two functions to test different methods of solving this solution
  function transition(newState, replace = false) {
      setHistory ((prev) => {
        return (replace ? [...prev, prev[history.length] = (newState)] : [...prev, newState])
      })
  }

  function back() {
    if (history.length < 2) {return}
    setHistory((prev) => { 
      return [...prev.slice(0, history.length -1)]
    })
  }

  //the current mode
  const mode = history.slice(-1)[0]
  return { mode, transition, back }
}

export default useVisualMode;