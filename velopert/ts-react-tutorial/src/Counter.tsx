import React, { useState, useReducer } from "react";

type ActionType = "INCREASE" | "DECREASE";
type Action = { type: ActionType };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}

const Counter = () => {
  // const [counter, setCounter] = useState<number>(0);
  // const onIncrease = () => setCounter(counter + 1);
  // const onDecrease = () => setCounter(counter > 0 ? counter - 1 : counter);
  const [counter, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  type Information = { name: string; description: string };
  // union(null, not null) 경우, Generic 사용하면 좋음.
  const [info, setInfo] = useState<Information | null>(null);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={onIncrease}>increase</button>
        <button onClick={onDecrease}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
