import { useDispatch } from "react-redux";

import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/slices/cartSlice";

const ListItem = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return data.map((item) => {
    const { name, description, imageId, price, defaultPrice, isVeg, id } =
      item.card.info;

    return (
      <div
        key={id}
        data-testid="resMenuItem"
        className="border-b-2 border-gray-300 py-10 flex justify-center"
      >
        <div className="w-10/12">
          <h1 className="font-medium text-lg text-gray-700">
            {name} {isVeg ? "🟩" : "🟥"}
          </h1>
          <p className="text-sm text-gray-700">
            ₹ {price / 100 || defaultPrice / 100}
          </p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="w-2/12 relative">
          <div className="absolute bottom-2">
            <img
              src={`${CDN_URL}/${imageId}`}
              className="rounded-2xl"
              alt="food-item"
            />
          </div>
          <div className="absolute bottom-0 left-9">
            <button
              onClick={() => handleAddClick(item)}
              className="py-1 px-2 border-2 border-pink-500 text-pink-500 font-semibold bg-white rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default ListItem;
