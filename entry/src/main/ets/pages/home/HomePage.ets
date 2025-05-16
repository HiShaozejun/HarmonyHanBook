/**
 * @ProjectName : HarmonyHanBook
 * @FileName : HomePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Home Tab
 */
import { ListView, RefreshController } from "@abner/refresh";
import { LogUtil } from "../../commons/utils/LogUtil";
import { BannerView } from "./views/BannerView"

@Component
export struct HomePage {
  mockList: string[] =
    ['1', '2','3','4','发放的','发扥饿啊','阿仁俄文','区分饿啊发展','发哦二嘎扥噶','发放的','发扥饿啊','阿仁俄文','区分饿啊发展','发哦二嘎扥噶','发放的','发扥饿啊','阿仁俄文','区分饿啊发展','发哦二嘎扥噶'];
  private scroll: Scroller = new Scroller();
  @State listViewScrollOffset: number = 0;
  @State listViewTopPadding: number = 0;
  private controller: RefreshController = new RefreshController();

  @Builder
  itemLayout(data: Object, index: number) {
    Row() {
      Text(data.toString()).fontSize(18).fontColor(Color.Red)
    }.width('100%').height(44)
  }

  onRefresh() {
    this.controller.finishRefresh();
  }

  onLoadMoreData() {
    this.controller.finishLoadMore(true)
  }

  @Builder
  listView() {
    Column(){
      ListView({
        items: this.mockList,
        itemLayout: (item, index) => this.itemLayout(item, index),
        onRefresh: this.onRefresh,
        onLoadMore: this.onLoadMoreData,
        controller: this.controller,
        scroller:this.scroll,
        isScrollSpring:false,

        onScrollDistance:(distance:number) =>{
          let currentOffset = distance;
          LogUtil.debugLog('偏移量currentOffset' + currentOffset.toString())
          this.listViewScrollOffset = Math.max(-250,currentOffset);
          LogUtil.debugLog('偏移量listViewScrollOffset' + this.listViewScrollOffset.toString())
        },
      })
      .margin({ top: this.listViewTopPadding + this.listViewScrollOffset })
    } .width('100%')
    .height('100%')
  }

  // UI
  build() {
    Stack({ alignContent: Alignment.TopStart }) {
      this.listView()
      BannerView({ bannerViewHeight: this.listViewTopPadding }).position({ top: this.listViewScrollOffset })
    }
    .width('100%')
    .height('100%')

  }
}
