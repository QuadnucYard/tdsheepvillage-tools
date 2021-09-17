import { BaseModule } from "../BaseModule.js";
import { GameMapManager } from "../../command/map.js";
import { GameMapData } from "../../command/map.js";

export class GameMap extends BaseModule {
    static DEFEND_MAP_1 = "mfx1";
    static ENDLESS_MAP_1 = "m11";
    static REFRESH_RATE = 40;
    static currentMap;
    static m_waveInPVE;
    static SIGN_SUCCESS = "success";
    static SIGN_FAILED = "failed";
    static SIGN_PASS = "pass";

    static currentMap = { isDefendMap: false };

    constructor(_dataId, _initMap = true) {
        super();
        m_data = GameMapManager.getOnlyExample().getData(_dataId);
        this.initMap(_initMap);
        MainStage.getOnlyExample().mode = MainStage.MODE_NULL;
    }

    static getMapData(_mid) {
        return GameMapManager.getOnlyExample().getData(_mid);
    }


    static getCurrentDreamMapId() {
        return GlobalData.$_GAME_userData.dmid;
    }

    static getCanDreamMapIdList() {
        let _canDreamMap = 0;
        let _mid = null;
        let i = 0;
        let _passMapList = GlobalData.$_GAME_userData.pass_mids;
        let _canDreamMapList = [];
        for (i = 0; i < _passMapList.length; i++) {
            _mid = _passMapList[i];
            _canDreamMap = PanelDreamStarting.dreamMapIsOpen(_mid);
            if (_canDreamMap == PanelDreamStarting.TYPE_DREAM_HAD || _canDreamMap == PanelDreamStarting.TYPE_DREAM_ING) {
                _canDreamMapList.push(_mid);
            }
        }
        return _canDreamMapList;
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

    getPopulationRate() {
        let _myPop = GameMap.getMapData(GlobalData.$_GAME_userData.mid).populationMax;
        let _friendPop = this.gameMapData.populationMax;
        return _friendPop / _myPop;
    }
}
