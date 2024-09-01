
export const ProductSkeleton = () => {
    return (
        <div className="container mx-auto p-4 animate-pulse">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-96 bg-gray-300 rounded-md mb-4"></div>
                <div className="flex-1 md:px-8">
                    <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-28 bg-gray-300 rounded w-full mb-4"></div>
                </div>
            </div>
            <div className="mt-8">
                <div className="h-28 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-44 bg-gray-300 rounded w-full"></div>
            </div>
        </div>
    );
}
