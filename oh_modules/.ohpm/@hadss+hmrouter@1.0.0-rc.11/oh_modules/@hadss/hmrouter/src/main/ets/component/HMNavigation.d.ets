import { AttributeUpdater } from '@kit.ArkUI';
import { IHMAnimator } from '../api/IHMAnimator';
@Component
export declare struct HMNavigation {
    @Require
    navigationId: string;
    @State
    navigationEnable: boolean;
    homePageUrl?: string;
    options?: HMNavigationOption;
    private hmRouterStore;
    @BuilderParam
    closer: () => void;
    private hmRouterMgrService;
    private pageStack?;
    private customTransition?;
    private hideNavBar?;
    private navigationKey?;
    private navbarLifecycleMgr;
    private pageBuilder?;
    @Builder
    closerBuilder(): void;
    getPageBuilder(name: string): boolean;
    @Builder
    dynamicPageBuilder(name: string, arg: ESObject): void;
    aboutToAppear(): void;
    onDidBuild(): void;
    aboutToDisappear(): void;
    build(): void;
}
interface NavTitle {
    titleValue: ResourceStr | WrappedBuilder<[]> | NavigationCommonTitle | NavigationCustomTitle;
    titleOptions?: NavigationTitleOptions;
}
export declare class HMNavigationOption {
    modifier?: AttributeUpdater<NavigationAttribute>;
    standardAnimator?: IHMAnimator.Effect;
    dialogAnimator?: IHMAnimator.Effect;
    title?: NavTitle;
    menus?: Array<NavigationMenuItem> | WrappedBuilder<[]>;
    toolbar?: Array<ToolbarItem> | WrappedBuilder<[]>;
    toolbarOptions?: NavigationToolbarOptions;
    onTitleModeChange?: (titleMode: NavigationTitleMode) => void;
    onNavBarStateChange?: (isVisible: boolean) => void;
    onNavigationModeChange?: (mode: NavigationMode) => void;
}
export {};
