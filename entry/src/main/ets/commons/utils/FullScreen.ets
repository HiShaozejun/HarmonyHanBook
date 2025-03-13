/**
 * @ProjectName : HarmonyHanBook
 * @FileName : FullScreen.ets
 * @Date: 2025/3/13
 * @Author :  shaozejun
 * @Description : 全屏控制
 */
import { window } from "@kit.ArkUI"

class FullScreenUtil {
  async enableFullScreen() {
    let context = AppStorage.get<Context>('context')
    if (context) {
      let windowClass = await window.getLastWindow(context)
      windowClass.setWindowLayoutFullScreen(true)
      let avoidAreaTop = windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM)
      const topHeight = avoidAreaTop.topRect.height
      AppStorage.setOrCreate<number>('topHeight', px2vp(topHeight))
      console.log(px2vp(topHeight).toString())
      let avoidAreaBottom = windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR)
      const bottomHeight = avoidAreaBottom.bottomRect.height
      AppStorage.setOrCreate<number>('bottomHeight', px2vp(bottomHeight))
    }
  }

  async disableFullScreen() {
    let context = AppStorage.get<Context>('context')
    if (context) {
      let windowClass = await window.getLastWindow(context)
      windowClass.setWindowLayoutFullScreen(false)
      AppStorage.setOrCreate<number>('topHeight', 0)
      AppStorage.setOrCreate<number>('bottomHeight', 0)
    }
  }

  async setStatusBarDefault() {
    this.setStatusBarColor('#DB3C25', '#ffffff')
  }

  // 修改状态栏背景颜色，文字颜色
  async setStatusBarColor(statusBarColor: string, statusBarContentColor: string = '#ffffff') {
    let context = AppStorage.get<Context>('context')
    if (context) {
      let windowClass = await window.getLastWindow(context)
      windowClass.setWindowSystemBarProperties({
        statusBarColor: statusBarColor,
        statusBarContentColor: statusBarContentColor
      })
    }
  }
}

export const fullScreen = new FullScreenUtil()