import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router";
import { fetchsingleProduct } from "../apis/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../../Shared/state/CartSlice";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { cartItems } = useSelector((store) => store.CartItmes);
  let finditems;
  if (cartItems.length > 0)
    finditems = cartItems.find((val) => val.id === product.id);

  let { setHiddencart } = useOutletContext();
  let navigateptoproduct = () => {
    navigate(`/main/products/${product.id}`);
  };
  let addtocartFn = () => {
    if (!finditems) {
      dispatch(addtocart(product));
      let localcart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(localcart));
    }
    setHiddencart(false);
  };

  return (
    <div className="bg-gray-600 text-white rounded-2xl p-4 w-55 h-fit  hover:shadow-lg hover:scale-[1.02] transition border border-gray-800">
      <div onClick={navigateptoproduct}>
        {/* IMAGE */}
        <div className="w-full h-40 flex items-center justify-center bg-gray-800 rounded-xl mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

        {/* CATEGORY */}
        <p className="text-xs text-gray-400 uppercase mb-1">
          {product.category}
        </p>

        {/* TITLE */}
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>

        {/* RATING */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
          <Star size={16} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        {/* PRICE + STOCK */}
        <div className="flex items-center justify-between mt-3">
          <h1 className="text-xl font-bold text-yellow-400">
            ${product.price}
          </h1>

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              product.availabilityStatus === "In Stock"
                ? "bg-green-600/20 text-green-400"
                : "bg-red-600/20 text-red-400"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>
      </div>

      {/* BUTTON */}
      {finditems ? (
        <button className="w-full mt-4 bg-gray-500 text-black py-2 rounded-xl font-medium">
          Added
        </button>
      ) : (
        <button
          onClick={addtocartFn}
          className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-xl font-medium hover:bg-yellow-300 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
