/**
 * @ProjectName : HarmonyHanBook
 * @FileName : BannerView.ets
 * @Date: 2025/3/13
 * @Author :  shaozejun
 * @Description : 广告位
 */

@Component
export struct BannerView {

  
  @Prop
  bannerUrl: string = 'https://cdn2.hancourse.net/image/2022/05/19/110809_6285b499a3aa7.jpg'

  private iconList: Resource[] = [$r('app.media.home_search_yuyin'),$r('app.media.home_search_shouxie'),$r('app.media.home_search_paizhao'),$r('app.media.home_search_pinyin'),$r('app.media.home_search_bushou'),];
  @Builder
  buildSearchMethod(){
    Row(){
      ForEach(this.iconList,(value: Resource,index) =>{
        Image(value).width(40).height(40)
      })
    }
    .width('100%')
    .padding({left:20,right:20})
    .justifyContent(FlexAlign.SpaceEvenly)
    .margin({bottom:40})
  }

  build() {
    Stack({ alignContent: Alignment.Bottom }) {
      Image(this.bannerUrl).width('100%').objectFit(ImageFit.Contain)
      Row({ space: 4 }) {
        Image($r('app.media.home_search')).width(18).height(18)
        Text('请输入汉字，PinYin，English').fontSize(15).fontColor($r('app.color.placeholderColor'))
      }
      .width('80%')
      .height(44).borderRadius(8)
      .justifyContent(FlexAlign.Start)
      .alignItems(VerticalAlign.Center)
      .backgroundColor($r('app.color.white'))
      .padding({left:16})
      .margin({bottom:110})

      this.buildSearchMethod()

    }
  }
}