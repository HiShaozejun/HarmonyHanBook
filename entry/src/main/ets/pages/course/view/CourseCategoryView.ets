import { GridView } from "@abner/refresh"
import { it } from "@ohos/hypium"
import { CourseItemView } from "../../home/views/CourseItemView"
import { CourseOptions, CoursePopContent } from "../model/CourseModel"

interface CourseTypeInterface {
  title: string
  imageName: ResourceStr
}

@ComponentV2
export default struct CourseCategoryView {
  @Param
  defaultTitle: string = ''
  @Param
  courseList: CoursePopContent[] = []
  @Local customPopup: boolean = false;

  @Builder
  itemLayout(item: CourseOptions, index: number) {
    Row() {
      Text(item.name).fontSize(18).fontColor(Color.White)
    }.width('100%').height(50)
    .alignItems(VerticalAlign.Center).backgroundColor(Color.Grey)
  }

  @Computed
  get getTotalCount(): number {
    const totalItems = this.courseList.reduce((sum, group) => sum + group.list.length, 0)
    return totalItems;
  }

  @Builder
  popupBuilder() {
    Column() {
      ForEach(this.courseList, (item: CoursePopContent, index: number) => {
        Column() {
          Text(item.name).fontSize(18).fontColor(Color.White).fontWeight(FontWeight.Bold)
          Grid() {
            ForEach(item.list, (item: CourseOptions) => {
              GridItem() {
                Text(`${item.name}`)
                  .fontSize(16)
                  .fontWeight(FontWeight.Bold)
                  .fontColor(Color.White)
              }
              .backgroundColor(Color.Gray)
              .height(44)
              .width('100%')
              .borderRadius(6)
            })
          }
          .padding({ top: 20 })
          .columnsTemplate('1fr 1fr 1fr') // 3列等宽
          .rowsTemplate('1fr 1fr 1fr') // 3行等高
          .columnsGap(4)
          .rowsGap(4)
        }
        .height('auto')
        .layoutWeight(item.list.length / this.getTotalCount + 0.2) // 关键：使用权重分配剩余空间
        .alignItems(HorizontalAlign.Start)
      })
    }
    .padding(10)
    .height('50%')
    .alignItems(HorizontalAlign.Start).backgroundColor(Color.Black)
  }

  typeList: CourseTypeInterface[] = [{ title: 'Wordbook', imageName: $r('sys.media.ohos_ic_public_device_matebook') },
    { title: 'Speaking', imageName: $r('sys.media.ohos_ic_public_device_speaker_filled') },
    { title: 'Subject', imageName: $r('sys.media.ohos_user_auth_icon_face') },
    { title: '1-on-1', imageName: $r('sys.media.waveform_folder_fill') }]

  build() {
    Column({ space: 0 }) {
      Row({ space: 6 }) {
        Text(this.defaultTitle).fontWeight(FontWeight.Bold).fontSize(20).fontColor(Color.Black)
        Image($r('sys.media.ohos_ic_public_drawer_open')).size({ width: 20, height: 20 })
      }.onClick(() => {
        this.customPopup = !this.customPopup
      })
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .bindPopup(this.customPopup, {
        builder: this.popupBuilder, // 气泡的内容
        placement: Placement.Top, // 气泡的弹出位置
        popupColor: Color.Black,
        arrowPointPosition:ArrowPointPosition.START,
        onStateChange: (e) => {
          if (!e.isVisible) {
            this.customPopup = false;
          }
        }
      }
      )

      Row() {
        ForEach(this.typeList, (item: CourseTypeInterface, index: number) => {
          CourseTpeItem({ title: item.title, imageName: item.imageName })
        })
      }.width('100%').justifyContent(FlexAlign.SpaceEvenly)
    }.padding({ left: $r('app.float.contentPadding') })
  }
}

@Component
struct CourseTpeItem {
  @Prop
  title: string
  @Prop
  imageName: ResourceStr

  build() {
    Column({ space: 0 }) {
      Image(this.imageName).size({ width: 60, height: 100 }).objectFit(ImageFit.Contain)
      Text(this.title).fontSize(14).fontColor(Color.Grey)
    }.justifyContent(FlexAlign.Center)
  }
}