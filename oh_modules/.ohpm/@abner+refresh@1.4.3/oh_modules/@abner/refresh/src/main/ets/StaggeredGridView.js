if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshAttr } from './attribute/RefreshAttr';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshController } from './controller/RefreshController';
import { RefreshLayout } from './RefreshLayout';
import { WaterFlowView } from './WaterFlowView';
export class StaggeredGridView extends ViewPU {
    constructor(t28, u28, v28, w28 = -1, x28 = undefined, y28) {
        super(t28, v28, w28, y28);
        if (typeof x28 === "function") {
            this.paramsGenerator_ = x28;
        }
        this.controller = new RefreshController();
        this.dataController = new DataController();
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.itemHeaderLayout = undefined;
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this.__columnsTemplate = new SynchedPropertySimpleOneWayPU(u28.columnsTemplate, this, "columnsTemplate");
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.bgColor = Color.Transparent;
        this.sWidth = "100%";
        this.sHeight = undefined;
        this.__items = new SynchedPropertyObjectOneWayPU(u28.items, this, "items");
        this.scroller = new Scroller();
        this.__nestedScroll = new ObservedPropertyObjectPU({
            scrollForward: NestedScrollMode.SELF_FIRST,
            scrollBackward: NestedScrollMode.PARENT_FIRST
        }, this, "nestedScroll");
        this.isLazyData = true;
        this.lazyCachedCount = 1;
        this.onLazyDataSource = undefined;
        this.__lazyDataSource = new ObservedPropertyObjectPU(undefined, this, "lazyDataSource");
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(u28.enableScrollInteraction, this, "enableScrollInteraction");
        this.refreshHeaderAttribute = undefined;
        this.loadMoreFooterAttribute = undefined;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(u28.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(u28.enableLoadMore, this, "enableLoadMore");
        this.parentNestedScroll = {
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        };
        this.sMargin = undefined;
        this.sPadding = undefined;
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(u28.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(u28.showErrorLayout, this, "showErrorLayout");
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(u28.showLoadingLayout, this, "showLoadingLayout");
        this.onRefreshScroll = undefined;
        this.onRefreshScrollEdge = undefined;
        this.onRefreshScrollStart = undefined;
        this.onRefreshScrollStop = undefined;
        this.onRefreshScrollTouchEvent = undefined;
        this.onScrollIndex = undefined;
        this.onScroll = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.onScrollDirection = undefined;
        this.isParentControlInteraction = true;
        this.scrollSpringHeight = undefined;
        this.__refreshPosition = new ObservedPropertySimplePU(RefreshPositionEnum.TOP, this, "refreshPosition");
        this.__isRefreshSticky = new SynchedPropertySimpleOneWayPU(u28.isRefreshSticky, this, "isRefreshSticky");
        this.__refreshStickyPosition = new SynchedPropertySimpleOneWayPU(u28.refreshStickyPosition, this, "refreshStickyPosition");
        this.onHeadAreaChange = undefined;
        this.autoShowEmptyLayout = false;
        this.__isScrollSpring = new ObservedPropertySimplePU(true, this, "isScrollSpring");
        this.itemFooterLayout = undefined;
        this._privateRefreshAttr = new RefreshAttr();
        this.refreshAttribute = undefined;
        this.onContentScroller = undefined;
        this.parentEdgeEffect = EdgeEffect.Spring;
        this.prohibitRefresh = false;
        this.onWaterFlowVisibleAreaChange = undefined;
        this.onWaterFlowItemVisibleAreaChange = undefined;
        this.scrollBarState = BarState.Off;
        this.onScrollDistance = undefined;
        this.slideDisplayLoadData = false;
        this.isPullUpProhibitTouch = true;
        this.isPullDownProhibitTouch = true;
        this.__columnSize = new SynchedPropertySimpleOneWayPU(u28.columnSize, this, "columnSize");
        this.__isAdaptiveHeight = new SynchedPropertySimpleOneWayPU(u28.isAdaptiveHeight, this, "isAdaptiveHeight");
        this.setInitiallyProvidedValue(u28);
        this.declareWatch("items", this.changeStaggeredData);
        this.declareWatch("lazyDataSource", this.changeLazyData);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(s28) {
        if (s28.controller !== undefined) {
            this.controller = s28.controller;
        }
        if (s28.dataController !== undefined) {
            this.dataController = s28.dataController;
        }
        if (s28.itemLayout !== undefined) {
            this.itemLayout = s28.itemLayout;
        }
        if (s28.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = s28.headerRefreshLayout;
        }
        if (s28.footerLoadLayout !== undefined) {
            this.footerLoadLayout = s28.footerLoadLayout;
        }
        if (s28.itemHeaderLayout !== undefined) {
            this.itemHeaderLayout = s28.itemHeaderLayout;
        }
        if (s28.onRefresh !== undefined) {
            this.onRefresh = s28.onRefresh;
        }
        if (s28.onLoadMore !== undefined) {
            this.onLoadMore = s28.onLoadMore;
        }
        if (s28.columnsTemplate === undefined) {
            this.__columnsTemplate.set("1fr 1fr");
        }
        if (s28.columnsGap !== undefined) {
            this.columnsGap = s28.columnsGap;
        }
        if (s28.rowsGap !== undefined) {
            this.rowsGap = s28.rowsGap;
        }
        if (s28.bgColor !== undefined) {
            this.bgColor = s28.bgColor;
        }
        if (s28.sWidth !== undefined) {
            this.sWidth = s28.sWidth;
        }
        if (s28.sHeight !== undefined) {
            this.sHeight = s28.sHeight;
        }
        if (s28.items === undefined) {
            this.__items.set([]);
        }
        if (s28.scroller !== undefined) {
            this.scroller = s28.scroller;
        }
        if (s28.nestedScroll !== undefined) {
            this.nestedScroll = s28.nestedScroll;
        }
        if (s28.isLazyData !== undefined) {
            this.isLazyData = s28.isLazyData;
        }
        if (s28.lazyCachedCount !== undefined) {
            this.lazyCachedCount = s28.lazyCachedCount;
        }
        if (s28.onLazyDataSource !== undefined) {
            this.onLazyDataSource = s28.onLazyDataSource;
        }
        if (s28.lazyDataSource !== undefined) {
            this.lazyDataSource = s28.lazyDataSource;
        }
        if (s28.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (s28.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = s28.refreshHeaderAttribute;
        }
        if (s28.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = s28.loadMoreFooterAttribute;
        }
        if (s28.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (s28.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (s28.parentNestedScroll !== undefined) {
            this.parentNestedScroll = s28.parentNestedScroll;
        }
        if (s28.sMargin !== undefined) {
            this.sMargin = s28.sMargin;
        }
        if (s28.sPadding !== undefined) {
            this.sPadding = s28.sPadding;
        }
        if (s28.emptyLayout !== undefined) {
            this.emptyLayout = s28.emptyLayout;
        }
        if (s28.errorLayout !== undefined) {
            this.errorLayout = s28.errorLayout;
        }
        if (s28.loadingLayout !== undefined) {
            this.loadingLayout = s28.loadingLayout;
        }
        if (s28.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (s28.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (s28.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (s28.onRefreshScroll !== undefined) {
            this.onRefreshScroll = s28.onRefreshScroll;
        }
        if (s28.onRefreshScrollEdge !== undefined) {
            this.onRefreshScrollEdge = s28.onRefreshScrollEdge;
        }
        if (s28.onRefreshScrollStart !== undefined) {
            this.onRefreshScrollStart = s28.onRefreshScrollStart;
        }
        if (s28.onRefreshScrollStop !== undefined) {
            this.onRefreshScrollStop = s28.onRefreshScrollStop;
        }
        if (s28.onRefreshScrollTouchEvent !== undefined) {
            this.onRefreshScrollTouchEvent = s28.onRefreshScrollTouchEvent;
        }
        if (s28.onScrollIndex !== undefined) {
            this.onScrollIndex = s28.onScrollIndex;
        }
        if (s28.onScroll !== undefined) {
            this.onScroll = s28.onScroll;
        }
        if (s28.onScrollStart !== undefined) {
            this.onScrollStart = s28.onScrollStart;
        }
        if (s28.onScrollStop !== undefined) {
            this.onScrollStop = s28.onScrollStop;
        }
        if (s28.onScrollDirection !== undefined) {
            this.onScrollDirection = s28.onScrollDirection;
        }
        if (s28.isParentControlInteraction !== undefined) {
            this.isParentControlInteraction = s28.isParentControlInteraction;
        }
        if (s28.scrollSpringHeight !== undefined) {
            this.scrollSpringHeight = s28.scrollSpringHeight;
        }
        if (s28.refreshPosition !== undefined) {
            this.refreshPosition = s28.refreshPosition;
        }
        if (s28.isRefreshSticky === undefined) {
            this.__isRefreshSticky.set(false);
        }
        if (s28.refreshStickyPosition === undefined) {
            this.__refreshStickyPosition.set(undefined);
        }
        if (s28.onHeadAreaChange !== undefined) {
            this.onHeadAreaChange = s28.onHeadAreaChange;
        }
        if (s28.autoShowEmptyLayout !== undefined) {
            this.autoShowEmptyLayout = s28.autoShowEmptyLayout;
        }
        if (s28.isScrollSpring !== undefined) {
            this.isScrollSpring = s28.isScrollSpring;
        }
        if (s28.itemFooterLayout !== undefined) {
            this.itemFooterLayout = s28.itemFooterLayout;
        }
        if (s28._privateRefreshAttr !== undefined) {
            this._privateRefreshAttr = s28._privateRefreshAttr;
        }
        if (s28.refreshAttribute !== undefined) {
            this.refreshAttribute = s28.refreshAttribute;
        }
        if (s28.onContentScroller !== undefined) {
            this.onContentScroller = s28.onContentScroller;
        }
        if (s28.parentEdgeEffect !== undefined) {
            this.parentEdgeEffect = s28.parentEdgeEffect;
        }
        if (s28.prohibitRefresh !== undefined) {
            this.prohibitRefresh = s28.prohibitRefresh;
        }
        if (s28.onWaterFlowVisibleAreaChange !== undefined) {
            this.onWaterFlowVisibleAreaChange = s28.onWaterFlowVisibleAreaChange;
        }
        if (s28.onWaterFlowItemVisibleAreaChange !== undefined) {
            this.onWaterFlowItemVisibleAreaChange = s28.onWaterFlowItemVisibleAreaChange;
        }
        if (s28.scrollBarState !== undefined) {
            this.scrollBarState = s28.scrollBarState;
        }
        if (s28.onScrollDistance !== undefined) {
            this.onScrollDistance = s28.onScrollDistance;
        }
        if (s28.slideDisplayLoadData !== undefined) {
            this.slideDisplayLoadData = s28.slideDisplayLoadData;
        }
        if (s28.isPullUpProhibitTouch !== undefined) {
            this.isPullUpProhibitTouch = s28.isPullUpProhibitTouch;
        }
        if (s28.isPullDownProhibitTouch !== undefined) {
            this.isPullDownProhibitTouch = s28.isPullDownProhibitTouch;
        }
        if (s28.columnSize === undefined) {
            this.__columnSize.set(0);
        }
        if (s28.isAdaptiveHeight === undefined) {
            this.__isAdaptiveHeight.set(false);
        }
    }
    updateStateVars(r28) {
        this.__columnsTemplate.reset(r28.columnsTemplate);
        this.__items.reset(r28.items);
        this.__enableScrollInteraction.reset(r28.enableScrollInteraction);
        this.__enableRefresh.reset(r28.enableRefresh);
        this.__enableLoadMore.reset(r28.enableLoadMore);
        this.__showEmptyLayout.reset(r28.showEmptyLayout);
        this.__showErrorLayout.reset(r28.showErrorLayout);
        this.__showLoadingLayout.reset(r28.showLoadingLayout);
        this.__isRefreshSticky.reset(r28.isRefreshSticky);
        this.__refreshStickyPosition.reset(r28.refreshStickyPosition);
        this.__columnSize.reset(r28.columnSize);
        this.__isAdaptiveHeight.reset(r28.isAdaptiveHeight);
    }
    purgeVariableDependenciesOnElmtId(q28) {
        this.__columnsTemplate.purgeDependencyOnElmtId(q28);
        this.__items.purgeDependencyOnElmtId(q28);
        this.__nestedScroll.purgeDependencyOnElmtId(q28);
        this.__lazyDataSource.purgeDependencyOnElmtId(q28);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(q28);
        this.__enableRefresh.purgeDependencyOnElmtId(q28);
        this.__enableLoadMore.purgeDependencyOnElmtId(q28);
        this.__showEmptyLayout.purgeDependencyOnElmtId(q28);
        this.__showErrorLayout.purgeDependencyOnElmtId(q28);
        this.__showLoadingLayout.purgeDependencyOnElmtId(q28);
        this.__refreshPosition.purgeDependencyOnElmtId(q28);
        this.__isRefreshSticky.purgeDependencyOnElmtId(q28);
        this.__refreshStickyPosition.purgeDependencyOnElmtId(q28);
        this.__isScrollSpring.purgeDependencyOnElmtId(q28);
        this.__columnSize.purgeDependencyOnElmtId(q28);
        this.__isAdaptiveHeight.purgeDependencyOnElmtId(q28);
    }
    aboutToBeDeleted() {
        this.__columnsTemplate.aboutToBeDeleted();
        this.__items.aboutToBeDeleted();
        this.__nestedScroll.aboutToBeDeleted();
        this.__lazyDataSource.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        this.__isRefreshSticky.aboutToBeDeleted();
        this.__refreshStickyPosition.aboutToBeDeleted();
        this.__isScrollSpring.aboutToBeDeleted();
        this.__columnSize.aboutToBeDeleted();
        this.__isAdaptiveHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get columnsTemplate() {
        return this.__columnsTemplate.get();
    }
    set columnsTemplate(p28) {
        this.__columnsTemplate.set(p28);
    }
    get items() {
        return this.__items.get();
    }
    set items(o28) {
        this.__items.set(o28);
    }
    get nestedScroll() {
        return this.__nestedScroll.get();
    }
    set nestedScroll(n28) {
        this.__nestedScroll.set(n28);
    }
    get lazyDataSource() {
        return this.__lazyDataSource.get();
    }
    set lazyDataSource(m28) {
        this.__lazyDataSource.set(m28);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(l28) {
        this.__enableScrollInteraction.set(l28);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(k28) {
        this.__enableRefresh.set(k28);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(j28) {
        this.__enableLoadMore.set(j28);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(i28) {
        this.__showEmptyLayout.set(i28);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(h28) {
        this.__showErrorLayout.set(h28);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(g28) {
        this.__showLoadingLayout.set(g28);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(f28) {
        this.__refreshPosition.set(f28);
    }
    get isRefreshSticky() {
        return this.__isRefreshSticky.get();
    }
    set isRefreshSticky(e28) {
        this.__isRefreshSticky.set(e28);
    }
    get refreshStickyPosition() {
        return this.__refreshStickyPosition.get();
    }
    set refreshStickyPosition(d28) {
        this.__refreshStickyPosition.set(d28);
    }
    get isScrollSpring() {
        return this.__isScrollSpring.get();
    }
    set isScrollSpring(c28) {
        this.__isScrollSpring.set(c28);
    }
    get columnSize() {
        return this.__columnSize.get();
    }
    set columnSize(b28) {
        this.__columnSize.set(b28);
    }
    get isAdaptiveHeight() {
        return this.__isAdaptiveHeight.get();
    }
    set isAdaptiveHeight(a28) {
        this.__isAdaptiveHeight.set(a28);
    }
    changeStaggeredData() {
        if (this.autoShowEmptyLayout && this.items != undefined) {
            this.showEmptyLayout = this.items.length == 0;
        }
    }
    aboutToAppear() {
        if (this.refreshAttribute != null) {
            this.refreshAttribute(this._privateRefreshAttr);
        }
    }
    changeLazyData() {
        if (this.lazyDataSource != undefined && this.autoShowEmptyLayout) {
            this.showEmptyLayout = this.lazyDataSource.totalCount() == 0;
        }
    }
    itemWaterFlowLayout(o27, p27 = null) {
        {
            this.observeComponentCreation2((q27, r27) => {
                if (r27) {
                    let s27 = new WaterFlowView(this, {
                        columnsTemplate: o27.columnsTemplate,
                        columnsGap: o27.columnsGap,
                        columnSize: o27.columnSize,
                        rowsGap: o27.rowsGap,
                        bgColor: o27.bgColor,
                        sWidth: o27.sWidth,
                        sHeight: o27.sHeight,
                        nestedScroll: o27.nestedScroll,
                        sMargin: o27.sMargin,
                        sPadding: o27.sPadding,
                        enableScrollInteraction: o27.enableScrollInteraction,
                        items: o27.items,
                        isRefresh: true,
                        dataController: this.dataController,
                        itemView: (y27, z27) => this.itemLayout(y27, z27),
                        onRefreshPosition: (x27) => {
                            o27.refreshPosition = x27;
                        },
                        scroller: o27.scroller,
                        isLazyData: o27.isLazyData,
                        lazyCachedCount: o27.lazyCachedCount,
                        onLazyDataSource: o27.onLazyDataSource,
                        lazyDataSource: o27.lazyDataSource,
                        onScrollIndex: o27.onScrollIndex,
                        onScroll: o27.onScroll,
                        onScrollStart: o27.onScrollStart,
                        onScrollStop: o27.onScrollStop,
                        isRefreshSticky: o27.isRefreshSticky,
                        onWaterFlowVisibleAreaChange: this.onWaterFlowVisibleAreaChange,
                        onWaterFlowItemVisibleAreaChange: this.onWaterFlowItemVisibleAreaChange
                    }, undefined, q27, () => { }, { page: "refresh/src/main/ets/StaggeredGridView.ets", line: 130, col: 5 });
                    ViewPU.create(s27);
                    let t27 = () => {
                        return {
                            columnsTemplate: o27.columnsTemplate,
                            columnsGap: o27.columnsGap,
                            columnSize: o27.columnSize,
                            rowsGap: o27.rowsGap,
                            bgColor: o27.bgColor,
                            sWidth: o27.sWidth,
                            sHeight: o27.sHeight,
                            nestedScroll: o27.nestedScroll,
                            sMargin: o27.sMargin,
                            sPadding: o27.sPadding,
                            enableScrollInteraction: o27.enableScrollInteraction,
                            items: o27.items,
                            isRefresh: true,
                            dataController: this.dataController,
                            itemView: (v27, w27) => this.itemLayout(v27, w27),
                            onRefreshPosition: (u27) => {
                                o27.refreshPosition = u27;
                            },
                            scroller: o27.scroller,
                            isLazyData: o27.isLazyData,
                            lazyCachedCount: o27.lazyCachedCount,
                            onLazyDataSource: o27.onLazyDataSource,
                            lazyDataSource: o27.lazyDataSource,
                            onScrollIndex: o27.onScrollIndex,
                            onScroll: o27.onScroll,
                            onScrollStart: o27.onScrollStart,
                            onScrollStop: o27.onScrollStop,
                            isRefreshSticky: o27.isRefreshSticky,
                            onWaterFlowVisibleAreaChange: this.onWaterFlowVisibleAreaChange,
                            onWaterFlowItemVisibleAreaChange: this.onWaterFlowItemVisibleAreaChange
                        };
                    };
                    s27.paramsGenerator_ = t27;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(q27, {
                        columnsTemplate: o27.columnsTemplate,
                        columnSize: o27.columnSize,
                        nestedScroll: o27.nestedScroll,
                        enableScrollInteraction: o27.enableScrollInteraction,
                        items: o27.items,
                        isRefreshSticky: o27.isRefreshSticky
                    });
                }
            }, { name: "WaterFlowView" });
        }
    }
    itemRefreshLayout(m27, n27 = null) {
        m27.itemWaterFlowLayout.bind(this)(m27);
    }
    initialRender() {
        this.observeComponentCreation2((e27, f27) => {
            If.create();
            if (this.prohibitRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemRefreshLayout.bind(this)(this);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((g27, h27) => {
                            if (h27) {
                                let i27 = new RefreshLayout(this, {
                                    controller: this.controller,
                                    onRefresh: this.onRefresh,
                                    onLoadMore: this.onLoadMore,
                                    itemLayout: () => {
                                        this.itemRefreshLayout(this);
                                    },
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    parentEdgeEffect: this.parentEdgeEffect,
                                    headerRefreshLayout: this.headerRefreshLayout,
                                    footerLoadLayout: this.footerLoadLayout,
                                    itemHeaderLayout: this.itemHeaderLayout,
                                    refreshHeaderAttribute: this.refreshHeaderAttribute,
                                    loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
                                    parentNestedScroll: this.parentNestedScroll,
                                    emptyLayout: this.emptyLayout,
                                    errorLayout: this.errorLayout,
                                    loadingLayout: this.loadingLayout,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    onScroll: this.onRefreshScroll,
                                    onScrollEdge: this.onRefreshScrollEdge,
                                    onScrollStart: this.onRefreshScrollStart,
                                    onScrollStop: this.onRefreshScrollStop,
                                    onScrollTouchEvent: this.onRefreshScrollTouchEvent,
                                    scrollSpringHeight: this.scrollSpringHeight,
                                    refreshPosition: this.refreshPosition,
                                    onStickyNestedScroll: (l27) => {
                                        this.nestedScroll = l27;
                                    },
                                    childScroller: this.scroller,
                                    isRefreshSticky: this.isRefreshSticky,
                                    refreshStickyPosition: this.refreshStickyPosition,
                                    useMarkStickyPosition: this.refreshStickyPosition,
                                    onHeadAreaChange: this.onHeadAreaChange,
                                    isScrollSpring: this.isScrollSpring,
                                    itemFooterLayout: this.itemFooterLayout,
                                    onContentScroll: this._privateRefreshAttr.onContentScroll,
                                    onContentDidScroll: this._privateRefreshAttr.onContentDidScroll,
                                    onContentWillScroll: this._privateRefreshAttr.onContentWillScroll,
                                    onContentScrollEdge: this._privateRefreshAttr.onContentScrollEdge,
                                    onContentScrollStart: this._privateRefreshAttr.onContentScrollStart,
                                    onContentScrollTouchEvent: this._privateRefreshAttr.onContentScrollTouchEvent,
                                    onContentScrollStop: this._privateRefreshAttr.onContentScrollStop,
                                    onContentReachStart: this._privateRefreshAttr.onContentReachStart,
                                    onContentReachEnd: this._privateRefreshAttr.onContentReachEnd,
                                    onContentScroller: this.onContentScroller,
                                    scrollBarState: this.scrollBarState,
                                    onScrollDistance: this.onScrollDistance,
                                    onScrollDirection: this.onScrollDirection,
                                    slideDisplayLoadData: this.slideDisplayLoadData,
                                    isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                    isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                    isChildViewHeightUndefined: this.sHeight == undefined
                                }, undefined, g27, () => { }, { page: "refresh/src/main/ets/StaggeredGridView.ets", line: 174, col: 7 });
                                ViewPU.create(i27);
                                let j27 = () => {
                                    return {
                                        controller: this.controller,
                                        onRefresh: this.onRefresh,
                                        onLoadMore: this.onLoadMore,
                                        itemLayout: () => {
                                            this.itemRefreshLayout(this);
                                        },
                                        isAdaptiveHeight: this.isAdaptiveHeight,
                                        parentEdgeEffect: this.parentEdgeEffect,
                                        headerRefreshLayout: this.headerRefreshLayout,
                                        footerLoadLayout: this.footerLoadLayout,
                                        itemHeaderLayout: this.itemHeaderLayout,
                                        refreshHeaderAttribute: this.refreshHeaderAttribute,
                                        loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                        enableRefresh: this.enableRefresh,
                                        enableLoadMore: this.enableLoadMore,
                                        parentNestedScroll: this.parentNestedScroll,
                                        emptyLayout: this.emptyLayout,
                                        errorLayout: this.errorLayout,
                                        loadingLayout: this.loadingLayout,
                                        showEmptyLayout: this.showEmptyLayout,
                                        showErrorLayout: this.showErrorLayout,
                                        showLoadingLayout: this.showLoadingLayout,
                                        onScroll: this.onRefreshScroll,
                                        onScrollEdge: this.onRefreshScrollEdge,
                                        onScrollStart: this.onRefreshScrollStart,
                                        onScrollStop: this.onRefreshScrollStop,
                                        onScrollTouchEvent: this.onRefreshScrollTouchEvent,
                                        scrollSpringHeight: this.scrollSpringHeight,
                                        refreshPosition: this.refreshPosition,
                                        onStickyNestedScroll: (k27) => {
                                            this.nestedScroll = k27;
                                        },
                                        childScroller: this.scroller,
                                        isRefreshSticky: this.isRefreshSticky,
                                        refreshStickyPosition: this.refreshStickyPosition,
                                        useMarkStickyPosition: this.refreshStickyPosition,
                                        onHeadAreaChange: this.onHeadAreaChange,
                                        isScrollSpring: this.isScrollSpring,
                                        itemFooterLayout: this.itemFooterLayout,
                                        onContentScroll: this._privateRefreshAttr.onContentScroll,
                                        onContentDidScroll: this._privateRefreshAttr.onContentDidScroll,
                                        onContentWillScroll: this._privateRefreshAttr.onContentWillScroll,
                                        onContentScrollEdge: this._privateRefreshAttr.onContentScrollEdge,
                                        onContentScrollStart: this._privateRefreshAttr.onContentScrollStart,
                                        onContentScrollTouchEvent: this._privateRefreshAttr.onContentScrollTouchEvent,
                                        onContentScrollStop: this._privateRefreshAttr.onContentScrollStop,
                                        onContentReachStart: this._privateRefreshAttr.onContentReachStart,
                                        onContentReachEnd: this._privateRefreshAttr.onContentReachEnd,
                                        onContentScroller: this.onContentScroller,
                                        scrollBarState: this.scrollBarState,
                                        onScrollDistance: this.onScrollDistance,
                                        onScrollDirection: this.onScrollDirection,
                                        slideDisplayLoadData: this.slideDisplayLoadData,
                                        isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                        isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                        isChildViewHeightUndefined: this.sHeight == undefined
                                    };
                                };
                                i27.paramsGenerator_ = j27;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(g27, {
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    refreshPosition: this.refreshPosition,
                                    isRefreshSticky: this.isRefreshSticky,
                                    refreshStickyPosition: this.refreshStickyPosition,
                                    useMarkStickyPosition: this.refreshStickyPosition,
                                    isScrollSpring: this.isScrollSpring
                                });
                            }
                        }, { name: "RefreshLayout" });
                    }
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
