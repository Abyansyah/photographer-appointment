import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';
import { FilterSidebar } from '@/components/schedule/FilterSidebar';
import { ScheduleCard } from '@/components/schedule/ScheduleCard';
import { useSchedules } from '@/hooks/useFeaturedSchedules';
import { Schedule as ScheduleType } from '@/types/schedule';
import { useDebounce } from '@/hooks/useDebounce';
import { EmptyScheduleState } from '@/components/schedule/EmptySchedule';

export interface ScheduleFilters {
  photographerName?: string;
  isAvailable?: string;
  timeSlot?: string;
  sortDirection?: 'asc' | 'desc';
  location?: string;
  category?: string;
  schedules?: ScheduleType[];
}

export default function Schedule() {
  const [filters, setFilters] = useState<ScheduleFilters>({});
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const memoizedFilters = useMemo(() => {
    return {
      ...filters,
      photographerName: debouncedSearchTerm || undefined,
    };
  }, [filters, debouncedSearchTerm]);

  const { data: schedules, timeSlots, isLoading } = useSchedules(memoizedFilters);

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({});
  };

  const handleFilterChange = (newFilters: Partial<ScheduleFilters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-8">Photography Sessions</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar
          availabilityFilter={filters?.isAvailable || ''}
          timeSlotFilter={filters?.timeSlot || ''}
          sortBy={filters?.sortDirection || ''}
          locationFilter={filters?.location || 'All'}
          categoryFilter={filters?.category || 'All'}
          timeSlots={timeSlots}
          onAvailabilityChange={(value) => handleFilterChange({ isAvailable: value === 'all' ? undefined : value })}
          onTimeSlotChange={(value) => handleFilterChange({ timeSlot: value === 'all' ? undefined : value })}
          onSortChange={(value) => handleFilterChange({ sortDirection: value as 'asc' | 'desc' })}
          onLocationChange={(value) => handleFilterChange({ location: value === 'All' ? undefined : value })}
          onCategoryChange={(value) => handleFilterChange({ category: value === 'All' ? undefined : value })}
          onReset={resetFilters}
        />

        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <Input placeholder="Search photographers..." className="max-w-md" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
                    <div className="h-36 bg-gray-200 dark:bg-gray-800"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      </div>
                      <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules?.map((schedule) => (
              <ScheduleCard schedule={schedule} />
            ))}
          </div>

          {schedules.length === 0 && !isLoading ? <EmptyScheduleState onResetFilters={resetFilters} /> : null}
        </div>
      </div>
    </main>
  );
}
