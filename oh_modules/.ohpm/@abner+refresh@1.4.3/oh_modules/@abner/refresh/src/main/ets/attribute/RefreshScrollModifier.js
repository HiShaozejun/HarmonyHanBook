export class RefreshScrollModifier {
    constructor() {
        this.isAdaptiveHeight = false;
        this.height = "100%";
    }
    applyNormalAttribute(b) {
        if (!this.isAdaptiveHeight) {
            b.height(this.height);
        }
    }
}
