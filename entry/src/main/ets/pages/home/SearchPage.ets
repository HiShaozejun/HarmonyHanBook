/**
 * @ProjectName : HarmonyHanBook
 * @FileName : SearchPage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : 搜索Page
 */
import { RefreshController } from '@abner/refresh';
import { HMNavigation, HMRouter, HMRouterMgr } from '@hadss/hmrouter';
import { CustomNavBar } from '../../components/CustomNavBar';

@HMRouter({pageUrl:"SearchPage"})
@Component
export struct SearchPage {

  goBack(){
    HMRouterMgr.pop()
  }

  @State mock:string[]= ['1','2','3','4']

  private controller: RefreshController = new RefreshController();

  @Builder
  item(itemData:string,index: number) {
    Column(){
      Text(itemData).fontSize(19)
    }
  }

  @Builder
  onRefresh(){

  }

  build() {
     Column(){
       CustomNavBar({navTitle:'SearchPage',backEvent:this.goBack})

     }
     .width('100%')
    .height('100%')
  }
}