/**
 * AUTHOR:AbnerMing
 * DATE:2025/5/28
 * INTRODUCE:刷新头-三个小点
 * */
import { RefreshHeaderAttr } from '../attribute/RefreshHeaderAttr';
import { RefreshLayoutStatus } from '../constants/RefreshLayoutStatus';
@Component
export declare struct RefreshHeaderPoints {
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
    aboutToAppear(): void;
    changeState(): void;
    private refreshCircleTranslate;
    private clearCircleTranslate;
    startDefault(): void;
    build(): void;
}
