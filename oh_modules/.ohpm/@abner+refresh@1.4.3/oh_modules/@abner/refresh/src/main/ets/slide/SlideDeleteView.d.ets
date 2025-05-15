/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/14
 * INTRODUCE:侧滑删除组件
 * */
import { SlideMenuAttr } from '../attribute/SlideMenuAttr';
@Component
export declare struct SlideDeleteView {
    data: Object;
    index: number;
    @BuilderParam
    itemLayout: (item: Object, index: number) => void;
    @BuilderParam
    slideDeleteLayout: (index: number) => void;
    private _privateSlidPanOption;
    @State
    slideRightOffset: number[];
    @Link
    slideEndPosition: number;
    @State
    actionStartX: number;
    private _privateSlideMenuAttr;
    slideMenuAttr?: (attribute: SlideMenuAttr) => void;
    aboutToAppear(): void;
    build(): void;
}
