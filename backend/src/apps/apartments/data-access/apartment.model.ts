import mongoose, { Schema, Document } from 'mongoose';
import { Apartment } from './interfaces/IApartment';

const apartmentSchema = new Schema<Apartment>({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  payment: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
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
