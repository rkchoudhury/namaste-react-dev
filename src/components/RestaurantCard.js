import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = resData.info;

  return (
    <div className="p-[10px] m-[5px] bg-slate-200 w-[200px] rounded-lg hover:bg-slate-300">
      <img
        className="h-[180px] w-[200px] rounded-xl"
        alt="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <p className="font-bold line-clamp-2">{name}</p>
      <div className="flex justify-between">
        <div>
          <p className="font-medium">{avgRating} stars</p>
        </div>
        <div>
          <p className="font-medium">{sla.slaString}</p>
        </div>
      </div>
      <p className="font-extralight line-clamp-2">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;

// HOC
export const withPromotedLabel = (RestaurantCard) => {
  // Returns a Component which is a functional component (basically a function)
  return (props) => (
    <div className="flex">
      <label className="absolute bg-green-800 text-white ml-1 mt-6 p-1 rounded-r-sm">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};
