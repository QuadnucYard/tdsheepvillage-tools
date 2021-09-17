import { BaseModule } from "./BaseModule.js";
import { GlobalDataGetValue } from "../ado/GlobalDataGetValue.js"
import { SkillsPackageManager } from "../command/skill.js";
import { SkillManager } from "../command/skill.js";
import { BaseData } from "../command/BaseData.js";
import { BaseSkillData } from "../command/skill.js";
import { TowerSkillData } from "../command/skill.js";
import { Position } from "../utils/Position.js";
import { EffectData } from "../command/effect.js";
import { MonsterSkillData } from "../command/skill.js";
import { MonsterManager } from "../command/unit.js";

export class BaseSkill extends BaseModule {
    level;
    index;
    m_skillInfo;
    m_nextLevelSkillInfo;
    skillTag1;
    skillTag2;
    skillTag3;
    nextLevelSkillTag1;
    nextLevelSkillTag2;
    nextLevelSkillTag3;
    m_updateFunction;

    constructor(_id, _level, _isTest = false) {
        super();
        if (_isTest) {
            this.m_data = new MonsterData({
                "id": _id + "_0",
                "kindId": _id
            });
            return;
        }
        this.m_data = SkillManager.getOnlyExample().getData(_id);
        this.level = _level;
    }

    get data() {
        return this.m_data;
    }

    get skillInfo() {
        if (this.m_updateFunction != null) {
            this.m_updateFunction();
        }
        if (!this.m_skillInfo) {
            this.m_skillInfo = "";
        }
        return this.m_skillInfo;
    }

    get nextLevelSkillInfo() {
        if (!this.m_nextLevelSkillInfo) {
            this.m_nextLevelSkillInfo = "";
        }
        return this.m_nextLevelSkillInfo;
    }
}


export class TowerSkill extends BaseSkill {
    tower;

    constructor(_id, _level, _tower) {
        super(_id, _level);
        this.tower = _tower;
        this.m_data[BaseData.DATA_TYPE_ID] = BaseSkillData.TYPE_TOWER_SKILL;
    }

    shouldTransferBullet() {
        switch (this.data.kindId) {
            case TowerSkillData.KIND_GUIDED_BULLET:
            case TowerSkillData.KIND_ATTACK_RATE:
            case TowerSkillData.KIND_AOE_ATTACK:
            case TowerSkillData.KIND_THROUGHOUT_ATTACK:
            case TowerSkillData.KIND_BOUNCE_ATTACK:
            case TowerSkillData.KIND_FLOAT_DAMAGE:
            case TowerSkillData.KIND_CRIT:
            case TowerSkillData.KIND_REDUCED_DEFENSE:
            case TowerSkillData.KIND_POISON:
            case TowerSkillData.KIND_SLOW:
            case TowerSkillData.KIND_BURN_COLD:
            case TowerSkillData.KIND_BEAT_BACK:
            case TowerSkillData.KIND_SILENCE:
            case TowerSkillData.KIND_VERTIGO:
            case TowerSkillData.KIND_INTIMIDATE:
            case TowerSkillData.KIND_CUSS:
                return true;
            default:
                return false;
        }
    }

    getSubClasses() {
        switch (this.data.kindId) {
            case TowerSkillData.KIND_AURA:
                return new AuraSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CHANGE_BULLET:
                return new ChangeBulletSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CHANGE_DAMAGE:
                return new ChangeDamageSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CHANGE_RATE:
                return new ChangeRateSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CHANGE_RANGE:
                return new ChangeRangeSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_FIELD_ATTACK:
                return new LightSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_DIVIDED_ATTACK:
                return new DividedAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_SCATTER_ATTACK:
                return new ScatterAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_COMBO_ATTACK:
                return new ComboAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_GUIDED_BULLET:
                return new GuidedBulletSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_ATTACK_RATE:
                return new AttackRateSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_AOE_ATTACK:
                return new AoeAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_THROUGHOUT_ATTACK:
                return new ThroughoutAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_BOUNCE_ATTACK:
                return new BounceAttackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_FLOAT_DAMAGE:
                return new FloatDamageSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CRIT:
                return new CritSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_REDUCED_DEFENSE:
                return new ReducedDefenseSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_POISON:
                return new PoisonSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_SLOW:
                return new SlowSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_BURN_COLD:
                return new BurnColdSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_BEAT_BACK:
                return new BeatBackSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_SILENCE:
                return new SilenceSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_VERTIGO:
                return new VertigoSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_INTIMIDATE:
                return new IntimidateSkill(this.data.id, this.level, this.tower);
            case TowerSkillData.KIND_CUSS:
                return new CussSkill(this.data.id, this.level, this.tower);
            default:
                return this;
        }
    }
}


export class AoeAttackSkill extends TowerSkill {
    static DEFAULT_RADII = 0;
    static DEFAULT_NEXT_EFFECT_RATE = 0;
    static MAX_NEXT_EFFECT_RATE = 1;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1050;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3001, this.radiiInfo, Position.toPercentage(this.nextEffectRate));
    }

    get radii() {
        return this.data.getLevelParam(this.level, 0) + AoeAttackSkill.DEFAULT_RADII;
    }

    get nextEffectRate() {
        return Math.min(this.data.getLevelParam(this.level, 1) + AoeAttackSkill.DEFAULT_NEXT_EFFECT_RATE, AoeAttackSkill.MAX_NEXT_EFFECT_RATE);
    }

    get radiiInfo() {
        let _info = null;
        let _radii = this.radii;
        if (_radii <= 400) {
            _info = GlobalDataGetValue.getLanguageStr(3510);
        }
        else if (_radii <= 550) {
            _info = GlobalDataGetValue.getLanguageStr(3511);
        }
        else if (_radii <= 700) {
            _info = GlobalDataGetValue.getLanguageStr(3512);
        }
        else if (_radii <= 950) {
            _info = GlobalDataGetValue.getLanguageStr(3513);
        } else {
            _info = GlobalDataGetValue.getLanguageStr(3514);
        }
        return _info;
    }
}


