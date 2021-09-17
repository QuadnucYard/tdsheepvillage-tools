import { BaseDisplayData } from "./BaseData.js";
import { BaseManager } from "./BaseData.js";
import { GlobalData } from "../ado/GlobalData.js";
import { BaseData } from "./BaseData.js";

export class GameMapData extends BaseDisplayData {
    static DEFAULT_SCORE_MAX = 100;
    static DEFAULT_POPULATION_MAX = 10;
    static RULE_MULTICAST = 1;
    static DATA_SCORE_MAX = "pass_score";
    static DATA_POPULATION_MAX = "pop_max";
    static DATA_HARD_A = "yield_val";
    static DATA_HARD_B = "hard_ness";
    static DATA_PASS_BY = "passBy";
    static DATA_UNKENNEL_RATE = "interval";
    static DATA_UNKENNEL_RULE = "interval_rule";
    static DATA_BOSS_LIST = "boss";
    static DATA_MONSTER_LIST = "wolf_proportion";
    static DATA_TELEPORT_RULE = "teleport_rule";
    static DATA_DEBUG = "debug";

    scoreMax;
    populationMax;
    hardA;
    hardB;
    passBy;
    unkennelDelay;
    unkennelRule;
    bossList;
    monsterList;
    teleportRule;

    constructor(_data) {
        super(_data);

        this.scoreMax = _data[GameMapData.DATA_SCORE_MAX] ? _data[GameMapData.DATA_SCORE_MAX] : GameMapData.DEFAULT_SCORE_MAX;
        this.populationMax = _data[GameMapData.DATA_POPULATION_MAX] ? _data[GameMapData.DATA_POPULATION_MAX] : GameMapData.DEFAULT_POPULATION_MAX;
        this.hardA = _data[GameMapData.DATA_HARD_A];
        this.hardB = _data[GameMapData.DATA_HARD_B];
        this.passBy = _data[GameMapData.DATA_PASS_BY];
        this.unkennelDelay = _data[GameMapData.DATA_UNKENNEL_RATE];
        this.unkennelRule = _data[GameMapData.DATA_UNKENNEL_RULE];
        this.bossList = _data[GameMapData.DATA_BOSS_LIST];
        this.monsterList = _data[GameMapData.DATA_MONSTER_LIST] ? _data[GameMapData.DATA_MONSTER_LIST].map(t => t[1]) : [];
        this.teleportRule = _data[GameMapData.DATA_TELEPORT_RULE];

    }

}


export class GameMapManager extends BaseManager {
    static DATA_COUNT = 6;
    static onlyExample = null;

    constructor() {
        super();
        GameMapManager.onlyExample = this;
        this.loadData(GlobalData.$_map_Obj);
    }

    static getOnlyExample() {
        if (GameMapManager.onlyExample == null) {
            GameMapManager.onlyExample = new GameMapManager();
        }
        return GameMapManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data) {
            _d = _data[k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new GameMapData(_data[k]);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}
