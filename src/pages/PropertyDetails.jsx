import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../ui/Spinner";

const URL = "https://quick-deals.net/api/product-detail/";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const res = await fetch(`${URL}${id}`);
        const data = await res.json();
        setProperty(data);
      } catch (error) {
        console.error("Failed to fetch property details", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProperty();
  }, [id]);

  if (loading) return <Spinner />;
  if (!property)
    return (
      <div className="text-center mt-10 text-red-500">No property found</div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Back Button */}
      <Link to="/units" className="text-blue-600 text-sm mb-4 inline-block">
        &larr; Back to Units
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="relative">
          <img
            src={property.main_image}
            alt={property.title}
            className="w-full h-[350px] object-cover"
          />
          <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-xs rounded-full">
            Available
          </span>
        </div>

        {/* Title + Actions */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
              <p className="text-blue-600 text-xl font-bold mb-4">
                ${parseFloat(property.price).toLocaleString()}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div>
                  <strong>Bedrooms:</strong> {property.bedrooms}
                </div>
                <div>
                  <strong>Bathrooms:</strong> {property.bathrooms}
                </div>
                <div>
                  <strong>Location:</strong> {property.location}
                </div>
                <div>
                  <strong>Unit Type:</strong> {property.unit_type}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
                Edit
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700 leading-relaxed">
            <p>{property.description}</p>
          </div>

          {/* Price + Area */}
          <div className="mt-6 grid grid-cols-2 gap-4 p-4 rounded">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-lg font-semibold">
                ${parseFloat(property.price).toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-500 text-sm">Area</p>
              <p className="text-lg font-semibold">
                {property.area || "0.00"} m²
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {property.images && property.images.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="rounded shadow-sm object-cover h-40 w-full"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
