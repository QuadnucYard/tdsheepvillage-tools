import { BaseModule } from "../BaseModule.js";
import { GameMapManager } from "../../command/map.js";
import { GameMapData } from "../../command/map.js";
import { GlobalData } from "../../ado/GlobalData.js";

export class GameMap extends BaseModule {
    static DEFEND_MAP_1 = "mfx1";
    static ENDLESS_MAP_1 = "m11";
    static REFRESH_RATE = 40;
    static currentMap;
    static m_waveInPVE;
    static SIGN_SUCCESS = "success";
    static SIGN_FAILED = "failed";
    static SIGN_PASS = "pass";

    score;

    constructor(_dataId, _initMap = true) {
        super();
        this.m_data = GameMapManager.getOnlyExample().getData(_dataId);
    }

    static getMapData(_mid) {
        return GameMapManager.getOnlyExample().getData(_mid);
    }

    get gameMapData() {
        return this.m_data;
    }

    get canUnkennelAdjust() {
        if (this.wave && !this.isDefendMap && !this.isDream && !this.isRandomBoss && !this.isBoss) {
            return true;
        }
        return false;
    }

    get unkennelDelayNum() {
        let _unkennelDensity = 1;
        if (this.canUnkennelAdjust) {
            _unkennelDensity = this.wave.waveData.unkennelDensity;
        }
        return Math.round(this.gameMapData.unkennelDelay / _unkennelDensity / MapTimer.mainRate);
    }

    get unkennelSoloDifficulty() {
        if (this.isSolo) {
            if (this.gameMapData.unkennelRule == WaveData.UNKENNEL_RULE_SAME_TIME) {
                return 1;
            }
            return Math.pow(1 / this.gameMapData.entranceList.length, WaveData.SOLO_DIFFICULTY);
        }
        return 1;
    }

    get isSolo() {
        if (this.canUnkennelAdjust) {
            if (this.wave.waveData.isSolo) {
                return true;
            }
        }
        return false;
    }

    getBossList() {
        return MonsterManager.getOnlyExample().getBossList(this.gameMapData.bossList);
    }

    getBoss() {
        if (this.isEndlessMap) {
            return null;
        }
        let _list = MonsterManager.getOnlyExample().getBossList(this.gameMapData.bossList);
        if (_list.length > 0) {
            return new Monster(_list[0]);
        }
        return null;
    }

    set isDream(_isDream) {
        if (this.gameMapData.loadComplete) {
            this.gameMapData.isDream = _isDream;
        }
        GlobalData.$_isDream = _isDream;
    }

    get isDream() {
        return GlobalData.$_isDream;
    }

    set award(_award) {
        if (_award < 1) {
            this.m_award = 1;
        } else {
            this.m_award = _award;
        }
        if (this.m_award > 7) {
            this.m_award = 7;
        }
    }

    get award() {
        return this.m_award;
    }

    get scoreMax() {
        if (this.isEndlessMap) {
            return this.gameMapData.scoreMax * this.award;
        }
        return this.gameMapData.scoreMax;
    }

    get isEndlessMap() {
        if (this.gameMapData.id == GameMap.ENDLESS_MAP_1) {
            return true;
        }
        return false;
    }

    get isDefendMap() {
        if (this.gameMapData.id == GameMap.DEFEND_MAP_1) {
            return true;
        }
        return false;
    }

    get isPVE() {
        return GlobalData.$_currStageStatus == MainPanel.CURRSTAGESTATUS_MAIN;
    }

    get isPVP() {
        return this.isDefendMap;
    }

    get isPtameVPmap() {
        return this.isDefendMap && !isMyMap && !this.isArena;
    }

    get isPmapVPtame() {
        return this.isDefendMap && isMyMap && !this.isArena;
    }

    get isPtameVPmapArena() {
        return this.isDefendMap && !isMyMap && this.isArena;
    }

    get isPmapVPtameArena() {
        return this.isDefendMap && isMyMap && this.isArena;
    }

    get isArena() {
        return TameArenaPanelFun.$_currIsArenaStage;
    }
}
