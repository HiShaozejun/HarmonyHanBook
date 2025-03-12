import { collections } from '@kit.ArkTS';
import { HMComponent } from './HMComponent';
export declare class BundleInfo {
    routerMap: Array<RouterItem>;
    hspModuleNames: Set<string>;
}
/**
 * RouterItem
 */
export declare class RouterItem {
    /**
     * name
     */
    name: string;
    /**
     * pageSourceFile
     */
    pageSourceFile: string;
    /**
     * buildFunction
     */
    buildFunction: string;
    /**
     * customData
     */
    customData: ESObject;
    /**
     * moduleName,eg:entry
     */
    moduleName: string;
    /**
     * bundleName,eg:com.example.hmrouter
     */
    bundleName: string;
    /**
     * ohmurl,eg:@normalized:N&&&entry/src/main/ets/animation/CustomPageAnimator&
     */
    ohmurl: string;
}
/**
 * HMStoreTempInfo
 */
export interface HMStoreTempInfo {
    hmComponentInfos: collections.Array<HMComponent>;
    installTime: number;
    updateTime: number;
}
