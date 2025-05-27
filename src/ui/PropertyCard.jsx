export default function PropertyCard({ data }) {
  return (
    <div className="h-full bg-white rounded-xl shadow-md overflow-hidden font-sans transition hover:shadow-lg flex flex-col">
      <div className="relative">
        <img
          src={data.main_image}
          alt={data.title}
          className="w-full h-[200px] object-cover"
        />
        <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
          Available
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
        <p className="text-md text-gray-500">{data.location}</p>

        <div className="flex items-center gap-4 text-md text-gray-600">
          <span>🛏 {data.bedrooms} Beds</span>
          <span>🛁 {data.bathrooms} Baths</span>
        </div>

        <p className="text-md text-gray-500">📐 {data.area}</p>
        <p className="text-md font-bold text-black">
          ${parseInt(data.price).toLocaleString()}
        </p>

        <div className="mt-auto">
          <a href="#" className="text-blue-600 text-md inline-block">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
