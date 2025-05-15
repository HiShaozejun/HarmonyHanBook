import { GridAttr } from './attribute/GridAttr';
import { GridItemAttr } from './attribute/GridItemAttr';
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
 * DATE:2023/10/14
 * INTRODUCE:自定义的GridView刷新控件
 * */
@Component
export declare struct GridView {
    @BuilderParam
    itemLayout: (item: Object, index: number) => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatusModel) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatusModel) => void;
    @BuilderParam
    itemHeaderLayout?: () => void;
    @Prop
    items: Array<Object>;
    controller: RefreshController;
    dataController: DataController;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    private _privateRefreshAttr;
    refreshAttribute?: (attribute: RefreshAttr) => void;
    @Prop
    _privateGridAttr: GridAttr;
    gridAttribute?: (attribute: GridAttr) => void;
    private _privateGridItemAttr;
    gridItemAttribute?: (attribute: GridItemAttr) => void;
    isLazyData: boolean;
    lazyCachedCount: number;
    onLazyDataSource?: (dataSource: RefreshDataSource) => void;
    @State
    lazyDataSource?: RefreshDataSource;
    refreshHeaderAttribute?: (attribute: RefreshHeaderAttr) => void;
    loadMoreFooterAttribute?: (attribute: LoadMoreFooterAttr) => void;
    isKeyGeneratorIndex: boolean;
    @Prop
    enableRefresh?: boolean;
    @Prop
    enableLoadMore?: boolean;
    scroller?: Scroller;
    @Prop
    columnSize?: number;
    @BuilderParam
    emptyLayout?: () => void;
    @BuilderParam
    errorLayout?: () => void;
    @BuilderParam
    loadingLayout?: () => void;
    @Prop
    showLoadingLayout?: boolean;
    @Prop
    showEmptyLayout?: boolean;
    @Prop
    showErrorLayout?: boolean;
    @State
    refreshPosition: RefreshPositionEnum;
    @Prop
    isRefreshSticky?: boolean;
    @Prop
    refreshStickyPosition?: RefreshPositionEnum;
    onRefreshScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onScrollTouch?: (move: number) => void;
    onRefreshScrollStart?: () => void;
    onRefreshScrollStop?: () => void;
    onScrollTouchEvent?: (event: TouchEvent) => void;
    refreshOnReachStart?: () => void;
    refreshOnReachEnd?: () => void;
    onScrollEdge?: (edge: Edge) => void;
    onRefreshScrollToIndex?: (position: number) => void;
    onScrollDirection?: (isDown: boolean) => void;
    onRefreshAreaChange?: (oldValue: Area, newValue: Area) => void;
    onHeadAreaChange?: (oldValue: Area, newValue: Area) => void;
    autoShowEmptyLayout?: boolean;
    @State
    isScrollSpring: boolean;
    @BuilderParam
    itemFooterLayout?: () => void;
    @Prop
    enableScrollInteraction: boolean;
    @Prop
    gridNestedScroll: NestedScrollOptions;
    onGridRefreshPosition?: (refreshPosition: RefreshPositionEnum) => void;
    onContentScroller?: (scroller: Scroller) => void;
    @State
    _privateItemHeight: number;
    private _privateContentScroller;
    prohibitRefresh?: boolean;
    onScrollDistance?: (distance: number) => void;
    slideDisplayLoadData: boolean;
    layoutOptions?: GridLayoutOptions;
    isPullUpProhibitTouch: boolean;
    isPullDownProhibitTouch: boolean;
    @Prop
    isAdaptiveHeight: boolean;
    changeColumnSize(): void;
    aboutToAppear(): void;
    changeData(): void;
    changeLazyData(): void;
    @Builder
    gridItem(y12: GridView, z12: Object, a13: number): void;
    @Builder
    gridLayout(b12: GridView): void;
    @Builder
    contentLayout(z11: GridView): void;
    build(): void;
}
