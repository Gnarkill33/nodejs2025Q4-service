import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
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

  @Put('/:id')
  updateAlbum(@Param('id') id: string, @Body() dto: UpdateAlbumDto) {
    return this.albumService.updateAlbum(id, dto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteAlbum(@Param('id') id: string) {
    return this.albumService.deleteAlbum(id);
  }
}
