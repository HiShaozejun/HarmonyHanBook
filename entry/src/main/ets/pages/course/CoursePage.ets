/**
 * @ProjectName : HarmonyHanBook
 * @FileName : CoursePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Course Tab
 */
import { HMRouter } from '@hadss/hmrouter';

@HMRouter({pageUrl:'CoursePage'})
@Component
export struct CoursePage {
  build() {
    Column(){
      Text('CoursePage page')
    }.width('100%').height('100%')
  }
}