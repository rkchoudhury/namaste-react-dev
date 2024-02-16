import { useSelector } from "react-redux";

import ListItem from "./ListItem";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-center">
      <div className="w-6/12 py-4">
        <div className="text-center font-bold text-2xl">Cart</div>
        <ListItem data={items} />
      </div>
    </div>
  );
};

export default Cart;
