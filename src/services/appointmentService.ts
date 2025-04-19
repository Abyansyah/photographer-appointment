import axiosInstance from '@/config/axiosInstance';

export interface Appointment {
  id: string;
  userId: string;
  scheduleId: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  notes: string;
  createdAt: string;
  Schedule: {
    photographerName: string;
    date: string;
    timeSlot: string;
    avatar?: string;
    location: string;
    category: string[];
  };
  Reviews: Array<{
    id: string;
    comment: string;
    rating: number;
    createdAt: string;
  }>;
}

export const AppointmentService = {
  async getAppointments(filters?: { search?: string; reviewed?: 'reviewed' | 'not-reviewed' }): Promise<Appointment[]> {
    const params = new URLSearchParams();

    if (filters?.search) params.append('search', filters.search);
    if (filters?.reviewed) params.append('reviewed', filters.reviewed);

    const response = await axiosInstance.get(`/appointments?${params.toString()}`);
    return response.data;
  },

  async submitReview(appointmentId: string, rating: number, comment: string): Promise<void> {
    await axiosInstance.post(`/appointments/${appointmentId}/reviews`, {
      rating,
      comment,
    });
  },

  async submitAppointment(schedule_id: string, notes: string): Promise<void> {
    await axiosInstance.post(`/appointments`, { schedule_id, notes });
  },
};
