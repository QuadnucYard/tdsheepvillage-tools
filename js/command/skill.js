import {BaseData,BaseDisplayData} from "./BaseData.js"
import { BaseManager } from "./BaseData.js";
import { GlobalData } from "../ado/GlobalData.js";
import { BaseSkill } from "../module/skill.js";


export class BaseSkillData extends BaseDisplayData {
    static TYPE_TOWER_SKILL = "typeTowerSkill";
    static TYPE_MONSTER_SKILL = "typeMonsterSkill";
    static DATA_PARAMETER = "params";
    static DATA_LEVELS = "levels";
    parameter;
    levels;

    constructor(_data = null) {
        super(_data);
        this.parameter = _data[BaseSkillData.DATA_PARAMETER];
        this.levels = _data[BaseSkillData.DATA_LEVELS];
    }

    getLevelParam(_level, _index) {
        if (this.parameter != null) {
            return this.parameter[_index];
        }
        if (this.levels != null) {
            _level = Math.min(Math.max(0, _level - 1), this.levels.length - 1);
            return this.levels[_level][_index];
        }
        return null;
    }

    hasLevel() {
        if (this.parameter == null) {
            return true;
        }
        return false;
    }
}

export class TowerSkillData extends BaseSkillData {
    static KIND_AURA = "Aura";
    static KIND_CHANGE_BULLET = "Bultype";
    static KIND_CHANGE_DAMAGE = "ChangeDam";
    static KIND_CHANGE_RATE = "ChangeRate";
    static KIND_CHANGE_RANGE = "ChangeRange";
    static KIND_FIELD_ATTACK = "ALLAP";
    static KIND_DIVIDED_ATTACK = "DivAP";
    static KIND_SCATTER_ATTACK = "ScaAP";
    static KIND_COMBO_ATTACK = "ComAP";
    static KIND_GUIDED_BULLET = "GuidedBul";
    static KIND_ATTACK_RATE = "AttackRate";
    static KIND_AOE_ATTACK = "AoeAP";
    static KIND_THROUGHOUT_ATTACK = "ThoAP";
    static KIND_BOUNCE_ATTACK = "BouAP";
    static KIND_FLOAT_DAMAGE = "FloatDam";
    static KIND_CRIT = "Crit";
    static KIND_REDUCED_DEFENSE = "RedDef";
    static KIND_POISON = "Poison";
    static KIND_SLOW = "Slow";
    static KIND_BURN_COLD = "BC";
    static KIND_BEAT_BACK = "Beat";
    static KIND_SILENCE = "Silence";
    static KIND_VERTIGO = "Vertigo";
    static KIND_INTIMIDATE = "Intimidate";
    static KIND_CUSS = "Cuss";
    static KIND_BURN = "Burn";
    static KIND_COLD = "Cold";

    constructor(_data) {
        super(_data);
        _data[BaseData.DATA_TYPE_ID] = BaseSkillData.TYPE_TOWER_SKILL;
    }
}


export class MonsterSkillData extends BaseSkillData {
    static EVENT_RED = 1;
    static EVENT_YELLOW = 2;
    static EVENT_GREEN = 3;
    static EVENT_FULL = 4;
    static EVENT_INTIMIDATE = 20;
    static EVENT_VERTIGO = 21;
    static EVENT_SILENCE = 22;
    static EVENT_SLOW = 23;
    static EVENT_REDUCED_DEFENSE = 24;
    static EVENT_POISON = 25;
    static EVENT_BURN = 26;
    static EVENT_COLD = 27;
    static EVENT_HIT = 40;
    static EVENT_CRIT = 41;
    static EVENT_BEAT_BACK = 42;
    static EVENT_FRIENT_DIE = 43;
    static EVENT_DIE = 44;
    static KIND_FLY = "fly";
    static KIND_AIRBORNE = "airborne";
    static KIND_ISOLATION = "isolation";
    static KIND_RELIVE = "revive";
    static KIND_SUICIDE = "burst";
    static KIND_REINCARNATE = "reborn";
    static KIND_SLOWF = "slowf";
    static KIND_RESIST_FIRE = "resistFire";
    static KIND_RESIST_FROST = "resistFrost";
    static KIND_RESIST_POISON = "resistPoison";
    static KIND_RESIST_SLOW = "resistSlow";
    static KIND_RESIST_BEAT = "resistBeat";
    static KIND_RESIST_SILENCE = "resistSilence";
    static KIND_RESIST_VERTIGO = "resistVertigo";
    static KIND_RESIST_CRIT = "resistCrit";
    static KIND_RESIST_LIGHT = "resistLight";
    static KIND_RESIST_INTIMIDATE = "resistIntimidate";
    static KIND_WEAK_FIRE = "weakFire";
    static KIND_WEAK_FROST = "weakFrost";
    static KIND_WEAK_POISON = "weakPoison";
    static KIND_WEAK_SLOW = "weakSlow";
    static KIND_WEAK_BEAT = "weakBeat";
    static KIND_WEAK_SILENCE = "weakSilence";
    static KIND_WEAK_VERTIGO = "weakVertigo";
    static KIND_WEAK_CRIT = "weakCrit";
    static KIND_WEAK_LIGHT = "weakLight";
    static KIND_WEAK_INTIMIDATE = "weakIntimidate";
    static KIND_RESIST_STRSMOOTH = "strsmooth";
    static KIND_RUN = "sprint";
    static KIND_MIRROR = "divide";
    static KIND_SUMMON = "summon";
    static KIND_CLOUD = "cloud";
    static KIND_CURE = "massTreatment";
    static KIND_BLINK = "blink";
    static KIND_HIDE = "invisible";
    static KIND_SHIELD = "shield";
    static KIND_SNEER = "taunt";
    static KIND_TRANSFORM = "morph";
    static KIND_LINKS = "links";

