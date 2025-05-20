import { FunnyObject, OnPicObject } from "../model/HomeModel"

@Component
export struct TodayItemView {
  todayValue: FunnyObject = {} as FunnyObject

  @Builder
  titlePartView() {
    Row() {
      Column({ space: 10 }) {
        Text(this.todayValue.title).fontSize(15).fontColor(Color.Black)
        Text(this.todayValue.intro).fontSize(12).fontColor(Color.Gray)
      }
      .justifyContent(FlexAlign.Start)
      .alignItems(HorizontalAlign.Start)
      .layoutWeight(1)
      Image($r('sys.media.ohos_ic_public_arrow_right')).width(12).height(12)
    }
    .justifyContent(FlexAlign.SpaceBetween)
    .width('100%')
  }

  @Builder
  vlogsImageView() {
    Row({ space: 10 }) {
      ForEach(this.todayValue.list, (value: OnPicObject, index: number) => {
        Image(value.onpic)
          .layoutWeight(1)
          .width('100%')
          .aspectRatio(1/1.4)
          .objectFit(ImageFit.Cover)
          .borderRadius(8)
      })
    }
    .width('100%')
  }

  // UI
  build() {
    Column({space:10}) {
      this.titlePartView()
      this.vlogsImageView()
    }
    .justifyContent(FlexAlign.Start)
    .padding(16)
    .backgroundColor(Color.White)
    .borderRadius(8)
    .margin({left:10,right:10,top:10})
  }
}