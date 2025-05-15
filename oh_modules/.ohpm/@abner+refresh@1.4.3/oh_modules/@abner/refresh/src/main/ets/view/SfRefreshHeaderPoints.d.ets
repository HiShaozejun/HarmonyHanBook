import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/5/28
 * INTRODUCE:三点转动刷新
 * */
@Component
export declare struct SfRefreshHeaderPoints {
    @Prop
    rootHeight: number;
    @Prop
    refreshStatus: RefreshLayoutStatus;
    refreshHeaderAttr?: RefreshHeaderAttr;
    @State
    private _privateCircleColor1?;
    @State
    private _privateCircleColor2?;
    @State
    private _privateCircleColor3?;
    @State
    private _privateCircleColor4?;
    private _privateInterval?;
    @State
    private _privateFirstCircleScale;
    @State
    private _privateSecondCircleScale;
    @State
    private _privateThirdCircleScale;
    @State
    private _privateFirstCircleTranslate;
    @State
    private _privateSecondCircleTranslate;
    @State
    private _privateThirdCircleTranslate;
    private _privateFirstTranslate;
    private _privateSecondTranslate;
    private _privateThirdTranslate;
    @Prop
    showSecondFloorStatus?: boolean;
    @State
    showRefreshAnimation?: boolean;
    @Prop
    firstFloorMargin?: number;
    @Prop
    isHideHeader: boolean;
    firstFloorMarginListener(): void;
    aboutToAppear(): void;
    changeState(): void;
    private refreshCircleTranslate;
    private clearCircleTranslate;
    startDefault(): void;
    build(): void;
}
