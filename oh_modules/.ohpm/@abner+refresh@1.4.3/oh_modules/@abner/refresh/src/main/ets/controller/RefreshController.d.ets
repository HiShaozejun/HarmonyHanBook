import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/10
 * INTRODUCE:刷新控制器
 * */
@Observed
export declare class RefreshController {
    closeRefresh: boolean;
    closeLoadMore: boolean;
    isRefreshStart: boolean;
    isRefreshEnd: boolean;
    isFooterNothing: boolean;
    isAutoRefresh: boolean;
    isScrollTop: boolean;
    isNothingFixedBottom: boolean;
    private refreshLayoutStatus;
    private loadMoreLayoutStatus;
    getRefreshLayoutStatus(): RefreshLayoutStatus;
    getLoadMoreLayoutStatus(): LoadMoreLayoutStatus;
    setRefreshLayoutStatus(j1: RefreshLayoutStatus): void;
    setLoadMoreLayoutStatus(i1: LoadMoreLayoutStatus): void;
    /**
     * Author:AbnerMing
     * Describe:标记结束位置
     * @deprecated since 1.1.7 方法已过时
     */
    markEndLocation(h1: boolean): void;
    /**
     * Author:AbnerMing
     * Describe:标记开始位置
     * @deprecated since 1.1.7 方法已过时
     */
    markStartLocation(g1: boolean): void;
    /**
     * @deprecated since 1.1.6 属性已过时
     */
    markRefreshEndLocation(f1: boolean): void;
    finishRefresh(): void;
    finishLoadMore(e1?: boolean): void;
    finishLoadMoreFixedBottom(d1?: boolean): void;
    autoRefresh(c1?: boolean): void;
    scrollTop(): void;
    private tempEdge?;
    scrollEdge(b1: Edge | undefined): void;
    getEdge(): Edge | undefined;
    private tempScrollToIndex?;
    scrollToIndex(a1: number | undefined): void;
    getScrollToIndex(): number | undefined;
}
