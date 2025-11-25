import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}
  async findOne(id: number): Promise<Property> {
    const property = await this.propertyRepository.findOne({ where: { id } });
    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return property;
  }

  async findAll(): Promise<Property[]> {
    return await this.propertyRepository.find();
  }

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.save(createPropertyDto);
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const result = await this.propertyRepository.update(id, updatePropertyDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async delete(id: number) {
    const result = await this.propertyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return { message: `Property with ID ${id} deleted successfully` };
  }
}
