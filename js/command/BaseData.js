import { GlobalDataGetValue } from "../ado/GlobalDataGetValue.js"


export class BaseData {
    static DATA_TYPE_ID = "typeId";
    static DATA_KIND_ID = "kindId";
    static DATA_ID = "id";
    static DATA_NAME = "name";
    static DATA_INFO = "info";
    static DATA_HELP = "help";
    typeId;
    kindId;
    id;
    name;
    info;
    help;

    constructor(_data) {
        if (_data) {
            this.typeId = _data[BaseData.DATA_TYPE_ID];
            this.kindId = _data[BaseData.DATA_KIND_ID];
            this.id = _data[BaseData.DATA_ID];
            this.name = GlobalDataGetValue.getDataProfileTxt(_data[BaseData.DATA_NAME]);
            this.info = GlobalDataGetValue.getDataProfileTxt(_data[BaseData.DATA_INFO]);
            if (_data[BaseData.DATA_HELP]) {
                this.help = GlobalDataGetValue.getDataProfileTxt(_data[BaseData.DATA_HELP]);
            }
            else {
                this.help = "";
            }
        }
    }
}

export class BaseDisplayData extends BaseData {
    static TYPE_MONSTER = "wolf";
    static TYPE_TOWER = "tower";
    static TYPE_WALL = "wall";
    static TYPE_BARRIER = "barrier";
    static TYPE_ENTRANCE = "typeEntrance";
    static TYPE_EXPORT = "typeExport";
    static TYPE_BOX = "box";
    static TYPE_GEM_ITEM = "gem";
    static TYPE_TRAP_ITEM = "snarp";
    static TYPE_CARD_ITEM = "card";
    static TYPE_WOLF_CARD_ITEM = "wc";
    static TYPE_TAME_ITEM = "tame";
    static TYPE_FIX_ITEM = "bomb";
    static TYPE_MONSTER_SKILL = "monsterSkill";
    static ID_SPADE_ITEM = "mc";
    static ID_GEM_HAMMER = "gem_hammer";
    static ID_GEM_OPENER = "gem_opener";
    static DATA_RESOURCE_CLASS = "res";
    static DATA_RESOURCE_COLOR_CLASS = "resColor";
    res;
    resColor;

    constructor(_data) {
        super(_data);
        if (_data[BaseDisplayData.DATA_RESOURCE_CLASS] == null) {
            this.res = _data[BaseData.DATA_ID];
        }
        else {
            this.res = _data[BaseDisplayData.DATA_RESOURCE_CLASS];
        }
        this.resColor = _data[BaseDisplayData.DATA_RESOURCE_COLOR_CLASS];
    }
}

export class BaseManager {
    m_manager;

    constructor() {
        this.clearData();
    }

    static getResourceObject(_type, _id) {
        let _module = BaseManager.getModule(_type, _id);
        if (_module == null) {
            return null;
        }
        return _module.resourceObj;
    }

    static getResourceIcon(_id) {
        let icon = null;
        let matrix = null;
        let bitmapData = null;
        let bitmap = null;
        let mc = null;
        if (_id == "coin") {
            icon = ClassesFactory.getSWFClass("UI_icon_coin");
        }
        else if (_id == "gold") {
            icon = ClassesFactory.getSWFClass("UI_icon_gold");
        }
        else if (_id == "invite_score") {
            icon = ClassesFactory.getSWFClass("UI_icon_integral");
        }
        if (icon) {
            icon.width = icon.height = 50;
            matrix = new Matrix();
            matrix.scale(1.65, 1.65);
            bitmapData = new BitmapData(icon.width, icon.height, true, 16777215);
            bitmapData.draw(icon, matrix);
            bitmap = new Bitmap(bitmapData);
            mc = new Sprite();
            mc.x = icon.x;
            mc.y = icon.y;
            bitmap.x = -bitmap.width / 2;
            bitmap.y = -bitmap.height / 2;
            bitmap.filters = [ColorFilter.filterGlowAlphaWhite];
            mc.addChild(bitmap);
            return mc;
        }
        let _type = BaseManager.getType(_id);
        if (_type == "") {
            return null;
        }
        let _iconObj = this.BaseManager.getModule(_type, _id);
        let _temp = new Sprite();
        let _spr = new Sprite();
        if (_type == BaseDisplayData.TYPE_MONSTER) {
            _iconObj.resSwitchToIcon();
        }
        _temp.addChild(_iconObj.resourceObj);
        _temp.filters = [ColorFilter.filterGlowAlphaWhite];
        _spr.addChild(_temp);
        return _spr;
    }

    static getType(_dataId) {
        if (TowerManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_TOWER;
        }
        if (WallManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_WALL;
        }
        if (BarrierManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_BARRIER;
        }
        if (BoxManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_BOX;
        }
        if (MonsterManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_MONSTER;
        }
        if (GemManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_GEM_ITEM;
        }
        if (TrapManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_TRAP_ITEM;
        }
        if (CardManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_CARD_ITEM;
        }
        if (WolfCardManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_WOLF_CARD_ITEM;
        }
        if (TameManager.getOnlyExample().getData(_dataId)) {
            return BaseDisplayData.TYPE_TAME_ITEM;
        }
        return "";
    }

    static getModuleEasy(_id) {
        let _type = BaseManager.getType(_id);
        if (_type == "") {
            return null;
        }
        return this.BaseManager.getModule(_type, _id);
    }

    static getModule(_type, _id) {
        switch (_type) {
            case BaseDisplayData.TYPE_TOWER:
                return new Tower(_id);
            case BaseDisplayData.TYPE_WALL:
                return new Wall(_id);
            case BaseDisplayData.TYPE_BARRIER:
                return new Barrier(_id);
            case BaseDisplayData.TYPE_BOX:
                return new FallBox(_type, _id);
            case BaseDisplayData.TYPE_MONSTER:
                return new Monster(_id);
            case BaseDisplayData.TYPE_GEM_ITEM:
                return new GemItem(_id);
            case BaseDisplayData.TYPE_TRAP_ITEM:
                return new Trap(_id);
            case BaseDisplayData.TYPE_CARD_ITEM:
                return new CardItem(_id);
            case BaseDisplayData.TYPE_WOLF_CARD_ITEM:
                return new WolfCardItem(_id);
            case BaseDisplayData.TYPE_TAME_ITEM:
                return new TameItem(_id);
            case BaseDisplayData.TYPE_MONSTER_SKILL:
                return new MonsterSkill(_id, 1, null);
            default:
                return null;
        }
    }

    getDataById(_id) {
        return this.m_manager[_id];
    }

    getRandomId() {
        return Tools.randomElement(this.m_manager);
    }

    get manager() {
        return this.m_manager;
    }

    clearData() {
        this.m_manager = new Object();
    }
}
