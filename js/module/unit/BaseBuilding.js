import { GlobalString } from "../../ado/GlobalString.js";
import { BaseUnit } from "./BaseUnit.js"
import { GameMap } from "../map/GameMap.js";

export class BaseBuilding extends BaseUnit {
    static RATE_TIME = 100000;
    static CHECK_RATE = GameMap.REFRESH_RATE;
    static COOLDOWN_NUM = BaseBuilding.RATE_TIME / BaseBuilding.CHECK_RATE;
    static FIRE_TIME = 0.1;
    static BUILDING = "building";
    static STATUS_BUILD = "statusBuild";
    static FRAME_COMPLETE = "com";
    static RES_UPGRADE = "upgradeTower";
    static BUILD_SET = 0;
    static BUILD_ING = 1;
    static BUILD_HAD = 2;
    doneTime;
    m_doneTimer;
    m_fgUpgrade;
    m_bgUpgrade;
    m_upgradeComplete;
    m_halo;
    m_buildTime;

    constructor() {
        super();
    }

    get buildingData() {
        return this.m_data;
    }

    get range() {
        return this.buildingData.range;
    }

    initBuilding() {
    }

    get skillInfo() {
        let k = undefined;
        let i = 0;
        let _skill = null;
        let _info = null;
        let _landform = null;
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
            if (_info != "") {
                if (_skillInfo != "") {
                    _skillInfo += "\n";
                }
                _skillInfo += _info;
            }
        }
        if (_skillInfo == "") {
            _skillInfo = this.buildingData.info;
        }
        /*_landform = GameMap.currentMap.gameMapData.landformMap[this.posX][this.posY] as Landform;
        if (_landform.data.level == LandformData.LEVEL_POISON) {
            _skillInfo += "<p></p>";
            _skillInfo += GlobalDataGetValue.getLanguageStr(100017);
        }*/
        return _skillInfo;
    }


    /*get canAdd() {
        let k = undefined;
        let _tower = null;
        let _wall = null;
        let _trap = null;
        let _gameMap = GameMap.currentMap;
        let _limitNum = this.buildingData.limitNum;
        if (this is Trap)
        {
            if (!GameMap.currentMap.isDefendMap || GlobalData.$_defend_map_snarp_max <= 0) {
                return true;
            }
        }
         else if (_limitNum <= 0) {
            return true;
        }
        let _id = this.buildingData.id;
        let _num = 0;
        if (this is Tower)
        {
            for each(k in _gameMap.towerLib)
            {
                    _tower = k as Tower;
                    if(_tower.buildingData.id == _id)
               {
                    _num++;
        }
    }
    if(_num >= _limitNum)
{
    return false;
}
         }
         else if (this is Wall)
{
    for each(k in _gameMap.wallLib)
            {
            _wall = k as Wall;
            if(_wall.buildingData.id == _id)
               {
            _num++;
}
            }
if (_num >= _limitNum) {
    return false;
}
         }
         else
{
    if (!(this is Trap))
    {
        return false;
    }
    for each(k in _gameMap.trapLib)
            {
            _num++;
            }
if (_num >= GlobalData.$_defend_map_snarp_max) {
    return false;
}
         }
return true;
      }*/

}
