import React from "react";
import { useCurrency } from "../contexts/CurrencyContext";

export default function PropertyCard({ data }) {
  const { convertPrice, currency } = useCurrency();

  return (
    <div className="h-full bg-white rounded-2xl shadow-md overflow-hidden font-sans transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img
          src={data.main_image}
          alt={data.title}
          className="w-full h-[220px] object-cover"
        />
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
          Available
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
            {data.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-1 mt-1">
            {data.location}
          </p>

          {/* Larger beds, baths, area */}
          <div className="flex flex-col mt-4 text-base text-gray-700 space-y-2 font-semibold">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span aria-label="Bedrooms" role="img" className="text-xl">
                🛏
              </span>
              <span>{data.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span aria-label="Bathrooms" role="img" className="text-xl">
                🛁
              </span>
              <span>{data.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span aria-label="Area" role="img" className="text-xl">
                📐
              </span>
              <span>{data.area} m²</span>
            </div>
          </div>
        </div>

        {/* Price on right, View Details on left */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-blue-600 text-sm font-medium hover:underline whitespace-nowrap cursor-pointer">
            View Details →
          </p>
          <p className="text-lg font-bold text-blue-700 whitespace-nowrap">
            {convertPrice(parseFloat(data.price))} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}
