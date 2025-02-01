import { ApartmentDTO } from '../domain/apartment.dto';
import { IApartmentFilters } from '../domain/interfaces/IApartmentFilter';
import { ApartmentModel } from './apartment.model';
import { IApartmentRepository } from './interfaces/IApartmentRepository';

export class ApartmentRepository implements IApartmentRepository {
  private readonly _model = ApartmentModel;

  async getAllApartments(filters: IApartmentFilters): Promise<ApartmentDTO[]> {
    return this._model.find().exec();
  }

  async addApartment(apartment: ApartmentDTO): Promise<ApartmentDTO> {
    return this._model.create(apartment);
  }

  async getApartmentById(id: string): Promise<ApartmentDTO | null> {
    return this._model.findById(id).exec();
  }

  async findByLocation(location: string): Promise<ApartmentDTO[]> {
    return this._model.find({ location }).exec();
  }

  async findByPrice(price: number): Promise<ApartmentDTO[]> {
    return this._model.find({ price }).exec();
  }

  async findByArea(area: number): Promise<ApartmentDTO[]> {
    return this._model.find({ area }).exec();
  }

  async findByRooms(rooms: number): Promise<ApartmentDTO[]> {
    return this._model.find({ rooms }).exec();
  }

  async findByBedrooms(bedrooms: number): Promise<ApartmentDTO[]> {
    return this._model.find({ bedrooms }).exec();
  }

  async findByBathrooms(bathrooms: number): Promise<ApartmentDTO[]> {
    return this._model.find({ bathrooms }).exec();
  }

  async findByAmenities(amenities: string[]): Promise<ApartmentDTO[]> {
    return this._model
      .find({ amenities: { $in: amenities } })
      .exec() as Promise<ApartmentDTO[]>;
  }
}
