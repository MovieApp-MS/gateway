import { IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  year: string;
  @IsString()
  genre: string;
  @IsString()
  director: string;
  @IsString()
  plot: string;
  @IsString()
  country: string;
  @IsString()
  poster: string;
}
