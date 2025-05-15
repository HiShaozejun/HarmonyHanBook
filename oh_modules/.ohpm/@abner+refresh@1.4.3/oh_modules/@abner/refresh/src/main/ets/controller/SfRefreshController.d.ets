/**
 * AUTHOR:AbnerMing
 * DATE:2024/5/9
 * INTRODUCE:二楼刷新控制器
 * */
export declare class SfRefreshController {
    closeRefresh: boolean;
    isRefreshStart: boolean;
    isAutoRefresh: boolean;
    private isBackFirstFloor;
    backFirstFloor(u1: boolean): void;
    getFirstFloor(): boolean;
    autoRefresh(t1?: boolean): void;
    finishRefresh(): void;
    /**
     * Author:AbnerMing
     * Describe:标记开始位置
     */
    markStartLocation(s1: boolean): void;
}
