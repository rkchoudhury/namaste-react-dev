import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Calling custom hooks
  const resInfo = useRestaurantMenu(resId);

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
    <div className="m-2">
      <h1 className="font-bold">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="font-semibold m-4">Menu</h2>
      {cards.map((eachCard) => {
        const { itemCards = [], title = "" } = eachCard?.card?.card;
        return (
          itemCards?.length > 0 && (
            <div key={title || Math.random() * 1000} className="m-4">
              <h3 className="font-medium">{title}</h3>
              <ul>
                {itemCards?.map((eachItem) => {
                  const { id, name, price, defaultPrice } = eachItem.card.info;
                  return (
                    <li key={id} className="m-2">
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
