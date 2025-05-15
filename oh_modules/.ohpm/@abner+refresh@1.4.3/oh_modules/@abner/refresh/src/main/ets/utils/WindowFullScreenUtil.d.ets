import window from '@ohos.window';
/**
 * AUTHOR:AbnerMing
 * DATE:2024/5/9
 * INTRODUCE:沉浸式切换
 * */
export declare class WindowFullScreenAttr {
    sysBarProps?: window.SystemBarProperties;
    success?: (win: window.Window) => void;
}
export declare class WindowFullScreenUtil {
    static changeWindowFullScreen(z28: boolean, a29?: WindowFullScreenAttr): void;
}
