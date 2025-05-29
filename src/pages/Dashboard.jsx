import React, { useEffect, useState } from "react";
import PropertyCard from "../ui/PropertyCard"; // adjust path
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const URL = "https://quick-deals.vercel.app/api/home-products/";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch(URL, {
          cache: "no-store",
        });
        const data = await res.json();
        setProperties(data.results || []);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginatedProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      {loading ? (
        <Spinner />
      ) : properties.length === 0 ? (
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
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-500 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
