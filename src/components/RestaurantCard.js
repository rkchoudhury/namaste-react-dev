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
