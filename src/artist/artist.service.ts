import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db } from 'src/db';
import { validate as uuidValidate } from 'uuid';

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
}
