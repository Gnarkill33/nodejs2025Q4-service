import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

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

  @Put('/:id')
  updateTrack(@Param('id') id: string, @Body() dto: UpdateTrackDto) {
    return this.trackService.updateTrack(id, dto);
  }
}
