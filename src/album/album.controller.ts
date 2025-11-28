import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Album } from './entity/album.entity';

@ApiTags('Albums')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  @ApiOperation({ summary: 'Get albums list' })
  @ApiResponse({ status: HttpStatus.OK, type: Album })
  findAllAlbums() {
    return this.albumService.findAllAlbums();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get single album by id' })
  @ApiParam({ name: 'id', required: true, description: 'Album identifier' })
  @ApiResponse({ status: HttpStatus.OK, type: Album })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid album ID',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Album not found',
  })
  findAlbumById(@Param('id') id: string) {
    return this.albumService.findAlbumById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add new album' })
  @ApiBody({ type: CreateAlbumDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Album has been created',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Missing required fields',
  })
  createAlbum(@Body() dto: CreateAlbumDto) {
    return this.albumService.createAlbum(dto);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update album information' })
  @ApiParam({ name: 'id', required: true, description: 'Album identifier' })
  @ApiBody({ type: UpdateAlbumDto })
  @ApiResponse({ status: HttpStatus.OK, type: Album })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid album ID',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Album not found',
  })
  updateAlbum(@Param('id') id: string, @Body() dto: UpdateAlbumDto) {
    return this.albumService.updateAlbum(id, dto);
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete album' })
  @ApiParam({ name: 'id', required: true, description: 'Album identifier' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Album has been deleted',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid album ID',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Album not found',
  })
  deleteAlbum(@Param('id') id: string) {
    return this.albumService.deleteAlbum(id);
  }
}
