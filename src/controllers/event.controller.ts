import { Request, Response } from 'express';
import { Event } from '../models/event.model';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: savedEvent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create event',
      error: err.message,
    });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      message: 'Events fetched successfully',
      data: events,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch events',
      error: err.message,
    });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event fetched successfully',
      data: event,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch event',
      error: err.message,
    });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event updated successfully',
      data: updatedEvent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update event',
      error: err.message,
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete event',
      error: err.message,
    });
  }
};
