import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Calendar, X } from 'lucide-react';

export function UnavailablePopup() {
  const router = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full text-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="h-12 w-12 text-orange-500" />
          </div>

          <div className="absolute top-0 left-1/4 animate-float-1">
            <X className="h-6 w-6 text-red-400" />
          </div>
          <div className="absolute bottom-0 right-1/4 animate-float-2">
            <X className="h-8 w-8 text-red-400" />
          </div>
          <div className="absolute top-1/2 right-0 animate-float-3">
            <X className="h-5 w-5 text-red-400" />
          </div>

          <div className="absolute bottom-1/3 left-0 animate-float-4">
            <Calendar className="h-7 w-7 text-gray-400" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-orange-300 dark:border-orange-700 animate-spin-slow opacity-70"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3 text-orange-500">Oops!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">This photography session is already booked. Please choose another available session.</p>

        <div className="flex flex-col space-y-3">
          <Button onClick={() => router('/schedule')} className="w-full" size="lg">
            Browse Available Sessions
          </Button>

          <Button variant="outline" onClick={() => router('/')} className="w-full">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
