if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { LoadMoreFooterAttr } from './attribute/LoadMoreFooterAttr';
import { RefreshHeaderAttr } from './attribute/RefreshHeaderAttr';
import { RefreshConfig } from './config/RefreshConfig';
import { LoadMoreLayoutStatus } from './constants/LoadMoreLayoutStatus';
import { RefreshHeaderType } from './constants/RefreshHeaderType';
import { RefreshLayoutStatus } from './constants/RefreshLayoutStatus';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { RefreshController } from './controller/RefreshController';
import { RefreshDefaultFooter } from './view/RefreshDefaultFooter';
import { RefreshDefaultHeader } from './view/RefreshDefaultHeader';
import { RefreshHeaderPoints } from './view/RefreshHeaderPoints';
import window from "@ohos.window";
import { RefreshScrollModifier } from './attribute/RefreshScrollModifier';
import { ContentScrollModifier } from './attribute/ContentScrollModifier';
export class RefreshLayout extends ViewPU {
    constructor(e26, f26, g26, h26 = -1, i26 = undefined, j26) {
        super(e26, g26, h26, j26);
        if (typeof i26 === "function") {
            this.paramsGenerator_ = i26;
        }
        this.__layoutWidth = new SynchedPropertyObjectOneWayPU(f26.layoutWidth, this, "layoutWidth");
        this.__layoutHeight = new SynchedPropertyObjectOneWayPU(f26.layoutHeight, this, "layoutHeight");
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.itemHeaderLayout = undefined;
        this.itemFooterLayout = undefined;
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this.__controller = new ObservedPropertyObjectPU(new RefreshController(), this, "controller");
        this.___privateRefreshLayoutStatus = new ObservedPropertySimplePU(RefreshLayoutStatus.Pulling, this, "_privateRefreshLayoutStatus");
        this.___privateLoadMoreLayoutStatus = new ObservedPropertySimplePU(LoadMoreLayoutStatus.Pulling, this, "_privateLoadMoreLayoutStatus");
        this.___privateRotateAngle = new ObservedPropertySimplePU(0, this, "_privateRotateAngle");
        this._privateTouchDownY = 0;
        this.___privateHeaderMarginTop = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginTop");
        this.___privateHeaderMarginBottom = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginBottom");
        this.___privateHeaderMarginDuration = new ObservedPropertySimplePU(0, this, "_privateHeaderMarginDuration");
        this._privateAnimationDuration = 300;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(f26.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(f26.enableLoadMore, this, "enableLoadMore");
        this.scroller = new Scroller();
        this.contentScroller = new Scroller();
        this.onContentScroller = undefined;
        this._refreshHeaderAttr = new RefreshHeaderAttr();
        this.refreshHeaderAttribute = undefined;
        this._loadMoreFooterAttr = new LoadMoreFooterAttr();
        this.loadMoreFooterAttribute = undefined;
        this.__isScrollSpring = new SynchedPropertySimpleOneWayPU(f26.isScrollSpring, this, "isScrollSpring");
        this.scrollSpringHeight = undefined;
        this._privatePrivateIsRefresh = true;
        this._privateEndRefreshTimeout = 0;
        this._privateTouchRefreshHeight = 0;
        this.__parentEnable = new ObservedPropertySimplePU(true, this, "parentEnable");
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(f26.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(f26.showErrorLayout, this, "showErrorLayout");
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(f26.showLoadingLayout, this, "showLoadingLayout");
        this.onScroll = undefined;
        this.onWillScroll = undefined;
        this.onDidScroll = undefined;
        this.onScrollEdge = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.onScrollTouchEvent = undefined;
        this.onReachStart = undefined;
        this.onReachEnd = undefined;
        this.onParentAreaChange = undefined;
        this.onRefreshScrollEdge = undefined;
        this.onRefreshScrollToIndex = undefined;
        this.onScrollDirection = undefined;
        this.onGlobalPosition = undefined;
        this.onScrollTouch = undefined;
        this.onHeadAreaChange = undefined;
        this.childScroller = undefined;
        this.useMarkLocation = false;
        this.__refreshPosition = new SynchedPropertySimpleOneWayPU(f26.refreshPosition, this, "refreshPosition");
        this.__parentNestedScroll = new ObservedPropertyObjectPU({
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.PARENT_FIRST
        }, this, "parentNestedScroll");
        this.__isRefreshSticky = new SynchedPropertySimpleOneWayPU(f26.isRefreshSticky, this, "isRefreshSticky");
        this.__isRefreshTopSticky = new SynchedPropertySimpleOneWayPU(f26.isRefreshTopSticky, this, "isRefreshTopSticky");
        this.__refreshStickyPosition = new SynchedPropertySimpleOneWayPU(f26.refreshStickyPosition, this, "refreshStickyPosition");
        this.__useMarkStickyPosition = new SynchedPropertySimpleOneWayPU(f26.useMarkStickyPosition, this, "useMarkStickyPosition");
        this.enableScrollInteraction = undefined;
        this.onStickyNestedScroll = undefined;
        this.onNestedScroll = undefined;
        this.onContentScroll = undefined;
        this.onContentWillScroll = undefined;
        this.onContentDidScroll = undefined;
        this.onContentScrollEdge = undefined;
        this.onContentScrollStart = undefined;
        this.onContentScrollStop = undefined;
        this.onContentScrollTouchEvent = undefined;
        this.onContentReachStart = undefined;
        this.onContentReachEnd = undefined;
        this.___privateGlobalPositionMargin = new ObservedPropertySimplePU(0, this, "_privateGlobalPositionMargin");
        this.___privateNavigationBarHeight = new ObservedPropertySimplePU(0, this, "_privateNavigationBarHeight");
        this.parentEdgeEffect = EdgeEffect.Spring;
        this.scrollBarState = BarState.Off;
        this.__groupNoSticky = new SynchedPropertySimpleOneWayPU(f26.groupNoSticky, this, "groupNoSticky");
        this.onScrollDistance = undefined;
        this.___privateIsNothingFixedBottom = new ObservedPropertySimplePU(false, this, "_privateIsNothingFixedBottom");
        this.slideDisplayLoadData = false;
        this.isNeedLoadRebound = true;
        this.isPullUpProhibitTouch = true;
        this.isPullDownProhibitTouch = true;
        this.upFirstScrollOffset = -1;
        this.isBottomScroll = false;
        this.__isAdaptiveHeight = new SynchedPropertySimpleOneWayPU(f26.isAdaptiveHeight, this, "isAdaptiveHeight");
        this.__refreshScrollModifier = new ObservedPropertyObjectPU(new RefreshScrollModifier(), this, "refreshScrollModifier");
        this.__contentScrollModifier = new ObservedPropertyObjectPU(new ContentScrollModifier(), this, "contentScrollModifier");
        this.__refreshHeight = new SynchedPropertyObjectOneWayPU(f26.refreshHeight, this, "refreshHeight");
        this.isChildViewHeightUndefined = true;
        this.setInitiallyProvidedValue(f26);
        this.declareWatch("controller", this.listenerController);
        this.declareWatch("_privateRefreshLayoutStatus", this.listenerRefreshLayoutStatus);
        this.declareWatch("_privateLoadMoreLayoutStatus", this.listenerLoadMoreLayoutStatus);
        this.declareWatch("enableRefresh", this.listenerEnableRefresh);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(d26) {
        if (d26.layoutWidth === undefined) {
            this.__layoutWidth.set("100%");
        }
        if (d26.layoutHeight === undefined) {
            this.__layoutHeight.set("100%");
        }
        if (d26.itemLayout !== undefined) {
            this.itemLayout = d26.itemLayout;
        }
        if (d26.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = d26.headerRefreshLayout;
        }
        if (d26.footerLoadLayout !== undefined) {
            this.footerLoadLayout = d26.footerLoadLayout;
        }
        if (d26.itemHeaderLayout !== undefined) {
            this.itemHeaderLayout = d26.itemHeaderLayout;
        }
        if (d26.itemFooterLayout !== undefined) {
            this.itemFooterLayout = d26.itemFooterLayout;
        }
        if (d26.onRefresh !== undefined) {
            this.onRefresh = d26.onRefresh;
        }
        if (d26.onLoadMore !== undefined) {
            this.onLoadMore = d26.onLoadMore;
        }
        if (d26.controller !== undefined) {
            this.controller = d26.controller;
        }
        if (d26._privateRefreshLayoutStatus !== undefined) {
            this._privateRefreshLayoutStatus = d26._privateRefreshLayoutStatus;
        }
        if (d26._privateLoadMoreLayoutStatus !== undefined) {
            this._privateLoadMoreLayoutStatus = d26._privateLoadMoreLayoutStatus;
        }
        if (d26._privateRotateAngle !== undefined) {
            this._privateRotateAngle = d26._privateRotateAngle;
        }
        if (d26._privateTouchDownY !== undefined) {
            this._privateTouchDownY = d26._privateTouchDownY;
        }
        if (d26._privateHeaderMarginTop !== undefined) {
            this._privateHeaderMarginTop = d26._privateHeaderMarginTop;
        }
        if (d26._privateHeaderMarginBottom !== undefined) {
            this._privateHeaderMarginBottom = d26._privateHeaderMarginBottom;
        }
        if (d26._privateHeaderMarginDuration !== undefined) {
            this._privateHeaderMarginDuration = d26._privateHeaderMarginDuration;
        }
        if (d26._privateAnimationDuration !== undefined) {
            this._privateAnimationDuration = d26._privateAnimationDuration;
        }
        if (d26.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (d26.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (d26.scroller !== undefined) {
            this.scroller = d26.scroller;
        }
        if (d26.contentScroller !== undefined) {
            this.contentScroller = d26.contentScroller;
        }
        if (d26.onContentScroller !== undefined) {
            this.onContentScroller = d26.onContentScroller;
        }
        if (d26._refreshHeaderAttr !== undefined) {
            this._refreshHeaderAttr = d26._refreshHeaderAttr;
        }
        if (d26.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = d26.refreshHeaderAttribute;
        }
        if (d26._loadMoreFooterAttr !== undefined) {
            this._loadMoreFooterAttr = d26._loadMoreFooterAttr;
        }
        if (d26.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = d26.loadMoreFooterAttribute;
        }
        if (d26.isScrollSpring === undefined) {
            this.__isScrollSpring.set(true);
        }
        if (d26.scrollSpringHeight !== undefined) {
            this.scrollSpringHeight = d26.scrollSpringHeight;
        }
        if (d26._privatePrivateIsRefresh !== undefined) {
            this._privatePrivateIsRefresh = d26._privatePrivateIsRefresh;
        }
        if (d26._privateEndRefreshTimeout !== undefined) {
            this._privateEndRefreshTimeout = d26._privateEndRefreshTimeout;
        }
        if (d26._privateTouchRefreshHeight !== undefined) {
            this._privateTouchRefreshHeight = d26._privateTouchRefreshHeight;
        }
        if (d26.parentEnable !== undefined) {
            this.parentEnable = d26.parentEnable;
        }
        if (d26.emptyLayout !== undefined) {
            this.emptyLayout = d26.emptyLayout;
        }
        if (d26.errorLayout !== undefined) {
            this.errorLayout = d26.errorLayout;
        }
        if (d26.loadingLayout !== undefined) {
            this.loadingLayout = d26.loadingLayout;
        }
        if (d26.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (d26.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (d26.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (d26.onScroll !== undefined) {
            this.onScroll = d26.onScroll;
        }
        if (d26.onWillScroll !== undefined) {
            this.onWillScroll = d26.onWillScroll;
        }
        if (d26.onDidScroll !== undefined) {
            this.onDidScroll = d26.onDidScroll;
        }
        if (d26.onScrollEdge !== undefined) {
            this.onScrollEdge = d26.onScrollEdge;
        }
        if (d26.onScrollStart !== undefined) {
            this.onScrollStart = d26.onScrollStart;
        }
        if (d26.onScrollStop !== undefined) {
            this.onScrollStop = d26.onScrollStop;
        }
        if (d26.onScrollTouchEvent !== undefined) {
            this.onScrollTouchEvent = d26.onScrollTouchEvent;
        }
        if (d26.onReachStart !== undefined) {
            this.onReachStart = d26.onReachStart;
        }
        if (d26.onReachEnd !== undefined) {
            this.onReachEnd = d26.onReachEnd;
        }
        if (d26.onParentAreaChange !== undefined) {
            this.onParentAreaChange = d26.onParentAreaChange;
        }
        if (d26.onRefreshScrollEdge !== undefined) {
            this.onRefreshScrollEdge = d26.onRefreshScrollEdge;
        }
        if (d26.onRefreshScrollToIndex !== undefined) {
            this.onRefreshScrollToIndex = d26.onRefreshScrollToIndex;
        }
        if (d26.onScrollDirection !== undefined) {
            this.onScrollDirection = d26.onScrollDirection;
        }
        if (d26.onGlobalPosition !== undefined) {
            this.onGlobalPosition = d26.onGlobalPosition;
        }
        if (d26.onScrollTouch !== undefined) {
            this.onScrollTouch = d26.onScrollTouch;
        }
        if (d26.onHeadAreaChange !== undefined) {
            this.onHeadAreaChange = d26.onHeadAreaChange;
        }
        if (d26.childScroller !== undefined) {
            this.childScroller = d26.childScroller;
        }
        if (d26.useMarkLocation !== undefined) {
            this.useMarkLocation = d26.useMarkLocation;
        }
        if (d26.refreshPosition === undefined) {
            this.__refreshPosition.set(RefreshPositionEnum.TOP);
        }
        if (d26.parentNestedScroll !== undefined) {
            this.parentNestedScroll = d26.parentNestedScroll;
        }
        if (d26.isRefreshSticky === undefined) {
            this.__isRefreshSticky.set(false);
        }
        if (d26.isRefreshTopSticky === undefined) {
            this.__isRefreshTopSticky.set(false);
        }
        if (d26.refreshStickyPosition === undefined) {
            this.__refreshStickyPosition.set(RefreshPositionEnum.TOP);
        }
        if (d26.useMarkStickyPosition === undefined) {
            this.__useMarkStickyPosition.set(undefined);
        }
        if (d26.enableScrollInteraction !== undefined) {
            this.enableScrollInteraction = d26.enableScrollInteraction;
        }
        if (d26.onStickyNestedScroll !== undefined) {
            this.onStickyNestedScroll = d26.onStickyNestedScroll;
        }
        if (d26.onNestedScroll !== undefined) {
            this.onNestedScroll = d26.onNestedScroll;
        }
        if (d26.onContentScroll !== undefined) {
            this.onContentScroll = d26.onContentScroll;
        }
        if (d26.onContentWillScroll !== undefined) {
            this.onContentWillScroll = d26.onContentWillScroll;
        }
        if (d26.onContentDidScroll !== undefined) {
            this.onContentDidScroll = d26.onContentDidScroll;
        }
        if (d26.onContentScrollEdge !== undefined) {
            this.onContentScrollEdge = d26.onContentScrollEdge;
        }
        if (d26.onContentScrollStart !== undefined) {
            this.onContentScrollStart = d26.onContentScrollStart;
        }
        if (d26.onContentScrollStop !== undefined) {
            this.onContentScrollStop = d26.onContentScrollStop;
        }
        if (d26.onContentScrollTouchEvent !== undefined) {
            this.onContentScrollTouchEvent = d26.onContentScrollTouchEvent;
        }
        if (d26.onContentReachStart !== undefined) {
            this.onContentReachStart = d26.onContentReachStart;
        }
        if (d26.onContentReachEnd !== undefined) {
            this.onContentReachEnd = d26.onContentReachEnd;
        }
        if (d26._privateGlobalPositionMargin !== undefined) {
            this._privateGlobalPositionMargin = d26._privateGlobalPositionMargin;
        }
        if (d26._privateNavigationBarHeight !== undefined) {
            this._privateNavigationBarHeight = d26._privateNavigationBarHeight;
        }
        if (d26.parentEdgeEffect !== undefined) {
            this.parentEdgeEffect = d26.parentEdgeEffect;
        }
        if (d26.scrollBarState !== undefined) {
            this.scrollBarState = d26.scrollBarState;
        }
        if (d26.groupNoSticky === undefined) {
            this.__groupNoSticky.set(false);
        }
        if (d26.onScrollDistance !== undefined) {
            this.onScrollDistance = d26.onScrollDistance;
        }
        if (d26._privateIsNothingFixedBottom !== undefined) {
            this._privateIsNothingFixedBottom = d26._privateIsNothingFixedBottom;
        }
        if (d26.slideDisplayLoadData !== undefined) {
            this.slideDisplayLoadData = d26.slideDisplayLoadData;
        }
        if (d26.isNeedLoadRebound !== undefined) {
            this.isNeedLoadRebound = d26.isNeedLoadRebound;
        }
        if (d26.isPullUpProhibitTouch !== undefined) {
            this.isPullUpProhibitTouch = d26.isPullUpProhibitTouch;
        }
        if (d26.isPullDownProhibitTouch !== undefined) {
            this.isPullDownProhibitTouch = d26.isPullDownProhibitTouch;
        }
        if (d26.upFirstScrollOffset !== undefined) {
            this.upFirstScrollOffset = d26.upFirstScrollOffset;
        }
        if (d26.isBottomScroll !== undefined) {
            this.isBottomScroll = d26.isBottomScroll;
        }
        if (d26.isAdaptiveHeight === undefined) {
            this.__isAdaptiveHeight.set(false);
        }
        if (d26.refreshScrollModifier !== undefined) {
            this.refreshScrollModifier = d26.refreshScrollModifier;
        }
        if (d26.contentScrollModifier !== undefined) {
            this.contentScrollModifier = d26.contentScrollModifier;
        }
        if (d26.refreshHeight === undefined) {
            this.__refreshHeight.set(-1);
        }
        if (d26.isChildViewHeightUndefined !== undefined) {
            this.isChildViewHeightUndefined = d26.isChildViewHeightUndefined;
        }
    }
    updateStateVars(c26) {
        this.__layoutWidth.reset(c26.layoutWidth);
        this.__layoutHeight.reset(c26.layoutHeight);
        this.__enableRefresh.reset(c26.enableRefresh);
        this.__enableLoadMore.reset(c26.enableLoadMore);
        this.__isScrollSpring.reset(c26.isScrollSpring);
        this.__showEmptyLayout.reset(c26.showEmptyLayout);
        this.__showErrorLayout.reset(c26.showErrorLayout);
        this.__showLoadingLayout.reset(c26.showLoadingLayout);
        this.__refreshPosition.reset(c26.refreshPosition);
        this.__isRefreshSticky.reset(c26.isRefreshSticky);
        this.__isRefreshTopSticky.reset(c26.isRefreshTopSticky);
        this.__refreshStickyPosition.reset(c26.refreshStickyPosition);
        this.__useMarkStickyPosition.reset(c26.useMarkStickyPosition);
        this.__groupNoSticky.reset(c26.groupNoSticky);
        this.__isAdaptiveHeight.reset(c26.isAdaptiveHeight);
        this.__refreshHeight.reset(c26.refreshHeight);
    }
    purgeVariableDependenciesOnElmtId(b26) {
        this.__layoutWidth.purgeDependencyOnElmtId(b26);
        this.__layoutHeight.purgeDependencyOnElmtId(b26);
        this.__controller.purgeDependencyOnElmtId(b26);
        this.___privateRefreshLayoutStatus.purgeDependencyOnElmtId(b26);
        this.___privateLoadMoreLayoutStatus.purgeDependencyOnElmtId(b26);
        this.___privateRotateAngle.purgeDependencyOnElmtId(b26);
        this.___privateHeaderMarginTop.purgeDependencyOnElmtId(b26);
        this.___privateHeaderMarginBottom.purgeDependencyOnElmtId(b26);
        this.___privateHeaderMarginDuration.purgeDependencyOnElmtId(b26);
        this.__enableRefresh.purgeDependencyOnElmtId(b26);
        this.__enableLoadMore.purgeDependencyOnElmtId(b26);
        this.__isScrollSpring.purgeDependencyOnElmtId(b26);
        this.__parentEnable.purgeDependencyOnElmtId(b26);
        this.__showEmptyLayout.purgeDependencyOnElmtId(b26);
        this.__showErrorLayout.purgeDependencyOnElmtId(b26);
        this.__showLoadingLayout.purgeDependencyOnElmtId(b26);
        this.__refreshPosition.purgeDependencyOnElmtId(b26);
        this.__parentNestedScroll.purgeDependencyOnElmtId(b26);
        this.__isRefreshSticky.purgeDependencyOnElmtId(b26);
        this.__isRefreshTopSticky.purgeDependencyOnElmtId(b26);
        this.__refreshStickyPosition.purgeDependencyOnElmtId(b26);
        this.__useMarkStickyPosition.purgeDependencyOnElmtId(b26);
        this.___privateGlobalPositionMargin.purgeDependencyOnElmtId(b26);
        this.___privateNavigationBarHeight.purgeDependencyOnElmtId(b26);
        this.__groupNoSticky.purgeDependencyOnElmtId(b26);
        this.___privateIsNothingFixedBottom.purgeDependencyOnElmtId(b26);
        this.__isAdaptiveHeight.purgeDependencyOnElmtId(b26);
        this.__refreshScrollModifier.purgeDependencyOnElmtId(b26);
        this.__contentScrollModifier.purgeDependencyOnElmtId(b26);
        this.__refreshHeight.purgeDependencyOnElmtId(b26);
    }
    aboutToBeDeleted() {
        this.__layoutWidth.aboutToBeDeleted();
        this.__layoutHeight.aboutToBeDeleted();
        this.__controller.aboutToBeDeleted();
        this.___privateRefreshLayoutStatus.aboutToBeDeleted();
        this.___privateLoadMoreLayoutStatus.aboutToBeDeleted();
        this.___privateRotateAngle.aboutToBeDeleted();
        this.___privateHeaderMarginTop.aboutToBeDeleted();
        this.___privateHeaderMarginBottom.aboutToBeDeleted();
        this.___privateHeaderMarginDuration.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__isScrollSpring.aboutToBeDeleted();
        this.__parentEnable.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        this.__parentNestedScroll.aboutToBeDeleted();
        this.__isRefreshSticky.aboutToBeDeleted();
        this.__isRefreshTopSticky.aboutToBeDeleted();
        this.__refreshStickyPosition.aboutToBeDeleted();
        this.__useMarkStickyPosition.aboutToBeDeleted();
        this.___privateGlobalPositionMargin.aboutToBeDeleted();
        this.___privateNavigationBarHeight.aboutToBeDeleted();
        this.__groupNoSticky.aboutToBeDeleted();
        this.___privateIsNothingFixedBottom.aboutToBeDeleted();
        this.__isAdaptiveHeight.aboutToBeDeleted();
        this.__refreshScrollModifier.aboutToBeDeleted();
        this.__contentScrollModifier.aboutToBeDeleted();
        this.__refreshHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get layoutWidth() {
        return this.__layoutWidth.get();
    }
    set layoutWidth(a26) {
        this.__layoutWidth.set(a26);
    }
    get layoutHeight() {
        return this.__layoutHeight.get();
    }
    set layoutHeight(z25) {
        this.__layoutHeight.set(z25);
    }
    get controller() {
        return this.__controller.get();
    }
    set controller(y25) {
        this.__controller.set(y25);
    }
    get _privateRefreshLayoutStatus() {
        return this.___privateRefreshLayoutStatus.get();
    }
    set _privateRefreshLayoutStatus(x25) {
        this.___privateRefreshLayoutStatus.set(x25);
    }
    get _privateLoadMoreLayoutStatus() {
        return this.___privateLoadMoreLayoutStatus.get();
    }
    set _privateLoadMoreLayoutStatus(w25) {
        this.___privateLoadMoreLayoutStatus.set(w25);
    }
    get _privateRotateAngle() {
        return this.___privateRotateAngle.get();
    }
    set _privateRotateAngle(v25) {
        this.___privateRotateAngle.set(v25);
    }
    get _privateHeaderMarginTop() {
        return this.___privateHeaderMarginTop.get();
    }
    set _privateHeaderMarginTop(u25) {
        this.___privateHeaderMarginTop.set(u25);
    }
    get _privateHeaderMarginBottom() {
        return this.___privateHeaderMarginBottom.get();
    }
    set _privateHeaderMarginBottom(t25) {
        this.___privateHeaderMarginBottom.set(t25);
    }
    get _privateHeaderMarginDuration() {
        return this.___privateHeaderMarginDuration.get();
    }
    set _privateHeaderMarginDuration(s25) {
        this.___privateHeaderMarginDuration.set(s25);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(r25) {
        this.__enableRefresh.set(r25);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(q25) {
        this.__enableLoadMore.set(q25);
    }
    get isScrollSpring() {
        return this.__isScrollSpring.get();
    }
    set isScrollSpring(p25) {
        this.__isScrollSpring.set(p25);
    }
    get parentEnable() {
        return this.__parentEnable.get();
    }
    set parentEnable(o25) {
        this.__parentEnable.set(o25);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(n25) {
        this.__showEmptyLayout.set(n25);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(m25) {
        this.__showErrorLayout.set(m25);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(l25) {
        this.__showLoadingLayout.set(l25);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(k25) {
        this.__refreshPosition.set(k25);
    }
    get parentNestedScroll() {
        return this.__parentNestedScroll.get();
    }
    set parentNestedScroll(j25) {
        this.__parentNestedScroll.set(j25);
    }
    get isRefreshSticky() {
        return this.__isRefreshSticky.get();
    }
    set isRefreshSticky(i25) {
        this.__isRefreshSticky.set(i25);
    }
    get isRefreshTopSticky() {
        return this.__isRefreshTopSticky.get();
    }
    set isRefreshTopSticky(h25) {
        this.__isRefreshTopSticky.set(h25);
    }
    get refreshStickyPosition() {
        return this.__refreshStickyPosition.get();
    }
    set refreshStickyPosition(g25) {
        this.__refreshStickyPosition.set(g25);
    }
    get useMarkStickyPosition() {
        return this.__useMarkStickyPosition.get();
    }
    set useMarkStickyPosition(f25) {
        this.__useMarkStickyPosition.set(f25);
    }
    get _privateGlobalPositionMargin() {
        return this.___privateGlobalPositionMargin.get();
    }
    set _privateGlobalPositionMargin(e25) {
        this.___privateGlobalPositionMargin.set(e25);
    }
    get _privateNavigationBarHeight() {
        return this.___privateNavigationBarHeight.get();
    }
    set _privateNavigationBarHeight(d25) {
        this.___privateNavigationBarHeight.set(d25);
    }
    get groupNoSticky() {
        return this.__groupNoSticky.get();
    }
    set groupNoSticky(c25) {
        this.__groupNoSticky.set(c25);
    }
    get _privateIsNothingFixedBottom() {
        return this.___privateIsNothingFixedBottom.get();
    }
    set _privateIsNothingFixedBottom(b25) {
        this.___privateIsNothingFixedBottom.set(b25);
    }
    get isAdaptiveHeight() {
        return this.__isAdaptiveHeight.get();
    }
    set isAdaptiveHeight(a25) {
        this.__isAdaptiveHeight.set(a25);
    }
    get refreshScrollModifier() {
        return this.__refreshScrollModifier.get();
    }
    set refreshScrollModifier(z24) {
        this.__refreshScrollModifier.set(z24);
    }
    get contentScrollModifier() {
        return this.__contentScrollModifier.get();
    }
    set contentScrollModifier(y24) {
        this.__contentScrollModifier.set(y24);
    }
    get refreshHeight() {
        return this.__refreshHeight.get();
    }
    set refreshHeight(x24) {
        this.__refreshHeight.set(x24);
    }
    listenerEnableRefresh() {
        if (this.onRefresh && this.enableRefresh) {
            this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
        }
    }
    listenerController() {
        if (this.controller.closeRefresh
            && this._privateRefreshLayoutStatus == RefreshLayoutStatus.Refreshing) {
            this.controller.closeRefresh = false;
            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Finish;
            clearTimeout(this._privateEndRefreshTimeout);
            this._privateHeaderMarginDuration = this._privateAnimationDuration;
            this._privateEndRefreshTimeout = setTimeout(() => {
                this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
                this.changeScrollInteraction(true);
            }, this._privateAnimationDuration);
        }
        if (this.controller.closeLoadMore
            && this._privateLoadMoreLayoutStatus == LoadMoreLayoutStatus.Loading) {
            this.controller.closeLoadMore = false;
            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Finish;
            clearTimeout(this._privateEndRefreshTimeout);
            this._privateEndRefreshTimeout = setTimeout(() => {
                this.changeScrollInteraction(true);
                if (this.slideDisplayLoadData) {
                    this._privateHeaderMarginDuration = 0;
                    if (this.isChildViewHeightUndefined) {
                        this.contentScroller.scrollTo({
                            xOffset: 0,
                            yOffset: this.contentScroller.currentOffset().yOffset + this._loadMoreFooterAttr.height,
                        });
                    }
                    else {
                        this.childScroller?.scrollTo({
                            xOffset: 0,
                            yOffset: this.childScroller.currentOffset().yOffset + this._loadMoreFooterAttr.height,
                        });
                    }
                }
                else {
                    this._privateHeaderMarginDuration = this._privateAnimationDuration;
                }
                this._privateHeaderMarginBottom = -this._loadMoreFooterAttr.height;
            }, this._privateAnimationDuration);
        }
        if (this.controller.getEdge() != undefined) {
            if (this.onRefreshScrollEdge != undefined) {
                this.onRefreshScrollEdge(this.controller.getEdge());
            }
            this.contentScroller.scrollEdge(this.controller.getEdge());
            this.controller?.scrollEdge(undefined);
        }
        if (this.controller.getScrollToIndex() != undefined) {
            if (this.onRefreshScrollToIndex != undefined) {
                this.onRefreshScrollToIndex(this.controller.getScrollToIndex());
            }
            this.controller?.scrollToIndex(undefined);
        }
        if (this.controller.isAutoRefresh) {
            this.controller.isAutoRefresh = false;
            this.autoRefresh();
        }
        this._privateIsNothingFixedBottom = this.controller.isNothingFixedBottom;
    }
    autoRefresh() {
        if (this.enableRefresh && this.onRefresh != undefined) {
            this._privateRotateAngle = 0;
            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Pulling;
            this._privateHeaderMarginDuration = this._privateAnimationDuration;
            setTimeout(() => {
                this._privateHeaderMarginTop = 0;
                this._privateRefreshLayoutStatus = RefreshLayoutStatus.Release;
            }, 200);
            setTimeout(() => {
                this._privateRotateAngle = 180;
                this.changeScrollInteraction(false);
                this._privateRefreshLayoutStatus = RefreshLayoutStatus.Refreshing;
                this.onRefresh();
            }, 400);
        }
    }
    listenerRefreshLayoutStatus() {
        this.controller.setRefreshLayoutStatus(this._privateRefreshLayoutStatus);
    }
    listenerLoadMoreLayoutStatus() {
        this.controller.setLoadMoreLayoutStatus(this._privateLoadMoreLayoutStatus);
    }
    aboutToAppear() {
        window.getLastWindow(getContext()).then((t24) => {
            let u24 = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR;
            let v24 = t24.getWindowAvoidArea(u24);
            let w24 = px2vp(v24.bottomRect.height);
            this._privateNavigationBarHeight = w24;
        });
        if (this.refreshHeaderAttribute != null) {
            this.refreshHeaderAttribute(this._refreshHeaderAttr);
        }
        else {
            this._refreshHeaderAttr = RefreshConfig.getInstance().getRefreshHeaderAttr();
        }
        if (this.loadMoreFooterAttribute != null) {
            this.loadMoreFooterAttribute(this._loadMoreFooterAttr);
        }
        if (this.onRefresh && this.enableRefresh) {
            this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
        }
        if (this.onLoadMore && this.enableLoadMore) {
            this._privateHeaderMarginBottom = -this._loadMoreFooterAttr.height;
        }
        if (this.useMarkStickyPosition != undefined) {
            this.changeStickyNestedScroll({
                scrollForward: NestedScrollMode.SELF_FIRST,
                scrollBackward: NestedScrollMode.SELF_FIRST
            });
        }
        if (this.isRefreshTopSticky) {
            this.isRefreshSticky = true;
        }
        if (this.refreshHeight != -1) {
            this.refreshScrollModifier.height = this.refreshHeight;
        }
        else {
            this.refreshScrollModifier.height = this.layoutHeight;
        }
        this.refreshScrollModifier.isAdaptiveHeight = this.isAdaptiveHeight;
        this.contentScrollModifier.isAdaptiveHeight = this.isAdaptiveHeight;
    }
    initialRender() {
        this.observeComponentCreation2((c24, d24) => {
            Scroll.create(this.scroller);
            Scroll.width(ObservedObject.GetRawObject(this.layoutWidth));
            Scroll.attributeModifier.bind(this)(ObservedObject.GetRawObject(this.refreshScrollModifier));
            Scroll.onScroll(this.onScroll);
            Scroll.onWillScroll(this.onWillScroll);
            Scroll.onDidScroll(this.onDidScroll);
            Scroll.onScrollEdge(this.onScrollEdge);
            Scroll.onScrollStart(this.onScrollStart);
            Scroll.onScrollStop(this.onScrollStop);
            Scroll.onTouch(this.onScrollTouchEvent);
            Scroll.onReachStart(this.onReachStart);
            Scroll.onReachEnd(this.onReachEnd);
            Scroll.enabled(this.parentEnable);
            Scroll.scrollBar(BarState.Off);
            Scroll.nestedScroll(ObservedObject.GetRawObject(this.parentNestedScroll));
            Scroll.padding({ bottom: this._privateGlobalPositionMargin });
            Scroll.onAreaChange((r24, s24) => {
                if (this.onParentAreaChange != undefined) {
                    this.onParentAreaChange(r24, s24);
                }
                this._privateGlobalPositionMargin = Number(s24.position.y) - this._privateNavigationBarHeight;
                if (this.onGlobalPosition != undefined) {
                    this.onGlobalPosition(this._privateGlobalPositionMargin);
                }
            });
            Gesture.create(GesturePriority.Parallel);
            PanGesture.create(new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down }));
            PanGesture.onActionStart((q24) => {
                this._privateHeaderMarginDuration = 0;
                this._privateTouchRefreshHeight = 0;
                this._privateTouchDownY = q24.offsetY;
                this.controller.closeRefresh = false;
                this.controller.closeLoadMore = false;
            });
            PanGesture.onActionUpdate((e24) => {
                try {
                    let g24 = e24.offsetY - this._privateTouchDownY;
                    if (this.onScrollDirection != undefined) {
                        this.onScrollDirection(g24 > 0);
                    }
                    if (this.onScrollTouch != null) {
                        this.onScrollTouch(g24);
                    }
                    let h24 = this.contentScroller.getItemRect(0).y;
                    if (this.onScrollDistance != undefined) {
                        this.onScrollDistance(h24);
                    }
                    let i24 = (h24 == 0);
                    let j24 = (!this.contentScroller.isAtEnd() && h24 != 0);
                    let k24 = this.contentScroller.isAtEnd();
                    if (this.useMarkStickyPosition != undefined) {
                        i24 = this.useMarkStickyPosition == RefreshPositionEnum.TOP;
                        j24 = this.refreshPosition == RefreshPositionEnum.CENTER;
                        k24 = this.refreshPosition == RefreshPositionEnum.BOTTOM;
                        if (this.useMarkStickyPosition == RefreshPositionEnum.BOTTOM
                            && this.refreshPosition == RefreshPositionEnum.TOP) {
                            if (g24 < 0) {
                                k24 = true;
                            }
                            else {
                                i24 = true;
                            }
                        }
                    }
                    else if (this.isRefreshTopSticky) {
                        i24 = this.refreshStickyPosition == RefreshPositionEnum.TOP;
                        j24 = this.refreshPosition == RefreshPositionEnum.CENTER;
                        k24 = this.refreshPosition == RefreshPositionEnum.BOTTOM;
                        if (i24 && g24 <= 0) {
                            j24 = false;
                        }
                    }
                    else if (this.useMarkLocation && !this.groupNoSticky) {
                        i24 = this.refreshPosition == RefreshPositionEnum.TOP;
                        j24 = this.refreshPosition == RefreshPositionEnum.CENTER;
                        k24 = this.refreshPosition == RefreshPositionEnum.BOTTOM;
                    }
                    if (i24 && k24 && this.childScroller != undefined
                        && !this.showLoadingLayout
                        && !this.showEmptyLayout
                        && !this.showErrorLayout) {
                        j24 = this.refreshPosition == RefreshPositionEnum.CENTER;
                        k24 = this.childScroller.isAtEnd();
                    }
                    if (this.isRefreshSticky) {
                        if (g24 >= 0 && !i24) {
                            this._privateTouchDownY = e24.offsetY;
                        }
                    }
                    if (i24 && g24 >= 0 && this.enableRefresh && this.onRefresh != undefined) {
                        this.centerSticky();
                        if (this.isRefreshTopSticky) {
                            this.changeStickyNestedScroll({
                                scrollForward: NestedScrollMode.PARENT_FIRST,
                                scrollBackward: NestedScrollMode.SELF_FIRST
                            });
                        }
                        this._privatePrivateIsRefresh = true;
                        let o24 = g24;
                        if (this._privateTouchRefreshHeight != 0 && this.scroller.currentOffset().yOffset != 0) {
                            o24 = g24 - this.scroller.currentOffset().yOffset;
                        }
                        let p24 = this._refreshHeaderAttr.height;
                        if (!this.isScrollSpring) {
                            p24 = this._refreshHeaderAttr.height - 0.2;
                        }
                        if (o24 >= p24) {
                            this._privateRotateAngle = 180;
                            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Release;
                            if (this.isScrollSpring) {
                                this._privateHeaderMarginTop = g24 - this._refreshHeaderAttr.height;
                            }
                            else {
                                this._privateTouchDownY = e24.offsetY - this._refreshHeaderAttr.height;
                                this._privateHeaderMarginTop = 0;
                            }
                            if (g24 > this._privateTouchRefreshHeight) {
                                this._privateTouchRefreshHeight = g24;
                            }
                        }
                        else {
                            this._privateRotateAngle = 0;
                            this._privateRefreshLayoutStatus = RefreshLayoutStatus.Pulling;
                            this._privateHeaderMarginTop = g24 - this._refreshHeaderAttr.height;
                        }
                    }
                    if (k24 && g24 < 0 && this.enableLoadMore && this.onLoadMore != undefined
                        && !this._privateIsNothingFixedBottom) {
                        this.isBottomScroll = true;
                        if (this.useMarkStickyPosition != undefined) {
                            this.parentNestedScroll = {
                                scrollForward: NestedScrollMode.SELF_ONLY,
                                scrollBackward: NestedScrollMode.SELF_ONLY
                            };
                            this.changeStickyNestedScroll({
                                scrollForward: NestedScrollMode.SELF_FIRST,
                                scrollBackward: NestedScrollMode.PARENT_FIRST
                            });
                        }
                        this._privatePrivateIsRefresh = false;
                        let l24 = this._loadMoreFooterAttr.height;
                        let m24 = l24;
                        if (!this.isScrollSpring) {
                            m24 = l24 - 0.2;
                        }
                        let n24 = Math.abs(g24);
                        if (n24 > m24) {
                            if (this.isScrollSpring) {
                                this._privateHeaderMarginBottom = -(this._loadMoreFooterAttr.height + g24);
                            }
                            else {
                                if (this.controller.isFooterNothing) {
                                    this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                                }
                                else {
                                    this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
                                }
                                this._privateHeaderMarginBottom = 0;
                                this._privateTouchDownY = this._loadMoreFooterAttr.height + e24.offsetY;
                            }
                        }
                        else {
                            if (!this.isScrollSpring) {
                                if (this.controller.isFooterNothing) {
                                    this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                                }
                                else {
                                    this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
                                }
                            }
                            this._privateHeaderMarginBottom = -(this._loadMoreFooterAttr.height + g24);
                        }
                    }
                    if (j24) {
                        this._privateTouchDownY = e24.offsetY;
                        this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
                        this.centerSticky();
                        if (this.isRefreshTopSticky) {
                            this.changeStickyNestedScroll({
                                scrollForward: g24 >= 0 ? NestedScrollMode.SELF_FIRST : NestedScrollMode.PARENT_FIRST,
                                scrollBackward: NestedScrollMode.SELF_FIRST
                            });
                        }
                        if (this._privateHeaderMarginBottom != -this._loadMoreFooterAttr.height
                            && this.isRefreshTopSticky) {
                            if (this._privateHeaderMarginBottom >= -this._loadMoreFooterAttr.height) {
                                if (g24 >= 0) {
                                    this.changeEnableScrollInteraction(false);
                                }
                                else {
                                    this.changeEnableScrollInteraction(true);
                                }
                                this._privateHeaderMarginBottom = -e24.offsetY - this._loadMoreFooterAttr.height;
                            }
                            else {
                                this.changeEnableScrollInteraction(true);
                            }
                            if (this._privateHeaderMarginBottom >= 0) {
                                this.changeLoadMoreStatus(true);
                            }
                            else {
                                this.changeLoadMoreStatus(false);
                            }
                        }
                    }
                }
                catch (f24) {
                }
            });
            PanGesture.onActionEnd(() => {
                this.actionEnd();
            });
            PanGesture.onActionCancel(() => {
                this.actionEnd();
            });
            PanGesture.pop();
            Gesture.pop();
        }, Scroll);
        this.observeComponentCreation2((a24, b24) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((k23, l23) => {
            If.create();
            if (this.onRefresh != undefined && this.enableRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((y23, z23) => {
                        Column.create();
                        Context.animation({
                            duration: this._privateHeaderMarginDuration,
                        });
                        Column.width("100%");
                        Column.height(this._refreshHeaderAttr.height);
                        Column.margin({ top: this._privateHeaderMarginTop });
                        Context.animation(null);
                    }, Column);
                    this.observeComponentCreation2((m23, n23) => {
                        If.create();
                        if (this.headerRefreshLayout != undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.headerRefreshLayout.bind(this)(makeBuilderParameterProxy("headerRefreshLayout", { status: () => (this["___privateRefreshLayoutStatus"] ? this["___privateRefreshLayoutStatus"] : this["_privateRefreshLayoutStatus"]) }));
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((o23, p23) => {
                                    If.create();
                                    if (this._refreshHeaderAttr.headerType == RefreshHeaderType.DEFAULT) {
                                        this.ifElseBranchUpdateFunction(0, () => {
                                            {
                                                this.observeComponentCreation2((u23, v23) => {
                                                    if (v23) {
                                                        let w23 = new RefreshDefaultHeader(this, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            rotateAngle: this._privateRotateAngle,
                                                            refreshHeaderAttr: this._refreshHeaderAttr
                                                        }, undefined, u23, () => { }, { page: "refresh/src/main/ets/RefreshLayout.ets", line: 329, col: 17 });
                                                        ViewPU.create(w23);
                                                        let x23 = () => {
                                                            return {
                                                                refreshStatus: this._privateRefreshLayoutStatus,
                                                                rotateAngle: this._privateRotateAngle,
                                                                refreshHeaderAttr: this._refreshHeaderAttr
                                                            };
                                                        };
                                                        w23.paramsGenerator_ = x23;
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(u23, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            rotateAngle: this._privateRotateAngle
                                                        });
                                                    }
                                                }, { name: "RefreshDefaultHeader" });
                                            }
                                        });
                                    }
                                    else if (this._refreshHeaderAttr.headerType == RefreshHeaderType.POINTS) {
                                        this.ifElseBranchUpdateFunction(1, () => {
                                            {
                                                this.observeComponentCreation2((q23, r23) => {
                                                    if (r23) {
                                                        let s23 = new RefreshHeaderPoints(this, {
                                                            refreshStatus: this._privateRefreshLayoutStatus,
                                                            refreshHeaderAttr: this._refreshHeaderAttr
                                                        }, undefined, q23, () => { }, { page: "refresh/src/main/ets/RefreshLayout.ets", line: 335, col: 17 });
                                                        ViewPU.create(s23);
                                                        let t23 = () => {
                                                            return {
                                                                refreshStatus: this._privateRefreshLayoutStatus,
                                                                refreshHeaderAttr: this._refreshHeaderAttr
                                                            };
                                                        };
                                                        s23.paramsGenerator_ = t23;
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(q23, {
                                                            refreshStatus: this._privateRefreshLayoutStatus
                                                        });
                                                    }
                                                }, { name: "RefreshHeaderPoints" });
                                            }
                                        });
                                    }
                                    else {
                                        this.ifElseBranchUpdateFunction(2, () => {
                                        });
                                    }
                                }, If);
                                If.pop();
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((g23, h23) => {
            Scroll.create(this.contentScroller);
            Scroll.onAreaChange(() => {
                if (this.onContentScroller != undefined) {
                    this.onContentScroller(this.contentScroller);
                }
            });
            Scroll.onScroll(this.onContentScroll);
            Scroll.onWillScroll(this.onContentWillScroll);
            Scroll.onDidScroll(this.onContentDidScroll);
            Scroll.onScrollEdge(this.onContentScrollEdge);
            Scroll.onScrollStart(this.onContentScrollStart);
            Scroll.onScrollStop(this.onContentScrollStop);
            Scroll.onTouch(this.onContentScrollTouchEvent);
            Scroll.align(Alignment.TopStart);
            Scroll.width("100%");
            Scroll.attributeModifier.bind(this)(ObservedObject.GetRawObject(this.contentScrollModifier));
            Scroll.scrollBar(this.scrollBarState);
            Scroll.edgeEffect((this.onRefresh == undefined && this.onLoadMore == undefined) ? this.parentEdgeEffect :
                EdgeEffect.None);
            Scroll.nestedScroll({
                scrollForward: NestedScrollMode.PARENT_FIRST,
                scrollBackward: NestedScrollMode.PARENT_FIRST
            });
            Scroll.onReachStart(() => {
                this.refreshStickyPosition = RefreshPositionEnum.TOP;
                if (this.onContentReachStart != undefined) {
                    this.onContentReachStart();
                }
            });
            Scroll.onReachEnd(() => {
                this.refreshStickyPosition = RefreshPositionEnum.BOTTOM;
                if (this.onContentReachEnd != undefined) {
                    this.onContentReachEnd();
                }
            });
            Scroll.onScrollFrameBegin((i23, j23) => {
                if ((this.refreshStickyPosition == RefreshPositionEnum.TOP && i23 <= 0) || (this.refreshStickyPosition == RefreshPositionEnum.BOTTOM && i23 >= 0)) {
                    return { offsetRemain: i23 };
                }
                this.refreshStickyPosition = RefreshPositionEnum.CENTER;
                return { offsetRemain: i23 };
            });
        }, Scroll);
        this.observeComponentCreation2((e23, f23) => {
            Column.create();
            Column.width("100%");
        }, Column);
        this.observeComponentCreation2((c23, d23) => {
            If.create();
            if (this.itemHeaderLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemHeaderLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((a23, b23) => {
            If.create();
            if (this.showLoadingLayout && this.loadingLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.loadingLayout.bind(this)();
                });
            }
            else if (this.showEmptyLayout && this.emptyLayout != undefined) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.emptyLayout.bind(this)();
                });
            }
            else if (this.showErrorLayout && this.errorLayout != undefined) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.errorLayout.bind(this)();
                });
            }
            else if (this.itemLayout != undefined) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.itemLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(4, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((y22, z22) => {
            If.create();
            if (this.itemFooterLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemFooterLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((w22, x22) => {
            If.create();
            if (this._privateIsNothingFixedBottom) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.refreshFooterView.bind(this)(this);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((u22, v22) => {
            If.create();
            if (this.onLoadMore != undefined && this.enableLoadMore && !this._privateIsNothingFixedBottom) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.refreshFooterView.bind(this)(this);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Scroll.pop();
    }
    centerSticky() {
        if (this.useMarkStickyPosition != undefined) {
            this.changeStickyNestedScroll({
                scrollForward: NestedScrollMode.PARENT_FIRST,
                scrollBackward: NestedScrollMode.SELF_FIRST
            });
            this.parentNestedScroll = {
                scrollForward: NestedScrollMode.SELF_FIRST,
                scrollBackward: NestedScrollMode.SELF_FIRST
            };
        }
    }
    changeStickyNestedScroll(t22) {
        if (!this.isRefreshSticky) {
            return;
        }
        if (this.onStickyNestedScroll != undefined) {
            this.onStickyNestedScroll(t22);
        }
    }
    actionEnd() {
        this.isBottomScroll = false;
        this.changeEnableScrollInteraction(true);
        this._privateHeaderMarginDuration = this._privateAnimationDuration;
        if (this._privatePrivateIsRefresh) {
            if (this._privateRefreshLayoutStatus == RefreshLayoutStatus.Pulling) {
                this._privateHeaderMarginTop = -this._refreshHeaderAttr.height;
            }
            else if (this._privateRefreshLayoutStatus == RefreshLayoutStatus.Release) {
                this._privateHeaderMarginTop = 0;
                this._privateRefreshLayoutStatus = RefreshLayoutStatus.Refreshing;
                this.onRefresh();
                this.changeScrollInteraction(!this.isPullDownProhibitTouch);
            }
        }
        else {
            if (this._privateLoadMoreLayoutStatus == LoadMoreLayoutStatus.Release) {
                this._privateHeaderMarginBottom = 0;
                this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Loading;
                this.onLoadMore();
                this.changeScrollInteraction(!this.isPullUpProhibitTouch);
            }
            else {
                this._privateHeaderMarginBottom = -this._loadMoreFooterAttr.height;
            }
        }
    }
    changeLoadMoreStatus(s22) {
        if (this.controller.isFooterNothing) {
            this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
        }
        else {
            if (s22) {
                this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
            }
            else {
                this._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
            }
        }
    }
    changeScrollInteraction(r22) {
        this.parentEnable = r22;
    }
    changeEnableScrollInteraction(q22) {
        if (this.enableScrollInteraction != undefined) {
            this.enableScrollInteraction(q22);
        }
    }
    refreshFooterView(d22, e22 = null) {
        this.observeComponentCreation2((l22, m22) => {
            Column.create();
            Context.animation({
                duration: this._privateHeaderMarginDuration,
            });
            Column.height(this._loadMoreFooterAttr.height);
            Column.margin({ bottom: this._privateIsNothingFixedBottom ? 0 : this._privateHeaderMarginBottom });
            Context.animation(null);
            Column.onAreaChange((n22, o22) => {
                if (!this.isBottomScroll || !this.isScrollSpring) {
                    return;
                }
                let p22 = Number(o22.globalPosition.y);
                if (d22.isRefreshSticky) {
                    if (d22.upFirstScrollOffset == -1 && d22.refreshStickyPosition == RefreshPositionEnum.BOTTOM) {
                        d22.upFirstScrollOffset = p22;
                    }
                    if (d22.upFirstScrollOffset != -1) {
                        if (d22.upFirstScrollOffset - p22 > d22._loadMoreFooterAttr.height) {
                            if (d22.controller.isFooterNothing) {
                                d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                            }
                            else {
                                d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
                            }
                        }
                        else {
                            if (d22.controller.isFooterNothing) {
                                d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                            }
                            else {
                                d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
                            }
                        }
                    }
                }
                else {
                    if (d22.upFirstScrollOffset == -1) {
                        d22.upFirstScrollOffset = p22;
                    }
                    if (d22.upFirstScrollOffset - p22 > d22._loadMoreFooterAttr.height) {
                        if (d22.controller.isFooterNothing) {
                            d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                        }
                        else {
                            d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Release;
                        }
                    }
                    else {
                        if (d22.controller.isFooterNothing) {
                            d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.FooterNothing;
                        }
                        else {
                            d22._privateLoadMoreLayoutStatus = LoadMoreLayoutStatus.Pulling;
                        }
                    }
                }
            });
        }, Column);
        this.observeComponentCreation2((f22, g22) => {
            If.create();
            if (this.footerLoadLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.footerLoadLayout.bind(this)(makeBuilderParameterProxy("footerLoadLayout", { status: () => (this["___privateLoadMoreLayoutStatus"] ? this["___privateLoadMoreLayoutStatus"] : this["_privateLoadMoreLayoutStatus"]) }));
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((h22, i22) => {
                            if (i22) {
                                let j22 = new RefreshDefaultFooter(this, {
                                    loadMoreStatus: this._privateIsNothingFixedBottom ? LoadMoreLayoutStatus.FooterNothing :
                                        this._privateLoadMoreLayoutStatus,
                                    loadMoreFooterAttr: this._loadMoreFooterAttr
                                }, undefined, h22, () => { }, { page: "refresh/src/main/ets/RefreshLayout.ets", line: 818, col: 9 });
                                ViewPU.create(j22);
                                let k22 = () => {
                                    return {
                                        loadMoreStatus: this._privateIsNothingFixedBottom ? LoadMoreLayoutStatus.FooterNothing :
                                            this._privateLoadMoreLayoutStatus,
                                        loadMoreFooterAttr: this._loadMoreFooterAttr
                                    };
                                };
                                j22.paramsGenerator_ = k22;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(h22, {
                                    loadMoreStatus: this._privateIsNothingFixedBottom ? LoadMoreLayoutStatus.FooterNothing :
                                        this._privateLoadMoreLayoutStatus
                                });
                            }
                        }, { name: "RefreshDefaultFooter" });
                    }
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
