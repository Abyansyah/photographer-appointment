import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import type { Dispatch, SetStateAction } from 'react';

type ReviewFilter = 'all' | 'reviewed' | 'not-reviewed';

export const AppointmentsFilter = ({
  searchTerm,
  setSearchTerm,
  reviewFilter,
  setReviewFilter,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  reviewFilter: ReviewFilter;
  setReviewFilter: Dispatch<SetStateAction<ReviewFilter>>;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Input placeholder="Search photographer..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="md:max-w-xs" />
      <Select value={reviewFilter} onValueChange={(value: ReviewFilter) => setReviewFilter(value)}>
        <SelectTrigger className="md:max-w-xs">
          <SelectValue placeholder="Filter by review status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Appointments</SelectItem>
          <SelectItem value="reviewed">Reviewed</SelectItem>
          <SelectItem value="not-reviewed">Not Reviewed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
