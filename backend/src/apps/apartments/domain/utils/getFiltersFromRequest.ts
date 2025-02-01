import { Request } from 'express';
import { IApartmentFilters } from '../interfaces/IApartmentFilter';

export function getFiltersFromRequest(req: Request): IApartmentFilters {
  const filters: IApartmentFilters = {};
  const {
    title,
    subtitle,
    location,
    rooms,
    bedrooms,
    bathrooms,
    area,
    minPrice,
    maxPrice,
    amenities,
    availableFrom,
  } = req.query;
  if (title) filters.title = String(title);
  if (subtitle) filters.subtitle = String(subtitle);
  if (location) filters.location = String(location);
  if (rooms) filters.rooms = Number(rooms);
  if (bedrooms) filters.bedrooms = Number(bedrooms);
  if (bathrooms) filters.bathrooms = Number(bathrooms);
  if (area) filters.area = Number(area);
  if (minPrice) filters.minPrice = Number(minPrice);
  if (maxPrice) filters.maxPrice = Number(maxPrice);
  if (amenities)
    filters.amenities = Array.isArray(amenities)
      ? amenities.map((amenity) => String(amenity))
      : [String(amenities)];
  if (availableFrom) filters.availableFrom = new Date(String(availableFrom));

  const { startDate, endDate } = req.query;
  if (startDate && endDate) {
    filters.dateRange = {
      startDate: new Date(String(startDate)),
      endDate: new Date(String(endDate)),
    };
  }

  const { sortBy, sortOrder } = req.query;
  if (sortBy && sortOrder) {
    filters.sort = {
      by: sortBy as 'price' | 'area',
      order: sortOrder as 'asc' | 'desc',
    };
  }

  return filters as IApartmentFilters;
}
