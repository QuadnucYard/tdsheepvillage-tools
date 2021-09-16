export class Position {

   static LANDFORM_X = 65;
   static LANDFORM_Y = 50;
   static LANDFORM_Z = 50;
   static FLOOR_SCALE = Position.LANDFORM_X / Position.LANDFORM_Y;
   static SUB_GRID_AMOUNT = 1000;
   static SUB_X = Position.LANDFORM_X / Position.SUB_GRID_AMOUNT;
   static SUB_Y = Position.LANDFORM_Y / Position.SUB_GRID_AMOUNT;
   static SUB_Z = Position.LANDFORM_Z / Position.SUB_GRID_AMOUNT;
   static ENTER_DISTANCE = 200;
   static MAP_SCALE = 0.05;
   static MAP_X = Position.LANDFORM_X * Position.MAP_SCALE;
   static MAP_Y = Position.LANDFORM_Y * Position.MAP_SCALE;
   static MAP_SUB_X = Position.MAP_X / Position.SUB_GRID_AMOUNT;
   static MAP_SUB_Y = Position.MAP_Y / Position.SUB_GRID_AMOUNT;
   static MAP_DEFAULT_X = 8;
   static MAP_DEFAULT_Y = 8;
   static MAP_MAX_X = 30;
   static MAP_MIN_X = 1;
   static MAP_MAX_Y = 30;
   static MAP_MIN_Y = 1;
   static MAP_MAX_AREA = 600;
   static MAP_MIN_AREA = 4;
   static DIR_AMOUNT = 4;
   static DIR_RIGHT = 0;
   static DIR_DOWN = 1;
   static DIR_LEFT = 2;
   static DIR_UP = 3;
   static DIR = "dir";
   static POINT = "point";

   static gridToVector(_x = 0, _y = 0) {
      return new Point(Math.atan2(_y, _x), new Point(_x, _y).length);
   }

   static vectorToGrid(_r, _dis) {
      return new Point(Math.cos(_r) * _dis, Math.sin(_r) * _dis);
   }

   static gridToPixel(_x = 0, _y = 0, _xGrid = 1, _yGrid = 1) {
      let point = Position.gridToSubGrid(new Point(_x, _y), _xGrid, _yGrid);
      return Position.subGridToPixel(point.x, point.y);
   }

   static pixelToGrid(_x = 0, _y = 0, _xGrid = 1, _yGrid = 1) {
      let point = Position.pixelToSubGrid(_x, _y);
      return Position.subGridToGrid(point, _xGrid, _yGrid);
   }

   static subGridToPixel(_x = 0, _y = 0, _z = 0) {
      let point = new Point();
      point.x = Math.round(_x * Position.SUB_X);
      point.y = Math.round(_y * Position.SUB_Y - _z * Position.SUB_Z);
      return point;
   }

   static pixelToSubGrid(_x = 0, _y = 0) {
      let point = new Point();
      point.x = Math.round(_x / Position.SUB_X);
      point.y = Math.round(_y / Position.SUB_Y);
      return point;
   }

   static gridToSubGrid(gridPoint, _xGrid = 1, _yGrid = 1) {
      if (gridPoint == null) {
         return null;
      }
      let subGridPoint = new Point();
      subGridPoint.x = Position.gridToSubGridSolo(gridPoint.x, _xGrid);
      subGridPoint.y = Position.gridToSubGridSolo(gridPoint.y, _yGrid);
      return subGridPoint;
   }

   static gridToSubGridSolo(offset, _grid = 1) {
      return Math.floor((offset + (_grid - 1) / 2) * Position.SUB_GRID_AMOUNT);
   }

   static subGridToGrid(subGridPoint, _xGrid = 1, _yGrid = 1) {
      if (subGridPoint == null) {
         return null;
      }
      let gridPoint = new Point();
      gridPoint.x = Position.subGridToGridSolo(subGridPoint.x, _xGrid);
      gridPoint.y = Position.subGridToGridSolo(subGridPoint.y, _yGrid);
      return gridPoint;
   }

   static subGridToGridSolo(offset, _grid = 1) {
      return Math.round(offset / Position.SUB_GRID_AMOUNT + (1 - _grid) / 2);
   }

   static getMapStartPoint(_x = 8, _y = 8, scaleXY = 1.0) {
      let point = new Point();
      point.x = Position.SCREEN_CENTER_POINT.x - _x * Position.LANDFORM_X / 2 * scaleXY;
      point.y = Position.SCREEN_CENTER_POINT.y - _y * Position.LANDFORM_Y / 2 * scaleXY;
      return point;
   }

   static getWolfStartPoint(_x, _y, scaleXY = 1.0) {
      let point = new Point();
      point.x = Position.SCREEN_CENTER_POINT.x - _x / Position.SUB_GRID_AMOUNT * Position.LANDFORM_X * scaleXY;
      point.y = Position.SCREEN_CENTER_POINT.y - _y / Position.SUB_GRID_AMOUNT * Position.LANDFORM_Y * scaleXY;
      return point;
   }

   static checkStep(_currentPos, _vector, _step) {
      let _dir = 0;
      let _finalPoint = null;
      let _finalPos = new Object();
      if (Math.abs(_vector.x) < Math.abs(_vector.y)) {
         if (Math.abs(_vector.x) >= _step) {
            if (_vector.x > 0) {
               _finalPoint = new Point(_currentPos.x + _step, _currentPos.y);
               _dir = Position.DIR_RIGHT;
            } else {
               _finalPoint = new Point(_currentPos.x - _step, _currentPos.y);
               _dir = Position.DIR_LEFT;
            }
         }
         else if (_vector.y > 0) {
            _finalPoint = new Point(_currentPos.x + _vector.x, _currentPos.y + (_step - Math.abs(_vector.x)));
            _dir = Position.DIR_DOWN;
         } else {
            _finalPoint = new Point(_currentPos.x + _vector.x, _currentPos.y - (_step - Math.abs(_vector.x)));
            _dir = Position.DIR_UP;
         }
      }
      else if (Math.abs(_vector.y) >= _step) {
         if (_vector.y > 0) {
            _finalPoint = new Point(_currentPos.x, _currentPos.y + _step);
            _dir = Position.DIR_DOWN;
         } else {
            _finalPoint = new Point(_currentPos.x, _currentPos.y - _step);
            _dir = Position.DIR_UP;
         }
      }
      else if (_vector.x > 0) {
         _finalPoint = new Point(_currentPos.x + (_step - Math.abs(_vector.y)), _currentPos.y + _vector.y);
         _dir = Position.DIR_RIGHT;
      } else {
         _finalPoint = new Point(_currentPos.x - (_step - Math.abs(_vector.y)), _currentPos.y + _vector.y);
         _dir = Position.DIR_LEFT;
      }
      _finalPos[Position.DIR] = _dir;
      _finalPos[Position.POINT] = _finalPoint;
      return _finalPos;
   }

   static toPercentage(_num) {
      return String(Math.round(_num * 100*100)/100 + "%");
   }

   static toGridStr(_subGrid) {
      return String(Math.round(_subGrid / 100) / 10);
   }

   static getPosID(_x, _y) {
      return _x + "_" + _y;
   }

   static getIDPos(_id) {
      let _index = _id.indexOf("_");
      let _pos = new Point();
      _pos.x = parseInt(_id.slice(0, _index));
      _pos.y = parseInt(_id.slice(_index + 1, _id.length));
      return _pos;
   }

   static getRandomPos(_pos, _radii) {
      let _rndPos = new Point(_pos.x, _pos.y);
      _rndPos.x = _rndPos.x + Math.random() * _radii * 2 - _radii;
      _rndPos.y = _rndPos.y + Math.random() * _radii * 2 - _radii;
      return _rndPos;
   }

   static getBetweenPosList(_pos1, _pos2) {
      let i = 0;
      let _dis = 0;
      let _pos = null;
      let _arr = [];
      if (_pos1.x == _pos2.x) {
         _dis = _pos1.y - _pos2.y;
         if (Math.abs(_dis) <= 1) {
            return _arr;
         }
         i = _dis > 0 ? 1 : -1;
         while (_pos1.y != _pos2.y + i) {
            _pos = new Point(_pos2.x, _pos2.y + i);
            i += _dis > 0 ? 1 : -1;
            if (_pos.y != _pos2.y) {
               _arr.unshift(_pos);
            }
         }
      } else {
         if (_pos1.y != _pos2.y) {
            return null;
         }
         _dis = _pos1.x - _pos2.x;
         if (Math.abs(_dis) <= 1) {
            return _arr;
         }
         i = _dis > 0 ? 1 : -1;
         while (_pos1.x != _pos2.x + i) {
            _pos = new Point(_pos2.x + i, _pos2.y);
            i += _dis > 0 ? 1 : -1;
            if (_pos.x != _pos2.x) {
               _arr.unshift(_pos);
            }
         }
      }
      return _arr;
   }

   static getCrossPosList(_pos, _radii) {
      let i = 0;
      let _posList = [_pos];
      for (i = _pos.x - _radii; i <= _pos.x + _radii; i++) {
         if (i != _pos.x) {
            _posList.push(new Point(i, _pos.y));
         }
      }
      for (i = _pos.y - _radii; i <= _pos.y + _radii; i++) {
         if (i != _pos.y) {
            _posList.push(new Point(_pos.x, i));
         }
      }
      return _posList;
   }

   static getSquarePosList(_pos, _radii) {
      let i = 0;
      let j = 0;
      let _posList = [];
      for (i = _pos.x - _radii; i <= _pos.x + _radii; i++) {
         for (j = _pos.y - _radii; j <= _pos.y + _radii; j++) {
            _posList.push(new Point(i, j));
         }
      }
      return _posList;
   }

   static getDiamondPosList(_pos, _radii) {
      let i = 0;
      let j = 0;
      let _posList = [];
      for (i = _pos.x - _radii; i <= _pos.x + _radii; i++) {
         for (j = _pos.y - _radii; j <= _pos.y + _radii; j++) {
            if (Math.abs(i - _pos.x) + Math.abs(j - _pos.y) <= _radii) {
               _posList.push(new Point(i, j));
            }
         }
      }
      return _posList;
   }

   static getCirclePosList(_pos, _radii) {
      let i = 0;
      let j = 0;
      let _tempPos = null;
      let _posList = [];
      for (i = _pos.x - _radii; i <= _pos.x + _radii; i++) {
         for (j = _pos.y - _radii; j <= _pos.y + _radii; j++) {
            _tempPos = new Point(i - _pos.x, j - _pos.y);
            if (_tempPos.length <= _radii) {
               _posList.push(new Point(i, j));
            }
         }
      }
      return _posList;
   }

   static getRingPosList(_pos, _min, _max) {
      let i = 0;
      let j = 0;
      let _tempPos = null;
      let _posList = [];
      for (i = _pos.x - _max; i <= _pos.x + _max; i++) {
         for (j = _pos.y - _max; j <= _pos.y + _max; j++) {
            _tempPos = new Point(i - _pos.x, j - _pos.y);
            if (_tempPos.length >= _min && _tempPos.length <= _max) {
               _posList.push(new Point(i, j));
            }
         }
      }
      return _posList;
   }

   static getIntersectionPosList(_posList1, _posList2) {
      let i = 0;
      let j = 0;
      let _tempPos = null;
      let _posList = [];
      for (i = 0; i <= _posList1.length; i++) {
         for (j = 0; j <= _posList2.length; j++) {
            if (_posList1[i].x == _posList2[j].x && _posList1[i].y == _posList2[j].y) {
               _posList.push(new Point(_posList1[i].x, _posList1[i].y));
            }
         }
      }
      return _posList;
   }

   static getDistance(_pos1, _pos2) {
      return new Point(_pos1.x - _pos2.x, _pos1.y - _pos2.y).length;
   }

   static getRadians(_pos1, _pos2) {
      let _distance = null;
      _distance = new Point(_pos2.x - _pos1.x, _pos2.y - _pos1.y);
      return (Math.atan2(_distance.y, _distance.x) + Math.PI * 2) % (Math.PI * 2);
   }

   static sortPosList(_subPos, _posList) {
      let i = 0;
      let _tempSubPos = null;
      let _obj = null;
      let _sortList = [];
      let _lengthList = [];
      let _length = _posList.length;
      for (i = 0; i < _length; i++) {
         _tempSubPos = Position.gridToSubGrid(_posList[i]); // as Point
         _obj = {};
         _obj["distance"] = new Point(_subPos.x - _tempSubPos.x, _subPos.y - _tempSubPos.y).length;
         _obj["pos"] = _posList[i];
         _lengthList[i] = _obj;
      }
      _lengthList = _lengthList.sortOn("distance", Array.NUMERIC);
      for (i = 0; i < _length; i++) {
         _sortList[i] = _lengthList[i]["pos"];
      }
      return _sortList;
   }

   static getNearestSubPosInPos(_srcSubPos, _aimPos, _distance = 400) {
      let _returnSubPos = new Point();
      let _srcPos = Position.subGridToGrid(_srcSubPos); // as Point
      if (_aimPos.x < _srcPos.x) {
         _returnSubPos.x = Position.gridToSubGridSolo(_aimPos.x) + _distance;
      }
      else if (_aimPos.x > _srcPos.x) {
         _returnSubPos.x = Position.gridToSubGridSolo(_aimPos.x) - _distance;
      } else {
         _returnSubPos.x = _srcSubPos.x;
      }
      if (_aimPos.y < _srcPos.y) {
         _returnSubPos.y = Position.gridToSubGridSolo(_aimPos.y) + _distance;
      }
      else if (_aimPos.y > _srcPos.y) {
         _returnSubPos.y = Position.gridToSubGridSolo(_aimPos.y) - _distance;
      } else {
         _returnSubPos.y = _srcSubPos.y;
      }
      return _returnSubPos;
   }

   static getPosList(_pos, _x, _y) {
      let i = 0;
      let j = 0;
      let _list = [];
      let _posX = _pos.x;
      let _posY = _pos.y;
      for (i = 0; i < _x; i++) {
         for (j = 0; j < _y; j++) {
            _list.push(new Point(_posX + i, _posY + j));
         }
      }
      return _list;
   }

   static getPosIdList(_pos, _x, _y) {
      let i = 0;
      let j = 0;
      let _list = [];
      let _posX = _pos.x;
      let _posY = _pos.y;
      for (i = 0; i < _x; i++) {
         for (j = 0; j < _y; j++) {
            _list.push(this.Position.getPosID(_posX + i, _posY + j));
         }
      }
      return _list;
   }
}
