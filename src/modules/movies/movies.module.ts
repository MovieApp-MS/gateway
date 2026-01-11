import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { HttpModule } from '@nestjs/axios';
import { MicroserviceModule } from '../microservice/microservice.module';

export const FIND_MOVIES = 'FIND_MOVIES';
export const FIND_MOVIES_BY_ID = 'FIND_MOVIES_BY_ID';
export const CREATE_MOVIE_FAV_TO_USER = 'CREATE_MOVIE_FAV_TO_USER';
export const FIND_ALL_FAV_MOVIES = 'FIND_ALL_FAV_MOVIES';
export const DELETE_FAV_MOVIE = 'DELETE_FAV_MOVIE';

@Module({
  controllers: [MoviesController],
  providers: [],
  imports: [HttpModule, MicroserviceModule],
})
export class MoviesModule {}
