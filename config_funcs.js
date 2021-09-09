
var isDefendMap = false;

const GlobalData = {
    $_global_properties: config.properties,
    $_tower_worth_factor: config["camp_system_simple"]["tower_worth_factor"],
    $_towerAtt_Obj: config.building["tower"]
};

class BaseManager {
    m_manager = {};

    getDataById(_id) {
        return this.m_manager[_id];
    }
}

class GemManager extends BaseManager {
    static #instance;

    static get instance() {
        return this.#instance ||= new GemManager();
    }

    constructor() {
        super();
        this.loadData(GlobalData.$_global_properties["gem"]);
    }

    loadData(_data) {
        for (let k in _data) {
            _data[k][BaseData.DATA_ID] = k;
            this.m_manager[k] = new GemData(_data[k]);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}

class TowerManager extends BaseManager {
    static #instance;

    static get instance() {
        return this.#instance ||= new TowerManager();
    }

    constructor() {
        super();
        this.loadData(GlobalData.$_towerAtt_Obj);
    }

    loadData(_data) {
        for (let k in _data) {
            _data[k][BaseData.DATA_ID] = k;
            this.m_manager[k] = new TowerData(_data[k]);

        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}

class BaseData {
    static DATA_TYPE_ID = "typeId";

    static DATA_KIND_ID = "kindId";

    static DATA_ID = "id";

    static DATA_A = "a";
    static DATA_B = "b";
    static DATA_C = "c";
    static DATA_D = "d";

    static DATA_ID = "id";

    typeId;
    kindId;
    id;
    name;

    constructor(_data) {
        if (_data) {
            this.typeId = _data[BaseData.DATA_TYPE_ID];
            this.kindId = _data[BaseData.DATA_KIND_ID];
            this.id = _data[BaseData.DATA_ID];
        }
    }
}

class BaseItemData extends BaseData {
    static DATA_PRICE = "price";
    static DATA_UNLOCK_MAP_ID = "unlock_mid";
    static DATA_COIN = "coin";
    static DATA_GOLD = "gold";
    static DATA_SCORE = "invite_score";
    static DATA_INDEX = "index";

    constructor(_data) {

        super(_data);
        this.m_price = _data[BaseItemData.DATA_PRICE];
        this.initPrice();
        this.unlockMapId = _data[BaseItemData.DATA_UNLOCK_MAP_ID];
        this.index = _data[BaseItemData.DATA_INDEX];
    }

    initPrice() {
        let _price = this.price;
        if (!_price) return;
        if (_price instanceof Array) {
            let _priceArr = _price;
            if (_priceArr[0] == BaseItemData.DATA_COIN) {
                this.priceCoin = _priceArr[1];
            } else if (_priceArr[0] == BaseItemData.DATA_GOLD) {
                this.priceGold = _priceArr[1];
            } else if (_priceArr[0] == BaseItemData.DATA_SCORE) {
                this.priceScore = _priceArr[1];
            }
        } else {
            this.priceCoin = _price[BaseItemData.DATA_COIN];
            this.priceGold = _price[BaseItemData.DATA_GOLD];
            this.priceScore = _price[BaseItemData.DATA_SCORE];
        }
    }

    get price() {
        if (Object.getPrototypeOf(this) === BuildingData && isDefendMap) {
            return this.m_campPrice;
        }
        return this.m_price;
    }
}

class GemData extends BaseItemData {
    gemLevel;
    towerSkillPackage;
    nextLevelId;

    constructor(_data) {
        super(_data);
        this.typeId = "gem";
        this.gemLevel = _data["gamLevel"];
        this.towerSkillPackage = _data["sp"];
        this.nextLevelId = _data["nextId"];
    }
}

class BuildingData extends BaseItemData {
    static DATA_BUILD_VALUE = "build_val";
    static DATA_EXP_VALUE = "exp_val";
    static DATA_CAMP_PRICE = "camp_price";
    static DATA_CAMP_BUILD_VALUE = "camp_build_val";
    static DATA_RANGE = "range";
    static DATA_RATE = "rate";
    static DATA_LIMIT_NUM = "limit_num";

    m_buildValueA;
    m_buildValueB;
    m_buildValueC;
    m_campPrice;
    m_campBuildValueA;
    m_campBuildValueB;
    m_campBuildValueC;
    range;
    rate;
    limitNum;

    constructor(_data) {
        super(_data);
        if (_data[BuildingData.DATA_BUILD_VALUE]) {
            this.m_buildValueA = _data[BuildingData.DATA_BUILD_VALUE][BuildingData.DATA_A];
            this.m_buildValueB = _data[BuildingData.DATA_BUILD_VALUE][BuildingData.DATA_B];
            this.m_buildValueC = _data[BuildingData.DATA_BUILD_VALUE][BuildingData.DATA_C];
        } else if (_data[BuildingData.DATA_EXP_VALUE]) {
            this.m_buildValueA = _data[BuildingData.DATA_EXP_VALUE][BuildingData.DATA_A];
            this.m_buildValueB = _data[BuildingData.DATA_EXP_VALUE][BuildingData.DATA_B];
            this.m_buildValueC = _data[BuildingData.DATA_EXP_VALUE][BuildingData.DATA_C];
        }
        if (_data[BuildingData.DATA_CAMP_PRICE]) {
            this.m_campPrice = _data[BuildingData.DATA_CAMP_PRICE];
        }
        if (_data[BuildingData.DATA_CAMP_BUILD_VALUE]) {
            this.m_campBuildValueA = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BuildingData.DATA_A];
            this.m_campBuildValueB = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BuildingData.DATA_B];
            this.m_campBuildValueC = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BuildingData.DATA_C];
        }
        this.range = _data[BuildingData.DATA_RANGE];
        this.rate = Math.round(_data[BuildingData.DATA_RATE] * 10);
        this.limitNum = _data[BuildingData.DATA_LIMIT_NUM];
    }

    get buildValueA() {
        return isDefendMap ? this.m_campBuildValueA : this.m_buildValueA;
    }
    get buildValueB() {
        return isDefendMap ? this.m_campBuildValueB : this.m_buildValueB;
    }
    get buildValueC() {
        return isDefendMap ? this.m_campBuildValueC : this.m_buildValueC;
    }
    get campPrice() {
        return this.m_campPrice;
    }
    get buildCostPrice() {
        return this.price[0];
    }
    get buildCost() {
        return this.price[1];
    }
    get buildValueAConst() {
        return this.m_buildValueA;
    }
    get buildValueBConst() {
        return this.m_buildValueB;
    }
    get buildValueCConst() {
        return this.m_buildValueC;
    }
    get buildCostPriceConst() {
        return this.m_price[0];
    }
    get buildCostConst() {
        return this.m_price[1];
    }
}

class TowerData extends BuildingData {
    m_buildCostA;
    m_buildCostB;
    m_buildCostC;
    m_campBuildCostA;
    m_campBuildCostB;
    m_campBuildCostC;
    damageA;
    damageB;
    damageC;
    buffEffect;
    levelMax;

