import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <p className="title-text">{name}</p>
      <div className="rating-time-container">
        <div>
          <p className="title-text">{avgRating} stars</p>
        </div>
        <div>
          <p className="title-text">{sla.slaString}</p>
        </div>
      </div>
      <p className="sub-title-text">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