export class AttackRateSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1040;
        let _floorRate = this.floorRate;
        let _airRate = this.airRate;
        if (_floorRate <= 0 && _airRate > 0) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3029);
        }
        else if (_airRate <= 0 && _floorRate > 0) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3028);
        }
        else if (_floorRate != 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3030, Position.toPercentage(_floorRate));
        }
        else if (_airRate != 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3031, Position.toPercentage(_airRate));
        }
    }

    get floorRate() {
        return this.data.getLevelParam(this.level, 0);
    }

    get airRate() {
        return this.data.getLevelParam(this.level, 1);
    }
}


export class AuraSkill extends TowerSkill {
    static DEFAULT_RADII = 1000;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1500;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3002);
    }

    get spId() {
        return this.data.getLevelParam(this.level, 0);
    }

    get spLevel() {
        return this.data.getLevelParam(this.level, 1);
    }

    get radii() {
        return this.data.getLevelParam(this.level, 2) * this.level + AuraSkill.DEFAULT_RADII;
    }
}


export class BeatBackSkill extends TowerSkill {
    static SHIFT_TIME = 0.2;
    static DEFAULT_CHANCES = 0;
    static DEFAULT_BEAT_BACK_DISTANCE = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1060;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3003, Position.toPercentage(this.chances), this.distanceInfo);
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + BeatBackSkill.DEFAULT_CHANCES, 1), 0);
    }

    get beatBackDistance() {
        return this.data.getLevelParam(this.level, 1) + BeatBackSkill.DEFAULT_BEAT_BACK_DISTANCE;
    }

    get distanceInfo() {
        let _info = null;
        let _distance = this.beatBackDistance;
        if (_distance < 100) {
            _info = GlobalDataGetValue.getLanguageStr(3505);
        }
        else if (_distance < 250) {
            _info = GlobalDataGetValue.getLanguageStr(3506);
        }
        else if (_distance < 450) {
            _info = GlobalDataGetValue.getLanguageStr(3507);
        }
        else if (_distance < 700) {
            _info = GlobalDataGetValue.getLanguageStr(3508);
        } else {
            _info = GlobalDataGetValue.getLanguageStr(3509);
        }
        return _info;
    }
}


export class BounceAttackSkill extends TowerSkill {
    static DEFAULT_BOUNCE_NUM = 0.5;
    static DEFAULT_NEXT_EFFECT_RATE = 0.35;
    static MAX_NEXT_EFFECT_RATE = 1;
    static MAX_DISTANCE = 3000;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1070;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3004, this.bounceNum, Position.toPercentage(1 - this.nextEffectRate), this.attackInfo);
        };
    }

    get bounceNum() {
        return parseInt(this.data.getLevelParam(this.level, 0) * this.level + BounceAttackSkill.DEFAULT_BOUNCE_NUM);
    }

    get nextEffectRate() {
        return Math.min(this.data.getLevelParam(this.level, 1) * this.level + BounceAttackSkill.DEFAULT_NEXT_EFFECT_RATE, BounceAttackSkill.MAX_NEXT_EFFECT_RATE);
    }

    get attackInfo() {
        let _info = null;
        if (this.tower.newBullet().bulletData.hitEffectId == EffectData.KIND_LIGHTNING) {
            _info = GlobalDataGetValue.getLanguageStr(3516);
        } else {
            _info = GlobalDataGetValue.getLanguageStr(3515);
        }
        return _info;
    }
}


export class BurnColdSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1080;
        this.m_updateFunction = function () {
            let _value = this.burnColdValue;
            if (_value > 0) {
                this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3005, this.burn);
            } else {
                this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3006, Position.toPercentage(this.cold));
            }
        };
    }

    get burnColdValue() {
        let _buffEffect = 1;
        if (this.tower) {
            _buffEffect = this.tower.buffEffect();
        }
        let _value = Math.pow(this.data.getLevelParam(this.level, 0) * this.level * _buffEffect, 2);
        if (this.data.getLevelParam(this.level, 0) < 0) {
            _value = -_value;
        }
        return parseInt(_value);
    }

    get burn() {
        return parseInt(Math.sqrt(this.burnColdValue));
    }

    get cold() {
        let _buffEffect = 1;
        if (this.tower) {
            _buffEffect = this.tower.buffEffect();
        }
        let _value = Math.pow(this.data.getLevelParam(this.level, 0) * this.level * _buffEffect, 2);
        return Math.pow(_value, 0.25) * 0.03;
    }
}


export class ChangeBulletSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
    }

    get bulletId() {
        return this.data.getLevelParam(this.level, 0);
    }
}


export class ChangeDamageSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1000;
        if (this.damageRate > 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3007, Position.toPercentage(this.damageRate - 1));
        }
        else if (this.damageRate < 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3008, Position.toPercentage(1 - this.damageRate));
        }
    }

    get damageAdd() {
        return this.data.getLevelParam(this.level, 0) * this.level;
    }

    get damageRate() {
        return this.data.getLevelParam(this.level, 1) * this.level + 1;
    }

    get damageA() {
        return this.data.getLevelParam(this.level, 2);
    }

    get damageB() {
        return this.data.getLevelParam(this.level, 3);
    }

    get damageC() {
        return this.data.getLevelParam(this.level, 4);
    }

    isChangeBase() {
        if (this.damageA == 0 && this.damageB == 0 && this.damageC == 0) {
            return false;
        }
        return true;
    }
}


