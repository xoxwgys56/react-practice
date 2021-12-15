import React from "react";

type GreetingProps = {
  name: string;
  mark?: string;
  onClick?: (name: string) => void;
};

// 아래 방법을 쓰면, props 빈 상태로 넘겨주면 컴파일 에러가 발생한다.
// defaultProps 무시하기 때문에, 사용이 권고되지 않는다.
// const Greeting: React.FC<GreetingProps> = ({ name = "unknown" }) => {

const Greeting = ({ name = "unknown" }: GreetingProps) => {
  return <div>Hello {name}</div>;
};

Greeting.defaultProps = {
  name: "unknown",
};

export default Greeting;
