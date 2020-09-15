import React from "react";

enum Turtle {
  farm = "farm",
  monkey = "monkey",
}

const mouse = (turtle: Turtle.farm | Turtle.monkey) => {
  console.log(turtle);
};

mouse(Turtle.monkey);

export default function App() {
  return <h1>Hello, world!</h1>;
}
