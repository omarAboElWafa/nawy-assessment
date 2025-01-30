import mongoose, { Schema, Document } from 'mongoose';
import { Apartment } from './interfaces/IApartment';

const apartmentSchema = new Schema<Apartment>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  amenities: { type: [String], required: true },
  availableFrom: { type: Date, required: true },
  images: { type: [String], required: true },
});

export const ApartmentModel = mongoose.model<Apartment>(
  'Apartment',
  apartmentSchema,
);
