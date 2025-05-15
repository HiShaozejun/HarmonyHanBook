var __decorate = (this && this.__decorate) || function (k1, l1, m1, n1) {
    var o1 = arguments.length, p1 = o1 < 3 ? l1 : n1 === null ? n1 = Object.getOwnPropertyDescriptor(l1, m1) : n1, q1;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        p1 = Reflect.decorate(k1, l1, m1, n1);
    else
        for (var r1 = k1.length - 1; r1 >= 0; r1--)
            if (q1 = k1[r1])
                p1 = (o1 < 3 ? q1(p1) : o1 > 3 ? q1(l1, m1, p1) : q1(l1, m1)) || p1;
    return o1 > 3 && p1 && Object.defineProperty(l1, m1, p1), p1;
};
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
let RefreshController = class RefreshController {
    constructor() {
        this.closeRefresh = false;
        this.closeLoadMore = false;
        this.isRefreshStart = true;
        this.isRefreshEnd = true;
        this.isFooterNothing = false;
        this.isAutoRefresh = false;
        this.isScrollTop = false;
        this.isNothingFixedBottom = false;
        this.refreshLayoutStatus = RefreshLayoutStatus.Finish;
        this.loadMoreLayoutStatus = LoadMoreLayoutStatus.Finish;
    }
    getRefreshLayoutStatus() {
        return this.refreshLayoutStatus;
    }
    getLoadMoreLayoutStatus() {
        return this.loadMoreLayoutStatus;
    }
    setRefreshLayoutStatus(j1) {
        this.refreshLayoutStatus = j1;
    }
    setLoadMoreLayoutStatus(i1) {
        this.loadMoreLayoutStatus = i1;
    }
    markEndLocation(h1) {
        this.isRefreshEnd = h1;
    }
    markStartLocation(g1) {
        this.isRefreshStart = g1;
    }
    markRefreshEndLocation(f1) {
        this.isRefreshEnd = f1;
    }
    finishRefresh() {
        setTimeout(() => {
            this.closeRefresh = true;
        }, 100);
    }
    finishLoadMore(e1 = false) {
        this.isFooterNothing = e1;
        this.closeLoadMore = true;
    }
    finishLoadMoreFixedBottom(d1 = false) {
        this.closeLoadMore = true;
        setTimeout(() => {
            this.isNothingFixedBottom = d1;
        }, 500);
    }
    autoRefresh(c1 = true) {
        setTimeout(() => {
            this.isAutoRefresh = c1;
        }, 100);
    }
    scrollTop() {
        this.isScrollTop = true;
    }
    scrollEdge(b1) {
        this.tempEdge = b1;
    }
    getEdge() {
        return this.tempEdge;
    }
    scrollToIndex(a1) {
        this.tempScrollToIndex = a1;
    }
    getScrollToIndex() {
        return this.tempScrollToIndex;
    }
};
RefreshController = __decorate([
    Observed
], RefreshController);
export { RefreshController };
