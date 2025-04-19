export const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
    <div className="lg:col-span-2 space-y-6">
      <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-t-lg"></div>

      <div className="pt-16 space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/5"></div>
      </div>
    </div>

    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-4"></div>
        <div className="space-y-4">
          <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
        </div>
      </div>
      <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    </div>
  </div>
);
