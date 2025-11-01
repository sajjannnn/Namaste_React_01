 const heading = React.createElement(
    "h1", 
    { id : "heading"},  // this contains attributes like id , classname
    "Hello World from React!"
);

//heading is js object , not a h1 element


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);