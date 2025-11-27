import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db, uuid } from 'src/db';
import { validate as uuidValidate } from 'uuid';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  findAllArtists() {
    return db.artists;
  }

  findArtistById(id: string) {
    const artist = db.artists.find((artist) => artist.id === id);

    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid artist ID');
    }

    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return artist;
  }

  createArtist(dto: CreateArtistDto) {
    const newArtist = {
      id: uuid(),
      ...dto,
    };

    db.artists.push(newArtist);

    return newArtist;
  }

  updateArtist(id: string, dto: UpdateArtistDto) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid artist ID');
    }

    const existingArtist = this.findArtistById(id);

    if (!existingArtist) {
      throw new NotFoundException('Artist not found');
    }

    const updatedArtist = {
      ...existingArtist,
      ...dto,
    };

    db.artists = db.artists.map((artist) =>
      artist.id === id ? updatedArtist : artist,
    );

    return updatedArtist;
  }
}
