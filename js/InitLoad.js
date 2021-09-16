import { GlobalData } from "./ado/GlobalData.js";

!function () {
    //GlobalData.$_global_language_str=
    console.log("InitLoad");

    $.get("static/string_cn.xml", data => GlobalData.$_global_language_str = data, "xml");
    $.get("static/sys_config.json", data => {
        GlobalData.$_global_properties = data.properties;
        GlobalData.$_skillAtt_Obj = data.skill;
        GlobalData.$_skillPackage_Obj = data.skill_package;
        GlobalData.$_tower_worth_factor = data["camp_system_simple"]["tower_worth_factor"];
        GlobalData.$_towerAtt_Obj = data.building["tower"];
        GlobalData.$_bulletAtt_Obj = data.bullet;
        GlobalData.umapsById = _.map(config["umaps"], (t, k) => [k, t]).sort((p1, p2) => {
            return compareNumber(
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p1[0].last()) ? p1[0] : p1[0] + "A")[0], 36),
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p2[0].last()) ? p2[0] : p2[0] + "A")[0], 36),
            );
        });
    }, "json");
}();
