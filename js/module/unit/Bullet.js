import { BulletManager } from "../../command/unit.js";
import { BaseUnit } from "./BaseUnit.js";
import { TrapData } from "../../command/unit.js";

export class Bullet extends BaseUnit {
   static MAX_LIFE_FRAME = 50;
   static MAX_HEIGHT = 5000;
   source;
   target;
   targetPoint;
   damage;
   range;
   attackType;

   constructor(_dataId) {
      super();
      this.m_data = BulletManager.getOnlyExample().getData(_dataId);
      this.attackType = TrapData.EFFECT_TYPE_ALL;
   }

   get srcTower() {
      return this.source;
   }

   get srcTrap() {
      return this.source;
   }

   get bulletData() {
      return this.m_data;
   }


}
