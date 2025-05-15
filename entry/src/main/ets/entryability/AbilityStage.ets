import { AbilityStage, Want } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {

  onCreate(): void {
   let  abilityStageContext = this.context;
   abilityStageContext.currentHapModuleInfo.name

  }

  onAcceptWant(want: Want): string {
    return '';
  }

  onDestroy(): void {

  }

}