import {
  IsString,
  IsUUID,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsInt,
  IsOptional,
} from 'class-validator';
export class UpdateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsUUID()
  artistId: string | null;

  @IsOptional()
  @IsUUID()
  albumId: string | null;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  duration: number;
}
