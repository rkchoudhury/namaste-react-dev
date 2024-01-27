import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockRestaurantData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
