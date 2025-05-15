import window from '@ohos.window';
export class WindowFullScreenAttr {
}
export class WindowFullScreenUtil {
    static changeWindowFullScreen(z28, a29) {
        window.getLastWindow(getContext(), (b29, c29) => {
            const d29 = b29.code;
            if (d29) {
                return;
            }
            if (a29?.success != undefined) {
                a29?.success(c29);
            }
            c29.setWindowLayoutFullScreen(z28, (g29) => {
                let h29 = g29.code;
                if (h29) {
                    console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(g29));
                    return;
                }
                console.info('Succeeded in setting the window layout to full-screen mode.');
            });
            if (a29?.sysBarProps != undefined) {
                c29.setWindowSystemBarProperties(a29?.sysBarProps, (e29) => {
                    let f29 = e29.code;
                    if (f29) {
                        console.error('Failed to set the system bar properties. Cause: ' + JSON.stringify(e29));
                        return;
                    }
                    console.info('Succeeded in setting the system bar properties.');
                });
            }
        });
    }
}
