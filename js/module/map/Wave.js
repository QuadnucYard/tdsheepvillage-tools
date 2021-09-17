import { WaveData } from "../../command/map.js";
import { GameMap } from "./GameMap.js";

export class Wave {
   static SPEAK_MAX = 2;
   waveData;
   m_index;
   speakNum;
   monsterList;
   aliveList;
   unkennelCount;
   m_bulletIndex;
   bulletLib;
   isAdd;
   isFight;
   isReturn;
   danger;
   loseNum;
   invasion;
   invasionList;
   expendTrapLib;

   constructor(data, _isCurrent = true) {
      this.waveData = data;
      this.initWave(_isCurrent);
   }

   initWave(_isCurrent = true) {
      let _boss = null;
      let _wolf = null;
      let i = 0;
      let _kindId = null;
      let k = undefined;
      let _tameObj = undefined;
      if (this.waveData == null) {
         return;
      }
      this.m_index = 0;
      let _level = this.difficultyLevel;
      let _difficulty = this.difficultyValue;
      this.monsterList = new Array();
      if (this.waveData.isTame) {
         for (i = 0; i < this.waveData.tameList.length; i++) {
            _tameObj = this.waveData.tameList[i];
            _wolf = Monster.newMonster(_tameObj);
            this.monsterList.push(_wolf);
         }
      } else {
         if (this.waveData.monsterList == null) {
            return;
         }
         for (i = 0; i < this.waveData.monsterList.length; i++) {
            _kindId = this.waveData.monsterList[i];
            _wolf = new Monster(_kindId, _level, _difficulty);
            this.monsterList.push(_wolf);
         }
      }
      for (k of this.monsterList) {
         _wolf = k;
         _wolf.initSkills();
      }
      if (!_isCurrent) {
         return;
      }
      GameMap.currentMap.bossName = "";
      if (GameMap.currentMap.isDefendMap) {
         return;
      }
      _boss = this.getBoss();
      if (_boss != null) {
         for (k of this.monsterList) {
            _wolf = k;
            if (!_wolf.isBoss) {
               _wolf.hpMax *= 0.8;
            }
         }
      } else {
         _boss = this.getRandomBoss();
      }
   }

   getBoss() {
      let k = undefined;
      let _wolf = null;
      if (!(this.monsterList instanceof Array)) {
         return null;
      }
      for (k of this.monsterList) {
         _wolf = k;
         if (_wolf.isBoss) {
            return _wolf;
         }
      }
      return null;
   }

   getRandomBoss() {
      let k = undefined;
      let _wolf = null;
      if (!(this.monsterList instanceof Array)) {
         return null;
      }
      for (k of this.monsterList) {
         _wolf = k;
         if (_wolf.isRandomBoss) {
            return _wolf;
         }
      }
      return null;
   }

   getOwnerName() {
      let _uid = null;
      let _uData = null;
      let _obj = GlobalData.$_userLevelData[UserData.LURED_WOLF];
      let _uName = GlobalDataGetValue.getLanguageStr(4109);
      if (!Tools.isNullAndUndefined(_obj)) {
         _uid = _obj.friend_id;
         _uData = FriendPanelFun.getFriendData(_uid);
         if (_uData != null) {
            if (_uData.name instanceof String && _uData.name != "") {
               _uName = _uData.name;
            }
         }
      }
      return _uName;
   }

   get isReady() {
      let i = 0;
      let _wolf = null;
      if (this.monsterList == null) {
         return false;
      }
      for (i = 0; i < this.monsterList.length; i++) {
         _wolf = this.monsterList[i];
         if (DynamicLoad.loadedList[_wolf.monsterData.res] == null) {
            return false;
         }
         if (_wolf.skills != null) {
            if (_wolf.skills[MonsterSkillData.KIND_SUMMON] instanceof SummonSkill) {
               if ((_wolf.skills[MonsterSkillData.KIND_SUMMON]).isLoaded == false) {
                  return false;
               }
            }
            if (_wolf.skills[MonsterSkillData.KIND_TRANSFORM] instanceof TransformSkill) {
               if ((_wolf.skills[MonsterSkillData.KIND_TRANSFORM]).isLoaded == false) {
                  return false;
               }
            }
            if (_wolf.skills[MonsterSkillData.KIND_REINCARNATE] instanceof ReincarnateSkill) {
               if ((_wolf.skills[MonsterSkillData.KIND_REINCARNATE]).isLoaded == false) {
                  return false;
               }
            }
         }
      }
      MapTimer.getOnlyExample().loadSound();
      return true;
   }

   get difficultyDream() {
      return Tools.getValueByIndex(GameMap.currentMap.score, GlobalData.$_dream_wolf_hard_ness);
   }

   get difficultyValue() {
      let _value = this.waveData.difficulty;
      if (GameMap.currentMap.isDream) {
         _value *= this.difficultyDream;
      }
      if (GameMap.currentMap.canUnkennelAdjust) {
         _value *= this.waveData.densityDifficulty;
      }
      return _value;
   }

   get difficultyLevel() {
      let _gameMap = GameMap.currentMap;
      return Math.sqrt(_gameMap.gameMapData.hardA + _gameMap.gameMapData.hardB * _gameMap.score);
   }

   get averageHp() {
      let i = 0;
      let _hp = 0;
      for (i = 0; i < this.monsterList.length; i++) {
         _hp += (this.monsterList[i]).hpMax;
      }
      return Math.round(_hp / this.monsterList.length);
   }

   get difficultyColor() {
      if (this.waveData.difficulty < 0.9) {
         return 5263440;
      }
      if (this.waveData.difficulty < 1) {
         return 5273640;
      }
      if (this.waveData.difficulty < 1.1) {
         return 5283840;
      }
      if (this.waveData.difficulty < 1.2) {
         return 7895040;
      }
      if (this.waveData.difficulty < 1.3) {
         return 10506240;
      }
      return 13117440;
   }

   get soloIndex() {
      return this.waveData.unkennelSolo % GameMap.currentMap.gameMapData.entranceList.length;
   }

}
