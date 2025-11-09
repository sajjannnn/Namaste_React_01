 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Footer from "./components/Footer"


// const url ="https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
// fetch(url)
// .then (res => res.json())
// .then (data => console.log(data))
// .catch (error => console.log("Error:", error));
// console.log(res); 


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);