export class ChangeRangeSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1010;
        if (this.rangeRate > 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3009, Position.toPercentage(this.rangeRate - 1));
        } else {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3010, Position.toPercentage(1 - this.rangeRate));
        }
        if (this.rangeMin > 0) {
            this.m_skillInfo += GlobalDataGetValue.getLanguageStr(3027);
        }
    }

    get rangeAdd() {
        return this.data.getLevelParam(this.level, 0) * this.level;
    }

    get rangeRate() {
        return this.data.getLevelParam(this.level, 1) * this.level + 1;
    }

    get range() {
        return this.data.getLevelParam(this.level, 2);
    }

    get rangeMin() {
        return this.data.getLevelParam(this.level, 3);
    }

    isChangeBase() {
        if (this.range == 0) {
            return false;
        }
        return true;
    }
}


export class ChangeRateSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1020;
        if (this.rateRate > 1) {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3011, Position.toPercentage(this.rateRate - 1));
        } else {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3012, Position.toPercentage(1 - this.rateRate));
        }
    }

    get rateRate() {
        return this.data.getLevelParam(this.level, 0) + this.data.getLevelParam(this.level, 1) * this.level + 1;
    }

    get rate() {
        return this.data.getLevelParam(this.level, 2);
    }

    isChangeBase() {
        if (this.rate == 0) {
            return false;
        }
        return true;
    }
}


export class ComboAttackSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0;
    static DEFAULT_EXTRA_BULLET = 0.5;
    static DEFAULT_RATE = 0.08;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1090;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3013, Position.toPercentage(this.chances), this.extraBullet + 1);
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) + ComboAttackSkill.DEFAULT_CHANCES, 1), 0);
    }

    get extraBullet() {
        return parseInt(this.data.getLevelParam(this.level, 1) * this.level + ComboAttackSkill.DEFAULT_EXTRA_BULLET);
    }
}


export class CritSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0.1;
    static DEFAULT_DAMAGE_EFFECT_RATE = 0.5;
    static DEFAULT_BUFF_EFFECT_RATE = 0.1;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1100;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3014, Position.toPercentage(this.chances), this.damageEffectRate.toFixed(1));
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + CritSkill.DEFAULT_CHANCES, 1), 0);
    }

    get damageEffectRate() {
        return this.data.getLevelParam(this.level, 1) * this.level + CritSkill.DEFAULT_DAMAGE_EFFECT_RATE + 1;
    }

    get buffEffectRate() {
        return this.data.getLevelParam(this.level, 2) * this.level + CritSkill.DEFAULT_BUFF_EFFECT_RATE + 1;
    }
}


export class CussSkill extends TowerSkill {
    static DEFAULT_CUSS_POWER = 0;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1110;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3026, Math.round(this.cussPower), this.duration.toFixed(0));
        };
    }

    get cussPower() {
        return this.data.getLevelParam(this.level, 0) * this.level * this.tower.level + CussSkill.DEFAULT_CUSS_POWER;
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + CussSkill.DEFAULT_DURATION;
    }
}


export class DividedAttackSkill extends TowerSkill {
    static DEFAULT_EXTRA_BULLET = 0.5;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1120;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3015, this.extraBullet + 1);
    }

    get extraBullet() {
        return parseInt(this.data.getLevelParam(this.level, 0) * this.level + DividedAttackSkill.DEFAULT_EXTRA_BULLET);
    }
}


export class FloatDamageSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3017);
    }

    get floatDamageRate() {
        return this.data.getLevelParam(this.level, 0) * this.level;
    }
}


export class GuidedBulletSkill extends TowerSkill {

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.m_skillInfo = "";
    }

    get guideRatio() {
        return this.data.getLevelParam(this.level, 0);
    }

    get bulletSpeedRate() {
        return this.data.getLevelParam(this.level, 1) + 1;
    }

    get bulletAccSpeed() {
        return this.data.getLevelParam(this.level, 2);
    }

    get guideInfo() {
        let _info = null;
        let _guideRatio = this.guideRatio;
        if (_guideRatio < 0.1) {
            _info = GlobalDataGetValue.getLanguageStr(3500);
        }
        else if (_guideRatio < 0.2) {
            _info = GlobalDataGetValue.getLanguageStr(3501);
        }
        else if (_guideRatio < 0.3) {
            _info = GlobalDataGetValue.getLanguageStr(3502);
        }
        else if (_guideRatio < 0.4) {
            _info = GlobalDataGetValue.getLanguageStr(3503);
        } else {
            _info = GlobalDataGetValue.getLanguageStr(3504);
        }
        return _info;
    }
}


export class IntimidateSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0.05;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1140;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3019, Position.toPercentage(this.chances), this.duration.toFixed(1));
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + IntimidateSkill.DEFAULT_CHANCES, 1), 0);
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + IntimidateSkill.DEFAULT_DURATION;
    }
}


export class LightSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0.05;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1130;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3016);
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + LightSkill.DEFAULT_CHANCES, 1), 0);
    }
}


