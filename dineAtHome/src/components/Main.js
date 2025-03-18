import React from 'react'
import RestaurantCards from './RestaurantCards'
import SearchFilter from "./SearchFilter";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Main = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let initialData = []
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.0843007&lng=80.2704622&str=South%20Indian&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=d92fd02f-6cf4-2d05-a8d7-08dda5eb5016&metaData=%7B%22type%22%3A%22CUISINE%22%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Cuisine%22%7D")
      const jsonData = await data.json();
      initialData = jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      setRestaurantsData(initialData);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  const updateRestaurants = (res) => setRestaurantsData(res)
    return (
        <main id="mainContainer" className="main">
          {isLoading && <Shimmer />}
          <SearchFilter restaurants={restaurantsData} update={updateRestaurants}/>
          <RestaurantCards restaurants={restaurantsData}/>
        </main>
      )
}

export default Main