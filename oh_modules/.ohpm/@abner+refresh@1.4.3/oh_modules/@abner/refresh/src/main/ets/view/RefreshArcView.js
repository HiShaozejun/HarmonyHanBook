if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class RefreshArcView extends ViewPU {
    constructor(d32, e32, f32, g32 = -1, h32 = undefined, i32) {
        super(d32, f32, g32, i32);
        if (typeof h32 === "function") {
            this.paramsGenerator_ = h32;
        }
        this.settings = new RenderingContextSettings(true);
        this.context = new CanvasRenderingContext2D(this.settings);
        this.__arcHeight = new SynchedPropertySimpleOneWayPU(e32.arcHeight, this, "arcHeight");
        this.setInitiallyProvidedValue(e32);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(c32) {
        if (c32.settings !== undefined) {
            this.settings = c32.settings;
        }
        if (c32.context !== undefined) {
            this.context = c32.context;
        }
        if (c32.arcHeight === undefined) {
            this.__arcHeight.set(0);
        }
    }
    updateStateVars(b32) {
        this.__arcHeight.reset(b32.arcHeight);
    }
    purgeVariableDependenciesOnElmtId(a32) {
        this.__arcHeight.purgeDependencyOnElmtId(a32);
    }
    aboutToBeDeleted() {
        this.__arcHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get arcHeight() {
        return this.__arcHeight.get();
    }
    set arcHeight(z31) {
        this.__arcHeight.set(z31);
    }
    initialRender() {
        this.observeComponentCreation2((x31, y31) => {
            Canvas.create(this.context);
            Canvas.width('100%');
            Canvas.height(this.arcHeight);
            Canvas.onReady(() => {
                this.context.beginPath();
                this.context.moveTo(0, 0);
                this.context.lineTo(0, this.context.height);
                this.context.lineTo(this.context.width, this.context.height);
                this.context.lineTo(this.context.width, 0);
                this.context.bezierCurveTo(this.context.width, 0, this.context.width / 2, this.context.height, 0, 0);
                this.context.lineTo(0, 0);
                this.context.closePath();
                this.context.fillStyle = Color.White;
                this.context.fill();
            });
        }, Canvas);
        Canvas.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
