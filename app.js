 import React from "react";
 import ReactDOM from "react-dom/client";
 

 const Func = () => {
   return <h2> this is functional component</h2>
 }

const JSXheading = <h1 id="heading">Hello World from React using JSX!</h1>;


const Funt2 = () =>{
  return <div>
        <Func />
        {JSXheading}
        <h3>This is the function composition</h3>
    </div>
}


Funt2();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Funt2 />);