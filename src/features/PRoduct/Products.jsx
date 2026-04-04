import axios from "axios";
import React, { useEffect, useState } from "react";
import PRoductcard from "./PRoductcard";

const Products = () => {
  const [product, setproduct] = useState([]);
  let productapi = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    setproduct(res.data.products);
  };
  useEffect(() => {
    productapi();
  }, []);
  return (
    <div className="flex flex-wrap gap-3 p-2">
      {product?.map((elem, idx) => (
        <PRoductcard elem={elem} key={idx} />
      ))}
    </div>
  );
};

export default Products;
