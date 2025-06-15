import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PropertyCard from "../ui/PropertyCard";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const URL = "https://quick-deals.vercel.app/api/home-products/";
const ITEMS_PER_PAGE = 12;

export default function Properties() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: properties = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-properties"],
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
    <div className="max-w-7xl mx-auto px-4 py-20 mt-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light text-gray-900 mb-4">Our Properties</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our exclusive collection of premium properties. From luxury villas to beachfront apartments, 
          find your perfect investment in Egypt's most prestigious locations.
        </p>
      </div>

      {/* Properties Grid */}
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className="text-center text-red-500 my-10">
          {error.message}
        </div>
      ) : paginatedProperties.length === 0 ? (
        <div className="text-center text-gray-500 my-10">
          No properties found.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProperties.map((property) => (
              <div key={property.id} className="h-[500px]">
                <Link to={`/property/${property.id}`} className="h-full block">
                  <PropertyCard data={property} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
} 