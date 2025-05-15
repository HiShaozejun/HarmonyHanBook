import { LoadMoreFooterAttr } from '../attribute/LoadMoreFooterAttr';
import { LoadMoreLayoutStatus } from '../constants/LoadMoreLayoutStatus';
/**
 * AUTHOR:AbnerMing
 * DATE:2023/10/10
 * INTRODUCE:默认的刷新尾
 * */
@Component
export declare struct RefreshDefaultFooter {
    @Prop
    loadMoreStatus: LoadMoreLayoutStatus;
    loadMoreFooterAttr: LoadMoreFooterAttr;
    build(): void;
}
