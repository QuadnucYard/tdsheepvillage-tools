import { GlobalData } from "./GlobalData.js";
import { Tools } from "../utils/Tools.js";

export class GlobalDataGetValue {
   static MANUAL_TAG_STR = "_@@A";
   static INTER_CONFIG_SPLIT_CHAR = "^";

   GlobalDataGetValue() {
      throw new Error("this.GlobalDataGetValue 无法实例化");
   }

   static getSystemMsg(_msgType, _msgId) {
      return GlobalData.$_global_systemMsg[_msgType][_msgId];
   }

   static addObjAttribute_type_id(_obj) {
      let i = null;
      let j = null;
      for (i in _obj) {
         for (j in _obj[i]) {
            _obj[i][j]["type"] = i.toString();
            _obj[i][j]["id"] = j.toString();
         }
      }
      return _obj;
   }

   static addObjAttribute_type_id_one(_obj, _type) {
      let i = null;
      let _newObj = {};
      for (i in _obj) {
         _newObj[i] = _obj[i];
         _newObj[i]["type"] = _type;
         _newObj[i]["id"] = i.toString();
      }
      return _newObj;
   }

   static getLanguageStr(_id, ...args) {
      let _find = null;
      let _subStr = null;
      let _str = "";
      if (GlobalData.$_global_language_str != null) {
         if (GlobalData.$_global_language_str.getElementsByTagName("id" + _id)[0] != undefined) {
            if (GlobalData.$_global_language_str.getElementsByTagName("id" + _id)[0].getAttribute("str") == "CHILD2010") {
               _str = GlobalData.$_global_language_str.getElementsByTagName("id" + _id)[0].children().toString(); //TOFIX
            } else {
               _str = GlobalData.$_global_language_str.getElementsByTagName("id" + _id)[0].getAttribute("str");
            }
         } else {
            _str = null;
         }
      }
      if (_str.length <= 0) {
         return "";
      }
      let _index = _str.search("%%");
      while (_index != -1) {
         _subStr = _str.slice(_index, _index + 6);
         _str = _str.replace(_subStr, GlobalDataGetValue.getLanguageStr(parseInt(_subStr.slice(2))));
         _index = _str.search("%%");
      }
      for (let i = 0; i < args.length; i++) {
         _find = "%" + i;
         _str = Tools.replaceString(_str, _find, args[i]);
      }
      return _str;
   }

   static getLogMsgTemp(_msgObj, _global_config) {
      let _type = null;
      let _fid = null;
      let _fname = null;
      let _data = null;
      let _strRepalceTo = null;
      let _let = null;
      let i = null;
      let _str = "";
      if (!Tools.isNullAndUndefined(_global_config)) {
         _type = _msgObj["msg_type"];
         _fid = !!_msgObj.hasOwnProperty("friend_id") ? _msgObj["friend_id"] : "";
         _fname = Boolean(_msgObj["friend_name"]) ? _msgObj["friend_name"] : GlobalDataGetValue.getDataProfileTxt(GlobalData.$_user_default_name);
         _fname = "<a href=\"event:" + _fid + "\"><font color=\"#FF0000\">" + _fname + "</font></a>";
         _data = !!Tools.isNullAndUndefined(_msgObj["data"]) ? {} : _msgObj["data"];
         _data["friend"] = _fname;
         _strRepalceTo = "";
         if (_global_config.hasOwnProperty(_msgObj["msg_type"])) {
            _str = GlobalDataGetValue.getDataProfileTxt(_global_config[_type]);
            _let = "";
            for (i in _data) {
               _let = i.toString();
               if (_let == "user_name" && _data[i] == null) {
                  _strRepalceTo = this.GlobalDataGetValue.getDataProfileTxt(GlobalData.$_user_default_name);
               }
               else if (_let == "p_str") {
                  _strRepalceTo = GlobalDataGetValue.getDataProfileTxt_Gem(String(_data[i]));
               } else {
                  _strRepalceTo = GlobalDataGetValue.getDataProfileTxt(String(_data[i]));
               }
               if (_let == "user_name") {
                  _strRepalceTo = "{" + _strRepalceTo + "}";
               }
               else if (_let == "number") {
                  _strRepalceTo = "[" + _strRepalceTo + "]";
               }
               else if (_let == "properties") {
                  _strRepalceTo = "(" + _strRepalceTo + ")";
               }
               else if (_let != "friend") {
                  _strRepalceTo = "(" + _strRepalceTo + ")";
               }
               _let = "${" + _let + "}";
               _str = Tools.replaceAllBySplit(_str, _var, _strRepalceTo);
            }
         }
      }
      return _str;
   }

