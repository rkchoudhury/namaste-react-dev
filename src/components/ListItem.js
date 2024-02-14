import { CDN_URL } from "../utils/constants";

const ListItem = (props) => {
  const { name, description, imageId, price, defaultPrice, isVeg } =
    props.data.info;

  return (
    <div className="border-b-2 border-gray-300 py-10 flex justify-center">
      <div className="w-10/12">
        <div>{isVeg ? "🟩" : "🟥"}</div>
        <h1 className="font-medium text-lg text-gray-700">{name}</h1>
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
          <button className="py-1 px-2 border-2 border-pink-500 text-pink-500 font-semibold bg-white rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
