if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshHeaderType } from '../constants/RefreshHeaderType';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
import { SfRefreshController } from '../controller/SfRefreshController';
import { SfRefreshHeaderPoints } from '../view/SfRefreshHeaderPoints';
import { SfRefreshHeaderView } from '../view/SfRefreshHeaderView';
export class SecondFloorLayout extends ViewPU {
    constructor(y10, z10, a11, b11 = -1, c11 = undefined, d11) {
        super(y10, a11, b11, d11);
        if (typeof c11 === "function") {
            this.paramsGenerator_ = c11;
        }
        this.firstFloorView = undefined;
        this.secondFloorView = undefined;
        this.topFixedView = undefined;
        this.refreshHeaderView = undefined;
        this._privateRefreshHeaderAttr = new RefreshHeaderAttr();
        this.refreshHeaderAttribute = undefined;
        this.isNeedHalfFloor = false;
        this.enableScrollInteraction = undefined;
        this.__sfController = new ObservedPropertyObjectPU(new SfRefreshController(), this, "sfController");
        this.onScrollStatus = undefined;
        this.onChangeScrollStatus = undefined;
        this.onSecondFloorScrollStatus = undefined;
        this.onRefresh = undefined;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(z10.enableRefresh, this, "enableRefresh");
        this.___privateTopViewOpacity = new ObservedPropertySimplePU(1, this, "_privateTopViewOpacity");
        this.___privateTopViewHeight = new ObservedPropertySimplePU(0, this, "_privateTopViewHeight");
        this._privateTouchDownY = 0;
        this.___privateEndActionY = new ObservedPropertySimplePU(0, this, "_privateEndActionY");
        this.___privateHeaderMarginTop = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginTop");
        this.___privateHeaderMarginDuration = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginDuration");
        this.___privateScrollStatus = new ObservedPropertySimplePU(RefreshLayoutStatus.Finish, this, "_privateScrollStatus");
        this.___privateRotateAngle = new ObservedPropertySimplePU(0, this, "_privateRotateAngle");
        this.__showSecondFloorStatus = new SynchedPropertySimpleOneWayPU(z10.showSecondFloorStatus, this, "showSecondFloorStatus");
        this._privateWindowHeight = 0;
        this._privateAnimationDuration = 400;
        this.__isScrollSecondFloor = new SynchedPropertySimpleOneWayPU(z10.isScrollSecondFloor, this, "isScrollSecondFloor");
        this.onScrollDistance = undefined;
        this.onActionStart = undefined;
        this.onActionEnd = undefined;
        this.onActionUpdate = undefined;
        this.___privateEnabled = new ObservedPropertySimplePU(true, this, "_privateEnabled");
        this.childScroller = undefined;
        this.halfFloorHeight = undefined;
        this.halfFloorGap = 28;
        this.opacityDistance = 50;
        this.pullDownDistance = 50;
        this.releaseDistance = 0;
        this.__isHideHeader = new ObservedPropertySimplePU(false, this, "isHideHeader");
        this.isScrollHalfFloor = false;
        this.isCancelHalfFloorStatus = true;
        this._privateTouchDamping = 0;
        this._tempStatus = RefreshLayoutStatus.Finish;
        this.setInitiallyProvidedValue(z10);
        this.declareWatch("sfController", this.listenerController);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(x10) {
        if (x10.firstFloorView !== undefined) {
            this.firstFloorView = x10.firstFloorView;
        }
        if (x10.secondFloorView !== undefined) {
            this.secondFloorView = x10.secondFloorView;
        }
        if (x10.topFixedView !== undefined) {
            this.topFixedView = x10.topFixedView;
        }
        if (x10.refreshHeaderView !== undefined) {
            this.refreshHeaderView = x10.refreshHeaderView;
        }
        if (x10._privateRefreshHeaderAttr !== undefined) {
            this._privateRefreshHeaderAttr = x10._privateRefreshHeaderAttr;
        }
        if (x10.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = x10.refreshHeaderAttribute;
        }
        if (x10.isNeedHalfFloor !== undefined) {
            this.isNeedHalfFloor = x10.isNeedHalfFloor;
        }
        if (x10.enableScrollInteraction !== undefined) {
            this.enableScrollInteraction = x10.enableScrollInteraction;
        }
        if (x10.sfController !== undefined) {
            this.sfController = x10.sfController;
        }
        if (x10.onScrollStatus !== undefined) {
            this.onScrollStatus = x10.onScrollStatus;
        }
        if (x10.onChangeScrollStatus !== undefined) {
            this.onChangeScrollStatus = x10.onChangeScrollStatus;
        }
        if (x10.onSecondFloorScrollStatus !== undefined) {
            this.onSecondFloorScrollStatus = x10.onSecondFloorScrollStatus;
        }
        if (x10.onRefresh !== undefined) {
            this.onRefresh = x10.onRefresh;
        }
        if (x10.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (x10._privateTopViewOpacity !== undefined) {
            this._privateTopViewOpacity = x10._privateTopViewOpacity;
        }
        if (x10._privateTopViewHeight !== undefined) {
            this._privateTopViewHeight = x10._privateTopViewHeight;
        }
        if (x10._privateTouchDownY !== undefined) {
            this._privateTouchDownY = x10._privateTouchDownY;
        }
        if (x10._privateEndActionY !== undefined) {
            this._privateEndActionY = x10._privateEndActionY;
        }
        if (x10._privateHeaderMarginTop !== undefined) {
            this._privateHeaderMarginTop = x10._privateHeaderMarginTop;
        }
        if (x10._privateHeaderMarginDuration !== undefined) {
            this._privateHeaderMarginDuration = x10._privateHeaderMarginDuration;
        }
        if (x10._privateScrollStatus !== undefined) {
            this._privateScrollStatus = x10._privateScrollStatus;
        }
        if (x10._privateRotateAngle !== undefined) {
            this._privateRotateAngle = x10._privateRotateAngle;
        }
        if (x10.showSecondFloorStatus === undefined) {
            this.__showSecondFloorStatus.set(false);
        }
        if (x10._privateWindowHeight !== undefined) {
            this._privateWindowHeight = x10._privateWindowHeight;
        }
        if (x10._privateAnimationDuration !== undefined) {
            this._privateAnimationDuration = x10._privateAnimationDuration;
        }
        if (x10.isScrollSecondFloor === undefined) {
            this.__isScrollSecondFloor.set(true);
        }
        if (x10.onScrollDistance !== undefined) {
            this.onScrollDistance = x10.onScrollDistance;
        }
        if (x10.onActionStart !== undefined) {
            this.onActionStart = x10.onActionStart;
        }
        if (x10.onActionEnd !== undefined) {
            this.onActionEnd = x10.onActionEnd;
        }
        if (x10.onActionUpdate !== undefined) {
            this.onActionUpdate = x10.onActionUpdate;
        }
        if (x10._privateEnabled !== undefined) {
            this._privateEnabled = x10._privateEnabled;
        }
        if (x10.childScroller !== undefined) {
            this.childScroller = x10.childScroller;
        }
        if (x10.halfFloorHeight !== undefined) {
            this.halfFloorHeight = x10.halfFloorHeight;
        }
        if (x10.halfFloorGap !== undefined) {
            this.halfFloorGap = x10.halfFloorGap;
        }
        if (x10.opacityDistance !== undefined) {
            this.opacityDistance = x10.opacityDistance;
        }
        if (x10.pullDownDistance !== undefined) {
            this.pullDownDistance = x10.pullDownDistance;
        }
        if (x10.releaseDistance !== undefined) {
            this.releaseDistance = x10.releaseDistance;
        }
        if (x10.isHideHeader !== undefined) {
            this.isHideHeader = x10.isHideHeader;
        }
        if (x10.isScrollHalfFloor !== undefined) {
            this.isScrollHalfFloor = x10.isScrollHalfFloor;
        }
        if (x10.isCancelHalfFloorStatus !== undefined) {
            this.isCancelHalfFloorStatus = x10.isCancelHalfFloorStatus;
        }
        if (x10._privateTouchDamping !== undefined) {
            this._privateTouchDamping = x10._privateTouchDamping;
        }
        if (x10._tempStatus !== undefined) {
            this._tempStatus = x10._tempStatus;
        }
    }
    updateStateVars(w10) {
        this.__enableRefresh.reset(w10.enableRefresh);
        this.__showSecondFloorStatus.reset(w10.showSecondFloorStatus);
        this.__isScrollSecondFloor.reset(w10.isScrollSecondFloor);
    }
    purgeVariableDependenciesOnElmtId(v10) {
        this.__sfController.purgeDependencyOnElmtId(v10);
        this.__enableRefresh.purgeDependencyOnElmtId(v10);
        this.___privateTopViewOpacity.purgeDependencyOnElmtId(v10);
        this.___privateTopViewHeight.purgeDependencyOnElmtId(v10);
        this.___privateEndActionY.purgeDependencyOnElmtId(v10);
        this.___privateHeaderMarginTop.purgeDependencyOnElmtId(v10);
        this.___privateHeaderMarginDuration.purgeDependencyOnElmtId(v10);
        this.___privateScrollStatus.purgeDependencyOnElmtId(v10);
        this.___privateRotateAngle.purgeDependencyOnElmtId(v10);
        this.__showSecondFloorStatus.purgeDependencyOnElmtId(v10);
        this.__isScrollSecondFloor.purgeDependencyOnElmtId(v10);
        this.___privateEnabled.purgeDependencyOnElmtId(v10);
        this.__isHideHeader.purgeDependencyOnElmtId(v10);
    }
    aboutToBeDeleted() {
        this.__sfController.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.___privateTopViewOpacity.aboutToBeDeleted();
        this.___privateTopViewHeight.aboutToBeDeleted();
        this.___privateEndActionY.aboutToBeDeleted();
        this.___privateHeaderMarginTop.aboutToBeDeleted();
        this.___privateHeaderMarginDuration.aboutToBeDeleted();
        this.___privateScrollStatus.aboutToBeDeleted();
        this.___privateRotateAngle.aboutToBeDeleted();
        this.__showSecondFloorStatus.aboutToBeDeleted();
        this.__isScrollSecondFloor.aboutToBeDeleted();
        this.___privateEnabled.aboutToBeDeleted();
        this.__isHideHeader.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get sfController() {
        return this.__sfController.get();
    }
    set sfController(u10) {
        this.__sfController.set(u10);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(t10) {
        this.__enableRefresh.set(t10);
    }
    get _privateTopViewOpacity() {
        return this.___privateTopViewOpacity.get();
    }
    set _privateTopViewOpacity(s10) {
        this.___privateTopViewOpacity.set(s10);
    }
    get _privateTopViewHeight() {
        return this.___privateTopViewHeight.get();
    }
    set _privateTopViewHeight(r10) {
        this.___privateTopViewHeight.set(r10);
    }
    get _privateEndActionY() {
        return this.___privateEndActionY.get();
    }
    set _privateEndActionY(q10) {
        this.___privateEndActionY.set(q10);
    }
    get _privateHeaderMarginTop() {
        return this.___privateHeaderMarginTop.get();
    }
    set _privateHeaderMarginTop(p10) {
        this.___privateHeaderMarginTop.set(p10);
    }
    get _privateHeaderMarginDuration() {
        return this.___privateHeaderMarginDuration.get();
    }
    set _privateHeaderMarginDuration(o10) {
        this.___privateHeaderMarginDuration.set(o10);
    }
    get _privateScrollStatus() {
        return this.___privateScrollStatus.get();
    }
    set _privateScrollStatus(n10) {
        this.___privateScrollStatus.set(n10);
    }
    get _privateRotateAngle() {
        return this.___privateRotateAngle.get();
    }
    set _privateRotateAngle(m10) {
        this.___privateRotateAngle.set(m10);
    }
    get showSecondFloorStatus() {
        return this.__showSecondFloorStatus.get();
    }
    set showSecondFloorStatus(l10) {
        this.__showSecondFloorStatus.set(l10);
    }
    get isScrollSecondFloor() {
        return this.__isScrollSecondFloor.get();
    }
    set isScrollSecondFloor(k10) {
        this.__isScrollSecondFloor.set(k10);
    }
    get _privateEnabled() {
        return this.___privateEnabled.get();
    }
    set _privateEnabled(j10) {
        this.___privateEnabled.set(j10);
    }
    get isHideHeader() {
        return this.__isHideHeader.get();
    }
    set isHideHeader(i10) {
        this.__isHideHeader.set(i10);
    }
    listenerController() {
        if (this.sfController.closeRefresh) {
            this._privateScrollStatus = RefreshLayoutStatus.Finish;
            this.changeScrollStatus(this._privateScrollStatus);
            this.endAnimation(this._privateAnimationDuration);
            this.sfController.closeRefresh = false;
        }
        if (this.sfController.isAutoRefresh) {
            this.sfController.isAutoRefresh = false;
            this.autoRefresh();
        }
        if (this.sfController.getFirstFloor()) {
            this.endAnimation(100);
            this.sfController.backFirstFloor(false);
        }
    }
    autoRefresh() {
        this.scrollDistance(20);
        this._privateHeaderMarginDuration = this._privateAnimationDuration;
        this.downRefresh();
        this._privateTopViewOpacity = 0;
    }
    endAnimation(h10) {
        setTimeout(() => {
            this._privateHeaderMarginTop = 0;
            this._privateTopViewOpacity = 1;
            this._privateScrollStatus = RefreshLayoutStatus.FirstFloor;
            if (this.onScrollStatus != undefined) {
                this.onScrollStatus(RefreshLayoutStatus.FirstFloor);
            }
            if (this.onSecondFloorScrollStatus != undefined) {
                this.onSecondFloorScrollStatus(RefreshLayoutStatus.FirstFloor);
            }
            this.scrollDistance(0);
            this._privateEnabled = true;
        }, h10);
    }
    aboutToAppear() {
        if (this.refreshHeaderAttribute != undefined) {
            this.refreshHeaderAttribute(this._privateRefreshHeaderAttr);
        }
        this.changeScrollStatus(this._privateScrollStatus);
    }
    changeScrollStatus(g10) {
        if (this.onScrollStatus != undefined && this._tempStatus != g10) {
            this.onScrollStatus(g10);
            this._tempStatus = g10;
        }
        if (this.onSecondFloorScrollStatus != undefined) {
            this.onSecondFloorScrollStatus(g10);
        }
    }
    initialRender() {
        this.observeComponentCreation2((z9, a10) => {
            Stack.create();
            Stack.enabled(this._privateEnabled);
            Stack.width("100%");
            Stack.height("100%");
            Stack.alignContent(Alignment.TopStart);
            Stack.onAreaChange((e10, f10) => {
                this._privateWindowHeight = Number(f10.height);
            });
            Gesture.create(GesturePriority.Parallel);
            PanGesture.create(new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down }));
            PanGesture.onActionStart((d10) => {
                this.isHideHeader = false;
                this.isScrollHalfFloor = false;
                if (this.onActionStart != undefined) {
                    this.onActionStart();
                }
                this._privateHeaderMarginDuration = 0;
                this._privateTouchDownY = d10.offsetY;
            });
            PanGesture.onActionUpdate((b10) => {
                if (this._privateScrollStatus == RefreshLayoutStatus.HalfFloor && this.isCancelHalfFloorStatus) {
                    let c10 = b10.offsetY - this._privateTouchDownY;
                    if (c10 > 0) {
                        this.onActionTouchUpdate(b10);
                    }
                    else if (c10 < 0) {
                        this.isHideHeader = true;
                        this.isScrollHalfFloor = true;
                        this.onHalfFloorActionTouchUpdate(b10);
                    }
                }
                else {
                    this.onActionTouchUpdate(b10);
                }
            });
            PanGesture.onActionEnd(() => {
                this.onActionTouchEnd();
            });
            PanGesture.onActionCancel(() => {
                this.onActionTouchEnd();
            });
            PanGesture.pop();
            Gesture.pop();
        }, Stack);
        this.observeComponentCreation2((x9, y9) => {
            If.create();
            if (this.secondFloorView != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.secondFloorView.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((v9, w9) => {
            Column.create();
            Context.animation({
                duration: this._privateHeaderMarginDuration,
            });
            Column.margin({ top: this._privateHeaderMarginTop - this._privateTouchDamping });
            Context.animation(null);
            Column.hitTestBehavior(this._privateScrollStatus == RefreshLayoutStatus.HalfFloor ? HitTestMode.None :
                undefined);
        }, Column);
        this.observeComponentCreation2((j9, k9) => {
            If.create();
            if (this.refreshHeaderView != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.refreshHeaderView.bind(this)(this._privateScrollStatus);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((l9, m9) => {
                        If.create();
                        if (this._privateRefreshHeaderAttr.headerType == RefreshHeaderType.DEFAULT) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                {
                                    this.observeComponentCreation2((r9, s9) => {
                                        if (s9) {
                                            let t9 = new SfRefreshHeaderView(this, {
                                                rootHeight: this._privateTopViewHeight,
                                                scrollStatus: this._privateScrollStatus,
                                                rotateAngle: this._privateRotateAngle,
                                                refreshHeaderAttr: this._privateRefreshHeaderAttr
                                            }, undefined, r9, () => { }, { page: "refresh/src/main/ets/floor/SecondFloorLayout.ets", line: 143, col: 13 });
                                            ViewPU.create(t9);
                                            let u9 = () => {
                                                return {
                                                    rootHeight: this._privateTopViewHeight,
                                                    scrollStatus: this._privateScrollStatus,
                                                    rotateAngle: this._privateRotateAngle,
                                                    refreshHeaderAttr: this._privateRefreshHeaderAttr
                                                };
                                            };
                                            t9.paramsGenerator_ = u9;
                                        }
                                        else {
                                            this.updateStateVarsOfChildByElmtId(r9, {
                                                rootHeight: this._privateTopViewHeight,
                                                scrollStatus: this._privateScrollStatus,
                                                rotateAngle: this._privateRotateAngle
                                            });
                                        }
                                    }, { name: "SfRefreshHeaderView" });
                                }
                            });
                        }
                        else if (this._privateRefreshHeaderAttr.headerType == RefreshHeaderType.POINTS) {
                            this.ifElseBranchUpdateFunction(1, () => {
                                {
                                    this.observeComponentCreation2((n9, o9) => {
                                        if (o9) {
                                            let p9 = new SfRefreshHeaderPoints(this, {
                                                rootHeight: this._privateTopViewHeight,
                                                refreshStatus: this._privateScrollStatus,
                                                firstFloorMargin: this._privateHeaderMarginTop,
                                                refreshHeaderAttr: this._privateRefreshHeaderAttr,
                                                showSecondFloorStatus: this.showSecondFloorStatus,
                                                isHideHeader: this.isHideHeader
                                            }, undefined, n9, () => { }, { page: "refresh/src/main/ets/floor/SecondFloorLayout.ets", line: 151, col: 13 });
                                            ViewPU.create(p9);
                                            let q9 = () => {
                                                return {
                                                    rootHeight: this._privateTopViewHeight,
                                                    refreshStatus: this._privateScrollStatus,
                                                    firstFloorMargin: this._privateHeaderMarginTop,
                                                    refreshHeaderAttr: this._privateRefreshHeaderAttr,
                                                    showSecondFloorStatus: this.showSecondFloorStatus,
                                                    isHideHeader: this.isHideHeader
                                                };
                                            };
                                            p9.paramsGenerator_ = q9;
                                        }
                                        else {
                                            this.updateStateVarsOfChildByElmtId(n9, {
                                                rootHeight: this._privateTopViewHeight,
                                                refreshStatus: this._privateScrollStatus,
                                                firstFloorMargin: this._privateHeaderMarginTop,
                                                showSecondFloorStatus: this.showSecondFloorStatus,
                                                isHideHeader: this.isHideHeader
                                            });
                                        }
                                    }, { name: "SfRefreshHeaderPoints" });
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
        this.observeComponentCreation2((h9, i9) => {
            If.create();
            if (this.firstFloorView != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.firstFloorView.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((z8, a9) => {
            If.create();
            if (this.topFixedView != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((d9, e9) => {
                        Column.create();
                        Column.opacity(this._privateTopViewOpacity);
                        Column.onAreaChange((f9, g9) => {
                            this._privateTopViewHeight = Number(g9.height);
                        });
                        Column.visibility(this._privateTopViewOpacity == 0 ? Visibility.Hidden : Visibility.Visible);
                    }, Column);
                    this.observeComponentCreation2((b9, c9) => {
                        If.create();
                        if (this.topFixedView != undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.topFixedView.bind(this)();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
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
        Stack.pop();
    }
    onHalfFloorActionTouchUpdate(v8) {
        if (this.onActionUpdate != undefined) {
            this.onActionUpdate(v8);
        }
        if (this.childScroller != undefined) {
            if (this.childScroller?.getItemRect(0).y != 0) {
                this._privateTouchDownY = v8.offsetY;
            }
        }
        else {
            if (!this.sfController.isRefreshStart) {
                this._privateTouchDownY = v8.offsetY;
            }
        }
        let w8 = v8.offsetY - this._privateTouchDownY + this._privateEndActionY;
        let x8 = this.sfController.isRefreshStart;
        if (this.childScroller != undefined) {
            x8 = this.childScroller?.getItemRect(0).y == 0;
        }
        if (x8 && this.onRefresh != undefined && this.enableRefresh && w8 > 0) {
            this._privateHeaderMarginTop = w8;
            if (w8 <= this._privateTopViewHeight) {
                let y8 = w8 / (this._privateTopViewHeight - this.opacityDistance);
                this._privateTopViewOpacity = 1 - y8;
            }
            else {
                this._privateTopViewOpacity = 0;
            }
            this.scrollDistance(this._privateHeaderMarginTop);
        }
        else {
            this.scrollDistance(0);
        }
        if (this.onChangeScrollStatus != undefined) {
            this.onChangeScrollStatus(this._privateScrollStatus);
        }
    }
    onActionTouchUpdate(o8) {
        if (this.onActionUpdate != undefined) {
            this.onActionUpdate(o8);
        }
        if (!this.isScrollSecondFloor) {
            this._privateTouchDownY = o8.offsetY;
            return;
        }
        if (this.childScroller != undefined) {
            if (this.childScroller?.getItemRect(0).y != 0) {
                this._privateTouchDownY = o8.offsetY;
            }
        }
        else {
            if (!this.sfController.isRefreshStart) {
                this._privateTouchDownY = o8.offsetY;
            }
        }
        let p8 = o8.offsetY - this._privateTouchDownY + this._privateEndActionY;
        if (this._privateScrollStatus == RefreshLayoutStatus.SecondFloor) {
            if (o8.offsetY < 0) {
                this._privateScrollStatus = RefreshLayoutStatus.SecondFloorSlideUp;
            }
            return;
        }
        if (this._privateScrollStatus == RefreshLayoutStatus.Pulling && p8 <= 0) {
            this._privateHeaderMarginTop = 0;
        }
        let q8 = this.sfController.isRefreshStart;
        if (this.childScroller != undefined) {
            q8 = this.childScroller?.getItemRect(0).y == 0;
        }
        if (q8 && this.onRefresh != undefined && this.enableRefresh && p8 > 0) {
            if (this.enableScrollInteraction != undefined) {
                this.enableScrollInteraction(false);
            }
            this._privateHeaderMarginTop = p8;
            if (p8 <= this._privateTopViewHeight) {
                let u8 = p8 / (this._privateTopViewHeight - this.opacityDistance);
                this._privateTopViewOpacity = 1 - u8;
            }
            else {
                this._privateTopViewOpacity = 0;
            }
            let r8 = p8 < this._privateWindowHeight / 4;
            let s8 = p8 > this._privateWindowHeight / 4;
            if (this.releaseDistance != 0) {
                let t8 = this._privateTopViewHeight - this.pullDownDistance + this.releaseDistance;
                r8 = p8 < t8;
                s8 = p8 > t8;
            }
            if (p8 <= (this._privateTopViewHeight - this.pullDownDistance)) {
                this._privateRotateAngle = 0;
                this._privateScrollStatus = RefreshLayoutStatus.Pulling;
            }
            else if (p8 > (this._privateTopViewHeight - this.pullDownDistance) && r8) {
                this._privateRotateAngle = 180;
                this._privateScrollStatus = RefreshLayoutStatus.Release;
            }
            if (this.isNeedHalfFloor) {
                if (s8 && (p8 + this._privateTopViewHeight) < this._privateWindowHeight / 2) {
                    this._privateScrollStatus = RefreshLayoutStatus.ReleaseHalfFloor;
                }
                else if ((p8 + this._privateTopViewHeight) > this._privateWindowHeight / 2) {
                    this._privateScrollStatus = RefreshLayoutStatus.ReleaseSecondFloor;
                }
            }
            else {
                if (p8 > this._privateWindowHeight / 4) {
                    this._privateScrollStatus = RefreshLayoutStatus.ReleaseSecondFloor;
                }
            }
            this.scrollDistance(this._privateHeaderMarginTop);
        }
        else {
            this.scrollDistance(0);
        }
        if (this.onChangeScrollStatus != undefined) {
            this.onChangeScrollStatus(this._privateScrollStatus);
        }
    }
    scrollDistance(n8) {
        if (this.onScrollDistance != undefined) {
            this.onScrollDistance(n8);
        }
    }
    onActionTouchEnd() {
        if (this.isScrollHalfFloor) {
            this._privateScrollStatus = RefreshLayoutStatus.SecondFloorSlideUp;
        }
        if (this.onActionEnd != undefined) {
            this.onActionEnd();
        }
        if (this.enableScrollInteraction != undefined) {
            if (this._privateScrollStatus == RefreshLayoutStatus.HalfFloor
                || this._privateScrollStatus == RefreshLayoutStatus.ReleaseHalfFloor) {
                this.enableScrollInteraction(false);
            }
            else {
                this.enableScrollInteraction(true);
            }
        }
        this._privateEndActionY = 0;
        this._privateHeaderMarginDuration = this._privateAnimationDuration;
        if (this._privateScrollStatus == RefreshLayoutStatus.Pulling) {
            this._privateTopViewOpacity = 1;
            this._privateHeaderMarginTop = 0;
            this.scrollDistance(this._privateHeaderMarginTop);
        }
        else if (this._privateScrollStatus == RefreshLayoutStatus.Release) {
            this.downRefresh();
        }
        else if (this._privateScrollStatus == RefreshLayoutStatus.ReleaseHalfFloor
            && this.isNeedHalfFloor) {
            this._privateScrollStatus = RefreshLayoutStatus.HalfFloor;
            if (this.halfFloorHeight != undefined) {
                this._privateHeaderMarginTop = this.halfFloorHeight;
            }
            else {
                this._privateHeaderMarginTop = this._privateWindowHeight / 2 - this._privateTopViewHeight + this.halfFloorGap;
            }
            this._privateEndActionY = this._privateHeaderMarginTop;
            this.childScroller?.scrollTo({ xOffset: 0, yOffset: 0, animation: { duration: 100 } });
        }
        else if (this._privateScrollStatus == RefreshLayoutStatus.ReleaseSecondFloor) {
            this._privateScrollStatus = RefreshLayoutStatus.SecondFloor;
            this._privateHeaderMarginTop = this._privateWindowHeight;
        }
        else if (this._privateScrollStatus == RefreshLayoutStatus.SecondFloorSlideUp) {
            this._privateScrollStatus = RefreshLayoutStatus.FirstFloor;
            this._privateHeaderMarginTop = 0;
            setTimeout(() => {
                this._privateTopViewOpacity = 1;
            }, this._privateAnimationDuration);
            this.scrollDistance(this._privateHeaderMarginTop);
        }
        this.changeScrollStatus(this._privateScrollStatus);
    }
    downRefresh() {
        this._privateEnabled = false;
        this._privateHeaderMarginTop = this._privateTopViewHeight - this.pullDownDistance;
        this._privateScrollStatus = RefreshLayoutStatus.Refreshing;
        if (this.onRefresh != undefined) {
            this.onRefresh();
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
