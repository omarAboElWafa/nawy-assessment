import { Router } from 'express';
import { ApartmentsController } from './apartments.controller';

const router = Router();
const controller = new ApartmentsController();

router.get('/', controller.getAppartments);
router.get('/:id', controller.getApartmentById);
router.post('/', controller.addApartment);

export default router;
