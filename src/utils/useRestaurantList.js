import { useState, useEffect } from "react";

import { GET_RESTAURANT_URL, CORS_PROXY_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Approch 1: Enable the Cors proxy from the chrome extensions
    const response = await fetch(GET_RESTAURANT_URL);

    // Approch 2: Without chrome extensions
    // const response = await fetch(`${CORS_PROXY_URL}${GET_RESTAURANT_URL}`);

    const jsonResponse = await response.json();

    const resturants =
      jsonResponse?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    setRestaurantList(resturants);
  };

  return restaurantList;
};

export default useRestaurantList;
