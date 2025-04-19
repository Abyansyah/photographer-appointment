import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Appointment } from '@/types/appointment';
import { formatDate } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AppointmentsCard = ({ appointment, onReview }: { appointment: Appointment; onReview: (appointment: Appointment) => void }) => {
  return (
    <Card key={appointment.id} className="overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-gray-200 dark:border-gray-800">
              <AvatarImage src={appointment?.Schedule?.avatar || '/placeholder.svg'} alt={appointment?.Schedule?.photographerName} />
              <AvatarFallback className="bg-purple-100 text-purple-500">{appointment?.Schedule?.photographerName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{appointment?.Schedule?.photographerName}</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {appointment.Schedule?.category.map((cat, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <Badge
            variant={appointment?.Reviews?.length === 0 ? 'secondary' : 'outline'}
            className={appointment?.Reviews?.length === 0 ? '' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900'}
          >
            {appointment?.Reviews?.length > 0 ? 'Reviewed' : 'Not Reviewed'}
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-purple-500" />
            <span>{formatDate(appointment?.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-indigo-500" />
            <span>{appointment?.Schedule?.timeSlot}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-pink-500" />
            <span>{appointment?.Schedule?.location}</span>
          </div>
        </div>

        {appointment.notes && (
          <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md border border-purple-100 dark:border-purple-800/30">
            <h4 className="text-sm font-medium flex items-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              Session Notes
            </h4>
            <p className="text-sm text-muted-foreground">{appointment.notes}</p>
          </div>
        )}

        {appointment?.Reviews?.length > 0 && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
            <div className="flex items-center gap-1 mb-1">
              <h4 className="text-sm font-medium">Your Review</h4>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-3 w-3 ${i < (appointment.Reviews[0]?.rating || 0) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{appointment.Reviews[0]?.comment}</p>
          </div>
        )}

        <div className="flex justify-end">
          {appointment.status === 'confirmed' ? (
            <Button
              onClick={() => onReview(appointment)}
              variant={appointment?.Reviews?.length > 0 ? 'outline' : 'default'}
              className={appointment?.Reviews?.length > 0 ? 'border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700' : ''}
            >
              <Star className="mr-2 h-4 w-4" />
              {appointment.Reviews?.length > 0 ? 'Edit Review' : 'Leave a Review'}
            </Button>
          ) : (
            <Button variant="outline" className="border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:border-red-700 dark:hover:bg-red-950">
              Cancel Booking
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
