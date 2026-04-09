import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../../Shared/state/CartSlice";

const stars = [1, 2, 3, 4, 5];

let DynamicProducts = ({ product }) => {
  const [liked, setLiked] = useState(false);
  let dispatch = useDispatch();
  let { cartItems } = useSelector((store) => store.CartItmes);
  let findproduct = cartItems.find((val) => val.id === product.id);
  let { setHiddencart } = useOutletContext();
  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-8 font-[Inter,sans-serif] relative">
      {/* Breadcrumb */}
      <div className="absolute top-6 left-8 flex items-center gap-2 text-sm text-[#aaa] cursor-pointer">
        <ChevronLeft size={14} />
        <span
          onClick={() => navigate("/main/products/all")}
          className="hover:text-white "
        >
          Products
        </span>
        <span className="text-[#555]">/</span>
        <span onClick={() => navigate(`/main/products/${product.category}`)}>
          {product.category}
        </span>
        <span className="text-[#555]">/</span>
        <span className="text-white">{product.title}</span>
      </div>

      {/* Main Layout */}
      <div className="flex gap-12 max-w-[960px] w-full items-center">
        {/* Left: Product Image */}
        <div className="flex-[0_0_420px] bg-white rounded-[20px] p-6 flex items-center justify-center min-h-[500px]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg object-cover w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 text-white">
          {/* Category Badge */}
          <span className="bg-[#2a2e1a] text-[#c8f135] px-3 py-1 rounded-full text-xs font-medium inline-block mb-4 border border-[#4a5c1a]">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-[2.2rem] font-bold leading-tight mb-3">
            {product.title}
          </h1>

          {/* Star Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-[2px]">
              {stars.map((s) => (
                <svg
                  key={s}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={s <= 4 ? "#f5a623" : "none"}
                  stroke={s <= 4 ? "#f5a623" : "#555"}
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-sm">{product.rating}</span>
            <span className="text-[#888] text-sm">
              ({product.reviews.length})
            </span>
          </div>

          <div className="border-t border-[#2a2a2a] mb-5" />

          {/* Price */}
          <div className="text-[2.2rem] font-bold text-[#c8f135] mb-5">
            ${product.price}
          </div>

          <div className="border-t border-[#2a2a2a] mb-5" />

          {/* Description */}
          <p className="text-[#aaa] text-sm leading-relaxed mb-7 max-w-[50ch]">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            {!findproduct ? (
              <button
                onClick={() => {
                  if (!findproduct) {
                    dispatch(addtocart(product));
                    let localcart = [...cartItems, product];
                    localStorage.setItem("cart", JSON.stringify(localcart));
                  }
                }}
                className="flex-1 bg-[#c8f135] text-[#111] rounded-full px-6 py-4 font-bold text-base flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => setHiddencart(false)}
                className="flex-1 bg-[#c8f135] text-[#111] rounded-full px-6 py-4 font-bold text-base flex items-center justify-center gap-2"
              >
                view in cart
              </button>
            )}

            <button
              onClick={() => setLiked(!liked)}
              className="w-[52px] h-[52px] rounded-full border border-[#333] flex items-center justify-center"
            >
              <Heart
                size={20}
                fill={liked ? "#e74c3c" : "none"}
                stroke={liked ? "#e74c3c" : "#aaa"}
              />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-3 mb-7">
            {[
              {
                icon: <Truck size={22} className="text-[#c8f135]" />,
                title: "Free Delivery",
                sub: "On orders $50+",
              },
              {
                icon: <Shield size={22} className="text-[#c8f135]" />,
                title: "Secure Pay",
                sub: "256-bit SSL",
              },
              {
                icon: <RotateCcw size={22} className="text-[#c8f135]" />,
                title: "Easy Returns",
                sub: "30-day policy",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="flex-1 bg-[#161616] border border-[#2a2a2a] rounded-[14px] px-3 py-4 flex flex-col items-center gap-1 text-center"
              >
                {b.icon}
                <span className="text-white font-semibold text-xs">
                  {b.title}
                </span>
                <span className="text-[#666] text-[0.75rem]">{b.sub}</span>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (product.id != 1)
                  navigate(`/main/products/${product.id - 1}`);
              }}
              className="flex-1 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-full px-6 py-3 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <button
              onClick={() => navigate(`/main/products/${product.id + 1}`)}
              className="flex-1 bg-[#c8f135] text-[#111] rounded-full px-6 py-3 font-bold text-sm flex items-center justify-center gap-2"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DynamicProducts;
