import React from "react";
import Hello from "./Hello";
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
        <>
            <Hello name={name}/>
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
        </>
    );
}

export default App;
