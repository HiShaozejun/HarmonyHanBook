if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshDataSource } from './model/RefreshDataSource';
export class WaterFlowView extends ViewPU {
    constructor(u44, v44, w44, x44 = -1, y44 = undefined, z44) {
        super(u44, w44, x44, z44);
        if (typeof y44 === "function") {
            this.paramsGenerator_ = y44;
        }
        this.__columnsTemplate = new SynchedPropertySimpleOneWayPU(v44.columnsTemplate, this, "columnsTemplate");
        this.__columnSize = new SynchedPropertySimpleOneWayPU(v44.columnSize, this, "columnSize");
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.bgColor = Color.Transparent;
        this.sWidth = "100%";
        this.sHeight = undefined;
        this.__items = new SynchedPropertyObjectOneWayPU(v44.items, this, "items");
        this.itemView = undefined;
        this.scroller = new Scroller();
        this.__nestedScroll = new SynchedPropertyObjectOneWayPU(v44.nestedScroll, this, "nestedScroll");
        this.isRefresh = false;
        this.reachStart = undefined;
        this.reachEnd = undefined;
        this.isLazyData = false;
        this.lazyDataSource = undefined;
        this.lazyCachedCount = 1;
        this.onLazyDataSource = undefined;
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(v44.enableScrollInteraction, this, "enableScrollInteraction");
        this.isKeyGeneratorIndex = false;
        this.dataController = new DataController();
        this.sMargin = undefined;
        this.sPadding = undefined;
        this.onScrollIndex = undefined;
        this.onScroll = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.__refreshPosition = new ObservedPropertySimplePU(RefreshPositionEnum.TOP, this, "refreshPosition");
        this.onRefreshPosition = undefined;
        this.__isRefreshSticky = new SynchedPropertySimpleOneWayPU(v44.isRefreshSticky, this, "isRefreshSticky");
        this.onWaterFlowVisibleAreaChange = undefined;
        this.onWaterFlowItemVisibleAreaChange = undefined;
        this.setInitiallyProvidedValue(v44);
        this.declareWatch("columnSize", this.changeColumnSize);
        this.declareWatch("items", this.changeData);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(t44) {
        if (t44.columnsTemplate === undefined) {
            this.__columnsTemplate.set("1fr 1fr");
        }
        if (t44.columnSize === undefined) {
            this.__columnSize.set(0);
        }
        if (t44.columnsGap !== undefined) {
            this.columnsGap = t44.columnsGap;
        }
        if (t44.rowsGap !== undefined) {
            this.rowsGap = t44.rowsGap;
        }
        if (t44.bgColor !== undefined) {
            this.bgColor = t44.bgColor;
        }
        if (t44.sWidth !== undefined) {
            this.sWidth = t44.sWidth;
        }
        if (t44.sHeight !== undefined) {
            this.sHeight = t44.sHeight;
        }
        if (t44.items === undefined) {
            this.__items.set([]);
        }
        if (t44.itemView !== undefined) {
            this.itemView = t44.itemView;
        }
        if (t44.scroller !== undefined) {
            this.scroller = t44.scroller;
        }
        if (t44.nestedScroll === undefined) {
            this.__nestedScroll.set({
                scrollForward: NestedScrollMode.SELF_FIRST,
                scrollBackward: NestedScrollMode.PARENT_FIRST
            });
        }
        if (t44.isRefresh !== undefined) {
            this.isRefresh = t44.isRefresh;
        }
        if (t44.reachStart !== undefined) {
            this.reachStart = t44.reachStart;
        }
        if (t44.reachEnd !== undefined) {
            this.reachEnd = t44.reachEnd;
        }
        if (t44.isLazyData !== undefined) {
            this.isLazyData = t44.isLazyData;
        }
        if (t44.lazyDataSource !== undefined) {
            this.lazyDataSource = t44.lazyDataSource;
        }
        if (t44.lazyCachedCount !== undefined) {
            this.lazyCachedCount = t44.lazyCachedCount;
        }
        if (t44.onLazyDataSource !== undefined) {
            this.onLazyDataSource = t44.onLazyDataSource;
        }
        if (t44.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (t44.isKeyGeneratorIndex !== undefined) {
            this.isKeyGeneratorIndex = t44.isKeyGeneratorIndex;
        }
        if (t44.dataController !== undefined) {
            this.dataController = t44.dataController;
        }
        if (t44.sMargin !== undefined) {
            this.sMargin = t44.sMargin;
        }
        if (t44.sPadding !== undefined) {
            this.sPadding = t44.sPadding;
        }
        if (t44.onScrollIndex !== undefined) {
            this.onScrollIndex = t44.onScrollIndex;
        }
        if (t44.onScroll !== undefined) {
            this.onScroll = t44.onScroll;
        }
        if (t44.onScrollStart !== undefined) {
            this.onScrollStart = t44.onScrollStart;
        }
        if (t44.onScrollStop !== undefined) {
            this.onScrollStop = t44.onScrollStop;
        }
        if (t44.refreshPosition !== undefined) {
            this.refreshPosition = t44.refreshPosition;
        }
        if (t44.onRefreshPosition !== undefined) {
            this.onRefreshPosition = t44.onRefreshPosition;
        }
        if (t44.isRefreshSticky === undefined) {
            this.__isRefreshSticky.set(false);
        }
        if (t44.onWaterFlowVisibleAreaChange !== undefined) {
            this.onWaterFlowVisibleAreaChange = t44.onWaterFlowVisibleAreaChange;
        }
        if (t44.onWaterFlowItemVisibleAreaChange !== undefined) {
            this.onWaterFlowItemVisibleAreaChange = t44.onWaterFlowItemVisibleAreaChange;
        }
    }
    updateStateVars(s44) {
        this.__columnsTemplate.reset(s44.columnsTemplate);
        this.__columnSize.reset(s44.columnSize);
        this.__items.reset(s44.items);
        this.__nestedScroll.reset(s44.nestedScroll);
        this.__enableScrollInteraction.reset(s44.enableScrollInteraction);
        this.__isRefreshSticky.reset(s44.isRefreshSticky);
    }
    purgeVariableDependenciesOnElmtId(r44) {
        this.__columnsTemplate.purgeDependencyOnElmtId(r44);
        this.__columnSize.purgeDependencyOnElmtId(r44);
        this.__items.purgeDependencyOnElmtId(r44);
        this.__nestedScroll.purgeDependencyOnElmtId(r44);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(r44);
        this.__refreshPosition.purgeDependencyOnElmtId(r44);
        this.__isRefreshSticky.purgeDependencyOnElmtId(r44);
    }
    aboutToBeDeleted() {
        this.__columnsTemplate.aboutToBeDeleted();
        this.__columnSize.aboutToBeDeleted();
        this.__items.aboutToBeDeleted();
        this.__nestedScroll.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        this.__isRefreshSticky.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get columnsTemplate() {
        return this.__columnsTemplate.get();
    }
    set columnsTemplate(q44) {
        this.__columnsTemplate.set(q44);
    }
    get columnSize() {
        return this.__columnSize.get();
    }
    set columnSize(p44) {
        this.__columnSize.set(p44);
    }
    get items() {
        return this.__items.get();
    }
    set items(o44) {
        this.__items.set(o44);
    }
    get nestedScroll() {
        return this.__nestedScroll.get();
    }
    set nestedScroll(n44) {
        this.__nestedScroll.set(n44);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(m44) {
        this.__enableScrollInteraction.set(m44);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(l44) {
        this.__refreshPosition.set(l44);
    }
    get isRefreshSticky() {
        return this.__isRefreshSticky.get();
    }
    set isRefreshSticky(k44) {
        this.__isRefreshSticky.set(k44);
    }
    changeColumnSize() {
        if (this.columnSize != undefined && this.columnSize != 0) {
            this.columnsTemplate = "1fr ".repeat(this.columnSize);
        }
    }
    changeData() {
        this.dataController.refreshArray(this.items);
    }
    aboutToAppear() {
        if (!this.isLazyData && this.dataController != null) {
            this.dataController.init(this.items);
            this.dataController.refreshArrayCallback((j44) => {
                this.items = j44;
            });
        }
        if (this.onLazyDataSource != undefined) {
            this.isLazyData = true;
            this.lazyDataSource = new RefreshDataSource();
            this.lazyDataSource.initData(this.items);
            this.lazyDataSource.refreshArrayCallback((i44) => {
                this.items = i44;
            });
            this.onLazyDataSource(this.lazyDataSource);
        }
        else {
            this.isLazyData = this.lazyDataSource != undefined;
        }
    }
    initialRender() {
        this.observeComponentCreation2((n43, o43) => {
            If.create();
            if (this.isLazyData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((g44, h44) => {
                        WaterFlow.create({ scroller: this.scroller });
                        __WaterFlow__waterViewStyle(this);
                    }, WaterFlow);
                    {
                        const z43 = (d44, e44) => {
                            const f44 = d44;
                            this.getFlowItem.bind(this)(this, this.lazyDataSource.getData(e44), e44);
                        };
                        const a44 = (b44, c44) => this.isKeyGeneratorIndex ? c44.toString() :
                            JSON.stringify(b44) + "_" + c44;
                        LazyForEach.create("1", this, this.lazyDataSource, z43, a44);
                        LazyForEach.pop();
                    }
                    WaterFlow.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((x43, y43) => {
                        WaterFlow.create({ scroller: this.scroller });
                        __WaterFlow__waterViewStyle(this);
                    }, WaterFlow);
                    this.observeComponentCreation2((p43, q43) => {
                        ForEach.create();
                        const r43 = (u43, v43) => {
                            const w43 = u43;
                            this.getFlowItem.bind(this)(this, this.items[v43], v43);
                        };
                        this.forEachUpdateFunction(p43, this.items, r43, (s43, t43) => this.isKeyGeneratorIndex ? t43.toString() :
                            JSON.stringify(s43) + "_" + t43, true, true);
                    }, ForEach);
                    ForEach.pop();
                    WaterFlow.pop();
                });
            }
        }, If);
        If.pop();
    }
    getFlowItem(f43, g43, h43, i43 = null) {
        this.observeComponentCreation2((j43, k43) => {
            FlowItem.create();
            FlowItem.width('100%');
            FlowItem.onVisibleAreaChange([0.0, 1.0], (l43, m43) => {
                if (f43.onWaterFlowItemVisibleAreaChange != undefined) {
                    f43.onWaterFlowItemVisibleAreaChange(h43, l43, m43);
                }
            });
        }, FlowItem);
        this.itemView.bind(this)(g43, h43);
        FlowItem.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __WaterFlow__waterViewStyle(z42) {
    WaterFlow.cachedCount(z42.lazyCachedCount);
    WaterFlow.columnsTemplate(z42.columnsTemplate);
    WaterFlow.columnsGap(z42.columnsGap);
    WaterFlow.rowsGap(z42.rowsGap);
    WaterFlow.backgroundColor(z42.bgColor);
    WaterFlow.width(z42.sWidth);
    WaterFlow.height(z42.isRefreshSticky ? "100%" : z42.sHeight);
    WaterFlow.nestedScroll(z42.nestedScroll);
    WaterFlow.enableScrollInteraction(z42.enableScrollInteraction);
    WaterFlow.onScrollIndex((d43, e43) => {
        if (z42.onScrollIndex != undefined) {
            z42.onScrollIndex(d43, e43);
        }
    });
    WaterFlow.margin(z42.sMargin);
    WaterFlow.padding(z42.sPadding);
    WaterFlow.onScroll(z42.onScroll);
    WaterFlow.onScrollStart(z42.onScrollStart);
    WaterFlow.onScrollStop(z42.onScrollStop);
    WaterFlow.onReachStart(() => {
        z42.refreshPosition = RefreshPositionEnum.TOP;
        if (z42.onRefreshPosition != undefined) {
            z42.onRefreshPosition(z42.refreshPosition);
        }
    });
    WaterFlow.onReachEnd(() => {
        z42.refreshPosition = RefreshPositionEnum.BOTTOM;
        if (z42.onRefreshPosition != undefined) {
            z42.onRefreshPosition(z42.refreshPosition);
        }
    });
    WaterFlow.onVisibleAreaChange([0.0, 1.0], (b43, c43) => {
        if (z42.onWaterFlowVisibleAreaChange != undefined) {
            z42.onWaterFlowVisibleAreaChange(b43, c43);
        }
    });
    WaterFlow.onScrollFrameBegin((a43) => {
        if (z42.isRefreshSticky && z42.refreshPosition == RefreshPositionEnum.BOTTOM && !z42.scroller?.isAtEnd()) {
            z42.refreshPosition = RefreshPositionEnum.CENTER;
            if (z42.onRefreshPosition != undefined) {
                z42.onRefreshPosition(z42.refreshPosition);
            }
            return;
        }
        if ((z42.refreshPosition == RefreshPositionEnum.TOP && a43 <= 0) || (z42.refreshPosition == RefreshPositionEnum.BOTTOM && a43 >= 0)) {
            return { offsetRemain: 0 };
        }
        z42.refreshPosition = RefreshPositionEnum.CENTER;
        if (z42.onRefreshPosition != undefined) {
            z42.onRefreshPosition(z42.refreshPosition);
        }
        return { offsetRemain: a43 };
    });
}
