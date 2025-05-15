if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { SlideMenuAttr } from '../attribute/SlideMenuAttr';
export class SlideDeleteView extends ViewPU {
    constructor(y26, z26, a27, b27 = -1, c27 = undefined, d27) {
        super(y26, a27, b27, d27);
        if (typeof c27 === "function") {
            this.paramsGenerator_ = c27;
        }
        this.data = Object();
        this.index = 0;
        this.itemLayout = undefined;
        this.slideDeleteLayout = undefined;
        this._privateSlidPanOption = new PanGestureOptions({ direction: PanDirection.Left | PanDirection.Right });
        this.__slideRightOffset = new ObservedPropertyObjectPU([], this, "slideRightOffset");
        this.__slideEndPosition = new SynchedPropertySimpleTwoWayPU(z26.slideEndPosition, this, "slideEndPosition");
        this.__actionStartX = new ObservedPropertySimplePU(0, this, "actionStartX");
        this._privateSlideMenuAttr = new SlideMenuAttr();
        this.slideMenuAttr = undefined;
        this.setInitiallyProvidedValue(z26);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(x26) {
        if (x26.data !== undefined) {
            this.data = x26.data;
        }
        if (x26.index !== undefined) {
            this.index = x26.index;
        }
        if (x26.itemLayout !== undefined) {
            this.itemLayout = x26.itemLayout;
        }
        if (x26.slideDeleteLayout !== undefined) {
            this.slideDeleteLayout = x26.slideDeleteLayout;
        }
        if (x26._privateSlidPanOption !== undefined) {
            this._privateSlidPanOption = x26._privateSlidPanOption;
        }
        if (x26.slideRightOffset !== undefined) {
            this.slideRightOffset = x26.slideRightOffset;
        }
        if (x26.actionStartX !== undefined) {
            this.actionStartX = x26.actionStartX;
        }
        if (x26._privateSlideMenuAttr !== undefined) {
            this._privateSlideMenuAttr = x26._privateSlideMenuAttr;
        }
        if (x26.slideMenuAttr !== undefined) {
            this.slideMenuAttr = x26.slideMenuAttr;
        }
    }
    updateStateVars(w26) {
    }
    purgeVariableDependenciesOnElmtId(v26) {
        this.__slideRightOffset.purgeDependencyOnElmtId(v26);
        this.__slideEndPosition.purgeDependencyOnElmtId(v26);
        this.__actionStartX.purgeDependencyOnElmtId(v26);
    }
    aboutToBeDeleted() {
        this.__slideRightOffset.aboutToBeDeleted();
        this.__slideEndPosition.aboutToBeDeleted();
        this.__actionStartX.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get slideRightOffset() {
        return this.__slideRightOffset.get();
    }
    set slideRightOffset(u26) {
        this.__slideRightOffset.set(u26);
    }
    get slideEndPosition() {
        return this.__slideEndPosition.get();
    }
    set slideEndPosition(t26) {
        this.__slideEndPosition.set(t26);
    }
    get actionStartX() {
        return this.__actionStartX.get();
    }
    set actionStartX(s26) {
        this.__actionStartX.set(s26);
    }
    aboutToAppear() {
        if (this.slideMenuAttr != null) {
            this.slideMenuAttr(this._privateSlideMenuAttr);
        }
    }
    initialRender() {
        this.observeComponentCreation2((k26, l26) => {
            Row.create();
            Context.animation({ duration: 200 });
            Row.offset({ x: this.slideRightOffset[this.index] });
            Context.animation(null);
            Gesture.create(GesturePriority.Low);
            PanGesture.create(this._privateSlidPanOption);
            PanGesture.onActionStart((r26) => {
                if (r26) {
                    this.actionStartX = r26.offsetX;
                }
                this.slideRightOffset[this.slideEndPosition] = 0;
            });
            PanGesture.onActionUpdate((p26) => {
                if (p26) {
                    let q26 = p26.offsetX - this.actionStartX;
                    if (q26 < -this._privateSlideMenuAttr.rightMenuWidth) {
                        q26 = -this._privateSlideMenuAttr.rightMenuWidth;
                    }
                    if (q26 >= 0) {
                        q26 = 0;
                    }
                    this.slideRightOffset[this.index] = q26;
                }
            });
            PanGesture.onActionEnd((m26) => {
                let n26 = m26.offsetX;
                let o26 = this.actionStartX - n26;
                if (o26 > (this._privateSlideMenuAttr.rightMenuWidth) / 2) {
                    this.slideRightOffset[this.index] = -this._privateSlideMenuAttr.rightMenuWidth;
                }
                else {
                    this.slideRightOffset[this.index] = 0;
                }
                this.slideEndPosition = this.index;
            });
            PanGesture.pop();
            Gesture.pop();
        }, Row);
        this.itemLayout.bind(this)(this.data, this.index);
        this.slideDeleteLayout.bind(this)(this.index);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
