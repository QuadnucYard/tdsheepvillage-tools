import { BaseDisplayData } from "./BaseData.js";

export class EffectData extends BaseDisplayData {
    static KIND_HIT = "hit";
    static KIND_INVASION = "invasion";
    static KIND_TELEPORT = "teleport";
    static KIND_BUFF_TOP = "buffTop";
    static KIND_BUFF_MID = "buffMid";
    static KIND_BUFF_BOT = "buffBot";
    static KIND_MAGIC = "effectMagic";
    static KIND_PATH = "effectPath";
    static KIND_CRIT = "effectCrit";
    static KIND_SUMMON = "effectSummon";
    static KIND_CLOUD = "effectCloud";
    static KIND_MIRROR = "effectMirror";
    static KIND_CURE = "effectCure";
    static KIND_CURE_ONE = "effectCureOne";
    static KIND_SNEER = "effectSneer";
    static KIND_LINKS = "effectLinks";
    static KIND_RELIVE = "effectRelive";
    static KIND_SUICIDE = "effectSuicide";
    static KIND_BLINK_IN = "effectBlinkIn";
    static KIND_BLINK_OUT = "effectBlinkOut";
    static KIND_LIGHTNING = "lightning";
    static KIND_FIELD_ATTACK = "allAttack";
    static KIND_FIELD_ATTACK_AOE = "allAttackAOE";
    static KIND_CUSS = "effectCuss";
    static KIND_CUSS_BREAK = "effectCussBreak";
    static KIND_SIGN_SUMMON = "signSummon";
    static KIND_SIGN_CURE = "signCure";
    static KIND_SIGN_CLOUD = "signCloud";
    static KIND_SIGN_SHIELD = "signShield";
    static KIND_SIGN_TRANSFORM = "signTransform";
    static KIND_BOSS = "effectBoss";

    constructor(_data) {
        super(_data);
    }
}
