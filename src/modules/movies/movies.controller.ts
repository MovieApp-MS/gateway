import { Controller, Delete, Get, Inject, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CREATE_MOVIE_FAV_TO_USER,
  DELETE_FAV_MOVIE,
  FIND_ALL_FAV_MOVIES,
  FIND_MOVIES,
  FIND_MOVIES_BY_ID,
} from './movies.module';

@Controller('movies')
export class MoviesController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get('/by-title')
  findAll(@Query() query: { title: string; userId: string }) {
    const payload = query;

    return this.client.send(FIND_MOVIES, payload);
    // this.moviesService.findAll(query.title, query.userId);
  }

  @Get('/by-id')
  findById(@Query() payload: { movieId: string }) {
    return this.client.send(FIND_MOVIES_BY_ID, payload);
  }

  @Get('/favorites')
  findAllFav(@Query() query: { user: string }) {
    return this.client.send(FIND_ALL_FAV_MOVIES, query);
  }

  @Post('/favorites')
  createFavourite(@Query() payload: { movieId: string; userId: string }) {
    return this.client.send(CREATE_MOVIE_FAV_TO_USER, payload);
  }

  @Delete('/favorites')
  findAndDelete(@Query() query: { userId: string; movieId: string }) {
    return this.client.send(DELETE_FAV_MOVIE, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
  //   return this.moviesService.update(+id, updateMovieDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moviesService.remove(+id);
  // }
}
