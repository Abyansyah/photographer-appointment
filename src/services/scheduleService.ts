import axiosInstance from '@/config/axiosInstance';
import { ScheduleApiResponse } from '@/hooks/useFeaturedSchedules';
import { ScheduleFilters } from '@/pages/Schedule';
import { Schedule } from '@/types/schedule';

export const ScheduleService = {
  async getSchedules(params: ScheduleFilters): Promise<ScheduleApiResponse> {
    const response = await axiosInstance.get('/schedules', {
      params: {
        photographerName: params.photographerName,
        isAvailable: params.isAvailable,
        timeSlot: params.timeSlot,
        sortDirection: params.sortDirection,
      },
    });

    return {
      schedules: response.data.schedules,
      timeSlots: response.data.timeSlots,
    };
  },
  async getFeaturedSchedules(): Promise<{ schedules: Schedule[] }> {
    const response = await axiosInstance.get('/schedules', {
      params: {
        limit: 3,
        isAvailable: true,
      },
    });
    return { schedules: response.data.schedules };
  },
  async getScheduleById(id: string | undefined): Promise<Schedule> {
    const response = await axiosInstance.get(`/schedules/${id}`);
    return response.data;
  },
};
