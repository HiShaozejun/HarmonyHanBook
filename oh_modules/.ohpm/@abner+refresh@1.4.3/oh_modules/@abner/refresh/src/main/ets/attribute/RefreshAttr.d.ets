/**
 * AUTHOR:AbnerMing
 * DATE:2024/7/16
 * INTRODUCE:刷新基类相关属性
 * */
export declare class RefreshAttr {
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
    onContentScroll?: (xOffset: number, yOffset: number) => void;
    onContentWillScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult;
    onContentDidScroll?: (xOffset: number, yOffset: number, scrollState: ScrollState) => void;
    onContentScrollEdge?: (edge: Edge) => void;
    onContentScrollStart?: () => void;
    onContentScrollStop?: () => void;
    onContentScrollTouchEvent?: (event: TouchEvent) => void;
    onContentReachStart?: () => void;
    onContentReachEnd?: () => void;
}
