import React, { useState } from "react";
import Spinner from "../ui/Spinner";
import { useParams, Link } from "react-router-dom";
import { useCurrency } from "../contexts/CurrencyContext";
import { useQuery } from "@tanstack/react-query";
import ImageModal from "../ui/ImageModal";

const URL = "https://quick-deals.vercel.app/api/product-detail/";

export default function PropertyDetails() {
  const { id } = useParams();
  const { convertPrice, currency } = useCurrency();
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    data: property,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const res = await fetch(`${URL}${id}`);
      if (!res.ok) throw new Error("Failed to fetch property details");
      return res.json();
    },
    enabled: !!id, // only run if ID is present
    staleTime: 5 * 60 * 1000, // cache for 5 mins
  });

  if (isLoading) return <Spinner />;
  if (isError || !property)
    return (
      <div className="text-center mt-10 text-red-500">
        {error?.message || "No property found"}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4 mt-30">
      <Link to="/dashboard" className="text-blue-600 text-sm mb-4 inline-block">
        &larr; Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="relative">
          <img
            src={property.main_image}
            alt={property.title}
            className="w-full h-[350px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(property.main_image)}
          />
          <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-xs rounded-full">
            Available
          </span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
              <p className="text-blue-600 text-xl font-bold mb-4">
                {convertPrice(parseFloat(property.price))} {currency}
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
            <div className="flex gap-2"></div>
          </div>

          <div className="mt-6 text-gray-700 leading-relaxed">
            <p>{property.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 p-4 rounded">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-lg font-semibold">
                {convertPrice(parseFloat(property.price))} {currency}
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

      {property.images && property.images.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img.image_url.replace(/\?$/, "")}
                alt={`Gallery ${index + 1}`}
                className="rounded shadow-sm object-cover h-40 w-full cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(img.image_url.replace(/\?$/, ""))}
              />
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
