import { BaseUnit } from "./BaseUnit.js";
import { GlobalData } from "../../ado/GlobalData.js";
import { GlobalDataGetValue } from "../../ado/GlobalDataGetValue.js";
import { MonsterManager } from "../../command/unit.js";
import { GameMap } from "../map/GameMap.js";
import { GlobalString } from "../../ado/GlobalString.js";

export class Monster extends BaseUnit {
    static MONSTER_SAY_ARRAY = [GlobalDataGetValue.getLanguageStr(1250), GlobalDataGetValue.getLanguageStr(1251), GlobalDataGetValue.getLanguageStr(1252), GlobalDataGetValue.getLanguageStr(1253), GlobalDataGetValue.getLanguageStr(1254), GlobalDataGetValue.getLanguageStr(1255), GlobalDataGetValue.getLanguageStr(1256), GlobalDataGetValue.getLanguageStr(1257), GlobalDataGetValue.getLanguageStr(1258), GlobalDataGetValue.getLanguageStr(1259)];
    static MONSTER = "monster";
    static FRAME_NAME_DEAD = "dead";
    static STATUS_MOVE = "statusMove";
    static RES_AIMING = "aiming";
    static PATH_PATH = "pathPath";
    static PHOTO_WIDTH = 66;
    static PHOTO_HEIGHT = 64;
    static PHOTO_ROUND = 50;
    static PHOTO_SIZE = 800;
    static WEIGHTILY_SIZE = 487500;
    static CARD_RATIO = 2;
    static CARD_WIDTH = 32;
    static CARD_HEIGHT = 40;
    static CARD_ROUND = 10;
    static CARD_SIZE = 400;
    static CARD_ROTATION = -10;
    static ICON_RATIO = 1.5;
    static ICON_WIDTH = 44;
    static ICON_HEIGHT = 44;
    static ICON_ROUND = 20;
    static ICON_SIZE = 400;
    static ICON_ROTATION = -10;
    static PATH_NUM = 5;
    static PATH_RATE = 0.01;
    static RE_FIND_PATH_STEP = 2500;
    index;
    keyId;
    m_level;
    exp;
    hp;
    hpMax;
    hpRate;
    dowerSkills;
    learnSkills;

    constructor(_dataId, _level = 1, _difficulty = 1, _exp = 0, _dowerSkills = null, _learnSkills = null) {
        super();
        if (_dataId == "") {
            _dataId = "dahuil";
        }
        let _index = _dataId.indexOf("|");
        if (_index != -1) {
            this.keyId = _dataId;
            _dataId = _dataId.slice(0, _index);
        }
        this.m_data = MonsterManager.getOnlyExample().getData(_dataId);
        if (this.m_data == null) {
            this.m_data = MonsterManager.getOnlyExample().getData("dahuil");
        }
        this.hpRate = _difficulty;
        this.updateLevelExp(_level, _exp);
        this.updateSkills(_dowerSkills, _learnSkills);
    }

    static newMonster(_dataObj) {
        let _wolf = null;
        if (_dataObj) {
            _wolf = new Monster(_dataObj["wids"], _dataObj["level"], 1, _dataObj["experience"], _dataObj["init_skills"], _dataObj["skills"]);
        }
        return _wolf;
    }

    conflictSkillList(_newSkill) {
        let _conflictList = null;
        let i = 0;
        let j = 0;
        let _kindNameList = [];
        if (_newSkill == null) {
            return _kindNameList;
        }
        let _conflict = GlobalData.$_conflict_skill_kind;
        let _newSkillKindId = _newSkill.data.kindId;
        if (skills[_newSkillKindId]) {
            _kindNameList.push(MonsterSkill.getKindName(_newSkillKindId));
        }
        for (i = 0; i < _conflict.length; i++) {
            _conflictList = _conflict[i];
            if (_conflictList.indexOf(_newSkillKindId) != -1) {
                for (j = 0; j < _conflictList.length; j++) {
                    if (_newSkillKindId != _conflictList[j]) {
                        if (skills[_conflictList[j]]) {
                            _kindNameList.push(MonsterSkill.getKindName(_conflictList[j]));
                        }
                    }
                }
            }
        }
        return _kindNameList;
    }

    getDowerSkillsList() {
        let i = 0;
        let _skill = null;
        let _tampList = null;
        let _skillsList = [];
        if (this.isTame) {
            _tampList = this.dowerSkills;
        }
        else {
            _tampList = this.data.skills;
        }
        for (i = 0; i < _tampList.length; i++) {
            _skill = this.getSkillById(_tampList[i][BaseUnit.SKILL_ID]);
            if (_skill) {
                _skillsList.push(_skill);
            }
        }
        return _skillsList;
    }

    getLearnSkillsList() {
        let i = 0;
        let _skill = null;
        let _skillsList = [];
        for (i = 0; i < this.learnSkills.length; i++) {
            _skill = this.getSkillById(this.learnSkills[i][BaseUnit.SKILL_ID]);
            if (_skill) {
                _skillsList.push(_skill);
            }
        }
        return _skillsList;
    }

