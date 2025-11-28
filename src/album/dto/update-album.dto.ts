import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateAlbumDto {
  @ApiProperty({ description: 'Album name', nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Album release year', nullable: false })
  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  year: number;

  @ApiProperty({ description: 'Artist identifier', nullable: true })
  @IsOptional()
  @IsUUID()
  artistId: string | null;
}
