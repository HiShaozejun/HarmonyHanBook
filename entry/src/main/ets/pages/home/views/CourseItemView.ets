import { CourseObject } from "../model/HomeModel"

@Component
export struct CourseItemView {
  @Prop
  courseData: CourseObject

  @Builder
  courseTypeFlag() {
    Row({ space: 4 }) {
      Image($r('sys.media.ohos_ic_public_video')).width(10).height(10)
      Text('AI-Based Video Class').fontSize(14).fontColor(Color.Green)
    }.width('100%').justifyContent(FlexAlign.Start)
  }

  @Builder
  courseTitle() {
    Column({ space: 12 }) {
      Row() {
        Text(this.courseData.name).fontSize(18).fontWeight(FontWeight.Bold).fontColor(Color.Black)
        Image($r('sys.media.ohos_ic_public_arrow_right')).width(12).height(12)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween)

      Row({ space: 2 }) {
        ForEach(this.courseData.user_onpic, (pic: string, index: number) => {
          Image(pic).width(16).height(16).borderRadius(8)
        })
        Text( this.courseData.hits +'learns').fontSize(12).fontColor(Color.Grey);
      }
    }.width('100%').justifyContent(FlexAlign.Start).alignItems(HorizontalAlign.Start)
  }

  @Builder
  learningCourse() {
    Row() {
      Image(this.courseData.onpic)
        .layoutWeight(1)
        .aspectRatio(1 / 1.3)
        .objectFit(ImageFit.Cover)
        .borderRadius($r('app.float.borderRadius'))
      Column() {
        Text(this.courseData.title).fontColor($r('app.color.theme_color')).fontSize(18)
        Text(this.courseData.intro).fontColor(Color.Black).fontSize(13)
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .layoutWeight(2)
    }
    .width("100%")
    .padding({top:$r('app.float.contentPadding')})
    .alignItems(VerticalAlign.Top)
    .justifyContent(FlexAlign.Start)
  }

  // UI
  build() {
    Column({ space: 6 }) {
      this.courseTypeFlag()
      this.courseTitle()
      this.learningCourse()
    }
    .justifyContent(FlexAlign.Start)
    .borderRadius($r('app.float.borderRadius'))
    .padding(16)
    .backgroundColor(Color.White)
    .margin({ left: 10, right: 10, top: 10 })

  }
}