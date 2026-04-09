import { MoveRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-gray-700">
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-5 max-w-lg">
        <h1 className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
          Good Morning
        </h1>

        <div className="leading-tight">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Welcome back,
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-300">
            Keshav!
          </h1>
        </div>

        <p className="text-gray-400 text-sm md:text-base">
          Discover amazing products, exclusive deals, and seamless shopping
          experience tailored just for you.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-2 flex-wrap">
          <button
            onClick={() => navigate("/main/products/all")}
            className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Shop Now <MoveRight size={18} />
          </button>

          <button className="px-5 py-2.5 rounded-xl border border-gray-600 text-white hover:bg-gray-700 transition">
            View Products
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="bg-gray-800/60 backdrop-blur-md px-6 py-4 rounded-2xl text-center border border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
            20+
          </h1>
          <p className="text-gray-400 text-sm">Products Available</p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md px-6 py-4 rounded-2xl text-center border border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Free
          </h1>
          <p className="text-gray-400 text-sm">Delivery on ₹999+</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
