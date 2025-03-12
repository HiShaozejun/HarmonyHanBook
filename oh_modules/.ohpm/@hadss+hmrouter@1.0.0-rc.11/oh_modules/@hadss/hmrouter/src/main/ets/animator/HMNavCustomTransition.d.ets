import { HMAnimatorHandle } from './HMAnimatorHandle';
export declare class HMNavCustomTransition {
    private static readonly TransitionMap;
    proxy: NavigationTransitionProxy | undefined;
    operation: NavigationOperation;
    navigationId: string;
    hideNavBar: boolean;
    private animatorMgr;
    static getInstance(navigationId: string, hideNavBar: boolean): HMNavCustomTransition;
    static destroyInstance(navigationId: string): void;
    getCustomAnimation(from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation): NavigationAnimatedTransition | undefined;
    private getPushOrReplaceOnceAnimatorHandle;
    private getPopOnceAnimatorHandle;
    private getPushOrReplacePageAnimatorHandle;
    private getPopPageAnimatorHandle;
    private animatedTransition;
}
export declare class HandleTuple {
    enterAnimatorHandle: HMAnimatorHandle | undefined;
    exitAnimatorHandle: HMAnimatorHandle | undefined;
}
