import React from "react";
import "./SearchFilter.css";
// import Button from "@mui/material/Button";
const SearchFilter = ({ restaurants, update }) => {
  return (
    <div id="searchFilter" className="searchContainer">
      <div id="topRated" className="topRatedContainer">
        <input type="button" value="Top Rated Restaurants" className="filterBtn"
          onClick={() =>
            update(
              restaurants.filter(
                (restaurant) => restaurant.card?.card?.info?.avgRating > 4.5
              )
            )
          }
        />        
      </div>
    </div>
  );
};

export default SearchFilter;
