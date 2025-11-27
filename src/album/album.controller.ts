import { Controller, Get, Param } from '@nestjs/common';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  findAllAlbums() {
    return this.albumService.findAllAlbums();
  }

  @Get('/:id')
  findAlbumById(@Param('id') id: string) {
    return this.albumService.findAlbumById(id);
  }
}
