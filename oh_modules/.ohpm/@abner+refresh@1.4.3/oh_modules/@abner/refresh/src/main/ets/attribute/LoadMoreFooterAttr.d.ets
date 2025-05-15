/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/10
 * INTRODUCE:加载尾部属性
 * */
export declare class LoadMoreFooterAttr {
    width: Length;
    height: number;
    backgroundColor?: ResourceColor;
    footerPullingText?: string | Resource;
    footerReleaseText?: string | Resource;
    footerLoadingText?: string | Resource;
    footerFinishText?: string | Resource;
    footerNothingText?: string | Resource;
    fontColor?: ResourceColor;
    fontSize?: number | string | Resource;
    fontWeight?: number | FontWeight | string;
    fontFamily?: string | Resource;
    loadingSrc?: PixelMap | ResourceStr | DrawableDescriptor;
    loadingIconWidth?: Length;
    loadingIconHeight?: Length;
    loadingMarginRight?: Length;
}
