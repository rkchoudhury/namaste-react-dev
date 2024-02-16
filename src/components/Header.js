import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CART_URL, LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { items } = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between bg-pink-200 items-center shadow-lg">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center">
          {/* For emoji type => windows key + . */}
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2">
            <Link to={"/cart"}>
              <img className="w-10 h-10" src={CART_URL} />
              <span>({items?.length})</span>
            </Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
