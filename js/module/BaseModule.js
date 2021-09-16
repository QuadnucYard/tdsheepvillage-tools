
import { BaseData } from "../command/BaseData.js"

export class BaseModule {
    m_data;

    constructor() {
        this.m_data = new BaseData(new Object());
    }

    get baseData() {
        return this.m_data;
    }
}

export class BaseDisplayModule extends BaseModule {

    constructor() {
        super()
    }

}