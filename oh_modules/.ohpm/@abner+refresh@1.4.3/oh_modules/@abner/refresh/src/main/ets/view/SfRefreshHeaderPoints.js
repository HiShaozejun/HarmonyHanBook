if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
export class SfRefreshHeaderPoints extends ViewPU {
    constructor(y39, z39, a40, b40 = -1, c40 = undefined, d40) {
        super(y39, a40, b40, d40);
        if (typeof c40 === "function") {
            this.paramsGenerator_ = c40;
        }
        this.__rootHeight = new SynchedPropertySimpleOneWayPU(z39.rootHeight, this, "rootHeight");
        this.__refreshStatus = new SynchedPropertySimpleOneWayPU(z39.refreshStatus, this, "refreshStatus");
        this.refreshHeaderAttr = new RefreshHeaderAttr();
        this.___privateCircleColor1 = new ObservedPropertyObjectPU("#555555", this, "_privateCircleColor1");
        this.___privateCircleColor2 = new ObservedPropertyObjectPU("#808080", this, "_privateCircleColor2");
        this.___privateCircleColor3 = new ObservedPropertyObjectPU("#D5D5D5", this, "_privateCircleColor3");
        this.___privateCircleColor4 = new ObservedPropertyObjectPU("#555555", this, "_privateCircleColor4");
        this._privateInterval = 0;
        this.___privateFirstCircleScale = new ObservedPropertySimplePU(1, this, "_privateFirstCircleScale");
        this.___privateSecondCircleScale = new ObservedPropertySimplePU(1, this, "_privateSecondCircleScale");
        this.___privateThirdCircleScale = new ObservedPropertySimplePU(1, this, "_privateThirdCircleScale");
        this.___privateFirstCircleTranslate = new ObservedPropertySimplePU(0, this, "_privateFirstCircleTranslate");
        this.___privateSecondCircleTranslate = new ObservedPropertySimplePU(0, this, "_privateSecondCircleTranslate");
        this.___privateThirdCircleTranslate = new ObservedPropertySimplePU(0, this, "_privateThirdCircleTranslate");
        this._privateFirstTranslate = 1;
        this._privateSecondTranslate = 1;
        this._privateThirdTranslate = 1;
        this.__showSecondFloorStatus = new SynchedPropertySimpleOneWayPU(z39.showSecondFloorStatus, this, "showSecondFloorStatus");
        this.__showRefreshAnimation = new ObservedPropertySimplePU(false, this, "showRefreshAnimation");
        this.__firstFloorMargin = new SynchedPropertySimpleOneWayPU(z39.firstFloorMargin, this, "firstFloorMargin");
        this.__isHideHeader = new SynchedPropertySimpleOneWayPU(z39.isHideHeader, this, "isHideHeader");
        this.setInitiallyProvidedValue(z39);
        this.declareWatch("refreshStatus", this.changeState);
        this.declareWatch("firstFloorMargin", this.firstFloorMarginListener);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(x39) {
        if (x39.rootHeight === undefined) {
            this.__rootHeight.set(0);
        }
        if (x39.refreshStatus === undefined) {
            this.__refreshStatus.set(RefreshLayoutStatus.Pulling);
        }
        if (x39.refreshHeaderAttr !== undefined) {
            this.refreshHeaderAttr = x39.refreshHeaderAttr;
        }
        if (x39._privateCircleColor1 !== undefined) {
            this._privateCircleColor1 = x39._privateCircleColor1;
        }
        if (x39._privateCircleColor2 !== undefined) {
            this._privateCircleColor2 = x39._privateCircleColor2;
        }
        if (x39._privateCircleColor3 !== undefined) {
            this._privateCircleColor3 = x39._privateCircleColor3;
        }
        if (x39._privateCircleColor4 !== undefined) {
            this._privateCircleColor4 = x39._privateCircleColor4;
        }
        if (x39._privateInterval !== undefined) {
            this._privateInterval = x39._privateInterval;
        }
        if (x39._privateFirstCircleScale !== undefined) {
            this._privateFirstCircleScale = x39._privateFirstCircleScale;
        }
        if (x39._privateSecondCircleScale !== undefined) {
            this._privateSecondCircleScale = x39._privateSecondCircleScale;
        }
        if (x39._privateThirdCircleScale !== undefined) {
            this._privateThirdCircleScale = x39._privateThirdCircleScale;
        }
        if (x39._privateFirstCircleTranslate !== undefined) {
            this._privateFirstCircleTranslate = x39._privateFirstCircleTranslate;
        }
        if (x39._privateSecondCircleTranslate !== undefined) {
            this._privateSecondCircleTranslate = x39._privateSecondCircleTranslate;
        }
        if (x39._privateThirdCircleTranslate !== undefined) {
            this._privateThirdCircleTranslate = x39._privateThirdCircleTranslate;
        }
        if (x39._privateFirstTranslate !== undefined) {
            this._privateFirstTranslate = x39._privateFirstTranslate;
        }
        if (x39._privateSecondTranslate !== undefined) {
            this._privateSecondTranslate = x39._privateSecondTranslate;
        }
        if (x39._privateThirdTranslate !== undefined) {
            this._privateThirdTranslate = x39._privateThirdTranslate;
        }
        if (x39.showSecondFloorStatus === undefined) {
            this.__showSecondFloorStatus.set(false);
        }
        if (x39.showRefreshAnimation !== undefined) {
            this.showRefreshAnimation = x39.showRefreshAnimation;
        }
        if (x39.firstFloorMargin === undefined) {
            this.__firstFloorMargin.set(0);
        }
        if (x39.isHideHeader === undefined) {
            this.__isHideHeader.set(false);
        }
    }
    updateStateVars(w39) {
        this.__rootHeight.reset(w39.rootHeight);
        this.__refreshStatus.reset(w39.refreshStatus);
        this.__showSecondFloorStatus.reset(w39.showSecondFloorStatus);
        this.__firstFloorMargin.reset(w39.firstFloorMargin);
        this.__isHideHeader.reset(w39.isHideHeader);
    }
    purgeVariableDependenciesOnElmtId(v39) {
        this.__rootHeight.purgeDependencyOnElmtId(v39);
        this.__refreshStatus.purgeDependencyOnElmtId(v39);
        this.___privateCircleColor1.purgeDependencyOnElmtId(v39);
        this.___privateCircleColor2.purgeDependencyOnElmtId(v39);
        this.___privateCircleColor3.purgeDependencyOnElmtId(v39);
        this.___privateCircleColor4.purgeDependencyOnElmtId(v39);
        this.___privateFirstCircleScale.purgeDependencyOnElmtId(v39);
        this.___privateSecondCircleScale.purgeDependencyOnElmtId(v39);
        this.___privateThirdCircleScale.purgeDependencyOnElmtId(v39);
        this.___privateFirstCircleTranslate.purgeDependencyOnElmtId(v39);
        this.___privateSecondCircleTranslate.purgeDependencyOnElmtId(v39);
        this.___privateThirdCircleTranslate.purgeDependencyOnElmtId(v39);
        this.__showSecondFloorStatus.purgeDependencyOnElmtId(v39);
        this.__showRefreshAnimation.purgeDependencyOnElmtId(v39);
        this.__firstFloorMargin.purgeDependencyOnElmtId(v39);
        this.__isHideHeader.purgeDependencyOnElmtId(v39);
    }
    aboutToBeDeleted() {
        this.__rootHeight.aboutToBeDeleted();
        this.__refreshStatus.aboutToBeDeleted();
        this.___privateCircleColor1.aboutToBeDeleted();
        this.___privateCircleColor2.aboutToBeDeleted();
        this.___privateCircleColor3.aboutToBeDeleted();
        this.___privateCircleColor4.aboutToBeDeleted();
        this.___privateFirstCircleScale.aboutToBeDeleted();
        this.___privateSecondCircleScale.aboutToBeDeleted();
        this.___privateThirdCircleScale.aboutToBeDeleted();
        this.___privateFirstCircleTranslate.aboutToBeDeleted();
        this.___privateSecondCircleTranslate.aboutToBeDeleted();
        this.___privateThirdCircleTranslate.aboutToBeDeleted();
        this.__showSecondFloorStatus.aboutToBeDeleted();
        this.__showRefreshAnimation.aboutToBeDeleted();
        this.__firstFloorMargin.aboutToBeDeleted();
        this.__isHideHeader.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get rootHeight() {
        return this.__rootHeight.get();
    }
    set rootHeight(u39) {
        this.__rootHeight.set(u39);
    }
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(t39) {
        this.__refreshStatus.set(t39);
    }
    get _privateCircleColor1() {
        return this.___privateCircleColor1.get();
    }
    set _privateCircleColor1(s39) {
        this.___privateCircleColor1.set(s39);
    }
    get _privateCircleColor2() {
        return this.___privateCircleColor2.get();
    }
    set _privateCircleColor2(r39) {
        this.___privateCircleColor2.set(r39);
    }
    get _privateCircleColor3() {
        return this.___privateCircleColor3.get();
    }
    set _privateCircleColor3(q39) {
        this.___privateCircleColor3.set(q39);
    }
    get _privateCircleColor4() {
        return this.___privateCircleColor4.get();
    }
    set _privateCircleColor4(p39) {
        this.___privateCircleColor4.set(p39);
    }
    get _privateFirstCircleScale() {
        return this.___privateFirstCircleScale.get();
    }
    set _privateFirstCircleScale(o39) {
        this.___privateFirstCircleScale.set(o39);
    }
    get _privateSecondCircleScale() {
        return this.___privateSecondCircleScale.get();
    }
    set _privateSecondCircleScale(n39) {
        this.___privateSecondCircleScale.set(n39);
    }
    get _privateThirdCircleScale() {
        return this.___privateThirdCircleScale.get();
    }
    set _privateThirdCircleScale(m39) {
        this.___privateThirdCircleScale.set(m39);
    }
    get _privateFirstCircleTranslate() {
        return this.___privateFirstCircleTranslate.get();
    }
    set _privateFirstCircleTranslate(l39) {
        this.___privateFirstCircleTranslate.set(l39);
    }
    get _privateSecondCircleTranslate() {
        return this.___privateSecondCircleTranslate.get();
    }
    set _privateSecondCircleTranslate(k39) {
        this.___privateSecondCircleTranslate.set(k39);
    }
    get _privateThirdCircleTranslate() {
        return this.___privateThirdCircleTranslate.get();
    }
    set _privateThirdCircleTranslate(j39) {
        this.___privateThirdCircleTranslate.set(j39);
    }
    get showSecondFloorStatus() {
        return this.__showSecondFloorStatus.get();
    }
    set showSecondFloorStatus(i39) {
        this.__showSecondFloorStatus.set(i39);
    }
    get showRefreshAnimation() {
        return this.__showRefreshAnimation.get();
    }
    set showRefreshAnimation(h39) {
        this.__showRefreshAnimation.set(h39);
    }
    get firstFloorMargin() {
        return this.__firstFloorMargin.get();
    }
    set firstFloorMargin(g39) {
        this.__firstFloorMargin.set(g39);
    }
    get isHideHeader() {
        return this.__isHideHeader.get();
    }
    set isHideHeader(f39) {
        this.__isHideHeader.set(f39);
    }
    firstFloorMarginListener() {
        if (this.refreshStatus >= RefreshLayoutStatus.HalfFloor) {
            this.showRefreshAnimation = false;
        }
        else {
            this.showRefreshAnimation = this.firstFloorMargin > 50;
        }
    }
    aboutToAppear() {
        this._privateCircleColor1 = this.refreshHeaderAttr?.headerPointsAttr?.firstCircleColor;
        this._privateCircleColor2 = this.refreshHeaderAttr?.headerPointsAttr?.secondCircleColor;
        this._privateCircleColor3 = this.refreshHeaderAttr?.headerPointsAttr?.thirdCircleColor;
        this._privateCircleColor4 = this.refreshHeaderAttr?.headerPointsAttr?.firstCircleColor;
    }
    changeState() {
        if (!this.refreshHeaderAttr?.headerPointsAttr?.isAnimation) {
            this.startDefault();
        }
        else {
            if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
                this.clearCircleTranslate();
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
                this.refreshCircleTranslate();
                this._privateInterval = setInterval(() => {
                    if (this._privateFirstCircleTranslate == this._privateSecondTranslate) {
                        this._privateFirstCircleScale = 1;
                        this._privateSecondCircleScale = 0.5;
                        this._privateThirdCircleScale = 1.5;
                        this._privateFirstCircleTranslate = this._privateThirdTranslate;
                        this._privateSecondCircleTranslate = this._privateFirstTranslate + this._privateSecondTranslate;
                        this._privateThirdCircleTranslate = -this._privateSecondTranslate;
                    }
                    else if (this._privateFirstCircleTranslate == this._privateThirdTranslate) {
                        this.clearCircleTranslate();
                    }
                    else {
                        this.refreshCircleTranslate();
                    }
                }, 600);
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
                this.clearCircleTranslate();
                clearInterval(this._privateInterval);
            }
        }
    }
    refreshCircleTranslate() {
        this._privateFirstCircleScale = 1.5;
        this._privateSecondCircleScale = 1;
        this._privateThirdCircleScale = 0.5;
        this._privateFirstCircleTranslate = this._privateSecondTranslate;
        this._privateSecondCircleTranslate = this._privateThirdTranslate - this._privateSecondTranslate;
        this._privateThirdCircleTranslate = this._privateFirstTranslate;
    }
    clearCircleTranslate() {
        this._privateFirstCircleScale = 0.5;
        this._privateSecondCircleScale = 1.5;
        this._privateThirdCircleScale = 1;
        this._privateFirstCircleTranslate = 0;
        this._privateSecondCircleTranslate = 0;
        this._privateThirdCircleTranslate = 0;
    }
    startDefault() {
        if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
            this._privateCircleColor1 = this.refreshHeaderAttr?.headerPointsAttr?.firstCircleColor;
            this._privateCircleColor2 = this.refreshHeaderAttr?.headerPointsAttr?.secondCircleColor;
            this._privateCircleColor3 = this.refreshHeaderAttr?.headerPointsAttr?.thirdCircleColor;
            this._privateCircleColor4 = this.refreshHeaderAttr?.headerPointsAttr?.firstCircleColor;
        }
        else if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
            this._privateInterval = setInterval(() => {
                this._privateCircleColor1 = this._privateCircleColor2;
                this._privateCircleColor2 = this._privateCircleColor3;
                this._privateCircleColor3 = this._privateCircleColor4;
                this._privateCircleColor4 = this._privateCircleColor1;
            }, 500);
        }
        else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
            clearInterval(this._privateInterval);
        }
    }
    initialRender() {
        this.observeComponentCreation2((d39, e39) => {
            Column.create();
            Column.width("100%");
            Column.height(this.rootHeight);
            Column.justifyContent(FlexAlign.End);
            Column.padding({ bottom: this.refreshHeaderAttr?.marginBottom });
            Column.hitTestBehavior(HitTestMode.None);
            Column.visibility(this.isHideHeader ? Visibility.Hidden : Visibility.Visible);
        }, Column);
        this.observeComponentCreation2((b39, c39) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((z38, a39) => {
            Row.create();
            Row.visibility((this.showRefreshAnimation && !this.showSecondFloorStatus) ? Visibility.Visible :
                Visibility.None);
            Row.margin({
                bottom: (this.showRefreshAnimation && !this.showSecondFloorStatus) ?
                    this.refreshHeaderAttr?.headerPointsAttr?.animationMarginBottom : 0
            });
        }, Row);
        this.observeComponentCreation2((x38, y38) => {
            Circle.create({
                width: this.refreshHeaderAttr?.headerPointsAttr?.circleWidth,
                height: this.refreshHeaderAttr?.headerPointsAttr?.circleHeight
            });
            Context.animation({
                duration: 600
            });
            Circle.fill(ObservedObject.GetRawObject(this._privateCircleColor1));
            Circle.scale({ x: this._privateFirstCircleScale, y: this._privateFirstCircleScale });
            Circle.translate({ x: this._privateFirstCircleTranslate });
            Context.animation(null);
        }, Circle);
        this.observeComponentCreation2((t38, u38) => {
            Circle.create({
                width: this.refreshHeaderAttr?.headerPointsAttr?.circleWidth,
                height: this.refreshHeaderAttr?.headerPointsAttr?.circleHeight
            });
            Context.animation({
                duration: 600
            });
            Circle.margin({ left: this.refreshHeaderAttr?.headerPointsAttr?.circleSpacing });
            Circle.fill(ObservedObject.GetRawObject(this._privateCircleColor2));
            Circle.scale({ x: this._privateSecondCircleScale, y: this._privateSecondCircleScale });
            Circle.translate({ x: this._privateSecondCircleTranslate });
            Context.animation(null);
            Circle.onAreaChange((v38, w38) => {
                this._privateSecondTranslate = Number(w38.position.x);
            });
        }, Circle);
        this.observeComponentCreation2((p38, q38) => {
            Circle.create({
                width: this.refreshHeaderAttr?.headerPointsAttr?.circleWidth,
                height: this.refreshHeaderAttr?.headerPointsAttr?.circleHeight
            });
            Context.animation({
                duration: 600
            });
            Circle.margin({ left: this.refreshHeaderAttr?.headerPointsAttr?.circleSpacing });
            Circle.fill(ObservedObject.GetRawObject(this._privateCircleColor3));
            Circle.scale({ x: this._privateThirdCircleScale, y: this._privateThirdCircleScale });
            Circle.translate({ x: this._privateThirdCircleTranslate });
            Context.animation(null);
            Circle.onAreaChange((r38, s38) => {
                this._privateThirdTranslate = Number(s38.position.x);
                this._privateFirstTranslate = -Number(s38.position.x);
            });
        }, Circle);
        Row.pop();
        this.observeComponentCreation2((n38, o38) => {
            Text.create(this.refreshHeaderAttr?.headerPointsAttr?.secondFloorStatusText);
            Text.fontSize(this.refreshHeaderAttr?.headerPointsAttr?.secondFloorStatusFontSize);
            Text.fontColor(this.refreshHeaderAttr?.headerPointsAttr?.fontColor);
            Text.fontWeight(this.refreshHeaderAttr?.headerPointsAttr?.secondFloorStatusFontWeight);
            Text.visibility(this.showSecondFloorStatus ? Visibility.Visible :
                Visibility.None);
            Text.margin({
                bottom: this.showSecondFloorStatus ?
                    this.refreshHeaderAttr?.headerPointsAttr?.secondFloorStatusMarginBottom :
                    0
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((t37, u37) => {
            If.create();
            if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((l38, m38) => {
                        Text.create(this.refreshHeaderAttr?.pullingText != undefined ? this.refreshHeaderAttr?.pullingText : { "id": -1, "type": 10003, params: ["app.string.header_pulling"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Release) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((j38, k38) => {
                        Text.create(this.refreshHeaderAttr?.releaseText != undefined ? this.refreshHeaderAttr?.releaseText : { "id": -1, "type": 10003, params: ["app.string.header_release"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((h38, i38) => {
                        Text.create(this.refreshHeaderAttr?.refreshingText != undefined ? this.refreshHeaderAttr?.refreshingText : { "id": -1, "type": 10003, params: ["app.string.header_refreshing"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((f38, g38) => {
                        Text.create(this.refreshHeaderAttr?.finishText != undefined ? this.refreshHeaderAttr?.finishText : { "id": -1, "type": 10003, params: ["app.string.header_finish"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.ReleaseHalfFloor) {
                this.ifElseBranchUpdateFunction(4, () => {
                    this.observeComponentCreation2((d38, e38) => {
                        Text.create(this.refreshHeaderAttr?.releaseHalfFloorText != undefined ?
                            this.refreshHeaderAttr?.releaseHalfFloorText : { "id": -1, "type": 10003, params: ["app.string.header_release_half_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.HalfFloor) {
                this.ifElseBranchUpdateFunction(5, () => {
                    this.observeComponentCreation2((b38, c38) => {
                        Text.create(this.refreshHeaderAttr?.halfFloorText != undefined ?
                            this.refreshHeaderAttr?.halfFloorText : { "id": -1, "type": 10003, params: ["app.string.header_half_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.ReleaseSecondFloor) {
                this.ifElseBranchUpdateFunction(6, () => {
                    this.observeComponentCreation2((z37, a38) => {
                        Text.create(this.refreshHeaderAttr?.releaseSecondFloorText != undefined ?
                            this.refreshHeaderAttr?.releaseSecondFloorText : { "id": -1, "type": 10003, params: ["app.string.header_release_second_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.SecondFloor) {
                this.ifElseBranchUpdateFunction(7, () => {
                    this.observeComponentCreation2((x37, y37) => {
                        Text.create(this.refreshHeaderAttr?.secondFloorText != undefined ?
                            this.refreshHeaderAttr?.secondFloorText : { "id": -1, "type": 10003, params: ["app.string.header_second_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.SecondFloorSlideUp) {
                this.ifElseBranchUpdateFunction(8, () => {
                    this.observeComponentCreation2((v37, w37) => {
                        Text.create(this.refreshHeaderAttr?.secondFloorSlideUpText != undefined ?
                            this.refreshHeaderAttr?.secondFloorSlideUpText : { "id": -1, "type": 10003, params: ["app.string.header_second_floor_slide_up"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(9, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__contentMargin(s37) {
    Text.fontSize(s37.refreshHeaderAttr?.headerPointsAttr?.fontSize);
    Text.fontColor(s37.refreshHeaderAttr?.headerPointsAttr?.fontColor);
    Text.margin({
        top: ((s37.showRefreshAnimation && !s37.showSecondFloorStatus) || s37.showSecondFloorStatus) ? 0 :
            s37.refreshHeaderAttr?.headerPointsAttr?.animationMarginBottom
    });
}
