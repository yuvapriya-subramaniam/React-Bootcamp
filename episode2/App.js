/*It's tedious and hard to read if we create HTML elements like this.
*Hence the use of JSX(Javascript XML)
*basic element creation
*   <h1>Hello World from React!</h1>
*nested element creation
*   <h1>Hello World from React!</h1>
*   <div id="parent">
*       <div="child">
*           <h2>Hello!</h2>
*       </div>
*   </div>
*nesting multiple children
*   <h1>Hello World from React!</h1>
*   <div id="parent">
*       <div="child1">
*           <h2>Child1 heading</h2>
*           <h3>hello child1</h3>
*       </div>
*       <div="child2">
*           <h2>Child2 heading</h2>
*           <h3>hello child2</h3>
*       </div>
*   </div>
*   
*
*/

/*basic element creation
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "pageHeading", className: "heading", key:"4"},
  "Hello World from React!"
);
root.render(heading);
*/

/*nested element creation

const parent = React.createElement(
  "div",
  { id: "parent", key:"2" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h2", {}, "Hello!")
  )
);
console.log(parent);

root.render([heading, parent]);
*/

/*nesting multiple children*/
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
