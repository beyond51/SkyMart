import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchProduct } from "../../../Shared/state/SearchSlice";
import { useLocation, useNavigate } from "react-router";

const Search = ({ product }) => {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();
  let searchFn = (e) => {
    setInput(e.target.value);
  };
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      if (input !== "") dispatch(SearchProduct(input));
      return;
    }, 1000);
    if (input === "") dispatch(SearchProduct(input));
    return () => clearTimeout(timer);
  }, [input]);
  // const uniqueCategories = [...new Set(product?.map((p) => p.category))];

  return (
    <div className="text-white w-full flex flex-col gap-5 p-3">
      <div>
        <h1 className="text-4xl font-semibold tracking-wider">All products</h1>
        <p className="text-gray-500">{product?.length} products found</p>
      </div>
      <div className="flex items-center justify-between w-full border p-4 rounded-2xl">
        <div className="flex gap-1 w-2/3 items-center border rounded-2xl border-gray-700 px-4">
          <SearchIcon size={18} />
          <input
            onChange={searchFn}
            className="outline-0  w-full p-3"
            type="text"
            placeholder="search here"
          />
        </div>
        <div className="w-1/3 flex gap-6 items-center justify-center">
          <select
            onChange={(e) => {
              if (e.target.value === "all categories") {
                navigate("/main/products/all");
              } else {
                navigate(`/main/products/${e.target.value}`);
              }
            }}
            className="bg-gray-800 text-white px-2 py-2 rounded-lg"
          >
            {/* <option disabled>categories</option>
            {uniqueCategories?.map((elem) => (
              <option key={elem}>{elem}</option>
            ))} */}
            <option>all categories</option>
            <option>beauty</option>
            <option>fragrances</option>
            <option>furniture</option>
            <option>groceries</option>
          </select>
          <select className="bg-gray-800 text-white px-2 py-2 rounded-lg">
            <option>categories</option>
          </select>
          {location.pathname !== "/main/products/all" && (
            <button
              onClick={() => navigate("/main/products/all")}
              className="border border-red-500 text-red-500 py-2 px-3 rounded-xl flex text-sm gap-1"
            >
              clear X
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
