
export class HtmlTextFormat {

   static bold(_str) {
      return "<b>" + _str + "</b>";
   }

   static font(_str, _color = 6316128, _size = 14, _font = "") {
      let _colorStr = "#" + _color.toString(16);
      if (_font == "") {
         _font = GlobalData.FONT0;
      }
      return "<FONT FACE=\"" + _font + "\" SIZE=\"" + _size + "\" COLOR=\"" + _colorStr + "\">" + _str + "</FONT>";
   }

   static get br() {
      return "<br>";
   }

   static paragraph(_str, _align) {
      return "<P ALIGN=\"" + _align + "\">" + _str + "</P>";
   }

   static format(_str, _align = "", _color = 6316128, _size = 14, _font = "") {
      if (_align == "") {
         _align = "center";
      }
      if (_size >= 15) {
         return HtmlTextFormat.paragraph(HtmlTextFormat.font(HtmlTextFormat.bold(_str), _color, _size, _HtmlTextFormat.font), _align);
      }
      return HtmlTextFormat.paragraph(HtmlTextFormat.font(_str, _color, _size, _HtmlTextFormat.font), _align);
   }

   static marker(_str, _color = 13647872) {
      let pattern = null;
      let _colorStr = null;
      _colorStr = "#" + _color.toString(16);
      pattern = /【/g;
      _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\"><b>【");
      pattern = /】/g;
      return _str.replace(pattern, "】</b></FONT>");
   }

   static multiColorText(_str, _colorList = null, _size = 14, _lineMax = 10) {
      let _color0 = 0;
      let _color1 = 0;
      let _color2 = 0;
      let _color3 = 0;
      let _colorStr = null;
      let pattern = null;
      if (_colorList == null) {
         _colorList = [0];
      }
      let _exception = [];
      let _font = "";
      _color0 = _colorList[0];
      if (_colorList[1]) {
         _color1 = _colorList[1];
         _exception.push("(", ")");
      } else {
         _color1 = _color0;
      }
      if (_colorList[2]) {
         _color2 = _colorList[2];
         _exception.push("[", "]");
      } else {
         _color2 = _color0;
      }
      if (_colorList[3]) {
         _color3 = _colorList[3];
         _exception.push("{", "}");
      } else {
         _color3 = _color0;
      }
      _str = Tools.formatHtmlText(_str, _color0, false, _size, _font, _lineMax, _exception);
      if (_colorList[1]) {
         _colorStr = "#" + _color1.toString(16);
         pattern = /\(/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\">");
         pattern = /\)/g;
         _str = _str.replace(pattern, "</FONT>");
      }
      if (_colorList[2]) {
         _colorStr = "#" + _color2.toString(16);
         pattern = /\[/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\"><b>");
         pattern = /\]/g;
         _str = _str.replace(pattern, "</b></FONT>");
      }
      if (_colorList[3]) {
         _colorStr = "#" + _color3.toString(16);
         pattern = /\{/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\"><b>");
         pattern = /\}/g;
         _str = _str.replace(pattern, "</b></FONT>");
      }
      return _str;
   }

   static changeColor(_str, _colorList) {
      let _colorStr = null;
      let pattern = null;
      if (_colorList[1]) {
         _colorStr = "#" + _colorList[1].toString(16);
         pattern = /\(/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\">");
         pattern = /\)/g;
         _str = _str.replace(pattern, "</FONT>");
      }
      if (_colorList[2]) {
         _colorStr = "#" + _colorList[2].toString(16);
         pattern = /\[/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\"><b>");
         pattern = /\]/g;
         _str = _str.replace(pattern, "</b></FONT>");
      }
      if (_colorList[3]) {
         _colorStr = "#" + _colorList[3].toString(16);
         pattern = /\{/g;
         _str = _str.replace(pattern, "<FONT COLOR=\"" + _colorStr + "\"><b>");
         pattern = /\}/g;
         _str = _str.replace(pattern, "</b></FONT>");
      }
      return _str;
   }
}
