import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  CreatePropertyZodDto,
  createPropertySchema,
} from './dto/createPropertyZod.dto';

import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { Property } from 'src/entities/property.entity';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { ApiResponseDto } from 'src/common/dto/api-response.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll(
    @Query() paginationDTO: PaginationDTO,
  ): Promise<PaginatedResponseDto<Property>> {
    return this.propertyService.findAll(paginationDTO);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<ApiResponseDto<Property>> {
    return this.propertyService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePropertyDto): Promise<ApiResponseDto<Property>> {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: UpdatePropertyDto,
  ): Promise<ApiResponseDto<Property>> {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number): Promise<ApiResponseDto<null>> {
    return this.propertyService.delete(id);
  }
}
