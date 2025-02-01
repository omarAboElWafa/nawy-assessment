import { Router } from 'express';
import { ApartmentsController } from './apartments.controller';
import { IApartmentsService } from '../../domain/interfaces/IApartmentsService';
import { ApartmentService } from '../../domain/apartment.service';

const router = Router();

const service: IApartmentsService = new ApartmentService();
const controller = new ApartmentsController(service);

router.get('/', controller.getAppartments);
router.get('/:id', controller.getApartmentById);
router.post('/', controller.addApartment);

export default router;
