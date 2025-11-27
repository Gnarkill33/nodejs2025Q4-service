import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db, uuid } from 'src/db';
import { validate as uuidValidate } from 'uuid';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

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

  createAlbum(dto: CreateAlbumDto) {
    const newAlbum = {
      id: uuid(),
      ...dto,
    };

    db.albums.push(newAlbum);

    return newAlbum;
  }

  updateAlbum(id: string, dto: UpdateAlbumDto) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid album ID');
    }

    const existingAlbum = this.findAlbumById(id);

    if (!existingAlbum) {
      throw new NotFoundException('Album not found');
    }

    const updatedAlbum = {
      ...existingAlbum,
      ...dto,
    };

    db.albums = db.albums.map((album) =>
      album.id === id ? updatedAlbum : album,
    );

    return updatedAlbum;
  }
}
