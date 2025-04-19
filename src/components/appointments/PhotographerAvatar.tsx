import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Sparkles } from 'lucide-react';

export const PhotographerAvatar = ({ avatar, name }: { avatar?: string; name: string }) => (
  <div className="relative h-48 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
    <div className="absolute -bottom-12 left-6">
      <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-900 shadow-md">
        <AvatarImage src={avatar || '/placeholder.svg'} alt={name} />
        <AvatarFallback className="bg-purple-100 text-purple-500 text-2xl">{name.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>

    <div className="absolute top-1/4 left-1/4 animate-float-1 hidden md:block">
      <div className="w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center">
        <Camera className="h-5 w-5 text-purple-500" />
      </div>
    </div>

    <div className="absolute bottom-1/4 right-1/4 animate-float-2 hidden md:block">
      <div className="w-8 h-8 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-indigo-500" />
      </div>
    </div>
  </div>
);