    constructor(_data) {
        super(_data);
        this.m_buildCostA = _data["build_cost"]["a"];
        this.m_buildCostB = _data["build_cost"]["b"];
        this.m_buildCostC = _data["build_cost"]["c"];
        this.m_campBuildCostA = _data["camp_build_cost"]["a"];
        this.m_campBuildCostB = _data["camp_build_cost"]["b"];
        this.m_campBuildCostC = _data["camp_build_cost"]["c"];
        this.damageA = _data["damage"]["a"];
        this.damageB = _data["damage"]["b"];
        this.damageC = _data["damage"]["c"];
        this.buffEffect = _data["buffEffect"];
        this.levelMax = _data["lev_max"];
    }

    get buildCostA() {
        return isDefendMap ? this.m_campBuildCostA : this.m_buildCostA;
    }
    get buildCostB() {
        return isDefendMap ? this.m_campBuildCostB : this.m_buildCostB;
    }
    get buildCostC() {
        return isDefendMap ? this.m_campBuildCostC : this.m_buildCostC;
    }
    get buildCostAConst() {
        return this.m_buildCostA;
    }
    get buildCostBConst() {
        return this.m_buildCostB;
    }
    get buildCostCConst() {
        return this.m_buildCostC;
    }

    get buildCostPriceConst() {
        return this.m_price[0];
    }

