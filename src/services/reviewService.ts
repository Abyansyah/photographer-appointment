import axiosInstance from '@/config/axiosInstance';

export const ReviewService = {
  async submitReview(appointmentId: string, rating: number, comment: string): Promise<void> {
    await axiosInstance.post(`/reviews`, {
      rating,
      comment,
      appointmentId,
    });
  },

  async updateReview(reviewId: string, rating: number, comment: string): Promise<void> {
    await axiosInstance.patch(`/reviews/${reviewId}`, {
      rating,
      comment,
    });
  },
};
