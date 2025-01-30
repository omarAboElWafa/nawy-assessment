export interface IApartmentFilters {
  name?: string;
  location?: string;
  rooms?: number;
  bathrooms?: number;
  area?: number;
  dateRange?: {
    startDate: Date;
    endDate: Date;
  };
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
  availableFrom?: Date;
  sort?: {
    by: 'price' | 'area';
    order: 'asc' | 'desc';
  };
}
