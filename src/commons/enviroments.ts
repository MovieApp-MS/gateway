import 'dotenv/config';
import joi from 'joi';

interface enviroments {
  PORT: number;
  MOVIE_SERVICE_FIND_MOVIES: string;
  MOVIE_SERVICE_PORT: number;
  MOVIE_SERVICE_HOST: string;
  RECOMMENDATION_SERVICE_PORT: number;
  RECOMMENDATION_SERVICE_HOST: string;
}

const envSchems = joi
  .object({
    PORT: joi.string().required(),
    MOVIE_SERVICE_FIND_MOVIES: joi.string().required(),
    MOVIE_SERVICE_HOST: joi.string().required(),
    MOVIE_SERVICE_PORT: joi.number().required(),
    RECOMMENDATION_SERVICE_HOST: joi.string().required(),
    RECOMMENDATION_SERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { error, value } = envSchems.validate(process.env);

if (error) {
  throw new Error(`Config validation Enviroments ${error.message}`);
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envsVars: enviroments = value;

export const envs = {
  PORT: envsVars.PORT,
  MOVIE_SERVICE_FIND_MOVIES: envsVars.MOVIE_SERVICE_FIND_MOVIES,
  MOVIE_SERVICE_HOST: envsVars.MOVIE_SERVICE_HOST,
  MOVIE_SERVICE_PORT: envsVars.MOVIE_SERVICE_PORT,
  RECOMMENDATION_SERVICE_HOST: envsVars.RECOMMENDATION_SERVICE_HOST,
  RECOMMENDATION_SERVICE_PORT: envsVars.RECOMMENDATION_SERVICE_PORT,
};
