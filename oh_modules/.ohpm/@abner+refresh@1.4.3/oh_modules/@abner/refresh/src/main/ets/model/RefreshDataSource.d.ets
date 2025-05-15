/**
 * AUTHOR:AbnerMing
 * DATE:2024/2/23
 * INTRODUCE:懒加载数据
 * */
@Observed
export declare class RefreshDataSource implements IDataSource {
    private listeners;
    private originDataArray;
    initData(u21: Array<Object>): void;
    getDataChangeListener(): DataChangeListener[];
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:返回列表数量
     * */
    totalCount(): number;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:返回所有的数据
     * */
    getDataAll(): Object[];
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:返回某一个对象
     * */
    getData(t21: number): Object;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听
     * */
    registerDataChangeListener(s21: DataChangeListener): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听
     * */
    unregisterDataChangeListener(q21: DataChangeListener): void;
    notifyDataReload(): void;
    notifyDataAdd(n21: number): void;
    notifyDataChange(l21: number): void;
    notifyDataDelete(j21: number): void;
    notifyDataMove(g21: number, h21: number): void;
    addData(e21: number, f21: Object): void;
    pushData(d21: Object): void;
    pushDataPosition(b21: number, c21: Object): void;
    pushDataPositionArray(y20: number, z20: Object[]): void;
    pushDataArray(x20: Array<Object>): void;
    deleteAllAfterPushArray(w20: Array<Object>): void;
    pushDataVariable(...v20: Object[]): void;
    deleteFirst(): void;
    deleteLast(): void;
    deleteData(u20: number): void;
    deleteDataAssign(s20: number[]): void;
    deleteAll(r20?: () => void): void;
    moveData(o20: number, p20: number): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:改变单个数据
     * */
    changeData(m20: number, n20: Object): void;
    reloadData(): void;
    /**
     * AUTHOR:AbnerMing
     * INTRODUCE:改变多个数据
     * */
    modifyAllData(): void;
    private refreshCallBack?;
    refreshArrayCallback(k20: (items: Array<Object>) => void): void;
}
