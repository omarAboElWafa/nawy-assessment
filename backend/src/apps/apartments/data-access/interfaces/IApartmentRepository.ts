import { ApartmentDTO } from '../../domain/apartment.dto';
export interface IApartmentRepository {
  findByLocation(location: string): Promise<ApartmentDTO[]>;
  findByPrice(price: number): Promise<ApartmentDTO[]>;
  findByArea(area: number): Promise<ApartmentDTO[]>;
  findByRooms(rooms: number): Promise<ApartmentDTO[]>;
  findByBedrooms(bedrooms: number): Promise<ApartmentDTO[]>;
  findByBathrooms(bathrooms: number): Promise<ApartmentDTO[]>;
  findByAmenities(amenities: string[]): Promise<ApartmentDTO[]>;
}
