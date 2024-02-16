import { useSelector, useDispatch } from "react-redux";

import ListItem from "./ListItem";
import { clearCart } from "../redux/slices/cartSlice.js";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <div className="w-6/12 py-4">
        <div className="text-center font-bold text-2xl">Cart</div>
        {items.length > 0 && (
          <div className="flex justify-end">
            <button
              className=" bg-red-600 p-2 rounded text-white"
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </button>
          </div>
        )}
        {items.length > 0 ? (
          <ListItem data={items} />
        ) : (
          <div className="text-center font-light text-xl py-20">
            Cart is empty. Please add some items!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
