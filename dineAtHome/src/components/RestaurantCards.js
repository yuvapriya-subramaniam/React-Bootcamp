import React from "react";
import "./RestaurantCards.css";

const RestaurantCards = ({ restaurants }) => {
  
  return (
    <div id="restaurantContainer" className="restaurants">
      {restaurants &&
        restaurants.map((restaurant) => {
          let data = restaurant.card?.card?.info;
          let imgSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${data.cloudinaryImageId}`;
          return (
            <div key={data.id} id="restaurant" className="restaurantCard">
              <div id="meta_img" className="restaurantItems">
                <img src={imgSrc} alt="res" className="restaurantImg" />
              </div>
              <div id="meta_details" className="restaurantItems">
                <div>{data.name}</div>
                <div>{data.avgRatingString}</div>
                <div>{data.cuisines?.join(", ")}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCards;
