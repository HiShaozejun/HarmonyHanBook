/**
 * AUTHOR:AbnerMing
 * DATE:2024/4/7
 * INTRODUCE:全局配置文件
 * */
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
export declare class RefreshConfig {
    private static config;
    private constructor();
    static getInstance(): RefreshConfig;
    private refreshOptions;
    private headerAttr;
    init(c?: RefreshOptions): void;
    getRefreshOptions(): RefreshOptions;
    getRefreshHeaderAttr(): RefreshHeaderAttr;
}
/**
 * AUTHOR:AbnerMing
 * INTRODUCE:全局配置属性
 * */
export declare class RefreshOptions {
    refreshHeaderAttr?: (refreshHeaderAttr: RefreshHeaderAttr) => void;
}
