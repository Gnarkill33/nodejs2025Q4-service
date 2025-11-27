import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db, uuid } from 'src/db';
import { validate as uuidValidate } from 'uuid';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

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

  createTrack(dto: CreateTrackDto) {
    const newTrack = {
      id: uuid(),
      ...dto,
    };

    db.tracks.push(newTrack);

    return newTrack;
  }

  updateTrack(id: string, dto: UpdateTrackDto) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const existingTrack = this.findTrackById(id);

    if (!existingTrack) {
      throw new NotFoundException('Track not found');
    }

    const updatedTrack = {
      ...existingTrack,
      ...dto,
    };

    db.tracks = db.tracks.map((track) =>
      track.id === id ? updatedTrack : track,
    );

    return updatedTrack;
  }

  deleteTrack(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const existingTrack = this.findTrackById(id);

    if (!existingTrack) {
      throw new NotFoundException('Track not found');
    }

    db.tracks = db.tracks.filter((track) => track.id !== id);

    db.favorites.tracks.filter((trackId) => trackId !== id);
  }
}
