import { IHMAnimator } from '../api/IHMAnimator';
import { OpacityOption as ObservedOpacityOption, ScaleOption as ObservedScaleOption } from '../template/AnimatorModel';
import { HMAnimatorHandle } from './HMAnimatorHandle';
export declare class BuiltInAnimator implements IHMAnimator {
    direction: IHMAnimator.Direction | undefined;
    opacity?: ObservedOpacityOption;
    scale?: ObservedScaleOption;
    effect(enterHandle: HMAnimatorHandle, exitHandle: HMAnimatorHandle): void;
}
