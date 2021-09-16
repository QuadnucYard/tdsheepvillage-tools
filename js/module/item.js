import { BaseModule } from "./BaseModule.js";
import { GemManager } from "../command/item.js";

export class GemItem extends BaseModule {
    constructor(_dataId) {
        super();
        this.m_data = GemManager.getOnlyExample().getData(_dataId);
    }

    get gemData() {
        return this.m_data;
    }
}
