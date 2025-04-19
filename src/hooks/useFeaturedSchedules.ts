import { useState, useEffect } from 'react';
import { ScheduleService } from '@/services/scheduleService';
import { Schedule } from '@/types/schedule';
import { ScheduleFilters } from '@/pages/Schedule';

export const useFeaturedSchedules = () => {
  const [data, setData] = useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { schedules }: { schedules: Schedule[] } = await ScheduleService.getFeaturedSchedules();
        setData(schedules);
      } catch {
        setError('Failed to load schedules');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export interface ScheduleApiResponse {
  schedules: Schedule[];
  timeSlots: string[];
}

export const useSchedules = (filters: ScheduleFilters) => {
  const [data, setData] = useState<Schedule[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { schedules, timeSlots }: ScheduleApiResponse = await ScheduleService.getSchedules(filters);
        setData(schedules);
        setTimeSlots(timeSlots);
      } catch {
        setError('Gagal memuat jadwal');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { data, timeSlots, isLoading, error };
};
