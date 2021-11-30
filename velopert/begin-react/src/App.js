import React from "react";
import Hello from "./Hello";
import Wrapper from './Wrapper';
import "./App.css";

function App() {
    const name = "react";
    const style = {
        background: "black",
        color: "aqua",
        fontSize: 24,
        padding: "1rem"
    };

    return (
        <Wrapper>
            <Hello name={name} style={style} isSpecial/>
            <Hello style={style}/>
            <div className="gray-box"></div>
        </Wrapper>
    );
}

export default App;
