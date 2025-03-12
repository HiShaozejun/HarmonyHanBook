import { HMInterceptorAction } from '../router/HMInterceptorAction';
import { HMInterceptorInfo } from '../router/HMInterceptorInfo';
export interface IHMInterceptor {
    handle(info: HMInterceptorInfo): HMInterceptorAction;
}
