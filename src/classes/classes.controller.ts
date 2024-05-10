import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { QueryClassesDto } from './dto/query-classes.dto';
import { CreateClassesDto } from './dto/create-classes.dto';
import { UpdateClassesDto } from './dto/update-classes.dto';
import { DeleteClassesDto } from './dto/delete-classes.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  getAll(){
    return this.classesService.getAll()
  }

  @Post('/query')
  queryClass(@Body() dto:QueryClassesDto){
    return this.classesService.findByName(dto)
  }

  @Post()
  create(@Body() dto:CreateClassesDto){
    return this.classesService.create(dto)
  }

  @Patch('/update')
  update(@Body() dto:UpdateClassesDto){
    return this.classesService.update(dto)
  }

  @Delete('/delete')
  delete(@Body() dto:DeleteClassesDto){
    return this.classesService.delete(dto)
  }
}
