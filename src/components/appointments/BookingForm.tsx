import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface BookingFormProps {
  notes: string;
  isSubmitting: boolean;
  onNotesChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const BookingForm = ({ notes, isSubmitting, onNotesChange, onSubmit }: BookingFormProps) => (
  <form onSubmit={onSubmit}>
    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md border border-purple-100 dark:border-purple-800/30">
      <h4 className="text-sm font-medium flex items-center gap-2 mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        Session Notes
      </h4>
      <Textarea placeholder="Add any special requests or notes for the photographer..." value={notes} onChange={(e) => onNotesChange(e.target.value)} rows={5} className="resize-none" />
    </div>

    <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
      {isSubmitting ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : (
        'Confirm Booking'
      )}
    </Button>
  </form>
);
