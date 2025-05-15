/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/14
 * INTRODUCE:GridView的子条目相关属性
 * */
export declare class GridItemAttr {
    width?: Length;
    height?: Length;
    margin?: Margin | Length;
    padding?: Padding | Length;
    backgroundColor?: ResourceColor;
    onClick?: (event?: ClickEvent) => void;
    onVisibleAreaChange?: (position: number, isVisible: boolean, currentRatio: number) => void;
}
