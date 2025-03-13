/**
 * @ProjectName : HarmonyHanBook
 * @FileName : CustomNavBar.ets
 * @Date: 2025/3/12
 * @Author :  shaozejun
 * @Description : 导航条
 */


@ComponentV2
export struct CustomNavBar {
  // 标题文字
  @Param
  navTitle: ResourceStr = '标题'
  // 标题颜色
  @Param
  navTitleColor: ResourceStr = $r('app.color.navTitleColor')
  @Param
  navBarColor: ResourceStr = $r('app.color.navBarColor')
  // 是否显示返回按钮
  @Param
  showBackIcon: boolean = true
  // 返回事件
  @Event
  backEvent?: () => void

  @Builder
  doNothing() {
  }

  // 右侧菜单栏
  @BuilderParam
  addMenu: () => void = this.doNothing

  build() {
    Row() {
      Stack({ alignContent: Alignment.Start }) {
        if (this.showBackIcon) {
          Image($r('app.media.nav_white_back')).width(24).height(24).onClick(() => {
            if (this.showBackIcon && this.backEvent) {
              this.backEvent();
            }
          })
        }
      }.layoutWeight(1)

      Stack({ alignContent: Alignment.Center }) {
        Text(this.navTitle).fontSize(20).fontColor(this.navTitleColor).fontWeight(700).layoutWeight(1)
      }.layoutWeight(1)

      Stack({ alignContent: Alignment.End }) {
        this.addMenu()
      }.layoutWeight(1)
    }
    .width('100%')
    .backgroundColor(this.navBarColor)
    .justifyContent(FlexAlign.Center)
    .padding({
      left: 16,
      right: 16,
      top: 12,
      bottom: 12
    })

  }
}

