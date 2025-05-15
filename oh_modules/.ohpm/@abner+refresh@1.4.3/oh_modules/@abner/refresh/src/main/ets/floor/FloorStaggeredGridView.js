if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshPositionEnum } from '../constants/RefreshPositionEnum';
import { DataController } from '../controller/DataController';
import { RefreshController } from '../controller/RefreshController';
import { FloorRefreshLayout } from './FloorRefreshLayout';
import { FloorWaterFlowView } from './FloorWaterFlowView';
export class FloorStaggeredGridView extends ViewPU {
    constructor(m6, n6, o6, p6 = -1, q6 = undefined, r6) {
        super(m6, o6, p6, r6);
        if (typeof q6 === "function") {
            this.paramsGenerator_ = q6;
        }
        this.__controller = new ObservedPropertyObjectPU(new RefreshController(), this, "controller");
        this.dataController = new DataController();
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.itemHeaderLayout = undefined;
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this.columnsTemplate = "1fr 1fr";
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.bgColor = Color.Transparent;
        this.sWidth = "100%";
        this.sHeight = "100%";
        this.__items = new SynchedPropertyObjectOneWayPU(n6.items, this, "items");
        this.scroller = new Scroller();
        this.__nestedScroll = new ObservedPropertyObjectPU({
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.PARENT_FIRST
        }, this, "nestedScroll");
        this.isLazyData = true;
        this.lazyCachedCount = 1;
        this.onLazyDataSource = undefined;
        this.lazyDataSource = undefined;
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(n6.enableScrollInteraction, this, "enableScrollInteraction");
        this.___globalPosition = new ObservedPropertySimplePU(0, this, "_globalPosition");
        this.refreshHeaderAttribute = undefined;
        this.loadMoreFooterAttribute = undefined;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(n6.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(n6.enableLoadMore, this, "enableLoadMore");
        this.parentNestedScroll = {
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        };
        this.sMargin = undefined;
        this.sPadding = undefined;
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(n6.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(n6.showErrorLayout, this, "showErrorLayout");
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(n6.showLoadingLayout, this, "showLoadingLayout");
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
        this.reachPosition = undefined;
        this.__isFirstFloorStatus = new SynchedPropertySimpleOneWayPU(n6.isFirstFloorStatus, this, "isFirstFloorStatus");
        this._privateIsTopMargin = 0;
        this.refreshScroller = new Scroller();
        this.setInitiallyProvidedValue(n6);
        this.declareWatch("controller", this.listenerRefreshController);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(l6) {
        if (l6.controller !== undefined) {
            this.controller = l6.controller;
        }
        if (l6.dataController !== undefined) {
            this.dataController = l6.dataController;
        }
        if (l6.itemLayout !== undefined) {
            this.itemLayout = l6.itemLayout;
        }
        if (l6.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = l6.headerRefreshLayout;
        }
        if (l6.footerLoadLayout !== undefined) {
            this.footerLoadLayout = l6.footerLoadLayout;
        }
        if (l6.itemHeaderLayout !== undefined) {
            this.itemHeaderLayout = l6.itemHeaderLayout;
        }
        if (l6.onRefresh !== undefined) {
            this.onRefresh = l6.onRefresh;
        }
        if (l6.onLoadMore !== undefined) {
            this.onLoadMore = l6.onLoadMore;
        }
        if (l6.columnsTemplate !== undefined) {
            this.columnsTemplate = l6.columnsTemplate;
        }
        if (l6.columnsGap !== undefined) {
            this.columnsGap = l6.columnsGap;
        }
        if (l6.rowsGap !== undefined) {
            this.rowsGap = l6.rowsGap;
        }
        if (l6.bgColor !== undefined) {
            this.bgColor = l6.bgColor;
        }
        if (l6.sWidth !== undefined) {
            this.sWidth = l6.sWidth;
        }
        if (l6.sHeight !== undefined) {
            this.sHeight = l6.sHeight;
        }
        if (l6.items === undefined) {
            this.__items.set([]);
        }
        if (l6.scroller !== undefined) {
            this.scroller = l6.scroller;
        }
        if (l6.nestedScroll !== undefined) {
            this.nestedScroll = l6.nestedScroll;
        }
        if (l6.isLazyData !== undefined) {
            this.isLazyData = l6.isLazyData;
        }
        if (l6.lazyCachedCount !== undefined) {
            this.lazyCachedCount = l6.lazyCachedCount;
        }
        if (l6.onLazyDataSource !== undefined) {
            this.onLazyDataSource = l6.onLazyDataSource;
        }
        if (l6.lazyDataSource !== undefined) {
            this.lazyDataSource = l6.lazyDataSource;
        }
        if (l6.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (l6._globalPosition !== undefined) {
            this._globalPosition = l6._globalPosition;
        }
        if (l6.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = l6.refreshHeaderAttribute;
        }
        if (l6.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = l6.loadMoreFooterAttribute;
        }
        if (l6.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (l6.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (l6.parentNestedScroll !== undefined) {
            this.parentNestedScroll = l6.parentNestedScroll;
        }
        if (l6.sMargin !== undefined) {
            this.sMargin = l6.sMargin;
        }
        if (l6.sPadding !== undefined) {
            this.sPadding = l6.sPadding;
        }
        if (l6.emptyLayout !== undefined) {
            this.emptyLayout = l6.emptyLayout;
        }
        if (l6.errorLayout !== undefined) {
            this.errorLayout = l6.errorLayout;
        }
        if (l6.loadingLayout !== undefined) {
            this.loadingLayout = l6.loadingLayout;
        }
        if (l6.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (l6.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (l6.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (l6.onRefreshScroll !== undefined) {
            this.onRefreshScroll = l6.onRefreshScroll;
        }
        if (l6.onRefreshScrollEdge !== undefined) {
            this.onRefreshScrollEdge = l6.onRefreshScrollEdge;
        }
        if (l6.onRefreshScrollStart !== undefined) {
            this.onRefreshScrollStart = l6.onRefreshScrollStart;
        }
        if (l6.onRefreshScrollStop !== undefined) {
            this.onRefreshScrollStop = l6.onRefreshScrollStop;
        }
        if (l6.onRefreshScrollTouchEvent !== undefined) {
            this.onRefreshScrollTouchEvent = l6.onRefreshScrollTouchEvent;
        }
        if (l6.onScrollIndex !== undefined) {
            this.onScrollIndex = l6.onScrollIndex;
        }
        if (l6.onScroll !== undefined) {
            this.onScroll = l6.onScroll;
        }
        if (l6.onScrollStart !== undefined) {
            this.onScrollStart = l6.onScrollStart;
        }
        if (l6.onScrollStop !== undefined) {
            this.onScrollStop = l6.onScrollStop;
        }
        if (l6.onScrollDirection !== undefined) {
            this.onScrollDirection = l6.onScrollDirection;
        }
        if (l6.isParentControlInteraction !== undefined) {
            this.isParentControlInteraction = l6.isParentControlInteraction;
        }
        if (l6.scrollSpringHeight !== undefined) {
            this.scrollSpringHeight = l6.scrollSpringHeight;
        }
        if (l6.reachPosition !== undefined) {
            this.reachPosition = l6.reachPosition;
        }
        if (l6.isFirstFloorStatus === undefined) {
            this.__isFirstFloorStatus.set(true);
        }
        if (l6._privateIsTopMargin !== undefined) {
            this._privateIsTopMargin = l6._privateIsTopMargin;
        }
        if (l6.refreshScroller !== undefined) {
            this.refreshScroller = l6.refreshScroller;
        }
    }
    updateStateVars(k6) {
        this.__items.reset(k6.items);
        this.__enableScrollInteraction.reset(k6.enableScrollInteraction);
        this.__enableRefresh.reset(k6.enableRefresh);
        this.__enableLoadMore.reset(k6.enableLoadMore);
        this.__showEmptyLayout.reset(k6.showEmptyLayout);
        this.__showErrorLayout.reset(k6.showErrorLayout);
        this.__showLoadingLayout.reset(k6.showLoadingLayout);
        this.__isFirstFloorStatus.reset(k6.isFirstFloorStatus);
    }
    purgeVariableDependenciesOnElmtId(j6) {
        this.__controller.purgeDependencyOnElmtId(j6);
        this.__items.purgeDependencyOnElmtId(j6);
        this.__nestedScroll.purgeDependencyOnElmtId(j6);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(j6);
        this.___globalPosition.purgeDependencyOnElmtId(j6);
        this.__enableRefresh.purgeDependencyOnElmtId(j6);
        this.__enableLoadMore.purgeDependencyOnElmtId(j6);
        this.__showEmptyLayout.purgeDependencyOnElmtId(j6);
        this.__showErrorLayout.purgeDependencyOnElmtId(j6);
        this.__showLoadingLayout.purgeDependencyOnElmtId(j6);
        this.__isFirstFloorStatus.purgeDependencyOnElmtId(j6);
    }
    aboutToBeDeleted() {
        this.__controller.aboutToBeDeleted();
        this.__items.aboutToBeDeleted();
        this.__nestedScroll.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.___globalPosition.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.__isFirstFloorStatus.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get controller() {
        return this.__controller.get();
    }
    set controller(i6) {
        this.__controller.set(i6);
    }
    get items() {
        return this.__items.get();
    }
    set items(h6) {
        this.__items.set(h6);
    }
    get nestedScroll() {
        return this.__nestedScroll.get();
    }
    set nestedScroll(g6) {
        this.__nestedScroll.set(g6);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(f6) {
        this.__enableScrollInteraction.set(f6);
    }
    get _globalPosition() {
        return this.___globalPosition.get();
    }
    set _globalPosition(e6) {
        this.___globalPosition.set(e6);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(d6) {
        this.__enableRefresh.set(d6);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(c6) {
        this.__enableLoadMore.set(c6);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(b6) {
        this.__showEmptyLayout.set(b6);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(a6) {
        this.__showErrorLayout.set(a6);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(z5) {
        this.__showLoadingLayout.set(z5);
    }
    get isFirstFloorStatus() {
        return this.__isFirstFloorStatus.get();
    }
    set isFirstFloorStatus(y5) {
        this.__isFirstFloorStatus.set(y5);
    }
    listenerRefreshController() {
        if (this.controller.isScrollTop) {
            this.controller.isScrollTop = false;
            this.scroller.scrollTo({ xOffset: 0, yOffset: 0, animation: { duration: 300 } });
            setTimeout(() => {
                this.refreshScroller.scrollEdge(Edge.Top);
            }, 200);
        }
    }
    changeNestedScroll(x5) {
        if (this.itemHeaderLayout != undefined) {
            if (x5) {
                this.nestedScroll = {
                    scrollForward: NestedScrollMode.PARENT_FIRST,
                    scrollBackward: NestedScrollMode.PARENT_FIRST
                };
            }
            else {
                this.nestedScroll = {
                    scrollForward: NestedScrollMode.SELF_FIRST,
                    scrollBackward: NestedScrollMode.SELF_FIRST
                };
            }
        }
    }
    itemWaterFlowLayout(l5, m5 = null) {
        {
            this.observeComponentCreation2((n5, o5) => {
                if (o5) {
                    let p5 = new FloorWaterFlowView(this, {
                        columnsTemplate: l5.columnsTemplate,
                        columnsGap: l5.columnsGap,
                        rowsGap: l5.rowsGap,
                        bgColor: l5.bgColor,
                        sWidth: l5.sWidth,
                        sHeight: l5.sHeight,
                        scroller: l5.scroller,
                        nestedScroll: l5.nestedScroll,
                        sMargin: l5.sMargin,
                        sPadding: l5.sPadding,
                        enableScrollInteraction: l5.enableScrollInteraction,
                        items: l5.items,
                        isRefresh: true,
                        dataController: this.dataController,
                        itemView: (v5, w5) => this.itemLayout(v5, w5),
                        reachPosition: (u5) => {
                            if (this.reachPosition != undefined && this.itemHeaderLayout == undefined) {
                                this.reachPosition(u5);
                            }
                            this.controller.markEndLocation(u5 == RefreshPositionEnum.BOTTOM);
                            if (u5 == RefreshPositionEnum.CENTER) {
                                this.controller.markStartLocation(false);
                            }
                            l5.changeNestedScroll(u5 == RefreshPositionEnum.TOP);
                        },
                        isLazyData: l5.isLazyData,
                        lazyCachedCount: l5.lazyCachedCount,
                        onLazyDataSource: l5.onLazyDataSource,
                        lazyDataSource: l5.lazyDataSource,
                        onScrollIndex: l5.onScrollIndex,
                        onScroll: l5.onScroll,
                        onScrollStart: l5.onScrollStart,
                        onScrollStop: l5.onScrollStop
                    }, undefined, n5, () => { }, { page: "refresh/src/main/ets/floor/FloorStaggeredGridView.ets", line: 111, col: 5 });
                    ViewPU.create(p5);
                    let q5 = () => {
                        return {
                            columnsTemplate: l5.columnsTemplate,
                            columnsGap: l5.columnsGap,
                            rowsGap: l5.rowsGap,
                            bgColor: l5.bgColor,
                            sWidth: l5.sWidth,
                            sHeight: l5.sHeight,
                            scroller: l5.scroller,
                            nestedScroll: l5.nestedScroll,
                            sMargin: l5.sMargin,
                            sPadding: l5.sPadding,
                            enableScrollInteraction: l5.enableScrollInteraction,
                            items: l5.items,
                            isRefresh: true,
                            dataController: this.dataController,
                            itemView: (s5, t5) => this.itemLayout(s5, t5),
                            reachPosition: (r5) => {
                                if (this.reachPosition != undefined && this.itemHeaderLayout == undefined) {
                                    this.reachPosition(r5);
                                }
                                this.controller.markEndLocation(r5 == RefreshPositionEnum.BOTTOM);
                                if (r5 == RefreshPositionEnum.CENTER) {
                                    this.controller.markStartLocation(false);
                                }
                                l5.changeNestedScroll(r5 == RefreshPositionEnum.TOP);
                            },
                            isLazyData: l5.isLazyData,
                            lazyCachedCount: l5.lazyCachedCount,
                            onLazyDataSource: l5.onLazyDataSource,
                            lazyDataSource: l5.lazyDataSource,
                            onScrollIndex: l5.onScrollIndex,
                            onScroll: l5.onScroll,
                            onScrollStart: l5.onScrollStart,
                            onScrollStop: l5.onScrollStop
                        };
                    };
                    p5.paramsGenerator_ = q5;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(n5, {
                        nestedScroll: l5.nestedScroll,
                        enableScrollInteraction: l5.enableScrollInteraction,
                        items: l5.items
                    });
                }
            }, { name: "FloorWaterFlowView" });
        }
    }
    itemRefreshLayout(a5, b5 = null) {
        this.observeComponentCreation2((c5, d5) => {
            If.create();
            if (this.itemHeaderLayout != null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((j5, k5) => {
                        Column.create();
                    }, Column);
                    this.observeComponentCreation2((e5, f5) => {
                        Column.create();
                        Column.onAreaChange((g5, h5) => {
                            if (this.isFirstFloorStatus) {
                                this._privateIsTopMargin = Number(h5.globalPosition.y);
                                setTimeout(() => {
                                    this.isFirstFloorStatus = false;
                                }, 300);
                            }
                            let i5 = Number(h5.globalPosition.y) >= a5._privateIsTopMargin;
                            a5.controller.markStartLocation(i5);
                            if (this.reachPosition != undefined) {
                                this.reachPosition(i5 ? RefreshPositionEnum.TOP : RefreshPositionEnum.CENTER);
                            }
                        });
                    }, Column);
                    this.itemHeaderLayout.bind(this)();
                    Column.pop();
                    a5.itemWaterFlowLayout.bind(this)(a5);
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    a5.itemWaterFlowLayout.bind(this)(a5);
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        {
            this.observeComponentCreation2((s4, t4) => {
                if (t4) {
                    let u4 = new FloorRefreshLayout(this, {
                        isSecondFloorScroll: true,
                        controller: this.controller,
                        onRefresh: this.onRefresh,
                        onLoadMore: this.onLoadMore,
                        scroller: this.refreshScroller,
                        enableScrollInteraction: (z4) => {
                            if (this.isParentControlInteraction) {
                                this.enableScrollInteraction = z4;
                            }
                        },
                        itemLayout: () => {
                            this.itemRefreshLayout(this);
                        },
                        headerRefreshLayout: this.headerRefreshLayout,
                        footerLoadLayout: this.footerLoadLayout,
                        refreshHeaderAttribute: this.refreshHeaderAttribute,
                        loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                        enableRefresh: this.enableRefresh,
                        enableLoadMore: this.enableLoadMore,
                        parentNestedScroll: this.parentNestedScroll,
                        onGlobalPosition: (y4) => {
                            this._globalPosition = y4;
                        },
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
                        onScrollDirection: this.onScrollDirection,
                        scrollSpringHeight: this.scrollSpringHeight
                    }, undefined, s4, () => { }, { page: "refresh/src/main/ets/floor/FloorStaggeredGridView.ets", line: 183, col: 5 });
                    ViewPU.create(u4);
                    let v4 = () => {
                        return {
                            isSecondFloorScroll: true,
                            controller: this.controller,
                            onRefresh: this.onRefresh,
                            onLoadMore: this.onLoadMore,
                            scroller: this.refreshScroller,
                            enableScrollInteraction: (x4) => {
                                if (this.isParentControlInteraction) {
                                    this.enableScrollInteraction = x4;
                                }
                            },
                            itemLayout: () => {
                                this.itemRefreshLayout(this);
                            },
                            headerRefreshLayout: this.headerRefreshLayout,
                            footerLoadLayout: this.footerLoadLayout,
                            refreshHeaderAttribute: this.refreshHeaderAttribute,
                            loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                            enableRefresh: this.enableRefresh,
                            enableLoadMore: this.enableLoadMore,
                            parentNestedScroll: this.parentNestedScroll,
                            onGlobalPosition: (w4) => {
                                this._globalPosition = w4;
                            },
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
                            onScrollDirection: this.onScrollDirection,
                            scrollSpringHeight: this.scrollSpringHeight
                        };
                    };
                    u4.paramsGenerator_ = v4;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(s4, {
                        enableRefresh: this.enableRefresh,
                        enableLoadMore: this.enableLoadMore,
                        showEmptyLayout: this.showEmptyLayout,
                        showErrorLayout: this.showErrorLayout,
                        showLoadingLayout: this.showLoadingLayout
                    });
                }
            }, { name: "FloorRefreshLayout" });
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
