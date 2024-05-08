import { PrismaClient } from '@prisma/client'
import relations from './data/relations'
import teacher from './data/teacher'
import course from './data/course'
import classes from './data/classes'
import student from './data/student'
const prisma = new PrismaClient()
const loadCourse = async () => {
  await prisma.course.createMany({
    data: course
  })
}
const loadTeacher = async () => {
  await prisma.teacher.createMany({
    data: teacher
  })
}
const loadStudent = async () => {
  await prisma.student.createMany({
    data: student
  })
}

const loadRelations = async () => {
  await prisma.relations.createMany({
    data: relations
  })
}
const loadClasses = async() => {
  await prisma.classes.createMany({
    data: classes
  })
}
function loadData() {
  loadRelations()
  loadTeacher()
  loadClasses()
  loadStudent()
  // loadCourse()
}

loadData()