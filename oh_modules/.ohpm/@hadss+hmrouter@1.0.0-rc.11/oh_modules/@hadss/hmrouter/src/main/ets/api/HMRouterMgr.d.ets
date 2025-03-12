import { HMInterceptorInstance, HMLifecycleInstance, HMPageInstance } from '../store/ComponentInstance';
import { HMRouterPathCallback } from './HMRouterPathCallback';
import { HMRouterPathInfo } from './HMRouterPathInfo';
import { IHMAnimator } from './IHMAnimator';
import { HMRouterConfig } from './HMRouterConfig';
import { HMPageLifecycle } from '../lifecycle/HMPageLifecycle';
import { IHMLifecycleOwner } from '../lifecycle/interface/IHMLifecycleOwner';
import { HMServiceResp } from './IHMService';
import { HMPageParam, HMParamType } from './HMParamType';
export declare class HMRouterMgr {
    static isInit: boolean;
    private static service;
    private static routerStore;
    private static pageLifecycleMgr;
    /**
     * Initialize HMRouter
     * @Param config
     */
    static init(config: HMRouterConfig): void;
    /**
     * Enable HMRouter logs
     * @param level
     */
    static openLog(level: 'DEBUG' | 'INFO'): void;
    /**
     * Push to target page
     * @param pathInfo
     * @param callback
     */
    static push(pathInfo: HMRouterPathInfo, callback?: HMRouterPathCallback): void;
    /**
     * Replace current page to target page
     * @param pathInfo
     * @param callback
     */
    static replace(pathInfo: HMRouterPathInfo, callback?: HMRouterPathCallback): void;
    /**
     * Back to target page
     * @param pathInfo
     * @param skipedLayerNumber
     * The number of levels returned by the page, default to 0, indicates returning to the previous level,
     * 1 indicates skipping one level of page return, two pages are pushed out at the same time,
     * and the pathInfo.pathInfo parameter has higher priority than skipedLayerNumber
     */
    static pop(pathInfo?: HMRouterPathInfo, skipedLayerNumber?: number): void;
    /**
     * Get pathStack by navigationId
     * @param navigationId
     * @returns
     */
    static getPathStack(navigationId: string): NavPathStack | null;
    /**
     * Get current page params
     * @returns
     */
    static getCurrentParam(type?: HMParamType): HMPageParam | Map<string, Object> | Object | null;
    /**
     * Get the current page lifecycle management instance
     *
     * which can be used to retrieve the data content initialized during lifecycle stages
     * @returns
     */
    static getCurrentLifecycleOwner(): IHMLifecycleOwner | null;
    /**
     * Register global interceptor
     * @param interceptorInstance
     * @returns
     */
    static registerGlobalInterceptor(interceptorInstance: HMInterceptorInstance): void;
    /**
     * Unregister global interceptor
     * @param interceptorName
     * @returns
     */
    static unRegisterGlobalInterceptor(interceptorName: string): boolean;
    /**
     * Register global lifecycle
     * @param lifecycleInstance
     * @returns
     */
    static registerGlobalLifecycle(lifecycleInstance: HMLifecycleInstance): void;
    /**
     * Unregister global lifecycle
     * @param lifecycleName
     * @returns
     */
    static unRegisterGlobalLifecycle(lifecycleName: string): boolean;
    /**
     * Register global animator
     * @param key
     * @param animator
     */
    static registerGlobalAnimator(navigationId: string, key: 'standard' | 'dialog', animator: IHMAnimator): void;
    /**
     * Unregister global animator
     * @param key
     * @returns
     */
    static unRegisterGlobalAnimator(navigationId: string, key: 'standard' | 'dialog'): boolean;
    /**
     * Register custom dynamic router
     * @param pageInstance
     */
    static registerPageBuilder(pageInstance: HMPageInstance): boolean;
    /**
     * Generate page lifecycle management instance
     * @returns Unique identifier for page lifecycle instance
     */
    static generatePageLifecycleId(): string;
    /**
     * get page lifecycle by id
     * @param pageLifecycleId
     * @returns page lifecycle instance
     */
    static getPageLifecycleById(pageLifecycleId: string): HMPageLifecycle | undefined;
    /**
     * Execute service
     * @param serviceName
     * @param args
     * @returns service response
     */
    static request(serviceName: string, ...args: Object[]): HMServiceResp;
    /**
     * get service
     * @param serviceName
     * @returns serviceInstance
     */
    static getService<T>(serviceName: string): T;
}
