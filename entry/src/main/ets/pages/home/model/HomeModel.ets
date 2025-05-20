interface HomeModel {
  errmsg:String,
  version: number,
  state: number,
  res: HomeResponseData
}

interface HomeResponseData{
  daily: OnPicObject,
  funny:FunnyObject,
  course: CourseObject[]
  ad: OnPicObject[]
}

interface FunnyObject {
  title:string
  intro:string
  link:string
  list:OnPicObject[]
}

interface CourseObject {
  name: string,
  t_onpic: string,
  course_id: number,
  title:string,
  intro: string,
  onpic: string,
  uids: string,
  hits: string,
  link: string,
  level: string,
  user_onpic: string[]
}

interface OnPicObject{
  link: string
  onpic: string
}

export {HomeModel,HomeResponseData,FunnyObject,CourseObject,OnPicObject}
