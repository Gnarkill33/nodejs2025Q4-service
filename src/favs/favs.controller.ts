import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  findAllFavourites() {
    return this.favsService.findAllFavorites();
  }

  @Post('/track/:id')
  addTrackToFavs(@Param('id') id: string) {
    return this.favsService.addTrackToFavs(id);
  }

  @Delete('/track/:id')
  @HttpCode(204)
  deleteTrackFromFavs(@Param('id') id: string) {
    return this.favsService.deleteTrackFromFavs(id);
  }

  @Post('/album/:id')
  addAlbumToFavs(@Param('id') id: string) {
    return this.favsService.addAlbumToFavs(id);
  }

  @Delete('/album/:id')
  @HttpCode(204)
  deleteAlbumFromFavs(@Param('id') id: string) {
    return this.favsService.deleteAlbumFromFavs(id);
  }

  @Post('/artist/:id')
  addArtistToFavs(@Param('id') id: string) {
    return this.favsService.addArtistToFavs(id);
  }

  @Delete('/artist/:id')
  @HttpCode(204)
  deleteArtistFromFavs(@Param('id') id: string) {
    return this.favsService.deleteArtistFromFavs(id);
  }
}
