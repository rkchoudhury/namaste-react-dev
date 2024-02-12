import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResturantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Calling custom hooks
  const resInfo = useRestaurantMenu(resId);

  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
    locality = "",
    city = "",
  } = resInfo?.cards?.[0]?.card?.card?.info ?? {};

  console.log(resInfo?.cards?.[0]?.card?.card?.info);

  const { cards = [] } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR ?? {};

  const categories = cards.filter(
    (eachCategory) => eachCategory?.card?.card?.itemCards?.length > 0
  );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center m-6">
      <h1 className="text-2xl font-bold">{name}</h1>
      <span className="font-extralight text-sm">{cuisines.join(", ")}</span>
      <span className="font-extralight text-sm">
        {locality}, {city}
      </span>
      <div className="border-dashed border-[1px] border-gray-500 w-6/12 my-4"></div>

      {categories.map((eachCategory) => {
        // const { itemCards = [], title = "" } = eachCategory?.card?.card;
        // return (
        //   itemCards?.length > 0 && (
        //     <div key={title || Math.random() * 1000} className="m-4">
        //       <h3 className="font-medium">{title}</h3>
        //       <ul>
        //         {itemCards?.map((eachItem) => {
        //           const { id, name, price, defaultPrice } = eachItem.card.info;
        //           return (
        //             <li key={id} className="m-2">
        //               {name} - Rs. {price / 100 || defaultPrice / 100}
        //             </li>
        //           );
        //         })}
        //       </ul>
        //     </div>
        //   )
        // );

        return <ResturantCategory data={eachCategory?.card?.card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