export class PoisonSkill extends TowerSkill {
    static DEFAULT_POISON_RATE = 0;
    static DEFAULT_DURATION = 0;
    m_poisonRate = -1;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1150;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3000, Math.round(this.poisonRate * this.tower.damage()), this.duration.toFixed(0));
        };
    }

    get poisonRate() {
        if (this.m_poisonRate < 0) {
            return this.data.getLevelParam(this.level, 0) * this.level + PoisonSkill.DEFAULT_POISON_RATE;
        }
        return this.m_poisonRate;
    }

    set poisonRate(_p) {
        if (this.m_poisonRate < 0) {
            this.m_poisonRate = _p;
        }
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + PoisonSkill.DEFAULT_DURATION;
    }
}


export class ReducedDefenseSkill extends TowerSkill {
    static DEFAULT_REDUCED_DEFENSE_RATE = 0.1;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1160;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3020, Position.toPercentage(this.reducedDefenseRate), this.duration.toFixed(1));
    }

    get reducedDefenseRate() {
        return this.data.getLevelParam(this.level, 0) * this.level + ReducedDefenseSkill.DEFAULT_REDUCED_DEFENSE_RATE;
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + ReducedDefenseSkill.DEFAULT_DURATION;
    }
}


export class ScatterAttackSkill extends TowerSkill {
    static DEFAULT_EXTRA_BULLET = 0.5;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1170;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3021, this.extraBullet + 1);
    }

    get extraBullet() {
        return parseInt(this.data.getLevelParam(this.level, 0) * this.level + ScatterAttackSkill.DEFAULT_EXTRA_BULLET);
    }
}


export class SilenceSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0.05;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1180;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3022, Position.toPercentage(this.chances), this.duration.toFixed(1));
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + SilenceSkill.DEFAULT_CHANCES, 1), 0);
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + SilenceSkill.DEFAULT_DURATION;
    }
}


export class SlowSkill extends TowerSkill {
    static DEFAULT_SLOW_RATE = 0.1;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1190;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3023, Position.toPercentage(this.slowRate), this.duration.toFixed(1));
    }

    get slowRate() {
        return this.data.getLevelParam(this.level, 0) * this.level + SlowSkill.DEFAULT_SLOW_RATE;
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + SlowSkill.DEFAULT_DURATION;
    }
}


export class ThroughoutAttackSkill extends TowerSkill {
    static DEFAULT_THROUGHOUT_NUM = 0.5;
    static DEFAULT_NEXT_EFFECT_RATE = 0;
    static MAX_NEXT_EFFECT_RATE = 1;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1200;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3024, this.throughoutNum);
    }

    get throughoutNum() {
        return parseInt(this.data.getLevelParam(this.level, 0) * this.level + ThroughoutAttackSkill.DEFAULT_THROUGHOUT_NUM);
    }

    get nextEffectRate() {
        return Math.min(this.data.getLevelParam(this.level, 1) + ThroughoutAttackSkill.DEFAULT_NEXT_EFFECT_RATE, ThroughoutAttackSkill.MAX_NEXT_EFFECT_RATE);
    }
}


export class VertigoSkill extends TowerSkill {
    static DEFAULT_CHANCES = 0;
    static DEFAULT_DURATION = 0;

    constructor(_id, _level, _tower = null) {
        super(_id, _level, _tower);
        this.index = 1210;
        this.m_skillInfo = GlobalDataGetValue.getLanguageStr(3025, Position.toPercentage(this.chances), this.duration.toFixed(1));
    }

    get chances() {
        return Math.max(Math.min(this.data.getLevelParam(this.level, 0) * this.level + VertigoSkill.DEFAULT_CHANCES, 1), 0);
    }

    get duration() {
        return this.data.getLevelParam(this.level, 1) + VertigoSkill.DEFAULT_DURATION;
    }
}


export class MonsterSkill extends BaseSkill {
    static RES_SKILL = "skill_";
    static RES_FG_A = "A";
    static RES_FG_B = "B";
    static RES_FG_C = "C";
    static RES_FG_Z = "Z";
    static RES_FG_X = "X";
    static RES_FG_0 = "0";
    static RES_BG = "bg";
    static PHOTO_WIDTH = 34;
    static PHOTO_HEIGHT = 34;
    static PHOTO_ROUND = 8;
    monster;
    m_levelMax;

    constructor(_id, _level, _monster, _isTest = false) {
        super(_id, _level, _isTest);
        this.monster = _monster;
        this.m_data[BaseData.DATA_TYPE_ID] = BaseSkillData.TYPE_MONSTER_SKILL;
    }

