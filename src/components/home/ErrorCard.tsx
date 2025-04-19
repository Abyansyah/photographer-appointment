import { ImageIcon, Users, Camera } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const ErrorCard = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Photographers</h2>

        <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
              <Camera className="h-12 w-12 text-purple-500" />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-indigo-500" />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-orbit-2">
              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-pink-500" />
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-purple-200 dark:border-purple-800/30 animate-spin-slow opacity-70"></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-3 animate-fade-in">No Featured Photographers Yet</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6 animate-fade-in-delay-1">
            We're in the process of curating our collection of talented photographers. Check back soon to discover amazing professionals ready to capture your special moments!
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
            <Link to="/schedule">
              <Button size="lg" className="rounded-full">
                Browse Available Sessions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
