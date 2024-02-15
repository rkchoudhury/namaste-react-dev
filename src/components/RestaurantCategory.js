import { useState } from "react";
import ListItem from "./ListItem";

const ResturantCategory = (props) => {
  const { itemCards = [], title = "" } = props.data;
  const [showListItems, setShowListItems] = useState(false);

  const onClickListHeader = () => {
    setShowListItems(!showListItems);
  };

  return (
    <div className="w-6/12">
      <div className="p-4 bg-gray-100 my-2 shadow-lg">
        <div className="flex justify-between" onClick={onClickListHeader}>
          <span className="font-medium text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{showListItems ? "🔼" : "🔽"}</span>
        </div>
        {showListItems && <ListItem data={itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
