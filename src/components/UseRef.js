import React, { useRef, useState, useEffect } from "react";
import "../App.css";

/*
 1. useRef access DOM Element
 2. Hold mutable value prevent re-render of compenent
 3. For storing the previous state
        If you want to store the previous state and want to hold the value between re-render we can not use the useSate() becouse if the value of the state changes component will get re-render.
        We want to hold the value between the re-render so for that we have to use useRef().
*/

function UseRef() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputElement = useRef("");
  const prevCounterRef = useRef("");
  console.log(inputElement);

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]); // call the useEffect whenever the Random counter changes

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
    console.log(inputElement.current.value);
  };
  return (
    <div className="App">
      <div>
        <input
          ref={inputElement}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <div>
        <h1>Random Counter {counter}</h1>
        {typeof prevCounterRef.current !== "undefine" && (
          <h2>Previous Counter : {prevCounterRef.current}</h2>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default UseRef;
