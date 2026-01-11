import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/commons/enviroments';

const clientsModule = ClientsModule.register([
  {
    name: 'MATH_SERVICE',
    transport: Transport.TCP,
    options: {
      host: envs.MOVIE_SERVICE_HOST,
      port: envs.MOVIE_SERVICE_PORT,
    },
  },
  {
    name: 'RECOMMNENDATION_SERVICE',
    transport: Transport.TCP,
    options: {
      host: envs.RECOMMENDATION_SERVICE_HOST,
      port: envs.RECOMMENDATION_SERVICE_PORT,
    },
  },
]);

@Module({
  providers: [],
  imports: [HttpModule, clientsModule],
  exports: [clientsModule],
})
export class MicroserviceModule {}
