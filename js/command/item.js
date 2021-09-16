import { BaseDisplayData, BaseManager } from "./BaseData.js"
import { BuildingData } from "./unit.js";
import { GameMap } from "../module/map/GameMap.js";
import { GlobalData } from "../ado/GlobalData.js";
import { SkillsPackage } from "../module/skill.js";
import { ColorFilter } from "../utils/ColorFilter.js";

export class BaseItemData extends BaseDisplayData {
    static PAY_URL = "pay/";
    static PNG = ".png";
    static DATA_PRICE = "price";
    static DATA_UNLOCK_MAP_ID = "unlock_mid";
    static DATA_COIN = "coin";
    static DATA_GOLD = "gold";
    static DATA_SCORE = "invite_score";
    static DATA_INDEX = "index";
    m_price;
    priceCoin;
    priceGold;
    priceScore;
    unlockMapId;
    index;

    constructor(_data) {
        super(_data);
        this.m_price = _data[BaseItemData.DATA_PRICE];
        this.initPrice();
        this.unlockMapId = _data[BaseItemData.DATA_UNLOCK_MAP_ID];
        this.index = _data[BaseItemData.DATA_INDEX];
    }

    get price() {
        if (this instanceof BuildingData) {
            if (GameMap.currentMap) {
                if (GameMap.currentMap.isDefendMap) {
                    if (this.campPrice instanceof Array) {
                        return this.campPrice;
                    }
                }
            }
        }
        return this.m_price;
    }

    initPrice() {
        let _priceArr = null;
        let _price = this.price;
        if (!_price) {
            return;
        }
        if (_price instanceof Array) {
            _priceArr = _price;
            if (_priceArr[0] == BaseItemData.DATA_COIN) {
                this.priceCoin = _priceArr[1];
            }
            else if (_priceArr[0] == BaseItemData.DATA_GOLD) {
                this.priceGold = _priceArr[1];
            }
            else if (_priceArr[0] == BaseItemData.DATA_SCORE) {
                this.priceScore = _priceArr[1];
            }
        }
        else {
            this.priceCoin = _price[BaseItemData.DATA_COIN];
            this.priceGold = _price[BaseItemData.DATA_GOLD];
            this.priceScore = _price[BaseItemData.DATA_SCORE];
        }
    }

    get payPngURL() {
        return BaseItemData.PAY_URL + id + BaseItemData.PNG;
    }

    get isRare() {
        if (this.priceCoin > 0) {
            if (this.priceCoin >= GlobalData.$_rare_item_coin) {
                return true;
            }
            if (this.index < 0) {
                return true;
            }
        }
        else if (this.priceScore > 0) {
            if (this.priceScore >= GlobalData.$_rare_item_invite_score) {
                return true;
            }
            if (this.index < 0) {
                return true;
            }
        }
        return false;
    }
}

export class GemData extends BaseItemData {
    static TYPE_PURE = "typePure";
    static TYPE_MIX = "typeMix";
    static DATA_GEM_LEVEL = "gamLevel";
    static DATA_TOWER_SKILL_PACKAGE = "sp";
    static DATA_NEXT_LEVEL_ID = "nextId";
    static DATA_COLOR_INDEX = "color";
    static SKILL_PACKAGE_ID = "id";
    static SKILL_PACKAGE_LEVEL = "lv";
    gemLevel;
    towerSkillPackage;
    nextLevelId;
    colorIndex;

    constructor(_data) {
        super(_data);
        this.typeId = BaseDisplayData.TYPE_GEM_ITEM;
        this.gemLevel = _data[GemData.DATA_GEM_LEVEL];
        this.towerSkillPackage = _data[GemData.DATA_TOWER_SKILL_PACKAGE];
        this.nextLevelId = _data[GemData.DATA_NEXT_LEVEL_ID];
        this.colorIndex = _data[GemData.DATA_COLOR_INDEX];
        this.res = this.resString;
    }

    getSkillPackage(_towerDataId) {
        if (this.towerSkillPackage == null) {
            return null;
        }
        let _regExp = /\D/ig;
        _towerDataId = _towerDataId.match(_regExp).join("");
        let _spObj = this.towerSkillPackage[_towerDataId];
        if (_spObj == null) {
            return null;
        }
        return new SkillsPackage(_spObj[GemData.SKILL_PACKAGE_ID], _spObj[GemData.SKILL_PACKAGE_LEVEL]);
    }

    get color() {
        return ColorFilter.COLOR_LIST[this.colorIndex];
    }

    get resString() {
        return "hong" + this.gemLevel;
    }
}

export class GemManager extends BaseManager {
    static onlyExample = null;

    constructor() {
        super();
        GemManager.onlyExample = this;
        this.loadData(GlobalData.$_global_properties[BaseDisplayData.TYPE_GEM_ITEM]);
    }

    static getOnlyExample() {
        if (GemManager.onlyExample == null) {
            GemManager.onlyExample = new GemManager();
        }
        return GemManager.onlyExample;
    }

    loadData(_data) {
        let k = undefined;
        for (k in _data) {
            this.m_manager[k] = new GemData(_data[k]);
        }
    }

    initData() {
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}

