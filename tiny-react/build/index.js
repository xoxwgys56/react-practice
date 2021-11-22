/* @jsx createElement */
import { createElement, render, Component } from "./react.js";

class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uB098\uB294 \uD0C0\uC774\uD2C0\uC774 \uB418\uACE0 \uC2F6\uC5B4\uC6A9.");
  }

}

function Title() {
  return createElement("div", null, createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791\uD560\uAE4C\uB098?"), createElement(YourTitle, null), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0 \uC2F6\uC5B4."));
}

render(createElement(Title, null), document.querySelector("#root"));