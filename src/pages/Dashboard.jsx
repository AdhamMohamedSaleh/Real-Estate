import React, { useState } from "react";
import PropertyCard from "../ui/PropertyCard";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const URL = "https://quick-deals.vercel.app/api/home-products/";
const ITEMS_PER_PAGE = 12;

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: properties = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      return data.results || [];
    },
    staleTime: 5 * 60 * 1000, // 5 min cache
  });

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const paginatedProperties = properties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <div className="mt-20 mx-auto px-4 py-8 relative z-10">
        <img
          src="/homeImage.png"
          alt="Real estate home"
          className="w-full rounded-lg shadow-lg h-screen object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl px-4 text-center">
          Let's Make Your Real Estate Dreams a Reality
        </h1>
      </div>

      <h2 className="text-3xl font-semibold my-10 mb-16 text-center">
        Our Properties
      </h2>

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p className="text-center text-red-500 my-10">{error.message}</p>
      ) : paginatedProperties.length === 0 ? (
        <p className="text-center text-gray-500 mb-10">No properties found.</p>
      ) : (
        <div className="mx-4 sm:mx-6 md:mx-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 my-10">
            {paginatedProperties.map((property) => (
              <div key={property.id} className="h-[500px]">
                <Link to={`/property/${property.id}`} className="h-full block">
                  <PropertyCard data={property} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 my-8">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
