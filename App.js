// const heading=React.createElement("h1",
// {id:"heading" ,xyz:"abc"},
// "Hello World from React!");
// console.log(heading);//object
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

//1.
// /* <div id="parent">
//     <div id="child">
//         <h1>I'm in h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>

// </div> */
// const parent=React.createElement(
//     "div",{id:"parent"},React.createElement("div",{
//         id:"child"},[React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")]
//         )
// );
// console.log(parent);//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//2.
/* <div id="parent">
    <div id="child">
        <h1>I'm in h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm in h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>

</div> */
const parent=React.createElement(
    "div",{id:"parent"},[React.createElement("div",{
        id:"child"},[React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")]
        ),React.createElement("div",{
            id:"child"},[React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag")]
            )]
);
//It is complicated so we will use jsx to make our life  easier
console.log(parent);//object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

