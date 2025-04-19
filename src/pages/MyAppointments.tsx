import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-media-query';
import { AppointmentsFilter } from '@/components/appointments/AppointmentsFilter';
import { AppointmentsCard } from '@/components/appointments/AppointmentsCard';
import { ReviewForm } from '@/components/appointments/ReviewForm';
import { useAuthContext } from '@/auth/AuthContext';
import { AppointmentsAuth } from '@/components/appointments/AppointmentsAuth';
import { useAppointments } from '@/hooks/useAppointments';
import { useDebounce } from '@/hooks/useDebounce';
import { Appointment } from '@/types/appointment';
import { AppointmentLoading } from '@/components/appointments/AppointmentLoading';
import { ReviewService } from '@/services/reviewService';

export default function MyAppointments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'reviewed' | 'not-reviewed'>('all');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { isAuthenticated } = useAuthContext();
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  const memoizeFilters = useMemo(() => {
    return {
      reviewed: reviewFilter === 'all' ? undefined : reviewFilter,
      search: debouncedSearchTerm || undefined,
    };
  }, [reviewFilter, debouncedSearchTerm]);

  const handleOpenReview = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setRating(appointment.Reviews[0]?.rating || 5);
    setReviewText(appointment.Reviews[0]?.comment || '');
    setOpen(true);
  };

  const { appointments, isLoading,  refresh } = useAppointments(memoizeFilters);

  const handleSubmitReview = async () => {
    if (!selectedAppointment) return;

    try {
      setIsSubmitting(true);

      const isExistingReview = selectedAppointment.Reviews.length > 0;
      const action = isExistingReview ? 'update' : 'create';

      toast.loading(`${action === 'create' ? 'Mengirim' : 'Mengupdate'} review...`, {
        id: 'review-toast',
      });

      if (isExistingReview) {
        await ReviewService.updateReview(selectedAppointment.Reviews[0].id, rating, reviewText);
      } else {
        await ReviewService.submitReview(selectedAppointment.id, rating, reviewText);
      }

      await refresh();
      toast.success(`Review berhasil ${action === 'create' ? 'dikirim' : 'diupdate'}!`, {
        id: 'review-toast',
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Gagal melakukan review`, {
        id: 'review-toast',
        description: error instanceof Error ? error.message : 'Silakan coba lagi',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return <AppointmentsAuth />;
  }

  return (
    <main className="flex-1 container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Appointments</h1>

        <AppointmentsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} reviewFilter={reviewFilter} setReviewFilter={setReviewFilter} />

        <div className="grid gap-6">
          {isLoading && <AppointmentLoading />}
          {appointments?.map((data, index) => (
            <AppointmentsCard key={index} appointment={data} onReview={() => handleOpenReview(data)} />
          ))}

          {appointments.length === 0 && !isLoading ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No appointments found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or book a new session</p>
              <Link to="/schedule">
                <Button className="mt-4">Browse Schedules</Button>
              </Link>
            </div>
          ) : null}
        </div>

        <ReviewForm open={open} onOpenChange={setOpen} isDesktop={isDesktop} rating={rating} reviewText={reviewText} setRating={setRating} setReviewText={setReviewText} onSubmit={handleSubmitReview} appointment={selectedAppointment} isSubmitting={isSubmitting} />
      </div>
    </main>
  );
}
