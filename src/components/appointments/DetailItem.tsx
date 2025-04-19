import { ReactNode } from 'react';

export const DetailItem = ({ icon, title, value }: { icon: ReactNode; title: string; value: string }) => (
  <div className="flex flex-col items-center md:items-start gap-1">
    <div className="flex items-center gap-2 text-sm font-medium">
      {icon}
      <span>{title}</span>
    </div>
    <span className="text-sm text-muted-foreground">{value}</span>
  </div>
);
