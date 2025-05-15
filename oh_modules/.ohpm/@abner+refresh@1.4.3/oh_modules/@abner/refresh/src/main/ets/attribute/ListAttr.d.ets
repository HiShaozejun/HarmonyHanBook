/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/14
 * INTRODUCE:ListView相关属性
 * */
export declare class ListAttr {
    width?: Length;
    height?: Length;
    backgroundColor?: ResourceColor;
    listDirection?: Axis;
    divider: ListAttrDivider;
    scrollBar?: BarState;
    contentEndOffset?: number;
    cachedCount?: number;
    edgeEffect?: EdgeEffect;
    /**
     * @deprecated since 1.1.7 属性已过时
     */
    scrollSpringHeight?: number;
    nestedScroll?: NestedScrollOptions;
    parentNestedScroll?: NestedScrollOptions;
    margin?: Margin | Length;
    padding?: Padding | Length;
    onScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onScrollIndex?: (start: number, end: number, center: number) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onReachStart?: () => void;
    onReachEnd?: () => void;
    onWillScroll?: (scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;
    onDidScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    lanesValue?: number | LengthConstrain;
    lanesGutter?: Dimension;
    onVisibleAreaChange?: (isVisible: boolean, currentRatio: number) => void;
}
declare class ListAttrDivider {
    strokeWidth?: Length;
    color?: ResourceColor;
    startMargin?: Length;
    endMargin?: Length;
}
export {};
