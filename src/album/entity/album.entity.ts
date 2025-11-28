import { ApiProperty } from '@nestjs/swagger';

export class Album {
  @ApiProperty({ description: 'Album identifier', nullable: false })
  id: string;

  @ApiProperty({ description: 'Album name', nullable: false })
  name: string;

  @ApiProperty({ description: 'Album release year', nullable: false })
  year: number;

  @ApiProperty({ description: 'Artist identifier', nullable: true })
  artistId: string | null;
}
