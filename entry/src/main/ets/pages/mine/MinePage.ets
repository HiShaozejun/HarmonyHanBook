/**
 * @ProjectName : HarmonyHanBook
 * @FileName : MinePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Mine Tab
 */


import { HMRouter, HMRouterMgr } from '@hadss/hmrouter';

@HMRouter({pageUrl:'MinePage'})
@Component
export struct MinePage {
  build() {
    Column(){
      Text('MinePage page').onClick(()=>{

      })
    }.width('100%').height('100%')
  }
}