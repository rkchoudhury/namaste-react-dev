import { useState } from "react";
import ListItem from "./ListItem";

const ResturantCategory = (props) => {
  const { data, showListItems, setExpandedIndex } = props;
  const { itemCards = [], title = "" } = data;

  //Un-controlled component
  // const [showListItems, setShowListItems] = useState(false);

  // const onClickListHeader = () => {
  //   setShowListItems(!showListItems);
  // };

  const onClickListHeader = () => {
    setExpandedIndex();
  };

  return (
    <div className="w-6/12">
      <div className="p-4 bg-gray-100 my-2 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={onClickListHeader}
        >
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
