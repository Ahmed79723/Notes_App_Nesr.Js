import { IsMongoId, IsOptional, MaxLength, MinLength } from 'class-validator';

class addNoteDto {
  @MaxLength(20)
  @MinLength(3)
  title: string;
  @MaxLength(20)
  @MinLength(3)
  description: string;
  @IsMongoId()
  @IsOptional()
  user: string;
}
class ParamDto {
  @IsMongoId()
  id: string;
}
class updateNoteDto {
  @MaxLength(20)
  @MinLength(3)
  @IsOptional()
  title: string;
  @MaxLength(2000)
  @MinLength(3)
  @IsOptional()
  description: string;
  @IsMongoId()
  @IsOptional()
  user: string;
}
export { addNoteDto, ParamDto, updateNoteDto };