    static getKindName(_kindId) {
        switch (_kindId) {
            case MonsterSkillData.KIND_FLY:
                return GlobalDataGetValue.getLanguageStr(2507);
            case MonsterSkillData.KIND_AIRBORNE:
                return GlobalDataGetValue.getLanguageStr(2510);
            case MonsterSkillData.KIND_RESIST_FIRE:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2710));
            case MonsterSkillData.KIND_RESIST_FROST:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2711));
            case MonsterSkillData.KIND_RESIST_POISON:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2712));
            case MonsterSkillData.KIND_RESIST_SLOW:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2719));
            case MonsterSkillData.KIND_RESIST_BEAT:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2717));
            case MonsterSkillData.KIND_RESIST_SILENCE:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2722));
            case MonsterSkillData.KIND_RESIST_VERTIGO:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2715));
            case MonsterSkillData.KIND_RESIST_CRIT:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2716));
            case MonsterSkillData.KIND_RESIST_LIGHT:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2714));
            case MonsterSkillData.KIND_RESIST_INTIMIDATE:
                return GlobalDataGetValue.getLanguageStr(2515, GlobalDataGetValue.getLanguageStr(2718));
            case MonsterSkillData.KIND_RESIST_STRSMOOTH:
                return GlobalDataGetValue.getLanguageStr(2723);
            case MonsterSkillData.KIND_SLOWF:
                return GlobalDataGetValue.getLanguageStr(2725);
            case MonsterSkillData.KIND_WEAK_FIRE:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2710));
            case MonsterSkillData.KIND_WEAK_FROST:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2711));
            case MonsterSkillData.KIND_WEAK_POISON:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2712));
            case MonsterSkillData.KIND_WEAK_SLOW:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2719));
            case MonsterSkillData.KIND_WEAK_BEAT:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2717));
            case MonsterSkillData.KIND_WEAK_SILENCE:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2722));
            case MonsterSkillData.KIND_WEAK_VERTIGO:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2715));
            case MonsterSkillData.KIND_WEAK_CRIT:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2716));
            case MonsterSkillData.KIND_WEAK_LIGHT:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2714));
            case MonsterSkillData.KIND_WEAK_INTIMIDATE:
                return GlobalDataGetValue.getLanguageStr(2516, GlobalDataGetValue.getLanguageStr(2718));
            case MonsterSkillData.KIND_ISOLATION:
                return GlobalDataGetValue.getLanguageStr(2517);
            case MonsterSkillData.KIND_RUN:
                return GlobalDataGetValue.getLanguageStr(2500);
            case MonsterSkillData.KIND_MIRROR:
                return GlobalDataGetValue.getLanguageStr(2501);
            case MonsterSkillData.KIND_SUMMON:
                return GlobalDataGetValue.getLanguageStr(2502);
            case MonsterSkillData.KIND_CLOUD:
                return GlobalDataGetValue.getLanguageStr(2503);
            case MonsterSkillData.KIND_CURE:
                return GlobalDataGetValue.getLanguageStr(2504);
            case MonsterSkillData.KIND_BLINK:
                return GlobalDataGetValue.getLanguageStr(2505);
            case MonsterSkillData.KIND_HIDE:
                return GlobalDataGetValue.getLanguageStr(2506);
            case MonsterSkillData.KIND_RELIVE:
                return GlobalDataGetValue.getLanguageStr(2508);
            case MonsterSkillData.KIND_SUICIDE:
                return GlobalDataGetValue.getLanguageStr(2509);
            case MonsterSkillData.KIND_SHIELD:
                return GlobalDataGetValue.getLanguageStr(2511);
            case MonsterSkillData.KIND_SNEER:
                return GlobalDataGetValue.getLanguageStr(2512);
            case MonsterSkillData.KIND_REINCARNATE:
                return GlobalDataGetValue.getLanguageStr(2514);
            case MonsterSkillData.KIND_TRANSFORM:
                return GlobalDataGetValue.getLanguageStr(2513);
            case MonsterSkillData.KIND_LINKS:
                return GlobalDataGetValue.getLanguageStr(2727);
            default:
                return "";
        }
    }

    get name() {
        let _hasLevel = this.canLevelUp(1);
        if (_hasLevel) {
            return GlobalDataGetValue.getLanguageStr(2416, this.data.name, this.level);
        }
        return this.data.name;
    }

    get isDebuff() {
        if (this.grade.indexOf(MonsterSkill.RES_FG_X) != -1) {
            return true;
        }
        return false;
    }

    get skillSign() {
        if (!this.isDebuff) {
            return formatHtml(GlobalDataGetValue.getLanguageStr(2421), 16711680, true, 13);
        }
        return formatHtml(GlobalDataGetValue.getLanguageStr(2422), 0, true, 13);
    }

    get isDowerSkill() {
        let i = 0;
        if (this.monster == null) {
            return false;
        }
        for (i = 0; i < this.monster.dowerSkills.length; i++) {
            if (this.monster.dowerSkills[i][TameData.DATA_SKILL_ID] == this.data.id) {
                return true;
            }
        }
        if (this.monster.dowerSkills.indexOf(this) != -1) {
            return true;
        }
        return false;
    }

    get isLearnSkill() {
        let i = 0;
        if (this.monster == null) {
            return false;
        }
        for (i = 0; i < this.monster.learnSkills.length; i++) {
            if (this.monster.learnSkills[i][TameData.DATA_SKILL_ID] == this.data.id) {
                return true;
            }
        }
        return false;
    }

    getConflictStr() {
        let _conflictList = null;
        let i = 0;
        let j = 0;
        let _conflict = GlobalData.$_conflict_skill_kind;
        let _str = "";
        for (i = 0; i < _conflict.length; i++) {
            _conflictList = _conflict[i];
            if (_conflictList.indexOf(this.data.kindId) != -1) {
                for (j = 0; j < _conflictList.length; j++) {
                    if (_conflictList[j] != this.data.kindId) {
                        _str += MonsterSkill.getKindName(_conflictList[j]);
                        _str += GlobalDataGetValue.getLanguageStr(2406);
                    }
                }
            }
        }
        if (_str.length > 0) {
            _str = _str.slice(0, _str.length - 1);
        }
        return _str;
    }

    canLevelUp(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        if (_level < this.levelMax) {
            return true;
        }
        return false;
    }

    get levelMax() {
        let _spendObj = null;
        let _grade = null;
        let i = 0;
        if (this.m_levelMax <= 0) {
            _spendObj = GlobalData.$_skill_lvup_spend;
            _grade = this.grade;
            if (_spendObj[_grade]) {
                for (i = 1; i < 100; i++) {
                    if (!_spendObj[_grade][String(i)]) {
                        break;
                    }
                }
                this.m_levelMax = i;
            } else {
                this.m_levelMax = 1;
            }
        }
        return this.m_levelMax;
    }

    levelUpSpend(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        let _spendObj = GlobalData.$_skill_lvup_spend;
        let _grade = this.grade;
        if (_spendObj[_grade]) {
            if (_spendObj[_grade][String(_level)]) {
                return _spendObj[_grade][String(_level)];
            }
        }
        return null;
    }

    get skillScore() {
        let _powerObj = GlobalData.$_skill_grade_score;
        let _grade = this.grade;
        if (_powerObj[_grade]) {
            if (_powerObj[_grade][String(this.level)]) {
                return _powerObj[_grade][String(this.level)];
            }
        }
        return 1;
    }

    get grade() {
        let _id = this.data.id;
        let _index = _id.indexOf("_");
        if (_index == -1) {
            return MonsterSkill.RES_FG_X;
        }
        return _id.slice(_index + 1, _id.length);
    }

    isEventSkill() {
        switch (this.data.kindId) {
            case MonsterSkillData.KIND_RUN:
                return true;
            default:
                return false;
        }
    }

    getSubClasses() {
        switch (this.data.kindId) {
            case MonsterSkillData.KIND_FLY:
                return new FlySkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_AIRBORNE:
                return new AirborneSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_RESIST_FIRE:
            case MonsterSkillData.KIND_RESIST_FROST:
            case MonsterSkillData.KIND_RESIST_POISON:
            case MonsterSkillData.KIND_RESIST_SLOW:
            case MonsterSkillData.KIND_RESIST_BEAT:
            case MonsterSkillData.KIND_RESIST_SILENCE:
            case MonsterSkillData.KIND_RESIST_VERTIGO:
            case MonsterSkillData.KIND_RESIST_CRIT:
            case MonsterSkillData.KIND_RESIST_LIGHT:
            case MonsterSkillData.KIND_RESIST_INTIMIDATE:
            case MonsterSkillData.KIND_RESIST_STRSMOOTH:
            case MonsterSkillData.KIND_SLOWF:
            case MonsterSkillData.KIND_WEAK_FIRE:
            case MonsterSkillData.KIND_WEAK_FROST:
            case MonsterSkillData.KIND_WEAK_POISON:
            case MonsterSkillData.KIND_WEAK_SLOW:
            case MonsterSkillData.KIND_WEAK_BEAT:
            case MonsterSkillData.KIND_WEAK_SILENCE:
            case MonsterSkillData.KIND_WEAK_VERTIGO:
            case MonsterSkillData.KIND_WEAK_CRIT:
            case MonsterSkillData.KIND_WEAK_LIGHT:
            case MonsterSkillData.KIND_WEAK_INTIMIDATE:
                return new ResistanceSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_ISOLATION:
                return new IsolationSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_RUN:
                return new RunSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_MIRROR:
                return new MirrorSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_SUMMON:
                return new SummonSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_CLOUD:
                return new CloudSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_CURE:
                return new CureSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_BLINK:
                return new BlinkSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_HIDE:
                return new HideSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_RELIVE:
                return new ReliveSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_SUICIDE:
                return new SuicideSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_SHIELD:
                return new ShieldSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_SNEER:
                return new SneerSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_REINCARNATE:
                return new ReincarnateSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_TRANSFORM:
                return new TransformSkill(this.data.id, this.level, this.monster);
            case MonsterSkillData.KIND_LINKS:
                return new LinksSkill(this.data.id, this.level, this.monster);
            default:
                return this;
        }
    }
}


