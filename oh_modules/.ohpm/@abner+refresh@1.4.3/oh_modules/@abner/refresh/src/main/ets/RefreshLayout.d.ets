import { LoadMoreFooterAttr } from './attribute/LoadMoreFooterAttr';
import { RefreshHeaderAttr } from './attribute/RefreshHeaderAttr';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { RefreshController } from './controller/RefreshController';
import { LoadMoreLayoutStatusModel } from './model/LoadMoreLayoutStatusModel';
import { RefreshLayoutStatusModel } from './model/RefreshLayoutStatusModel';
import { RefreshScrollModifier } from './attribute/RefreshScrollModifier';
import { ContentScrollModifier } from './attribute/ContentScrollModifier';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/7/9
 * INTRODUCE:全新改版：刷新控件，支持List/Grid/Other……
 * */
@Component
export declare struct RefreshLayout {
    @Prop
    layoutWidth: Length;
    @Prop
    layoutHeight: Length;
    @BuilderParam
    itemLayout?: () => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatusModel) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatusModel) => void;
    @BuilderParam
    itemHeaderLayout?: () => void;
    @BuilderParam
    itemFooterLayout?: () => void;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    @State
    controller: RefreshController;
    @State
    private _privateRefreshLayoutStatus;
    @State
    private _privateLoadMoreLayoutStatus;
    @State
    private _privateRotateAngle;
    private _privateTouchDownY;
    @State
    private _privateHeaderMarginTop;
    @State
    private _privateHeaderMarginBottom;
    @State
    private _privateHeaderMarginDuration;
    private _privateAnimationDuration;
    @Prop
    enableRefresh?: boolean;
    @Prop
    enableLoadMore?: boolean;
    scroller: Scroller;
    contentScroller: Scroller;
    onContentScroller?: (scroller: Scroller) => void;
    private _refreshHeaderAttr;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    private _loadMoreFooterAttr;
    loadMoreFooterAttribute?: (attribute: LoadMoreFooterAttr) => void;
    @Prop
    isScrollSpring: boolean;
    scrollSpringHeight?: number;
    private _privatePrivateIsRefresh;
    private _privateEndRefreshTimeout;
    private _privateTouchRefreshHeight;
    @State
    parentEnable: boolean;
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
    onScroll?: (xOffset: number, yOffset: number) => void;
    onWillScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult;
    onDidScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState) => void;
    onScrollEdge?: (edge: Edge) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onScrollTouchEvent?: (event: TouchEvent) => void;
    onReachStart?: () => void;
    onReachEnd?: () => void;
    onParentAreaChange?: (oldValue: Area, newValue: Area) => void;
    onRefreshScrollEdge?: (edge: Edge) => void;
    onRefreshScrollToIndex?: (position: number) => void;
    onScrollDirection?: (isDown: boolean) => void;
    onGlobalPosition?: (position: number) => void;
    onScrollTouch?: (move: number) => void;
    onHeadAreaChange?: (oldValue: Area, newValue: Area) => void;
    childScroller?: Scroller;
    useMarkLocation?: boolean;
    @Prop
    refreshPosition: RefreshPositionEnum;
    @State
    parentNestedScroll?: NestedScrollOptions;
    @Prop
    isRefreshSticky?: boolean;
    @Prop
    isRefreshTopSticky?: boolean;
    @Prop
    refreshStickyPosition: RefreshPositionEnum;
    @Prop
    useMarkStickyPosition?: RefreshPositionEnum;
    enableScrollInteraction?: (interaction: boolean) => void;
    onStickyNestedScroll?: (nestedScroll: NestedScrollOptions) => void;
    onNestedScroll?: (nestedScroll: NestedScrollOptions) => void;
    onContentScroll?: (xOffset: number, yOffset: number) => void;
    onContentWillScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult;
    onContentDidScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState) => void;
    onContentScrollEdge?: (edge: Edge) => void;
    onContentScrollStart?: () => void;
    onContentScrollStop?: () => void;
    onContentScrollTouchEvent?: (event: TouchEvent) => void;
    onContentReachStart?: () => void;
    onContentReachEnd?: () => void;
    @State
    private _privateGlobalPositionMargin?;
    @State
    private _privateNavigationBarHeight?;
    parentEdgeEffect?: EdgeEffect;
    scrollBarState?: BarState;
    @Prop
    groupNoSticky: boolean;
    onScrollDistance?: (distance: number) => void;
    @State
    private _privateIsNothingFixedBottom;
    slideDisplayLoadData: boolean;
    isNeedLoadRebound: boolean;
    isPullUpProhibitTouch: boolean;
    isPullDownProhibitTouch: boolean;
    private upFirstScrollOffset;
    private isBottomScroll;
    @Prop
    isAdaptiveHeight: boolean;
    @State
    refreshScrollModifier: RefreshScrollModifier;
    @State
    contentScrollModifier: ContentScrollModifier;
    @Prop
    refreshHeight: Length;
    private isChildViewHeightUndefined;
    listenerEnableRefresh(): void;
    listenerController(): void;
    private autoRefresh;
    listenerRefreshLayoutStatus(): void;
    listenerLoadMoreLayoutStatus(): void;
    aboutToAppear(): void;
    build(): void;
    private centerSticky;
    private changeStickyNestedScroll;
    private actionEnd;
    private changeLoadMoreStatus;
    private changeScrollInteraction;
    private changeEnableScrollInteraction;
    @Builder
    refreshFooterView(d22: RefreshLayout): void;
}
