import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshDataSource } from './model/RefreshDataSource';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/23
 * INTRODUCE:自定义的瀑布流交错视图
 * */
@Component
export declare struct WaterFlowView {
    @Prop
    columnsTemplate: string;
    @Prop
    columnSize?: number;
    columnsGap: Length;
    rowsGap: Length;
    bgColor: ResourceColor;
    sWidth: Length;
    sHeight?: Length;
    @Prop
    items: Array<Object>;
    @BuilderParam
    itemView: (item: Object, index: number) => void;
    scroller: Scroller;
    @Prop
    nestedScroll: NestedScrollOptions;
    isRefresh: boolean;
    reachStart?: (start: number) => void;
    reachEnd?: (isEnd: boolean) => void;
    isLazyData: boolean;
    lazyDataSource?: RefreshDataSource;
    lazyCachedCount: number;
    onLazyDataSource?: (dataSource: RefreshDataSource) => void;
    @Prop
    enableScrollInteraction: boolean;
    isKeyGeneratorIndex: boolean;
    dataController: DataController;
    sMargin?: Margin | Length;
    sPadding?: Padding | Length;
    onScrollIndex?: (first: number, last: number) => void;
    onScroll?: (xOffset: number, yOffset: number) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    @State
    refreshPosition: RefreshPositionEnum;
    onRefreshPosition?: (refreshPosition: RefreshPositionEnum) => void;
    @Prop
    isRefreshSticky?: boolean;
    onWaterFlowVisibleAreaChange?: (isVisible: boolean, currentRatio: number) => void;
    onWaterFlowItemVisibleAreaChange?: (position: number, isVisible: boolean, currentRatio: number) => void;
    changeColumnSize(): void;
    changeData(): void;
    aboutToAppear(): void;
    build(): void;
    @Builder
    getFlowItem(f43: WaterFlowView, g43: Object, h43: number): void;
}
