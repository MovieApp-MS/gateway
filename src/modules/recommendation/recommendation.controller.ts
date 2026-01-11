import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FIND_RECOMMENDATION } from './recommendation.module';
import { FIND_ALL_FAV_MOVIES } from '../movies/movies.module';
import { firstValueFrom } from 'rxjs';

@Controller('recommendation')
export class RecommendationController {
  constructor(
    @Inject('RECOMMNENDATION_SERVICE')
    private recommendationClient: ClientProxy,
    @Inject('MATH_SERVICE') private movieClient: ClientProxy,
  ) {}

  @Get()
  async findAll(@Query() query: { userId: string }) {
    try {
      const payload = query;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const favList = await firstValueFrom(
        this.movieClient.send(FIND_ALL_FAV_MOVIES, payload),
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const recommendated = await firstValueFrom(
        this.recommendationClient.send(FIND_RECOMMENDATION, favList),
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return recommendated;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
