export interface Review {
  id: string;
  comment: string;
  rating: number;
  createdAt: string;
}

export interface ScheduleSummary {
  avatar?: string; 
  photographerName: string;
  date: string;
  timeSlot: string;
}

export interface Appointment {
  id: string;
  userId: string;
  scheduleId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes: string;
  createdAt: string;
  Schedule: ScheduleSummary;
  Reviews: Review[];
}
