import express from 'express';
import { eventControllers } from '../controllers/event.controller';

const router = express.Router();

router.post('/', eventControllers.createEvent);
router.get('/', eventControllers.getEvents);
router.get('/:id', eventControllers.getEventById);
router.put('/:id', eventControllers.updateEvent);
router.delete('/:id', eventControllers.deleteEvent);

export const EventRoutes = router;
