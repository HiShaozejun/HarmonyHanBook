import { IHMAnimator } from './IHMAnimator';
import { IHMInterceptor } from './IHMInterceptor';
/**
 * Router push/replace/pop params
 */
export interface HMRouterPathInfo {
    navigationId?: string;
    pageUrl?: string;
    param?: ESObject;
    interceptors?: IHMInterceptor[];
    animator?: IHMAnimator | boolean;
    skipAllInterceptor?: boolean;
}