   static setObjecInConfigStr_format(_obj) {
      if (_obj.hasOwnProperty(UserData.UName)) {
         _obj[UserData.UName] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.UName]);
      }
      if (_obj.hasOwnProperty(UserData.INFO)) {
         _obj[UserData.INFO] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.INFO]);
      }
      if (_obj.hasOwnProperty(UserData.TITLE)) {
         _obj[UserData.TITLE] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.TITLE]);
      }
      if (_obj.hasOwnProperty(UserData.TITLEINFO)) {
         _obj[UserData.TITLEINFO] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.TITLEINFO]);
      }
      if (_obj.hasOwnProperty(UserData.INFO1)) {
         _obj[UserData.INFO1] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.INFO1]);
      }
      if (_obj.hasOwnProperty(UserData.DESC)) {
         _obj[UserData.DESC] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.DESC]);
      }
      if (_obj.hasOwnProperty(UserData.SUMMARY)) {
         _obj[UserData.SUMMARY] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.SUMMARY]);
      }
      if (_obj.hasOwnProperty(UserData.MSG)) {
         _obj[UserData.MSG] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.MSG]);
      }
      if (_obj.hasOwnProperty(UserData.BUTTON)) {
         _obj[UserData.BUTTON] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.BUTTON]);
      }
      if (_obj.hasOwnProperty(UserData.LINK)) {
         _obj[UserData.LINK] = GlobalDataGetValue.getDataProfileTxt(_obj[UserData.LINK]);
      }
      return _obj;
   }

   static formatObjectOneClild(_obj) {
      let i = null;
      for (i in _obj) {
         _obj[i] = GlobalDataGetValue.setObjecInConfigStr_format(_obj[i]);
      }
      return _obj;
   }

   static getDataProfileTxt(_id) {
      let _oldStr = null;
      let _isIndexOf = false;
      let _arr = null;
      let _xmlId = null;
      let _cnStr = null;
      let _str = _id;
      if (_id) {
         _oldStr = String(_id);
         _isIndexOf = _oldStr.indexOf(GlobalDataGetValue.INTER_CONFIG_SPLIT_CHAR) > -1;
         _arr = null;
         _xmlId = "";
         _cnStr = "";
         if (_isIndexOf) {
            _arr = _oldStr.split(GlobalDataGetValue.INTER_CONFIG_SPLIT_CHAR);
            _xmlId = _arr[0];
            _cnStr = _arr[1];
            if (GlobalData.$_global_dataProfile_txt != null) {
               if (GlobalData.$_global_dataProfile_txt.getElementsByTagName(_xmlId)[0] != undefined) {
                  _str = GlobalData.$_global_dataProfile_txt.getElementsByTagName(_xmlId)[0].getAttribute("s").toString();
               } else {
                  _str = _cnStr;
               }
               _str = _str.replace(/\\n/g, "\n");
            } else {
               _str = _cnStr;
            }
         } else {
            _str = _oldStr;
         }
         _arr = null;
         _oldStr = "";
         _xmlId = "";
         _cnStr = "";
      }
      return _str;
   }

   static getDataProfileTxt_Gem(_id) {
      let _oldStr = null;
      let _isIndexOf = false;
      let _arr = null;
      let _cnStr = null;
      let i = 0;
      let _arrStr = null;
      let _str = _id;
      if (_id) {
         _oldStr = String(_id);
         _isIndexOf = _oldStr.indexOf(GlobalDataGetValue.INTER_CONFIG_SPLIT_CHAR) > -1;
         _arr = null;
         _cnStr = "";
         if (_isIndexOf) {
            _arr = _oldStr.split(",");
            for (i = 0; i < _arr.length; i++) {
               if (_arr[i].indexOf(GlobalDataGetValue.INTER_CONFIG_SPLIT_CHAR) > -1) {
                  _arrStr = [];
                  _arrStr = _arr[i].split(GlobalDataGetValue.INTER_CONFIG_SPLIT_CHAR);
                  _cnStr += _arrStr[1] + ",";
               }
            }
            _str = _cnStr;
         }
         _arr = null;
         _oldStr = "";
         _cnStr = "";
         _arrStr = null;
      }
      return _str;
   }

   static getLanguageStr_group(_arr) {
      let _str = "";
      for (let i = 0; i < _arr.length; i++) {
         _str += GlobalDataGetValue.getLanguageStr(_arr[i]);
      }
      return _str;
   }

   static getLanguageStr_manual(_id, ...args) {
      return GlobalDataGetValue.getLanguageStr(_id, args) + GlobalDataGetValue.MANUAL_TAG_STR;
   }

   static getGiftObjById(_giftObj, _type = "gold") {
      let _types = null;
      let i = null;
      let j = null;
      let _reObj = null;
      if (_type.indexOf("properties") > -1) {
         _types = _type.split("_")[1];
         if (!Tools.isNullAndUndefined(_giftObj["properties"])) {
            for (i in _giftObj["properties"]) {
               for (j in _giftObj["properties"][i]) {
                  if (String(j).indexOf(_types) > -1) {
                     _reObj = {
                        "type": _types,
                        "num": parseInt(_giftObj["properties"][i][j])
                     };
                     break;
                  }
               }
            }
         }
      } else {
         _reObj = {
            "type": _type,
            "num": parseInt(_giftObj[_type])
         };
      }
      return _reObj;
   }

   static updataGiftPropertiesData_num(_data, _t = 1) {
      let i = null;
      let j = null;
      let _obj = null;
      for (i in _data) {
         for (j in _data[i]) {
            GlobalDataGetValue.updataToolsData_num(int(_data[i][j]) * _t, i.toString(), j.toString());
         }
      }
   }

   static getPassMapGift() {
      return GlobalData.$_pass_map_gift[String(GlobalData.$_userLevelData["umid"]).split("_")[1]];
   }

   static getMapName(_obj, _key) {
      return String(_obj[_key]).split("_")[1];
   }

   static isCurrMap(_mapObj, _userData) {
      let _b = true;
      if (_mapObj == null) {
         _b = false;
      }
      else if (String(_mapObj["umid"]).split("_")[1] != _userData.mid) {
         _b = false;
      }
      return _b;
   }

   static getGiftObjByType(_giftObj, _type = "properties") {
      return _giftObj[_type];
   }

   static setPropertiesForGift(_ids) {
      let _obj = {};
      for (let i = 0; i < _ids.length; i++) {
         _obj[_ids[i]["id"]] = _ids[i]["num"];
      }
      return { "properties": _obj };
   }

   static updataToolsData_num(_num, _type, _id) {
      if (_num > 0) {
         if (Tools.isNullAndUndefined(GlobalData.$_global_properties_myDataNum[_type])) {
            GlobalData.$_global_properties_myDataNum[_type] = {};
            GlobalData.$_global_properties_myDataNum[_type][_id] = Math.abs(_num);
         }
         else if (Tools.isNullAndUndefined(GlobalData.$_global_properties_myDataNum[_type][_id])) {
            GlobalData.$_global_properties_myDataNum[_type][_id] = Math.abs(_num);
         } else {
            GlobalData.$_global_properties_myDataNum[_type][_id] += Math.abs(_num);
         }
      }
      else if (!Tools.isNullAndUndefined(GlobalData.$_global_properties_myDataNum[_type])) {
         if (!Tools.isNullAndUndefined(GlobalData.$_global_properties_myDataNum[_type][_id])) {
            GlobalData.$_global_properties_myDataNum[_type][_id] -= Math.abs(_num);
            if (GlobalData.$_global_properties_myDataNum[_type][_id] <= 0) {
               delete GlobalData.$_global_properties_myDataNum[_type][_id];
            }
         }
      }
   }

   static getToolsData_obj(_type, _id) {
      let _obj = null;
      if (GlobalData.$_global_properties[_type]) {
         if (GlobalData.$_global_properties[_type][_id]) {
            _obj = GlobalDataGetValue.setObjecInConfigStr_format(GlobalData.$_global_properties[_type][_id]);
         }
      }
      return _obj;
   }

   static getToolsData_num(_type, _id) {
      let _num = 0;
      if (GlobalData.$_global_properties_myDataNum) {
         if (GlobalData.$_global_properties_myDataNum[_type]) {
            if (GlobalData.$_global_properties_myDataNum[_type][_id]) {
               _num = GlobalData.$_global_properties_myDataNum[_type][_id];
            }
         }
      }
      return _num;
   }

   static checkGlobalSlave(_sysTime) {
      let i = null;
      let _m = 0;
      for (i in GlobalData.$_global_slave_myData) {
         _m = (_sysTime - new Date(GlobalData.$_global_slave_myData[i][SlaveBaseData.CATCH_TIME]).getTime() * 0.001) / 60;
         if (_m >= GlobalData.$_slave_full_time) {
            delete GlobalData.$_global_slave_myData[i];
         }
      }
   }

   static checkMineSlaveCanWork(_catch, _workTime, _sleep_time) {
      let _b = false;
      let _canTime = _catch + _sleep_time * 60;
      let _miningTime = _catch + _workTime * 60 * 60;
      if (_canTime > _miningTime) {
         _b = true;
      }
      return _b;
   }

   static checkSlaveIsWorking(_uid) {
      let _workTime = NaN;
      let _b = false;
      if (!Tools.isNullAndUndefined(GlobalData.$_global_slave_myData[_uid])) {
         _workTime = new Date(GlobalData.$_global_slave_myData[_uid][SlaveBaseData.WORK_TIME]).getTime() * 0.001;
         if (_workTime >= SendAndSelect.$systemTimer_nowSecond) {
            _b = true;
         } else {
            _b = false;
         }
      } else {
         _b = false;
      }
      return _b;
   }

   static checkIsCoolingTime(_data) {
      let _coolingTime = NaN;
      let _b = false;
      if (!Tools.isNullAndUndefined(_data[SlaveBaseData.COOLING_TIME])) {
         _coolingTime = new Date(_data[SlaveBaseData.COOLING_TIME]).getTime() * 0.001;
         if (_coolingTime > SendAndSelect.$systemTimer_nowSecond) {
            _b = true;
         } else {
            _b = false;
         }
      } else {
         _b = false;
      }
      return _b;
   }

   static checkGlobalSlaveNum() {
      let i = null;
      let _num = 0;
      for (i in GlobalData.$_global_slave_myData) {
         _num += 1;
      }
      return _num;
   }

   static formatGlobalMySlave(_mySlaveData) {
      let i = null;
      GlobalData.$_global_slave_myData = {};
      let _slaveData = null;
      for (i in _mySlaveData) {
         _slaveData = GlobalData.$_global_slave_const();
         _slaveData = Tools.addObjectNewAtt(_slaveData, _mySlaveData[i]);
         _slaveData[SlaveBaseData.ID] = i;
         _slaveData[SlaveBaseData.ID_KEY] = _slaveData[SlaveBaseData.ID] + "_" + _slaveData[SlaveBaseData.TIME_KEY];
         _slaveData[SlaveBaseData.ISHAVE] = 1;
         _slaveData[SlaveBaseData.ISLOCK] = 0;
         GlobalData.$_global_slave_myData[i] = _slaveData;
      }
   }

   static getLevelUnlockTools(_mapId, _level = 5) {
      let i = null;
      let _gem = GlobalData.$_global_properties["gem"];
      let _awardObj = { "properties": { "gem": {} } };
      for (i in _gem) {
         if (_gem[i]["index"] >= 0) {
            if (_gem[i]["unlock_mid"] == _mapId && String(_gem[i]["gamLevel"]) == _level.toString()) {
               _awardObj.properties.gem[i] = GlobalDataGetValue.setObjecInConfigStr_format(_gem[i]);
            }
         }
      }
      return _awardObj;
   }

   static getSlave_max_invite_score(_slave_max) {
      let _a = GlobalData.$_slave_max_invite_score.a;
      let _b = GlobalData.$_slave_max_invite_score.b;
      let _c = GlobalData.$_slave_max_invite_score.c;
      return int(_a + (_slave_max - _b) * _c);
   }

   static formateFriendData(_friendArr) {
      let _num = 0;
      let _formatArr = [];
      for (let i = 0; i < _friendArr.length; i++) {
         _formatArr.push(_friendArr[i]);
      }
      return _formatArr;
   }

   static getDalic_isUseing(_sysNowT, _dalicT) {
      let _dff = _sysNowT - _dalicT;
      if (_dff < 0) {
         _dff = Math.abs(_dff);
      } else {
         _dff = 0;
      }
      return _dff;
   }

   static getDalic_powerValue(param1, param2) {
      param1 = 0;
      if (param2) {
         param1 = Math.floor(param1 * param2[0] + param2[1]);
      }
      return param1;
   }

   static getDalic_dTime(_obj) {
      let _timeNum = 0;
      if (_obj["deadline_properties"]) {
         if (_obj["deadline_properties"]["dalic"]) {
            if (_obj["deadline_properties"]["dalic"]) {
               _timeNum = new Date(_obj["deadline_properties"]["dalic"]).getTime() * 0.001;
            }
         }
      }
      return _timeNum;
   }

   static qqVIPformat(_data) {
      if (GlobalData.$_referer == "3366") {
         _data["is_vip"] = _data["is_blue_vip"];
         _data["is_year_vip"] = _data["is_blue_year_vip"];
         _data["vip_level"] = _data["blue_vip_level"];
      }
      let _vip = 0;
      let _year = 0;
      let _level = 0;
      if (_data["is_vip"] == null) {
         _vip = 0;
      } else {
         _vip = int(_data["is_vip"]);
      }
      if (_data["is_year_vip"] == null) {
         _year = 0;
      } else {
         _year = int(_data["is_year_vip"]) > 0 ? 10 : 0;
      }
      if (_data["vip_level"] == null) {
         _vip = 0;
         _year = 0;
         _level = 0;
      } else {
         _level = int(_data["vip_level"]) > 0 ? _data["vip_level"] : 0;
      }
      return _vip * (_level + _year);
   }

   static dreamIsOpenByTime(_nt, _obj) {
      let _b = false;
      let _st = new Date(_obj["startTime"]).getTime() * 0.001;
      let _et = new Date(_obj["endTime"]).getTime() * 0.001;
      if (_nt >= _st && _nt < _et) {
         _b = true;
      }
      return _b;
   }

   static changeCampTameWolfData(_data, _in = false, _del = false) {
      let i = null;
      if (!_in) {
         for (i in GlobalData.$_global_camp_wolfs) {
            if (_data["wids"] == GlobalData.$_global_camp_wolfs[i]["wids"]) {
               if (_del) {
                  delete GlobalData.$_global_camp_wolfs[i];
               } else {
                  GlobalData.$_global_camp_wolfs[i] = _data;
               }
               GlobalData.$_global_camp_obj["wolfs"] = GlobalData.$_global_camp_wolfs;
               break;
            }
         }
      } else {
         GlobalData.$_global_camp_obj["wolfs"] = GlobalData.$_global_camp_wolfs = _data;
      }
   }

   static getCampManorsNum(_camp_obj = null) {
      let i = null;
      let _num = 0;
      let _isHome = GlobalData.$_GAME_uid == GlobalData.$_GAME_fid;
      let _campObj = !!_isHome ? GlobalData.$_global_camp_obj : GlobalData.$_global_camp_obj_f;
      _campObj = _camp_obj != null ? _camp_obj : _campObj;
      if (!Tools.isNoChildrenInObj(_campObj["manors"])) {
         for (i in _campObj["manors"]) {
            _num++;
         }
      }
      return _num;
   }

   static getMining_rate_obj(_h) {
      let i = null;
      let _obj = null;
      for (i in GlobalData.$_camp_mining_rate) {
         _obj = GlobalData.$_camp_mining_rate[i];
         if (_obj["harvest_num"] == _h) {
            break;
         }
      }
      return _obj;
   }

   static getTowerAddAllEXP(_expObj) {
      let i = null;
      let _exp = 0;
      for (i in _expObj) {
         _exp += _expObj[i];
      }
      return _exp;
   }

   static getCurrUserMapData() {
      return GlobalData.$_GAME_uid == GlobalData.$_GAME_fid ? GlobalData.$_userLevelData : GlobalData.$_friendLevelData;
   }

   static getGuideId(_group) {
      let _id = 0;
      let _guideObj = GlobalData.$_user_guide;
      if (_guideObj) {
         if (_guideObj[_group] != null) {
            return int(_guideObj[_group]);
         }
      }
      return -1;
   }

   static getMyWolfsCanTameNum() {
      let _wMax = GlobalData.$_global_camp_obj["wolf_max"];
      let _wLv = GlobalData.$_global_camp_obj["expand_lv_wolf_max"];
      let _wItem = GlobalData.$_global_camp_obj["expand_properties_wolf_max"];
      return _wMax + _wLv + _wItem;
   }

   static getMyWolfsNum() {
      let i = null;
      let _myWolfsNum = 0;
      for (i in GlobalData.$_global_camp_obj["wolfs"]) {
         if (GlobalData.$_global_camp_obj["wolfs"][i]) {
            _myWolfsNum++;
         }
      }
      return _myWolfsNum;
   }

   static get_mine_help_friends_list(_camp) {
      let _arr = null;
      let _records = null;
      if (!Tools.isNullAndUndefined(_camp["records"])) {
         _records = _camp["records"];
         if (!Tools.isNullAndUndefined(_records["mine_help_friends_list"])) {
            if (!(_records["mine_help_friends_list"] instanceof Array)) {
               _records["mine_help_friends_list"] = [];
            }
            if (!Tools.isNullForArray(_records["mine_help_friends_list"])) {
               _arr = _records["mine_help_friends_list"];
            }
         }
      }
      return _arr;
   }

   static get_mine_help(_camp) {
      let _arr = null;
      let _mine = null;
      if (!Tools.isNullAndUndefined(_camp["mine"])) {
         _mine = _camp["mine"];
         if (!Tools.isNullAndUndefined(_mine["help"])) {
            if (!Tools.isNullForArray(_mine["help"])) {
               _arr = _mine["help"];
            }
         }
      }
      return _arr;
   }

   static formatSecondToTxt(_s, _server) {
      let _1Day = NaN;
      let _1M = NaN;
      let _1H = NaN;
      let _n = NaN;
      let _desc = _server - _s;
      let _str = "";
      _1Day = 24;
      _1M = 60;
      _1H = _1M * _1M;
      let _24H = _1H * _1Day;
      if (_desc < _1H) {
         _str = Math.ceil(_desc / _1M) + GlobalDataGetValue.getLanguageStr(4024);
      }
      else if (_desc >= _1H && _desc < _24H) {
         _n = Math.floor(_desc / _1M / _1M) % _1Day;
         _n = _n < 1 ? Number(1) : Number(_n);
         _str = _n + GlobalDataGetValue.getLanguageStr(4546);
      }
      else if (_desc >= _24H) {
         _str = Math.floor(_desc / _24H) + GlobalDataGetValue.getLanguageStr(20);
      }
      return _str + GlobalDataGetValue.getLanguageStr(4545);
   }

   static formatAdvertisingData(_arr) {
      let _data = null;
      if (_arr == null) {
         return [];
      }
      let _newDataArr = [];
      for (let i = 0; i < _arr.length; i++) {
         _data = _arr[i];
         if (!Tools.isNullAndUndefined(_data["open"])) {
            if (GlobalData.$_referer == "3366") {
               if (String(_data["open"]).indexOf("3366") > -1) {
                  _newDataArr.push(_data);
               }
            }
            else if (String(_data["open"]).indexOf(GlobalData.$_lang) > -1) {
               _newDataArr.push(_data);
            }
         }
         if (!Tools.isNullAndUndefined(_data["hrefList"])) {
            if (!Tools.isNullAndUndefined(_data["hrefList"][GlobalData.$_lang])) {
               _data["href"] = _data["hrefList"][GlobalData.$_lang];
            }
         }
      }
      return _newDataArr;
   }

   static formatFreeGift(_data) {
      let _obj = null;
      let i = null;
      let _arr = [];
      GlobalData.$_global_freeGiftObj = {};
      for (i in _data) {
         _obj = _data[i];
         _obj["itemId"] = String(i);
         _obj = GlobalDataGetValue.setObjecInConfigStr_format(_obj);
         _arr.push(_obj);
         GlobalData.$_global_freeGiftObj[String(i)] = _obj;
      }
      _arr.sortOn("sort", Array.NUMERIC);
      return _arr;
   }
}

