import { LoadMoreFooterAttr } from '../attribute/LoadMoreFooterAttr';
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
import { RefreshController } from '../controller/RefreshController';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/4/2
 * INTRODUCE:刷新控件，支持List/Grid/Other……
 * */
@Component
export declare struct FloorRefreshLayout {
    layoutWidth: Length;
    layoutHeight: Length;
    private _refreshHeaderAttr;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    private _loadMoreFooterAttr;
    loadMoreFooterAttribute?: (attribute: LoadMoreFooterAttr) => void;
    @BuilderParam
    itemLayout: () => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatus) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatus) => void;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    @State
    controller: RefreshController;
    @Prop
    private _privateRefreshLayoutStatus;
    @State
    private _privateLoadMoreLayoutStatus;
    private _privateTouchDownY;
    private _privateTouchUpY;
    @State
    private _privateHeaderMarginTop;
    @State
    private _privateHeaderMarginDuration;
    @State
    private _privateRotateAngle;
    @State
    private _privateFooterMarginBottom;
    @State
    private _privateFooterMarginDuration;
    private _privatePrivateIsRefresh;
    private _privateTouchRefreshHeight;
    private _privateTouchLoadingHeight;
    enableScrollInteraction?: (interaction: boolean) => void;
    onScrollTouch?: (move: number) => void;
    onGlobalPosition?: (position: number) => void;
    @Prop
    enableRefresh?: boolean;
    @Prop
    enableLoadMore?: boolean;
    @State
    parentNestedScroll?: NestedScrollOptions;
    onScroll?: (xOffset: number, yOffset: number) => void;
    onScrollEdge?: (edge: Edge) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onScrollTouchEvent?: (event: TouchEvent) => void;
    scroller?: Scroller;
    onRefreshScrollEdge?: (edge: Edge) => void;
    onRefreshScrollToIndex?: (position: number) => void;
    @BuilderParam
    emptyLayout?: () => void;
    @BuilderParam
    errorLayout?: () => void;
    @BuilderParam
    loadingLayout?: () => void;
    @Prop
    showEmptyLayout?: boolean;
    @Prop
    showErrorLayout?: boolean;
    @Prop
    showLoadingLayout?: boolean;
    onScrollDirection?: (isDown: boolean) => void;
    scrollSpringHeight?: number;
    @State
    private _privateEnabled;
    isSecondFloorScroll: boolean;
    @State
    private _privateEnableScrollInteraction;
    listenerRefreshLayoutStatus(): void;
    listenerLoadMoreLayoutStatus(): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:监听刷新状态
     * */
    listenerController(): void;
    aboutToAppear(): void;
    private autoRefresh;
    build(): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:手势移动，包含开始和滑动状态
     * */
    private actionUpdate;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:滑动结束
     * */
    private actionEnd;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:开始下拉刷新
     * */
    private startRefresh;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:开始上拉加载
     * */
    private startLoading;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:结束下拉刷新
     * */
    private _privateEndRefreshTimeout;
    private endRefresh;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:结束上拉加载
     * */
    private endLoading;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:改变滑动状态
     * */
    private changeScrollInteraction;
}
