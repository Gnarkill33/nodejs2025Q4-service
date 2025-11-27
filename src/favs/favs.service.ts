import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { db } from 'src/db';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class FavsService {
  findAllFavorites() {
    return {
      artists: db.artists.filter((artist) =>
        db.favorites.artists.includes(artist.id),
      ),
      albums: db.albums.filter((album) =>
        db.favorites.albums.includes(album.id),
      ),
      tracks: db.tracks.filter((track) =>
        db.favorites.tracks.includes(track.id),
      ),
    };
  }

  addTrackToFavs(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const existingTrack = db.tracks.find((track) => track.id === id);

    if (!existingTrack) {
      throw new UnprocessableEntityException('Track not found');
    }

    db.favorites.tracks.push(existingTrack.id);

    return {
      message: 'Track added to favorites',
      statusCode: 201,
    };
  }

  deleteTrackFromFavs(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const existingTrack = db.favorites.tracks.find((trackId) => trackId === id);

    if (!existingTrack) {
      throw new NotFoundException('Track not found in favorites');
    }

    db.favorites.tracks = db.favorites.tracks.filter(
      (trackId) => trackId !== id,
    );
  }

  addAlbumToFavs(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid album ID');
    }

    const existingAlbum = db.albums.find((album) => album.id === id);

    if (!existingAlbum) {
      throw new UnprocessableEntityException('Album not found');
    }

    db.favorites.albums.push(existingAlbum.id);

    return {
      message: 'Album added to favorites',
      statusCode: 201,
    };
  }

  deleteAlbumFromFavs(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid album ID');
    }

    const existingAlbum = db.favorites.albums.find((albumId) => albumId === id);

    if (!existingAlbum) {
      throw new NotFoundException('Album not found in favorites');
    }

    db.favorites.albums = db.favorites.albums.filter(
      (albumId) => albumId !== id,
    );
  }
}
