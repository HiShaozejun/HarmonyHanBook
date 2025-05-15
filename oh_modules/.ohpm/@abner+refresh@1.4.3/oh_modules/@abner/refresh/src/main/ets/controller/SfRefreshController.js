export class SfRefreshController {
    constructor() {
        this.closeRefresh = false;
        this.isRefreshStart = true;
        this.isAutoRefresh = false;
        this.isBackFirstFloor = false;
    }
    backFirstFloor(u1) {
        this.isBackFirstFloor = u1;
    }
    getFirstFloor() {
        return this.isBackFirstFloor;
    }
    autoRefresh(t1 = true) {
        setTimeout(() => {
            this.isAutoRefresh = t1;
        }, 100);
    }
    finishRefresh() {
        this.closeRefresh = true;
    }
    markStartLocation(s1) {
        this.isRefreshStart = s1;
    }
}
