import React from 'react'
import RestaurantCards from './RestaurantCards'

const Main = (props) => {
    let restaurantsList=props.restaurants
    return (
        <main id="mainContainer" className="main">
          <RestaurantCards restaurants={restaurantsList}/>
        </main>
      )
}

export default Main