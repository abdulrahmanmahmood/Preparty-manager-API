import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { ApiResponseDto } from 'src/common/dto/api-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}
  async findOne(id: number): Promise<ApiResponseDto<Property>> {
    const property = await this.propertyRepository.findOne({ where: { id } });
    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return new ApiResponseDto<Property>(
      'Property retrieved successfully',
      property,
    );
  }

  async findAll(
    paginationDTO: PaginationDTO,
  ): Promise<PaginatedResponseDto<Property>> {
    const { skip = 0, limit: take = 10 } = paginationDTO;
    const hasNextPage =
      take && skip + take < (await this.propertyRepository.count());
    const hasPreviousPage = skip > 0;
    const properties = await this.propertyRepository.find({
      skip,
      take,
    });
    const total = await this.propertyRepository.count();
    return new PaginatedResponseDto<Property>(
      'Properties retrieved successfully',
      properties,
      total,
      hasNextPage,
      hasNextPage,
    );
  }

  async create(
    createPropertyDto: CreatePropertyDto,
  ): Promise<ApiResponseDto<Property>> {
    const property = await this.propertyRepository.save(createPropertyDto);

    return { data: property, message: 'Property created successfully' };
  }

  async update(
    id: number,
    updatePropertyDto: UpdatePropertyDto,
  ): Promise<ApiResponseDto<Property>> {
    const result = await this.propertyRepository.update(id, updatePropertyDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    const property = await this.findOne(id);
    return {
      data: property.data,
      message: `Property with ID ${id} updated successfully`,
    };
  }

  async delete(id: number): Promise<ApiResponseDto<null>> {
    const result = await this.propertyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return {
      data: null,
      message: `Property with ID ${id} deleted successfully`,
    };
  }
}
