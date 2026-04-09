import React from "react";
import { useSelector } from "react-redux";

const AllProducts = () => {
  let { allproducts } = useSelector((store) => store.Allproducts);

  return (
    <>
      {allproducts?.map((elem, idx) => (
        <ProductCard product={elem} key={idx} />
      ))}
    </>
  );
};

export default AllProducts;
