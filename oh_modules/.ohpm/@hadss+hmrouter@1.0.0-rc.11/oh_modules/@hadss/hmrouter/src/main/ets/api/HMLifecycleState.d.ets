export declare enum HMLifecycleState {
    onDisAppear = "onDisAppear",
    onShown = "onShown",
    onHidden = "onHidden",
    onWillDisappear = "onWillDisappear",
    onWillShow = "onWillShow",
    onWillHide = "onWillHide",
    onBackPressed = "onBackPressed"
}
export declare enum InnerLifecycleState {
    onPrepare = "onPrepare",
    onAppear = "onAppear",
    onWillAppear = "onWillAppear",
    onReady = "onReady"
}
export type AllLifecycleState = HMLifecycleState | InnerLifecycleState;
