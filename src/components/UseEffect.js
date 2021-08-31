import React, { useEffect, useState } from "react";
import "../App.css";

function UseEffect() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  useEffect(() => {
    console.log("Component mounted and updated...");
  }, []);

  //  If you want to call your useEffect function only once when the  component is mounted you can only pass empty array [].
  //  If you want to call useEffect on a percular state you can pass any dependency of the state variable as a parameter.
  //  Like -- [time] or [message].

  const showDate = () => {
    setTime(new Date().toString());
  };
  return (
    <div className="App">
      <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={() => setMessage("Changed Functional Commponent")}>
          Change Message
        </button>
      </div>
    </div>
  );
}

export default UseEffect;
