import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
export class RefreshConfig {
    constructor() {
        this.refreshOptions = new RefreshOptions();
        this.headerAttr = new RefreshHeaderAttr();
    }
    static getInstance() {
        if (!RefreshConfig.config) {
            RefreshConfig.config = new RefreshConfig();
        }
        return RefreshConfig.config;
    }
    init(c) {
        if (c == undefined) {
            return;
        }
        if (c?.refreshHeaderAttr != null) {
            c?.refreshHeaderAttr(this.headerAttr);
        }
    }
    getRefreshOptions() {
        return this.refreshOptions;
    }
    getRefreshHeaderAttr() {
        return this.headerAttr;
    }
}
export class RefreshOptions {
}
