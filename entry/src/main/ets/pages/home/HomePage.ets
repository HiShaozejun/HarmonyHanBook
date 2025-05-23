/**
 * @ProjectName : HarmonyHanBook
 * @FileName : HomePage.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : Home Tab
 */
import { ListView, RefreshController } from "@abner/refresh";
import { ToastUtil } from "../../commons/utils/ToastUtil";
import { CourseObject, FunnyObject, HomeResponseData } from "./model/HomeModel";
import { HomeViewModel } from "./viewmodel/HomeViewModel";
import { BannerView } from "./views/BannerView"
import { CourseItemView } from "./views/CourseItemView";
import { TodayItemView } from "./views/TodayItemView";

@Component
export struct HomePage {
  private controller: RefreshController = new RefreshController();
  private homeViewModel: HomeViewModel = new HomeViewModel();
  @State
  homePageData: HomeResponseData = {} as HomeResponseData;
  @State
  listData: ESObject [] = []

  aboutToAppear(): void {
    this.homeViewModel.getHomeData().then((data) => {
      this.homePageData = data.res
      this.listData.push(data.res.funny)
      this.listData.push(...data.res.course)
    }).catch((reason: string) => {
      ToastUtil.showToast(reason)
    })
  }

  @Builder
  itemLayout(data: ESObject, index: number) {
    if (index == 0) {
      TodayItemView({todayValue:data as FunnyObject});
    } else {
      CourseItemView({courseData:data as CourseObject});
    }
  }

  onRefresh() {
    this.controller.finishRefresh();
  }

  onLoadMoreData() {
    this.controller.finishLoadMore(true)
  }

  @Builder
  listView() {
    Column() {
      ListView({
        items: this.listData,
        itemLayout: (item, index) => this.itemLayout(item, index),
        onRefresh: this.onRefresh,
        onLoadMore: this.onLoadMoreData,
        controller: this.controller,
        isScrollSpring: false,
      })
    }
    .width('100%')
    .height('100%')
  }

  @Builder
  buildError() {

  }

  // UI
  build() {
    Scroll(){
      Column(){
        if (!this.homeViewModel.isLoading && !this.homeViewModel.hasError) {
          BannerView({ bannerUrl: this.homePageData.daily.onpic })
          this.listView()
        } else if (this.homeViewModel.hasError) {
          this.buildError()
        }
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.bg_color'))
  }
}
