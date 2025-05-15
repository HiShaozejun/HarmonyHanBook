if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { LoadMoreFooterAttr } from '../attribute/LoadMoreFooterAttr';
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshConfig } from '../config/RefreshConfig';
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshHeaderType } from '../constants/RefreshHeaderType';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
import { RefreshController } from '../controller/RefreshController';
import { RefreshDefaultFooter } from '../view/RefreshDefaultFooter';
import { RefreshDefaultHeader } from '../view/RefreshDefaultHeader';
import { RefreshHeaderPoints } from '../view/RefreshHeaderPoints';
export class FloorRefreshLayout extends ViewPU {
    constructor(m4, n4, o4, p4 = -1, q4 = undefined, r4) {
        super(m4, o4, p4, r4);
        if (typeof q4 === "function") {
            this.paramsGenerator_ = q4;
        }
        this.layoutWidth = "100%";
        this.layoutHeight = "100%";
        this._refreshHeaderAttr = new RefreshHeaderAttr();
        this.refreshHeaderAttribute = undefined;
        this._loadMoreFooterAttr = new LoadMoreFooterAttr();
        this.loadMoreFooterAttribute = undefined;
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this.__controller = new ObservedPropertyObjectPU(new RefreshController(), this, "controller");
        this.___privateRefreshLayoutStatus = new SynchedPropertySimpleOneWayPU(n4._privateRefreshLayoutStatus, this, "_privateRefreshLayoutStatus");
        this.___privateLoadMoreLayoutStatus = new ObservedPropertySimplePU(LoadMoreLayoutStatus.Finish, this, "_privateLoadMoreLayoutStatus");
        this._privateTouchDownY = 0;
        this._privateTouchUpY = 0;
        this.___privateHeaderMarginTop = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginTop");
        this.___privateHeaderMarginDuration = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginDuration");
        this.___privateRotateAngle = new ObservedPropertySimplePU(0, this, "_privateRotateAngle");
        this.___privateFooterMarginBottom = new ObservedPropertySimplePU(0, this, "_privateFooterMarginBottom");
        this.___privateFooterMarginDuration = new ObservedPropertySimplePU(0, this, "_privateFooterMarginDuration");
        this._privatePrivateIsRefresh = true;
        this._privateTouchRefreshHeight = 0;
        this._privateTouchLoadingHeight = 0;
        this.enableScrollInteraction = undefined;
        this.onScrollTouch = undefined;
        this.onGlobalPosition = undefined;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(n4.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(n4.enableLoadMore, this, "enableLoadMore");
        this.__parentNestedScroll = new ObservedPropertyObjectPU(undefined, this, "parentNestedScroll");
        this.onScroll = undefined;
        this.onScrollEdge = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.onScrollTouchEvent = undefined;
        this.scroller = undefined;
        this.onRefreshScrollEdge = undefined;
        this.onRefreshScrollToIndex = undefined;
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(n4.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(n4.showErrorLayout, this, "showErrorLayout");
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(n4.showLoadingLayout, this, "showLoadingLayout");
        this.onScrollDirection = undefined;
        this.scrollSpringHeight = undefined;
        this.___privateEnabled = new ObservedPropertySimplePU(true, this, "_privateEnabled");
        this.isSecondFloorScroll = false;
        this.___privateEnableScrollInteraction = new ObservedPropertySimplePU(true, this, "_privateEnableScrollInteraction");
        this._privateEndRefreshTimeout = 0;
        this.setInitiallyProvidedValue(n4);
        this.declareWatch("controller", this.listenerController);
        this.declareWatch("_privateRefreshLayoutStatus", this.listenerRefreshLayoutStatus);
        this.declareWatch("_privateLoadMoreLayoutStatus", this.listenerLoadMoreLayoutStatus);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(l4) {
        if (l4.layoutWidth !== undefined) {
            this.layoutWidth = l4.layoutWidth;
        }
        if (l4.layoutHeight !== undefined) {
            this.layoutHeight = l4.layoutHeight;
        }
        if (l4._refreshHeaderAttr !== undefined) {
            this._refreshHeaderAttr = l4._refreshHeaderAttr;
        }
        if (l4.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = l4.refreshHeaderAttribute;
        }
        if (l4._loadMoreFooterAttr !== undefined) {
            this._loadMoreFooterAttr = l4._loadMoreFooterAttr;
        }
        if (l4.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = l4.loadMoreFooterAttribute;
        }
        if (l4.itemLayout !== undefined) {
            this.itemLayout = l4.itemLayout;
        }
        if (l4.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = l4.headerRefreshLayout;
        }
        if (l4.footerLoadLayout !== undefined) {
            this.footerLoadLayout = l4.footerLoadLayout;
        }
        if (l4.onRefresh !== undefined) {
            this.onRefresh = l4.onRefresh;
        }
        if (l4.onLoadMore !== undefined) {
            this.onLoadMore = l4.onLoadMore;
        }
        if (l4.controller !== undefined) {
            this.controller = l4.controller;
        }
        if (l4._privateRefreshLayoutStatus === undefined) {
            this.___privateRefreshLayoutStatus.set(RefreshLayoutStatus.Finish);
        }
        if (l4._privateLoadMoreLayoutStatus !== undefined) {
            this._privateLoadMoreLayoutStatus = l4._privateLoadMoreLayoutStatus;
        }
        if (l4._privateTouchDownY !== undefined) {
            this._privateTouchDownY = l4._privateTouchDownY;
        }
        if (l4._privateTouchUpY !== undefined) {
            this._privateTouchUpY = l4._privateTouchUpY;
        }
        if (l4._privateHeaderMarginTop !== undefined) {
            this._privateHeaderMarginTop = l4._privateHeaderMarginTop;
        }
        if (l4._privateHeaderMarginDuration !== undefined) {
            this._privateHeaderMarginDuration = l4._privateHeaderMarginDuration;
        }
        if (l4._privateRotateAngle !== undefined) {
            this._privateRotateAngle = l4._privateRotateAngle;
        }
        if (l4._privateFooterMarginBottom !== undefined) {
            this._privateFooterMarginBottom = l4._privateFooterMarginBottom;
        }
        if (l4._privateFooterMarginDuration !== undefined) {
            this._privateFooterMarginDuration = l4._privateFooterMarginDuration;
        }
        if (l4._privatePrivateIsRefresh !== undefined) {
            this._privatePrivateIsRefresh = l4._privatePrivateIsRefresh;
        }
        if (l4._privateTouchRefreshHeight !== undefined) {
            this._privateTouchRefreshHeight = l4._privateTouchRefreshHeight;
        }
        if (l4._privateTouchLoadingHeight !== undefined) {
            this._privateTouchLoadingHeight = l4._privateTouchLoadingHeight;
        }
        if (l4.enableScrollInteraction !== undefined) {
            this.enableScrollInteraction = l4.enableScrollInteraction;
        }
        if (l4.onScrollTouch !== undefined) {
            this.onScrollTouch = l4.onScrollTouch;
        }
        if (l4.onGlobalPosition !== undefined) {
            this.onGlobalPosition = l4.onGlobalPosition;
        }
        if (l4.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (l4.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (l4.parentNestedScroll !== undefined) {
            this.parentNestedScroll = l4.parentNestedScroll;
        }
        if (l4.onScroll !== undefined) {
            this.onScroll = l4.onScroll;
        }
        if (l4.onScrollEdge !== undefined) {
            this.onScrollEdge = l4.onScrollEdge;
        }
        if (l4.onScrollStart !== undefined) {
            this.onScrollStart = l4.onScrollStart;
        }
        if (l4.onScrollStop !== undefined) {
            this.onScrollStop = l4.onScrollStop;
        }
        if (l4.onScrollTouchEvent !== undefined) {
            this.onScrollTouchEvent = l4.onScrollTouchEvent;
        }
        if (l4.scroller !== undefined) {
            this.scroller = l4.scroller;
        }
        if (l4.onRefreshScrollEdge !== undefined) {
            this.onRefreshScrollEdge = l4.onRefreshScrollEdge;
        }
        if (l4.onRefreshScrollToIndex !== undefined) {
            this.onRefreshScrollToIndex = l4.onRefreshScrollToIndex;
        }
        if (l4.emptyLayout !== undefined) {
            this.emptyLayout = l4.emptyLayout;
        }
        if (l4.errorLayout !== undefined) {
            this.errorLayout = l4.errorLayout;
        }
        if (l4.loadingLayout !== undefined) {
            this.loadingLayout = l4.loadingLayout;
        }
        if (l4.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (l4.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (l4.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (l4.onScrollDirection !== undefined) {
            this.onScrollDirection = l4.onScrollDirection;
        }
        if (l4.scrollSpringHeight !== undefined) {
            this.scrollSpringHeight = l4.scrollSpringHeight;
        }
        if (l4._privateEnabled !== undefined) {
            this._privateEnabled = l4._privateEnabled;
        }
        if (l4.isSecondFloorScroll !== undefined) {
            this.isSecondFloorScroll = l4.isSecondFloorScroll;
        }
        if (l4._privateEnableScrollInteraction !== undefined) {
            this._privateEnableScrollInteraction = l4._privateEnableScrollInteraction;
        }
        if (l4._privateEndRefreshTimeout !== undefined) {
            this._privateEndRefreshTimeout = l4._privateEndRefreshTimeout;
        }
    }
    updateStateVars(k4) {
        this.___privateRefreshLayoutStatus.reset(k4._privateRefreshLayoutStatus);
        this.__enableRefresh.reset(k4.enableRefresh);
        this.__enableLoadMore.reset(k4.enableLoadMore);
        this.__showEmptyLayout.reset(k4.showEmptyLayout);
        this.__showErrorLayout.reset(k4.showErrorLayout);
        this.__showLoadingLayout.reset(k4.showLoadingLayout);
    }
    purgeVariableDependenciesOnElmtId(j4) {
        this.__controller.purgeDependencyOnElmtId(j4);
        this.___privateRefreshLayoutStatus.purgeDependencyOnElmtId(j4);
        this.___privateLoadMoreLayoutStatus.purgeDependencyOnElmtId(j4);
        this.___privateHeaderMarginTop.purgeDependencyOnElmtId(j4);
        this.___privateHeaderMarginDuration.purgeDependencyOnElmtId(j4);
        this.___privateRotateAngle.purgeDependencyOnElmtId(j4);
        this.___privateFooterMarginBottom.purgeDependencyOnElmtId(j4);
        this.___privateFooterMarginDuration.purgeDependencyOnElmtId(j4);
        this.__enableRefresh.purgeDependencyOnElmtId(j4);
        this.__enableLoadMore.purgeDependencyOnElmtId(j4);
        this.__parentNestedScroll.purgeDependencyOnElmtId(j4);
        this.__showEmptyLayout.purgeDependencyOnElmtId(j4);
        this.__showErrorLayout.purgeDependencyOnElmtId(j4);
        this.__showLoadingLayout.purgeDependencyOnElmtId(j4);
        this.___privateEnabled.purgeDependencyOnElmtId(j4);
        this.___privateEnableScrollInteraction.purgeDependencyOnElmtId(j4);
    }
    aboutToBeDeleted() {
        this.__controller.aboutToBeDeleted();
        this.___privateRefreshLayoutStatus.aboutToBeDeleted();
        this.___privateLoadMoreLayoutStatus.aboutToBeDeleted();
        this.___privateHeaderMarginTop.aboutToBeDeleted();
        this.___privateHeaderMarginDuration.aboutToBeDeleted();
        this.___privateRotateAngle.aboutToBeDeleted();
        this.___privateFooterMarginBottom.aboutToBeDeleted();
        this.___privateFooterMarginDuration.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__parentNestedScroll.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.___privateEnabled.aboutToBeDeleted();
        this.___privateEnableScrollInteraction.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get controller() {
        return this.__controller.get();
    }
    set controller(i4) {
        this.__controller.set(i4);
    }
    get _privateRefreshLayoutStatus() {
        return this.___privateRefreshLayoutStatus.get();
    }
    set _privateRefreshLayoutStatus(h4) {
        this.___privateRefreshLayoutStatus.set(h4);
    }
    get _privateLoadMoreLayoutStatus() {
        return this.___privateLoadMoreLayoutStatus.get();
    }
    set _privateLoadMoreLayoutStatus(g4) {
        this.___privateLoadMoreLayoutStatus.set(g4);
    }
    get _privateHeaderMarginTop() {
        return this.___privateHeaderMarginTop.get();
    }
    set _privateHeaderMarginTop(f4) {
        this.___privateHeaderMarginTop.set(f4);
    }
    get _privateHeaderMarginDuration() {
        return this.___privateHeaderMarginDuration.get();
    }
    set _privateHeaderMarginDuration(e4) {
        this.___privateHeaderMarginDuration.set(e4);
    }
    get _privateRotateAngle() {
        return this.___privateRotateAngle.get();
    }
    set _privateRotateAngle(d4) {
        this.___privateRotateAngle.set(d4);
    }
    get _privateFooterMarginBottom() {
        return this.___privateFooterMarginBottom.get();
    }
    set _privateFooterMarginBottom(c4) {
        this.___privateFooterMarginBottom.set(c4);
    }
    get _privateFooterMarginDuration() {
        return this.___privateFooterMarginDuration.get();
    }
    set _privateFooterMarginDuration(b4) {
        this.___privateFooterMarginDuration.set(b4);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(a4) {
        this.__enableRefresh.set(a4);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(z3) {
        this.__enableLoadMore.set(z3);
    }
    get parentNestedScroll() {
        return this.__parentNestedScroll.get();
    }
    set parentNestedScroll(y3) {
        this.__parentNestedScroll.set(y3);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(x3) {
        this.__showEmptyLayout.set(x3);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(w3) {
        this.__showErrorLayout.set(w3);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(v3) {
        this.__showLoadingLayout.set(v3);
    }
    get _privateEnabled() {
        return this.___privateEnabled.get();
    }
    set _privateEnabled(u3) {
        this.___privateEnabled.set(u3);
    }
    get _privateEnableScrollInteraction() {
        return this.___privateEnableScrollInteraction.get();
    }
    set _privateEnableScrollInteraction(t3) {
        this.___privateEnableScrollInteraction.set(t3);
    }
    listenerRefreshLayoutStatus() {
        this.controller.setRefreshLayoutStatus(this._privateRefreshLayoutStatus);
    }
    listenerLoadMoreLayoutStatus() {
        this.controller.setLoadMoreLayoutStatus(this._privateLoadMoreLayoutStatus);
    }
    listenerController() {
        if (this.controller.closeRefresh) {
            this.endRefresh(true);
        }
        if (this.controller.closeLoadMore) {
            this.endLoading(true);
        }
        if (this.controller.getEdge() != undefined) {
            if (this.onRefreshScrollEdge != undefined) {
                this.onRefreshScrollEdge(this.controller.getEdge());
            }
            this.controller?.scrollEdge(undefined);
        }
        if (this.controller.getScrollToIndex() != undefined) {
            if (this.onRefreshScrollToIndex != undefined) {
                this.onRefreshScrollToIndex(this.controller.getScrollToIndex());
            }
            this.controller?.scrollToIndex(undefined);
        }
        if (this.controller.isAutoRefresh) {
            this.autoRefresh();
            this.controller?.autoRefresh(false);
        }
    }
    aboutToAppear() {
        if (this.refreshHeaderAttribute != null) {
            this.refreshHeaderAttribute(this._refreshHeaderAttr);
        }
        else {
            this._refreshHeaderAttr = RefreshConfig.getInstance().getRefreshHeaderAttr();
        }
        if (this.loadMoreFooterAttribute != null) {
            this.loadMoreFooterAttribute(this._loadMoreFooterAttr);
        }
        this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
    }
    autoRefresh() {
        this._privateHeaderMarginDuration = 500;
        this.actionUpdate(this._refreshHeaderAttr.height - 1);
        setTimeout(() => {
            this.actionUpdate(this._refreshHeaderAttr.height);
        }, 300);
        setTimeout(() => {
            this.actionEnd();
        }, 500);
    }
    initialRender() {
        this.observeComponentCreation2((n3, o3) => {
            Column.create();
            Context.animation({
                duration: this._privateFooterMarginDuration,
                onFinish: () => {
                    this._privateFooterMarginDuration = 0;
                }
            });
            Column.enabled(this._privateEnabled);
            Column.width(this.layoutWidth);
            Column.height(this.layoutHeight);
            Column.padding({ bottom: this._privateFooterMarginBottom });
            Context.animation(null);
            Column.zIndex(-1);
            Gesture.create(GesturePriority.Parallel);
            PanGesture.create(new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down }));
            PanGesture.onActionStart((s3) => {
                if (s3 == undefined) {
                    return;
                }
                this._privateTouchDownY = s3?.offsetY;
                this._privateTouchUpY = s3?.offsetY;
                this.startRefresh();
                this.startLoading();
            });
            PanGesture.onActionUpdate((r3) => {
                if (r3 == undefined) {
                    return;
                }
                this.actionUpdate(r3.offsetY);
            });
            PanGesture.onActionEnd(() => {
                this.actionEnd();
            });
            PanGesture.onActionCancel(() => {
                this.actionEnd();
            });
            PanGesture.pop();
            Gesture.pop();
            Column.onAreaChange((p3, q3) => {
                if (this.onGlobalPosition != undefined) {
                    this.onGlobalPosition(Number(q3.globalPosition.y));
                }
            });
        }, Column);
        this.observeComponentCreation2((x2, y2) => {
            If.create();
            if (this.onRefresh != undefined && this.enableRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((l3, m3) => {
                        Column.create();
                        Context.animation({
                            duration: this._privateHeaderMarginDuration
                        });
                        Column.width(this._refreshHeaderAttr.width);
                        Column.height(this._refreshHeaderAttr.height);
                        Column.margin({ top: this._privateHeaderMarginTop });
                        Context.animation(null);
                    }, Column);
                    this.observeComponentCreation2((z2, a3) => {
                        If.create();
                        if (this.headerRefreshLayout != undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.headerRefreshLayout.bind(this)(this._privateRefreshLayoutStatus);
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((b3, c3) => {
                                    If.create();
                                    if (this._refreshHeaderAttr.headerType == RefreshHeaderType.DEFAULT) {
                                        this.ifElseBranchUpdateFunction(0, () => {
                                            {
                                                this.observeComponentCreation2((h3, i3) => {
                                                    if (i3) {
                                                        let j3 = new RefreshDefaultHeader(this, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            rotateAngle: this._privateRotateAngle,
                                                            refreshHeaderAttr: this._refreshHeaderAttr
                                                        }, undefined, h3, () => { }, { page: "refresh/src/main/ets/floor/FloorRefreshLayout.ets", line: 167, col: 15 });
                                                        ViewPU.create(j3);
                                                        let k3 = () => {
                                                            return {
                                                                refreshStatus: this._privateRefreshLayoutStatus,
                                                                rotateAngle: this._privateRotateAngle,
                                                                refreshHeaderAttr: this._refreshHeaderAttr
                                                            };
                                                        };
                                                        j3.paramsGenerator_ = k3;
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(h3, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            rotateAngle: this._privateRotateAngle
                                                        });
                                                    }
                                                }, { name: "RefreshDefaultHeader" });
                                            }
                                        });
                                    }
                                    else if (this._refreshHeaderAttr.headerType == RefreshHeaderType.POINTS) {
                                        this.ifElseBranchUpdateFunction(1, () => {
                                            {
                                                this.observeComponentCreation2((d3, e3) => {
                                                    if (e3) {
                                                        let f3 = new RefreshHeaderPoints(this, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            refreshHeaderAttr: this._refreshHeaderAttr
                                                        }, undefined, d3, () => { }, { page: "refresh/src/main/ets/floor/FloorRefreshLayout.ets", line: 173, col: 15 });
                                                        ViewPU.create(f3);
                                                        let g3 = () => {
                                                            return {
                                                                refreshStatus: this._privateRefreshLayoutStatus,
                                                                refreshHeaderAttr: this._refreshHeaderAttr
                                                            };
                                                        };
                                                        f3.paramsGenerator_ = g3;
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(d3, {
                                                            refreshStatus: this._privateRefreshLayoutStatus
                                                        });
                                                    }
                                                }, { name: "RefreshHeaderPoints" });
                                            }
                                        });
                                    }
                                    else {
                                        this.ifElseBranchUpdateFunction(2, () => {
                                        });
                                    }
                                }, If);
                                If.pop();
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((v2, w2) => {
            Scroll.create(this.scroller);
            Scroll.scrollBar(BarState.Off);
            Scroll.nestedScroll(ObservedObject.GetRawObject(this.parentNestedScroll));
            Scroll.onScroll(this.onScroll);
            Scroll.onScrollEdge(this.onScrollEdge);
            Scroll.onScrollStart(this.onScrollStart);
            Scroll.onScrollStop(this.onScrollStop);
            Scroll.onTouch(this.onScrollTouchEvent);
            Scroll.enableScrollInteraction(this._privateEnableScrollInteraction);
        }, Scroll);
        this.observeComponentCreation2((t2, u2) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((p2, q2) => {
            If.create();
            if (this.showEmptyLayout && this.emptyLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.emptyLayout.bind(this)();
                });
            }
            else if (this.showErrorLayout && this.errorLayout != undefined) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.errorLayout.bind(this)();
                });
            }
            else if (this.showLoadingLayout && this.loadingLayout != undefined) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.loadingLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((r2, s2) => {
                        If.create();
                        if (this.itemLayout != undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.itemLayout.bind(this)();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((f2, g2) => {
            If.create();
            if (this.onLoadMore != undefined && this.enableLoadMore) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((n2, o2) => {
                        Column.create();
                    }, Column);
                    this.observeComponentCreation2((h2, i2) => {
                        If.create();
                        if (this.footerLoadLayout != undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.footerLoadLayout.bind(this)(this._privateLoadMoreLayoutStatus);
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                {
                                    this.observeComponentCreation2((j2, k2) => {
                                        if (k2) {
                                            let l2 = new RefreshDefaultFooter(this, {
                                                loadMoreStatus: this._privateLoadMoreLayoutStatus,
                                                loadMoreFooterAttr: this._loadMoreFooterAttr
                                            }, undefined, j2, () => { }, { page: "refresh/src/main/ets/floor/FloorRefreshLayout.ets", line: 220, col: 13 });
                                            ViewPU.create(l2);
                                            let m2 = () => {
                                                return {
                                                    loadMoreStatus: this._privateLoadMoreLayoutStatus,
                                                    loadMoreFooterAttr: this._loadMoreFooterAttr
                                                };
                                            };
                                            l2.paramsGenerator_ = m2;
                                        }
                                        else {
                                            this.updateStateVarsOfChildByElmtId(j2, {
                                                loadMoreStatus: this._privateLoadMoreLayoutStatus
                                            });
                                        }
                                    }, { name: "RefreshDefaultFooter" });
                                }
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    actionUpdate(y1) {
        if (this._privateRefreshLayoutStatus == RefreshLayoutStatus.Refreshing
            || this._privateLoadMoreLayoutStatus == LoadMoreLayoutStatus.Loading) {
            return;
        }
        let z1 = y1 - this._privateTouchDownY;
        if (this._privatePrivateIsRefresh && z1 < 0) {
            this.changeScrollInteraction(true);
        }
        if (this.onScrollTouch != null) {
            this.onScrollTouch(z1);
        }
        if (this.isSecondFloorScroll) {
            if (this.controller.isRefreshStart) {
                this._privateEnableScrollInteraction = z1 < 0;
            }
            else {
                this._privateEnableScrollInteraction = true;
            }
        }
        if (z1 > 0 && this.onRefresh != undefined && this.enableRefresh) {
            if (!this.controller.isRefreshStart) {
                this._privateTouchDownY = y1;
                return;
            }
            this._privatePrivateIsRefresh = true;
            this.changeScrollInteraction(false);
            let e2 = this._refreshHeaderAttr.height;
            if (this.scrollSpringHeight != undefined) {
                e2 = this.scrollSpringHeight;
            }
            if (z1 >= e2) {
                if (this.scrollSpringHeight == undefined) {
                    this._privateHeaderMarginTop = 0;
                    this._privateRefreshLayoutStatus = RefreshLayoutStatus.Release;
                    this._privateRotateAngle = 180;
                }
                if (z1 > this._privateTouchRefreshHeight) {
                    this._privateTouchDownY = y1 - e2;
                    this._privateTouchRefreshHeight = z1;
                }
            }
            else {
                if (this.scrollSpringHeight != undefined && z1 >= this._refreshHeaderAttr.height) {
                    this._privateRefreshLayoutStatus = RefreshLayoutStatus.Release;
                    this._privateRotateAngle = 180;
                }
                else {
                    this._privateRotateAngle = 0;
                    this._privateRefreshLayoutStatus = RefreshLayoutStatus.Pulling;
                }
                this._privateHeaderMarginTop = -(this._refreshHeaderAttr.height - z1);
            }
        }
        else if (z1 < 0 && this.onLoadMore != undefined && this.enableLoadMore) {
            if (!this.controller.isRefreshEnd && this._privateFooterMarginBottom == 0) {
                this._privateTouchUpY = y1;
                return;
            }
            this._privatePrivateIsRefresh = false;
            let a2 = y1 - this._privateTouchUpY;
            let b2 = Math.abs(a2);
            if (b2 >= this._privateTouchLoadingHeight) {
                this._privateTouchLoadingHeight = b2;
            }
            let c2 = this._privateTouchLoadingHeight - b2;
            let d2 = this._loadMoreFooterAttr.height;
            if (this.scrollSpringHeight != undefined) {
                d2 = this.scrollSpringHeight;
            }
            if (b2 >= d2) {
                if (this.scrollSpringHeight == undefined) {
                    if (c2 < 1) {
                        if (this.controller.isFooterNothing) {
                            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                        }
                        else {
                            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
                        }
                    }
                    else {
                        this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
                    }
                }
                this._privateFooterMarginBottom = d2 - c2;
            }
            else {
                if (this.scrollSpringHeight != undefined
                    && this._privateFooterMarginBottom >= this._loadMoreFooterAttr.height) {
                    if (this.controller.isFooterNothing) {
                        this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                    }
                    else {
                        this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
                    }
                }
                else {
                    if (this.controller.isFooterNothing) {
                        this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                    }
                    else {
                        this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
                    }
                }
                this._privateFooterMarginBottom = b2 - c2;
            }
        }
        if (this.onScrollDirection != undefined) {
            this.onScrollDirection(this._privatePrivateIsRefresh);
        }
    }
    actionEnd() {
        if (this._privatePrivateIsRefresh) {
            if (this._privateRefreshLayoutStatus == RefreshLayoutStatus.Release) {
                if (this.scrollSpringHeight != undefined) {
                    this._privateHeaderMarginTop = 0;
                    this._privateHeaderMarginDuration = 300;
                }
                this._privateRefreshLayoutStatus = RefreshLayoutStatus.Refreshing;
                if (this.onRefresh != undefined && this.enableRefresh) {
                    this.onRefresh();
                }
            }
            else {
                if (this._privateRefreshLayoutStatus != RefreshLayoutStatus.Refreshing) {
                    this.endRefresh(false);
                }
            }
        }
        else {
            if (this._privateLoadMoreLayoutStatus == LoadMoreLayoutStatus.Release) {
                this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Loading;
                if (this.scrollSpringHeight != undefined) {
                    this._privateFooterMarginBottom = this._loadMoreFooterAttr.height;
                    this._privateFooterMarginDuration = 300;
                }
                this._privateEnabled = false;
                this.changeScrollInteraction(false);
                if (this.onLoadMore != undefined && this.enableLoadMore) {
                    this.onLoadMore();
                }
            }
            else {
                if (this._privateLoadMoreLayoutStatus != LoadMoreLayoutStatus.Loading) {
                    this.endLoading(false);
                }
            }
        }
    }
    startRefresh() {
        if (this._privateRefreshLayoutStatus != RefreshLayoutStatus.Refreshing) {
            this._privateHeaderMarginDuration = 0;
            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Pulling;
            this.controller.closeRefresh = false;
        }
    }
    startLoading() {
        if (this._privateLoadMoreLayoutStatus != LoadMoreLayoutStatus.Loading) {
            this._privateFooterMarginDuration = 0;
            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
            this.controller.closeLoadMore = false;
        }
    }
    endRefresh(x1) {
        this.controller.closeRefresh = false;
        if (x1) {
            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Finish;
        }
        this.changeScrollInteraction(true);
        clearTimeout(this._privateEndRefreshTimeout);
        this._privateEndRefreshTimeout = setTimeout(() => {
            this._privateHeaderMarginDuration = 200;
            this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
        }, x1 ? 300 : 0);
    }
    endLoading(w1) {
        this.controller.closeLoadMore = false;
        if (w1) {
            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Finish;
        }
        this.changeScrollInteraction(true);
        this._privateEnabled = true;
        this._privateTouchLoadingHeight = 0;
        setTimeout(() => {
            this._privateFooterMarginBottom = 0;
            this._privateFooterMarginDuration = 200;
        }, w1 ? 300 : 0);
    }
    changeScrollInteraction(v1) {
        if (this.enableScrollInteraction != undefined) {
            this.enableScrollInteraction(v1);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