    getSkillById(_skillId) {
        let k = undefined;
        let _skill = null;
        for (k in skills) {
            _skill = skills[k];
            if (_skill.data.id == _skillId) {
                return _skill;
            }
        }
        return null;
    }

    updateLevelExp(_level = 0, _exp = 0) {
        this.level = _level;
        this.exp = _exp;
    }

    updateSkills(_dowerSkills = null, _learnSkills = null) {
        this.dowerSkills = _dowerSkills;
        this.learnSkills = _learnSkills;
        if (this.isTame) {
            initSkills();
        }
    }

    getAllSkills(_dowerSkills = null, _learnSkills = null) {
        let i = 0;
        let _allSkills = [];
        if (!_dowerSkills) {
            _dowerSkills = this.dowerSkills;
        }
        if (!_learnSkills) {
            _learnSkills = this.learnSkills;
        }
        if (this.isTame) {
            for (i = 0; i < _dowerSkills.length; i++) {
                _allSkills.push(_dowerSkills[i]);
            }
            for (i = 0; i < _learnSkills.length; i++) {
                _allSkills.push(_learnSkills[i]);
            }
        } else {
            _allSkills = this.data.skills;
        }
        return _allSkills;
    }

    get allSkillsScore() {
        let i = 0;
        let _allSkillsScore = 1;
        let _allSkills = this.getAllSkills();
        for (i = 0; i < _allSkills.length; i++) {
            _allSkillsScore *= this.getSkillScore(_allSkills[i][SKILL_ID], _allSkills[i][SKILL_LEVEL]);
        }
        return _allSkillsScore;
    }

    getSkillScore(_skillId, _skillLevel) {
        let _grade = null;
        let _powerObj = GlobalData.$_skill_grade_score;
        let _index = _skillId.indexOf("_");
        if (_skillId.indexOf("_") == -1) {
            return 1;
        }
        _grade = _skillId.slice(_index + 1, _skillId.length);
        if (_powerObj[_grade]) {
            if (_powerObj[_grade][String(_skillLevel)]) {
                return _powerObj[_grade][String(_skillLevel)];
            }
        }
        return 1;
    }

    get levelMax() {
        if (this.isTame) {
            return GlobalData.$_camp_wolf_lv_max;
        }
        return Number.MAX_SAFE_INTEGER;
    }

    get expMax() {
        let _level = this.m_level + 1;
        return Math.round(this.monsterData.expMaxA + this.monsterData.expMaxB * _level + this.monsterData.expMaxC * _level * _level + this.monsterData.expMaxD * _level * _level * _level);
    }

    get level() {
        return this.m_level;
    }

    set level(_level) {
        this.m_level = Math.max(Math.min(_level, this.levelMax), 0);
        if (GameMap.currentMap && GameMap.currentMap) {
            this.hpMax = parseInt((this.monsterData.hpMaxA + this.monsterData.hpMaxB * this.m_level + this.monsterData.hpMaxC * this.m_level * this.m_level) * this.hpRate);
        }
        if (this.hpMax <= 1) {
            this.hpMax = 1;
        }
    }

    refreshLevel() {
        this.hpMax = parseInt((this.monsterData.hpMaxA + this.monsterData.hpMaxB * this.m_level + this.monsterData.hpMaxC * this.m_level * this.m_level) * this.hpRate * GameMap.currentMap.unkennelSoloDifficulty);
        if (this.hpMax <= 1) {
            this.hpMax = 1;
        }
    }

    get monsterData() {
        return this.m_data;
    }

    get power() {
        let _paramList = GlobalData.$_wolf_worth_factor;
        let _hpMax = this.hpMax;
        let _speed = this.monsterData.speedBase;
        let _skillPower = this.allSkillsScore;
        return Math.round(_hpMax * _speed * _skillPower * _paramList[2]);
    }

    initMonsterSkills() {
        if (!this.isTame) {
            this.initSkills();
        }
    }

    initMonster() {
        this.initMonsterSkills();
        this.initStatuses();
    }

    get skillInfo() {
        let k = undefined;
        let i = 0;
        let _skill = null;
        let _info = null;
        let _skillInfo = "";
        if (this.skills == null) {
            return _skillInfo;
        }
        let _skillList = [];
        for (k in this.skills) {
            _skillList.push(this.skills[k]);
        }
        _skillList.sort((a, b) => a[GlobalString.DATA_KEY_INDEX] - b[GlobalString.DATA_KEY_INDEX]);
        for (i = 0; i < _skillList.length; i++) {
            _skill = _skillList[i];
            _info = _skill.skillInfo;
            console.log(_info, _skill.skillTag1,  _skill.skillTag2,  _skill.skillTag3, _skill.level)
            if (_info != "") {
                _skillInfo += _info;
            }
            //console.log(_skillInfo)
        }
        //console.log(_skillInfo, _skillInfo.slice(0, _skillInfo.length - 1))
        /*if (_skillInfo.length > 0) {
            _skillInfo = _skillInfo.slice(0, _skillInfo.length - 1);
        }*/
        //console.log(_skillInfo)
        return _skillInfo;
    }

}