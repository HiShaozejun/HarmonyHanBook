import { HMInterceptorInfo } from './HMInterceptorInfo';
export declare class HMInterceptorMgr {
    private static instance;
    static getInstance(): HMInterceptorMgr;
    /**
     * Execute interceptor
     * @param {HMInterceptorInfo} info - interceptor info
     * @return {boolean}
     * If the interceptor returns DO-REJECT and no longer executes subsequent interceptors and intercepts jumps, it is true.
     * If it returns DO-NEXT or DO_TRANSITION and no longer executes subsequent interceptors and does not intercept jumps, it is false
     */
    executeInterceptor(info: HMInterceptorInfo): boolean;
    private initInterceptor;
    private getInterceptorResult;
    private runInterceptor;
}
