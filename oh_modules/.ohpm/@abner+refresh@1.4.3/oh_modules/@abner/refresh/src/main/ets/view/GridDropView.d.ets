/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/27
 * INTRODUCE:网格拖拽组件
 * */
@Component
export declare struct GridDropView {
    columnsTemplate: string;
    columnsGap: number;
    rowsGap: number;
    dropWidth: Length;
    dropHeight: Length;
    @Prop
    isEditMode: boolean;
    bgColor: ResourceColor;
    @Prop
    items: Array<Object>;
    @BuilderParam
    itemLayout: (item: Object, index: number) => void;
    private scroller;
    @BuilderParam
    dropLayout?: (item: Object, index: number) => void;
    onDropStart?: () => void;
    onDropEnd?: () => void;
    onDropData?: (items: Array<Object>) => void;
    prohibitDrop: Array<number>;
    prohibitMaxSwap: number;
    @State
    supportAnimation: boolean;
    _privateColumnsSize: number;
    _privateWindowWidth: number;
    _privateWindowTop: number;
    _privateItemHeight: number;
    @Prop
    nestedScroll?: NestedScrollOptions;
    aboutToAppear(): void;
    @Builder
    pixelMapBuilder(f31: Object, g31: number): void;
    swapPosition(c31: number, d31: number): void;
    build(): void;
    countOccurrences(i29: string, j29: string): number;
}
