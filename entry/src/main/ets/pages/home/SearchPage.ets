/**
 * @ProjectName : HarmonyHanBook
 * @FileName : SearchPage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : 搜索Page
 */
import { HMNavigation, HMRouter, HMRouterMgr } from '@hadss/hmrouter';
import { fullScreen } from '../../commons/utils/FullScreen';
import { CustomNavBar } from '../../components/CustomNavBar';
import { TAB_NAVIGATION_ID } from '../TabIndexPage';

@HMRouter({pageUrl:"SearchPage"})
@Component
export struct SearchPage {

  goBack(){
    HMRouterMgr.pop()
  }

  build() {
     Column(){
       CustomNavBar({navTitle:'SearchPage',backEvent:this.goBack})
     }
     .width('100%')
    .height('100%')
  }
}