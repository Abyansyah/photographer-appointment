import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarIcon, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useFeaturedSchedules } from '@/hooks/useFeaturedSchedules';
import { LoadingCard } from './LoadingCard';
import { ErrorCard } from './ErrorCard';

export function FeaturedPhotographers() {
  const { data: schedules, isLoading, error } = useFeaturedSchedules();

  if (isLoading) {
    return <LoadingCard />;
  }

  if (schedules.length === 0 || error) {
    return <ErrorCard />;
  }

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Photographers</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schedules.map((schedule, index) => (
            <Card key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <Avatar className="h-12 w-12 border-2 border-white">
                    <AvatarImage src={schedule.avatar || '/placeholder.svg'} alt={schedule.photographerName} />
                    <AvatarFallback className="bg-purple-100 text-purple-500">{schedule.photographerName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <Badge variant={schedule.isAvailable ? 'secondary' : 'destructive'} className="font-medium">
                    {schedule.isAvailable ? 'Available' : 'Booked'}
                  </Badge>
                </div>

                <div className="h-32 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900" />
              </div>

              <CardHeader className="pt-4">
                <CardTitle className="flex justify-between items-start gap-2">
                  <span>{schedule.photographerName}</span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">{schedule.averageRating}</span>
                  </div>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{schedule.description}</p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{schedule.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Clock className="h-4 w-4" />
                  <span>{schedule.timeSlot}</span>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end items-center">
                {schedule.isAvailable ? (
                  <Link to={`/appointments/${schedule.id}`}>
                    <Button>Book Now</Button>
                  </Link>
                ) : (
                  <Button disabled>Unavailable</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
