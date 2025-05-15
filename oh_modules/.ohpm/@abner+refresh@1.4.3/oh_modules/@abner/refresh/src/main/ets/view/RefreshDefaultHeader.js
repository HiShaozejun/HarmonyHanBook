if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshHeaderTimeFormat, RefreshHeaderTimeLabel } from '../constants/RefreshEnum';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
export class RefreshDefaultHeader extends ViewPU {
    constructor(r35, s35, t35, u35 = -1, v35 = undefined, w35) {
        super(r35, t35, u35, w35);
        if (typeof v35 === "function") {
            this.paramsGenerator_ = v35;
        }
        this.__refreshStatus = new SynchedPropertySimpleOneWayPU(s35.refreshStatus, this, "refreshStatus");
        this.__rotateAngle = new SynchedPropertySimpleOneWayPU(s35.rotateAngle, this, "rotateAngle");
        this.__refreshTime = new ObservedPropertySimplePU("", this, "refreshTime");
        this.refreshHeaderAttr = undefined;
        this.setInitiallyProvidedValue(s35);
        this.declareWatch("refreshStatus", this.changeState);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(q35) {
        if (q35.refreshStatus === undefined) {
            this.__refreshStatus.set(RefreshLayoutStatus.Pulling);
        }
        if (q35.rotateAngle === undefined) {
            this.__rotateAngle.set(0);
        }
        if (q35.refreshTime !== undefined) {
            this.refreshTime = q35.refreshTime;
        }
        if (q35.refreshHeaderAttr !== undefined) {
            this.refreshHeaderAttr = q35.refreshHeaderAttr;
        }
    }
    updateStateVars(p35) {
        this.__refreshStatus.reset(p35.refreshStatus);
        this.__rotateAngle.reset(p35.rotateAngle);
    }
    purgeVariableDependenciesOnElmtId(o35) {
        this.__refreshStatus.purgeDependencyOnElmtId(o35);
        this.__rotateAngle.purgeDependencyOnElmtId(o35);
        this.__refreshTime.purgeDependencyOnElmtId(o35);
    }
    aboutToBeDeleted() {
        this.__refreshStatus.aboutToBeDeleted();
        this.__rotateAngle.aboutToBeDeleted();
        this.__refreshTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(n35) {
        this.__refreshStatus.set(n35);
    }
    get rotateAngle() {
        return this.__rotateAngle.get();
    }
    set rotateAngle(m35) {
        this.__rotateAngle.set(m35);
    }
    get refreshTime() {
        return this.__refreshTime.get();
    }
    set refreshTime(l35) {
        this.__refreshTime.set(l35);
    }
    aboutToAppear() {
        this.refreshTime = this.getTime();
    }
    changeState() {
        if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
            this.refreshTime = this.getTime();
        }
    }
    initialRender() {
        this.observeComponentCreation2((j35, k35) => {
            Row.create();
            Row.width(this.refreshHeaderAttr?.width);
            Row.height(this.refreshHeaderAttr?.height);
            Row.justifyContent(FlexAlign.Center);
            Row.backgroundColor(this.refreshHeaderAttr?.backgroundColor);
        }, Row);
        this.observeComponentCreation2((b35, c35) => {
            If.create();
            if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((h35, i35) => {
                        Image.create(this.refreshHeaderAttr?.iconUpLoad != undefined ? this.refreshHeaderAttr?.iconUpLoad : { "id": -1, "type": 20000, params: ["app.media.ic_pull_up_load"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Image__loading(this);
                    }, Image);
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((f35, g35) => {
                        Text.create();
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((d35, e35) => {
                        Image.create(this.refreshHeaderAttr?.iconDown != undefined ? this.refreshHeaderAttr?.iconDown : { "id": -1, "type": 20000, params: ["app.media.ic_down"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        Context.animation({
                            duration: 500,
                            curve: Curve.Friction
                        });
                        __Image__loading(this);
                        Image.rotate({ angle: this.rotateAngle });
                        Context.animation(null);
                    }, Image);
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((z34, a35) => {
            Column.create();
            Column.margin({ left: this.refreshHeaderAttr?.marginIconLeft });
        }, Column);
        this.observeComponentCreation2((p34, q34) => {
            If.create();
            if (this.refreshStatus == RefreshLayoutStatus.Pulling) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((x34, y34) => {
                        Text.create(this.refreshHeaderAttr?.pullingText != undefined ? this.refreshHeaderAttr?.pullingText : { "id": -1, "type": 10003, params: ["app.string.header_pulling"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Release) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((v34, w34) => {
                        Text.create(this.refreshHeaderAttr?.releaseText != undefined ? this.refreshHeaderAttr?.releaseText : { "id": -1, "type": 10003, params: ["app.string.header_release"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Refreshing) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((t34, u34) => {
                        Text.create(this.refreshHeaderAttr?.refreshingText != undefined ? this.refreshHeaderAttr?.refreshingText : { "id": -1, "type": 10003, params: ["app.string.header_refreshing"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.refreshStatus == RefreshLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((r34, s34) => {
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
        this.observeComponentCreation2((l34, m34) => {
            If.create();
            if (!this.refreshHeaderAttr?.hideTime) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((n34, o34) => {
                        Text.create("上次更新:" + this.refreshTime);
                        Text.fontSize(this.refreshHeaderAttr?.timeFontSize);
                        Text.fontColor(this.refreshHeaderAttr?.timeFontColor);
                        Text.margin({ top: 5 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Row.pop();
    }
    getTime() {
        if (this.refreshHeaderAttr?.hideTime) {
            return "";
        }
        let q33 = this.refreshHeaderAttr;
        const r33 = new Date();
        const s33 = r33.getFullYear();
        const t33 = r33.getMonth() + 1;
        const u33 = r33.getDate();
        const v33 = r33.getHours();
        const w33 = r33.getMinutes();
        const x33 = r33.getSeconds();
        let y33 = "-";
        let z33 = "-";
        let a34 = "";
        let b34 = ":";
        let c34 = ":";
        let d34 = "";
        switch (q33?.timeLabel) {
            case RefreshHeaderTimeLabel.BACKSLASH:
                y33 = "/";
                z33 = "/";
                break;
            case RefreshHeaderTimeLabel.CHARACTERS:
                y33 = "年";
                z33 = "月";
                a34 = "日";
                b34 = "时";
                c34 = "分";
                d34 = "秒";
                break;
        }
        let e34 = "";
        let f34 = s33 + y33;
        let g34 = t33 + z33;
        let h34 = u33 + a34;
        let i34 = " " + v33 + b34;
        let j34 = w33 + c34;
        let k34 = "" + x33 + d34;
        if (t33 < 10) {
            g34 = "0" + t33 + z33;
        }
        if (u33 < 10) {
            h34 = "0" + u33 + a34;
        }
        if (v33 < 10) {
            i34 = " 0" + v33 + b34;
        }
        if (w33 < 10) {
            j34 = " 0" + w33 + c34;
        }
        if (x33 < 10) {
            k34 = "0" + x33 + d34;
        }
        switch (q33?.timeFormat) {
            case RefreshHeaderTimeFormat.YMDHMS:
                e34 = f34 + g34 + h34 + i34 + j34 + k34;
                break;
            case RefreshHeaderTimeFormat.HMS:
                e34 = i34 + j34 + k34;
                break;
            case RefreshHeaderTimeFormat.MDHMS:
                e34 = g34 + h34 + i34 + j34 + k34;
                break;
            default:
                j34 = j34.replace(":", "");
                e34 = g34 + h34 + i34 + j34;
                break;
        }
        return e34;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__contentMargin(p33) {
    Text.fontSize(p33.refreshHeaderAttr?.fontSize);
    Text.fontColor(p33.refreshHeaderAttr?.fontColor);
}
function __Image__loading(o33) {
    Image.width(o33.refreshHeaderAttr?.iconWidth != undefined ? o33.refreshHeaderAttr?.iconWidth : 20);
    Image.height(o33.refreshHeaderAttr?.iconHeight != undefined ? o33.refreshHeaderAttr?.iconHeight : 20);
}
