/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/23
 * INTRODUCE:自定义的瀑布流交错视图
 * */
import { RefreshPositionEnum } from '../constants/RefreshPositionEnum';
import { DataController } from '../controller/DataController';
import { RefreshDataSource } from '../model/RefreshDataSource';
@Component
export declare struct FloorWaterFlowView {
    columnsTemplate: string;
    columnsGap: Length;
    rowsGap: Length;
    bgColor: ResourceColor;
    sWidth: Length;
    sHeight: Length;
    @Prop
    items: Array<Object>;
    @BuilderParam
    itemView: (item: Object, index: number) => void;
    scroller: Scroller;
    @Prop
    nestedScroll?: NestedScrollOptions;
    isRefresh: boolean;
    reachPosition?: (refreshPosition: RefreshPositionEnum) => void;
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
    changeData(): void;
    aboutToAppear(): void;
    build(): void;
    private callBackPosition;
    @Builder
    getFlowItem(s6: Object, t6: number, u6: boolean): void;
}
