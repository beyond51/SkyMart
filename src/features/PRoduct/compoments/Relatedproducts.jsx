import React from "react";
import ProductCard from "./PRoductcard";
import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../../home/api/CategoryApi";

const Relatedproducts = ({ elem }) => {
  let { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => categoryApi(elem.category),
    staleTime: 50000,
    enabled: !!elem,
  });
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {data?.data.products.map((val) => (
        <ProductCard product={val} />
      ))}
    </div>
  );
};

export default Relatedproducts;
