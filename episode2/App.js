import React from "React"
import ReactDOM from "React-DOM/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
// const test = ReactDOM.createRoot(document.getElementById("test"));
const heading = React.createElement(
  "h1",
  { id: "pageHeading", className: "heading" },
  "Hello World from React!"
);
const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child1"},[
            React.createElement("h2",{},"Child1 heading"),
            React.createElement("h3",{},"hello child1")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h2",{},"Child2 heading"),
            React.createElement("h3",{},"hello child2")
        ])
    ]
);

root.render([heading, parent]);
// test.render(parent);
