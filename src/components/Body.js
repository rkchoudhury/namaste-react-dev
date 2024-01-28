import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { GET_RESTAURANT_URL, CORS_PROXY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(resturants);
  };

  useEffect(() => {
    const filteredData = listOfRestaurants.filter((restaurantData) =>
      restaurantData?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  }, [searchText]);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
