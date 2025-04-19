import { useState, useEffect } from 'react';
import { AppointmentService, Appointment } from '@/services/appointmentService';
import { useAuthContext } from '@/auth/AuthContext';

export const useAppointments = (filters?: { search?: string; reviewed?: 'reviewed' | 'not-reviewed' }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuthContext();

  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const data = await AppointmentService.getAppointments(filters);
      setAppointments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load appointments');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchAppointments();
  }, [filters?.search, filters?.reviewed, isAuthenticated]);

  return { appointments, isLoading, error, refresh: fetchAppointments };
};
