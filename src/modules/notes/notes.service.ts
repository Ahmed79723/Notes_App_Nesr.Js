import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schemas/note.schema';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Notes.name) private notesModel: Model<Notes>) {}

  addNote = async (note: any) => {
    // const newNote = new this.notesModel(note);
    // return await newNote.save();
    // OR
    this.notesModel.insertMany(note);
    return { message: 'success' };
  };
  getAllNotes = async (req: any) => {
    const notes = await this.notesModel.find({ user: req.user.userId });
    return { message: 'success', notes };
  };
  updateNote = async (note: any, id: any) => {
    const newNote = await this.notesModel.findByIdAndUpdate(id, note, {
      new: true,
    });
    return { message: 'success', note: newNote };
  };
  deleteNote = async (id: any) => {
    const note = await this.notesModel.findByIdAndDelete(id);
    return { message: 'success', note };
  };
}
