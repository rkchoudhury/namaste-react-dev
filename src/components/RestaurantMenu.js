import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${RESTAURANT_MENU_URL}${resId}`);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards?.[0]?.card?.card?.info ?? {};

  const { cards = [] } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR ?? {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {cards.map((eachCard) => {
        const { itemCards = [], title = "" } = eachCard?.card?.card;
        return (
          itemCards?.length > 0 && (
            <div key={title || Math.random() * 1000}>
              <h3>{title}</h3>
              <ul>
                {itemCards?.map((eachItem) => {
                  const { id, name, price, defaultPrice } = eachItem.card.info;
                  return (
                    <li key={id}>
                      {name} - Rs. {price / 100 || defaultPrice / 100}
                    </li>
                  );
                })}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
