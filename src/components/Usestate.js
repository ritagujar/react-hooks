import React from "react";
import { useState } from "react";

// Rules to use useState ------
// Can't use in conditional cases like if-else
// Can't use insite the functions and conditional rendering
// Whenever the value of the State changes  the component rerenders

function Usestate() {
  const [name, setName] = useState("React");
  // Use Boolean in the useState
  const [flag, setFlag] = useState(false);
  // Use Numbers in the useState
  const [steps, setSteps] = useState(0);
  // Use Array in the useState
  const [names, setNames] = useState([]);

  const nameChange = () => {
    console.log("Clicked");
    // return setName("Learner");
    return setFlag(!flag);
  };

  const increament = () => {
    return setSteps(steps + 1);

    // To increament the value by 2 use prevState which stores the previous state
    // Use prevState in order to make use of previous state
    // setSteps((prevState) => prevState + 1);
    // setSteps((prevState) => prevState + 1);
  };

  const decreament = () => {
    return setSteps(steps - 1);
  };

  const addName = (e) => {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  };

  return (
    <div>
      {/* <div>Hello, {name}</div> */}
      <div>Hello {flag ? name : ""}</div>
      <button onClick={nameChange}>Click me</button>
      <hr />
      <button onClick={increament}>+</button>
      <div>{steps}</div>
      <button onClick={decreament}>-</button>

      <hr />
      <form onSubmit={addName}>
        <input
          type="text"
          value={name}
          placeholder="Add Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usestate;
