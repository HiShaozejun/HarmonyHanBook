import { HMRouterUtils } from '../utils/HMRouterUtils';
import { HMRouterPathCallback } from '../api/HMRouterPathCallback';
import { HMRouterPathInfo } from '../api/HMRouterPathInfo';
import { HMActionType } from './HMActionType';
export declare class HMNavPathStack extends NavPathStack {
    uiContext: UIContext;
    navigationId: string;
    hideNavbar: boolean;
    private interceptorMgr;
    private animatorMgr;
    private navbarLifecycleMgr;
    private navDestinationLifecycleMgr;
    private changeLastNavigationId;
    constructor(uiContext: UIContext, navigationId: string, hideNavbar: boolean, changeLastNavigationId: (navigationId: string) => void);
    /**
     * Custom push/replace method
     * @param type Route jump type push or pop
     * @param pathInfo Route jump parameters
     * @param callback Route jump callback
     * @param mode Route jump mode
     */
    hmPushOrReplace(type: HMActionType, pathInfo: HMRouterPathInfo, callback?: HMRouterPathCallback, mode?: LaunchMode): void;
    hmPop(pathInfo: HMRouterPathInfo, targetPageInfo?: HMRouterUtils.PageInfo): void;
    pushPath(info: NavPathInfo, animated?: boolean | undefined): void;
    pushPath(info: NavPathInfo, options?: NavigationOptions | undefined): void;
    pushPathByName(name: string, param: Object, animated?: boolean | undefined): void;
    pushPathByName(name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean | undefined): void;
    pushDestination(info: NavPathInfo, animated?: boolean | undefined): Promise<void>;
    pushDestination(info: NavPathInfo, options?: NavigationOptions | undefined): Promise<void>;
    pushDestinationByName(name: string, param: Object, animated?: boolean | undefined): Promise<void>;
    pushDestinationByName(name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean | undefined): Promise<void>;
    replacePath(info: NavPathInfo, animated?: boolean | undefined): void;
    replacePath(info: NavPathInfo, options?: NavigationOptions | undefined): void;
    replacePathByName(name: string, param: Object, animated?: boolean | undefined): void;
    pop(animated?: boolean | undefined): NavPathInfo | undefined;
    pop(result: Object, animated?: boolean | undefined): NavPathInfo | undefined;
    popToName(name: string, animated?: boolean | undefined): number;
    popToName(name: string, result: Object, animated?: boolean | undefined): number;
    popToIndex(index: number, animated?: boolean | undefined): void;
    popToIndex(index: number, result: Object, animated?: boolean | undefined): void;
}
