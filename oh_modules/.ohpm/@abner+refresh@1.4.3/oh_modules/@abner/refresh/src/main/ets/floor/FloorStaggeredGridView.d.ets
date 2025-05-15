import { LoadMoreFooterAttr } from '../attribute/LoadMoreFooterAttr';
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
import { RefreshPositionEnum } from '../constants/RefreshPositionEnum';
import { DataController } from '../controller/DataController';
import { RefreshController } from '../controller/RefreshController';
import { RefreshDataSource } from '../model/RefreshDataSource';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/23
 * INTRODUCE:自定义的瀑布流交错视图
 * */
@Component
export declare struct FloorStaggeredGridView {
    @State
    controller: RefreshController;
    dataController: DataController;
    @BuilderParam
    itemLayout: (item: Object, index: number) => void;
    @BuilderParam
    headerRefreshLayout?: (status: RefreshLayoutStatus) => void;
    @BuilderParam
    footerLoadLayout?: (status: LoadMoreLayoutStatus) => void;
    @BuilderParam
    itemHeaderLayout?: () => void;
    onRefresh?: () => void;
    onLoadMore?: () => void;
    columnsTemplate: string;
    columnsGap: Length;
    rowsGap: Length;
    bgColor: ResourceColor;
    sWidth: Length;
    sHeight: Length;
    @Prop
    items: Array<Object>;
    scroller: Scroller;
    @State
    nestedScroll?: NestedScrollOptions;
    isLazyData: boolean;
    lazyCachedCount: number;
    onLazyDataSource?: (dataSource: RefreshDataSource) => void;
    lazyDataSource?: RefreshDataSource;
    @Prop
    enableScrollInteraction: boolean;
    @State
    private _globalPosition;
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
    scrollSpringHeight?: number;
    reachPosition?: (refreshPosition: RefreshPositionEnum) => void;
    @Prop
    isFirstFloorStatus: boolean;
    private _privateIsTopMargin;
    refreshScroller: Scroller;
    listenerRefreshController(): void;
    changeNestedScroll(x5: boolean): void;
    @Builder
    itemWaterFlowLayout(l5: FloorStaggeredGridView): void;
    @Builder
    itemRefreshLayout(a5: FloorStaggeredGridView): void;
    build(): void;
}
