'use client';

import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

interface AuthPopupProps {
  message?: string;
}

export function AuthPopup({ message = 'You need to login to access this feature' }: AuthPopupProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full text-center animate-bounce-slow">
        <div className="relative">
          <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-10 w-10 text-primary" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-dashed border-purple-300 dark:border-purple-700 animate-spin-slow opacity-70"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border-2 border-dotted border-purple-200 dark:border-purple-800 animate-reverse-spin opacity-50"></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3">Login Required</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>

        <div className="flex flex-col space-y-3">
          <Button onClick={() => navigate('/login')} className="w-full animate-pulse" size="lg">
            <User className="mr-2 h-4 w-4" />
            Login Now
          </Button>

          <Button variant="outline" onClick={() => navigate('/')} className="w-full">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
