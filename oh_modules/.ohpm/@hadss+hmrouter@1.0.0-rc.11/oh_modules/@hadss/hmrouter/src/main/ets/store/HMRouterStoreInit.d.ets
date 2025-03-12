import { common } from '@kit.AbilityKit';
import { collections } from '@kit.ArkTS';
import { HMComponent } from './entity/HMComponent';
/**
 * get bundle info from rawfile
 * @returns
 */
export declare function getComponentInfosFromRawfile(context: common.Context, hspModuleNames: collections.Set<string>): collections.Array<HMComponent>;
/**
 * get bundle info from bundleManager
 * @param context
 * @param hspModuleNames
 * @returns
 */
export declare function getComponentInfosFromBundleManager(context: common.Context, hspModuleNames: collections.Set<string>): Promise<collections.Array<HMComponent>>;
