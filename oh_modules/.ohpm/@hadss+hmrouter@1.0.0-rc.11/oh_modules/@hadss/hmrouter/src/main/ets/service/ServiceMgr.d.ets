import { HMServiceResp } from '../api/IHMService';
import { HMServiceInstance } from '../store/ComponentInstance';
export declare class HMServiceMgr {
    static classInfoOfSingletonServiceMap: Map<string, HMServiceInstance>;
    static classProvideOfSingletonServiceMap: Map<string, HMServiceInstance>;
    static execute(targetClass: ESObject, functionName: string, ...args: Object[]): ESObject;
    static getService<T>(serviceName: string): T;
    /**
     * Method of synchronously calling HMService decoration
     * @returns
     */
    static request(serviceName: string, ...args: Object[]): HMServiceResp;
}
