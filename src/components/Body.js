import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const isOnline = useOnlineStatus();
  const listOfRestaurants = useRestaurantList();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    if (listOfRestaurants.length > 0) {
      setFilteredRestaurants(listOfRestaurants);
    }
  }, [listOfRestaurants]);

  useEffect(() => {
    if (listOfRestaurants.length > 0) {
      const filteredData = listOfRestaurants.filter((restaurantData) =>
        restaurantData?.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    }
  }, [searchText]);

  if (!isOnline) {
    return <h1>Looks like you are offline!!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="bg-slate-400 flex py-4 justify-center">
        <div className="px-4">
          <input
            type="text"
            data-testid="searchInput"
            className="rounded-[200px] w-[400px] h-10 px-4 focus:outline-none focus:border-2 focus:border-sky-400"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          className="cursor-pointer rounded-lg px-2 bg-pink-300 text-slate-50"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center m-5">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="flex"
          >
            {restaurant?.info?.promoted ? (
              <RestaurantPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
