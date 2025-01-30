import { IApartmentsService } from './interfaces/IApartmentsService';
import { ApartmentRepository } from '../data-access/apartment.repository';
import { ApartmentDTO } from './apartment.dto';
import { IApartmentFilters } from './interfaces/IApartmentFilter';

const repo = new ApartmentRepository();

export class ApartmentService implements IApartmentsService {
  async getAllApartments(filters: IApartmentFilters) {
    return repo.getAllApartments(filters);
  }

  async addApartment(apartment: ApartmentDTO) {
    return repo.addApartment(apartment);
  }

  async getApartmentById(id: string) {
    return repo.getApartmentById(id);
  }
}
