import { Sparkles } from 'lucide-react';

export const BookingSuccessModal = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full text-center animate-in zoom-in-95 duration-300">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-dashed border-green-200 dark:border-green-800/30 animate-spin-slow opacity-70"></div>
        </div>

        <div className="absolute -top-2 -right-2 animate-float-1">
          <Sparkles className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="absolute -bottom-2 -left-2 animate-float-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">Booking Successful!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Your appointment has been booked successfully.</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">Redirecting to My Appointments...</p>
    </div>
  </div>
);
