import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';

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

  @Post()
  createAlbum(@Body() dto: CreateAlbumDto) {
    return this.albumService.createAlbum(dto);
  }
}
