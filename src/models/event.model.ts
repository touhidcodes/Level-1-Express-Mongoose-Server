import { Schema, model } from 'mongoose';
import { IEvent } from '../types/event.interface';

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  organizer: { type: String, required: true },
}, {
  timestamps: true,
});

export const Event = model<IEvent>('Event', eventSchema);
