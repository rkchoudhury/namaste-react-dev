import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { GET_RESTAURANT_URL, CORS_PROXY_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Enable the Cors proxy from the chrome extensions
    const response = await fetch(GET_RESTAURANT_URL);

    // const response = await fetch(`${CORS_PROXY_URL}${GET_RESTAURANT_URL}`);

    const jsonResponse = await response.json();

    const resturants =
      jsonResponse?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    setListOfRestaurants(resturants);
  };

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
