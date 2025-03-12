import { AllLifecycleState } from '../api/HMLifecycleState';
import { HMNavDstLifecycleOwner } from './implement/HMNavDstLifecycleOwner';
export declare class HMNavDstLifecycleMgr {
    private static instance;
    private navDstLifecycleMap;
    static getInstance(): HMNavDstLifecycleMgr;
    /**
     * Generate the corresponding NavDestination lifecycle instance when navigating to a page
     * @param navigationId
     * @param pageUrl
     * @param uiContext
     * @param onceLifecycle
     * @param singleton
     * @returns
     */
    createLifecycle(uiContext: UIContext, navigationId: string, pageUrl: string, singleton?: boolean): HMNavDstLifecycleOwner;
    /**
     * Destroy NavDestination lifecycle
     * @param navigationId
     * @param pageUrl
     * @param navId
     */
    destroyLifecycle(navigationId: string, pageUrl: string, navDestinationId: string): void;
    /**
     * Update the Key.navDestinationId of the NavDestination lifecycle
     * @param navigationId
     * @param pageUrl
     * @param navId
     */
    updateLifecycleKey(navigationId: string, pageUrl: string, navContext: NavDestinationContext): void;
    /**
     * Dispatch NavDestination lifecycle
     * @param state
     * @param navigationId
     * @param pageUrl
     * @param navDestinationId
     * @returns
     */
    dispatchEvent(state: AllLifecycleState, navigationId: string, pageUrl: string, navDestinationId?: string): boolean | void;
    /**
     * Get the NavDestinationLifecycleObserver using PageUrl to obtain the current NavDestination lifecycle
     * Retrieve NavDestination Lifecycle Observer through PageURL for get the current NavDestination lifecycle
     * @param navigationId
     * @param pageUrl
     * @returns
     */
    getLifecycleOwnerByPageUrl(navigationId: string, pageUrl: string): HMNavDstLifecycleOwner;
}
