import logo from "./logo.svg";
import CheckBox from "./components/CheckBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div className="App">
      <CheckBox onChange={onChange} checked={check}>
        Select all below checkbox for assignment.
      </CheckBox>
      <p>
        <b>check : </b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
}

export default App;
