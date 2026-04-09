import { ShoppingCart, TrendingUp, Star, Tag } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      icon: <ShoppingCart size={22} />,
      value: "0",
      title: "Cart Items",
      subtitle: "In your bag",
      color: "bg-lime-900/40 text-lime-400",
    },
    {
      icon: <TrendingUp size={22} />,
      value: "$0.00",
      title: "Cart Value",
      subtitle: "Ready to checkout",
      color: "bg-blue-900/40 text-blue-400",
    },
    {
      icon: <Star size={22} />,
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      color: "bg-yellow-900/40 text-yellow-400",
    },
    {
      icon: <Tag size={22} />,
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      color: "bg-purple-900/40 text-purple-400",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-black ">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border border-gray-700 rounded-2xl px-5 py-7 bg-gradient-to-br from-gray-900 to-black hover:shadow-lg hover:scale-[1.02] transition"
        >
          {/* ICON */}
          <div
            className={`p-3 rounded-xl flex items-center justify-center ${item.color}`}
          >
            {item.icon}
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">{item.value}</h1>
            <p className="text-gray-300 text-sm">{item.title}</p>
            <p className="text-gray-500 text-xs">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
