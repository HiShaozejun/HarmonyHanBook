/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/14
 * INTRODUCE:GridView相关属性
 * */
export declare class GridAttr {
    width?: Length;
    height?: Length;
    backgroundColor?: ResourceColor;
    columnsTemplate?: string;
    rowsTemplate?: string;
    columnsGap?: Length;
    rowsGap?: Length;
    scrollBar?: BarState;
    scrollBarColor?: string | number | Color;
    scrollBarWidth?: string | number;
    cachedCount?: number;
    /**
     * @deprecated since 1.1.7 属性已过时
     */
    scrollSpringHeight?: number;
    /**
     * @deprecated since 1.1.6 属性已过时
     */
    parentNestedScroll?: NestedScrollOptions;
    margin?: Margin | Length;
    padding?: Padding | Length;
    onScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onScrollIndex?: (first: number, last: number) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onReachStart?: () => void;
    onReachEnd?: () => void;
    edgeEffect?: EdgeEffect;
    onWillScroll?: (scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;
    onDidScroll?: (scrollOffset: number, scrollState: ScrollState) => void;
    onVisibleAreaChange?: (isVisible: boolean, currentRatio: number) => void;
}
