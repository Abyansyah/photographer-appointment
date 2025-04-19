'use client';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, ImageIcon, Calendar, Users, Aperture, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300/20 dark:bg-purple-700/20 blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-300/20 dark:bg-indigo-700/20 blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.07}px, ${scrollY * 0.03}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] right-[10%] animate-float-camera hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="relative">
            <div className="w-20 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform rotate-12">
              <Camera className="h-8 w-8 text-purple-500" />
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></div>
              <Sparkles className="h-4 w-4 text-purple-500 relative" />
            </div>
          </div>
        </div>

        <div
          className="absolute top-[60%] right-[15%] animate-float-2 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
            <Calendar className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div
          className="absolute top-[30%] left-[10%] animate-float-3 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1 transform rotate-6">
            <div className="w-full h-full border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-indigo-500" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[20%] left-[20%] animate-float-1 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
            <Aperture className="h-8 w-8 text-purple-500 animate-spin-super-slow" />
          </div>
        </div>

        <div
          className="absolute top-[40%] right-[25%] animate-float-4 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-pink-500" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/50 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 animate-fade-in">
              <Sparkles className="mr-1 h-3 w-3" />
              Professional Photography
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 animate-fade-in">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Capture Your Perfect</span>
            <span className="block mt-1">Moments</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto animate-fade-in-delay-1">
            Book professional photographers for your special events, portraits, weddings, and more. Easy scheduling and guaranteed quality.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link to="/schedule">
              <Button size="lg" className="rounded-full group relative overflow-hidden bg-purple-600 hover:bg-purple-700">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-105 transition-transform duration-300"></span>
                <span className="relative flex items-center">
                  <Camera className="mr-2 h-4 w-4" />
                  Book a Photographer
                </span>
              </Button>
            </Link>
            <Link to="/my-appointments">
              <Button size="lg" variant="outline" className="rounded-full border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700">
                <Calendar className="mr-2 h-4 w-4" />
                My Appointments
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            fillOpacity="1"
            className="text-background"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
