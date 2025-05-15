if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { RefreshHeaderTimeFormat, RefreshHeaderTimeLabel } from '../constants/RefreshEnum';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
export class SfRefreshHeaderView extends ViewPU {
    constructor(t42, u42, v42, w42 = -1, x42 = undefined, y42) {
        super(t42, v42, w42, y42);
        if (typeof x42 === "function") {
            this.paramsGenerator_ = x42;
        }
        this.__rootHeight = new SynchedPropertySimpleOneWayPU(u42.rootHeight, this, "rootHeight");
        this.__scrollStatus = new SynchedPropertySimpleOneWayPU(u42.scrollStatus, this, "scrollStatus");
        this.__rotateAngle = new SynchedPropertySimpleOneWayPU(u42.rotateAngle, this, "rotateAngle");
        this.__refreshTime = new ObservedPropertySimplePU("", this, "refreshTime");
        this.refreshHeaderAttr = undefined;
        this.setInitiallyProvidedValue(u42);
        this.declareWatch("scrollStatus", this.changeState);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(s42) {
        if (s42.rootHeight === undefined) {
            this.__rootHeight.set(0);
        }
        if (s42.scrollStatus === undefined) {
            this.__scrollStatus.set(RefreshLayoutStatus.Pulling);
        }
        if (s42.rotateAngle === undefined) {
            this.__rotateAngle.set(0);
        }
        if (s42.refreshTime !== undefined) {
            this.refreshTime = s42.refreshTime;
        }
        if (s42.refreshHeaderAttr !== undefined) {
            this.refreshHeaderAttr = s42.refreshHeaderAttr;
        }
    }
    updateStateVars(r42) {
        this.__rootHeight.reset(r42.rootHeight);
        this.__scrollStatus.reset(r42.scrollStatus);
        this.__rotateAngle.reset(r42.rotateAngle);
    }
    purgeVariableDependenciesOnElmtId(q42) {
        this.__rootHeight.purgeDependencyOnElmtId(q42);
        this.__scrollStatus.purgeDependencyOnElmtId(q42);
        this.__rotateAngle.purgeDependencyOnElmtId(q42);
        this.__refreshTime.purgeDependencyOnElmtId(q42);
    }
    aboutToBeDeleted() {
        this.__rootHeight.aboutToBeDeleted();
        this.__scrollStatus.aboutToBeDeleted();
        this.__rotateAngle.aboutToBeDeleted();
        this.__refreshTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get rootHeight() {
        return this.__rootHeight.get();
    }
    set rootHeight(p42) {
        this.__rootHeight.set(p42);
    }
    get scrollStatus() {
        return this.__scrollStatus.get();
    }
    set scrollStatus(o42) {
        this.__scrollStatus.set(o42);
    }
    get rotateAngle() {
        return this.__rotateAngle.get();
    }
    set rotateAngle(n42) {
        this.__rotateAngle.set(n42);
    }
    get refreshTime() {
        return this.__refreshTime.get();
    }
    set refreshTime(m42) {
        this.__refreshTime.set(m42);
    }
    aboutToAppear() {
        this.refreshTime = this.getTime();
    }
    changeState() {
        if (this.scrollStatus == RefreshLayoutStatus.Pulling) {
            this.refreshTime = this.getTime();
        }
    }
    initialRender() {
        this.observeComponentCreation2((k42, l42) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((i42, j42) => {
            Row.create();
            Row.width("100%");
            Row.height(this.rootHeight);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((a42, b42) => {
            If.create();
            if (this.scrollStatus == RefreshLayoutStatus.Refreshing) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((g42, h42) => {
                        Image.create(this.refreshHeaderAttr?.iconUpLoad != undefined ? this.refreshHeaderAttr?.iconUpLoad : { "id": -1, "type": 20000, params: ["app.media.ic_pull_up_load"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Image__loading();
                    }, Image);
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((e42, f42) => {
                        Text.create();
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.Pulling
                || this.scrollStatus == RefreshLayoutStatus.Release) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((c42, d42) => {
                        Image.create(this.refreshHeaderAttr?.iconDown != undefined ? this.refreshHeaderAttr?.iconDown : { "id": -1, "type": 20000, params: ["app.media.ic_down"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        Context.animation({
                            duration: 500,
                            curve: Curve.Friction
                        });
                        __Image__loading();
                        Image.rotate({ angle: this.rotateAngle });
                        Context.animation(null);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(3, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((y41, z41) => {
            Column.create();
            Column.margin({ left: this.refreshHeaderAttr?.marginIconLeft });
        }, Column);
        this.observeComponentCreation2((e41, f41) => {
            If.create();
            if (this.scrollStatus == RefreshLayoutStatus.Pulling) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((w41, x41) => {
                        Text.create(this.refreshHeaderAttr?.pullingText != undefined ? this.refreshHeaderAttr?.pullingText : { "id": -1, "type": 10003, params: ["app.string.header_pulling"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.Release) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((u41, v41) => {
                        Text.create(this.refreshHeaderAttr?.releaseText != undefined ? this.refreshHeaderAttr?.releaseText : { "id": -1, "type": 10003, params: ["app.string.header_release"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.Refreshing) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((s41, t41) => {
                        Text.create(this.refreshHeaderAttr?.refreshingText != undefined ? this.refreshHeaderAttr?.refreshingText : { "id": -1, "type": 10003, params: ["app.string.header_refreshing"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((q41, r41) => {
                        Text.create(this.refreshHeaderAttr?.finishText != undefined ? this.refreshHeaderAttr?.finishText : { "id": -1, "type": 10003, params: ["app.string.header_finish"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.ReleaseHalfFloor) {
                this.ifElseBranchUpdateFunction(4, () => {
                    this.observeComponentCreation2((o41, p41) => {
                        Text.create(this.refreshHeaderAttr?.releaseHalfFloorText != undefined ?
                            this.refreshHeaderAttr?.releaseHalfFloorText : { "id": -1, "type": 10003, params: ["app.string.header_release_half_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.HalfFloor) {
                this.ifElseBranchUpdateFunction(5, () => {
                    this.observeComponentCreation2((m41, n41) => {
                        Text.create(this.refreshHeaderAttr?.halfFloorText != undefined ?
                            this.refreshHeaderAttr?.halfFloorText : { "id": -1, "type": 10003, params: ["app.string.header_half_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.ReleaseSecondFloor) {
                this.ifElseBranchUpdateFunction(6, () => {
                    this.observeComponentCreation2((k41, l41) => {
                        Text.create(this.refreshHeaderAttr?.releaseSecondFloorText != undefined ?
                            this.refreshHeaderAttr?.releaseSecondFloorText : { "id": -1, "type": 10003, params: ["app.string.header_release_second_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.SecondFloor) {
                this.ifElseBranchUpdateFunction(7, () => {
                    this.observeComponentCreation2((i41, j41) => {
                        Text.create(this.refreshHeaderAttr?.secondFloorText != undefined ?
                            this.refreshHeaderAttr?.secondFloorText : { "id": -1, "type": 10003, params: ["app.string.header_second_floor"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.scrollStatus == RefreshLayoutStatus.SecondFloorSlideUp) {
                this.ifElseBranchUpdateFunction(8, () => {
                    this.observeComponentCreation2((g41, h41) => {
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
        this.observeComponentCreation2((a41, b41) => {
            If.create();
            if (!this.refreshHeaderAttr?.hideTime
                && this.scrollStatus != RefreshLayoutStatus.ReleaseHalfFloor
                && this.scrollStatus != RefreshLayoutStatus.ReleaseSecondFloor
                && this.scrollStatus != RefreshLayoutStatus.SecondFloorSlideUp
                && this.scrollStatus != RefreshLayoutStatus.HalfFloor
                && this.scrollStatus != RefreshLayoutStatus.SecondFloor) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((c41, d41) => {
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
        Column.pop();
    }
    getTime() {
        if (this.refreshHeaderAttr?.hideTime) {
            return "";
        }
        let f40 = this.refreshHeaderAttr;
        const g40 = new Date();
        const h40 = g40.getFullYear();
        const i40 = g40.getMonth() + 1;
        const j40 = g40.getDate();
        const k40 = g40.getHours();
        const l40 = g40.getMinutes();
        const m40 = g40.getSeconds();
        let n40 = "-";
        let o40 = "-";
        let p40 = "";
        let q40 = ":";
        let r40 = ":";
        let s40 = "";
        switch (f40?.timeLabel) {
            case RefreshHeaderTimeLabel.BACKSLASH:
                n40 = "/";
                o40 = "/";
                break;
            case RefreshHeaderTimeLabel.CHARACTERS:
                n40 = "年";
                o40 = "月";
                p40 = "日";
                q40 = "时";
                r40 = "分";
                s40 = "秒";
                break;
        }
        let t40 = "";
        let u40 = h40 + n40;
        let v40 = i40 + o40;
        let w40 = j40 + p40;
        let x40 = " " + k40 + q40;
        let y40 = l40 + r40;
        let z40 = "" + m40 + s40;
        if (i40 < 10) {
            v40 = "0" + i40 + o40;
        }
        if (j40 < 10) {
            w40 = "0" + j40 + p40;
        }
        if (k40 < 10) {
            x40 = " 0" + k40 + q40;
        }
        if (l40 < 10) {
            y40 = " 0" + l40 + r40;
        }
        if (m40 < 10) {
            z40 = "0" + m40 + s40;
        }
        switch (f40?.timeFormat) {
            case RefreshHeaderTimeFormat.YMDHMS:
                t40 = u40 + v40 + w40 + x40 + y40 + z40;
                break;
            case RefreshHeaderTimeFormat.HMS:
                t40 = x40 + y40 + z40;
                break;
            case RefreshHeaderTimeFormat.MDHMS:
                t40 = v40 + w40 + x40 + y40 + z40;
                break;
            default:
                y40 = y40.replace(":", "");
                t40 = v40 + w40 + x40 + y40;
                break;
        }
        return t40;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__contentMargin(e40) {
    Text.fontSize(e40.refreshHeaderAttr?.fontSize);
    Text.fontColor(e40.refreshHeaderAttr?.fontColor);
}
function __Image__loading() {
    Image.width(20);
    Image.height(20);
}
