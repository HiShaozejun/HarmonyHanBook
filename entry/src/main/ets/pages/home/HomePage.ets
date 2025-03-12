/**
 * @ProjectName : HarmonyHanBook
 * @FileName : HomePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Home Tab
 */

import { HMRouter, HMRouterMgr } from '@hadss/hmrouter';

// @HMRouter({pageUrl:'HomePage',interceptors:['JumpInfoInterceptor'],animator:'liveCommentsAnimator',lifecycle:'PageDurationLifecycle'})
@HMRouter({pageUrl:'HomePage'})

@Component
export struct HomePage {

  build() {
    Column(){
      Navigation(){
        Text('HomePage page').onClick(()=>{
            HMRouterMgr.push({pageUrl:"SearchPage"})
        })
      }.title('HOmePage')
    }.width('100%').height('100%')
  }
}
