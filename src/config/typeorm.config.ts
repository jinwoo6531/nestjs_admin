import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '5514',
  database: 'test3',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
