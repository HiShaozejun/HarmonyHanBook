import { HMNavPathStack } from './HMNavPathStack';
import { HMRouterPathInfo } from '../api/HMRouterPathInfo';
import { HMRouterPathCallback } from '../api/HMRouterPathCallback';
import { IHMLifecycleOwner } from '../lifecycle/interface/IHMLifecycleOwner';
import { HMActionType } from './HMActionType';
import { HMPageParam, HMParamType } from '../api/HMParamType';
export declare class HMRouterMgrService {
    private static instance;
    private navPathStackMap;
    private lastNavigationId;
    private navbarLifecycleMgr;
    private navDestinationLifecycleMgr;
    private constructor();
    /**
     * Get HMRouterMgrService instance
     * @returns
     */
    static getInstance(): HMRouterMgrService;
    /**
     * When HMNavigation is created, call this method to generate a PathStack that is bound to it.
     * @param navigationId
     * @param hideNavBar
     * @param context
     * @returns
     */
    createPathStack(navigationId: string, hideNavBar: boolean, context: UIContext): HMNavPathStack;
    /**
     * When HMNavigation is destroyed, clear the navigation
     * @param navigationId
     */
    deletePathStack(pathStack: HMNavPathStack): void;
    /**
     * Retrieve routing information, and when no navigationId is passed in, use the most recent navigationId passed in
     * @param navigationId
     * @returns
     */
    getPathStack(navigationId?: string): HMNavPathStack | null;
    /**
     * Routing operations: push/replace
     * @param pathInfo
     * @param callback
     */
    pushOrReplace(type: HMActionType, pathInfo: HMRouterPathInfo, callback?: HMRouterPathCallback): void;
    /**
     * Routing operations: Pop
     * @param pathInfo
     * @param skipedLayerNumber
     */
    pop(pathInfo?: HMRouterPathInfo, skipedLayerNumber?: number): void;
    /**
     * Get current page parameters
     * @returns
     */
    getCurrentParam(type?: HMParamType): HMPageParam | Map<string, Object> | Object | null;
    /**
     * Get the lifecycle instance corresponding to the current page
     * @returns
     */
    getCurrentLifecycleOwner(): IHMLifecycleOwner | null;
    private getLastNavigationId;
}
