
interface CourseResponse {
  res:CourseList
}

interface CourseList {
  course_list:CoursePopContent[]
  class_list:CourseClass[]
}

interface CoursePopContent {
  name: string
  list:CourseOptions[]
}

interface CourseOptions {
  id: number
  name: string
}

interface CourseClass{
  id:number
  title: string
  name: string
  onpic: string
  learn_state: number
}

export {CourseResponse,CourseList,CoursePopContent,CourseOptions,CourseClass}