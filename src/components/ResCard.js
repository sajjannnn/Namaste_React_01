import { CDN_url } from "../utlis/constants";

const ResCard = (props) => {

  const {name,costForTwo,cuisines,avgRating,sla,cloudinaryImageId} = props.info;
  return (
    <div className="res-card">
      <img className="card-log" src={CDN_url+cloudinaryImageId}/>
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  )
 }

 export default ResCard;