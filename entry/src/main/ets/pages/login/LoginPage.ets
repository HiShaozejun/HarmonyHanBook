/**
 * @ProjectName : HarmonyHanBook
 * @FileName : LoginPage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Login Page
 */
import { HMRouter } from '@hadss/hmrouter';

@HMRouter({pageUrl:'LoginPage'})
@Component
export struct LoginPage {
  build() {
    Column(){
        Text('login page')
    }.width('100%').height('100%')
  }
}