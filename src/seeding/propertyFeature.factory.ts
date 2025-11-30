import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export const PropertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  (faker: Faker) => {
    const propertyFeature = new PropertyFeature();
    propertyFeature.area = faker.number.int({ min: 20, max: 500 });
    propertyFeature.bedrooms = faker.number.int({ min: 1, max: 10 });
    propertyFeature.bathrooms = faker.number.int({ min: 1, max: 10 });
    propertyFeature.parkingSpots = faker.number.int({ min: 0, max: 5 });
    propertyFeature.hasSwimmingPool = faker.datatype.boolean();
    propertyFeature.hasGardenYard = faker.datatype.boolean();

    return propertyFeature;
  },
);
