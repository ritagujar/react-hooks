import React, { useState } from "react";
import "./App.css";
import Usestate from "./components/Usestate";

// Rules to use useState ------
// Can't use in conditional cases like if-else
// Can't use insite the functions and conditional rendering

// Whenever the value of the State changes  the component rerenders

function App() {
  return (
    <>
      <Usestate />
    </>
  );
}

export default App;
