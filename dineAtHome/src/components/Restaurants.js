import React from 'react'

const Restaurants = (restaurants) => {
    return (
        <main id="mainContainer" className="main">
          <div id="searchContainer" className="search">
            <input type="text" id="searchApp" className="search" placeholder="Search cuisines"/>
            {/* <label for="searchApp"><input type="submit" id="searchSubmit" className="search" value="Search"/></label> */}
          </div>
          <div id="restaurantContainer" className="restaurants">
            {console.log(restaurants)}
          </div>
        </main>
      )
}

export default Restaurants