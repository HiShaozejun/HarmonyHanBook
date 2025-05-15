export class DataController {
    constructor() {
        this.items = [];
        this.deletePosition = 0;
    }
    getDeletePosition() {
        return this.deletePosition;
    }
    totalCount() {
        return this.items.length;
    }
    getDataAll() {
        return this.items;
    }
    getData(z) {
        return this.items[z];
    }
    init(y) {
        this.items = y;
    }
    add(x) {
        this.items.push(x);
    }
    addPosition(v, w) {
        this.items.splice(v, 0, w);
    }
    addPositionArray(s, t) {
        for (let u = 0; u < t.length; u++) {
            this.items.splice(s + u, 0, t[u]);
        }
    }
    addVariable(...r) {
        this.items.push(...r);
    }
    addArray(q) {
        this.items = this.items.concat(q);
        if (this.refreshCallBack != undefined) {
            this.refreshCallBack(this.items);
        }
    }
    refreshArrayCallback(p) {
        this.refreshCallBack = p;
    }
    refreshArray(o) {
        this.items = o;
    }
    deleteFirst() {
        this.deletePosition = 0;
        this.items.shift();
    }
    deleteLast() {
        this.deletePosition = this.items.length - 1;
        this.items.pop();
    }
    deleteData(l) {
        this.deletePosition = l;
        this.items = this.items.filter((m, n) => n !== l);
        if (this.refreshCallBack != undefined) {
            this.refreshCallBack(this.items);
        }
    }
    deleteAll() {
        this.items = [];
        if (this.refreshCallBack != undefined) {
            this.refreshCallBack(this.items);
        }
    }
    changeData(j, k) {
        if (j < this.items.length) {
            this.items.splice(j, 1, k);
        }
        else {
            console.error("ERROR:索引超过了数组的长度");
        }
    }
}
