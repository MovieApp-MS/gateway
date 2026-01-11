import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RecommendationController } from './recommendation.controller';
import { MicroserviceModule } from '../microservice/microservice.module';

export const FIND_RECOMMENDATION = 'FIND_RECOMMENDATION';

@Module({
  controllers: [RecommendationController],
  providers: [],
  imports: [HttpModule, MicroserviceModule],
})
export class RecommendationModule {}
