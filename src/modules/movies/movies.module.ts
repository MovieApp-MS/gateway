import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/commons/enviroments';

export const FIND_MOVIES = 'FIND_MOVIES';
export const FIND_MOVIES_BY_ID = 'FIND_MOVIES_BY_ID';
export const CREATE_MOVIE_FAV_TO_USER = 'CREATE_MOVIE_FAV_TO_USER';
export const FIND_ALL_FAV_MOVIES = 'FIND_ALL_FAV_MOVIES';
export const DELETE_FAV_MOVIE = 'DELETE_FAV_MOVIE';

@Module({
  controllers: [MoviesController],
  providers: [],
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: envs.MOVIE_SERVICE_HOST,
          port: envs.MOVIE_SERVICE_PORT,
        },
      },
    ]),
  ],
})
export class MoviesModule {}
