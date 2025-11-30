import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from './property.factory';
import { userFactory } from './user.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { MainSeeder } from './main.seeder';
import dbConfig from '../config/db.config';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  factories: [PropertyFactory, userFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
