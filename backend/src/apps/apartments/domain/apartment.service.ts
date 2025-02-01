import { IApartmentsService } from './interfaces/IApartmentsService';
import { ApartmentRepository } from '../data-access/apartment.repository';
import { ApartmentDTO } from './apartment.dto';
import { IApartmentFilters } from './interfaces/IApartmentFilter';

const repo = new ApartmentRepository();

export class ApartmentService implements IApartmentsService {
  async getAllApartments(filters: IApartmentFilters) {
    try {
      return await repo.getAllApartments(filters);
    } catch (error) {
      console.error('Error getting all apartments:', error);
      throw new Error('Could not retrieve apartments');
    }
  }

  async addApartment(apartment: ApartmentDTO): Promise<ApartmentDTO> {
    try {
      return await repo.addApartment(apartment);
    } catch (error) {
      console.error('Error adding apartment:', error);
      throw new Error('Could not add apartment');
    }
  }

  async getApartmentById(id: string) {
    try {
      return await repo.getApartmentById(id);
    } catch (error) {
      console.error('Error getting apartment by ID:', error);
      throw new Error('Could not retrieve apartment');
    }
  }

  async findByLocation(location: string) {
    try {
      return await repo.findByLocation(location);
    } catch (error) {
      console.error('Error finding apartments by location:', error);
      throw new Error('Could not find apartments by location');
    }
  }

  async findByPrice(price: number) {
    try {
      return await repo.findByPrice(price);
    } catch (error) {
      console.error('Error finding apartments by price:', error);
      throw new Error('Could not find apartments by price');
    }
  }

  async findByArea(area: number) {
    try {
      return await repo.findByArea(area);
    } catch (error) {
      console.error('Error finding apartments by area:', error);
      throw new Error('Could not find apartments by area');
    }
  }

  async findByRooms(rooms: number) {
    try {
      return await repo.findByRooms(rooms);
    } catch (error) {
      console.error('Error finding apartments by rooms:', error);
      throw new Error('Could not find apartments by rooms');
    }
  }

  async findByBedrooms(bedrooms: number) {
    try {
      return await repo.findByBedrooms(bedrooms);
    } catch (error) {
      console.error('Error finding apartments by bedrooms:', error);
      throw new Error('Could not find apartments by bedrooms');
    }
  }
}