export class MonsterEventSkill extends MonsterSkill {
    m_warmupNum;
    m_cooldownNum;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
    }

    warmup(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    cooldown(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }

    chances(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 2);
    }

    eventType(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 3);
    }

    duration(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 4);
    }

    refreshTag(_hasDuration = false) {
        this.skillTag1 = this.getTagEventType();
        this.nextLevelSkillTag1 = this.getTagEventType(this.level + 1);
        this.skillTag2 = this.getTagCooldown();
        this.nextLevelSkillTag2 = this.getTagCooldown(this.level + 1);
        if (_hasDuration) {
            this.skillTag3 = this.getTagDuration();
            this.nextLevelSkillTag3 = this.getTagDuration(this.level + 1);
        }
    }

    getTagEventType(_level = -1) {
        let i = 0;
        if (_level < 0) {
            _level = this.level;
        }
        let _tag = "";
        let _eventType = this.eventType(_level);
        if (_eventType.length != 4) {
            for (i = 0; i < _eventType.length; i++) {
                if (_eventType[i] == MonsterSkillData.EVENT_RED) {
                    _tag += GlobalDataGetValue.getLanguageStr(2402) + GlobalDataGetValue.getLanguageStr(2406);
                }
                else if (_eventType[i] == MonsterSkillData.EVENT_YELLOW) {
                    _tag += GlobalDataGetValue.getLanguageStr(2403) + GlobalDataGetValue.getLanguageStr(2406);
                }
                else if (_eventType[i] == MonsterSkillData.EVENT_GREEN) {
                    _tag += GlobalDataGetValue.getLanguageStr(2404) + GlobalDataGetValue.getLanguageStr(2406);
                }
                else if (_eventType[i] == MonsterSkillData.EVENT_FULL) {
                    _tag += GlobalDataGetValue.getLanguageStr(2405) + GlobalDataGetValue.getLanguageStr(2406);
                }
            }
            _tag = _tag.slice(0, _tag.length - 1);
            _tag = GlobalDataGetValue.getLanguageStr(2400, _tag);
        }
        return _tag;
    }

    getTagCooldown(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        let _tag = "";
        return _tag + GlobalDataGetValue.getLanguageStr(2401, this.cooldown(_level));
    }

    getTagDuration(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        let _tag = "";
        return _tag + GlobalDataGetValue.getLanguageStr(2407, this.duration(_level));
    }

}


