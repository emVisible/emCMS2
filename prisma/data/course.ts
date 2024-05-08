interface Course {
  c_id: string
  name: string
  redit: number
  hours: number
  teacherId: string
}
export default [
  {
    c_id: 'CST_3827',
    name: 'javaweb开发框架实验',
    redit: 1,
    hours: 32,
    teacherId: '1'
  },
  {
    c_id: 'CST_3814',
    name: '操作系统实验',
    redit: 1,
    hours: 32,
    teacherId: '1'
  },
  {
    c_id: 'CST_3221',
    name: 'javaweb开发框架',
    redit: 2,
    hours: 32,
    teacherId: '1'
  },
  {
    c_id: 'CST_3210',
    name: '操作系统',
    redit: 3,
    hours: 32,
    teacherId: '1'
  },
  {
    c_id: 'CST_2813',
    name: '电子技术与数字电路实验',
    redit: 1,
    hours: 32,
    teacherId: '1'
  },
  {
    c_id: 'CST_2218',
    name: '电子技术与数字电路',
    redit: 3,
    hours: 48,
    teacherId: '1'
  }
] as Course[]