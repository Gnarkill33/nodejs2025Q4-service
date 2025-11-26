import {
  IsString,
  IsUUID,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsInt,
} from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  artistId: string | null;

  @IsUUID()
  @IsNotEmpty()
  albumId: string | null;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  duration: number;
}
