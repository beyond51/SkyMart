import { CarTaxiFront } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[8%] bg-black p-3 flex items-center justify-between px-8">
      <div className="self-start text-xl">
        <h1 className="text-white">
          Sky <span className="text-yellow-400">Mart</span>
        </h1>
      </div>
      <div className="flex gap-2 text-white">
        <NavLink to={"/home"}>home</NavLink>
        <NavLink to={"products"}>shop</NavLink>
        <NavLink to={"about"}>about</NavLink>
      </div>
      <div className="text-white">
        <CarTaxiFront />
      </div>
    </div>
  );
};

export default Navbar;
