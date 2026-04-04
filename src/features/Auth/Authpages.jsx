import React from "react";

const Authpages = () => {
  return (
    <div className="bg-gray-900 h-full py-20 px-5 flex flex-col items-center justify-between">
      <div className="self-start text-2xl">
        <h1 className="text-white">
          Sky <span className="text-yellow-400">Mart</span>
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-yellow-500 uppercase">Welcome back</h1>
        <h1 className="text-6xl font-bold">Shop the future.</h1>
        <h1 className="text-6xl capitalize text-yellow-400">today.</h1>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          tempora, voluptatem porro impedit qui in?
        </p>
      </div>
      <div className="flex gap-3 ">
        <div className="border rounded-2xl p-3 border-white w-40 flex flex-col items-center">
          <h1 className="text-yellow-400 text-xl">20K+</h1>
          <h1 className="text-gray-500">products</h1>
        </div>
        <div className="border rounded-2xl p-3 border-white w-40 flex flex-col items-center">
          <h1 className="text-yellow-400 text-xl">20K+</h1>
          <h1 className="text-gray-500">products</h1>
        </div>
        <div className="border rounded-2xl p-3 border-white w-40 flex flex-col items-center">
          <h1 className="text-yellow-400 text-xl">20K+</h1>
          <h1 className="text-gray-500">products</h1>
        </div>
      </div>
    </div>
  );
};

export default Authpages;
