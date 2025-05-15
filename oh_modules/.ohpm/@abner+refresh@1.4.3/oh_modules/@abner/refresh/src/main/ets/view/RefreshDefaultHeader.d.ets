import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/10
 * INTRODUCE:默认的刷新头
 * */
@Component
export declare struct RefreshDefaultHeader {
    @Prop
    refreshStatus: RefreshLayoutStatus;
    @Prop
    rotateAngle: number;
    @State
    refreshTime: string;
    refreshHeaderAttr?: RefreshHeaderAttr;
    aboutToAppear(): void;
    changeState(): void;
    build(): void;
    private getTime;
}
