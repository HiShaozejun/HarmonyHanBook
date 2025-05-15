if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
export class RefreshHeaderPoints extends ViewPU {
    constructor(m37, n37, o37, p37 = -1, q37 = undefined, r37) {
        super(m37, o37, p37, r37);
        if (typeof q37 === "function") {
            this.paramsGenerator_ = q37;
        }
        this.__refreshStatus = new SynchedPropertySimpleOneWayPU(n37.refreshStatus, this, "refreshStatus");
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
        this.setInitiallyProvidedValue(n37);
        this.declareWatch("refreshStatus", this.changeState);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(l37) {
        if (l37.refreshStatus === undefined) {
            this.__refreshStatus.set(RefreshLayoutStatus.Pulling);
        }
        if (l37.refreshHeaderAttr !== undefined) {
            this.refreshHeaderAttr = l37.refreshHeaderAttr;
        }
        if (l37._privateCircleColor1 !== undefined) {
            this._privateCircleColor1 = l37._privateCircleColor1;
        }
        if (l37._privateCircleColor2 !== undefined) {
            this._privateCircleColor2 = l37._privateCircleColor2;
        }
        if (l37._privateCircleColor3 !== undefined) {
            this._privateCircleColor3 = l37._privateCircleColor3;
        }
        if (l37._privateCircleColor4 !== undefined) {
            this._privateCircleColor4 = l37._privateCircleColor4;
        }
        if (l37._privateInterval !== undefined) {
            this._privateInterval = l37._privateInterval;
        }
        if (l37._privateFirstCircleScale !== undefined) {
            this._privateFirstCircleScale = l37._privateFirstCircleScale;
        }
        if (l37._privateSecondCircleScale !== undefined) {
            this._privateSecondCircleScale = l37._privateSecondCircleScale;
        }
        if (l37._privateThirdCircleScale !== undefined) {
            this._privateThirdCircleScale = l37._privateThirdCircleScale;
        }
        if (l37._privateFirstCircleTranslate !== undefined) {
            this._privateFirstCircleTranslate = l37._privateFirstCircleTranslate;
        }
        if (l37._privateSecondCircleTranslate !== undefined) {
            this._privateSecondCircleTranslate = l37._privateSecondCircleTranslate;
        }
        if (l37._privateThirdCircleTranslate !== undefined) {
            this._privateThirdCircleTranslate = l37._privateThirdCircleTranslate;
        }
        if (l37._privateFirstTranslate !== undefined) {
            this._privateFirstTranslate = l37._privateFirstTranslate;
        }
        if (l37._privateSecondTranslate !== undefined) {
            this._privateSecondTranslate = l37._privateSecondTranslate;
        }
        if (l37._privateThirdTranslate !== undefined) {
            this._privateThirdTranslate = l37._privateThirdTranslate;
        }
    }
    updateStateVars(k37) {
        this.__refreshStatus.reset(k37.refreshStatus);
    }
    purgeVariableDependenciesOnElmtId(j37) {
        this.__refreshStatus.purgeDependencyOnElmtId(j37);
        this.___privateCircleColor1.purgeDependencyOnElmtId(j37);
        this.___privateCircleColor2.purgeDependencyOnElmtId(j37);
        this.___privateCircleColor3.purgeDependencyOnElmtId(j37);
        this.___privateCircleColor4.purgeDependencyOnElmtId(j37);
        this.___privateFirstCircleScale.purgeDependencyOnElmtId(j37);
        this.___privateSecondCircleScale.purgeDependencyOnElmtId(j37);
        this.___privateThirdCircleScale.purgeDependencyOnElmtId(j37);
        this.___privateFirstCircleTranslate.purgeDependencyOnElmtId(j37);
        this.___privateSecondCircleTranslate.purgeDependencyOnElmtId(j37);
        this.___privateThirdCircleTranslate.purgeDependencyOnElmtId(j37);
    }
    aboutToBeDeleted() {
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
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(i37) {
        this.__refreshStatus.set(i37);
    }
    get _privateCircleColor1() {
        return this.___privateCircleColor1.get();
    }
    set _privateCircleColor1(h37) {
        this.___privateCircleColor1.set(h37);
    }
    get _privateCircleColor2() {
        return this.___privateCircleColor2.get();
    }
    set _privateCircleColor2(g37) {
        this.___privateCircleColor2.set(g37);
    }
    get _privateCircleColor3() {
        return this.___privateCircleColor3.get();
    }
    set _privateCircleColor3(f37) {
        this.___privateCircleColor3.set(f37);
    }
    get _privateCircleColor4() {
        return this.___privateCircleColor4.get();
    }
    set _privateCircleColor4(e37) {
        this.___privateCircleColor4.set(e37);
    }
    get _privateFirstCircleScale() {
        return this.___privateFirstCircleScale.get();
    }
    set _privateFirstCircleScale(d37) {
        this.___privateFirstCircleScale.set(d37);
    }
    get _privateSecondCircleScale() {
        return this.___privateSecondCircleScale.get();
    }
    set _privateSecondCircleScale(c37) {
        this.___privateSecondCircleScale.set(c37);
    }
    get _privateThirdCircleScale() {
        return this.___privateThirdCircleScale.get();
    }
    set _privateThirdCircleScale(b37) {
        this.___privateThirdCircleScale.set(b37);
    }
    get _privateFirstCircleTranslate() {
        return this.___privateFirstCircleTranslate.get();
    }
    set _privateFirstCircleTranslate(a37) {
        this.___privateFirstCircleTranslate.set(a37);
    }
    get _privateSecondCircleTranslate() {
        return this.___privateSecondCircleTranslate.get();
    }
    set _privateSecondCircleTranslate(z36) {
        this.___privateSecondCircleTranslate.set(z36);
    }
    get _privateThirdCircleTranslate() {
        return this.___privateThirdCircleTranslate.get();
    }
    set _privateThirdCircleTranslate(y36) {
        this.___privateThirdCircleTranslate.set(y36);
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
        this.observeComponentCreation2((w36, x36) => {
            Column.create();
            Column.width("100%");
            Column.height(this.refreshHeaderAttr?.height);
            Column.justifyContent(FlexAlign.Center);
            Column.backgroundColor(this.refreshHeaderAttr?.backgroundColor);
        }, Column);
        this.observeComponentCreation2((u36, v36) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((s36, t36) => {
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
        this.observeComponentCreation2((o36, p36) => {
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
            Circle.onAreaChange((q36, r36) => {
                this._privateSecondTranslate = Number(r36.position.x);
            });
        }, Circle);
        this.observeComponentCreation2((k36, l36) => {
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
            Circle.onAreaChange((m36, n36) => {
                this._privateThirdTranslate = Number(n36.position.x);
                this._privateFirstTranslate = -Number(n36.position.x);
            });
        }, Circle);
        Row.pop();
        this.observeComponentCreation2((y35, z35) => {
            If.create();
            if (!this.refreshHeaderAttr?.headerPointsAttr?.isTextHide) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((a36, b36) => {
                        If.create();
                        if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((i36, j36) => {
                                    Text.create(this.refreshHeaderAttr?.pullingText != undefined ? this.refreshHeaderAttr?.pullingText : { "id": -1, "type": 10003, params: ["app.string.header_pulling"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                                    __Text__contentMargin(this);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else if (this.refreshStatus == RefreshLayoutStatus.Release) {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((g36, h36) => {
                                    Text.create(this.refreshHeaderAttr?.releaseText != undefined ? this.refreshHeaderAttr?.releaseText : { "id": -1, "type": 10003, params: ["app.string.header_release"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                                    __Text__contentMargin(this);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
                            this.ifElseBranchUpdateFunction(2, () => {
                                this.observeComponentCreation2((e36, f36) => {
                                    Text.create(this.refreshHeaderAttr?.refreshingText != undefined ? this.refreshHeaderAttr?.refreshingText : { "id": -1, "type": 10003, params: ["app.string.header_refreshing"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                                    __Text__contentMargin(this);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
                            this.ifElseBranchUpdateFunction(3, () => {
                                this.observeComponentCreation2((c36, d36) => {
                                    Text.create(this.refreshHeaderAttr?.finishText != undefined ? this.refreshHeaderAttr?.finishText : { "id": -1, "type": 10003, params: ["app.string.header_finish"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                                    __Text__contentMargin(this);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(4, () => {
                            });
                        }
                    }, If);
                    If.pop();
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
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__contentMargin(x35) {
    Text.fontSize(x35.refreshHeaderAttr?.headerPointsAttr?.fontSize);
    Text.fontColor(x35.refreshHeaderAttr?.headerPointsAttr?.fontColor);
}
