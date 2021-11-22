/* @jsx createElement */
import { createElement, render, Component } from "./react.js";

class YourTitle extends Component {
    render() {
        return (
            <p>나는 타이틀이 되고 싶어용.</p>
        );
    }
}

function Title() {
    return (
        <div>
            <h2>정말 동작할까나?</h2>
            <YourTitle />
            <p>잘 동작하는지 보고 싶어.</p>
        </div>
    );
}

render(<Title/>, document.querySelector("#root"));