import {
  HMDefaultGlobalAnimator,
  HMInterceptor,
  HMInterceptorAction,
  HMInterceptorInfo,
  HMLifecycle,
  HMLifecycleContext,
  HMNavigation,
  HMRouterMgr,
  IHMInterceptor,
  IHMLifecycle,
} from '@hadss/hmrouter';
import { AttributeUpdater } from '@kit.ArkUI';
import { CoursePage } from './course/CoursePage';
import { HomePage } from './home/HomePage';
import { MinePage } from './mine/MinePage';
import { SpeakPage } from './speak/SpeakPage';

export const TAB_NAVIGATION_ID = 'TabIndexPageNavigationID'

const PAGE_URL = 'TabIndexPage'

@Entry
@Component
export struct TabIndexPage {

  modifier: MyNavModifier = new MyNavModifier();
  @State
  curIndex: number = 0;

  @StorageProp('topHeight')
  topHeight: number = 0

  @StorageProp('bottomHeight')
  bottomHeight: number = 0

  @Builder
  tabBarItem(title: string, normalIcon: ResourceStr, selectedIcon: ResourceStr, index: number) {
    Column({ space: 4 }) {
      Image(this.curIndex == index ? selectedIcon : normalIcon).width(14).height(14)
      Text(title)
        .fontSize(13)
        .fontColor(this.curIndex == index ? Color.Orange : Color.Gray)
        .fontWeight(this.curIndex == index ? FontWeight.Bold : FontWeight.Regular)
    }
  }

  build() {
    Column() {
      HMNavigation({
        navigationId: TAB_NAVIGATION_ID, homePageUrl: PAGE_URL, options: {
          standardAnimator: HMDefaultGlobalAnimator.STANDARD_ANIMATOR,
          dialogAnimator: HMDefaultGlobalAnimator.DIALOG_ANIMATOR,
          modifier: this.modifier
        },
      }) {
        Tabs() {
          TabContent() {
            HomePage()
          }.tabBar(this.tabBarItem('Home', $r('app.media.tab_home'), $r('app.media.tab_home_selected'), 0))

          TabContent() {
            CoursePage()
          }.tabBar(this.tabBarItem('Course', $r('app.media.tab_course'), $r('app.media.tab_course_selected'), 1))

          TabContent() {
            SpeakPage()
          }.tabBar(this.tabBarItem('Speak', $r('app.media.tab_speak'), $r('app.media.tab_speak_selected'), 2))

          TabContent() {
            MinePage()
          }.tabBar(this.tabBarItem('Mine', $r('app.media.tab_me'), $r('app.media.tab_me_selected'), 3))
        }
        .vertical(false)
        .barPosition(BarPosition.End)
        .barWidth('100%')
        .animationDuration(0)
        .scrollable(false)
        .onChange((index) => {
          this.curIndex = index;
        })
      }
    }
    .width('100%').height('100%')
    .padding({bottom:this.bottomHeight,top:this.topHeight})
    .justifyContent(FlexAlign.Center)
  }
}

/**
 *  拦截器
 */
@HMInterceptor({ interceptorName: "JumpInfoInterceptor", global: false })
export class JumpInfoInterceptor implements IHMInterceptor {
  handle(info: HMInterceptorInfo): HMInterceptorAction {
    let connectionInfo: string = info.type === 'push' ? 'jump to' : 'back to';
    console.log(JSON.stringify(info))
    return HMInterceptorAction.DO_NEXT;
  }
}

/**
 *  生命周期
 */
@HMLifecycle({ lifecycleName: 'PageDurationLifecycle' })
export class PageDurationLifecycle implements IHMLifecycle {
  private time: number = 0;

  onShown(ctx: HMLifecycleContext): void {
    this.time = new Date().getTime();
  }

  onHidden(ctx: HMLifecycleContext): void {
    const duration = new Date().getTime() - this.time;
    console.log(`Page ${ctx.navContext?.pathInfo.name} stay ${duration}`);
  }
}

class MyNavModifier extends AttributeUpdater<NavigationAttribute> {
  initializeModifier(instance: NavigationAttribute): void {
    instance.hideNavBar(false);
    instance.hideTitleBar(true)
    instance.hideToolBar(true)
    instance.backgroundColor(Color.White)
  }
}
