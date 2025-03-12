import { HMRouterPathCallback } from '../api/HMRouterPathCallback';
import { HMRouterPathInfo } from '../api/HMRouterPathInfo';
import { HMActionType } from './HMActionType';
export interface HMInterceptorInfo {
    srcName: string;
    targetName?: string;
    isSrc?: boolean;
    type: HMActionType;
    routerPathInfo: HMRouterPathInfo;
    routerPathCallback?: HMRouterPathCallback;
    context: UIContext;
}
