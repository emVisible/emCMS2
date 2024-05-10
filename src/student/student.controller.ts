import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentNameDto } from './dto/query-name.dto';
import { StudentSidDto } from './dto/del-sid.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  /**
   * 创建学生
  */
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  /**
   * 根据名称查找学生
  */
  @Post('/query')
  query(@Body() queryDto: StudentNameDto) {
    const { name } = queryDto
    console.log('name', name)
    return this.studentService.findByName(name);
  }

  /**
   * 查找全部学生
  */
  @Get()
  findAll() {
    return this.studentService.findAll();
  }



  /**
   * 更新学生信息
  */
  @Patch('/update')
  update(@Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(updateStudentDto);
  }

  /**
   * 删除学生
  */
  @Delete('/delete')
  remove(@Body() deleteDto: StudentSidDto) {
    const { s_id } = deleteDto
    return this.studentService.remove(s_id);
  }
}
