export interface HMLifecycleContext {
    uiContext: UIContext;
    navContext?: NavDestinationContext;
}
export type HMLifecycleCallback = (ctx: HMLifecycleContext) => boolean | void;
export interface IHMLifecycle {
    onPrepare?(ctx: HMLifecycleContext): void;
    onAppear?(ctx: HMLifecycleContext): void;
    onDisAppear?(ctx: HMLifecycleContext): void;
    onShown?(ctx: HMLifecycleContext): void;
    onHidden?(ctx: HMLifecycleContext): void;
    onWillAppear?(ctx: HMLifecycleContext): void;
    onWillDisappear?(ctx: HMLifecycleContext): void;
    onWillShow?(ctx: HMLifecycleContext): void;
    onWillHide?(ctx: HMLifecycleContext): void;
    onReady?(ctx: HMLifecycleContext): void;
    onBackPressed?(ctx: HMLifecycleContext): boolean;
}
