import {
  IsString,
  IsUUID,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsInt,
} from 'class-validator';
export class UpdateTrackDto {
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
