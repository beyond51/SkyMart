import { Laptop, Package } from "lucide-react";
import { useNavigate } from "react-router";

const Catergory = () => {
  let navigate = useNavigate();
  const categories = [
    {
      name: "beauty",
      items: 17,
      icon: <Laptop size={28} />,
    },
    {
      name: "fragrances",
      items: 2,
      icon: <Package size={28} />,
    },
    {
      name: "groceries",
      items: 3,
      icon: <Package size={28} />,
    },
  ];
  let categoryFn = (cat) => {
    navigate(`/main/products/${cat.name}`);
  };

  return (
    <div className="bg-black w-full text-white px-6 md:px-8 py-10">
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-2xl md:text-3xl font-semibold">Shop by Category</h1>

        <button className="text-lime-400 hover:text-lime-300 flex items-center gap-1 text-sm">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {categories.map((cat, index) => (
          <div
            onClick={() => categoryFn(cat)}
            key={index}
            className="bg-gray-200 text-black rounded-2xl p-3 flex flex-col items-center justify-center gap-3 hover:scale-[1.03] hover:shadow-lg transition cursor-pointer"
          >
            <div className="text-2xl text-gray-700">{cat.icon}</div>

            <h2 className="font-semibold text-lg">{cat.name}</h2>

            <p className="text-sm text-gray-600">{cat.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catergory;
