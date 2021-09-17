import { BaseDisplayModule } from "../BaseModule.js";
import { MonsterSkill } from "../skill.js";
import { TowerSkill } from "../skill.js";

export class BaseUnit extends BaseDisplayModule {
    static SKILL_ID = "skid";
    static SKILL_LEVEL = "lev";
    static FRAME_NAME_DOWN = "d";
    static FRAME_NAME_LEFT = "l";
    static FRAME_NAME_UP = "u";
    static FRAME_NAME_RIGHT = "r";
    static FRAME_DOWN = 1;
    static FRAME_LEFT = 2;
    static FRAME_UP = 3;
    static FRAME_RIGHT = 4;
    static SHADOW = "shadow";
    static STATUS_RATE = 200;
    static STATUS_TIME = BaseUnit.STATUS_RATE / 1000;
    static AOE_SILENCE_RANGE = 1000;
    static AOE_SILENCE_TIME = 2;
    static INFO_HEIGHT = 20;
    DEPTH_X = 1.0E-4;
    DEPTH_Y = 10000;
    id;
    subPosX;
    subPosY;
    height;
    skills;
    statuses;
    effects;
    m_buff;
    m_shadow;

    constructor() {
        super();
    }

    init() {
        this.initSkills();
        this.initStatuses();
    }

    initSkills() {
        let _skill = null;
        let k = undefined;
        let _skills = null;
        let _sp = null;
        this.skills = new Object();
        if (this.constructor.name == "Monster") {
            _skills = this.getAllSkills();
        }
        if (_skills == null) {
            _skills = this.data.skills;
        }
        if (_skills != null) {
            if (this.constructor.name == "Monster") {
                for (let k = 0; k < _skills.length; k++) {
                    if (_skills instanceof Array) {
                        _skill = new MonsterSkill(_skills[k][BaseUnit.SKILL_ID], _skills[k][BaseUnit.SKILL_LEVEL], this).getSubClasses();
                    }
                    else {
                        _skill = new MonsterSkill(k, _skills[k], this).getSubClasses();
                    }
                    this.skills[_skill.data.kindId] = _skill;
                }
            }
        } else if (this.data.skillPackageId != "") {
            _sp = new SkillsPackage(this.data.skillPackageId, this.data.skillPackageLevel);
            if (_sp != null && _sp.skillsPackageData != null) {
                for (k of _sp.skillsPackageData.skillsList) {
                    if (this.constructor.name == "Tower") {
                        _skill = new TowerSkill(k, _sp.level, this).getSubClasses();
                    }
                    else if (this.constructor.name == "Monster") {
                        _skill = new MonsterSkill(k, _sp.level, this).getSubClasses();
                    }
                    this.skills[_skill.data.kindId] = _skill;
                }
            }
        }
    }

    initStatuses() {
        this.statuses = new Object();
        this.effects = new Object();
    }

    get data() {
        return this.m_data;
    }

}
