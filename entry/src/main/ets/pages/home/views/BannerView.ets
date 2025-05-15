/**
 * @ProjectName : HarmonyHanBook
 * @FileName : BannerView.ets
 * @Date: 2025/3/13
 * @Author :  shaozejun
 * @Description : 广告位
 */
import { HMRouterMgr } from "@hadss/hmrouter";
import { LogUtil } from "../../../commons/utils/LogUtil";
import json from "@ohos.util.json";

@Component
export struct BannerView {
  @Prop
  bannerUrl: string = 'https://c2.hancourse.com/image/2023/06/04/205436_647c898c95746.jpg'
  @Link
  bannerViewHeight: number
  private iconList: Resource[] = [
    $r('app.media.home_search_yuyin'),
    $r('app.media.home_search_shouxie'),
    $r('app.media.home_search_paizhao'),
    $r('app.media.home_search_pinyin'),
    $r('app.media.home_search_bushou'),
  ];

  pushSearchPage() {
    HMRouterMgr.push({ pageUrl: 'SearchPage' })
  }

  @Builder
  buildSearchIcons() {
    Row() {
      ForEach(this.iconList, (value: Resource, index) => {
        Image(value).width(40).height(40)
      })
    }
    .width('100%')
    .padding({ left: 20, right: 20 })
    .justifyContent(FlexAlign.SpaceEvenly)
    .margin({ bottom: 40 })
  }

  // UI
  build() {
    Stack({ alignContent: Alignment.Bottom }) {
      Image(this.bannerUrl)
        .width('100%')
        .objectFit(ImageFit.Cover)
        .renderMode(ImageRenderMode.Original)
        .onComplete((event) =>{
          LogUtil.debugLog("Width -- " + (event?.width ?? 0).toString())
          LogUtil.debugLog("Height -- " + (event?.height ?? 0).toString())
          LogUtil.debugLog("contentWidth -- " + (event?.contentWidth ?? 0).toString())
          LogUtil.debugLog("contentHeight -- " + (event?.contentHeight ?? 0).toString())
        LogUtil.debugLog("componentWidth -- " + (event?.componentWidth ?? 0).toString())
        LogUtil.debugLog("componentHeight -- " + (event?.componentHeight ?? 0).toString())
        this.bannerViewHeight = px2vp(event?.componentHeight ?? 0);
      })
      Row({ space: 4 }) {
        Image($r('app.media.home_search')).width(18).height(18)
        Text('请输入汉字，PinYin，English').fontSize(15).fontColor($r('app.color.placeholderColor'))
      }
      .width('80%')
      .height(44)
      .borderRadius(8)
      .justifyContent(FlexAlign.Start)
      .alignItems(VerticalAlign.Center)
      .backgroundColor($r('app.color.white'))
      .padding({ left: 16 })
      .margin({ bottom: 110 })
      .onClick(this.pushSearchPage)

      this.buildSearchIcons()

    }
  }
}
