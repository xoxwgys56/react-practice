import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

const App: React.FC = () => {
  return (
    <>
      <Greeting name="dw" />
      <Greeting />
    </>
  );
};

export default App;
