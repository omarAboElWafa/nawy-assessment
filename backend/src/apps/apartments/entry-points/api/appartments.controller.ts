import { Request, Response } from 'express';
import { IApartmentsService } from '@apps/apartments/domain/interfaces/IApartmentsService';
import { ApartmentService } from '@apps/apartments/domain/apartment.service';
import { IApartmentFilters } from '@apps/apartments/domain/interfaces/IApartmentFilter';
import { ApartmentDTO } from '@apps/apartments/domain/apartment.dto';
import { getFiltersFromRequest } from '@apps/apartments/domain/utils/getFiltersFromRequest';

export class ApartmentsController {
  private service: IApartmentsService = new ApartmentService();
  private readonly getFiltersFromRequest = getFiltersFromRequest;

  async getAppartments(req: Request, res: Response): Promise<void> {
    const filters: IApartmentFilters = this.getFiltersFromRequest(req);

    try {
      const apartments = await this.service.getAllApartments(filters);
      res.json(apartments);
    } catch (error: Error | any) {
      res.status(500).json({ error: error.message });
    }
  }

  async addApartment(req: Request, res: Response): Promise<void> {
    const apartmentToAdd: ApartmentDTO = req.body;

    try {
      const addedApartment = await this.service.addApartment(apartmentToAdd);
      res.status(201).json(addedApartment);
    } catch (error: Error | any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getApartmentById(req: Request, res: Response): Promise<void> {
    const apartmentId = req.params.id;

    try {
      const apartment = await this.service.getApartmentById(apartmentId);
      res.json(apartment);
    } catch (error: Error | any) {
      res.status(500).json({ error: error.message });
    }
  }
}
