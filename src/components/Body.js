import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import { GET_RESTAURANT_URL, CORS_PROXY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Looks like you are offline!!</h1>;
  }

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
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            style={{ display: "flex" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
