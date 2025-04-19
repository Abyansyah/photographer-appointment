import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { RotateCcw, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { dataCategory, dataLocation } from '@/constant/schedule';

export const FilterSidebar = ({
  availabilityFilter,
  timeSlotFilter,
  sortBy,
  timeSlots,
  locationFilter,
  categoryFilter,
  onAvailabilityChange,
  onTimeSlotChange,
  onSortChange,
  onLocationChange,
  onCategoryChange,
  onReset,
}: {
  availabilityFilter: string;
  timeSlotFilter: string;
  sortBy: string;
  locationFilter: string;
  categoryFilter: string;
  timeSlots: string[];
  onAvailabilityChange: (value: string) => void;
  onTimeSlotChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onReset: () => void;
}) => (
  <aside className="w-full md:w-64 space-y-6">
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onReset} className="flex items-center gap-1">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 w-full">
          <label className="text-sm font-medium mb-2">Availability</label>
          <Select value={availabilityFilter || 'all'} onValueChange={onAvailabilityChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Available</SelectItem>
              <SelectItem value="false">Booked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Time Slot</label>
          <Select value={timeSlotFilter || 'all'} onValueChange={onTimeSlotChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time Slots</SelectItem>
              {timeSlots.map((slot, index) => (
                <SelectItem key={index} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select value={locationFilter || 'All'} onValueChange={onLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {dataLocation.map((loc) => (
                <SelectItem key={loc.value} value={loc.value as string}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select value={categoryFilter || 'All'} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {dataCategory.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Sort By</label>
          <Select value={sortBy || 'desc'} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Rating: High to Low</SelectItem>
              <SelectItem value="asc">Rating: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  </aside>
);
