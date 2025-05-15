var __decorate = (this && this.__decorate) || function (v21, w21, x21, y21) {
    var z21 = arguments.length, a22 = z21 < 3 ? w21 : y21 === null ? y21 = Object.getOwnPropertyDescriptor(w21, x21) : y21, b22;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        a22 = Reflect.decorate(v21, w21, x21, y21);
    else
        for (var c22 = v21.length - 1; c22 >= 0; c22--)
            if (b22 = v21[c22])
                a22 = (z21 < 3 ? b22(a22) : z21 > 3 ? b22(w21, x21, a22) : b22(w21, x21)) || a22;
    return z21 > 3 && a22 && Object.defineProperty(w21, x21, a22), a22;
};
let RefreshDataSource = class RefreshDataSource {
    constructor() {
        this.listeners = [];
        this.originDataArray = [];
    }
    initData(u21) {
        this.originDataArray = u21;
        this.reloadData();
    }
    getDataChangeListener() {
        return this.listeners;
    }
    totalCount() {
        return this.originDataArray.length;
    }
    getDataAll() {
        return this.originDataArray;
    }
    getData(t21) {
        return this.originDataArray[t21];
    }
    registerDataChangeListener(s21) {
        if (this.listeners.indexOf(s21) < 0) {
            this.listeners.push(s21);
        }
    }
    unregisterDataChangeListener(q21) {
        const r21 = this.listeners.indexOf(q21);
        if (r21 >= 0) {
            this.listeners.splice(r21, 1);
        }
    }
    notifyDataReload() {
        this.listeners.forEach(p21 => {
            p21.onDataReloaded();
        });
    }
    notifyDataAdd(n21) {
        this.listeners.forEach(o21 => {
            o21.onDataAdd(n21);
        });
    }
    notifyDataChange(l21) {
        this.listeners.forEach(m21 => {
            m21.onDataChange(l21);
        });
    }
    notifyDataDelete(j21) {
        this.listeners.forEach(k21 => {
            k21.onDataDelete(j21);
        });
    }
    notifyDataMove(g21, h21) {
        this.listeners.forEach(i21 => {
            i21.onDataMove(g21, h21);
        });
    }
    addData(e21, f21) {
        this.originDataArray.splice(e21, 0, f21);
        this.notifyDataAdd(e21);
    }
    pushData(d21) {
        this.originDataArray.push(d21);
        this.notifyDataAdd(this.originDataArray.length - 1);
    }
    pushDataPosition(b21, c21) {
        this.originDataArray.splice(b21, 0, c21);
        this.notifyDataAdd(b21);
    }
    pushDataPositionArray(y20, z20) {
        for (let a21 = 0; a21 < z20.length; a21++) {
            this.originDataArray.splice(y20 + a21, 0, z20[a21]);
            this.notifyDataAdd(y20 + a21);
            if (a21 == z20.length - 1) {
                this.reloadData();
            }
        }
    }
    pushDataArray(x20) {
        this.originDataArray = this.originDataArray.concat(x20);
        this.notifyDataAdd(this.originDataArray.length - 1);
        if (this.refreshCallBack != undefined) {
            this.refreshCallBack(this.originDataArray);
        }
    }
    deleteAllAfterPushArray(w20) {
        this.deleteAll();
        this.reloadData();
        this.pushDataArray(w20);
    }
    pushDataVariable(...v20) {
        this.originDataArray.push(...v20);
        this.notifyDataAdd(this.originDataArray.length - 1);
    }
    deleteFirst() {
        this.notifyDataDelete(0);
        this.originDataArray.shift();
    }
    deleteLast() {
        this.notifyDataDelete(this.originDataArray.length - 1);
        this.originDataArray.pop();
    }
    deleteData(u20) {
        this.originDataArray.splice(u20, 1);
        this.notifyDataDelete(u20);
    }
    deleteDataAssign(s20) {
        for (let t20 = s20.length - 1; t20 >= 0; t20--) {
            this.originDataArray.splice(s20[t20], 1);
        }
        this.reloadData();
    }
    deleteAll(r20) {
        this.notifyDataDelete(this.originDataArray.length - 1);
        this.originDataArray = [];
        this.reloadData();
        if (r20 != undefined) {
            r20();
        }
        if (this.refreshCallBack != undefined) {
            this.refreshCallBack(this.originDataArray);
        }
    }
    moveData(o20, p20) {
        let q20 = this.originDataArray[o20];
        this.originDataArray[o20] = this.originDataArray[p20];
        this.originDataArray[p20] = q20;
        this.notifyDataMove(o20, p20);
    }
    changeData(m20, n20) {
        this.originDataArray.splice(m20, 1, n20);
        this.notifyDataChange(m20);
    }
    reloadData() {
        this.notifyDataReload();
    }
    modifyAllData() {
        this.originDataArray = this.originDataArray.map((l20) => {
            return l20 + '0';
        });
    }
    refreshArrayCallback(k20) {
        this.refreshCallBack = k20;
    }
};
RefreshDataSource = __decorate([
    Observed
], RefreshDataSource);
export { RefreshDataSource };
