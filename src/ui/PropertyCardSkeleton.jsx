export default function PropertyCardSkeleton() {
  return (
    <div className="animate-pulse border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image Skeleton */}
      <div className="bg-gray-300 h-48 w-full"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div> {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Location */}
        <div className="flex space-x-4">
          <div className="h-4 bg-gray-300 rounded w-16"></div> {/* Beds */}
          <div className="h-4 bg-gray-300 rounded w-20"></div> {/* Size */}
        </div>
        <div className="h-6 bg-gray-300 rounded w-1/3"></div> {/* Price */}
      </div>
    </div>
  );
}
