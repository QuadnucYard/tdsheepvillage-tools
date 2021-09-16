export class Tools {
   static DEFAULT = "default";

   static changeScaleByW$H(_mc, _num) {
      let _w = NaN;
      let _h = NaN;
      if (_mc.width > _num || _mc.height > _num) {
         if (_mc.width > _mc.height) {
            _w = _mc.width;
            _mc.width = _num;
            _mc.height = _mc.height * _mc.width / _w;
         } else {
            _h = _mc.height;
            _mc.height = _num;
            _mc.width = _mc.width * _mc.height / _h;
         }
      }
   }

   static check_A_has_B(_a, _b) {
      if (_a != null && _b != null) {
         if (_a.contains(_b)) {
            return true;
         }
         return false;
      }
      return false;
   }

   static formatTime(_timeNum, isChinese = false) {
      let _timerS = _timeNum % 60;
      let _timerM = Math.floor(_timeNum / 60) % 60;
      let _timerH = Math.floor(_timeNum / 3600);
      let _str = "";
      if (isChinese) {
         if (_timerH > 0) {
            _str = _timerH.toString() + GlobalDataGetValue.getLanguageStr(21);
            return _str + (_timerM.toString() + GlobalDataGetValue.getLanguageStr(22));
         }
         if (_timerM > 0) {
            _str += _timerM.toString() + GlobalDataGetValue.getLanguageStr(22);
            return _str + (_timerS.toString() + GlobalDataGetValue.getLanguageStr(23));
         }
         if (_timerS >= 0) {
            _str += _timerS.toString() + GlobalDataGetValue.getLanguageStr(23);
         }
      } else {
         if (_timerH >= 0) {
            _str = (_timerH > 9 ? _timerH.toString() : "0" + _timerH.toString()) + ":";
         }
         if (_timerM >= 0) {
            _str += (_timerM > 9 ? _timerM.toString() : "0" + _timerM.toString()) + ":";
         }
         if (_timerS >= 0) {
            _str += Math.floor(_timerS) > 9 ? Math.floor(_timerS).toString() : "0" + Math.floor(_timerS).toString();
         }
      }
      return _str;
   }

   static formatTime_day(_timeNum) {
      let _timerHs = Math.floor(_timeNum / 3600);
      let _day = Math.floor(_timerHs / 24);
      let _timerM = Math.ceil(_timeNum / 60) % 60;
      let _timerH = _timerHs % 24;
      let _str = "";
      if (_day > 0) {
         _str = _day.toString() + GlobalDataGetValue.getLanguageStr(20);
      }
      if (_timerH > 0) {
         _str += _timerH.toString() + GlobalDataGetValue.getLanguageStr(21);
      }
      if (_timerM > 0) {
         _str += _timerM.toString() + GlobalDataGetValue.getLanguageStr(22);
      }
      return _str;
   }

   static formatTime_M(_timeNum, isChinese = false) {
      let _timerM = Math.floor(_timeNum / 60) % 60;
      let _timerH = Math.floor(_timeNum / 3600);
      let _str = "";
      if (isChinese) {
         if (_timerH > 0) {
            _str = _timerH.toString() + GlobalDataGetValue.getLanguageStr(21);
            return _str + (_timerM.toString() + GlobalDataGetValue.getLanguageStr(22));
         }
         if (_timerM > 0) {
            return _str + (_timerM.toString() + GlobalDataGetValue.getLanguageStr(22));
         }
         return GlobalDataGetValue.getLanguageStr(24);
      }
      if (_timerH >= 0) {
         _str = _timerH.toString() + ":";
      }
      if (_timerM >= 0) {
         _str += _timerM.toString() + ":";
      }
      return _str;
   }

   static isAllEmbed(_str) {
      let i = 0;
      let _char = null;
      let _embed = GlobalData.EMBED;
      for (i = 0; i < _str.length; i++) {
         _char = _str.charAt(i);
         if (_embed.indexOf(_char) == -1) {
            return false;
         }
      }
      return true;
   }

   static getElementNum(_obj) {
      let k = undefined;
      let _num = 0;
      for (k in _obj) {
         _num++;
      }
      return _num;
   }

   static randomElement(_obj) {
      let k = undefined;
      let _num = 0;
      let _max = Tools.getElementNum(_obj);
      let _random = Math.floor(Math.random() * _max);
      for (k in _obj) {
         _num++;
         if (_num == _random) {
            return k;
         }
      }
      return null;
   }

   static formatHtmlText_normal(_str, _lineMax = 10, _color = 3355443, _font = "") {
      return Tools.formatHtmlText(_str, _color, false, 14, _font, _lineMax);
   }

   static getSimpleNumStr(_num, _char_w = false) {
      let _str = null;
      if (_num > 10000) {
         _str = !!_char_w ? GlobalDataGetValue.getLanguageStr(116) : GlobalDataGetValue.getLanguageStr(108);
         return Math.round(_num / 10000) + _str;
      }
      return String(_num);
   }

   static getValueByIndex(_index, _srcData) {
      let k = undefined;
      let _minMax = null;
      for (k in _srcData) {
         if (k != Tools.DEFAULT) {
            _minMax = Tools.getIDPos(k);
            if (_index >= _minMax.x && _index <= _minMax.y) {
               return _srcData[k];
            }
         }
      }
      if (_srcData[Tools.DEFAULT] != null) {
         return _srcData[Tools.DEFAULT];
      }
      return 1;
   }

   static getIDPos(_id) {
      let _index = _id.indexOf("_");
      let _pos = new Point();
      _pos.x = int(_id.slice(0, _index));
      _pos.y = int(_id.slice(_index + 1, _id.length));
      return _pos;
   }

   static fillSpace(_srcStr, _lineMax = 10, _isFront = true) {
      let _codeNum = 0;
      let i = 0;
      let _code = 0;
      let _allCodeNum = 0;
      let _str = "";
      for (i = 0; i < _srcStr.length; i++) {
         _code = _srcStr.charCodeAt(i);
         if (_code >= 32 && _code <= 126) {
            _codeNum = 1;
         } else {
            _codeNum = 2;
         }
         _allCodeNum += _codeNum;
      }
      for (i = _allCodeNum; i < _lineMax; i++) {
         _str += " ";
      }
      if (_isFront) {
         _str += _srcStr;
      } else {
         _str = _srcStr + _str;
      }
      return _str;
   }

   static formatHtmlText(_str, _color = 3355443, _b = false, _size = 14, _font = "", _lineMax = 12, _exception = null) {
      let _msg_group = "";
      let _char = "";
      let _lastStr = "";
      let _colorStr = "#" + _color.toString(16);
      if (_font == "") {
         _font = "SimHei";
      }
      if (_lineMax < 1000) {
         _msg_group = _str;
         _lastStr = Tools.formatLine(_msg_group, "\n", _lineMax * 2, _exception);
      } else {
         _lastStr = _str;
      }
      if (_b) {
         return "<font color=\"" + _colorStr + "\" size=\"" + _size + "\" face=\"" + _font + "\"><b>" + _lastStr + "</b></font>";
      }
      return "<font color=\"" + _colorStr + "\" size=\"" + _size + "\" face=\"" + _font + "\">" + _lastStr + "</font>";
   }

   static getLine(_length = 40, _code = "=", _align = "", _size = 5) {
      let i = 0;
      let _str = "";
      if (_code == "") {
         _code = "=";
      }
      if (_align == "") {
         _align = "left";
      }
      for (i = 0; i < _length; i++) {
         _str += _code;
      }
      return HtmlTextFormat.format(_str, _align, 6316128, _size);
   }

   static formatHtmlTextBr(_arr, _align = "left") {
      let _msg = "";
      for (let i = 0; i < _arr.length; i++) {
         _msg += "<P ALIGN=\"" + _align + "\">" + _arr[i] + "</P>";
      }
      return _msg;
   }

   static formatLine(_srcStr, _insertStr = "\n", _lineMax = 16, _exception = null) {
      let _checkNum = 0;
      let _codeNum = 0;
      let _code = 0;
      let _char = null;
      let _str = "";
      let _tempStr = "";
      let _lineNum = 0;
      if (_exception == null) {
         _exception = [];
      }
      if (_lineMax <= 1) {
         _lineMax = 2;
      }
      for (_checkNum = 0; _checkNum < _srcStr.length; _checkNum++) {
         _code = _srcStr.charCodeAt(_checkNum);
         _char = _srcStr.charAt(_checkNum);
         if (_char == "\n") {
            _lineNum = 0;
            _str += _char;
         } else {
            if (_exception.indexOf(_char) != -1) {
               _codeNum = 0;
            }
            else if (_code >= 32 && _code <= 126) {
               _codeNum = 1;
            } else {
               _codeNum = 2;
            }
            _lineNum += _codeNum;
            if (_lineNum > _lineMax) {
               _str += _insertStr;
               _lineNum = _codeNum;
            }
            _str += _char;
         }
      }
      return _str;
   }

   static clearLine(_srcStr) {
      _srcStr = _srcStr.replace("\n", "");
      _srcStr = _srcStr.replace("<br>", "");
      return _srcStr.replace("</br>", "");
   }

   static isHtml(_str) {
      let i = _str.indexOf("<");
      let j = _str.indexOf(">");
      if (i != -1 && j != -1 && i < j) {
         return true;
      }
      return false;
   }

   static insertStr(_srcStr, _insertStr = "\n", _spaceNum = 4, _loopMax = 1) {
      let _str = "";
      let _tempStr = "";
      let _checkNum = 0;
      let _loopNum = 0;
      if (_loopMax <= 0) {
         _loopMax = int.MAX_VALUE;
      }
      if (_spaceNum <= 0) {
         _spaceNum = 1;
      }
      while (_loopNum < _loopMax) {
         _tempStr = _srcStr.substr(_loopNum * _spaceNum, _spaceNum);
         _loopNum++;
         if (_tempStr.length != _spaceNum) {
            _str += _tempStr;
         }
         _tempStr += _insertStr;
         _str += _tempStr;
      }
      return _str + _srcStr.substr(_loopNum * _spaceNum);
   }

   static getGlobalAttValue_byID(_globalAttName, _id = 0) {
      return _globalAttName["id_" + _id];
   }

   static imgLoadByHtmlTxt(_txtF, _imgURL, _w = 50, _h = 50) {
      try {
         if (_imgURL == "" || _imgURL == null || _imgURL.length < 9) {
            Tools.imgLoadByHtmlTxt(_txtF, GlobalData.$_urlMaterial + GlobalData.$_user_default_headurl);
         } else {
            _txtF.htmlText = "<img src=\"" + _imgURL + "\" hspace=\"0\" vspace=\"0\" width=\"" + _w + "\" height=\"" + _h + "\" />";
         }
      }
      catch (e) {
         trace("error have img url");
         Tools.imgLoadByHtmlTxt(_txtF, GlobalData.$_urlMaterial + GlobalData.$_user_default_headurl);
      }
   }

   static nameFormat(_name) {
      if (_name == null || _name.length == 0) {
         return GlobalDataGetValue.getDataProfileTxt(GlobalData.$_user_default_name);
      }
      return GlobalDataGetValue.getDataProfileTxt(_name);
   }

   static addObjectNewAtt(_obj, _newObj) {
      let i = null;
      if (!this.Tools.isNullAndUndefined(_newObj)) {
         for (i in _newObj) {
            _obj[i] = _newObj[i];
         }
      }
      return _obj;
   }

   static isSameDate(_a, _b) {
      if (!_a || !_b) {
         return false;
      }
      if (_a.getUTCFullYear() == _b.getUTCFullYear() && _a.getUTCMonth() == _b.getUTCMonth() && _a.getUTCDate() == _b.getUTCDate()) {
         return true;
      }
      return false;
   }

   static getRandom(_min, _max) {
      let _temp = 0;
      if (_min == _max) {
         return _min;
      }
      if (_min > _max) {
         _temp = _min;
         _min = _max;
         _max = _temp;
      }
      _temp = _max - _min + 1;
      return Math.floor(_min + Math.random() * _temp);
   }

   static clone(_obj) {
      let _copier = new ByteArray();
      _copier.writeObject(_obj);
      _copier.position = 0;
      return _copier.readObject();
   }

   static replaceString(_srcStr, _findStr, _placeStr) {
      let reg = new RegExp(_findStr, "g");
      return _srcStr.replace(reg, _placeStr);
   }

   static getDateSecond(_date) {
      return Math.floor(_date.getTime() * 0.001);
   }

   static drawRoundRectFun(_w, _h, _r, _color = 16777215, _alpha = 1) {
      let _txtBg = new Sprite();
      _txtBg.graphics.beginFill(_color, _alpha);
      _txtBg.graphics.drawRoundRect(0, 0, _w, _h, _r, _r);
      _txtBg.graphics.endFill();
      return _txtBg;
   }

   static strIsNULL(_str) {
      trace("*******Tools.strIsNULL******", _str == null, _str);
      if (_str == "" || _str == null || _str == undefined) {
         return true;
      }
      return false;
   }

   static isTrueClass_self(_obj, _className = "") {
      let _b = false;
      if (String(getQualifiedClassName(_obj)).split("::")[1] == _className) {
         _b = true;
      }
      return _b;
   }

   static copyObject(_objectToCopy) {
      let _stream = new ByteArray();
      _stream.writeObject(_objectToCopy);
      _stream.position = 0;
      return _stream.readObject();
   }

   static isNoChildrenInArr(_arr) {
      let _b = false;
      if (_arr != null) {
         if (_arr.length > 0) {
            _b = false;
         } else {
            _b = true;
         }
      } else {
         _b = true;
      }
      return _b;
   }

   static isNoChildrenInObj(_obj) {
      let _num = 0;
      let i = null;
      let _b = true;
      if (_obj) {
         _num = 0;
         for (i in _obj) {
            _num++;
         }
         if (_num > 0) {
            _b = false;
         }
      }
      return _b;
   }

   static strMaxLength(_str, _length = 5) {
      if (GlobalData.$_snsId == "aima") {
         return _str.substr(0, 15);
      }
      return _str.substr(0, _length);
   }

   static toString(obj, _step = 0, _isTranslate = false) {
      let i = 0;
      let j = 0;
      let k = null;
      let _regExp = null;
      let resultStr = "";
      _step++;
      if (obj == null) {
         return "null";
      }
      let type = typeof obj;
      let num = 0;
      switch (type) {
         case "number":
            return obj.toString() + "";
         case "string":
            return "\"" + obj + "\"";
         case "object":
            if (obj instanceof Array) {
               num = this.Tools.getElementNum(obj);
               if (num > 1) {
                  if (_step > 1) {
                     resultStr += "\n";
                  }
                  for (j = 0; j < _step - 1; j++) {
                     resultStr += "\t";
                  }
               }
               resultStr += "[";
               for (i = 0; i < obj.length; i++) {
                  if (num > 1) {
                     resultStr += "\n";
                     for (j = 0; j < _step; j++) {
                        resultStr += "\t";
                     }
                  }
                  resultStr += Tools.toString(obj[i], _step);
                  resultStr += ",";
               }
               if (num > 0) {
                  resultStr = resultStr.slice(0, resultStr.length - 1);
               }
               if (num > 1) {
                  resultStr += "\n";
                  for (j = 0; j < _step - 1; j++) {
                     resultStr += "\t";
                  }
               }
               resultStr += "]";
            }
            else if (obj instanceof Date) {
               resultStr = "new Date(" + obj.getTime() + ")";
            } else {
               num = this.Tools.getElementNum(obj);
               if (num > 1) {
                  if (_step > 1) {
                     resultStr += "\n";
                  }
                  for (j = 0; j < _step - 1; j++) {
                     resultStr += "\t";
                  }
               }
               resultStr += "{";
               for (k in obj) {
                  if (num > 1) {
                     resultStr += "\n";
                     for (j = 0; j < _step; j++) {
                        resultStr += "\t";
                     }
                  }
                  _regExp = /\D/ig;
                  if (!isNaN(Number(k.slice(0, 1))) || k.search(/[^a-zA-Z0-9_]/) != -1) {
                     resultStr += "\"" + k + "\":" + Tools.toString(obj[k], _step);
                  } else {
                     resultStr += k + ":" + Tools.toString(obj[k], _step);
                  }
                  resultStr += ",";
               }
               if (num > 0) {
                  resultStr = resultStr.slice(0, resultStr.length - 1);
               }
               if (num > 1) {
                  resultStr += "\n";
                  for (j = 0; j < _step - 1; j++) {
                     resultStr += "\t";
                  }
               }
               resultStr += "}";
            }
            break;
         case "boolean":
            return obj.toString() + "";
      }
      return resultStr;
   }

   static randomArray(_sArr) {
      _sArr.sort(function () {
         return Math.random() > 0.5 ? -1 : 1;
      });
      return _sArr;
   }

   static getTodayEndUTCTime(_nowDate) {
      return new Date(_nowDate.getUTCFullYear(), _nowDate.getUTCMonth(), _nowDate.getUTCDate(), 23, 59, 59);
   }

   static idToOpenId(_id, _snsId = "") {
      let _length = 0;
      let i = 0;
      if (_snsId == "") {
         _snsId = GlobalString.SNS_ID_QQ;
      }
      if (!isNaN(Number(_id)) && _snsId == GlobalString.SNS_ID_QQ) {
         _id = Number(_id).toString(16);
         _id = _id.toUpperCase();
         _length = _id.length;
         for (i = 0; i < 32 - _length; i++) {
            _id = "0" + _id;
         }
      }
      return _id;
   }

   static openIdToId(_id, _snsId = "") {
      if (_snsId == "") {
         _snsId = GlobalString.SNS_ID_QQ;
      }
      if (_snsId == GlobalString.SNS_ID_QQ) {
         _id = parseInt(_id, 16).toString(10);
      }
      return _id;
   }

   static replaceAllBySplit(_strSource, _strReplaceFrom, _strRepalceTo) {
      return _strSource == null ? null : _strSource.split(_strReplaceFrom).join(_strRepalceTo);
   }

   static formatNumberToString(_num) {
      let _str = null;
      if (_num >= 1000 && _num <= 9999) {
         _num = Math.floor(_num * 0.001);
         _str = _num.toString() + "千";
      }
      else if (_num >= 10000) {
         _num = Math.floor(_num * 0.0001);
         _str = _num.toString() + "万";
      } else {
         _str = _num.toString();
      }
      return _str;
   }

   static formatFriendList(_arr1, _arr2) {
      let i = 0;
      if (_arr1 == null) {
         return [];
      }
      let myUID = GlobalData.$_GAME_userData.uid;
      if (_arr2 == null) {
         _arr2 = [];
      }
      let _arr = _arr1.concat();
      for (let m = 0; m < _arr.length; m++) {
         if (myUID == _arr[m].uid) {
            _arr.splice(m, 1);
         }
      }
      for (let j = 0; j < _arr2.length; j++) {
         for (i = _arr.length - 1; i >= 0; i--) {
            if (_arr[i].uid == _arr2[j]) {
               _arr.splice(i, 1);
            }
         }
      }
      return _arr;
   }

   static getFriendUID(_arr) {
      if (_arr == null) {
         return [];
      }
      let _array = [];
      for (let i = 0; i < _arr.length; i++) {
         _array.push(_arr[i]["uid"]);
      }
      return _array;
   }

   static get_snsid_pf() {
      if (GlobalData.$_snsId == "th" || GlobalData.$_snsId == "aima" || GlobalData.$_referer == "tapp" || GlobalData.$_snsId == "mbga" || GlobalData.$_referer == "3366") {
         return true;
      }
      return false;
   }
}
