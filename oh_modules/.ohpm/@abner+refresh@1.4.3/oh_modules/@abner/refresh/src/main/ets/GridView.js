if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { GridAttr } from './attribute/GridAttr';
import { GridItemAttr } from './attribute/GridItemAttr';
import { RefreshAttr } from './attribute/RefreshAttr';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshController } from './controller/RefreshController';
import { RefreshDataSource } from './model/RefreshDataSource';
import { RefreshLayout } from './RefreshLayout';
export class GridView extends ViewPU {
    constructor(g14, h14, i14, j14 = -1, k14 = undefined, l14) {
        super(g14, i14, j14, l14);
        if (typeof k14 === "function") {
            this.paramsGenerator_ = k14;
        }
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.itemHeaderLayout = undefined;
        this.__items = new SynchedPropertyObjectOneWayPU(h14.items, this, "items");
        this.controller = new RefreshController();
        this.dataController = new DataController();
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this._privateRefreshAttr = new RefreshAttr();
        this.refreshAttribute = undefined;
        this.___privateGridAttr = new SynchedPropertyObjectOneWayPU(h14._privateGridAttr, this, "_privateGridAttr");
        this.gridAttribute = undefined;
        this._privateGridItemAttr = new GridItemAttr();
        this.gridItemAttribute = undefined;
        this.isLazyData = false;
        this.lazyCachedCount = 1;
        this.onLazyDataSource = undefined;
        this.__lazyDataSource = new ObservedPropertyObjectPU(undefined, this, "lazyDataSource");
        this.refreshHeaderAttribute = undefined;
        this.loadMoreFooterAttribute = undefined;
        this.isKeyGeneratorIndex = false;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(h14.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(h14.enableLoadMore, this, "enableLoadMore");
        this.scroller = new Scroller();
        this.__columnSize = new SynchedPropertySimpleOneWayPU(h14.columnSize, this, "columnSize");
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(h14.showLoadingLayout, this, "showLoadingLayout");
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(h14.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(h14.showErrorLayout, this, "showErrorLayout");
        this.__refreshPosition = new ObservedPropertySimplePU(RefreshPositionEnum.TOP, this, "refreshPosition");
        this.__isRefreshSticky = new SynchedPropertySimpleOneWayPU(h14.isRefreshSticky, this, "isRefreshSticky");
        this.__refreshStickyPosition = new SynchedPropertySimpleOneWayPU(h14.refreshStickyPosition, this, "refreshStickyPosition");
        this.onRefreshScroll = undefined;
        this.onScrollTouch = undefined;
        this.onRefreshScrollStart = undefined;
        this.onRefreshScrollStop = undefined;
        this.onScrollTouchEvent = undefined;
        this.refreshOnReachStart = undefined;
        this.refreshOnReachEnd = undefined;
        this.onScrollEdge = undefined;
        this.onRefreshScrollToIndex = undefined;
        this.onScrollDirection = undefined;
        this.onRefreshAreaChange = undefined;
        this.onHeadAreaChange = undefined;
        this.autoShowEmptyLayout = false;
        this.__isScrollSpring = new ObservedPropertySimplePU(true, this, "isScrollSpring");
        this.itemFooterLayout = undefined;
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(h14.enableScrollInteraction, this, "enableScrollInteraction");
        this.__gridNestedScroll = new SynchedPropertyObjectOneWayPU(h14.gridNestedScroll, this, "gridNestedScroll");
        this.onGridRefreshPosition = undefined;
        this.onContentScroller = undefined;
        this.___privateItemHeight = new ObservedPropertySimplePU(0, this, "_privateItemHeight");
        this._privateContentScroller = new Scroller();
        this.prohibitRefresh = false;
        this.onScrollDistance = undefined;
        this.slideDisplayLoadData = false;
        this.layoutOptions = undefined;
        this.isPullUpProhibitTouch = true;
        this.isPullDownProhibitTouch = true;
        this.__isAdaptiveHeight = new SynchedPropertySimpleOneWayPU(h14.isAdaptiveHeight, this, "isAdaptiveHeight");
        this.setInitiallyProvidedValue(h14);
        this.declareWatch("items", this.changeData);
        this.declareWatch("lazyDataSource", this.changeLazyData);
        this.declareWatch("columnSize", this.changeColumnSize);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(f14) {
        if (f14.itemLayout !== undefined) {
            this.itemLayout = f14.itemLayout;
        }
        if (f14.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = f14.headerRefreshLayout;
        }
        if (f14.footerLoadLayout !== undefined) {
            this.footerLoadLayout = f14.footerLoadLayout;
        }
        if (f14.itemHeaderLayout !== undefined) {
            this.itemHeaderLayout = f14.itemHeaderLayout;
        }
        if (f14.items === undefined) {
            this.__items.set([]);
        }
        if (f14.controller !== undefined) {
            this.controller = f14.controller;
        }
        if (f14.dataController !== undefined) {
            this.dataController = f14.dataController;
        }
        if (f14.onRefresh !== undefined) {
            this.onRefresh = f14.onRefresh;
        }
        if (f14.onLoadMore !== undefined) {
            this.onLoadMore = f14.onLoadMore;
        }
        if (f14._privateRefreshAttr !== undefined) {
            this._privateRefreshAttr = f14._privateRefreshAttr;
        }
        if (f14.refreshAttribute !== undefined) {
            this.refreshAttribute = f14.refreshAttribute;
        }
        if (f14._privateGridAttr === undefined) {
            this.___privateGridAttr.set(new GridAttr());
        }
        if (f14.gridAttribute !== undefined) {
            this.gridAttribute = f14.gridAttribute;
        }
        if (f14._privateGridItemAttr !== undefined) {
            this._privateGridItemAttr = f14._privateGridItemAttr;
        }
        if (f14.gridItemAttribute !== undefined) {
            this.gridItemAttribute = f14.gridItemAttribute;
        }
        if (f14.isLazyData !== undefined) {
            this.isLazyData = f14.isLazyData;
        }
        if (f14.lazyCachedCount !== undefined) {
            this.lazyCachedCount = f14.lazyCachedCount;
        }
        if (f14.onLazyDataSource !== undefined) {
            this.onLazyDataSource = f14.onLazyDataSource;
        }
        if (f14.lazyDataSource !== undefined) {
            this.lazyDataSource = f14.lazyDataSource;
        }
        if (f14.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = f14.refreshHeaderAttribute;
        }
        if (f14.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = f14.loadMoreFooterAttribute;
        }
        if (f14.isKeyGeneratorIndex !== undefined) {
            this.isKeyGeneratorIndex = f14.isKeyGeneratorIndex;
        }
        if (f14.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (f14.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (f14.scroller !== undefined) {
            this.scroller = f14.scroller;
        }
        if (f14.columnSize === undefined) {
            this.__columnSize.set(0);
        }
        if (f14.emptyLayout !== undefined) {
            this.emptyLayout = f14.emptyLayout;
        }
        if (f14.errorLayout !== undefined) {
            this.errorLayout = f14.errorLayout;
        }
        if (f14.loadingLayout !== undefined) {
            this.loadingLayout = f14.loadingLayout;
        }
        if (f14.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (f14.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (f14.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (f14.refreshPosition !== undefined) {
            this.refreshPosition = f14.refreshPosition;
        }
        if (f14.isRefreshSticky === undefined) {
            this.__isRefreshSticky.set(false);
        }
        if (f14.refreshStickyPosition === undefined) {
            this.__refreshStickyPosition.set(undefined);
        }
        if (f14.onRefreshScroll !== undefined) {
            this.onRefreshScroll = f14.onRefreshScroll;
        }
        if (f14.onScrollTouch !== undefined) {
            this.onScrollTouch = f14.onScrollTouch;
        }
        if (f14.onRefreshScrollStart !== undefined) {
            this.onRefreshScrollStart = f14.onRefreshScrollStart;
        }
        if (f14.onRefreshScrollStop !== undefined) {
            this.onRefreshScrollStop = f14.onRefreshScrollStop;
        }
        if (f14.onScrollTouchEvent !== undefined) {
            this.onScrollTouchEvent = f14.onScrollTouchEvent;
        }
        if (f14.refreshOnReachStart !== undefined) {
            this.refreshOnReachStart = f14.refreshOnReachStart;
        }
        if (f14.refreshOnReachEnd !== undefined) {
            this.refreshOnReachEnd = f14.refreshOnReachEnd;
        }
        if (f14.onScrollEdge !== undefined) {
            this.onScrollEdge = f14.onScrollEdge;
        }
        if (f14.onRefreshScrollToIndex !== undefined) {
            this.onRefreshScrollToIndex = f14.onRefreshScrollToIndex;
        }
        if (f14.onScrollDirection !== undefined) {
            this.onScrollDirection = f14.onScrollDirection;
        }
        if (f14.onRefreshAreaChange !== undefined) {
            this.onRefreshAreaChange = f14.onRefreshAreaChange;
        }
        if (f14.onHeadAreaChange !== undefined) {
            this.onHeadAreaChange = f14.onHeadAreaChange;
        }
        if (f14.autoShowEmptyLayout !== undefined) {
            this.autoShowEmptyLayout = f14.autoShowEmptyLayout;
        }
        if (f14.isScrollSpring !== undefined) {
            this.isScrollSpring = f14.isScrollSpring;
        }
        if (f14.itemFooterLayout !== undefined) {
            this.itemFooterLayout = f14.itemFooterLayout;
        }
        if (f14.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (f14.gridNestedScroll === undefined) {
            this.__gridNestedScroll.set({
                scrollForward: NestedScrollMode.SELF_FIRST,
                scrollBackward: NestedScrollMode.PARENT_FIRST
            });
        }
        if (f14.onGridRefreshPosition !== undefined) {
            this.onGridRefreshPosition = f14.onGridRefreshPosition;
        }
        if (f14.onContentScroller !== undefined) {
            this.onContentScroller = f14.onContentScroller;
        }
        if (f14._privateItemHeight !== undefined) {
            this._privateItemHeight = f14._privateItemHeight;
        }
        if (f14._privateContentScroller !== undefined) {
            this._privateContentScroller = f14._privateContentScroller;
        }
        if (f14.prohibitRefresh !== undefined) {
            this.prohibitRefresh = f14.prohibitRefresh;
        }
        if (f14.onScrollDistance !== undefined) {
            this.onScrollDistance = f14.onScrollDistance;
        }
        if (f14.slideDisplayLoadData !== undefined) {
            this.slideDisplayLoadData = f14.slideDisplayLoadData;
        }
        if (f14.layoutOptions !== undefined) {
            this.layoutOptions = f14.layoutOptions;
        }
        if (f14.isPullUpProhibitTouch !== undefined) {
            this.isPullUpProhibitTouch = f14.isPullUpProhibitTouch;
        }
        if (f14.isPullDownProhibitTouch !== undefined) {
            this.isPullDownProhibitTouch = f14.isPullDownProhibitTouch;
        }
        if (f14.isAdaptiveHeight === undefined) {
            this.__isAdaptiveHeight.set(false);
        }
    }
    updateStateVars(e14) {
        this.__items.reset(e14.items);
        this.___privateGridAttr.reset(e14._privateGridAttr);
        this.__enableRefresh.reset(e14.enableRefresh);
        this.__enableLoadMore.reset(e14.enableLoadMore);
        this.__columnSize.reset(e14.columnSize);
        this.__showLoadingLayout.reset(e14.showLoadingLayout);
        this.__showEmptyLayout.reset(e14.showEmptyLayout);
        this.__showErrorLayout.reset(e14.showErrorLayout);
        this.__isRefreshSticky.reset(e14.isRefreshSticky);
        this.__refreshStickyPosition.reset(e14.refreshStickyPosition);
        this.__enableScrollInteraction.reset(e14.enableScrollInteraction);
        this.__gridNestedScroll.reset(e14.gridNestedScroll);
        this.__isAdaptiveHeight.reset(e14.isAdaptiveHeight);
    }
    purgeVariableDependenciesOnElmtId(d14) {
        this.__items.purgeDependencyOnElmtId(d14);
        this.___privateGridAttr.purgeDependencyOnElmtId(d14);
        this.__lazyDataSource.purgeDependencyOnElmtId(d14);
        this.__enableRefresh.purgeDependencyOnElmtId(d14);
        this.__enableLoadMore.purgeDependencyOnElmtId(d14);
        this.__columnSize.purgeDependencyOnElmtId(d14);
        this.__showLoadingLayout.purgeDependencyOnElmtId(d14);
        this.__showEmptyLayout.purgeDependencyOnElmtId(d14);
        this.__showErrorLayout.purgeDependencyOnElmtId(d14);
        this.__refreshPosition.purgeDependencyOnElmtId(d14);
        this.__isRefreshSticky.purgeDependencyOnElmtId(d14);
        this.__refreshStickyPosition.purgeDependencyOnElmtId(d14);
        this.__isScrollSpring.purgeDependencyOnElmtId(d14);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(d14);
        this.__gridNestedScroll.purgeDependencyOnElmtId(d14);
        this.___privateItemHeight.purgeDependencyOnElmtId(d14);
        this.__isAdaptiveHeight.purgeDependencyOnElmtId(d14);
    }
    aboutToBeDeleted() {
        this.__items.aboutToBeDeleted();
        this.___privateGridAttr.aboutToBeDeleted();
        this.__lazyDataSource.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__columnSize.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        this.__isRefreshSticky.aboutToBeDeleted();
        this.__refreshStickyPosition.aboutToBeDeleted();
        this.__isScrollSpring.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.__gridNestedScroll.aboutToBeDeleted();
        this.___privateItemHeight.aboutToBeDeleted();
        this.__isAdaptiveHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get items() {
        return this.__items.get();
    }
    set items(c14) {
        this.__items.set(c14);
    }
    get _privateGridAttr() {
        return this.___privateGridAttr.get();
    }
    set _privateGridAttr(b14) {
        this.___privateGridAttr.set(b14);
    }
    get lazyDataSource() {
        return this.__lazyDataSource.get();
    }
    set lazyDataSource(a14) {
        this.__lazyDataSource.set(a14);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(z13) {
        this.__enableRefresh.set(z13);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(y13) {
        this.__enableLoadMore.set(y13);
    }
    get columnSize() {
        return this.__columnSize.get();
    }
    set columnSize(x13) {
        this.__columnSize.set(x13);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(w13) {
        this.__showLoadingLayout.set(w13);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(v13) {
        this.__showEmptyLayout.set(v13);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(u13) {
        this.__showErrorLayout.set(u13);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(t13) {
        this.__refreshPosition.set(t13);
    }
    get isRefreshSticky() {
        return this.__isRefreshSticky.get();
    }
    set isRefreshSticky(s13) {
        this.__isRefreshSticky.set(s13);
    }
    get refreshStickyPosition() {
        return this.__refreshStickyPosition.get();
    }
    set refreshStickyPosition(r13) {
        this.__refreshStickyPosition.set(r13);
    }
    get isScrollSpring() {
        return this.__isScrollSpring.get();
    }
    set isScrollSpring(q13) {
        this.__isScrollSpring.set(q13);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(p13) {
        this.__enableScrollInteraction.set(p13);
    }
    get gridNestedScroll() {
        return this.__gridNestedScroll.get();
    }
    set gridNestedScroll(o13) {
        this.__gridNestedScroll.set(o13);
    }
    get _privateItemHeight() {
        return this.___privateItemHeight.get();
    }
    set _privateItemHeight(n13) {
        this.___privateItemHeight.set(n13);
    }
    get isAdaptiveHeight() {
        return this.__isAdaptiveHeight.get();
    }
    set isAdaptiveHeight(m13) {
        this.__isAdaptiveHeight.set(m13);
    }
    changeColumnSize() {
        if (this.columnSize != undefined && this.columnSize != 0) {
            this._privateGridAttr.columnsTemplate = "1fr ".repeat(this.columnSize);
        }
    }
    aboutToAppear() {
        this.changeColumnSize();
        if (this.refreshAttribute != null) {
            this.refreshAttribute(this._privateRefreshAttr);
        }
        if (this.gridAttribute != null) {
            this.gridAttribute(this._privateGridAttr);
        }
        if (this.gridItemAttribute != null) {
            this.gridItemAttribute(this._privateGridItemAttr);
        }
        if (this.onLazyDataSource != undefined) {
            this.isLazyData = true;
            this.lazyDataSource = new RefreshDataSource();
            this.lazyDataSource.initData(this.items);
            this.lazyDataSource.refreshArrayCallback((l13) => {
                this.items = l13;
            });
            this.onLazyDataSource(this.lazyDataSource);
        }
        else {
            this.isLazyData = this.lazyDataSource != undefined;
        }
        if (!this.isLazyData && this.dataController != null) {
            this.dataController.init(this.items);
            this.dataController.refreshArrayCallback((k13) => {
                this.items = k13;
            });
        }
    }
    changeData() {
        this.dataController.refreshArray(this.items);
        if (this.autoShowEmptyLayout && this.items != undefined) {
            this.showEmptyLayout = this.items.length == 0;
        }
    }
    changeLazyData() {
        if (this.lazyDataSource != undefined && this.autoShowEmptyLayout) {
            this.showEmptyLayout = this.lazyDataSource.totalCount() == 0;
        }
    }
    gridItem(y12, z12, a13, b13 = null) {
        {
            const c13 = (e13, f13) => {
                GridItem.create(() => { }, false);
                __GridItem__gridItemStyle(y12._privateGridItemAttr);
                GridItem.onVisibleAreaChange([0.0, 1.0], (i13, j13) => {
                    if (this._privateGridItemAttr.onVisibleAreaChange != undefined) {
                        this._privateGridItemAttr.onVisibleAreaChange(a13, i13, j13);
                    }
                });
                GridItem.onAreaChange((g13, h13) => {
                    if (a13 == 0) {
                        this._privateItemHeight = Number(h13.height);
                    }
                });
            };
            const d13 = () => {
                this.observeComponentCreation2(c13, GridItem);
                this.itemLayout.bind(this)(z12, a13);
                GridItem.pop();
            };
            d13();
        }
    }
    gridLayout(b12, c12 = null) {
        this.observeComponentCreation2((d12, e12) => {
            If.create();
            if (b12.isLazyData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((w12, x12) => {
                        Grid.create(b12.scroller, this.layoutOptions);
                        __Grid__gridViewStyle(b12);
                    }, Grid);
                    {
                        const p12 = (t12, u12) => {
                            const v12 = t12;
                            b12.gridItem.bind(this)(b12, v12, u12);
                        };
                        const q12 = (r12, s12) => b12.isKeyGeneratorIndex ? s12.toString() :
                            JSON.stringify(r12) + "_" + s12;
                        LazyForEach.create("1", this, b12.lazyDataSource, p12, q12);
                        LazyForEach.pop();
                    }
                    Grid.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((n12, o12) => {
                        Grid.create(b12.scroller, this.layoutOptions);
                        __Grid__gridViewStyle(b12);
                    }, Grid);
                    this.observeComponentCreation2((f12, g12) => {
                        ForEach.create();
                        const h12 = (k12, l12) => {
                            const m12 = k12;
                            b12.gridItem.bind(this)(b12, m12, l12);
                        };
                        this.forEachUpdateFunction(f12, b12.items, h12, (i12, j12) => this.isKeyGeneratorIndex ? j12.toString() :
                            JSON.stringify(i12) + "_" + j12, true, true);
                    }, ForEach);
                    ForEach.pop();
                    Grid.pop();
                });
            }
        }, If);
        If.pop();
    }
    contentLayout(z11, a12 = null) {
        z11.gridLayout.bind(this)(z11);
    }
    initialRender() {
        this.observeComponentCreation2((l11, m11) => {
            If.create();
            if (this.prohibitRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.contentLayout.bind(this)(this);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((n11, o11) => {
                            if (o11) {
                                let p11 = new RefreshLayout(this, {
                                    itemLayout: () => {
                                        this.contentLayout(this);
                                    },
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    parentEdgeEffect: this._privateGridAttr.edgeEffect,
                                    headerRefreshLayout: this.headerRefreshLayout,
                                    itemHeaderLayout: this.itemHeaderLayout,
                                    footerLoadLayout: this.footerLoadLayout,
                                    controller: this.controller,
                                    refreshPosition: this.refreshPosition,
                                    onRefresh: this.onRefresh,
                                    onLoadMore: this.onLoadMore,
                                    childScroller: this.scroller,
                                    emptyLayout: this.emptyLayout,
                                    errorLayout: this.errorLayout,
                                    loadingLayout: this.loadingLayout,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    refreshHeaderAttribute: this.refreshHeaderAttribute,
                                    loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
                                    parentNestedScroll: this._privateGridAttr.parentNestedScroll,
                                    onRefreshScrollToIndex: (y11) => {
                                        if (this.onRefreshScrollToIndex != undefined) {
                                            this.onRefreshScrollToIndex(y11);
                                        }
                                        this._privateContentScroller.scrollTo({ xOffset: 0, yOffset: this._privateItemHeight * y11 });
                                        this.scroller?.scrollToIndex(y11);
                                    },
                                    onRefreshScrollEdge: (x11) => {
                                        if (this.onScrollEdge != undefined) {
                                            this.onScrollEdge(x11);
                                        }
                                        this.scroller?.scrollEdge(x11);
                                    },
                                    onStickyNestedScroll: (w11) => {
                                        this.gridNestedScroll = w11;
                                    },
                                    isRefreshSticky: this.isRefreshSticky,
                                    refreshStickyPosition: this.refreshStickyPosition,
                                    useMarkStickyPosition: this.refreshStickyPosition,
                                    onScroll: this.onRefreshScroll,
                                    onScrollTouch: this.onScrollTouch,
                                    onScrollStart: this.onRefreshScrollStart,
                                    onScrollStop: this.onRefreshScrollStop,
                                    onReachStart: this.refreshOnReachStart,
                                    onReachEnd: this.refreshOnReachEnd,
                                    onScrollTouchEvent: this.onScrollTouchEvent,
                                    onParentAreaChange: this.onRefreshAreaChange,
                                    onScrollDirection: this.onScrollDirection,
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
                                    onContentScroller: (v11) => {
                                        this._privateContentScroller = v11;
                                        if (this.onContentScroller != undefined) {
                                            this.onContentScroller(v11);
                                        }
                                    },
                                    scrollBarState: this._privateGridAttr.scrollBar,
                                    onScrollDistance: this.onScrollDistance,
                                    slideDisplayLoadData: this.slideDisplayLoadData,
                                    isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                    isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                    isChildViewHeightUndefined: this._privateGridAttr.height == undefined
                                }, undefined, n11, () => { }, { page: "refresh/src/main/ets/GridView.ets", line: 223, col: 7 });
                                ViewPU.create(p11);
                                let q11 = () => {
                                    return {
                                        itemLayout: () => {
                                            this.contentLayout(this);
                                        },
                                        isAdaptiveHeight: this.isAdaptiveHeight,
                                        parentEdgeEffect: this._privateGridAttr.edgeEffect,
                                        headerRefreshLayout: this.headerRefreshLayout,
                                        itemHeaderLayout: this.itemHeaderLayout,
                                        footerLoadLayout: this.footerLoadLayout,
                                        controller: this.controller,
                                        refreshPosition: this.refreshPosition,
                                        onRefresh: this.onRefresh,
                                        onLoadMore: this.onLoadMore,
                                        childScroller: this.scroller,
                                        emptyLayout: this.emptyLayout,
                                        errorLayout: this.errorLayout,
                                        loadingLayout: this.loadingLayout,
                                        showEmptyLayout: this.showEmptyLayout,
                                        showErrorLayout: this.showErrorLayout,
                                        showLoadingLayout: this.showLoadingLayout,
                                        refreshHeaderAttribute: this.refreshHeaderAttribute,
                                        loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                        enableRefresh: this.enableRefresh,
                                        enableLoadMore: this.enableLoadMore,
                                        parentNestedScroll: this._privateGridAttr.parentNestedScroll,
                                        onRefreshScrollToIndex: (u11) => {
                                            if (this.onRefreshScrollToIndex != undefined) {
                                                this.onRefreshScrollToIndex(u11);
                                            }
                                            this._privateContentScroller.scrollTo({ xOffset: 0, yOffset: this._privateItemHeight * u11 });
                                            this.scroller?.scrollToIndex(u11);
                                        },
                                        onRefreshScrollEdge: (t11) => {
                                            if (this.onScrollEdge != undefined) {
                                                this.onScrollEdge(t11);
                                            }
                                            this.scroller?.scrollEdge(t11);
                                        },
                                        onStickyNestedScroll: (s11) => {
                                            this.gridNestedScroll = s11;
                                        },
                                        isRefreshSticky: this.isRefreshSticky,
                                        refreshStickyPosition: this.refreshStickyPosition,
                                        useMarkStickyPosition: this.refreshStickyPosition,
                                        onScroll: this.onRefreshScroll,
                                        onScrollTouch: this.onScrollTouch,
                                        onScrollStart: this.onRefreshScrollStart,
                                        onScrollStop: this.onRefreshScrollStop,
                                        onReachStart: this.refreshOnReachStart,
                                        onReachEnd: this.refreshOnReachEnd,
                                        onScrollTouchEvent: this.onScrollTouchEvent,
                                        onParentAreaChange: this.onRefreshAreaChange,
                                        onScrollDirection: this.onScrollDirection,
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
                                        onContentScroller: (r11) => {
                                            this._privateContentScroller = r11;
                                            if (this.onContentScroller != undefined) {
                                                this.onContentScroller(r11);
                                            }
                                        },
                                        scrollBarState: this._privateGridAttr.scrollBar,
                                        onScrollDistance: this.onScrollDistance,
                                        slideDisplayLoadData: this.slideDisplayLoadData,
                                        isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                        isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                        isChildViewHeightUndefined: this._privateGridAttr.height == undefined
                                    };
                                };
                                p11.paramsGenerator_ = q11;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(n11, {
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    refreshPosition: this.refreshPosition,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
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
function __Grid__gridViewStyle(f11) {
    Grid.backgroundColor(f11._privateGridAttr.backgroundColor);
    Grid.onScrollStart(f11._privateGridAttr.onScrollStart);
    Grid.onScrollStop(f11._privateGridAttr.onScrollStop);
    Grid.edgeEffect(f11._privateGridAttr.edgeEffect);
    Grid.width(f11._privateGridAttr.width);
    Grid.height(f11.isRefreshSticky ? "100%" : f11._privateGridAttr.height);
    Grid.columnsGap(f11._privateGridAttr.columnsGap);
    Grid.rowsGap(f11._privateGridAttr.rowsGap);
    Grid.columnsTemplate(f11._privateGridAttr.columnsTemplate);
    Grid.scrollBar(f11._privateGridAttr.scrollBar);
    Grid.scrollBarColor(f11._privateGridAttr.scrollBarColor);
    Grid.scrollBarWidth(f11._privateGridAttr.scrollBarWidth);
    Grid.cachedCount(f11._privateGridAttr.cachedCount != undefined ? f11._privateGridAttr.cachedCount :
        f11.lazyCachedCount);
    Grid.nestedScroll(f11.gridNestedScroll);
    Grid.onScroll(f11._privateGridAttr.onScroll);
    Grid.onWillScroll(f11._privateGridAttr.onWillScroll);
    Grid.onDidScroll(f11._privateGridAttr.onDidScroll);
    Grid.enableScrollInteraction(f11.enableScrollInteraction);
    Grid.onScrollIndex((j11, k11) => {
        if (f11._privateGridAttr.onScrollIndex != undefined) {
            f11._privateGridAttr.onScrollIndex(j11, k11);
        }
    });
    Grid.onVisibleAreaChange([0.0, 1.0], (h11, i11) => {
        if (f11._privateGridAttr.onVisibleAreaChange != undefined) {
            f11._privateGridAttr.onVisibleAreaChange(h11, i11);
        }
    });
    Grid.onReachStart(() => {
        if (f11._privateGridAttr.onReachStart != undefined) {
            f11._privateGridAttr.onReachStart();
        }
        f11.refreshPosition = RefreshPositionEnum.TOP;
        if (f11.onGridRefreshPosition != undefined) {
            f11.onGridRefreshPosition(f11.refreshPosition);
        }
    });
    Grid.onReachEnd(() => {
        if (f11._privateGridAttr.onReachEnd != undefined) {
            f11._privateGridAttr.onReachEnd();
        }
        f11.refreshPosition = RefreshPositionEnum.BOTTOM;
        if (f11.onGridRefreshPosition != undefined) {
            f11.onGridRefreshPosition(f11.refreshPosition);
        }
    });
    Grid.onScrollFrameBegin((g11) => {
        if (f11.isRefreshSticky && f11.refreshPosition == RefreshPositionEnum.BOTTOM && !f11.scroller?.isAtEnd()) {
            f11.refreshPosition = RefreshPositionEnum.CENTER;
            if (f11.onGridRefreshPosition != undefined) {
                f11.onGridRefreshPosition(f11.refreshPosition);
            }
            return;
        }
        if ((f11.refreshPosition == RefreshPositionEnum.TOP && g11 <= 0) ||
            (f11.refreshPosition == RefreshPositionEnum.BOTTOM && g11 >= 0)) {
            return { offsetRemain: g11 };
        }
        f11.refreshPosition = RefreshPositionEnum.CENTER;
        if (f11.onGridRefreshPosition != undefined) {
            f11.onGridRefreshPosition(f11.refreshPosition);
        }
        return { offsetRemain: g11 };
    });
    Grid.margin(f11._privateGridAttr.margin);
    Grid.padding(f11._privateGridAttr.padding);
}
function __GridItem__gridItemStyle(e11) {
    GridItem.width(e11.width);
    GridItem.height(e11.height);
    GridItem.margin(e11.margin);
    GridItem.padding(e11.padding);
    GridItem.backgroundColor(e11.backgroundColor);
    GridItem.onClick(e11.onClick);
}
