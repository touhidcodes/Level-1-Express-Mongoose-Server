import express from 'express';
import { eventControllers } from '../controllers/event.controller';

const router = express.Router();
// Get all events
router.get('/', eventControllers.getEvents);
// Get single event
router.get('/:id', eventControllers.getEventById);
// Create event
router.post('/', eventControllers.createEvent);
// Update event
router.put('/:id', eventControllers.updateEvent);
// Delete event
router.delete('/:id', eventControllers.deleteEvent);

export const EventRoutes = router;
