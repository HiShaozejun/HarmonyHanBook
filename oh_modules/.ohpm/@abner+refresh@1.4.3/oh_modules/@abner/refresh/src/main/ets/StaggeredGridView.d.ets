import { LoadMoreFooterAttr } from './attribute/LoadMoreFooterAttr';
import { RefreshAttr } from './attribute/RefreshAttr';
import { RefreshHeaderAttr } from './attribute/RefreshHeaderAttr';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshController } from './controller/RefreshController';
import { LoadMoreLayoutStatusModel } from './model/LoadMoreLayoutStatusModel';
import { RefreshDataSource } from './model/RefreshDataSource';
import { RefreshLayoutStatusModel } from './model/RefreshLayoutStatusModel';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/23
 * INTRODUCE:自定义的瀑布流交错视图
 * */
@Component
export declare struct StaggeredGridView {
    controller: RefreshController;
    dataController: DataController;
    @BuilderParam
    itemLayout: (item: Object, index: number) => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatusModel) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatusModel) => void;
    @BuilderParam
    itemHeaderLayout?: () => void;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    @Prop
    columnsTemplate: string;
    columnsGap: Length;
    rowsGap: Length;
    bgColor: ResourceColor;
    sWidth: Length;
    sHeight?: Length;
    @Prop
    items: Array<Object>;
    scroller: Scroller;
    @State
    nestedScroll?: NestedScrollOptions;
    isLazyData: boolean;
    lazyCachedCount: number;
    onLazyDataSource?: (dataSource: RefreshDataSource) => void;
    @State
    lazyDataSource?: RefreshDataSource;
    @Prop
    enableScrollInteraction: boolean;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    loadMoreFooterAttribute?: (attribute: LoadMoreFooterAttr) => void;
    @Prop
    enableRefresh?: boolean;
    @Prop
    enableLoadMore?: boolean;
    parentNestedScroll?: NestedScrollOptions;
    sMargin?: Margin | Length;
    sPadding?: Padding | Length;
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
    onRefreshScroll?: (xOffset: number, yOffset: number) => void;
    onRefreshScrollEdge?: (edge: Edge) => void;
    onRefreshScrollStart?: () => void;
    onRefreshScrollStop?: () => void;
    onRefreshScrollTouchEvent?: (event: TouchEvent) => void;
    onScrollIndex?: (first: number, last: number) => void;
    onScroll?: (xOffset: number, yOffset: number) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onScrollDirection?: (isDown: boolean) => void;
    isParentControlInteraction?: boolean;
    /**
     * @deprecated since 1.1.7 属性已过时
     */
    scrollSpringHeight?: number;
    @State
    refreshPosition: RefreshPositionEnum;
    @Prop
    isRefreshSticky?: boolean;
    @Prop
    refreshStickyPosition?: RefreshPositionEnum;
    onHeadAreaChange?: (oldValue: Area, newValue: Area) => void;
    autoShowEmptyLayout?: boolean;
    @State
    isScrollSpring: boolean;
    @BuilderParam
    itemFooterLayout?: () => void;
    private _privateRefreshAttr;
    refreshAttribute?: (attribute: RefreshAttr) => void;
    onContentScroller?: (scroller: Scroller) => void;
    parentEdgeEffect?: EdgeEffect;
    prohibitRefresh?: boolean;
    onWaterFlowVisibleAreaChange?: (isVisible: boolean, currentRatio: number) => void;
    onWaterFlowItemVisibleAreaChange?: (position: number, isVisible: boolean, currentRatio: number) => void;
    scrollBarState?: BarState;
    onScrollDistance?: (distance: number) => void;
    slideDisplayLoadData: boolean;
    isPullUpProhibitTouch: boolean;
    isPullDownProhibitTouch: boolean;
    @Prop
    columnSize?: number;
    @Prop
    isAdaptiveHeight: boolean;
    changeStaggeredData(): void;
    aboutToAppear(): void;
    changeLazyData(): void;
    @Builder
    itemWaterFlowLayout(o27: StaggeredGridView): void;
    @Builder
    itemRefreshLayout(m27: StaggeredGridView): void;
    build(): void;
}
