import React, { useMemo, useState } from "react";

/* 
    1. Optimize expensive operation
    2. Referential equality
*/

function UseMemo() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

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
        <DisplayName name={name}></DisplayName>
      </div>
    </div>
  );
}

const DisplayName = React.memo(({ name }) => {
  console.log("render");
  return <p>{`My Name is ${name}`}</p>;
});

function factorial(num) {
  let i = 0;
  while (i < 20000000) i++; // This two lines will slow down the operation so here we can use useMemo() funtion which will memoize the heavy operation
  if (num < 0) {
    return -1;
  }
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

export default UseMemo;
