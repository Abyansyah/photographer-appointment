export const AppointmentLoading = () => {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </div>
              </div>
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
              ))}
            </div>
            <div className="h-10 w-full md:w-32 ml-auto bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
