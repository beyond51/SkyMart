import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct, updatecart } from "../state/CartSlice";

const Cartproducts = ({ product }) => {
  let dispatch = useDispatch();
  let { cartItems } = useSelector((store) => store.CartItmes);
  let deleteProduct = () => {
    let finddeleteproduct = cartItems.filter((val) => val.id !== product.id);
    dispatch(deleteproduct(finddeleteproduct));
    localStorage.setItem("cart", JSON.stringify(finddeleteproduct));
  };
  return (
    <div className="bg-black p-4 rounded-2xl w-full max-w-md text-white flex items-center gap-2 border border-gray-700">
      <div className="flex items-center gap-4">
        <img
          className="w-25 h-25 bg-yellow-100 rounded-xl flex items-center justify-center object-contain"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="flex  flex-col items-start gap-1 w-full px-2">
        <div>
          <h2 className="text-sm font-medium text-gray-300">{product.title}</h2>
          <p className="text-lg font-bold text-green-400">
            ${product.price * (product.qauntity || 1)}
          </p>
          <p className="text-xs text-gray-500">${product.price}</p>
        </div>
        <div className="flex w-full justify-between px-2">
          <div className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded-lg border border-gray-700">
            <button
              onClick={() => {
                let finddeleteproduct = cartItems.find(
                  (val) => val.id === product.id,
                );
                if (finddeleteproduct.qauntity > 1) {
                  let data = cartItems.map((val) =>
                    val.id === product.id
                      ? { ...val, qauntity: val.qauntity - 1 }
                      : val,
                  );
                  dispatch(updatecart(data));
                  localStorage.setItem("cart", JSON.stringify(data));
                }
              }}
              className="p-1 text-gray-400 hover:text-white"
            >
              <Minus size={16} />
            </button>

            <span className="w-6 text-center">{product?.qauntity || 1}</span>

            <button
              onClick={() => {
                let finddeleteproduct = cartItems.find(
                  (val) => val.id === product.id,
                );
                if (finddeleteproduct) {
                  let data = cartItems.map((val) =>
                    val.id === product.id
                      ? { ...val, qauntity: (val.qauntity || 1) + 1 }
                      : val,
                  );
                  dispatch(updatecart(data));
                  localStorage.setItem("cart", JSON.stringify(data));
                }
              }}
              className="p-1 text-gray-400 hover:text-white"
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            onClick={deleteProduct}
            className="text-red-500 hover:text-red-400"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartproducts;
