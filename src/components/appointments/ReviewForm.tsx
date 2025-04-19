import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { Appointment } from '@/types/appointment';

export const ReviewForm = ({
  open,
  onOpenChange,
  isDesktop,
  photographerName,
  rating,
  reviewText,
  setRating,
  setReviewText,
  onSubmit,
  isSubmitting,
  appointment,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isDesktop: boolean;
  photographerName?: string;
  rating: number;
  reviewText: string;
  setRating: (rating: number) => void;
  setReviewText: (text: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  appointment?: Appointment | null;
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const isEditing = Boolean(appointment?.Reviews?.length);

  const Content = () => (
    <>
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button disabled={isSubmitting} key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoveredRating(star)} onMouseLeave={() => setHoveredRating(0)} className="focus:outline-none">
              <Star size={24} className={`${star <= (hoveredRating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} cursor-pointer`} />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">Your Review</label>
        <Textarea disabled={isSubmitting} placeholder="Share your experience..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} rows={4} />
      </div>
    </>
  );

  return isDesktop ? (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Update' : 'Leave a'} Review</DialogTitle>
          <DialogDescription>Share your experience with {photographerName}</DialogDescription>
        </DialogHeader>
        <div className="py-4">{Content()}</div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            {isEditing ? 'Update' : 'Submit'} Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{isEditing ? 'Update' : 'Leave a'} Review</DrawerTitle>
          <DrawerDescription>Share your experience with {photographerName}</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2">{Content()}</div>
        <DrawerFooter className="pt-2">
          <Button disabled={isSubmitting} onClick={onSubmit}>
            {isEditing ? 'Update' : 'Submit'} Review
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
