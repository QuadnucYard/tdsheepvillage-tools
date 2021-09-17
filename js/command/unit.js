import { BaseItemData } from "./item.js"
import { BaseData, BaseManager } from "./BaseData.js";
import { GlobalData } from "../ado/GlobalData.js";
import { GameMap } from "../module/map/GameMap.js";

export class BaseUnitData extends BaseItemData {
    static DATA_A = "a";
    static DATA_B = "b";
    static DATA_C = "c";
    static DATA_D = "d";
    static DATA_SKILL_PACKAGE_ID = "skill";
    static DATA_SKILL_PACKAGE_LEVEL = "skillLv";
    static DATA_SKILLS = "skills";
    static DATA_X_GRID = "x_grid";
    static DATA_Y_GRID = "y_grid";
    skillPackageId;
    skillPackageLevel;
    skills;
    xGrid;
    yGrid;

    constructor(_data) {
        let k = undefined;
        super(_data);
        this.skillPackageId = _data[BaseUnitData.DATA_SKILL_PACKAGE_ID];
        this.skillPackageLevel = _data[BaseUnitData.DATA_SKILL_PACKAGE_LEVEL];
        if (_data[BaseUnitData.DATA_SKILLS] instanceof Array) {
            this.skills = _data[BaseUnitData.DATA_SKILLS];
        }
        else if (_data[BaseUnitData.DATA_SKILLS] instanceof Object) {
            this.skills = [];
            for (k in _data[BaseUnitData.DATA_SKILLS]) {
                this.skills.push({
                    "skid": k,
                    "lev": _data[BaseUnitData.DATA_SKILLS][k]
                });
            }
        }
        if (_data[BaseUnitData.DATA_X_GRID]) {
            this.xGrid = _data[BaseUnitData.DATA_X_GRID];
        } else {
            this.xGrid = 1;
        }
        if (_data[BaseUnitData.DATA_Y_GRID]) {
            this.yGrid = _data[BaseUnitData.DATA_Y_GRID];
        } else {
            this.yGrid = 1;
        }
    }
}


export class BuildingData extends BaseUnitData {
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