    constructor(_data) {
        super(_data);
        _data[BaseData.DATA_TYPE_ID] = BaseSkillData.TYPE_MONSTER_SKILL;
    }

    static get allMonsterSkill() {
        return [MonsterSkillData.KIND_FLY, MonsterSkillData.KIND_AIRBORNE, MonsterSkillData.KIND_ISOLATION, MonsterSkillData.KIND_RELIVE, MonsterSkillData.KIND_SUICIDE, MonsterSkillData.KIND_REINCARNATE, MonsterSkillData.KIND_RESIST_FIRE, MonsterSkillData.KIND_RESIST_FROST, MonsterSkillData.KIND_RESIST_POISON, MonsterSkillData.KIND_RESIST_BEAT, MonsterSkillData.KIND_RESIST_SILENCE, MonsterSkillData.KIND_RESIST_VERTIGO, MonsterSkillData.KIND_RESIST_CRIT, MonsterSkillData.KIND_RESIST_LIGHT, MonsterSkillData.KIND_RESIST_STRSMOOTH, MonsterSkillData.KIND_SLOWF, MonsterSkillData.KIND_WEAK_FIRE, MonsterSkillData.KIND_WEAK_FROST, MonsterSkillData.KIND_WEAK_POISON, MonsterSkillData.KIND_WEAK_BEAT, MonsterSkillData.KIND_WEAK_SILENCE, MonsterSkillData.KIND_WEAK_VERTIGO, MonsterSkillData.KIND_WEAK_CRIT, MonsterSkillData.KIND_WEAK_LIGHT, MonsterSkillData.KIND_RUN, MonsterSkillData.KIND_MIRROR, MonsterSkillData.KIND_SUMMON, MonsterSkillData.KIND_CLOUD, MonsterSkillData.KIND_CURE, MonsterSkillData.KIND_BLINK, MonsterSkillData.KIND_HIDE, MonsterSkillData.KIND_SHIELD, MonsterSkillData.KIND_SNEER, MonsterSkillData.KIND_TRANSFORM, MonsterSkillData.KIND_LINKS];
    }
}


export class SkillManager extends BaseManager {
    static onlyExample = null;
    static TOWER_SKILL = "towerSkill";
    static MONSTER_SKILL = "monsterSkill";
    static TRAP_SKILL = "trapSkill";

    constructor() {
        super();
        SkillManager.onlyExample = this;
        this.loadData(GlobalData.$_skillAtt_Obj);
    }

    static getOnlyExample() {
        if (SkillManager.onlyExample == null) {
            SkillManager.onlyExample = new SkillManager();
        }
        return SkillManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data[SkillManager.TOWER_SKILL]) {
            _d = _data[SkillManager.TOWER_SKILL][k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new TowerSkillData(_d);
        }
        for (k in _data[SkillManager.MONSTER_SKILL]) {
            _d = _data[SkillManager.MONSTER_SKILL][k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new MonsterSkillData(_d);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}

export class SkillsPackageData extends BaseData {
    static DATA_SKILLS_LIST = "skills";
    skillsList;

    constructor(_data) {
        super(_data);
        if (_data[SkillsPackageData.DATA_SKILLS_LIST] instanceof Array) {
            this.skillsList = _data[SkillsPackageData.DATA_SKILLS_LIST];
        } else if (_data[SkillsPackageData.DATA_SKILLS_LIST] instanceof String) {
            this.skillsList = [_data[SkillsPackageData.DATA_SKILLS_LIST]];
        }
    }
}

export class SkillsPackageManager extends BaseManager {
    static onlyExample = null;

    constructor() {
        super();
        SkillsPackageManager.onlyExample = this;
        this.loadData(GlobalData.$_skillPackage_Obj);
    }

    static getOnlyExample() {
        if (SkillsPackageManager.onlyExample == null) {
            SkillsPackageManager.onlyExample = new SkillsPackageManager();
        }
        return SkillsPackageManager.onlyExample;
    }

    loadData(_data) {
        let _d = undefined;
        let k = undefined;
        for (k in _data) {
            _d = _data[k];
            _d[BaseData.DATA_ID] = k;
            this.m_manager[k] = new SkillsPackageData(_data[k]);
        }
    }

    getData(_id) {
        return this.getDataById(_id);
    }
}


//export {BaseSkillData, TowerSkillData, MonsterSkillData, SkillsPackageData, SkillManager, SkillsPackageManager} 