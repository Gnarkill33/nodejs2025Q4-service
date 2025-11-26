import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db } from 'src/db';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class TrackService {
  findAllTracks() {
    return db.tracks;
  }

  findTrackById(id: string) {
    const track = db.tracks.find((track) => track.id === id);

    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    if (!track) {
      throw new NotFoundException('Track not found');
    }

    return track;
  }
}
