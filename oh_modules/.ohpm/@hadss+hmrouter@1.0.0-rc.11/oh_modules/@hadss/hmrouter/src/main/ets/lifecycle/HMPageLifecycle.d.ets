import { router } from '@kit.ArkUI';
export declare class HMPageLifecycle {
    private routerInfo;
    private navbarLifecycleMgr;
    constructor(routerInfo: router.RouterState);
    onDisAppear(): void;
    onShown(): void;
    onHidden(): void;
    onBackPressed(): boolean;
}
