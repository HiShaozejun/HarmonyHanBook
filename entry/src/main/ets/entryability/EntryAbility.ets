import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { App, window } from '@kit.ArkUI';
import { HMRouterMgr } from '@hadss/hmrouter';
import { fullScreen } from '../commons/utils/FullScreen';
import { LogUtil } from '../commons/utils/LogUtil';

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {

  // UIAbility创建完成回调
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
    AppStorage.setOrCreate<Context>('context',this.context)
    HMRouterMgr.init({
      context: this.context
    })
  }
  //UIAbility进入前台
  onForeground(): void {}

  // UIAbility进入后台
  onBackground(): void {}

  // windowStage创建完成回调
  onWindowStageCreate(windowStage: window.WindowStage): void{

    // windowStage生命周期
    windowStage.on('windowStageEvent',(event)=>{
      let stageEventType: window.WindowStageEventType = event;
      switch (stageEventType) {
        case window.WindowStageEventType.SHOWN:
          LogUtil.debugLog('windowStage','show')
          break;
      }
    })

    // 展示入口页面
    windowStage.loadContent('pages/TabIndexPage',async  (err) =>  {
      if (err.code) {
        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      // 设置沉浸式
      fullScreen.enableFullScreen()
    });
  }

    // windowStage即将销毁
    onWindowStageWillDestroy(windowStage: window.WindowStage): void {
        windowStage.off('windowStageEvent');
    }
}