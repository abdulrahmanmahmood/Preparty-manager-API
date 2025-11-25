import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'mypassword123',
    database: process.env.DB_DATABASE || 'postgres',
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production!
  }),
);
