/**
 * @ProjectName : HarmonyHanBook
 * @FileName : SearchPage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : 搜索Page
 */
import { HMNavigation, HMRouter, HMRouterMgr } from '@hadss/hmrouter';
import { TAB_NAVIGATION_ID } from '../TabIndexPage';

@HMRouter({pageUrl:"SearchPage"})
@Component
export struct SearchPage {
  build() {
     Column(){
       Text('search page').onClick(()=>{
       })
     }
     .width('100%')
    .height('100%')
  }
}