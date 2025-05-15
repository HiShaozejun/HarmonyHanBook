/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/14
 * INTRODUCE:ListView的子条目相关属性
 * */
export declare class ListItemAttr {
    width?: Length;
    height?: Length;
    backgroundColor?: ResourceColor;
    onClick?: (event?: ClickEvent) => void;
    onVisibleAreaChange?: (position: number, isVisible: boolean, currentRatio: number) => void;
}
