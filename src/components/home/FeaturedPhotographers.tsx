import { useFeaturedSchedules } from '@/hooks/useFeaturedSchedules';
import { LoadingCard } from './LoadingCard';
import { ErrorCard } from './ErrorCard';
import { ScheduleCard } from '../schedule/ScheduleCard';

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
            <ScheduleCard schedule={schedule} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
