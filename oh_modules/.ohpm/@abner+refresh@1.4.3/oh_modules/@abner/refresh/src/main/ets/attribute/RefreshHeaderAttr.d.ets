import { RefreshHeaderTimeFormat, RefreshHeaderTimeLabel } from '../constants/RefreshEnum';
import { RefreshHeaderType } from '../constants/RefreshHeaderType';
import { HeaderPointsAttr } from './HeaderPointsAttr';
/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/10
 * INTRODUCE:刷新头属性
 * */
export declare class RefreshHeaderAttr {
    headerType?: RefreshHeaderType;
    width: Length;
    height: number;
    timeFormat?: RefreshHeaderTimeFormat;
    timeLabel?: RefreshHeaderTimeLabel;
    hideTime?: boolean;
    fontSize?: number | string | Resource;
    fontColor?: ResourceColor;
    timeFontSize?: number | string | Resource;
    timeFontColor?: ResourceColor;
    marginIconLeft?: Length;
    iconDown?: PixelMap | ResourceStr | DrawableDescriptor;
    iconUpLoad?: PixelMap | ResourceStr | DrawableDescriptor;
    pullingText?: string | Resource;
    releaseText?: string | Resource;
    refreshingText?: string | Resource;
    finishText?: string | Resource;
    releaseHalfFloorText?: string | Resource;
    halfFloorText?: string | Resource;
    firstFloorText?: string | Resource;
    releaseSecondFloorText?: string | Resource;
    secondFloorText?: string | Resource;
    secondFloorSlideUpText?: string | Resource;
    backgroundColor?: ResourceColor;
    headerPointsAttr?: HeaderPointsAttr;
    marginBottom?: Length;
    iconWidth?: Length;
    iconHeight?: Length;
}
