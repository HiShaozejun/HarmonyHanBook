if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { LoadMoreFooterAttr } from '../attribute/LoadMoreFooterAttr';
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshConstants } from '../constants/RefreshConstants';
export class RefreshDefaultFooter extends ViewPU {
    constructor(i33, j33, k33, l33 = -1, m33 = undefined, n33) {
        super(i33, k33, l33, n33);
        if (typeof m33 === "function") {
            this.paramsGenerator_ = m33;
        }
        this.__loadMoreStatus = new SynchedPropertySimpleOneWayPU(j33.loadMoreStatus, this, "loadMoreStatus");
        this.loadMoreFooterAttr = new LoadMoreFooterAttr();
        this.setInitiallyProvidedValue(j33);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(h33) {
        if (h33.loadMoreStatus === undefined) {
            this.__loadMoreStatus.set(LoadMoreLayoutStatus.Pulling);
        }
        if (h33.loadMoreFooterAttr !== undefined) {
            this.loadMoreFooterAttr = h33.loadMoreFooterAttr;
        }
    }
    updateStateVars(g33) {
        this.__loadMoreStatus.reset(g33.loadMoreStatus);
    }
    purgeVariableDependenciesOnElmtId(f33) {
        this.__loadMoreStatus.purgeDependencyOnElmtId(f33);
    }
    aboutToBeDeleted() {
        this.__loadMoreStatus.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get loadMoreStatus() {
        return this.__loadMoreStatus.get();
    }
    set loadMoreStatus(e33) {
        this.__loadMoreStatus.set(e33);
    }
    initialRender() {
        this.observeComponentCreation2((c33, d33) => {
            Row.create();
            Row.width(this.loadMoreFooterAttr.width);
            Row.height(this.loadMoreFooterAttr.height);
            Row.backgroundColor(this.loadMoreFooterAttr.backgroundColor);
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((w32, x32) => {
            If.create();
            if (this.loadMoreStatus == LoadMoreLayoutStatus.Loading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((a33, b33) => {
                        Image.create(this.loadMoreFooterAttr.loadingSrc != undefined ? this.loadMoreFooterAttr.loadingSrc : { "id": -1, "type": 20000, params: ["app.media.ic_pull_up_load"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        Image.width(this.loadMoreFooterAttr.loadingIconWidth != undefined ? this.loadMoreFooterAttr.loadingIconWidth : 20);
                        Image.height(this.loadMoreFooterAttr.loadingIconHeight != undefined ? this.loadMoreFooterAttr.loadingIconHeight :
                            20);
                        Image.margin({
                            right: this.loadMoreFooterAttr.loadingMarginRight != undefined ?
                                this.loadMoreFooterAttr.loadingMarginRight : RefreshConstants.REFRESH_TEXT_LEFT
                        });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((y32, z32) => {
                        Text.create();
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((k32, l32) => {
            If.create();
            if (this.loadMoreStatus == LoadMoreLayoutStatus.Pulling) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((u32, v32) => {
                        Text.create(this.loadMoreFooterAttr.footerPullingText != undefined ? this.loadMoreFooterAttr.footerPullingText : { "id": -1, "type": 10003, params: ["app.string.footer_pulling"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this.loadMoreFooterAttr);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.loadMoreStatus == LoadMoreLayoutStatus.Release) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((s32, t32) => {
                        Text.create(this.loadMoreFooterAttr.footerReleaseText != undefined ? this.loadMoreFooterAttr.footerReleaseText : { "id": -1, "type": 10003, params: ["app.string.footer_release"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this.loadMoreFooterAttr);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.loadMoreStatus == LoadMoreLayoutStatus.Loading) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((q32, r32) => {
                        Text.create(this.loadMoreFooterAttr.footerLoadingText != undefined ? this.loadMoreFooterAttr.footerLoadingText : { "id": -1, "type": 10003, params: ["app.string.footer_loading"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this.loadMoreFooterAttr);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.loadMoreStatus == LoadMoreLayoutStatus.Finish) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((o32, p32) => {
                        Text.create(this.loadMoreFooterAttr.footerFinishText != undefined ? this.loadMoreFooterAttr.footerFinishText : { "id": -1, "type": 10003, params: ["app.string.footer_finish"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this.loadMoreFooterAttr);
                    }, Text);
                    Text.pop();
                });
            }
            else if (this.loadMoreStatus == LoadMoreLayoutStatus.FooterNothing) {
                this.ifElseBranchUpdateFunction(4, () => {
                    this.observeComponentCreation2((m32, n32) => {
                        Text.create(this.loadMoreFooterAttr.footerNothingText != undefined ? this.loadMoreFooterAttr.footerNothingText : { "id": -1, "type": 10003, params: ["app.string.footer_nothing"], "bundleName": "__harDefaultBundleName__", "moduleName": "__harDefaultModuleName__" });
                        __Text__contentMargin(this.loadMoreFooterAttr);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(5, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__contentMargin(j32) {
    Text.fontSize(j32.fontSize);
    Text.fontColor(j32.fontColor);
    Text.fontWeight(j32.fontWeight);
    Text.fontFamily(j32.fontFamily);
}
