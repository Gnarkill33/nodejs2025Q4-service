import { Injectable } from '@nestjs/common';
import { db } from 'src/db';

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
}
