/**
 * AUTHOR:AbnerMing
 * DATE:2024/5/10
 * INTRODUCE:数据控制器
 * */
export declare class DataController {
    private items;
    private refreshCallBack?;
    private deletePosition;
    getDeletePosition(): number;
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
    getData(z: number): Object;
    init(y: Array<Object>): void;
    add(x: Object): void;
    addPosition(v: number, w: Object): void;
    addPositionArray(s: number, t: Object[]): void;
    addVariable(...r: Object[]): void;
    addArray(q: Object[]): void;
    refreshArrayCallback(p: (items: Array<Object>) => void): void;
    refreshArray(o: Array<Object>): void;
    deleteFirst(): void;
    deleteLast(): void;
    deleteData(l: number): void;
    deleteAll(): void;
    changeData(j: number, k: Object): void;
}
