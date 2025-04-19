import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageIcon, Aperture, Film, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-4">
      <div className="max-w-3xl w-full text-center">
        <div className="relative h-64 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 select-none">404</h1>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-28 bg-gray-800 dark:bg-gray-700 rounded-lg z-10 shadow-xl animate-float-camera">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 dark:bg-gray-800 rounded-full border-4 border-gray-700 dark:border-gray-600">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full border-2 border-gray-700 dark:border-gray-600">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="absolute top-2 right-4 w-6 h-6 bg-yellow-400 rounded-sm animate-flash"></div>

            <div className="absolute top-2 left-4 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>

          <div className="absolute top-1/4 left-1/4 animate-float-1">
            <Film className="h-8 w-8 text-purple-400" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float-2">
            <ImageIcon className="h-10 w-10 text-indigo-400" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float-3">
            <Aperture className="h-6 w-6 text-pink-400" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4 animate-fade-in">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto animate-fade-in-delay-1">Oops! It seems this moment wasn't captured in our collection. The page you're looking for is missing.</p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
          <Link to="/">
            <Button size="lg" className="rounded-full">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
