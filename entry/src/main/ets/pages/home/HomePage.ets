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

  mockList:string[] = ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',];

  @Builder
  listView(){
      List(){
        ForEach(this.mockList,(item: string,index:number) =>{
          ListItem(){
            Row(){
              Text('测试' + `${index}`).fontSize(20)
            }.height(44).width('100%')
          }
        })
      }
      .width('100%')
      .height('100%')
      .enabled(false)
      .nestedScroll({
        scrollForward: NestedScrollMode.PARENT_FIRST,
        scrollBackward: NestedScrollMode.SELF_FIRST
      })
  }

  // UI
  build() {
    Scroll() {
      Column() {
        BannerView()
        this.listView()
      }
      .justifyContent(FlexAlign.Start)
    }
    .scrollable(ScrollDirection.Vertical)
    .width('100%').height('100%')

  }
}
