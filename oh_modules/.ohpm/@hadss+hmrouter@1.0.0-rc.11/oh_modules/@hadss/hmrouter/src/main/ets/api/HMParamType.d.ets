export declare enum HMParamType {
    all = 0,
    urlParam = 1,
    routeParam = 2
}
export interface HMPageParam {
    data: Object;
    urlParam: Map<string, Object> | null;
}
