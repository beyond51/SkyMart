import { MoveRight, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Cartproducts from "./Cartproducts";
import { emptyCart } from "../state/CartSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Cart = ({ setHiddencart, boxRef }) => {
  let { cartItems } = useSelector((store) => store.CartItmes);

  let navigate = useNavigate();
  let price = 0;
  for (let a = 0; a < cartItems.length; a++) {
    price += cartItems[a].price * (cartItems[a].qauntity || 1);
  }
  let dispatch = useDispatch();
  return (
    <div
      ref={boxRef}
      className="text-white absolute  top-0 h-screen border w-100 bg-black flex flex-col items-center p-3"
    >
      <div className="h-[10%] flex justify-between w-full border-b p-3 items-center cursor-pointer">
        <div className="flex gap-2 items-center">
          <ShoppingCart color="yellow" />
          <h1 className="text-xl font-semibold capitalize">cart</h1>
          <button className="text-xs rounded-full border px-1.5 py-0.2 text-yellow-400 font-semibold">
            {cartItems.length} items
          </button>
        </div>
        <h1
          onClick={() => setHiddencart(true)}
          className="text-xl hover:text-red-500 "
        >
          X
        </h1>
      </div>
      <div className="h-[70%] border-b w-full flex flex-col p-3 overflow-auto gap-1">
        {cartItems.length < 1 ? (
          <h1
            onClick={() => setHiddencart(true)}
            className="text-xl cursor-pointer"
          >
            your cart is empty...{" "}
            <span className="text-sm hover:underline">shop now</span>
          </h1>
        ) : (
          cartItems?.map((val) => (
            <Cartproducts key={val.title} product={val} />
          ))
        )}
      </div>
      <div className="flex flex-col h-[20%] w-full p-3 gap-2 cursor-pointer">
        <div className="flex items-center justify-between p-3">
          <h1>Total:</h1>
          <h1>${price.toFixed(2)}</h1>
        </div>
        <button
          disabled={cartItems.length === 0}
          onClick={() => {
            navigate("/main/products/all");
            setHiddencart(true);
            dispatch(emptyCart());
            localStorage.removeItem("cart");
            toast.success("order placed successfully (dummmy order)");
          }}
          className={
            cartItems.length === 0
              ? "flex w-full bg-gray-500 font-semibold items-center justify-center p-2 rounded-xl gap-1"
              : "flex w-full bg-yellow-500 font-semibold items-center justify-center p-2 rounded-xl gap-1"
          }
        >
          Checkout <MoveRight />
        </button>
        <h1
          onClick={() => {
            dispatch(emptyCart());
            localStorage.removeItem("cart");
          }}
          className="self-center text-xs"
        >
          clear cart
        </h1>
      </div>
    </div>
  );
};

export default Cart;
