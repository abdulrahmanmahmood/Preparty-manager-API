import { Faker } from '@faker-js/faker';
import { Property } from '../entities/property.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFactory = setSeederFactory(Property, (faker: Faker) => {
  const property = new Property();
  property.name = faker.location.streetAddress();
  property.description = faker.lorem.paragraph();
  property.price = faker.number.int({ min: 50000, max: 1000000 });
  return property;
});
