import { GlobalData } from "./ado/GlobalData.js";

export class InitLoad {
    static loaded = false;
    static callbacks = []

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
        GlobalData.$Maps = data["version_ctrl"]["Maps"];

        let _pvp = data["camp_system_simple"];
        if (_pvp) {
            GlobalData.$_wolfs_unlock_lv = _pvp["camp_wolf_lv_max_factor"];
            GlobalData.$_wolfs_unlock_gold = _pvp["camp_wolf_gold_max_factor"];
            GlobalData.$_wolfs_unlock_properties = _pvp["camp_wolf_properties_max_factor"];
            GlobalData.$_camp_hold_time = _pvp["hold_tim"];
            GlobalData.$_camp_pk_cd_time = _pvp["pk_cd_time"];
            GlobalData.$_camp_pk_times_max = _pvp["pk_times_max"];
            GlobalData.$_camp_defend_times_max = _pvp["defend_times_max"];
            GlobalData.$_camp_pk_arena_times_max = _pvp["pk_arena_times_max"];
            GlobalData.$_camp_defend_arena_times_max = _pvp["defend_arena_times_max"];
            GlobalData.$_camp_mining_rate = _pvp["mine_rate"];
            GlobalData.$_camp_sell_building_dis = _pvp["sell_building_dis"];
            GlobalData.$_tower_worth_factor = _pvp["tower_worth_factor"];
            GlobalData.$_wolf_worth_factor = _pvp["wolf_worth_factor"];
            GlobalData.$_defend_map_snarp_max = _pvp["defend_map_snarp_max"];
            GlobalData.$_defend_succ_factor = _pvp["defend_succ_factor"];
            GlobalData.$_defend_failed_factor = _pvp["defend_failed_factor"];
            GlobalData.$_defend_arena_succ_factor = _pvp["defend_arena_succ_factor"];
            GlobalData.$_defend_arena_failed_factor = _pvp["defend_arena_failed_factor"];
            GlobalData.$_conflict_skill_kind = _pvp["conflict_skill_kind"];
            GlobalData.$_skill_lvup_spend = _pvp["skill_lvup_spend"];
            GlobalData.$_skill_grade_score = _pvp["skill_grade_score"];
            GlobalData.$_camp_use_exp_wolf_max = _pvp["use_exp_wolf_max"];
            GlobalData.$_camp_use_exp_tower_max = _pvp["use_exp_tower_max"];
            GlobalData.$_camp_wolf_lv_max = _pvp["wolf_lv_max"];
            GlobalData.$_camp_need_user_level = _pvp["camp_need_user_level"];
            GlobalData.$_camp_arena_need_user_level = _pvp["arena_need_user_level"];
            GlobalData.$_camp_create_mine_help_max = _pvp["create_mine_help_max"];
            GlobalData.$_camp_create_mine_help_friends_num = _pvp["create_mine_help_friends_num"];
            GlobalData.$_camp_create_mine_help_reduce_time = _pvp["create_mine_help_reduce_time"];
        }

        GlobalData.umapsById = _.map(data.umaps, (t, k) => [k, t]).sort((p1, p2) => {
            return compareNumber(
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p1[0].last()) ? p1[0] : p1[0] + "A")[0], 36),
                parseInt(/(?<=m).+(?=[A-Z]*)/.exec(isAlpha(p2[0].last()) ? p2[0] : p2[0] + "A")[0], 36),
            );
        });

        InitLoad.loaded = true;
        InitLoad.callbacks.forEach(t => t());
        InitLoad.callbacks.clear();
    }, "json");
}();

