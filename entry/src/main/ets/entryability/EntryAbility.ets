import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { App, window } from '@kit.ArkUI';
import { HMRouterMgr } from '@hadss/hmrouter';
import { fullScreen } from '../commons/utils/FullScreen';

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
    AppStorage.setOrCreate<Context>('context',this.context)
    HMRouterMgr.init({
      context: this.context
    })
  }

  onWindowStageCreate(windowStage: window.WindowStage): void{

    // TabIndexPage SplashPage
    windowStage.loadContent('pages/TabIndexPage',async  (err) =>  {
      if (err.code) {
        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      // 设置沉浸式
      fullScreen.enableFullScreen()
    });
  }
}