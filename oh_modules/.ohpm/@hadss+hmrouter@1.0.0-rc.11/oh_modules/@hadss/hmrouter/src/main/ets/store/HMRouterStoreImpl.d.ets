import { collections, HashMap, taskpool, TreeSet } from '@kit.ArkTS';
import { IHMAnimator } from '../api/IHMAnimator';
import { HMRouterConfig } from '../api/HMRouterConfig';
import { HMInterceptorStoreData } from './entity/HMInterceptor';
import { HMLifecycleStoreData } from './entity/HMLifecycle';
import { HMAnimatorStoreData } from './entity/HMAnimator';
import { HMServiceData } from './entity/HMService';
import { HMInterceptorInstance, HMLifecycleInstance, HMPageInstance, HMServiceInstance } from './ComponentInstance';
import { IHMRouterStore } from './IHMRouterStore';
import { HMRouterStoreData } from './entity/HMRouter';
export declare class HMRouterStoreImpl implements IHMRouterStore {
    private static instance;
    /**
     * Whether to initialize
     */
    private flag;
    /**
     * Store route table configuration information
     */
    private routerMap;
    /**
     * Regular expression path storage object
     */
    private regexRouterList;
    /**
     * Store the mapping between real paths and the route table to improve lookup performance
     */
    private tempPathMapRoute;
    /**
     * Global interceptor, triggered once for each page navigation (including Dialog type NavDestination). This list is sorted; any new additions require re-sorting.
     */
    private globalInterceptorArray;
    /**
     * key:interceptor，globally unique; value:HMInterceptorInstance
     */
    private interceptorMap;
    /**
     * Global lifecycle, triggered once for each page navigation (including Dialog type NavDestination). This list is sorted; any new additions require re-sorting.
     */
    private globalLifecycleArray;
    /**
     * key:lifecycle name，globally unique，value:HMLifecycleInstance
     */
    private lifecycleMap;
    /**
     * key:animator name，globally unique; value:HMAnimatorInstance
     */
    private animatorMap;
    /**
     * key:service name，globally unique; value: HMServiceData
     */
    private serviceMap;
    private constructor();
    isInit(): boolean;
    getGlobalInterceptorArray(): HMInterceptorInstance[];
    getInterceptorMap(): HashMap<string, HMInterceptorStoreData>;
    getGlobalLifecycleArray(): HMLifecycleInstance[];
    getLifecycleMap(): HashMap<string, HMLifecycleStoreData>;
    getRouterMap(): HashMap<string, HMRouterStoreData>;
    getRegexRouterList(): TreeSet<HMRouterStoreData>;
    getAnimatorMap(): HashMap<string, HMAnimatorStoreData>;
    getServiceMap(): HashMap<string, HMServiceData>;
    static getInstance(): IHMRouterStore;
    init(config: HMRouterConfig): void;
    initModuleInfo(config: HMRouterConfig, hspModuleNames: collections.Set<string>, func: Function, priority: taskpool.Priority): Promise<void>;
    getGlobalInterceptor(): HMInterceptorInstance[];
    getRouterDataByPageUrl(pageUrl: string): HMRouterStoreData | null;
    getInterceptorByPageUrl(pageUrl: string): Array<HMInterceptorInstance>;
    getGlobalLifecycle(): HMLifecycleInstance[];
    getLifecycleInstanceByPageUrl(pageUrl: string): HMLifecycleInstance | null;
    getAnimatorByPageUrl(pageUrl: string): IHMAnimator | null;
    hasAnimator(name: string): boolean;
    getAnimatorByName(name: string): IHMAnimator | null;
    registerAnimator(name: string, hmAnimator: IHMAnimator): boolean;
    unRegisterAnimator(name: string): boolean;
    registerHMPageInstance(hmPageInstance: HMPageInstance): boolean;
    registerGlobalInterceptor(interceptor: HMInterceptorInstance): void;
    existGlobalInterceptor(interceptorName: string): boolean;
    unRegisterGlobalInterceptor(interceptorName: string): boolean;
    registerGlobalLifecycle(lifecycle: HMLifecycleInstance): void;
    unRegisterGlobalLifecycle(lifecycleName: string): boolean;
    existGlobalLifecycle(lifecycleName: string): boolean;
    getBuilderByPageUrl(pageUrl: string): WrappedBuilder<ESObject> | undefined;
    loadService(serviceName: string): HMServiceInstance | undefined;
    private initStoreInfo;
}
