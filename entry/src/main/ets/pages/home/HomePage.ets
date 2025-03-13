/**
 * @ProjectName : HarmonyHanBook
 * @FileName : HomePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Home Tab
 */
import { BannerView } from "./views/BannerView"


@Component
export struct HomePage {
  build() {

    Scroll() {
      Column() {
        BannerView()
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Start)
    }

    .width('100%').height('100%')

  }
}