export class AirborneSkill extends MonsterSkill {
    static BALLOON = "balloon";
    static DEFAULT_HEIGHT = 2000;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 95;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2201);
        };
    }

    heightSpeed(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    pathLengthMin(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }

    pathLengthMax(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 2);
    }

    get pathLength() {
        return Tools.getRandom(this.pathLengthMin(), this.pathLengthMax());
    }
}


export class BlinkSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 100;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2303, Position.toGridStr(this.range()));
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2303, Position.toGridStr(this.range(this.level + 1)));
            this.refreshTag();
        };
    }

    range(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }
}


export class CloudSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 110;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2302, this.cloudTime());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2302, this.cloudTime(this.level + 1));
            this.refreshTag(true);
        };
    }

    range(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    cloudTime(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }
}


export class CureSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 140;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2300, Position.toGridStr(this.cureRange()), Position.toPercentage(this.cureRate()));
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2300, Position.toGridStr(this.cureRange(this.level + 1)), Position.toPercentage(this.cureRate(this.level + 1)));
            this.refreshTag();
        };
    }

    cureRange(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    cureRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }
}


export class FlySkill extends MonsterSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 90;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2200);
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2200);
        };
    }

    get flyHeight() {
        return this.data.getLevelParam(this.level, 0);
    }
}


export class HideSkill extends MonsterEventSkill {
    static HIDE_TIME = 1;
    static HIDE_ALPHA = 0.1;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 150;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2305, this.duration());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2305, this.duration(this.level + 1));
            this.refreshTag();
        };
    }
}


export class IsolationSkill extends MonsterSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 500;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2202);
        };
    }
}


export class LinksSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 116;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2728, Position.toGridStr(this.range()), Position.toPercentage(this.shieldRate()), this.duration());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2728, Position.toGridStr(this.range(this.level + 1)), Position.toPercentage(this.shieldRate(this.level + 1)), this.duration(this.level + 1));
            this.refreshTag();
        };
    }

    range(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    shieldRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }
}


export class MirrorSkill extends MonsterEventSkill {
    static DEFAULT_DISTANCE = 750;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 130;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2306, this.mirrorNum(), Position.toPercentage(this.hpRate()), this.duration());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2306, this.mirrorNum(this.level + 1), Position.toPercentage(this.hpRate(this.level + 1)), this.duration(this.level + 1));
            this.refreshTag();
        };
    }

    mirrorNum(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    hpRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }
}


export class ReincarnateSkill extends MonsterSkill {
    static REINCARNATE_TIME = 5;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 85;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2215, this.monsterName());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2215, this.monsterName(this.level + 1));
        };
    }

    monsterIdList(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    monsterName(_level = -1) {
        let i = 0;
        let _list = this.monsterIdList(_level);
        let _str = "";
        for (i = 0; i < _list.length; i++) {
            _str += MonsterManager.getOnlyExample().getData(_list[i]).name;
            _str += GlobalDataGetValue.getLanguageStr(2406);
        }
        _str.slice(0, _str.length - 1);
        return _str;
    }

}


export class ReliveSkill extends MonsterSkill {
    static RELIVE_TIME = 8;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 170;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2213, this.reliveNum(), Position.toPercentage(this.reliveHpRate()));
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2213, this.reliveNum(this.level + 1), Position.toPercentage(this.reliveHpRate(this.level + 1)));
        };
    }

    reliveNum(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    reliveHpRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }
}


export class ResistanceSkill extends MonsterSkill {
    static IMMUNITY = 2701;
    static RESIST_SUPER = 2702;
    static RESIST_HIGH = 2703;
    static RESIST = 2704;
    static FEAR = 2705;
    static FEAR_HIGH = 2706;
    static FEAR_SUPER = 2707;
    maxHP = 0;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 300;
        this.m_updateFunction = function () {
            this.m_skillInfo = this.resistInfo();
            this.m_nextLevelSkillInfo = this.resistInfo(this.level + 1);
        };
    }

    getResist(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    getRange(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }

    getMaxHP(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }

    resistInfo(_level = -1) {
        let _resist = this.getResist(_level);
        let _resistInfo = "";
        let _numInfo = Position.toPercentage(Math.abs(_resist));
        if (_resist == 0) {
            return _resistInfo;
        }
        if (_resist > 0) {
            _resistInfo = GlobalDataGetValue.getLanguageStr(2409);
        } else {
            _resistInfo = GlobalDataGetValue.getLanguageStr(2408);
        }
        if (this.data.kindId == MonsterSkillData.KIND_SLOWF) {
            _resistInfo = Position.toGridStr(this.getRange());
        }
        _resistInfo = GlobalDataGetValue.getLanguageStr(this.resistInfoNumber, _resistInfo, _numInfo);
        if (this.data.kindId == MonsterSkillData.KIND_RESIST_STRSMOOTH) {
            if (this.getMaxHP(_level) > 0) {
                _resistInfo += GlobalDataGetValue.getLanguageStr(2730, this.getMaxHP(_level));
            }
        }
        return _resistInfo;
    }

    get resistInfoNumber() {
        switch (this.data.kindId) {
            case MonsterSkillData.KIND_RESIST_FIRE:
            case MonsterSkillData.KIND_WEAK_FIRE:
                return 2203;
            case MonsterSkillData.KIND_RESIST_FROST:
            case MonsterSkillData.KIND_WEAK_FROST:
                return 2204;
            case MonsterSkillData.KIND_RESIST_POISON:
            case MonsterSkillData.KIND_WEAK_POISON:
                return 2205;
            case MonsterSkillData.KIND_RESIST_SLOW:
            case MonsterSkillData.KIND_WEAK_SLOW:
                return 2206;
            case MonsterSkillData.KIND_RESIST_BEAT:
            case MonsterSkillData.KIND_WEAK_BEAT:
                return 2207;
            case MonsterSkillData.KIND_RESIST_SILENCE:
            case MonsterSkillData.KIND_WEAK_SILENCE:
                return 2208;
            case MonsterSkillData.KIND_RESIST_VERTIGO:
            case MonsterSkillData.KIND_WEAK_VERTIGO:
                return 2209;
            case MonsterSkillData.KIND_RESIST_CRIT:
            case MonsterSkillData.KIND_WEAK_CRIT:
                return 2210;
            case MonsterSkillData.KIND_RESIST_LIGHT:
            case MonsterSkillData.KIND_WEAK_LIGHT:
                return 2211;
            case MonsterSkillData.KIND_RESIST_INTIMIDATE:
            case MonsterSkillData.KIND_WEAK_INTIMIDATE:
                return 2212;
            case MonsterSkillData.KIND_RESIST_STRSMOOTH:
                return 2724;
            case MonsterSkillData.KIND_SLOWF:
                return 2726;
            default:
                return 0;
        }
    }
}


