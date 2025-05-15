if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshPositionEnum } from '../constants/RefreshPositionEnum';
import { DataController } from '../controller/DataController';
import { RefreshDataSource } from '../model/RefreshDataSource';
export class FloorWaterFlowView extends ViewPU {
    constructor(h8, i8, j8, k8 = -1, l8 = undefined, m8) {
        super(h8, j8, k8, m8);
        if (typeof l8 === "function") {
            this.paramsGenerator_ = l8;
        }
        this.columnsTemplate = "1fr 1fr";
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.bgColor = Color.Transparent;
        this.sWidth = "100%";
        this.sHeight = "100%";
        this.__items = new SynchedPropertyObjectOneWayPU(i8.items, this, "items");
        this.itemView = undefined;
        this.scroller = new Scroller();
        this.__nestedScroll = new SynchedPropertyObjectOneWayPU(i8.nestedScroll, this, "nestedScroll");
        this.isRefresh = false;
        this.reachPosition = undefined;
        this.isLazyData = false;
        this.lazyDataSource = undefined;
        this.lazyCachedCount = 1;
        this.onLazyDataSource = undefined;
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(i8.enableScrollInteraction, this, "enableScrollInteraction");
        this.isKeyGeneratorIndex = false;
        this.dataController = new DataController();
        this.sMargin = undefined;
        this.sPadding = undefined;
        this.onScrollIndex = undefined;
        this.onScroll = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.__refreshPosition = new ObservedPropertySimplePU(RefreshPositionEnum.TOP, this, "refreshPosition");
        this.setInitiallyProvidedValue(i8);
        this.declareWatch("items", this.changeData);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(g8) {
        if (g8.columnsTemplate !== undefined) {
            this.columnsTemplate = g8.columnsTemplate;
        }
        if (g8.columnsGap !== undefined) {
            this.columnsGap = g8.columnsGap;
        }
        if (g8.rowsGap !== undefined) {
            this.rowsGap = g8.rowsGap;
        }
        if (g8.bgColor !== undefined) {
            this.bgColor = g8.bgColor;
        }
        if (g8.sWidth !== undefined) {
            this.sWidth = g8.sWidth;
        }
        if (g8.sHeight !== undefined) {
            this.sHeight = g8.sHeight;
        }
        if (g8.items === undefined) {
            this.__items.set([]);
        }
        if (g8.itemView !== undefined) {
            this.itemView = g8.itemView;
        }
        if (g8.scroller !== undefined) {
            this.scroller = g8.scroller;
        }
        if (g8.nestedScroll === undefined) {
            this.__nestedScroll.set(undefined);
        }
        if (g8.isRefresh !== undefined) {
            this.isRefresh = g8.isRefresh;
        }
        if (g8.reachPosition !== undefined) {
            this.reachPosition = g8.reachPosition;
        }
        if (g8.isLazyData !== undefined) {
            this.isLazyData = g8.isLazyData;
        }
        if (g8.lazyDataSource !== undefined) {
            this.lazyDataSource = g8.lazyDataSource;
        }
        if (g8.lazyCachedCount !== undefined) {
            this.lazyCachedCount = g8.lazyCachedCount;
        }
        if (g8.onLazyDataSource !== undefined) {
            this.onLazyDataSource = g8.onLazyDataSource;
        }
        if (g8.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (g8.isKeyGeneratorIndex !== undefined) {
            this.isKeyGeneratorIndex = g8.isKeyGeneratorIndex;
        }
        if (g8.dataController !== undefined) {
            this.dataController = g8.dataController;
        }
        if (g8.sMargin !== undefined) {
            this.sMargin = g8.sMargin;
        }
        if (g8.sPadding !== undefined) {
            this.sPadding = g8.sPadding;
        }
        if (g8.onScrollIndex !== undefined) {
            this.onScrollIndex = g8.onScrollIndex;
        }
        if (g8.onScroll !== undefined) {
            this.onScroll = g8.onScroll;
        }
        if (g8.onScrollStart !== undefined) {
            this.onScrollStart = g8.onScrollStart;
        }
        if (g8.onScrollStop !== undefined) {
            this.onScrollStop = g8.onScrollStop;
        }
        if (g8.refreshPosition !== undefined) {
            this.refreshPosition = g8.refreshPosition;
        }
    }
    updateStateVars(f8) {
        this.__items.reset(f8.items);
        this.__nestedScroll.reset(f8.nestedScroll);
        this.__enableScrollInteraction.reset(f8.enableScrollInteraction);
    }
    purgeVariableDependenciesOnElmtId(e8) {
        this.__items.purgeDependencyOnElmtId(e8);
        this.__nestedScroll.purgeDependencyOnElmtId(e8);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(e8);
        this.__refreshPosition.purgeDependencyOnElmtId(e8);
    }
    aboutToBeDeleted() {
        this.__items.aboutToBeDeleted();
        this.__nestedScroll.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get items() {
        return this.__items.get();
    }
    set items(d8) {
        this.__items.set(d8);
    }
    get nestedScroll() {
        return this.__nestedScroll.get();
    }
    set nestedScroll(c8) {
        this.__nestedScroll.set(c8);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(b8) {
        this.__enableScrollInteraction.set(b8);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(a8) {
        this.__refreshPosition.set(a8);
    }
    changeData() {
        this.dataController.refreshArray(this.items);
    }
    aboutToAppear() {
        if (!this.isLazyData && this.dataController != null) {
            this.dataController.init(this.items);
            this.dataController.refreshArrayCallback((z7) => {
                this.items = z7;
            });
        }
        if (this.onLazyDataSource != undefined) {
            this.isLazyData = true;
            this.lazyDataSource = new RefreshDataSource();
            this.lazyDataSource.initData(this.items);
            this.lazyDataSource.refreshArrayCallback((y7) => {
                this.items = y7;
            });
            this.onLazyDataSource(this.lazyDataSource);
        }
        else {
            this.isLazyData = this.lazyDataSource != undefined;
        }
    }
    initialRender() {
        this.observeComponentCreation2((t7, u7) => {
            WaterFlow.create({ scroller: this.scroller });
            WaterFlow.cachedCount(this.lazyCachedCount);
            WaterFlow.columnsTemplate(this.columnsTemplate);
            WaterFlow.columnsGap(this.columnsGap);
            WaterFlow.rowsGap(this.rowsGap);
            WaterFlow.backgroundColor(this.bgColor);
            WaterFlow.width(this.sWidth);
            WaterFlow.height(this.sHeight);
            WaterFlow.nestedScroll(ObservedObject.GetRawObject(this.nestedScroll));
            WaterFlow.enableScrollInteraction(this.enableScrollInteraction);
            WaterFlow.onReachStart(() => {
                this.refreshPosition = RefreshPositionEnum.TOP;
                this.callBackPosition();
            });
            WaterFlow.onReachEnd(() => {
                this.refreshPosition = RefreshPositionEnum.BOTTOM;
                this.callBackPosition();
            });
            WaterFlow.onScrollFrameBegin((x7) => {
                if (this.refreshPosition == RefreshPositionEnum.TOP && x7 <= 0) {
                    this.scroller.scrollBy(0, x7);
                    return { offsetRemain: 0 };
                }
                if (!this.scroller?.isAtEnd()) {
                    this.refreshPosition = RefreshPositionEnum.CENTER;
                }
                if (this.refreshPosition == RefreshPositionEnum.BOTTOM && x7 >= 0) {
                    this.scroller.scrollBy(0, x7);
                    return { offsetRemain: 0 };
                }
                this.refreshPosition = RefreshPositionEnum.CENTER;
                this.callBackPosition();
                return { offsetRemain: x7 };
            });
            WaterFlow.onScrollIndex((v7, w7) => {
                if (this.onScrollIndex != undefined) {
                    this.onScrollIndex(v7, w7);
                }
            });
            WaterFlow.margin(this.sMargin);
            WaterFlow.padding(this.sPadding);
            WaterFlow.onScroll(this.onScroll);
            WaterFlow.onScrollStart(this.onScrollStart);
            WaterFlow.onScrollStop(this.onScrollStop);
        }, WaterFlow);
        this.observeComponentCreation2((c7, d7) => {
            If.create();
            if (this.isLazyData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        const m7 = (q7, r7) => {
                            const s7 = q7;
                            this.getFlowItem.bind(this)(this.lazyDataSource.getData(r7), r7, r7 == this.lazyDataSource.totalCount() - 1);
                        };
                        const n7 = (o7, p7) => this.isKeyGeneratorIndex ? p7.toString() :
                            JSON.stringify(o7) + "_" + p7;
                        LazyForEach.create("1", this, this.lazyDataSource, m7, n7);
                        LazyForEach.pop();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((e7, f7) => {
                        ForEach.create();
                        const g7 = (j7, k7) => {
                            const l7 = j7;
                            this.getFlowItem.bind(this)(this.items[k7], k7, k7 == this.items.length - 1);
                        };
                        this.forEachUpdateFunction(e7, this.items, g7, (h7, i7) => this.isKeyGeneratorIndex ? i7.toString() :
                            JSON.stringify(h7) + "_" + i7, true, true);
                    }, ForEach);
                    ForEach.pop();
                });
            }
        }, If);
        If.pop();
        WaterFlow.pop();
    }
    callBackPosition() {
        if (this.reachPosition != undefined) {
            this.reachPosition(this.refreshPosition);
        }
    }
    getFlowItem(s6, t6, u6, v6 = null) {
        this.observeComponentCreation2((w6, x6) => {
            If.create();
            if (this.isRefresh && (t6 == 0 || u6)) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((a7, b7) => {
                        FlowItem.create();
                        FlowItem.width('100%');
                    }, FlowItem);
                    this.itemView.bind(this)(s6, t6);
                    FlowItem.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((y6, z6) => {
                        FlowItem.create();
                        FlowItem.width('100%');
                    }, FlowItem);
                    this.itemView.bind(this)(s6, t6);
                    FlowItem.pop();
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
