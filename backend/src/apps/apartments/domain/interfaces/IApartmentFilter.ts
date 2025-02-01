export interface IApartmentFilters {
  title?: string;
  subtitle?: string;
  location?: string;
  rooms?: number;
  bedrooms?: number;
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
