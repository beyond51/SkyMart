import Search from "./Search.jsx";
import ProductCard from "./PRoductcard.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchallproducts, fetchsingleProduct } from "../apis/ProductApi.jsx";
import { useParams } from "react-router";
import { categoryApi } from "../../home/api/CategoryApi.jsx";
import { useSelector } from "react-redux";
import { SearchApi } from "../apis/SearchApi.jsx";
import DynamicProducts from "./DynamicProducts.jsx";
import Relatedproducts from "./Relatedproducts.jsx";
const Products = () => {
  let { id } = useParams();
  let { search } = useSelector((store) => store.SearchProduct);
  const { data, isPending } = useQuery({
    queryKey: ["products", id, search],
    queryFn: () => {
      if (id === "all") {
        return search ? SearchApi(search) : fetchallproducts();
      } else if (id > 0) {
        return fetchsingleProduct(id);
      } else {
        return categoryApi(id);
      }
    },
    staleTime: 10000,
    enabled: !!id || !!search,
  });
  return (
    <div className="flex flex-col items-center justify-between gap-3 p-2">
      {id > 0 && data?.data ? (
        <div className="text-white min-h-screen grid grid-rows-1 gap-3">
          <DynamicProducts product={data?.data} />
          <div className="grid grid-rows-1 gap-3">
            <h1 className="text-2xl font-semibold capitalize">
              realated products:
            </h1>
            <Relatedproducts elem={data?.data} />
          </div>
        </div>
      ) : (
        <>
          <div className=" w-full p-2">
            <Search product={data?.data.products} />
          </div>
          <div className="flex flex-wrap items-top justify-evenly gap-3 p-2 min-h-screen">
            {isPending ? (
              <h1 className="text-white text-xl">loading products...</h1>
            ) : (
              data?.data.products?.map((elem, idx) => (
                <ProductCard product={elem} key={idx} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
