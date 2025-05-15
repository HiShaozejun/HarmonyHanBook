export class GridAttr {
    constructor() {
        this.width = "100%";
        this.height = undefined;
        this.backgroundColor = Color.Transparent;
        this.columnsTemplate = "1fr 1fr";
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.scrollBar = BarState.Off;
        this.parentNestedScroll = {
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        };
        this.edgeEffect = EdgeEffect.None;
    }
}
