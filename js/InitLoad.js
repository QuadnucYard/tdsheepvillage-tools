import { GlobalData } from "./ado/GlobalData.js";

export class InitLoad {
    static loaded=false;
    static callbacks=[]

    static ready(func) {
        if (InitLoad.loaded) {
            func();
        } else {
            InitLoad.callbacks.push(func);
        }
    }
}

!function () {
    //GlobalData.$_global_language_str=
    console.log("InitLoad");

    $.get("static/string_cn.xml", data => GlobalData.$_global_language_str = data, "xml");
    $.get("static/sys_config.json", data => {
        GlobalData.$_global_properties = data.properties;
        GlobalData.$_skillAtt_Obj = data.skill;
        GlobalData.$_skillPackage_Obj = data.skill_package;
        GlobalData.$_map_Obj = data.umaps;
        GlobalData.$_tower_worth_factor = data["camp_system_simple"]["tower_worth_factor"];
        GlobalData.$_wolf_worth_factor = data["camp_system_simple"]["wolf_worth_factor"];
        GlobalData.$_towerAtt_Obj = data.building.tower;
        GlobalData.$_bulletAtt_Obj = data.bullet;
        GlobalData.$_wolfAtt_Obj = data.wolfs;
        GlobalData.$_wallAtt_Obj = data.building["wall"];
        GlobalData.$_barrierAtt_Obj = data.barrier;
        GlobalData.$_level_up_gift = data.level_up_gift;
        GlobalData.$_pass_map_gift = data.pass_map_gift;

        let _pvp = data["camp_system_simple"];
        if (_pvp) {
            GlobalData.$_camp_wolf_lv_max = _pvp["wolf_lv_max"];
        }

        GlobalData.umapsById = _.map(data.umaps, (t, k) => [k, t]).sort((p1, p2) => {
            return compareNumber(
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p1[0].last()) ? p1[0] : p1[0] + "A")[0], 36),
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p2[0].last()) ? p2[0] : p2[0] + "A")[0], 36),
            );
        });

        InitLoad.loaded=true;
        InitLoad.callbacks.forEach(t=>t());
        InitLoad.callbacks.clear();
    }, "json");
}();