    constructor(_data = null) {
        super(_data);
        if (_data[BuildingData.DATA_BUILD_VALUE]) {
            this.m_buildValueA = _data[BuildingData.DATA_BUILD_VALUE][BaseUnitData.DATA_A];
            this.m_buildValueB = _data[BuildingData.DATA_BUILD_VALUE][BaseUnitData.DATA_B];
            this.m_buildValueC = _data[BuildingData.DATA_BUILD_VALUE][BaseUnitData.DATA_C];
        }
        else if (_data[BuildingData.DATA_EXP_VALUE]) {
            this.m_buildValueA = _data[BuildingData.DATA_EXP_VALUE][BaseUnitData.DATA_A];
            this.m_buildValueB = _data[BuildingData.DATA_EXP_VALUE][BaseUnitData.DATA_B];
            this.m_buildValueC = _data[BuildingData.DATA_EXP_VALUE][BaseUnitData.DATA_C];
        }
        if (_data[BuildingData.DATA_CAMP_PRICE]) {
            this.m_campPrice = _data[BuildingData.DATA_CAMP_PRICE];
        }
        if (_data[BuildingData.DATA_CAMP_BUILD_VALUE]) {
            this.m_campBuildValueA = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BaseUnitData.DATA_A];
            this.m_campBuildValueB = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BaseUnitData.DATA_B];
            this.m_campBuildValueC = _data[BuildingData.DATA_CAMP_BUILD_VALUE][BaseUnitData.DATA_C];
        }
        this.range = _data[BuildingData.DATA_RANGE];
        this.rate = Math.round(_data[BuildingData.DATA_RATE] * 10);
        this.limitNum = _data[BuildingData.DATA_LIMIT_NUM];
    }

    get buildValueA() {
        if (GameMap.currentMap) {
            if (GameMap.currentMap.isDefendMap) {
                return this.m_campBuildValueA;
            }
        }
        return this.m_buildValueA;
    }

    get buildValueB() {
        if (GameMap.currentMap) {
            if (GameMap.currentMap.isDefendMap) {
                return this.m_campBuildValueB;
            }
        }
        return this.m_buildValueB;
    }

    get buildValueC() {
        if (GameMap.currentMap) {
            if (GameMap.currentMap.isDefendMap) {
                return this.m_campBuildValueC;
            }
        }
        return this.m_buildValueC;
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



export class TrapData extends BuildingData {
    static KIND_BLAST = "1";
    static KIND_DAMAGE = "2";
    static KIND_VERTIGO = "3";
    static KIND_SLOW = "4";
    static KIND_BEAT_BACK = "5";
    static KIND_COLD_BULLET = "50";
    static KIND_BULLET = "100";
    static KIND_BULLET_RANDOM = "101";
    static EFFECT_TYPE_FLOOR = "1";
    static EFFECT_TYPE_AIR = "2";
    static EFFECT_TYPE_ALL = "3";
    static EFFECT_TYPE_LIGHTNING = "4";
    static EFFECT_KIND_SINGLE = "1";
    static EFFECT_KIND_MULTI = "2";
    static DATA_VALUE_LIST = "value";
    static DATA_EFFECT_TYPE = "effectType";
    static DATA_EFFECT_KIND = "effectKind";
    static DATA_EFFECT_RANGE = "effectRange";
    static DATA_USE_NUM = "use_times";
    static DATA_COLDDOWN = "colddown";
    static DATA_DELAY = "delay";
    static DATA_EFFECT = "effect";
    valueList;
    effectType;
    effectKind;
    effectRange;
    useNum;
    colddown;
    delay;
    attackEffectId;

    constructor(_data) {
        super(_data);
        typeId = BaseDisplayData.TYPE_TRAP_ITEM;
        this.valueList = _data[TrapData.DATA_VALUE_LIST];
        this.effectType = _data[TrapData.DATA_EFFECT_TYPE];
        this.effectKind = _data[TrapData.DATA_EFFECT_KIND];
        if (_data[TrapData.DATA_USE_NUM]) {
            this.useNum = _data[TrapData.DATA_USE_NUM];
        } else {
            this.useNum = 1;
        }
        if (_data[TrapData.DATA_COLDDOWN]) {
            this.colddown = _data[TrapData.DATA_COLDDOWN];
        } else {
            this.colddown = 0.1;
        }
        if (_data[TrapData.DATA_DELAY]) {
            this.delay = _data[TrapData.DATA_DELAY];
        } else {
            this.delay = 0;
        }
        if (_data[TrapData.DATA_EFFECT_RANGE]) {
            this.effectRange = _data[TrapData.DATA_EFFECT_RANGE];
        } else {
            this.effectRange = range;
        }
        this.attackEffectId = _data[TrapData.DATA_EFFECT];
    }
}


export class TowerData extends BuildingData {
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
        return GameMap.currentMap?.isDefendMap ? this.m_campBuildCostA : this.m_buildCostA;
    }
    get buildCostB() {
        return GameMap.currentMap?.isDefendMap ? this.m_campBuildCostB : this.m_buildCostB;
    }
    get buildCostC() {
        return GameMap.currentMap?.isDefendMap ? this.m_campBuildCostC : this.m_buildCostC;
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

export class TowerManager extends BaseManager {
    static onlyExample = null;

    constructor() {
        super();
        TowerManager.onlyExample = this;
        this.loadData(GlobalData.$_towerAtt_Obj);
    }

    static getOnlyExample() {
        if (TowerManager.onlyExample == null) {
            TowerManager.onlyExample = new TowerManager();
        }
        return TowerManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data) {
            _d = _data[k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new TowerData(_data[k]);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}

export class WallData extends BuildingData {
    static KIND_DAMAGE = "damage";
    static KIND_RATE = "rate";
    static KIND_RANGE = "range";
    static DATA_VALUE_LIST = "value";
    valueList;

    constructor(_data = null) {
        super(_data);
        this.typeId = BaseDisplayData.TYPE_WALL;
        this.valueList = _data[WallData.DATA_VALUE_LIST];
    }
}


export class BulletData extends BaseUnitData {
    static SHAPE_COMMON = 0;
    static SHAPE_DIRECTION = 1;
    static SHAPE_ROLL = 2;
    static DAMAGE_NULL = 0;
    static DAMAGE_COMMON = 1;
    static DAMAGE_PERFORATIVE = 2;
    static DAMAGE_MAGICAL = 3;
    static DAMAGE_SIEGE = 4;
    static DAMAGE_MIXED = 5;
    static FALL_ACC_SPEED_THRESHOLD = -7;
    static DATA_SHAPE_MODE = "shapeMode";
    static DATA_DAMAGE_MODE = "damageMode";
    static DATA_RADII = "radii";
    static DATA_SHADOW = "shadow";
    static DATA_FALL_ACC_SPEED = "fallAcc";
    static DATA_FLOOR_PATH_ID = "path";
    static DATA_HIT_EFFECT_ID = "effect";
    shapeMode;
    damageMode;
    radii;
    shadow;
    fallAccSpeed;
    floorPathId;
    hitEffectId;

    constructor(_data = null) {
        super(_data);
        this.shapeMode = _data[BulletData.DATA_SHAPE_MODE];
        this.damageMode = _data[BulletData.DATA_DAMAGE_MODE];
        this.radii = _data[BulletData.DATA_RADII];
        if (_data[BulletData.DATA_SHADOW]) {
            this.shadow = _data[BulletData.DATA_SHADOW];
        } else {
            this.shadow = 1;
        }
        this.fallAccSpeed = _data[BulletData.DATA_FALL_ACC_SPEED];
        this.floorPathId = _data[BulletData.DATA_FLOOR_PATH_ID];
        this.hitEffectId = _data[BulletData.DATA_HIT_EFFECT_ID];
    }
}


export class BulletManager extends BaseManager {
    static onlyExample = null;

    constructor() {
        super();
        BulletManager.onlyExample = this;
        this.loadData(GlobalData.$_bulletAtt_Obj);
    }

    static getOnlyExample() {
        if (BulletManager.onlyExample == null) {
            BulletManager.onlyExample = new BulletManager();
        }
        return BulletManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data) {
            _d = _data[k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new BulletData(_data[k]);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}


export class MonsterData extends BaseUnitData {
    static SPEAK_ENTER = 0;
    static SPEAK_IDLE = 1;
    static SPEAK_INJURY = 2;
    static SPEAK_DIE = 3;
    static SPEAK_INVADE = 4;
    static SPEAK_CAST = 5;
    static DEFENSE_NULL = 0;
    static DEFENSE_LIGHT = 1;
    static DEFENSE_COMMON = 2;
    static DEFENSE_HEAVY = 3;
    static DEFENSE_BUILDING = 4;
    static DEFENSE_BOSS = 5;
    static DEFENSE_HOLY = 6;
    static DEFENSE_INVINCIBLE = 7;
    static DATA_HP_MAX = "hp_factor";
    static DATA_EXP_MAX = "explev";
    static DATA_HP_MAX_A = "ha";
    static DATA_HP_MAX_B = "hb";
    static DATA_HP_MAX_C = "hc";
    static DATA_SPEED_BASE = "speed";
    static DATA_CHARM = "charm";
    static DATA_HEIGHT = "height";
    static DATA_WIDTH = "width";
    static DATA_SPEAK_LIST = "speak";
    static DATA_POPULATION = "pop";
    hpMaxA;
    hpMaxB;
    hpMaxC;
    expMaxA;
    expMaxB;
    expMaxC;
    expMaxD;
    speedBase;
    charm;
    height;
    width;
    speakList;
    population;

    constructor(_data) {
        super(_data);
        if (_data[MonsterData.DATA_HP_MAX]) {
            this.hpMaxA = _data[MonsterData.DATA_HP_MAX][BaseUnitData.DATA_A];
            this.hpMaxB = _data[MonsterData.DATA_HP_MAX][BaseUnitData.DATA_B];
            this.hpMaxC = _data[MonsterData.DATA_HP_MAX][BaseUnitData.DATA_C];
        }
        else {
            this.hpMaxA = _data[MonsterData.DATA_HP_MAX_A];
            this.hpMaxB = _data[MonsterData.DATA_HP_MAX_B];
            this.hpMaxC = _data[MonsterData.DATA_HP_MAX_C];
        }
        if (_data[MonsterData.DATA_EXP_MAX]) {
            this.expMaxA = _data[MonsterData.DATA_EXP_MAX][BaseUnitData.DATA_A];
            this.expMaxB = _data[MonsterData.DATA_EXP_MAX][BaseUnitData.DATA_B];
            this.expMaxC = _data[MonsterData.DATA_EXP_MAX][BaseUnitData.DATA_C];
            this.expMaxD = _data[MonsterData.DATA_EXP_MAX][BaseUnitData.DATA_D];
        }
        this.speedBase = _data[MonsterData.DATA_SPEED_BASE];
        this.charm = _data[MonsterData.DATA_CHARM];
        this.height = _data[MonsterData.DATA_HEIGHT];
        this.width = _data[MonsterData.DATA_WIDTH];
        if (_data[MonsterData.DATA_SPEAK_LIST] instanceof Array) {
            this.speakList = _data[MonsterData.DATA_SPEAK_LIST];
        }
        this.population = _data[MonsterData.DATA_POPULATION];
    }

    getSpeak(_period = 0) {
        let _arr = null;
        if (this.speakList instanceof Array) {
            if (this.speakList.length > _period) {
                if (this.speakList[_period] instanceof String) {
                    return this.speakList[_period];
                }
                if (this.speakList[_period] instanceof Array) {
                    _arr = this.speakList[_period];
                    return _arr[int(Math.random() * _arr.length)];
                }
            }
        }
        return "";
    }

    getSpeakEnter() {
        return this.getSpeak(MonsterData.SPEAK_ENTER);
    }

    getSpeakIdle() {
        return this.getSpeak(MonsterData.SPEAK_IDLE);
    }

    getSpeakInjury() {
        return this.getSpeak(MonsterData.SPEAK_INJURY);
    }

    getSpeakDie() {
        return this.getSpeak(MonsterData.SPEAK_DIE);
    }

    getSpeakInvade() {
        return this.getSpeak(MonsterData.SPEAK_INVADE);
    }

    getSpeakCast() {
        return this.getSpeak(MonsterData.SPEAK_CAST);
    }

    get isBoss() {
        if (this.population >= 100) {
            return true;
        }
        return false;
    }

    get isRandomBoss() {
        if (this.population == 99) {
            return true;
        }
        return false;
    }
}


export class MonsterManager extends BaseManager {
    static onlyExample = null;

    constructor() {
        super();
        MonsterManager.onlyExample = this;
        this.loadData(GlobalData.$_wolfAtt_Obj);
    }

    static getOnlyExample() {
        if (MonsterManager.onlyExample == null) {
            MonsterManager.onlyExample = new MonsterManager();
        }
        return MonsterManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data) {
            _d = _data[k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new MonsterData(_d);
        }
    }

    getBossList(_monsterList) {
        let i = 0;
        let _monsterData = null;
        let _bossList = [];
        if (!(_monsterList instanceof Array)) {
            return _bossList;
        }
        for (i = 0; i < _monsterList.length; i++) {
            _monsterData = this.getData(_monsterList[i]);
            if (_monsterData) {
                if (_monsterData.isBoss) {
                    _bossList.push(_monsterList[i]);
                }
            }
        }
        return _bossList;
    }

    getRandomBossList(_monsterList) {
        let i = 0;
        let _monsterData = null;
        let _bossList = [];
        if (!(_monsterList instanceof Array)) {
            return _bossList;
        }
        for (i = 0; i < _monsterList.length; i++) {
            _monsterData = this.getData(_monsterList[i]);
            if (_monsterData) {
                if (_monsterData.isRandomBoss) {
                    _bossList.push(_monsterList[i]);
                }
            }
        }
        return _bossList;
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}
