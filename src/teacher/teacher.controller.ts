import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { QueryTeacherByNameDto } from './dto/query-teacher.dto';
import { DeleteTeacherByTidDto } from './dto/del-tid.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Post('/query')
  query(@Body() queryDto: QueryTeacherByNameDto) {
    return this.teacherService.findByName(queryDto);
  }

  @Patch('/update')
  update(@Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(updateTeacherDto);
  }

  @Delete('/delete')
  remove(@Body() deleteTeacherDto: DeleteTeacherByTidDto) {
    return this.teacherService.remove(deleteTeacherDto);
  }
}
