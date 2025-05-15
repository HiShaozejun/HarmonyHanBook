import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/4/29
 * INTRODUCE:刷新头
 * */
@Component
export declare struct SfRefreshHeaderView {
    @Prop
    rootHeight: number;
    @Prop
    scrollStatus: RefreshLayoutStatus;
    @Prop
    rotateAngle: number;
    @State
    refreshTime: string;
    refreshHeaderAttr?: RefreshHeaderAttr;
    aboutToAppear(): void;
    changeState(): void;
    build(): void;
    getTime(): string;
}
