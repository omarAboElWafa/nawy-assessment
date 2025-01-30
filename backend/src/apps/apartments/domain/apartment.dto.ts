import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class ApartmentDTO {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsNumber()
  rooms: number;

  @IsNumber()
  bathrooms: number;

  @IsNumber()
  area: number;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  availableFrom?: Date;

  @IsOptional()
  @IsString({ each: true })
  amenities?: string[];

  constructor(
    _id: string,
    name: string,
    location: string,
    rooms: number,
    bathrooms: number,
    area: number,
    price: number,
    description?: string,
    availableFrom?: Date,
    amenities?: string[],
  ) {
    this._id = _id;
    this.name = name;
    this.location = location;
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.area = area;
    this.price = price;
    this.description = description;
    this.availableFrom = availableFrom;
    this.amenities = amenities;
  }
}