export class RunSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 160;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2304, Position.toPercentage(this.speedRate() - 1), this.duration());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2304, Position.toPercentage(this.speedRate(this.level + 1) - 1), this.duration(this.level + 1));
            this.refreshTag();
        };
    }

    speedRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5) + 1;
    }
}


export class ShieldSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 105;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2308, Position.toPercentage(this.shieldRate()), this.shieldTime());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2308, Position.toPercentage(this.shieldRate(this.level + 1)), this.shieldTime(this.level + 1));
            this.refreshTag(true);
        };
    }

    range(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    shieldTime(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }

    shieldRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 7);
    }
}


export class SneerSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 106;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2309, Position.toGridStr(this.range()), Position.toPercentage(this.shieldRate()), this.duration());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2309, Position.toGridStr(this.range(this.level + 1)), Position.toPercentage(this.shieldRate(this.level + 1)), this.duration(this.level + 1));
            this.refreshTag();
        };
    }

    range(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    shieldRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }
}


export class SuicideSkill extends MonsterSkill {
    static isEveryTime = true;
    static SUICIDE_TIME = 0.5;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 185;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2214, Position.toGridStr(this.cloudRange()), this.cloudTime());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2214, Position.toGridStr(this.cloudRange(this.level + 1)), this.cloudTime(this.level + 1));
        };
    }

    cloudRange(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 0);
    }

    cloudTime(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 1);
    }
}


export class SummonSkill extends MonsterEventSkill {
    static DEFAULT_DISTANCE = 750;

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 120;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2301, this.summonNum(), Position.toPercentage(this.hpRate()), this.summonName());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2301, this.summonNum(this.level + 1), Position.toPercentage(this.hpRate(this.level + 1)), this.summonName(this.level + 1));
            this.refreshTag(true);
        };
    }

    summonId(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    summonName(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return MonsterManager.getOnlyExample().getData(this.summonId(_level)).name;
    }

    loadRes(_level = -1) {
        MonsterManager.getOnlyExample().getData(this.summonId(_level)).init();
    }

    isLoaded(_level = -1) {
        return DynamicLoad.loadedList[MonsterManager.getOnlyExample().getData(this.summonId(_level)).res] != null;
    }

    summonNum(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 6);
    }

    hpRate(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 7);
    }
}


export class TransformSkill extends MonsterEventSkill {

    constructor(_id, _level, _monster) {
        super(_id, _level, _monster);
        this.index = 95;
        this.m_updateFunction = function () {
            this.m_skillInfo = GlobalDataGetValue.getLanguageStr(2307, this.transformName());
            this.m_nextLevelSkillInfo = GlobalDataGetValue.getLanguageStr(2307, this.transformName(this.level + 1));
            this.refreshTag(true);
        };
    }

    transformId(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return this.data.getLevelParam(_level, 5);
    }

    transformName(_level = -1) {
        if (_level < 0) {
            _level = this.level;
        }
        return MonsterManager.getOnlyExample().getData(this.transformId(_level)).name;
    }

}


export class SkillsPackage extends BaseModule {
    level;

    constructor(_dataId, _level = 1) {
        super();
        this.m_data = SkillsPackageManager.getOnlyExample().getData(_dataId);
        this.level = _level;
    }

    get skillsPackageData() {
        return this.m_data;
    }
}

//export { BaseSkill, TowerSkill, SkillsPackage }
//export { AoeAttackSkill, AttackRateSkill, AuraSkill, BeatBackSkill, BounceAttackSkill, BurnColdSkill, ChangeBulletSkill, ChangeDamageSkill, ChangeRangeSkill, ChangeRangeSkill, ChangeRateSkill, ComboAttackSkill, CritSkill, CussSkill, DividedAttackSkill, FloatDamageSkill, GuidedBulletSkill, IntimidateSkill, LightSkill, PoisonSkill, ReducedDefenseSkill, ScatterAttackSkill, SilenceSkill, SlowSkill, ThroughoutAttackSkill, VertigoSkill };