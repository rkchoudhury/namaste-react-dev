import React from "react";
import ReactDOM from "react-dom/client";

import { restaurants } from "./restaurantData";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img
              className="cart-icon"
              src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-shopping-cart-icon-png-image_313581.jpg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (data) => {
  const { resData } = data;
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
