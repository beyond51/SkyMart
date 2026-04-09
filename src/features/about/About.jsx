import React from "react";
import { Package, Users, Star, Truck, FlashlightIcon, HeartHandshake, ShieldCheck } from "lucide-react";

export default function AboutSkyMart() {
  return (
    <div className="bg-black text-white min-h-screen cursor-pointer flex flex-col items-center justify-start px-6 py-10">
      {/* Icon */}
      <div className="bg-lime-400 text-black p-4 rounded-3xl mb-6">
        <span className="text-2xl font-bold ">⚡</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
        About <span className="text-lime-400">SkyMart</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl mb-12 leading-relaxed">
        SkyMart is a next-generation e-commerce platform built to make online
        shopping fast, fair, and enjoyable — for everyone.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-500 transition">
          <Package className="mx-auto text-lime-400 mb-4" size={28} />
          <h2 className="text-2xl font-semibold">20K+</h2>
          <p className="text-gray-500 mt-1">Products</p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-500 transition">
          <Users className="mx-auto text-lime-400 mb-4" size={28} />
          <h2 className="text-2xl font-semibold">50K+</h2>
          <p className="text-gray-500 mt-1">Happy Customers</p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-500 transition">
          <Star className="mx-auto text-lime-400 mb-4" size={28} />
          <h2 className="text-2xl font-semibold">4.9</h2>
          <p className="text-gray-500 mt-1">Avg. Rating</p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-500 transition">
          <Truck className="mx-auto text-lime-400 mb-4" size={28} />
          <h2 className="text-2xl font-semibold">99%</h2>
          <p className="text-gray-500 mt-1">On-time Delivery</p>
        </div>
      </div>
      <div className="bg-black text-white px-6 py-16 flex flex-col items-center">
        {/* Our Story Box */}
        <div className="w-full max-w-5xl border border-gray-700 rounded-3xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Story</h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually enjoyable?
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don’t require a second mortgage.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We’re still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you make
            here.
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          What We Stand For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Trust */}
          <div className="border border-gray-700 rounded-2xl p-6 flex gap-4 hover:border-gray-500 transition">
            <div className="bg-lime-400/10 p-3 rounded-xl">
              <ShieldCheck className="text-lime-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Trust</h3>
              <p className="text-gray-400 text-sm">
                Every product is verified for quality and authenticity before
                listing.
              </p>
            </div>
          </div>

          {/* Speed */}
          <div className="border border-gray-700 rounded-2xl p-6 flex gap-4 hover:border-gray-500 transition">
            <div className="bg-lime-400/10 p-3 rounded-xl">
              <Truck className="text-lime-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Speed</h3>
              <p className="text-gray-400 text-sm">
                We obsess over delivery times so your orders arrive when
                promised.
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="border border-gray-700 rounded-2xl p-6 flex gap-4 hover:border-gray-500 transition">
            <div className="bg-lime-400/10 p-3 rounded-xl">
              <HeartHandshake className="text-lime-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Community</h3>
              <p className="text-gray-400 text-sm">
                Built around real customer feedback, not just business metrics.
              </p>
            </div>
          </div>

          {/* Quality */}
          <div className="border border-gray-700 rounded-2xl p-6 flex gap-4 hover:border-gray-500 transition">
            <div className="bg-lime-400/10 p-3 rounded-xl">
              <Star className="text-lime-400" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Quality</h3>
              <p className="text-gray-400 text-sm">
                We curate the best — no filler, no junk, just great products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
