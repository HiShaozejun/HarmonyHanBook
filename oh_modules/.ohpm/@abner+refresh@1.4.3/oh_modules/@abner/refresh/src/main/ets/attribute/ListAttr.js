export class ListAttr {
    constructor() {
        this.width = "100%";
        this.height = undefined;
        this.backgroundColor = Color.Transparent;
        this.listDirection = Axis.Vertical;
        this.divider = new ListAttrDivider();
        this.scrollBar = BarState.Off;
        this.contentEndOffset = 0;
        this.edgeEffect = EdgeEffect.None;
        this.nestedScroll = {
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.PARENT_FIRST
        };
        this.parentNestedScroll = {
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        };
    }
}
class ListAttrDivider {
}
