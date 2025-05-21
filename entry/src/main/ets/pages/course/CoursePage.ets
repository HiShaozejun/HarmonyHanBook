/**
 * @ProjectName : HarmonyHanBook
 * @FileName : CoursePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Course Tab
 */
import { RefreshController, RefreshLayout, StaggeredGridView } from '@abner/refresh';
import { HMRouter } from '@hadss/hmrouter';
import { it } from '@ohos/hypium';
import { CourseClass } from './model/CourseModel';
import CourseCategoryView from './view/CourseCategoryView';
import {CourseViewModel} from './viewmodel/CourseViewModel'

@HMRouter({ pageUrl: 'CoursePage' })
@ComponentV2
export struct CoursePage {
  @Local
  viewModel: CourseViewModel = new CourseViewModel()
  controller: RefreshController = new RefreshController();
  async aboutToAppear(){
     await this.viewModel.getCourseData()
  }

  @Builder
  buildCourseCategory(){
    CourseCategoryView({defaultTitle:'Courses(Level1)',courseList:this.viewModel.courseList ?? []})
  }

  sc:Scroller = new Scroller()

  @Builder
  buildWaterFlow(){
    StaggeredGridView({
      items: this.viewModel.classList, //数据源 数组,任意类型
      itemLayout: (item, index) => this.waterFlowItemLayout(item as CourseClass, index),
      isLazyData: false,
      columnsTemplate:'1fr 1fr',
      columnsGap:10,
      rowsGap:10,
      scroller:this.sc,
      enableRefresh:false,
      enableScrollInteraction:true,
      enableLoadMore:false,


    })
  }

  @Builder
  waterFlowItemLayout(item: CourseClass, index: number): void {
    Stack({alignContent:Alignment.TopStart}){
      Column(){
        Image(item.onpic).objectFit(ImageFit.Contain).width('100%').height("100%")
        Text(item.title).fontSize(16).fontColor(Color.Black)
      }
      Text(`${index}`).fontSize(10).fontColor(Color.White).backgroundColor(Color.Red).borderRadius(4)
    }.width('100%').height(120)
  }

  @Builder
  itemLayout(){
    Column(){
      this.buildCourseCategory()
      this.buildWaterFlow()
    }
  }

  // UI
  build() {
    Column(){
      RefreshLayout({
        controller: this.controller,
        itemLayout: () => this.itemLayout(),
        onRefresh: () => {
          this.controller.finishRefresh()
        },
        onLoadMore: () => {
          this.controller.finishLoadMore()
        }
      })
    }
  }
}