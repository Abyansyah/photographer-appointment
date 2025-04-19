export const Loading = () => {
  return (
    <main className="flex-1 container py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-10 flex-1 max-w-md bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
                <div className="h-36 bg-gray-200 dark:bg-gray-800"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
