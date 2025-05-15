/**
 * @ProjectName : HarmonyHanBook
 * @FileName : HomePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Home Tab
 */
import { LogUtil } from "../../commons/utils/LogUtil";
import { BannerView } from "./views/BannerView"


@Component
export struct HomePage {
  mockList: string[] =
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1',];
  private scroll:Scroller = new Scroller();
  @State listViewScrollOffset:number = 0;
  @State listViewTopPadding: number = 0;

  @Builder
  listView() {
    List({scroller:this.scroll}) {
      ForEach(this.mockList, (item: string, index: number) => {
        ListItem() {
          Row() {
            Text('item' + `${index}`).fontSize(20)
          }.height(44).width('100%')
        }
      })
    }
    .width('100%')
    .height('100%')
    .enabled(true)
    .padding({top:this.listViewTopPadding - this.listViewScrollOffset})
    .onDidScroll((scrollOffset: number, scrollState: ScrollState)=>{
      const currentOffset = this.scroll.currentOffset().yOffset
      if (currentOffset<= 0) {
        this.listViewScrollOffset = 0;
        return;
      }
      this.listViewScrollOffset = Math.min(currentOffset,280);
      LogUtil.debugLog('偏移量 --'+ currentOffset.toString())
    })
  }

  // UI
  build() {
    Stack({ alignContent: Alignment.TopStart }) {
      this.listView()
      BannerView({bannerViewHeight:this.listViewTopPadding}).position({top:-this.listViewScrollOffset})
    }
    .width('100%')
    .height('100%')

  }
}
