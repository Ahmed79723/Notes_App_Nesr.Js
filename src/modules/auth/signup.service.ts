import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  // &the user argument here comes from the controller function that accepted the user input from body
  signup = async (user: any) => {
    const isUser = await this.userModel.findOne({ email: user.email });
    if (isUser)
      throw new HttpException('email already in use', HttpStatus.CONFLICT);
    //  return { msg: 'email already in use' };
    // insert into database
    user.password = await bcrypt.hash(user.password, 8);
    await this.userModel.insertMany(user);
    return { message: 'success' };
  };
}
