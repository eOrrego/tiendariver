
export const ProductCardSkeleton = () => {
    return (
        <div className="p-4 animate-pulse">
            <div className="bg-gray-300 h-96 w-full rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
    );
}
