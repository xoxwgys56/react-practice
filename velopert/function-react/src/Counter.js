import React, {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            // 아래 코드는 에러 발생
            // return state => state > 0 ? state - 1 : state;
            // return state => {
            //     if (state > 0)
            //         return state - 1;
            //     else
            //         return state;
            // }
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);

    // const onIncrease = () => setNumber(prevNumber => prevNumber + 1);
    // const onDecreate = () => setNumber(prevNumber => prevNumber > 0 ? prevNumber - 1 : prevNumber);
    const onIncrease = () => dispatch({type: 'INCREMENT'});
    const onDecrease = () => dispatch({type: 'DECREMENT'});

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}

export default Counter;