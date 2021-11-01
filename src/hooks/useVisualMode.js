import { useState } from "react";

function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  function transition(newState, replace = false) {

      setHistory ((prev) => {
        const newHistory = [...prev]
        if (replace) {
          newHistory.pop()
        }
        newHistory.push(newState)
        //experiment with a declarative way / one liner here
        return newHistory
      })

  }

  function back() {
    if (history.length < 2) {return}

    setHistory((prev) => { 
      // const newHistory = [...prev];
      // newHistory.pop()
      // return newHistory
      return [...prev.slice(0, history.length -1)]
    })
  }

  const mode = history.slice(-1)[0]
  return { mode, transition, back }
}

export default useVisualMode;

// To pass the first test our useVisualMode Hook will need to:

//     take in an initial mode
//     set the mode state with the initial mode provided
//     return an object with a mode property

// After you've attempted this, reveal the code snippet below to see an example of a solution: