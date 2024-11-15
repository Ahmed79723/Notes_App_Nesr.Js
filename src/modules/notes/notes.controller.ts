import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { addNoteDto, ParamDto, updateNoteDto } from './dto/note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
@UseGuards(AuthGuard) //global Guard
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Post()
  // @UseGuards(AuthGuard) //on the first route only
  addNote(@Body() body: addNoteDto, @Req() req: any) {
    body.user = req.user.userId;
    return this.notesService.addNote(body);
  }
  @Get()
  getAllNotes(@Req() req: any) {
    return this.notesService.getAllNotes(req);
  }
  @Delete(':id')
  deleteNote(@Param() param: ParamDto) {
    return this.notesService.deleteNote(param.id);
  }
  @Put(':id')
  updateNote(@Param() param: ParamDto, @Body() body: updateNoteDto) {
    return this.notesService.updateNote(body, param.id);
  }
}
