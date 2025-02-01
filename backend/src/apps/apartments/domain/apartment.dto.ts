import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class ApartmentDTO {
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  subtitle: string;

  @IsString()
  location: string;

  @IsNumber()
  rooms: number;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  bathrooms: number;

  @IsNumber()
  area: number;

  @IsNumber()
  price: number;

  @IsString()
  currency: string;

  @IsString()
  payment: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  availableFrom?: Date;

  @IsOptional()
  @IsString({ each: true })
  amenities?: string[];

  @IsOptional()
  @IsString({ each: true })
  images?: string[];

  constructor(
    _id: string,
    title: string,
    subtitle: string,
    location: string,
    rooms: number,
    bedrooms: number,
    bathrooms: number,
    area: number,
    price: number,
    currency: string,
    payment: string,
    description?: string,
    availableFrom?: Date,
    amenities?: string[],
    images?: string[],
  ) {
    this._id = _id;
    this.title = title;
    this.subtitle = subtitle;
    this.location = location;
    this.rooms = rooms;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.area = area;
    this.price = price;
    this.currency = currency;
    this.payment = payment;
    this.description = description;
    this.availableFrom = availableFrom;
    this.amenities = amenities;
    this.images = images;
  }
}
