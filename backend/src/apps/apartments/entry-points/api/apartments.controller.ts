import { Request, Response } from 'express';
import { IApartmentsService } from '../../domain/interfaces/IApartmentsService';
import { ApartmentService } from '../../domain/apartment.service';
import { IApartmentFilters } from '../../domain/interfaces/IApartmentFilter';
import { ApartmentDTO } from '../../domain/apartment.dto';
import { getFiltersFromRequest } from '../../domain/utils/getFiltersFromRequest';

export class ApartmentsController {
  private service: IApartmentsService;

  public constructor(service?: IApartmentsService) {
    this.service = service ?? new ApartmentService();
  }

  public readonly getAppartments = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    const filters = getFiltersFromRequest(req);

    try {
      const apartments = await this.service.getAllApartments(filters);
      return res.json(apartments);
    } catch (error: Error | any) {
      return res.status(500).json({ error: error.message });
    }
  };

  public readonly addApartment = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    const apartmentToAdd: ApartmentDTO = req.body;

    try {
      const addedApartment = await this.service.addApartment(apartmentToAdd);
      return res.status(201).json(addedApartment);
    } catch (error: Error | any) {
      return res.status(500).json({ error: error.message });
    }
  };

  public readonly getApartmentById = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    const apartmentId = req.params.id;

    try {
      const apartment = await this.service.getApartmentById(apartmentId);
      return res.json(apartment);
    } catch (error: Error | any) {
      return res.status(500).json({ error: error.message });
    }
  };
}
