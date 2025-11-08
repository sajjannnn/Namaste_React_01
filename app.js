 import React from "react";
 import ReactDOM from "react-dom/client";

 const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo"  src="https://imgs.search.brave.com/Z5Q-Bjeb6aYMFDG-R6kiNQKirzDwDG34YBK9x0fqh9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFdHdr/b09oc0EvMS8wLzE2/MDB3L2NhbnZhLXll/bGxvdy1hbmQtYmxh/Y2stZnVuLW1vZGVy/bi1yZXN0YXVyYW50/LWZvb2QtbG9nby1W/RUFveUpQMHU3QS5q/cGc" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
 }


 const ResCard = () => {
  return (
    <div className="res-card">
      <img className="card-log" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/b3d5b586-905d-4522-a10f-8e81a9f90fd1_b7894091-d7a5-4698-b9cb-b5544576a702.jpg"/>
      <h4>Domino's Pizza</h4>
      <h4>4.4 star</h4>
      <h4>Connaught Place</h4>
    </div>
  )
 }


 
 const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="card-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>

    </div>
  )
 }
 const Footer = () => {
  return (
    <div className="footer">


    </div>
  )
 }





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