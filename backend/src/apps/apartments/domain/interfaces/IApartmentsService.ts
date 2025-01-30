import { ApartmentDTO } from '../apartment.dto';
import { IApartmentFilters } from '../interfaces/IApartmentFilter';

export interface IApartmentsService {
  getAllApartments(filters?: IApartmentFilters): Promise<ApartmentDTO[]>;
  addApartment(apartment: ApartmentDTO): Promise<ApartmentDTO>;
  getApartmentById(id: string): Promise<ApartmentDTO | null>;
}
