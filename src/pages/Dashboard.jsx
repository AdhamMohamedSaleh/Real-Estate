import React, { useEffect, useState } from "react";
import PropertyCard from "../ui/PropertyCard"; // adjust path
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const URL = "https://quick-deals.vercel.app/api/home-products/";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="mx-4 sm:mx-6 md:mx-65">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 my-10">
            {properties.map((property) => (
              <div key={property.id} className="h-[500px]">
                {" "}
                {/* 👈 Set fixed height here */}
                <Link to={`/property/${property.id}`} className="h-full block">
                  <PropertyCard data={property} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