    get buildCostConst() {
        return this.m_price[1];
    }

    get isMagicTower() {
        return this.id == "xiangqianta";
    }
}

class BaseModule {
    m_data;
}

class GemItem extends BaseModule {
    constructor(_dataId) {
        super();
        this.m_data = GemManager.instance.getData(_dataId);
    }

    get gemData() {
        return this.m_data;
    }
}

class Tower extends BaseModule {

    m_level;
    exp;
    gem;

    constructor(_dataId) {
        super();
        this.m_data = TowerManager.instance.getData(_dataId);
        this.level = 1;
    }

    get towerData() {
        return this.m_data;
    }

    get level() {
        return this.m_level;
    }
    set level(_level) {
        this.m_level = _level;
    }

    get gemLevel() {
        return this.gem ? this.gem.gemData.gemLevel : 0;
    }

    get ability() {
        var _gemLevel = this.gemLevel;
        if (this.towerData.isMagicTower) {
            if (_gemLevel == 0) {
                return 0;
            }
            return this.m_level * (0.8 + _gemLevel / 5) * 2;
        }
        return this.m_level * (1 + _gemLevel / 10);
    }

    get power() {
        let _level = this.level;
        let _paramList = GlobalData.$_tower_worth_factor;
        let _gemLevel = this.gemLevel;
        let _valueCost = this.valueCostConst(_level);
        return Math.round((_valueCost + Math.pow(_gemLevel, _paramList[0]) * _paramList[1]) * (_paramList[2] + _gemLevel / _paramList[3]));
    }

    buildValue(_level = -1) {
        if (_level == -1) _level = this.level;
        return parseInt(this.towerData.buildValueA + this.towerData.buildValueB * _level + this.towerData.buildValueC * _level * _level);
    }

    buildCost(_level = -1) {
        if (_level == -1) _level = this.level;
        return parseInt(this.towerData.buildCostA + this.towerData.buildCostB * _level + this.towerData.buildCostC * _level * _level);
    }

    valueCost(_level = -1) {
        if (_level == -1) _level = this.level;
        let _value = _level * this.towerData.buildCostA + (_level * _level + _level) / 2 * this.towerData.buildCostB + (_level * _level * _level + _level * _level * 3 / 2 + _level / 2) / 3 * this.towerData.buildCostC + this.towerData.buildCost - this.towerData.buildCostA - this.towerData.buildCostB - this.towerData.buildCostC;
        return Math.round(_value);
    }

    valueCostConst(_level = -1) {
        if (_level == -1) _level = this.level;
        let _value = _level * this.towerData.buildCostAConst + (_level * _level + _level) / 2 * this.towerData.buildCostBConst + (_level * _level * _level + _level * _level * 3 / 2 + _level / 2) / 3 * this.towerData.buildCostCConst + this.towerData.buildCostConst - this.towerData.buildCostAConst - this.towerData.buildCostBConst - this.towerData.buildCostCConst;
        return Math.round(_value);
    }

    buffEffect(_level = -1) {
        if (_level == -1) _level = this.level;
        return this.towerData.buffEffect * _level + 1;
    }

    damage(_level = -1) {
        if (_level == -1) _level = this.level;
        return Math.round(this.towerData.damageA + this.towerData.damageB * _level + this.towerData.damageC * _level * _level);
    }

    get range() {
        return this.towerData.range;
    }

    get rate() {
        return this.towerData.rate;
    }

    setGem(_gem) {
        this.gem = _gem;
        //技能
    }

}

