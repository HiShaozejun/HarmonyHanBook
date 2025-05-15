export class ContentScrollModifier {
    constructor() {
        this.isAdaptiveHeight = false;
        this.height = "100%";
    }
    applyNormalAttribute(a) {
        if (!this.isAdaptiveHeight) {
            a.height(this.height);
        }
    }
}
