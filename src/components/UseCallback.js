import React, { useMemo, useState, useEffect, useCallback } from "react";

/* 
    Whenever we type anything in input, app component get re-render
    and instance of displayName() function is generated.
    
    But the problem is whenever we click on Increment and Decrement,  app component gets re-render again becouse of the state of the counter changed.

    and when the app component re-render again there is a new instance of displayName() is being created.

    so, here comes useCallback() hook to solve this problem, wrap the function into useCallback hook.
*/

function UseCallback() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  /*
    Difference between useMemo and useCallback

    Memoize the fuction - useCallback
    Memoize the value - useMemo
*/

  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  console.log("useMemo : ", result); // Here we will get value

  //   const displayName = () => {
  //     return name;
  //   };

  const displayName = useCallback(
    (greeting) => {
      // We can also use greeting in useCallback,like this
      return greeting + " " + name;
    },
    [name]
  );

  console.log("useCallback :", displayName); // Here we will get actual function

  return (
    <div className="App">
      <h1>
        Facotorial of {counter} is : <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr />
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <DisplayName displayName={displayName}></DisplayName>
      </div>
    </div>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("Component Redered!");
  }, [displayName]);
  return <p>{`My Name is ${value}`}</p>;
};

function factorial(num) {
  let i = 0;
  while (i < 20000000) i++;
  if (num < 0) {
    return -1;
  }
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

export default UseCallback;
