import { HMRouterMgr } from '@hadss/hmrouter';
import { common } from '@kit.AbilityKit';
import { DialogHelper } from '@pura/harmony-dialog';

export class LibSetUp {
  static setUpLib(context:common.UIAbilityContext){

    HMRouterMgr.init({
      context:context
    })

    DialogHelper.setDefaultConfig((config) => {
      config.uiAbilityContext = context;
      config.loading_loadColor = $r('app.color.theme_color')
    })
  }
}