import { JSON, util } from "@kit.ArkTS"
import { BundleDataUtil } from "../../../commons/utils/BundleDataUtil"
import { ToastUtil } from "../../../commons/utils/ToastUtil"
import { CourseClass, CoursePopContent, CourseResponse } from "../model/CourseModel"

@ObservedV2
export class CourseViewModel {
  @Trace
  classList?:CourseClass[] = []
  @Trace
  courseList?:CoursePopContent[]

  async getCourseData() {
    try {
      const data = await BundleDataUtil.getBundleDataFromPath('course_mockdata.json') as CourseResponse
      this.classList = data.res.class_list
      this.courseList = data.res.course_list
    } catch (err) {
      ToastUtil.showToast(err)
    }
  }
}