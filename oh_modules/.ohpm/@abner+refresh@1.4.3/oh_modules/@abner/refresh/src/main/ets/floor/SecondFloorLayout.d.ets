import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
import { SfRefreshController } from '../controller/SfRefreshController';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/4/29
 * INTRODUCE:二楼视图
 * */
@Component
export declare struct SecondFloorLayout {
    @BuilderParam
    firstFloorView: () => void;
    @BuilderParam
    secondFloorView: () => void;
    @BuilderParam
    topFixedView: () => void;
    @BuilderParam
    refreshHeaderView?: (status: RefreshLayoutStatus) => void;
    private _privateRefreshHeaderAttr;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    isNeedHalfFloor: boolean;
    enableScrollInteraction?: (interaction: boolean) => void;
    @State
    sfController: SfRefreshController;
    onScrollStatus?: (status: RefreshLayoutStatus) => void;
    onChangeScrollStatus?: (status: RefreshLayoutStatus) => void;
    onSecondFloorScrollStatus?: (status: RefreshLayoutStatus) => void;
    onRefresh?: () => void;
    @Prop
    enableRefresh?: boolean;
    @State
    private _privateTopViewOpacity;
    @State
    private _privateTopViewHeight;
    private _privateTouchDownY;
    @State
    private _privateEndActionY;
    @State
    private _privateHeaderMarginTop;
    @State
    private _privateHeaderMarginDuration;
    @State
    private _privateScrollStatus;
    @State
    private _privateRotateAngle;
    @Prop
    showSecondFloorStatus?: boolean;
    private _privateWindowHeight;
    private _privateAnimationDuration;
    @Prop
    isScrollSecondFloor?: boolean;
    onScrollDistance?: (distance: number) => void;
    onActionStart?: () => void;
    onActionEnd?: () => void;
    onActionUpdate?: (event: GestureEvent) => void;
    @State
    private _privateEnabled;
    childScroller?: Scroller;
    halfFloorHeight?: number;
    halfFloorGap: number;
    opacityDistance: number;
    pullDownDistance: number;
    releaseDistance: number;
    @State
    isHideHeader: boolean;
    private isScrollHalfFloor;
    private isCancelHalfFloorStatus;
    private _privateTouchDamping;
    listenerController(): void;
    autoRefresh(): void;
    endAnimation(h10: number): void;
    aboutToAppear(): void;
    private _tempStatus;
    private changeScrollStatus;
    build(): void;
    private onHalfFloorActionTouchUpdate;
    private onActionTouchUpdate;
    private scrollDistance;
    private onActionTouchEnd;
    downRefresh(): void;
}
