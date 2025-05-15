import { RefreshHeaderTimeFormat, RefreshHeaderTimeLabel } from '../constants/RefreshEnum';
import { RefreshHeaderType } from '../constants/RefreshHeaderType';
import { HeaderPointsAttr } from './HeaderPointsAttr';
export class RefreshHeaderAttr {
    constructor() {
        this.headerType = RefreshHeaderType.DEFAULT;
        this.width = "100%";
        this.height = 80;
        this.timeFormat = RefreshHeaderTimeFormat.MDHM;
        this.timeLabel = RefreshHeaderTimeLabel.SHORTLINE;
        this.hideTime = false;
        this.fontSize = 14;
        this.fontColor = "#666666";
        this.timeFontSize = 12;
        this.timeFontColor = "#999999";
        this.marginIconLeft = 10;
        this.headerPointsAttr = new HeaderPointsAttr();
        this.marginBottom = 20;
    }
}
