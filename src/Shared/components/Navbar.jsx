import { CardSim, LogOut, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { setlogin } from "../state/Islogin";

const Navbar = ({ setHiddencart }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { user } = JSON.parse(localStorage.getItem("islogin"));
  return (
    <div className="w-[80%] cursor-pointer bg-black/90 backdrop-blur-md border-gray-800 px-6 md:px-10 py-3 flex items-center justify-between shadow-md">
      {/* LOGO */}
      <div className="text-2xl font-bold tracking-wide">
        <h1 className="text-white">
          Sky<span className="text-yellow-400">Mart</span>
        </h1>
      </div>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-sm md:text-base font-medium">
        <NavLink
          to="home"
          className={({ isActive }) =>
            `capitalize transition ${
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "text-gray-300 hover:text-yellow-300"
            }`
          }
        >
          home
        </NavLink>

        <NavLink
          to={`products/all`}
          className={({ isActive }) =>
            `capitalize transition ${
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "text-gray-300 hover:text-yellow-300"
            }`
          }
        >
          shop
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) =>
            `capitalize transition ${
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "text-gray-300 hover:text-yellow-300"
            }`
          }
        >
          about
        </NavLink>
      </div>

      <div className="flex items-center gap-2 bg-black">
        <div className="flex items-center gap-3 border  border-gray-700 rounded-xl px-2 py-1 bg-gray-900 hover:bg-gray-800 transition">
          <div className="w-8 h-8 capitalize flex items-center justify-center rounded-lg bg-lime-400 text-black font-bold">
            {user?.charAt(0)}
          </div>

          <h1 className="text-gray-300 text-sm font-medium capitalize">
            {user}
          </h1>
        </div>

        <button
          onClick={() => setHiddencart(false)}
          className="p-3 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          <ShoppingCart size={18} />
        </button>

        <button
          onClick={() => {
            navigate("/");
            dispatch(setlogin());
            const isloginobj = {
              islogin: false,
              user: null,
            };
            localStorage.setItem("islogin", JSON.stringify(isloginobj));
          }}
          className="p-3 border border-gray-700 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition"
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
