import { Schema, model } from 'mongoose';

export interface IEvent {
  title: string;
  description: string;
  date: Date;
  location: string;
  organizer: string;
}

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
