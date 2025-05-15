import { ListAttr } from './attribute/ListAttr';
import { ListItemAttr } from './attribute/ListItemAttr';
import { LoadMoreFooterAttr } from './attribute/LoadMoreFooterAttr';
import { RefreshAttr } from './attribute/RefreshAttr';
import { RefreshHeaderAttr } from './attribute/RefreshHeaderAttr';
import { SlideMenuAttr } from './attribute/SlideMenuAttr';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshController } from './controller/RefreshController';
import { ItemGroupModel } from './model/ItemGroupModel';
import { LoadMoreLayoutStatusModel } from './model/LoadMoreLayoutStatusModel';
import { RefreshDataSource } from './model/RefreshDataSource';
import { RefreshLayoutStatusModel } from './model/RefreshLayoutStatusModel';
/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/11
 * INTRODUCE:自定义的ListView刷新控件
 * */
@Component
export declare struct ListView {
    @BuilderParam
    itemLayout?: (item: Object, index: number) => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatusModel) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatusModel) => void;
    @BuilderParam
    itemHeaderLayout?: () => void;
    @BuilderParam
    itemFooterLayout?: () => void;
    controller: RefreshController;
    dataController: DataController;
    @Prop
    items: Array<Object>;
    @State
    isScrollSpring: boolean;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    @Prop
    enableRefresh?: boolean;
    @Prop
    enableLoadMore?: boolean;
    private _privateRefreshAttr;
    refreshAttribute?: (attribute: RefreshAttr) => void;
    private _privateListAttr;
    listAttribute?: (attribute: ListAttr) => void;
    private _privateListItemAttr;
    listItemAttribute?: (attribute: ListItemAttr) => void;
    isLazyData: boolean;
    lazyCachedCount: number;
    @State
    lazyDataSource?: RefreshDataSource;
    onLazyDataSource?: (dataSource: RefreshDataSource) => void;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    loadMoreFooterAttribute?: (attribute: LoadMoreFooterAttr) => void;
    isKeyGeneratorIndex: boolean;
    @BuilderParam
    slideRightMenuLayout?: (index: number) => void;
    private _privateSlideMenuAttr;
    slideMenuAttr?: (attribute: SlideMenuAttr) => void;
    @Prop
    initialIndex?: number;
    scroller?: Scroller;
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
    @BuilderParam
    swipeLeftMenuLayout?: (index: number) => void;
    @BuilderParam
    swipeRightMenuLayout?: (index: number) => void;
    @BuilderParam
    groupSwipeLeftMenuLayout?: (parentPosition: number, index: number) => void;
    @BuilderParam
    groupSwipeRightMenuLayout?: (parentPosition: number, index: number) => void;
    swipeRightAreaDistance?: Length;
    swipeLeftAreaDistance?: Length;
    onSwipeLeftStateChange?: (state: SwipeActionState) => void;
    onSwipeRightStateChange?: (state: SwipeActionState, index: number) => void;
    onSwipeOffsetChange?: (offset: number, index: number) => void;
    @Prop
    isSwipeDelete?: boolean;
    isDeleteReloadIndex?: boolean;
    private _privateIsItemGroup?;
    @Prop
    itemGroupData?: Array<ItemGroupModel>;
    @BuilderParam
    itemGroupHeader?: (item: Object, position: number) => void;
    onScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onScrollTouch?: (move: number) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onScrollTouchEvent?: (event: TouchEvent) => void;
    onReachStart?: () => void;
    onReachEnd?: () => void;
    onRefreshScrollEdge?: (edge: Edge) => void;
    onRefreshScrollToIndex?: (position: number) => void;
    onScrollDirection?: (isDown: boolean) => void;
    onRefreshAreaChange?: (oldValue: Area, newValue: Area) => void;
    onHeadAreaChange?: (oldValue: Area, newValue: Area) => void;
    @Prop
    private _privateRefreshLayoutStatus;
    @Prop
    refreshPosition: RefreshPositionEnum;
    @Prop
    listNestedScroll: NestedScrollOptions;
    @Prop
    isRefreshSticky?: boolean;
    @Prop
    refreshStickyPosition?: RefreshPositionEnum;
    @Prop
    useMarkStickyPosition?: RefreshPositionEnum;
    onListRefreshPosition?: (refreshPosition: RefreshPositionEnum) => void;
    private isFirstLoadData;
    autoShowEmptyLayout?: boolean;
    @Prop
    enableScrollInteraction: boolean;
    refreshOnScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onContentScroller?: (scroller: Scroller) => void;
    @State
    _privateItemHeight: number;
    private _privateContentScroller;
    private _privateIsPosition;
    prohibitRefresh?: boolean;
    @Prop
    groupNoSticky: boolean;
    onScrollDistance?: (distance: number) => void;
    space?: number | string;
    isNeedGroupIndex: boolean;
    @BuilderParam
    itemGroupIndexLayout?: (item: Object, index: number, groupIndex: number) => void;
    slideDisplayLoadData: boolean;
    isNeedLoadRebound: boolean;
    isPullUpProhibitTouch: boolean;
    isPullDownProhibitTouch: boolean;
    @Prop
    isAdaptiveHeight: boolean;
    @Prop
    refreshHeight: Length;
    aboutToAppear(): void;
    changeData(): void;
    changeLazyData(): void;
    @Builder
    itemRefreshForEach(i18: ListView): void;
    @Builder
    listRefreshLayout(c17: ListView): void;
    @Builder
    itemRefreshLayout(a17: ListView): void;
    build(): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:list 条目
     * */
    @Builder
    getListItem(p15: ListView, q15: Object, r15: number, s15?: number): void;
    private _slidPanOption;
    @State
    private _privateSlideRightOffset;
    @State
    private _privateSlideEndPosition;
    @State
    actionStartX: number;
    @Builder
    getListSlideItem(f15: ListView, g15: Object, h15: number, i15?: number): void;
    @Builder
    getListSlideMenuView(m14: ListView, n14: Object, o14: number, p14?: number): void;
}
