import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { BookingSuccessModal } from '@/components/appointments/BookingSuccessModal';
import { PhotographerAvatar } from '@/components/appointments/PhotographerAvatar';
import { DetailItem } from '@/components/appointments/DetailItem';
import { BookingForm } from '@/components/appointments/BookingForm';
import { ScheduleService } from '@/services/scheduleService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { AppointmentService } from '@/services/appointmentService';
import { LoadingSkeleton } from '@/components/appointments/LoadingSkeleton';

export default function Appointment() {
  const { id } = useParams();
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useNavigate();

  const { data: schedule, isLoading } = useSWR('/appointments', () => ScheduleService.getScheduleById(id), { suspense: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!schedule?.id) {
      toast.error('Invalid schedule data');
      return;
    }

    try {
      setIsSubmitting(true);

      await AppointmentService.submitAppointment(schedule.id, notes);

      toast.success('Appointment booked successfully!');

      setShowSuccess(true);

      setTimeout(() => {
        router('/my-appointments');
      }, 2000);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book appointment', {
        description: error instanceof Error ? error.message : 'Please try again later',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 container py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-2 mb-6">
          <Button variant="ghost" size="sm" onClick={() => router('/schedule')} className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-1">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Back to Schedule
          </Button>
          {/* <h1 className="text-3xl font-bold">Book Appointment</h1> */}
        </div>

        {showSuccess && <BookingSuccessModal />}

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 overflow-hidden">
              <PhotographerAvatar avatar={schedule.avatar} name={schedule.photographerName} />

              <CardHeader className="pt-16">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{schedule.photographerName}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {schedule.category.map((cat, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{schedule.averageRating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <DetailItem icon={<Calendar className="h-4 w-4 text-purple-500" />} title="Date" value={schedule.date} />
                  <DetailItem icon={<Clock className="h-4 w-4 text-indigo-500" />} title="Time" value={schedule.timeSlot} />
                  <DetailItem icon={<MapPin className="h-4 w-4 text-pink-500" />} title="Location" value={schedule.location} />
                  <DetailItem icon={<User className="h-4 w-4 text-green-500" />} title="Experience" value={`${schedule.experience}+ years`} />
                </div>

                <div>
                  <h3 className="font-medium mb-2">About the Photographer</h3>
                  <p className="text-muted-foreground">{schedule.description}</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <BookingForm notes={notes} isSubmitting={isSubmitting} onNotesChange={setNotes} onSubmit={handleSubmit} />
                </CardContent>
              </Card>

              <TermsAndConditions />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const TermsAndConditions = () => (
  <div className="text-center text-sm text-muted-foreground">
    <p>
      By confirming your booking, you agree to our{' '}
      <a href="#" className="text-purple-500 hover:underline">
        Terms of Service
      </a>{' '}
      and{' '}
      <a href="#" className="text-purple-500 hover:underline">
        Cancellation Policy
      </a>
      .
    </p>
  </div>
);
