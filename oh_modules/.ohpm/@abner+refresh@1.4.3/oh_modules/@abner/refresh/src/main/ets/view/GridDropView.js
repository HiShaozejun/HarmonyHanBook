if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class GridDropView extends ViewPU {
    constructor(r31, s31, t31, u31 = -1, v31 = undefined, w31) {
        super(r31, t31, u31, w31);
        if (typeof v31 === "function") {
            this.paramsGenerator_ = v31;
        }
        this.columnsTemplate = "1fr 1fr";
        this.columnsGap = 0;
        this.rowsGap = 0;
        this.dropWidth = "100%";
        this.dropHeight = "100%";
        this.__isEditMode = new SynchedPropertySimpleOneWayPU(s31.isEditMode, this, "isEditMode");
        this.bgColor = Color.Transparent;
        this.__items = new SynchedPropertyObjectOneWayPU(s31.items, this, "items");
        this.itemLayout = undefined;
        this.scroller = new Scroller();
        this.dropLayout = undefined;
        this.onDropStart = undefined;
        this.onDropEnd = undefined;
        this.onDropData = undefined;
        this.prohibitDrop = [];
        this.prohibitMaxSwap = -1;
        this.__supportAnimation = new ObservedPropertySimplePU(true, this, "supportAnimation");
        this._privateColumnsSize = 0;
        this._privateWindowWidth = 0;
        this._privateWindowTop = 0;
        this._privateItemHeight = 0;
        this.__nestedScroll = new SynchedPropertyObjectOneWayPU(s31.nestedScroll, this, "nestedScroll");
        this.setInitiallyProvidedValue(s31);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(q31) {
        if (q31.columnsTemplate !== undefined) {
            this.columnsTemplate = q31.columnsTemplate;
        }
        if (q31.columnsGap !== undefined) {
            this.columnsGap = q31.columnsGap;
        }
        if (q31.rowsGap !== undefined) {
            this.rowsGap = q31.rowsGap;
        }
        if (q31.dropWidth !== undefined) {
            this.dropWidth = q31.dropWidth;
        }
        if (q31.dropHeight !== undefined) {
            this.dropHeight = q31.dropHeight;
        }
        if (q31.isEditMode === undefined) {
            this.__isEditMode.set(true);
        }
        if (q31.bgColor !== undefined) {
            this.bgColor = q31.bgColor;
        }
        if (q31.items === undefined) {
            this.__items.set([]);
        }
        if (q31.itemLayout !== undefined) {
            this.itemLayout = q31.itemLayout;
        }
        if (q31.scroller !== undefined) {
            this.scroller = q31.scroller;
        }
        if (q31.dropLayout !== undefined) {
            this.dropLayout = q31.dropLayout;
        }
        if (q31.onDropStart !== undefined) {
            this.onDropStart = q31.onDropStart;
        }
        if (q31.onDropEnd !== undefined) {
            this.onDropEnd = q31.onDropEnd;
        }
        if (q31.onDropData !== undefined) {
            this.onDropData = q31.onDropData;
        }
        if (q31.prohibitDrop !== undefined) {
            this.prohibitDrop = q31.prohibitDrop;
        }
        if (q31.prohibitMaxSwap !== undefined) {
            this.prohibitMaxSwap = q31.prohibitMaxSwap;
        }
        if (q31.supportAnimation !== undefined) {
            this.supportAnimation = q31.supportAnimation;
        }
        if (q31._privateColumnsSize !== undefined) {
            this._privateColumnsSize = q31._privateColumnsSize;
        }
        if (q31._privateWindowWidth !== undefined) {
            this._privateWindowWidth = q31._privateWindowWidth;
        }
        if (q31._privateWindowTop !== undefined) {
            this._privateWindowTop = q31._privateWindowTop;
        }
        if (q31._privateItemHeight !== undefined) {
            this._privateItemHeight = q31._privateItemHeight;
        }
        if (q31.nestedScroll === undefined) {
            this.__nestedScroll.set(undefined);
        }
    }
    updateStateVars(p31) {
        this.__isEditMode.reset(p31.isEditMode);
        this.__items.reset(p31.items);
        this.__nestedScroll.reset(p31.nestedScroll);
    }
    purgeVariableDependenciesOnElmtId(o31) {
        this.__isEditMode.purgeDependencyOnElmtId(o31);
        this.__items.purgeDependencyOnElmtId(o31);
        this.__supportAnimation.purgeDependencyOnElmtId(o31);
        this.__nestedScroll.purgeDependencyOnElmtId(o31);
    }
    aboutToBeDeleted() {
        this.__isEditMode.aboutToBeDeleted();
        this.__items.aboutToBeDeleted();
        this.__supportAnimation.aboutToBeDeleted();
        this.__nestedScroll.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isEditMode() {
        return this.__isEditMode.get();
    }
    set isEditMode(n31) {
        this.__isEditMode.set(n31);
    }
    get items() {
        return this.__items.get();
    }
    set items(m31) {
        this.__items.set(m31);
    }
    get supportAnimation() {
        return this.__supportAnimation.get();
    }
    set supportAnimation(l31) {
        this.__supportAnimation.set(l31);
    }
    get nestedScroll() {
        return this.__nestedScroll.get();
    }
    set nestedScroll(k31) {
        this.__nestedScroll.set(k31);
    }
    aboutToAppear() {
        this._privateColumnsSize = this.countOccurrences(this.columnsTemplate, "1fr");
    }
    pixelMapBuilder(f31, g31, h31 = null) {
        this.observeComponentCreation2((i31, j31) => {
            If.create();
            if (this.dropLayout != null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.dropLayout.bind(this)(f31, g31);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    swapPosition(c31, d31) {
        const e31 = this.items[c31];
        if (c31 > d31) {
            this.items.splice(d31, 0, e31);
            this.items.splice(c31 + 1, 1);
        }
        else {
            this.items.splice(d31 + 1, 0, e31);
            this.items.splice(c31, 1);
        }
        if (this.onDropData != null) {
            this.onDropData(this.items);
        }
    }
    initialRender() {
        this.observeComponentCreation2((a30, b30) => {
            Grid.create(this.scroller);
            Grid.nestedScroll(ObservedObject.GetRawObject(this.nestedScroll));
            Grid.scrollBar(BarState.Off);
            Grid.columnsTemplate(this.columnsTemplate);
            Grid.columnsGap(this.columnsGap);
            Grid.rowsGap(this.rowsGap);
            Grid.width(this.dropWidth);
            Grid.height(this.dropHeight);
            Grid.backgroundColor(this.bgColor);
            Grid.editMode(this.isEditMode);
            Grid.supportAnimation(this.supportAnimation);
            Grid.onItemDragStart((z30, a31) => {
                if (this.prohibitDrop.includes(a31)) {
                    return;
                }
                let b31 = this.items[a31];
                return { builder: () => {
                        this.pixelMapBuilder.call(this, b31, a31);
                    } };
            });
            Grid.onItemDrop((v30, w30, x30, y30) => {
                if (x30 <= this.prohibitMaxSwap) {
                    return;
                }
                if (!y30 || x30 >= this.items.length) {
                    return;
                }
                this.swapPosition(w30, x30);
                return;
            });
            Grid.onTouch((e30) => {
                if (e30.type == TouchType.Down) {
                    if (this.onDropStart != null) {
                        this.onDropStart();
                    }
                }
                else if (e30.type == TouchType.Up) {
                    if (this.onDropEnd != null) {
                        this.onDropEnd();
                    }
                }
                else if (e30.type == TouchType.Move) {
                    if (this.prohibitMaxSwap < this._privateColumnsSize) {
                        let q30 = this._privateWindowWidth / this._privateColumnsSize;
                        let r30 = q30 * (this.prohibitMaxSwap + 1);
                        let s30 = this._privateItemHeight;
                        let t30 = e30.touches[0].x - q30 / 2 + this.columnsGap / 2;
                        let u30 = e30.touches[0].y - this._privateItemHeight / 2;
                        if (t30 < r30 && u30 < s30) {
                            this.supportAnimation = false;
                        }
                        else {
                            this.supportAnimation = true;
                        }
                    }
                    else {
                        let f30 = (this.prohibitMaxSwap + 1) / this._privateColumnsSize;
                        let g30 = f30.toString().indexOf(".") != -1;
                        let h30 = this._privateWindowWidth / this._privateColumnsSize;
                        let i30 = e30.touches[0].x - h30 / 2 + Number(this.columnsGap) / 2;
                        let j30 = e30.touches[0].y - this._privateItemHeight / 2;
                        if (g30) {
                            let l30 = f30.toString().split(".")[0];
                            let m30 = this._privateItemHeight * parseInt(l30);
                            let n30 = this._privateItemHeight * (parseInt(l30) + 1);
                            let o30 = parseInt(l30) * this._privateColumnsSize;
                            let p30 = h30 * ((this.prohibitMaxSwap + 1) - o30);
                            if (j30 < m30) {
                                this.supportAnimation = false;
                            }
                            else {
                                if (j30 > m30 && j30 < n30 && i30 < p30) {
                                    this.supportAnimation = false;
                                }
                                else {
                                    this.supportAnimation = true;
                                }
                            }
                        }
                        else {
                            let k30 = this._privateItemHeight * f30;
                            if (j30 < k30) {
                                this.supportAnimation = false;
                            }
                            else {
                                this.supportAnimation = true;
                            }
                        }
                    }
                }
            });
            Grid.onAreaChange((c30, d30) => {
                this._privateWindowTop = Number(d30.position.y);
                this._privateWindowWidth = Number(d30.width);
            });
        }, Grid);
        this.observeComponentCreation2((m29, n29) => {
            ForEach.create();
            const o29 = (r29, s29) => {
                const t29 = r29;
                {
                    const u29 = (w29, x29) => {
                        GridItem.create(() => { }, false);
                        GridItem.onAreaChange((y29, z29) => {
                            this._privateItemHeight = Number(z29.height);
                        });
                    };
                    const v29 = () => {
                        this.observeComponentCreation2(u29, GridItem);
                        this.itemLayout.bind(this)(t29, s29);
                        GridItem.pop();
                    };
                    v29();
                }
            };
            this.forEachUpdateFunction(m29, this.items, o29, (p29, q29) => JSON.stringify(p29) + "_" + q29, true, true);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
    }
    countOccurrences(i29, j29) {
        const k29 = new RegExp(j29, 'g');
        const l29 = i29.match(k29);
        return l29 ? l29.length : 0;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
