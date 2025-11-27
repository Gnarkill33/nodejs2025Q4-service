import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db } from 'src/db';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class AlbumService {
  findAllAlbums() {
    return db.albums;
  }

  findAlbumById(id: string) {
    const album = db.albums.find((album) => album.id === id);

    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid album ID');
    }

    if (!album) {
      throw new NotFoundException('Album not found');
    }

    return album;
  }
}
