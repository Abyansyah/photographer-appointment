import { Link } from 'react-router-dom';
import { StarIcon, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Schedule } from '@/types/schedule';

export const ScheduleCard = ({ schedule }: { schedule: Schedule }) => (
  <Card key={schedule.id} className="flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200 group">
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <Avatar className="h-12 w-12 border-2 border-white shadow-md">
          <AvatarImage src={schedule.avatar || '/placeholder.svg'} alt={schedule.photographerName} />
          <AvatarFallback className="bg-purple-100 text-purple-500">{schedule.photographerName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Badge variant={schedule.isAvailable ? 'secondary' : 'destructive'} className="font-medium shadow-sm">
          {schedule.isAvailable ? 'Available' : 'Booked'}
        </Badge>
      </div>

      <div className="h-36 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 group-hover:from-purple-200 group-hover:to-indigo-200 dark:group-hover:from-purple-800 dark:group-hover:to-indigo-800 transition-colors duration-300" />
    </div>

    <CardHeader className="pt-4 bg-white dark:bg-gray-950">
      <CardTitle className="flex justify-between items-start gap-2">
        <span>{schedule.photographerName}</span>
        <div className="flex items-center gap-1">
          <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm">{schedule.averageRating}</span>
        </div>
      </CardTitle>

      <p className="text-sm text-muted-foreground mt-2">{schedule.description}</p>
    </CardHeader>

    <CardContent className="flex-1 bg-white dark:bg-gray-950 pt-0">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3"></div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
        <Calendar className="h-4 w-4 text-indigo-500" />
        <span>{schedule.date}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
        <Clock className="h-4 w-4 text-pink-500" />
        <span>{schedule.timeSlot}</span>
      </div>
    </CardContent>

    <CardFooter className="flex justify-end items-center bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      {schedule.isAvailable ? (
        <Link to={`/appointments/${schedule.id}`}>
          <Button className="transition-all duration-200 hover:scale-105">Book Now</Button>
        </Link>
      ) : (
        <Button disabled>Unavailable</Button>
      )}
    </CardFooter>
  </Card>
);
