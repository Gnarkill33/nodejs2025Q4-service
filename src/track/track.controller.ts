import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  findAllTracks() {
    return this.trackService.findAllTracks();
  }

  @Get('/:id')
  findTrackById(@Param('id') id: string) {
    return this.trackService.findTrackById(id);
  }

  @Post()
  createTrack(@Body() dto: CreateTrackDto) {
    return this.trackService.createTrack(dto);
  }
}
