if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { ListAttr } from './attribute/ListAttr';
import { ListItemAttr } from './attribute/ListItemAttr';
import { RefreshAttr } from './attribute/RefreshAttr';
import { SlideMenuAttr } from './attribute/SlideMenuAttr';
import { RefreshLayoutStatus } from './constants/RefreshLayoutStatus';
import { RefreshPositionEnum } from './constants/RefreshPositionEnum';
import { DataController } from './controller/DataController';
import { RefreshController } from './controller/RefreshController';
import { RefreshDataSource } from './model/RefreshDataSource';
import { RefreshLayout } from './RefreshLayout';
export class ListView extends ViewPU {
    constructor(e20, f20, g20, h20 = -1, i20 = undefined, j20) {
        super(e20, g20, h20, j20);
        if (typeof i20 === "function") {
            this.paramsGenerator_ = i20;
        }
        this.itemLayout = undefined;
        this.headerRefreshLayout = undefined;
        this.footerLoadLayout = undefined;
        this.itemHeaderLayout = undefined;
        this.itemFooterLayout = undefined;
        this.controller = new RefreshController();
        this.dataController = new DataController();
        this.__items = new SynchedPropertyObjectOneWayPU(f20.items, this, "items");
        this.__isScrollSpring = new ObservedPropertySimplePU(true, this, "isScrollSpring");
        this.onRefresh = undefined;
        this.onLoadMore = undefined;
        this.__enableRefresh = new SynchedPropertySimpleOneWayPU(f20.enableRefresh, this, "enableRefresh");
        this.__enableLoadMore = new SynchedPropertySimpleOneWayPU(f20.enableLoadMore, this, "enableLoadMore");
        this._privateRefreshAttr = new RefreshAttr();
        this.refreshAttribute = undefined;
        this._privateListAttr = new ListAttr();
        this.listAttribute = undefined;
        this._privateListItemAttr = new ListItemAttr();
        this.listItemAttribute = undefined;
        this.isLazyData = false;
        this.lazyCachedCount = 1;
        this.__lazyDataSource = new ObservedPropertyObjectPU(undefined, this, "lazyDataSource");
        this.onLazyDataSource = undefined;
        this.refreshHeaderAttribute = undefined;
        this.loadMoreFooterAttribute = undefined;
        this.isKeyGeneratorIndex = false;
        this.slideRightMenuLayout = undefined;
        this._privateSlideMenuAttr = new SlideMenuAttr();
        this.slideMenuAttr = undefined;
        this.__initialIndex = new SynchedPropertySimpleOneWayPU(f20.initialIndex, this, "initialIndex");
        this.scroller = new Scroller();
        this.emptyLayout = undefined;
        this.errorLayout = undefined;
        this.loadingLayout = undefined;
        this.__showEmptyLayout = new SynchedPropertySimpleOneWayPU(f20.showEmptyLayout, this, "showEmptyLayout");
        this.__showErrorLayout = new SynchedPropertySimpleOneWayPU(f20.showErrorLayout, this, "showErrorLayout");
        this.__showLoadingLayout = new SynchedPropertySimpleOneWayPU(f20.showLoadingLayout, this, "showLoadingLayout");
        this.swipeLeftMenuLayout = undefined;
        this.swipeRightMenuLayout = undefined;
        this.groupSwipeLeftMenuLayout = undefined;
        this.groupSwipeRightMenuLayout = undefined;
        this.swipeRightAreaDistance = undefined;
        this.swipeLeftAreaDistance = undefined;
        this.onSwipeLeftStateChange = undefined;
        this.onSwipeRightStateChange = undefined;
        this.onSwipeOffsetChange = undefined;
        this.__isSwipeDelete = new SynchedPropertySimpleOneWayPU(f20.isSwipeDelete, this, "isSwipeDelete");
        this.isDeleteReloadIndex = false;
        this._privateIsItemGroup = false;
        this.__itemGroupData = new SynchedPropertyObjectOneWayPU(f20.itemGroupData, this, "itemGroupData");
        this.itemGroupHeader = undefined;
        this.onScroll = undefined;
        this.onScrollTouch = undefined;
        this.onScrollStart = undefined;
        this.onScrollStop = undefined;
        this.onScrollTouchEvent = undefined;
        this.onReachStart = undefined;
        this.onReachEnd = undefined;
        this.onRefreshScrollEdge = undefined;
        this.onRefreshScrollToIndex = undefined;
        this.onScrollDirection = undefined;
        this.onRefreshAreaChange = undefined;
        this.onHeadAreaChange = undefined;
        this.___privateRefreshLayoutStatus = new SynchedPropertySimpleOneWayPU(f20._privateRefreshLayoutStatus, this, "_privateRefreshLayoutStatus");
        this.__refreshPosition = new SynchedPropertySimpleOneWayPU(f20.refreshPosition, this, "refreshPosition");
        this.__listNestedScroll = new SynchedPropertyObjectOneWayPU(f20.listNestedScroll, this, "listNestedScroll");
        this.__isRefreshSticky = new SynchedPropertySimpleOneWayPU(f20.isRefreshSticky, this, "isRefreshSticky");
        this.__refreshStickyPosition = new SynchedPropertySimpleOneWayPU(f20.refreshStickyPosition, this, "refreshStickyPosition");
        this.__useMarkStickyPosition = new SynchedPropertySimpleOneWayPU(f20.useMarkStickyPosition, this, "useMarkStickyPosition");
        this.onListRefreshPosition = undefined;
        this.isFirstLoadData = true;
        this.autoShowEmptyLayout = false;
        this.__enableScrollInteraction = new SynchedPropertySimpleOneWayPU(f20.enableScrollInteraction, this, "enableScrollInteraction");
        this.refreshOnScroll = undefined;
        this.onContentScroller = undefined;
        this.___privateItemHeight = new ObservedPropertySimplePU(0, this, "_privateItemHeight");
        this._privateContentScroller = new Scroller();
        this._privateIsPosition = true;
        this.prohibitRefresh = false;
        this.__groupNoSticky = new SynchedPropertySimpleOneWayPU(f20.groupNoSticky, this, "groupNoSticky");
        this.onScrollDistance = undefined;
        this.space = undefined;
        this.isNeedGroupIndex = false;
        this.itemGroupIndexLayout = undefined;
        this.slideDisplayLoadData = false;
        this.isNeedLoadRebound = true;
        this.isPullUpProhibitTouch = true;
        this.isPullDownProhibitTouch = true;
        this.__isAdaptiveHeight = new SynchedPropertySimpleOneWayPU(f20.isAdaptiveHeight, this, "isAdaptiveHeight");
        this.__refreshHeight = new SynchedPropertyObjectOneWayPU(f20.refreshHeight, this, "refreshHeight");
        this._slidPanOption = new PanGestureOptions({ direction: PanDirection.Left | PanDirection.Right });
        this.___privateSlideRightOffset = new ObservedPropertyObjectPU([], this, "_privateSlideRightOffset");
        this.___privateSlideEndPosition = new ObservedPropertySimplePU(0, this, "_privateSlideEndPosition");
        this.__actionStartX = new ObservedPropertySimplePU(0, this, "actionStartX");
        this.setInitiallyProvidedValue(f20);
        this.declareWatch("items", this.changeData);
        this.declareWatch("lazyDataSource", this.changeLazyData);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(d20) {
        if (d20.itemLayout !== undefined) {
            this.itemLayout = d20.itemLayout;
        }
        if (d20.headerRefreshLayout !== undefined) {
            this.headerRefreshLayout = d20.headerRefreshLayout;
        }
        if (d20.footerLoadLayout !== undefined) {
            this.footerLoadLayout = d20.footerLoadLayout;
        }
        if (d20.itemHeaderLayout !== undefined) {
            this.itemHeaderLayout = d20.itemHeaderLayout;
        }
        if (d20.itemFooterLayout !== undefined) {
            this.itemFooterLayout = d20.itemFooterLayout;
        }
        if (d20.controller !== undefined) {
            this.controller = d20.controller;
        }
        if (d20.dataController !== undefined) {
            this.dataController = d20.dataController;
        }
        if (d20.items === undefined) {
            this.__items.set([]);
        }
        if (d20.isScrollSpring !== undefined) {
            this.isScrollSpring = d20.isScrollSpring;
        }
        if (d20.onRefresh !== undefined) {
            this.onRefresh = d20.onRefresh;
        }
        if (d20.onLoadMore !== undefined) {
            this.onLoadMore = d20.onLoadMore;
        }
        if (d20.enableRefresh === undefined) {
            this.__enableRefresh.set(true);
        }
        if (d20.enableLoadMore === undefined) {
            this.__enableLoadMore.set(true);
        }
        if (d20._privateRefreshAttr !== undefined) {
            this._privateRefreshAttr = d20._privateRefreshAttr;
        }
        if (d20.refreshAttribute !== undefined) {
            this.refreshAttribute = d20.refreshAttribute;
        }
        if (d20._privateListAttr !== undefined) {
            this._privateListAttr = d20._privateListAttr;
        }
        if (d20.listAttribute !== undefined) {
            this.listAttribute = d20.listAttribute;
        }
        if (d20._privateListItemAttr !== undefined) {
            this._privateListItemAttr = d20._privateListItemAttr;
        }
        if (d20.listItemAttribute !== undefined) {
            this.listItemAttribute = d20.listItemAttribute;
        }
        if (d20.isLazyData !== undefined) {
            this.isLazyData = d20.isLazyData;
        }
        if (d20.lazyCachedCount !== undefined) {
            this.lazyCachedCount = d20.lazyCachedCount;
        }
        if (d20.lazyDataSource !== undefined) {
            this.lazyDataSource = d20.lazyDataSource;
        }
        if (d20.onLazyDataSource !== undefined) {
            this.onLazyDataSource = d20.onLazyDataSource;
        }
        if (d20.refreshHeaderAttribute !== undefined) {
            this.refreshHeaderAttribute = d20.refreshHeaderAttribute;
        }
        if (d20.loadMoreFooterAttribute !== undefined) {
            this.loadMoreFooterAttribute = d20.loadMoreFooterAttribute;
        }
        if (d20.isKeyGeneratorIndex !== undefined) {
            this.isKeyGeneratorIndex = d20.isKeyGeneratorIndex;
        }
        if (d20.slideRightMenuLayout !== undefined) {
            this.slideRightMenuLayout = d20.slideRightMenuLayout;
        }
        if (d20._privateSlideMenuAttr !== undefined) {
            this._privateSlideMenuAttr = d20._privateSlideMenuAttr;
        }
        if (d20.slideMenuAttr !== undefined) {
            this.slideMenuAttr = d20.slideMenuAttr;
        }
        if (d20.initialIndex === undefined) {
            this.__initialIndex.set(0);
        }
        if (d20.scroller !== undefined) {
            this.scroller = d20.scroller;
        }
        if (d20.emptyLayout !== undefined) {
            this.emptyLayout = d20.emptyLayout;
        }
        if (d20.errorLayout !== undefined) {
            this.errorLayout = d20.errorLayout;
        }
        if (d20.loadingLayout !== undefined) {
            this.loadingLayout = d20.loadingLayout;
        }
        if (d20.showEmptyLayout === undefined) {
            this.__showEmptyLayout.set(false);
        }
        if (d20.showErrorLayout === undefined) {
            this.__showErrorLayout.set(false);
        }
        if (d20.showLoadingLayout === undefined) {
            this.__showLoadingLayout.set(false);
        }
        if (d20.swipeLeftMenuLayout !== undefined) {
            this.swipeLeftMenuLayout = d20.swipeLeftMenuLayout;
        }
        if (d20.swipeRightMenuLayout !== undefined) {
            this.swipeRightMenuLayout = d20.swipeRightMenuLayout;
        }
        if (d20.groupSwipeLeftMenuLayout !== undefined) {
            this.groupSwipeLeftMenuLayout = d20.groupSwipeLeftMenuLayout;
        }
        if (d20.groupSwipeRightMenuLayout !== undefined) {
            this.groupSwipeRightMenuLayout = d20.groupSwipeRightMenuLayout;
        }
        if (d20.swipeRightAreaDistance !== undefined) {
            this.swipeRightAreaDistance = d20.swipeRightAreaDistance;
        }
        if (d20.swipeLeftAreaDistance !== undefined) {
            this.swipeLeftAreaDistance = d20.swipeLeftAreaDistance;
        }
        if (d20.onSwipeLeftStateChange !== undefined) {
            this.onSwipeLeftStateChange = d20.onSwipeLeftStateChange;
        }
        if (d20.onSwipeRightStateChange !== undefined) {
            this.onSwipeRightStateChange = d20.onSwipeRightStateChange;
        }
        if (d20.onSwipeOffsetChange !== undefined) {
            this.onSwipeOffsetChange = d20.onSwipeOffsetChange;
        }
        if (d20.isSwipeDelete === undefined) {
            this.__isSwipeDelete.set(false);
        }
        if (d20.isDeleteReloadIndex !== undefined) {
            this.isDeleteReloadIndex = d20.isDeleteReloadIndex;
        }
        if (d20._privateIsItemGroup !== undefined) {
            this._privateIsItemGroup = d20._privateIsItemGroup;
        }
        if (d20.itemGroupData === undefined) {
            this.__itemGroupData.set(undefined);
        }
        if (d20.itemGroupHeader !== undefined) {
            this.itemGroupHeader = d20.itemGroupHeader;
        }
        if (d20.onScroll !== undefined) {
            this.onScroll = d20.onScroll;
        }
        if (d20.onScrollTouch !== undefined) {
            this.onScrollTouch = d20.onScrollTouch;
        }
        if (d20.onScrollStart !== undefined) {
            this.onScrollStart = d20.onScrollStart;
        }
        if (d20.onScrollStop !== undefined) {
            this.onScrollStop = d20.onScrollStop;
        }
        if (d20.onScrollTouchEvent !== undefined) {
            this.onScrollTouchEvent = d20.onScrollTouchEvent;
        }
        if (d20.onReachStart !== undefined) {
            this.onReachStart = d20.onReachStart;
        }
        if (d20.onReachEnd !== undefined) {
            this.onReachEnd = d20.onReachEnd;
        }
        if (d20.onRefreshScrollEdge !== undefined) {
            this.onRefreshScrollEdge = d20.onRefreshScrollEdge;
        }
        if (d20.onRefreshScrollToIndex !== undefined) {
            this.onRefreshScrollToIndex = d20.onRefreshScrollToIndex;
        }
        if (d20.onScrollDirection !== undefined) {
            this.onScrollDirection = d20.onScrollDirection;
        }
        if (d20.onRefreshAreaChange !== undefined) {
            this.onRefreshAreaChange = d20.onRefreshAreaChange;
        }
        if (d20.onHeadAreaChange !== undefined) {
            this.onHeadAreaChange = d20.onHeadAreaChange;
        }
        if (d20._privateRefreshLayoutStatus === undefined) {
            this.___privateRefreshLayoutStatus.set(RefreshLayoutStatus.Finish);
        }
        if (d20.refreshPosition === undefined) {
            this.__refreshPosition.set(RefreshPositionEnum.TOP);
        }
        if (d20.listNestedScroll === undefined) {
            this.__listNestedScroll.set({
                scrollForward: NestedScrollMode.PARENT_FIRST,
                scrollBackward: NestedScrollMode.PARENT_FIRST
            });
        }
        if (d20.isRefreshSticky === undefined) {
            this.__isRefreshSticky.set(false);
        }
        if (d20.refreshStickyPosition === undefined) {
            this.__refreshStickyPosition.set(undefined);
        }
        if (d20.useMarkStickyPosition === undefined) {
            this.__useMarkStickyPosition.set(undefined);
        }
        if (d20.onListRefreshPosition !== undefined) {
            this.onListRefreshPosition = d20.onListRefreshPosition;
        }
        if (d20.isFirstLoadData !== undefined) {
            this.isFirstLoadData = d20.isFirstLoadData;
        }
        if (d20.autoShowEmptyLayout !== undefined) {
            this.autoShowEmptyLayout = d20.autoShowEmptyLayout;
        }
        if (d20.enableScrollInteraction === undefined) {
            this.__enableScrollInteraction.set(true);
        }
        if (d20.refreshOnScroll !== undefined) {
            this.refreshOnScroll = d20.refreshOnScroll;
        }
        if (d20.onContentScroller !== undefined) {
            this.onContentScroller = d20.onContentScroller;
        }
        if (d20._privateItemHeight !== undefined) {
            this._privateItemHeight = d20._privateItemHeight;
        }
        if (d20._privateContentScroller !== undefined) {
            this._privateContentScroller = d20._privateContentScroller;
        }
        if (d20._privateIsPosition !== undefined) {
            this._privateIsPosition = d20._privateIsPosition;
        }
        if (d20.prohibitRefresh !== undefined) {
            this.prohibitRefresh = d20.prohibitRefresh;
        }
        if (d20.groupNoSticky === undefined) {
            this.__groupNoSticky.set(false);
        }
        if (d20.onScrollDistance !== undefined) {
            this.onScrollDistance = d20.onScrollDistance;
        }
        if (d20.space !== undefined) {
            this.space = d20.space;
        }
        if (d20.isNeedGroupIndex !== undefined) {
            this.isNeedGroupIndex = d20.isNeedGroupIndex;
        }
        if (d20.itemGroupIndexLayout !== undefined) {
            this.itemGroupIndexLayout = d20.itemGroupIndexLayout;
        }
        if (d20.slideDisplayLoadData !== undefined) {
            this.slideDisplayLoadData = d20.slideDisplayLoadData;
        }
        if (d20.isNeedLoadRebound !== undefined) {
            this.isNeedLoadRebound = d20.isNeedLoadRebound;
        }
        if (d20.isPullUpProhibitTouch !== undefined) {
            this.isPullUpProhibitTouch = d20.isPullUpProhibitTouch;
        }
        if (d20.isPullDownProhibitTouch !== undefined) {
            this.isPullDownProhibitTouch = d20.isPullDownProhibitTouch;
        }
        if (d20.isAdaptiveHeight === undefined) {
            this.__isAdaptiveHeight.set(false);
        }
        if (d20.refreshHeight === undefined) {
            this.__refreshHeight.set(-1);
        }
        if (d20._slidPanOption !== undefined) {
            this._slidPanOption = d20._slidPanOption;
        }
        if (d20._privateSlideRightOffset !== undefined) {
            this._privateSlideRightOffset = d20._privateSlideRightOffset;
        }
        if (d20._privateSlideEndPosition !== undefined) {
            this._privateSlideEndPosition = d20._privateSlideEndPosition;
        }
        if (d20.actionStartX !== undefined) {
            this.actionStartX = d20.actionStartX;
        }
    }
    updateStateVars(c20) {
        this.__items.reset(c20.items);
        this.__enableRefresh.reset(c20.enableRefresh);
        this.__enableLoadMore.reset(c20.enableLoadMore);
        this.__initialIndex.reset(c20.initialIndex);
        this.__showEmptyLayout.reset(c20.showEmptyLayout);
        this.__showErrorLayout.reset(c20.showErrorLayout);
        this.__showLoadingLayout.reset(c20.showLoadingLayout);
        this.__isSwipeDelete.reset(c20.isSwipeDelete);
        this.__itemGroupData.reset(c20.itemGroupData);
        this.___privateRefreshLayoutStatus.reset(c20._privateRefreshLayoutStatus);
        this.__refreshPosition.reset(c20.refreshPosition);
        this.__listNestedScroll.reset(c20.listNestedScroll);
        this.__isRefreshSticky.reset(c20.isRefreshSticky);
        this.__refreshStickyPosition.reset(c20.refreshStickyPosition);
        this.__useMarkStickyPosition.reset(c20.useMarkStickyPosition);
        this.__enableScrollInteraction.reset(c20.enableScrollInteraction);
        this.__groupNoSticky.reset(c20.groupNoSticky);
        this.__isAdaptiveHeight.reset(c20.isAdaptiveHeight);
        this.__refreshHeight.reset(c20.refreshHeight);
    }
    purgeVariableDependenciesOnElmtId(b20) {
        this.__items.purgeDependencyOnElmtId(b20);
        this.__isScrollSpring.purgeDependencyOnElmtId(b20);
        this.__enableRefresh.purgeDependencyOnElmtId(b20);
        this.__enableLoadMore.purgeDependencyOnElmtId(b20);
        this.__lazyDataSource.purgeDependencyOnElmtId(b20);
        this.__initialIndex.purgeDependencyOnElmtId(b20);
        this.__showEmptyLayout.purgeDependencyOnElmtId(b20);
        this.__showErrorLayout.purgeDependencyOnElmtId(b20);
        this.__showLoadingLayout.purgeDependencyOnElmtId(b20);
        this.__isSwipeDelete.purgeDependencyOnElmtId(b20);
        this.__itemGroupData.purgeDependencyOnElmtId(b20);
        this.___privateRefreshLayoutStatus.purgeDependencyOnElmtId(b20);
        this.__refreshPosition.purgeDependencyOnElmtId(b20);
        this.__listNestedScroll.purgeDependencyOnElmtId(b20);
        this.__isRefreshSticky.purgeDependencyOnElmtId(b20);
        this.__refreshStickyPosition.purgeDependencyOnElmtId(b20);
        this.__useMarkStickyPosition.purgeDependencyOnElmtId(b20);
        this.__enableScrollInteraction.purgeDependencyOnElmtId(b20);
        this.___privateItemHeight.purgeDependencyOnElmtId(b20);
        this.__groupNoSticky.purgeDependencyOnElmtId(b20);
        this.__isAdaptiveHeight.purgeDependencyOnElmtId(b20);
        this.__refreshHeight.purgeDependencyOnElmtId(b20);
        this.___privateSlideRightOffset.purgeDependencyOnElmtId(b20);
        this.___privateSlideEndPosition.purgeDependencyOnElmtId(b20);
        this.__actionStartX.purgeDependencyOnElmtId(b20);
    }
    aboutToBeDeleted() {
        this.__items.aboutToBeDeleted();
        this.__isScrollSpring.aboutToBeDeleted();
        this.__enableRefresh.aboutToBeDeleted();
        this.__enableLoadMore.aboutToBeDeleted();
        this.__lazyDataSource.aboutToBeDeleted();
        this.__initialIndex.aboutToBeDeleted();
        this.__showEmptyLayout.aboutToBeDeleted();
        this.__showErrorLayout.aboutToBeDeleted();
        this.__showLoadingLayout.aboutToBeDeleted();
        this.__isSwipeDelete.aboutToBeDeleted();
        this.__itemGroupData.aboutToBeDeleted();
        this.___privateRefreshLayoutStatus.aboutToBeDeleted();
        this.__refreshPosition.aboutToBeDeleted();
        this.__listNestedScroll.aboutToBeDeleted();
        this.__isRefreshSticky.aboutToBeDeleted();
        this.__refreshStickyPosition.aboutToBeDeleted();
        this.__useMarkStickyPosition.aboutToBeDeleted();
        this.__enableScrollInteraction.aboutToBeDeleted();
        this.___privateItemHeight.aboutToBeDeleted();
        this.__groupNoSticky.aboutToBeDeleted();
        this.__isAdaptiveHeight.aboutToBeDeleted();
        this.__refreshHeight.aboutToBeDeleted();
        this.___privateSlideRightOffset.aboutToBeDeleted();
        this.___privateSlideEndPosition.aboutToBeDeleted();
        this.__actionStartX.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get items() {
        return this.__items.get();
    }
    set items(a20) {
        this.__items.set(a20);
    }
    get isScrollSpring() {
        return this.__isScrollSpring.get();
    }
    set isScrollSpring(z19) {
        this.__isScrollSpring.set(z19);
    }
    get enableRefresh() {
        return this.__enableRefresh.get();
    }
    set enableRefresh(y19) {
        this.__enableRefresh.set(y19);
    }
    get enableLoadMore() {
        return this.__enableLoadMore.get();
    }
    set enableLoadMore(x19) {
        this.__enableLoadMore.set(x19);
    }
    get lazyDataSource() {
        return this.__lazyDataSource.get();
    }
    set lazyDataSource(w19) {
        this.__lazyDataSource.set(w19);
    }
    get initialIndex() {
        return this.__initialIndex.get();
    }
    set initialIndex(v19) {
        this.__initialIndex.set(v19);
    }
    get showEmptyLayout() {
        return this.__showEmptyLayout.get();
    }
    set showEmptyLayout(u19) {
        this.__showEmptyLayout.set(u19);
    }
    get showErrorLayout() {
        return this.__showErrorLayout.get();
    }
    set showErrorLayout(t19) {
        this.__showErrorLayout.set(t19);
    }
    get showLoadingLayout() {
        return this.__showLoadingLayout.get();
    }
    set showLoadingLayout(s19) {
        this.__showLoadingLayout.set(s19);
    }
    get isSwipeDelete() {
        return this.__isSwipeDelete.get();
    }
    set isSwipeDelete(r19) {
        this.__isSwipeDelete.set(r19);
    }
    get itemGroupData() {
        return this.__itemGroupData.get();
    }
    set itemGroupData(q19) {
        this.__itemGroupData.set(q19);
    }
    get _privateRefreshLayoutStatus() {
        return this.___privateRefreshLayoutStatus.get();
    }
    set _privateRefreshLayoutStatus(p19) {
        this.___privateRefreshLayoutStatus.set(p19);
    }
    get refreshPosition() {
        return this.__refreshPosition.get();
    }
    set refreshPosition(o19) {
        this.__refreshPosition.set(o19);
    }
    get listNestedScroll() {
        return this.__listNestedScroll.get();
    }
    set listNestedScroll(n19) {
        this.__listNestedScroll.set(n19);
    }
    get isRefreshSticky() {
        return this.__isRefreshSticky.get();
    }
    set isRefreshSticky(m19) {
        this.__isRefreshSticky.set(m19);
    }
    get refreshStickyPosition() {
        return this.__refreshStickyPosition.get();
    }
    set refreshStickyPosition(l19) {
        this.__refreshStickyPosition.set(l19);
    }
    get useMarkStickyPosition() {
        return this.__useMarkStickyPosition.get();
    }
    set useMarkStickyPosition(k19) {
        this.__useMarkStickyPosition.set(k19);
    }
    get enableScrollInteraction() {
        return this.__enableScrollInteraction.get();
    }
    set enableScrollInteraction(j19) {
        this.__enableScrollInteraction.set(j19);
    }
    get _privateItemHeight() {
        return this.___privateItemHeight.get();
    }
    set _privateItemHeight(i19) {
        this.___privateItemHeight.set(i19);
    }
    get groupNoSticky() {
        return this.__groupNoSticky.get();
    }
    set groupNoSticky(h19) {
        this.__groupNoSticky.set(h19);
    }
    get isAdaptiveHeight() {
        return this.__isAdaptiveHeight.get();
    }
    set isAdaptiveHeight(g19) {
        this.__isAdaptiveHeight.set(g19);
    }
    get refreshHeight() {
        return this.__refreshHeight.get();
    }
    set refreshHeight(f19) {
        this.__refreshHeight.set(f19);
    }
    aboutToAppear() {
        if (this.itemGroupData != undefined) {
            this._privateIsItemGroup = true;
        }
        if (this.refreshAttribute != null) {
            this.refreshAttribute(this._privateRefreshAttr);
        }
        if (this.listAttribute != null) {
            this.listAttribute(this._privateListAttr);
        }
        if (this.listItemAttribute != null) {
            this.listItemAttribute(this._privateListItemAttr);
        }
        if (this.slideMenuAttr != null) {
            this.slideMenuAttr(this._privateSlideMenuAttr);
        }
        if (this.onLazyDataSource != undefined) {
            this.isLazyData = true;
            this.lazyDataSource = new RefreshDataSource();
            this.lazyDataSource.initData(this.items);
            this.lazyDataSource.refreshArrayCallback((e19) => {
                this.items = e19;
            });
            this.onLazyDataSource(this.lazyDataSource);
        }
        else {
            this.isLazyData = this.lazyDataSource != undefined;
        }
        if (this.slideRightMenuLayout != undefined) {
            let c19 = this.items.length;
            if (this.isLazyData) {
                c19 = this.lazyDataSource.totalCount();
            }
            for (let d19 = 0; d19 < c19; d19++) {
                this._privateSlideRightOffset.push(0);
            }
        }
        if (!this.isLazyData && this.dataController != null) {
            this.dataController.init(this.items);
            this.dataController.refreshArrayCallback((b19) => {
                this.items = b19;
            });
        }
    }
    changeData() {
        this._privateSlideRightOffset[this.dataController.getDeletePosition()] = 0;
        this.dataController.refreshArray(this.items);
        if (this.autoShowEmptyLayout && this.items != undefined) {
            this.showEmptyLayout = this.items.length == 0;
        }
    }
    changeLazyData() {
        if (this.lazyDataSource != undefined && this.autoShowEmptyLayout) {
            this.showEmptyLayout = this.lazyDataSource.totalCount() == 0;
        }
    }
    itemRefreshForEach(i18, j18 = null) {
        this.observeComponentCreation2((k18, l18) => {
            If.create();
            if (i18.isLazyData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        const u18 = (y18, z18) => {
                            const a19 = y18;
                            i18.getListItem.bind(this)(i18, i18.lazyDataSource.getData(z18), z18);
                        };
                        const v18 = (w18, x18) => this.isKeyGeneratorIndex ? x18.toString() :
                            JSON.stringify(w18) + "_" + x18;
                        LazyForEach.create("1", this, i18.lazyDataSource, u18, v18);
                        LazyForEach.pop();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((m18, n18) => {
                        ForEach.create();
                        const o18 = (r18, s18) => {
                            const t18 = r18;
                            i18.getListItem.bind(this)(i18, i18.items[s18], s18);
                        };
                        this.forEachUpdateFunction(m18, i18.items, o18, (p18, q18) => i18.isKeyGeneratorIndex ? q18.toString() :
                            JSON.stringify(p18) + "_" + q18, true, true);
                    }, ForEach);
                    ForEach.pop();
                });
            }
        }, If);
        If.pop();
    }
    listRefreshLayout(c17, d17 = null) {
        this.observeComponentCreation2((a18, b18) => {
            List.create({ space: c17.space, initialIndex: c17.initialIndex, scroller: c17.scroller });
            List.onVisibleAreaChange([0.0, 1.0], (g18, h18) => {
                if (c17._privateListAttr.onVisibleAreaChange != undefined) {
                    c17._privateListAttr.onVisibleAreaChange(g18, h18);
                }
            });
            List.enableScrollInteraction(c17.enableScrollInteraction);
            List.onScroll(c17._privateListAttr.onScroll);
            List.onScrollStart(c17._privateListAttr.onScrollStart);
            List.onScrollStop(c17._privateListAttr.onScrollStop);
            List.onWillScroll(c17._privateListAttr.onWillScroll);
            List.onDidScroll(c17._privateListAttr.onDidScroll);
            List.onReachStart(() => {
                if (c17._privateListAttr.onReachStart != undefined) {
                    c17._privateListAttr.onReachStart();
                }
                c17.refreshPosition = RefreshPositionEnum.TOP;
                if (this.onListRefreshPosition != undefined) {
                    this.onListRefreshPosition(c17.refreshPosition);
                }
            });
            List.onReachEnd(() => {
                if (c17._privateListAttr.onReachEnd != undefined) {
                    c17._privateListAttr.onReachEnd();
                }
                c17.refreshPosition = RefreshPositionEnum.BOTTOM;
                if (c17.onListRefreshPosition != undefined) {
                    c17.onListRefreshPosition(c17.refreshPosition);
                }
            });
            List.onScrollFrameBegin((f18) => {
                if (c17.isRefreshSticky && c17.refreshPosition == RefreshPositionEnum.BOTTOM && !c17.scroller?.isAtEnd()) {
                    c17.refreshPosition = RefreshPositionEnum.CENTER;
                    if (c17.onListRefreshPosition != undefined) {
                        c17.onListRefreshPosition(c17.refreshPosition);
                    }
                    return;
                }
                if ((c17.refreshPosition == RefreshPositionEnum.TOP && f18 <= 0) ||
                    c17.refreshPosition == RefreshPositionEnum.BOTTOM && f18 >= 0) {
                    return { offsetRemain: f18 };
                }
                c17.refreshPosition = RefreshPositionEnum.CENTER;
                if (this.onListRefreshPosition != undefined) {
                    this.onListRefreshPosition(c17.refreshPosition);
                }
                return { offsetRemain: f18 };
            });
            List.cachedCount(c17.lazyCachedCount);
            List.width(c17._privateListAttr.width);
            List.height(((c17._privateIsItemGroup && !this.groupNoSticky) || c17.isRefreshSticky) ?
                "100%" : c17._privateListAttr.height);
            List.backgroundColor(c17._privateListAttr.backgroundColor);
            List.listDirection(c17._privateListAttr.listDirection);
            List.divider({
                color: c17._privateListAttr.divider.color,
                strokeWidth: c17._privateListAttr.divider.strokeWidth,
                startMargin: c17._privateListAttr.divider.startMargin,
                endMargin: c17._privateListAttr.divider.endMargin
            });
            List.contentEndOffset(c17._privateListAttr.contentEndOffset);
            List.scrollBar(c17._privateListAttr.scrollBar);
            List.edgeEffect(c17._privateListAttr.edgeEffect);
            List.onScrollIndex((c18, d18, e18) => {
                if (c17._privateListAttr.onScrollIndex != undefined) {
                    c17._privateListAttr.onScrollIndex(c18, d18, e18);
                }
            });
            List.nestedScroll(ObservedObject.GetRawObject(c17.listNestedScroll));
            List.margin(c17._privateListAttr.margin);
            List.padding(c17._privateListAttr.padding);
            List.sticky(c17._privateIsItemGroup ? (StickyStyle.Header | StickyStyle.Footer) : StickyStyle.None);
            List.lanes(c17._privateListAttr.lanesValue, c17._privateListAttr.lanesGutter);
        }, List);
        this.observeComponentCreation2((e17, f17) => {
            If.create();
            if (c17._privateIsItemGroup && c17.itemGroupData != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((g17, h17) => {
                        ForEach.create();
                        const i17 = (l17, m17) => {
                            const n17 = l17;
                            this.observeComponentCreation2((o17, p17) => {
                                If.create();
                                if (this.itemGroupHeader != undefined) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation2((y17, z17) => {
                                            ListItemGroup.create({ header: this.itemGroupHeader.bind(this, n17, m17) });
                                        }, ListItemGroup);
                                        this.observeComponentCreation2((q17, r17) => {
                                            ForEach.create();
                                            const s17 = (v17, w17) => {
                                                const x17 = v17;
                                                c17.getListItem.bind(this)(c17, x17, w17, m17);
                                            };
                                            this.forEachUpdateFunction(q17, n17.items, s17, (t17, u17) => c17.isKeyGeneratorIndex ? u17.toString() :
                                                JSON.stringify(t17) + "_" + u17, true, true);
                                        }, ForEach);
                                        ForEach.pop();
                                        ListItemGroup.pop();
                                    });
                                }
                                else {
                                    this.ifElseBranchUpdateFunction(1, () => {
                                    });
                                }
                            }, If);
                            If.pop();
                        };
                        this.forEachUpdateFunction(g17, this.itemGroupData, i17, (j17, k17) => JSON.stringify(j17) + "_" + k17, true, true);
                    }, ForEach);
                    ForEach.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    c17.itemRefreshForEach.bind(this)(c17);
                });
            }
        }, If);
        If.pop();
        List.pop();
    }
    itemRefreshLayout(a17, b17 = null) {
        this.listRefreshLayout.bind(this)(a17);
    }
    initialRender() {
        this.observeComponentCreation2((m16, n16) => {
            If.create();
            if (this.prohibitRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemRefreshLayout.bind(this)(this);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((o16, p16) => {
                            if (p16) {
                                let q16 = new RefreshLayout(this, {
                                    onContentScroller: (z16) => {
                                        if (this.onContentScroller != undefined) {
                                            this.onContentScroller(z16);
                                        }
                                        this._privateContentScroller = z16;
                                    },
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    refreshHeight: this.refreshHeight,
                                    controller: this.controller,
                                    onRefresh: this.onRefresh,
                                    onLoadMore: this.onLoadMore,
                                    itemLayout: () => {
                                        this.itemRefreshLayout(this);
                                    },
                                    parentEdgeEffect: this._privateListAttr.edgeEffect,
                                    itemHeaderLayout: this.itemHeaderLayout,
                                    itemFooterLayout: this.itemFooterLayout,
                                    headerRefreshLayout: this.headerRefreshLayout,
                                    footerLoadLayout: this.footerLoadLayout,
                                    refreshHeaderAttribute: this.refreshHeaderAttribute,
                                    loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
                                    parentNestedScroll: this._privateListAttr.parentNestedScroll,
                                    onRefreshScrollEdge: (y16) => {
                                        if (this.onRefreshScrollEdge != undefined) {
                                            this.onRefreshScrollEdge(y16);
                                        }
                                        this.scroller?.scrollEdge(y16);
                                    },
                                    onRefreshScrollToIndex: (x16) => {
                                        if (this.onRefreshScrollToIndex != undefined) {
                                            this.onRefreshScrollToIndex(x16);
                                        }
                                        this._privateContentScroller.scrollTo({ xOffset: 0, yOffset: this._privateItemHeight * x16 });
                                        this.scroller?.scrollToIndex(x16);
                                    },
                                    scrollSpringHeight: this._privateListAttr.scrollSpringHeight,
                                    emptyLayout: this.emptyLayout,
                                    errorLayout: this.errorLayout,
                                    loadingLayout: this.loadingLayout,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    onScroll: this.onScroll,
                                    _privateRefreshLayoutStatus: this._privateRefreshLayoutStatus,
                                    refreshPosition: this.refreshPosition,
                                    useMarkLocation: this._privateIsItemGroup ? true : false,
                                    childScroller: this.scroller,
                                    isScrollSpring: this.isScrollSpring,
                                    isRefreshSticky: this.isRefreshSticky,
                                    refreshStickyPosition: this.refreshStickyPosition,
                                    useMarkStickyPosition: this.refreshStickyPosition,
                                    onScrollTouch: this.onScrollTouch,
                                    onScrollStart: this.onScrollStart,
                                    onScrollStop: this.onScrollStop,
                                    onReachStart: this.onReachStart,
                                    onReachEnd: this.onReachEnd,
                                    onScrollTouchEvent: this.onScrollTouchEvent,
                                    onParentAreaChange: this.onRefreshAreaChange,
                                    onScrollDirection: this.onScrollDirection,
                                    onHeadAreaChange: this.onHeadAreaChange,
                                    onStickyNestedScroll: (w16) => {
                                        this.listNestedScroll = w16;
                                    },
                                    onContentScroll: this._privateRefreshAttr.onContentScroll,
                                    onContentDidScroll: this._privateRefreshAttr.onContentDidScroll,
                                    onContentWillScroll: this._privateRefreshAttr.onContentWillScroll,
                                    onContentScrollEdge: this._privateRefreshAttr.onContentScrollEdge,
                                    onContentScrollStart: this._privateRefreshAttr.onContentScrollStart,
                                    onContentScrollTouchEvent: this._privateRefreshAttr.onContentScrollTouchEvent,
                                    onContentScrollStop: this._privateRefreshAttr.onContentScrollStop,
                                    onContentReachStart: this._privateRefreshAttr.onContentReachStart,
                                    onContentReachEnd: this._privateRefreshAttr.onContentReachEnd,
                                    scrollBarState: this._privateListAttr.scrollBar,
                                    groupNoSticky: this.groupNoSticky,
                                    onScrollDistance: this.onScrollDistance,
                                    slideDisplayLoadData: this.slideDisplayLoadData,
                                    isNeedLoadRebound: this.isNeedLoadRebound,
                                    isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                    isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                    isChildViewHeightUndefined: this._privateListAttr.height == undefined
                                }, undefined, o16, () => { }, { page: "refresh/src/main/ets/ListView.ets", line: 328, col: 7 });
                                ViewPU.create(q16);
                                let r16 = () => {
                                    return {
                                        onContentScroller: (v16) => {
                                            if (this.onContentScroller != undefined) {
                                                this.onContentScroller(v16);
                                            }
                                            this._privateContentScroller = v16;
                                        },
                                        isAdaptiveHeight: this.isAdaptiveHeight,
                                        refreshHeight: this.refreshHeight,
                                        controller: this.controller,
                                        onRefresh: this.onRefresh,
                                        onLoadMore: this.onLoadMore,
                                        itemLayout: () => {
                                            this.itemRefreshLayout(this);
                                        },
                                        parentEdgeEffect: this._privateListAttr.edgeEffect,
                                        itemHeaderLayout: this.itemHeaderLayout,
                                        itemFooterLayout: this.itemFooterLayout,
                                        headerRefreshLayout: this.headerRefreshLayout,
                                        footerLoadLayout: this.footerLoadLayout,
                                        refreshHeaderAttribute: this.refreshHeaderAttribute,
                                        loadMoreFooterAttribute: this.loadMoreFooterAttribute,
                                        enableRefresh: this.enableRefresh,
                                        enableLoadMore: this.enableLoadMore,
                                        parentNestedScroll: this._privateListAttr.parentNestedScroll,
                                        onRefreshScrollEdge: (u16) => {
                                            if (this.onRefreshScrollEdge != undefined) {
                                                this.onRefreshScrollEdge(u16);
                                            }
                                            this.scroller?.scrollEdge(u16);
                                        },
                                        onRefreshScrollToIndex: (t16) => {
                                            if (this.onRefreshScrollToIndex != undefined) {
                                                this.onRefreshScrollToIndex(t16);
                                            }
                                            this._privateContentScroller.scrollTo({ xOffset: 0, yOffset: this._privateItemHeight * t16 });
                                            this.scroller?.scrollToIndex(t16);
                                        },
                                        scrollSpringHeight: this._privateListAttr.scrollSpringHeight,
                                        emptyLayout: this.emptyLayout,
                                        errorLayout: this.errorLayout,
                                        loadingLayout: this.loadingLayout,
                                        showEmptyLayout: this.showEmptyLayout,
                                        showErrorLayout: this.showErrorLayout,
                                        showLoadingLayout: this.showLoadingLayout,
                                        onScroll: this.onScroll,
                                        _privateRefreshLayoutStatus: this._privateRefreshLayoutStatus,
                                        refreshPosition: this.refreshPosition,
                                        useMarkLocation: this._privateIsItemGroup ? true : false,
                                        childScroller: this.scroller,
                                        isScrollSpring: this.isScrollSpring,
                                        isRefreshSticky: this.isRefreshSticky,
                                        refreshStickyPosition: this.refreshStickyPosition,
                                        useMarkStickyPosition: this.refreshStickyPosition,
                                        onScrollTouch: this.onScrollTouch,
                                        onScrollStart: this.onScrollStart,
                                        onScrollStop: this.onScrollStop,
                                        onReachStart: this.onReachStart,
                                        onReachEnd: this.onReachEnd,
                                        onScrollTouchEvent: this.onScrollTouchEvent,
                                        onParentAreaChange: this.onRefreshAreaChange,
                                        onScrollDirection: this.onScrollDirection,
                                        onHeadAreaChange: this.onHeadAreaChange,
                                        onStickyNestedScroll: (s16) => {
                                            this.listNestedScroll = s16;
                                        },
                                        onContentScroll: this._privateRefreshAttr.onContentScroll,
                                        onContentDidScroll: this._privateRefreshAttr.onContentDidScroll,
                                        onContentWillScroll: this._privateRefreshAttr.onContentWillScroll,
                                        onContentScrollEdge: this._privateRefreshAttr.onContentScrollEdge,
                                        onContentScrollStart: this._privateRefreshAttr.onContentScrollStart,
                                        onContentScrollTouchEvent: this._privateRefreshAttr.onContentScrollTouchEvent,
                                        onContentScrollStop: this._privateRefreshAttr.onContentScrollStop,
                                        onContentReachStart: this._privateRefreshAttr.onContentReachStart,
                                        onContentReachEnd: this._privateRefreshAttr.onContentReachEnd,
                                        scrollBarState: this._privateListAttr.scrollBar,
                                        groupNoSticky: this.groupNoSticky,
                                        onScrollDistance: this.onScrollDistance,
                                        slideDisplayLoadData: this.slideDisplayLoadData,
                                        isNeedLoadRebound: this.isNeedLoadRebound,
                                        isPullUpProhibitTouch: this.isPullUpProhibitTouch,
                                        isPullDownProhibitTouch: this.isPullDownProhibitTouch,
                                        isChildViewHeightUndefined: this._privateListAttr.height == undefined
                                    };
                                };
                                q16.paramsGenerator_ = r16;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(o16, {
                                    isAdaptiveHeight: this.isAdaptiveHeight,
                                    refreshHeight: this.refreshHeight,
                                    enableRefresh: this.enableRefresh,
                                    enableLoadMore: this.enableLoadMore,
                                    showEmptyLayout: this.showEmptyLayout,
                                    showErrorLayout: this.showErrorLayout,
                                    showLoadingLayout: this.showLoadingLayout,
                                    refreshPosition: this.refreshPosition,
                                    isScrollSpring: this.isScrollSpring,
                                    isRefreshSticky: this.isRefreshSticky,
                                    refreshStickyPosition: this.refreshStickyPosition,
                                    useMarkStickyPosition: this.refreshStickyPosition,
                                    groupNoSticky: this.groupNoSticky
                                });
                            }
                        }, { name: "RefreshLayout" });
                    }
                });
            }
        }, If);
        If.pop();
    }
    getListItem(p15, q15, r15, s15, t15 = null) {
        {
            const u15 = (k16, l16) => {
                ViewStackProcessor.StartGetAccessRecordingFor(k16);
                v15(k16, l16);
                if (!l16) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const v15 = (z15, a16) => {
                ListItem.create(w15, true);
                ListItem.onAreaChange((i16, j16) => {
                    if (r15 == 0) {
                        this._privateItemHeight = Number(j16.height);
                    }
                    if (this._privateIsPosition) {
                        this._privateContentScroller.scrollTo({ xOffset: 0, yOffset: Number(j16.height) * this.initialIndex });
                        this._privateIsPosition = false;
                    }
                });
                ListItem.onVisibleAreaChange([0.0, 1.0], (g16, h16) => {
                    if (r15 == 0 && g16 && this.isFirstLoadData) {
                        this.refreshPosition = RefreshPositionEnum.TOP;
                        this.isFirstLoadData = false;
                    }
                    if (this._privateListItemAttr.onVisibleAreaChange != undefined) {
                        this._privateListItemAttr.onVisibleAreaChange(r15, g16, h16);
                    }
                });
                ListItem.width(p15._privateListItemAttr.width);
                ListItem.height(p15._privateListItemAttr.height);
                ListItem.onClick(p15._privateListItemAttr.onClick);
                ListItem.backgroundColor(p15._privateListItemAttr.backgroundColor);
                ListItem.swipeAction({
                    start: {
                        builder: () => {
                            if (this.swipeLeftMenuLayout != undefined) {
                                this.swipeLeftMenuLayout(r15);
                            }
                            if (this.groupSwipeLeftMenuLayout != undefined && s15 != undefined) {
                                this.groupSwipeLeftMenuLayout(s15, r15);
                            }
                        },
                        actionAreaDistance: p15.swipeLeftAreaDistance,
                        onStateChange: (f16) => {
                            if (p15.onSwipeRightStateChange != undefined) {
                                p15.onSwipeRightStateChange(f16, r15);
                            }
                        }
                    },
                    end: {
                        builder: () => {
                            if (this.swipeRightMenuLayout != undefined) {
                                this.swipeRightMenuLayout(r15);
                            }
                            if (this.groupSwipeRightMenuLayout != undefined && s15 != undefined) {
                                this.groupSwipeRightMenuLayout(s15, r15);
                            }
                        },
                        actionAreaDistance: p15.swipeRightAreaDistance,
                        onStateChange: (e16) => {
                            if (p15.onSwipeRightStateChange != undefined) {
                                p15.onSwipeRightStateChange(e16, r15);
                            }
                        },
                        onAction: p15.isSwipeDelete ? () => {
                            Context.animateTo({ duration: 300 }, () => {
                                let c16 = this.items;
                                if (this.isLazyData && this.lazyDataSource != undefined) {
                                    c16 = this.lazyDataSource.getDataAll();
                                }
                                let d16 = c16.indexOf(q15);
                                if (this.isLazyData && this.lazyDataSource != undefined) {
                                    this.lazyDataSource.deleteData(d16);
                                    if (this.isDeleteReloadIndex) {
                                        setTimeout(() => {
                                            this.lazyDataSource.reloadData();
                                        }, 300);
                                    }
                                }
                                else {
                                    this.items.splice(d16, 1);
                                }
                            });
                        } : undefined
                    },
                    onOffsetChange: (b16) => {
                        if (this.onSwipeOffsetChange != undefined) {
                            this.onSwipeOffsetChange(b16, r15);
                        }
                    }
                });
            };
            const w15 = (x15, y15) => {
                u15(x15, y15);
                this.getListSlideItem.bind(this)(p15, q15, r15, s15);
                ListItem.pop();
            };
            this.observeComponentCreation2(v15, ListItem);
            ListItem.pop();
        }
    }
    get _privateSlideRightOffset() {
        return this.___privateSlideRightOffset.get();
    }
    set _privateSlideRightOffset(o15) {
        this.___privateSlideRightOffset.set(o15);
    }
    get _privateSlideEndPosition() {
        return this.___privateSlideEndPosition.get();
    }
    set _privateSlideEndPosition(n15) {
        this.___privateSlideEndPosition.set(n15);
    }
    get actionStartX() {
        return this.__actionStartX.get();
    }
    set actionStartX(m15) {
        this.__actionStartX.set(m15);
    }
    getListSlideItem(f15, g15, h15, i15, j15 = null) {
        this.observeComponentCreation2((k15, l15) => {
            If.create();
            if ((this.itemLayout != undefined || this.itemGroupIndexLayout != undefined) &&
                this.slideRightMenuLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    f15.getListSlideMenuView.bind(this)(f15, g15, h15, i15);
                });
            }
            else if (this.itemLayout != undefined) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.itemLayout.bind(this)(g15, h15);
                });
            }
            else if (this.itemGroupIndexLayout != undefined && f15.isNeedGroupIndex && i15 != undefined) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.itemGroupIndexLayout.bind(this)(g15, h15, i15);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(3, () => {
                });
            }
        }, If);
        If.pop();
    }
    getListSlideMenuView(m14, n14, o14, p14, q14 = null) {
        this.observeComponentCreation2((x14, y14) => {
            Row.create();
            Context.animation({ duration: 200 });
            Row.offset({ x: m14._privateSlideRightOffset[o14] });
            Context.animation(null);
            Gesture.create(GesturePriority.Low);
            PanGesture.create(this._slidPanOption);
            PanGesture.onActionStart((e15) => {
                if (e15) {
                    m14.actionStartX = e15.offsetX;
                }
                m14._privateSlideRightOffset[this._privateSlideEndPosition] = 0;
            });
            PanGesture.onActionUpdate((c15) => {
                if (c15) {
                    let d15 = c15.offsetX - m14.actionStartX;
                    if (d15 < -this._privateSlideMenuAttr.rightMenuWidth) {
                        d15 = -this._privateSlideMenuAttr.rightMenuWidth;
                    }
                    if (d15 >= 0) {
                        d15 = 0;
                    }
                    m14._privateSlideRightOffset[o14] = d15;
                }
            });
            PanGesture.onActionEnd((z14) => {
                let a15 = z14.offsetX;
                let b15 = m14.actionStartX - a15;
                if (b15 > (this._privateSlideMenuAttr.rightMenuWidth) / 2) {
                    m14._privateSlideRightOffset[o14] = -this._privateSlideMenuAttr.rightMenuWidth;
                }
                else {
                    m14._privateSlideRightOffset[o14] = 0;
                }
                this._privateSlideEndPosition = o14;
            });
            PanGesture.pop();
            Gesture.pop();
        }, Row);
        this.observeComponentCreation2((v14, w14) => {
            If.create();
            if (this.itemLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemLayout.bind(this)(n14, o14);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((t14, u14) => {
            If.create();
            if (this.itemGroupIndexLayout != undefined && p14 != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.itemGroupIndexLayout.bind(this)(n14, o14, p14);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((r14, s14) => {
            If.create();
            if (this.slideRightMenuLayout != undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.slideRightMenuLayout.bind(this)(o14);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
