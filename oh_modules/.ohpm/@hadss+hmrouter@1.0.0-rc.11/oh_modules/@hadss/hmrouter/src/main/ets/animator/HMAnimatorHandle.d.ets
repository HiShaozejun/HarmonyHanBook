import { OpacityOption, ScaleOption, TranslateOption } from '../template/AnimatorModel';
export declare class HMAnimatorHandle {
    translateOption?: TranslateOption;
    scaleOption?: ScaleOption;
    opacityOption?: OpacityOption;
    extendOption?: ESObject;
    startCallback?: AnimatorCallback;
    finishCallback?: AnimatorCallback;
    onFinishCallback?: AnimatorCallback;
    passiveStartCallback?: AnimatorCallback;
    passiveFinishCallback?: AnimatorCallback;
    passiveOnFinishCallback?: AnimatorCallback;
    customAnimationCallback?: AnimatorCallback;
    passiveCustomAnimationCallback?: AnimatorCallback;
    timeout?: number;
    duration: number;
    curve: Curve | string | ICurve;
    interactive: boolean;
    operation?: NavigationOperation;
    proxy?: NavigationTransitionProxy;
    startOffset?: number;
    actionStartCallback?: (event: GestureEvent) => void;
    updateProgressCallback?: InteractiveCallback;
    actionEndCallback?: InteractiveCallback;
    actionCancelCallback?: InteractiveCancelCallback;
    constructor(translateOption?: TranslateOption, scaleOption?: ScaleOption, opacityOption?: OpacityOption, extendOption?: ESObject);
    /**
     * custom transition start callback
     * define translate/scale/opacity setting of beginning state
     * @param callback
     * @returns
     */
    start(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom transition finish callback
     * define translate/scale/opacity setting of ending state
     * @param callback
     * @returns
     */
    finish(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom transition onFinish callback
     * define translate/scale/opacity setting after ending state
     * @param callback
     * @returns
     */
    onFinish(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom animate
     * @param callback
     * @returns
     */
    customAnimation(callback: AnimatorCallback): HMAnimatorHandle;
    doStart(): void | undefined;
    doFinish(): void | undefined;
    doOnFinish(): void | undefined;
    doCustomAnimation(proxy: NavigationTransitionProxy): void | undefined;
    /**
     * custom transition of passive triggered start callback
     * @param callback
     * @returns
     */
    passiveStart(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom transition of passive triggered finish callback
     * @param callback
     * @returns
     */
    passiveFinish(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom transition of passive triggered onFinish callback
     * @param callback
     * @returns
     */
    passiveOnFinish(callback: AnimatorCallback): HMAnimatorHandle;
    /**
     * custom passive animate
     * @param callback
     * @returns
     */
    passiveCustomAnimation(callback: AnimatorCallback): HMAnimatorHandle;
    doPassiveStart(): void | undefined;
    doPassiveFinish(): void | undefined;
    doPassiveOnFinish(): void | undefined;
    doPassiveCustomAnimation(proxy: NavigationTransitionProxy): void | undefined;
    /**
     * interactive transition of gesture triggered start callback
     * @param callback
     */
    actionStart(callback: (event: GestureEvent) => void): void;
    doActionStart(event: GestureEvent): void;
    /**
     * interactive transition of gesture triggered update progress callback
     * @param callback
     */
    updateProgress(callback: InteractiveCallback): void;
    doUpdateProgress(event: GestureEvent): void;
    /**
     * interactive transition of gesture triggered end callback
     * @param callback
     */
    actionEnd(callback: InteractiveCallback): void;
    doActionEnd(event: GestureEvent): void;
    /**
     * interactive transition of gesture triggered cancel callback
     * @param callback
     */
    actionCancel(callback: InteractiveCancelCallback): void;
    doActionCancel(): void;
    recoverState(): void;
}
export type AnimatorCallback = (translateOption: TranslateOption, scaleOption: ScaleOption, opacityOption: OpacityOption, extendOption?: ESObject, proxy?: NavigationTransitionProxy) => void | undefined;
type InteractiveCallback = (event: GestureEvent, proxy?: NavigationTransitionProxy, operation?: NavigationOperation, startOffset?: number) => void;
type InteractiveCancelCallback = () => void;
export {};
