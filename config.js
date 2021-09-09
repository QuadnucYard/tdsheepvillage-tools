const config = {
    "task": null,
    "method": "sys.get_config",
    "data": {
        "barrier": {
            "zhangai_shitou1": {
                "info": "barrier_10^使用[1]个【精良的铁镐】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "tiegao": 1
                        }
                    }
                },
                "name": "barrier_9^碎石"
            },
            "zhangai_shu4": {
                "info": "barrier_8^使用[5]个【锋利的锯子】来移除",
                "y_grid": 2,
                "x_grid": 2,
                "spend": {
                    "properties": {
                        "card": {
                            "juzi": 5
                        }
                    }
                },
                "name": "barrier_7^参天大树"
            },
            "zhangai_shitou2": {
                "info": "barrier_12^使用[2]个【精良的铁镐】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "tiegao": 2
                        }
                    }
                },
                "name": "barrier_11^石块"
            },
            "zhangai_shu2": {
                "info": "barrier_4^使用[2]个【锋利的锯子】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "juzi": 2
                        }
                    }
                },
                "name": "barrier_3^小树"
            },
            "zhangai_huoshan1": {
                "y_grid": 2,
                "value": [
                    0.02,
                    5000,
                    4
                ],
                "kindId": "1",
                "rate": 1.5,
                "spend": {},
                "info": "barrier_18^间隔7秒爆发，对大范围内的塔和狼造成不利影响",
                "x_grid": 2,
                "range": 2000,
                "effect": "effectSuicide",
                "name": "barrier_17^小火山"
            },
            "zhangai_huoshan2": {
                "y_grid": 3,
                "value": [
                    0.04,
                    10000,
                    6
                ],
                "kindId": "1",
                "rate": 1,
                "spend": {},
                "info": "barrier_20^间隔10秒爆发，对大范围内的塔和狼造成不利影响",
                "x_grid": 3,
                "range": 2500,
                "effect": "effectSuicide",
                "name": "barrier_19^大火山"
            },
            "zhangai_shitou3": {
                "info": "barrier_14^使用[3]个【精良的铁镐】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "tiegao": 3
                        }
                    }
                },
                "name": "barrier_13^大石块"
            },
            "zhangai_shu1": {
                "info": "barrier_2^使用[1]个【锋利的锯子】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "juzi": 1
                        }
                    }
                },
                "name": "barrier_1^小树苗"
            },
            "zhangai_shu3": {
                "info": "barrier_6^使用[3]个【锋利的锯子】来移除",
                "spend": {
                    "properties": {
                        "card": {
                            "juzi": 3
                        }
                    }
                },
                "name": "barrier_5^大树"
            },
            "zhangai_shitou4": {
                "info": "barrier_16^使用[5]个【精良的铁镐】来移除",
                "y_grid": 2,
                "x_grid": 2,
                "spend": {
                    "properties": {
                        "card": {
                            "tiegao": 5
                        }
                    }
                },
                "name": "barrier_15^巨大岩石"
            },
            "zhangai_fanyinglu": {
                "y_grid": 2,
                "value": [
                    2,
                    0.5,
                    1024,
                    0,
                    6,
                    0.5
                ],
                "kindId": "2",
                "rate": 1,
                "spend": {},
                "info": "barrier_22^间隔10秒爆发，对大范围内的塔和狼造成不利影响",
                "x_grid": 2,
                "range": 2000,
                "effect": "effectSuicide",
                "name": "barrier_21^反应炉"
            }
        },
        "user_costcoin": {},
        "umaps": {
            "m0D": {
                "pop_max": 89,
                "pass_score": 2000,
                "boss": [
                    "dahuil",
                    "lieshoul",
                    "sujiangl",
                    "shamofeitianl",
                    "lieshoul",
                    "sujiangl",
                    "sujiangl",
                    "shamofeitianl",
                    "xiaochoul",
                    "ybklr",
                    "sujiangl",
                    "dahuil",
                    "xiaochoul",
                    "dahuil",
                    "lieshoul",
                    "shamofeitianl",
                    "dahuil",
                    "dahuil",
                    "dahuil"
                ],
                "pass_by": [
                    "m0C"
                ],
                "interval": 2000,
                "index": 230,
                "yield_val": 120,
                "name": "银蛇之巅",
                "hard_ness": 5,
                "wolf_proportion": [
                    [
                        0.1,
                        "dahuil"
                    ],
                    [
                        0.3,
                        "shamofeitianl"
                    ],
                    [
                        0.55,
                        "xiaochoul"
                    ],
                    [
                        0.8,
                        "zibaol"
                    ],
                    [
                        1,
                        "sujiangl"
                    ]
                ],
                "need_lev": 40,
                "random_boss": [
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 2
            },
            "m9C": {
                "pop_max": 66,
                "pass_score": 1440,
                "boss": [
                    "lieshoul",
                    "wushil",
                    "tufeil",
                    "tufeil",
                    "lieshoul",
                    "pkygl",
                    "wushil",
                    "wushil",
                    "wushil",
                    "shamol",
                    "shamol",
                    "lieshoul"
                ],
                "pass_by": [
                    "m9B"
                ],
                "interval": 1800,
                "index": 160,
                "yield_val": 80,
                "name": "西利村",
                "hard_ness": 4.1,
                "wolf_proportion": [
                    [
                        0.65,
                        "shamol"
                    ],
                    [
                        0.75,
                        "lieshoul"
                    ],
                    [
                        0.85,
                        "wushil"
                    ],
                    [
                        1,
                        "tufeil"
                    ]
                ],
                "random_boss": [
                    [
                        0.27,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.545,
                        "daomu2",
                        "0.8",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu2",
                        "0.8",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu2",
                        "0.9",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.945,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1,
                "teleport_rule": -1
            },
            "m0B": {
                "pop_max": 42,
                "pass_score": 1200,
                "boss": [
                    "shamofeitianl",
                    "shamofeitianl",
                    "shamol",
                    "tufeil",
                    "jslw",
                    "tufeil",
                    "jslw2",
                    "xiaochoul",
                    "xiaochoul",
                    "jiangshil",
                    "jiangshil"
                ],
                "pass_by": [
                    "m0A"
                ],
                "interval": 2000,
                "index": 200,
                "yield_val": 50,
                "name": "麦恩矿山",
                "hard_ness": 2.2,
                "wolf_proportion": [
                    [
                        0.15,
                        "shamofeitianl"
                    ],
                    [
                        0.45,
                        "shamol"
                    ],
                    [
                        0.6,
                        "tufeil"
                    ],
                    [
                        0.75,
                        "xiaochoul"
                    ],
                    [
                        1,
                        "jiangshil"
                    ]
                ],
                "need_lev": 20,
                "random_boss": [
                    [
                        0.27,
                        "daomu3",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.545,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.945,
                        "daomu2",
                        "0.9",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 2
            },
            "m5": {
                "pop_max": 41,
                "pass_score": 1440,
                "boss": [
                    "feitianl",
                    "feitianl",
                    "feitianl",
                    "feitianl",
                    "xcwad",
                    "shamofeitianl",
                    "shamofeitianl",
                    "shamofeitianl",
                    "shamofeitianl"
                ],
                "pass_by": [
                    "m4A",
                    "m4B"
                ],
                "interval": 1900,
                "index": 80,
                "yield_val": 30,
                "name": "艾伊尔村",
                "hard_ness": 2.4,
                "wolf_proportion": [
                    [
                        0.2,
                        "shamol"
                    ],
                    [
                        0.5,
                        "baozoul"
                    ],
                    [
                        0.8,
                        "tufeil"
                    ],
                    [
                        1,
                        "jingangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.35,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 2
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 3
            },
            "m0C": {
                "pop_max": 69,
                "pass_score": 1600,
                "boss": [
                    "xiaohuil",
                    "lieshoul",
                    "weisuol",
                    "xiaohuil",
                    "hudunl",
                    "xiaohuil",
                    "hudunl",
                    "shamofeitianl",
                    "weisuol",
                    "sdys",
                    "weisuol",
                    "hudunl",
                    "lieshoul",
                    "hudunl",
                    "weisuol",
                    "shamofeitianl",
                    "hudunl",
                    "lieshoul",
                    "shamofeitianl"
                ],
                "pass_by": [
                    "m0B"
                ],
                "interval": 1500,
                "index": 210,
                "yield_val": 100,
                "name": "赤火地带",
                "hard_ness": 4.3,
                "wolf_proportion": [
                    [
                        0.1,
                        "dahuil"
                    ],
                    [
                        0.3,
                        "shamofeitianl"
                    ],
                    [
                        0.5,
                        "lieshoul"
                    ],
                    [
                        0.7,
                        "weisuol"
                    ],
                    [
                        1,
                        "hudunl"
                    ]
                ],
                "need_lev": 30,
                "random_boss": [
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 2
            },
            "m12A": {
                "pop_max": 62,
                "pass_score": 1200,
                "boss": [
                    "dahuil",
                    "kunjiongl",
                    "feitianl",
                    "dahuil",
                    "jxl",
                    "kunjiongl",
                    "feitianl",
                    "dahuil",
                    "fcgcs",
                    "jxl",
                    "kunjiongl",
                    "feitianl",
                    "dahuil"
                ],
                "pass_by": [
                    "m2B",
                    "m6"
                ],
                "interval": 2200,
                "index": 250,
                "yield_val": 55,
                "name": "齿轮工厂",
                "hard_ness": 2.7,
                "wolf_proportion": [
                    [
                        0.15,
                        "jxl"
                    ],
                    [
                        0.5,
                        "kunjiongl"
                    ],
                    [
                        0.6,
                        "feitianl"
                    ],
                    [
                        1,
                        "dahuil"
                    ]
                ],
                "random_boss": [
                    [
                        0.325,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.8,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.85,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1,
                "teleport_rule": 1
            },
            "m15": {
                "pop_max": 79,
                "pass_score": 1800,
                "boss": [
                    "fdl",
                    "byl1",
                    "tanhuangl",
                    "byl1",
                    "glykl",
                    "byl1",
                    "shentoul",
                    "fdl",
                    "tanhuangl",
                    "shentoul",
                    "byl1",
                    "shentoul",
                    "hushil",
                    "shentoul"
                ],
                "pass_by": [
                    "m13B"
                ],
                "interval": 2200,
                "index": 320,
                "yield_val": 80,
                "name": "斯贝斯镇",
                "hard_ness": 4.7,
                "wolf_proportion": [
                    [
                        0.4,
                        "shentoul"
                    ],
                    [
                        0.6,
                        "tanhuangl"
                    ],
                    [
                        0.75,
                        "bdl"
                    ],
                    [
                        0.85,
                        "shanzeil"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m0A": {
                "pop_max": 36,
                "pass_score": 800,
                "boss": [
                    "kunjiongl",
                    "tufeil",
                    "kunjiongl",
                    "tufeil",
                    "hushil",
                    "zblw",
                    "hushil",
                    "hushil",
                    "tufeil",
                    "zibaol",
                    "zibaol",
                    "tufeil",
                    "tufeil",
                    "hushil",
                    "kunjiongl",
                    "hushil",
                    "hushil",
                    "kunjiongl",
                    "kunjiongl"
                ],
                "pass_by": [
                    "m1"
                ],
                "interval": 1800,
                "index": 190,
                "yield_val": 30,
                "name": "沃夫沼泽",
                "hard_ness": 1.5,
                "wolf_proportion": [
                    [
                        0.1,
                        "dahuil"
                    ],
                    [
                        0.4,
                        "tufeil"
                    ],
                    [
                        0.65,
                        "kunjiongl"
                    ],
                    [
                        0.8,
                        "hushil"
                    ],
                    [
                        1,
                        "zibaol"
                    ]
                ],
                "need_lev": 10,
                "random_boss": [
                    [
                        0.325,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu3",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.8,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.85,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": -1
            },
            "m6": {
                "pop_max": 47,
                "pass_score": 1800,
                "boss": [
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "shamofeitianl",
                    "shamofeitianl",
                    "baozoul",
                    "kklxd",
                    "kklxd2",
                    "baozoul",
                    "baozoul"
                ],
                "pass_by": [
                    "m5"
                ],
                "interval": 1800,
                "index": 90,
                "yield_val": 36,
                "name": "拉帕斯村",
                "hard_ness": 3.2,
                "wolf_proportion": [
                    [
                        0.3,
                        "shamol"
                    ],
                    [
                        0.55,
                        "shamofeitianl"
                    ],
                    [
                        0.75,
                        "baozoul"
                    ],
                    [
                        1,
                        "jingangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.35,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 2
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 0
            },
            "m0F": {
                "pop_max": 99,
                "pass_score": 2400,
                "boss": [
                    "zbjk",
                    "hushil",
                    "shamofeitianl",
                    "feizeil",
                    "feitianl",
                    "feizeil",
                    "hushil",
                    "feitianl",
                    "hushil",
                    "shamofeitianl",
                    "feitianl",
                    "feizeil",
                    "hushil",
                    "feizeil",
                    "feizeil",
                    "hushil",
                    "feizeil",
                    "hushil",
                    "shamofeitianl",
                    "feitianl",
                    "feizeil",
                    "feizeil",
                    "hushil",
                    "hushil",
                    "feitianl",
                    "shamofeitianl"
                ],
                "pass_by": [
                    "m0D"
                ],
                "interval": 2000,
                "index": 240,
                "yield_val": 130,
                "name": "特洛伊岛",
                "hard_ness": 5.3,
                "wolf_proportion": [
                    [
                        0.2,
                        "feitianl"
                    ],
                    [
                        0.4,
                        "shamofeitianl"
                    ],
                    [
                        0.6,
                        "hushil"
                    ],
                    [
                        0.8,
                        "feizeil"
                    ],
                    [
                        1,
                        "jingangl"
                    ]
                ],
                "need_lev": 45,
                "random_boss": [
                    [
                        0.2,
                        "daomu1",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.25,
                        "daomu1",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.45,
                        "daomu1",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu1",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.7,
                        "daomu6",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu6",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1,
                "teleport_rule": 1
            },
            "m13A": {
                "pop_max": 65,
                "pass_score": 1440,
                "boss": [
                    "bdl",
                    "dahuil",
                    "bdl",
                    "feitianl",
                    "xiaochoul",
                    "bdl",
                    "kunjiongl",
                    "hxjjlfr",
                    "jxl",
                    "feitianl",
                    "tanhuangl",
                    "dahuil",
                    "bdl"
                ],
                "pass_by": [
                    "m12B"
                ],
                "interval": 2200,
                "index": 270,
                "yield_val": 70,
                "name": "斯蒂尔镇",
                "hard_ness": 4.3,
                "wolf_proportion": [
                    [
                        0.4,
                        "bdl"
                    ],
                    [
                        0.5,
                        "jingangl"
                    ],
                    [
                        0.65,
                        "jxl"
                    ],
                    [
                        0.8,
                        "tanhuangl"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m8C": {
                "pop_max": 66,
                "pass_score": 1440,
                "boss": [
                    "dahuil",
                    "tufeil",
                    "hushil",
                    "xiaochoul",
                    "wszm",
                    "wszm2",
                    "rufeil",
                    "hushil",
                    "dahuil",
                    "xiaochoul",
                    "xiaochoul"
                ],
                "pass_by": [
                    "m8B"
                ],
                "interval": 2200,
                "index": 130,
                "yield_val": 80,
                "name": "坦克尔村",
                "hard_ness": 4.1,
                "wolf_proportion": [
                    [
                        0.4,
                        "dahuil"
                    ],
                    [
                        0.6,
                        "baozoul"
                    ],
                    [
                        0.7,
                        "hushil"
                    ],
                    [
                        1,
                        "xiaochoul"
                    ]
                ],
                "random_boss": [
                    [
                        0.525,
                        "daomu3",
                        "0.8",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu3",
                        "0.9",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu3",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.925,
                        "daomu4",
                        "0.8",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 2
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu4",
                        "0.9",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "mfx1": {
                "pop_max": 30,
                "hard_ness": 1,
                "index": -100,
                "boss": [
                    "dahuil"
                ],
                "wolf_proportion": [],
                "pass_by": [],
                "interval": 2000,
                "pass_score": 1000,
                "interval_rule": 0,
                "yield_val": 0,
                "name": "防线"
            },
            "m8B": {
                "pop_max": 62,
                "pass_score": 1200,
                "boss": [
                    "shanzeil",
                    "shanzeil",
                    "baozoul",
                    "baozoul",
                    "hushil",
                    "tsnm",
                    "baozoul",
                    "tsnm2",
                    "hushil",
                    "shanzeil",
                    "shanzeil",
                    "shanzeil",
                    "hushil",
                    "shanzeil"
                ],
                "pass_by": [
                    "m8A"
                ],
                "interval": 1900,
                "index": 120,
                "yield_val": 70,
                "name": "拉卡维村",
                "hard_ness": 3.7,
                "wolf_proportion": [
                    [
                        0.2,
                        "dahuil"
                    ],
                    [
                        0.35,
                        "hushil"
                    ],
                    [
                        0.7,
                        "shanzeil"
                    ],
                    [
                        1,
                        "baozoul"
                    ]
                ],
                "random_boss": [
                    [
                        0.27,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.675,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 2
            },
            "m0H": {
                "pop_max": 79,
                "pass_score": 2000,
                "boss": [
                    "fdl",
                    "byl1",
                    "tanhuangl",
                    "byl1",
                    "shentoul",
                    "qzxbl",
                    "shentoul",
                    "fdl",
                    "tanhuangl",
                    "hushil",
                    "byl1",
                    "fdl",
                    "byl2"
                ],
                "pass_by": [
                    "m0A"
                ],
                "interval": 2200,
                "index": 330,
                "yield_val": 80,
                "name": "鲁姆车间",
                "hard_ness": 4.7,
                "wolf_proportion": [
                    [
                        0.4,
                        "shentoul"
                    ],
                    [
                        0.6,
                        "tanhuangl"
                    ],
                    [
                        0.75,
                        "byl1"
                    ],
                    [
                        0.85,
                        "shanzeil"
                    ],
                    [
                        1,
                        "dahuil"
                    ]
                ],
                "need_lev": 35,
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m2A": {
                "pop_max": 17,
                "pass_score": 240,
                "boss": [
                    "baozul",
                    "jkxd",
                    "feitianl",
                    "dahuil",
                    "jkxd2",
                    "baozul",
                    "feitianl",
                    "feitianl",
                    "dahuil",
                    "feitianl",
                    "feitianl",
                    "dahuil"
                ],
                "pass_by": [
                    "m2"
                ],
                "interval": 2400,
                "index": 30,
                "yield_val": 20,
                "name": "卡西村",
                "hard_ness": 1.2,
                "wolf_proportion": [
                    [
                        0.2,
                        "baozul"
                    ],
                    [
                        0.8,
                        "dahuil"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.89,
                        "daomu3",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.99,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu3",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 3
            },
            "m11": {
                "pop_max": 94,
                "pass_score": 2400,
                "boss": [
                    "dahuil",
                    "renzhel",
                    "xiangpil",
                    "shamofeitianl",
                    "shamofeitianl",
                    "nrzzm",
                    "renzhel",
                    "renzhel",
                    "xiangpil",
                    "dahuil",
                    "dahuil"
                ],
                "pass_by": [
                    "m10"
                ],
                "interval": 2000,
                "index": 180,
                "yield_val": 50,
                "name": "苏兰德城",
                "hard_ness": 1,
                "wolf_proportion": [
                    [
                        0.1,
                        "feitianl"
                    ],
                    [
                        0.3,
                        "wushil"
                    ],
                    [
                        0.6,
                        "renzhel"
                    ],
                    [
                        0.8,
                        "hushil"
                    ],
                    [
                        1,
                        "xiaolangwangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.27,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.3,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.545,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.945,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1,
                "teleport_rule": 1
            },
            "m14B": {
                "pop_max": 66,
                "pass_score": 1800,
                "boss": [
                    "fdl",
                    "byl1",
                    "tanhuangl",
                    "byl1",
                    "feitianl",
                    "gthy",
                    "feitianl",
                    "fdl",
                    "tanhuangl",
                    "hushil",
                    "byl1",
                    "fdl",
                    "byl2"
                ],
                "pass_by": [
                    "m14A"
                ],
                "interval": 2200,
                "index": 300,
                "yield_val": 80,
                "name": "泰威尔镇",
                "hard_ness": 2.6,
                "wolf_proportion": [
                    [
                        0.4,
                        "byl1"
                    ],
                    [
                        0.6,
                        "tanhuangl"
                    ],
                    [
                        0.75,
                        "fdl"
                    ],
                    [
                        0.85,
                        "dahuil"
                    ],
                    [
                        1,
                        "hushil"
                    ]
                ],
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m0E": {
                "pop_max": 79,
                "pass_score": 1800,
                "boss": [
                    "hyy"
                ],
                "pass_by": [
                    "m0C"
                ],
                "interval": 2000,
                "index": 220,
                "yield_val": 110,
                "name": "烈焰熔炉",
                "hard_ness": 4.7,
                "wolf_proportion": [
                    [
                        0.15,
                        "xiaohuil"
                    ],
                    [
                        0.3,
                        "shamofeitianl"
                    ],
                    [
                        0.65,
                        "shanzeil"
                    ],
                    [
                        1,
                        "sujiangl"
                    ]
                ],
                "need_lev": 35,
                "random_boss": [
                    [
                        0.2,
                        "daomu1",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.25,
                        "daomu1",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.45,
                        "daomu1",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu1",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.7,
                        "daomu6",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu6",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m13B": {
                "pop_max": 66,
                "pass_score": 1440,
                "boss": [
                    "fdl",
                    "dahuil",
                    "bdl",
                    "hushil",
                    "xiaochoul",
                    "bfsl",
                    "kunjiongl",
                    "fdl",
                    "jxl",
                    "hushil",
                    "tanhuangl",
                    "fdl",
                    "bdl"
                ],
                "pass_by": [
                    "m13A"
                ],
                "interval": 2200,
                "index": 280,
                "yield_val": 80,
                "name": "拉瓦锡镇",
                "hard_ness": 4.3,
                "wolf_proportion": [
                    [
                        0.25,
                        "bdl"
                    ],
                    [
                        0.4,
                        "jingangl"
                    ],
                    [
                        0.65,
                        "fdl"
                    ],
                    [
                        0.85,
                        "tanhuangl"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m4B": {
                "pop_max": 38,
                "pass_score": 1200,
                "boss": [
                    "xiaohuil",
                    "smzfl",
                    "xiaohuil",
                    "smzfl2",
                    "lieshoul",
                    "shamofeitianl",
                    "shamol",
                    "shamofeitianl"
                ],
                "pass_by": [
                    "m3"
                ],
                "interval": 2000,
                "index": 70,
                "yield_val": 25,
                "name": "菲洛克村",
                "hard_ness": 1.7,
                "wolf_proportion": [
                    [
                        0.3,
                        "shamofeitianl"
                    ],
                    [
                        0.35,
                        "lieshoul"
                    ],
                    [
                        0.9,
                        "shamol"
                    ],
                    [
                        1,
                        "jingangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.35,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 2
            },
            "m7": {
                "pop_max": 53,
                "pass_score": 1200,
                "boss": [
                    "dahuil",
                    "renzhel",
                    "xiangpil",
                    "shamofeitianl",
                    "shamofeitianl",
                    "nrzzm",
                    "renzhel",
                    "renzhel",
                    "xiangpil",
                    "dahuil",
                    "dahuil"
                ],
                "pass_by": [
                    "m2B",
                    "m6"
                ],
                "interval": 2000,
                "index": 100,
                "yield_val": 50,
                "name": "埃特纳村",
                "hard_ness": 3.4,
                "wolf_proportion": [
                    [
                        0.3,
                        "dahuil"
                    ],
                    [
                        0.5,
                        "shamofeitianl"
                    ],
                    [
                        0.8,
                        "renzhel"
                    ],
                    [
                        1,
                        "xiangpil"
                    ]
                ],
                "random_boss": [
                    [
                        0.325,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.8,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.85,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m9A": {
                "pop_max": 59,
                "pass_score": 960,
                "boss": [
                    "shamol",
                    "lieshoul",
                    "xiangpil",
                    "xiangpil",
                    "lieshoul",
                    "bsel",
                    "xiangpil",
                    "shamol",
                    "lieshoul",
                    "lieshoul",
                    "xiangpil"
                ],
                "pass_by": [
                    "m7"
                ],
                "interval": 1800,
                "index": 140,
                "yield_val": 60,
                "name": "莫诺雷村",
                "hard_ness": 3.7,
                "wolf_proportion": [
                    [
                        0.2,
                        "shamol"
                    ],
                    [
                        0.4,
                        "hushil"
                    ],
                    [
                        0.75,
                        "xiangpil"
                    ],
                    [
                        1,
                        "lieshoul"
                    ]
                ],
                "random_boss": [
                    [
                        0.17,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.2,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.545,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.945,
                        "daomu2",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m12B": {
                "pop_max": 58,
                "pass_score": 960,
                "boss": [
                    "kunjiongl",
                    "dahuil",
                    "jxl",
                    "feitianl",
                    "tanhuangl",
                    "tksjblt",
                    "kunjiongl",
                    "dahuil",
                    "jxl",
                    "feitianl",
                    "tanhuangl"
                ],
                "pass_by": [
                    "m12A"
                ],
                "interval": 2200,
                "index": 260,
                "yield_val": 64,
                "name": "虎克工厂",
                "hard_ness": 3.6,
                "wolf_proportion": [
                    [
                        0.15,
                        "jxl"
                    ],
                    [
                        0.4,
                        "kunjiongl"
                    ],
                    [
                        0.7,
                        "dahuil"
                    ],
                    [
                        0.9,
                        "feitianl"
                    ],
                    [
                        1,
                        "tanhuangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.325,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu4",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.8,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.85,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m2B": {
                "pop_max": 31,
                "pass_score": 480,
                "boss": [
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "fzswr",
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "baozoul",
                    "baozoul"
                ],
                "pass_by": [
                    "m2A"
                ],
                "interval": 2300,
                "index": 40,
                "yield_val": 25,
                "name": "呼噜噜村",
                "hard_ness": 1.6,
                "wolf_proportion": [
                    [
                        0.5,
                        "baozoul"
                    ],
                    [
                        0.8,
                        "dahuil"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.89,
                        "daomu3",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.99,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 3
            },
            "m0G": {
                "pop_max": 79,
                "pass_score": 2000,
                "boss": [
                    "fdl",
                    "byl1",
                    "tanhuangl",
                    "byl1",
                    "feitianl",
                    "mssjl",
                    "feitianl",
                    "fdl",
                    "tanhuangl",
                    "hushil",
                    "byl1",
                    "fdl",
                    "byl2"
                ],
                "pass_by": [
                    "m0A"
                ],
                "interval": 2200,
                "index": 310,
                "yield_val": 80,
                "name": "克勒蒙村",
                "hard_ness": 4.7,
                "wolf_proportion": [
                    [
                        0.4,
                        "byl1"
                    ],
                    [
                        0.6,
                        "tanhuangl"
                    ],
                    [
                        0.75,
                        "bdl"
                    ],
                    [
                        0.85,
                        "shanzeil"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "need_lev": 35,
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m9B": {
                "pop_max": 62,
                "pass_score": 1200,
                "boss": [
                    "weisuol",
                    "weisuol",
                    "hushil",
                    "xiaolangwangl",
                    "hushil",
                    "ylnw",
                    "weisuol",
                    "xiaolangwangl",
                    "weisuol",
                    "hushil",
                    "xiaolangwangl"
                ],
                "pass_by": [
                    "m9A"
                ],
                "interval": 2000,
                "index": 150,
                "yield_val": 60,
                "name": "奥兹玛村",
                "hard_ness": 3.7,
                "wolf_proportion": [
                    [
                        0.2,
                        "dahuil"
                    ],
                    [
                        0.55,
                        "weisuol"
                    ],
                    [
                        0.75,
                        "hushil"
                    ],
                    [
                        1,
                        "xiaolangwangl"
                    ]
                ],
                "random_boss": [
                    [
                        0.425,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.475,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.925,
                        "daomu2",
                        "0.9",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m10": {
                "pop_max": 79,
                "pass_score": 1800,
                "boss": [
                    "xiaochoul",
                    "weisuol",
                    "wushil",
                    "wushil",
                    "feitianl",
                    "eljj",
                    "weisuol",
                    "wushil",
                    "xiaochoul",
                    "feitianl",
                    "xiaochoul"
                ],
                "pass_by": [
                    "m9C",
                    "m8C"
                ],
                "interval": 2000,
                "index": 170,
                "yield_val": 85,
                "name": "塔特村",
                "hard_ness": 4.2,
                "wolf_proportion": [
                    [
                        0.15,
                        "xiaochoul"
                    ],
                    [
                        0.5,
                        "feitianl"
                    ],
                    [
                        0.8,
                        "jingangl"
                    ],
                    [
                        1,
                        "wushil"
                    ]
                ],
                "random_boss": [
                    [
                        0.525,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.575,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu4",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.925,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1,
                "teleport_rule": 1
            },
            "m2": {
                "pop_max": 11,
                "hard_ness": 1.1,
                "index": 20,
                "boss": [
                    "dahuil",
                    "baozul",
                    "hfel",
                    "fashil",
                    "dahuil",
                    "fashil",
                    "dahuil"
                ],
                "wolf_proportion": [
                    [
                        0.7,
                        "dahuil"
                    ],
                    [
                        0.9,
                        "baozul"
                    ],
                    [
                        1,
                        "fashil"
                    ]
                ],
                "pass_by": [
                    "m1"
                ],
                "interval": 2400,
                "pass_score": 100,
                "interval_rule": 2,
                "yield_val": 18,
                "name": "比丘村"
            },
            "m14A": {
                "pop_max": 65,
                "pass_score": 1200,
                "boss": [
                    "bdl",
                    "dahuil",
                    "byl1",
                    "byl1",
                    "renzhel",
                    "bdl",
                    "shanzeil",
                    "bygkls",
                    "tanhuangl",
                    "feitianl",
                    "tanhuangl",
                    "dahuil",
                    "byl1",
                    "byl1"
                ],
                "pass_by": [
                    "m13B"
                ],
                "interval": 2200,
                "index": 290,
                "yield_val": 70,
                "name": "佛里特镇",
                "hard_ness": 3,
                "wolf_proportion": [
                    [
                        0.4,
                        "byl1"
                    ],
                    [
                        0.5,
                        "bdl"
                    ],
                    [
                        0.7,
                        "tanhuangl"
                    ],
                    [
                        0.8,
                        "shanzeil"
                    ],
                    [
                        1,
                        "feitianl"
                    ]
                ],
                "random_boss": [
                    [
                        0.2,
                        "zjylc",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu6",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.5,
                        "daomu2",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.65,
                        "zjylc",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.75,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu6",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m8A": {
                "pop_max": 59,
                "pass_score": 960,
                "boss": [
                    "renzhel",
                    "weisuol",
                    "weisuol",
                    "weisuol",
                    "renzhel",
                    "lrggl",
                    "lrggl2",
                    "renzhel",
                    "weisuol",
                    "weisuol",
                    "shanzeil",
                    "renzhel"
                ],
                "pass_by": [
                    "m7"
                ],
                "interval": 2000,
                "index": 110,
                "yield_val": 60,
                "name": "雷尼尔村",
                "hard_ness": 3.6,
                "wolf_proportion": [
                    [
                        0.35,
                        "dahuil"
                    ],
                    [
                        0.55,
                        "weisuol"
                    ],
                    [
                        0.7,
                        "renzhel"
                    ],
                    [
                        1,
                        "shanzeil"
                    ]
                ],
                "random_boss": [
                    [
                        0.325,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.375,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ],
                    [
                        0.925,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang3": 1
                                }
                            }
                        }
                    ],
                    [
                        0.975,
                        "daomu2",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu2",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang6": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m3": {
                "pop_max": 33,
                "pass_score": 720,
                "boss": [
                    "shamol",
                    "shamol",
                    "flkxd",
                    "flkxd2",
                    "shamofeitianl",
                    "shamofeitianl",
                    "shamol",
                    "shamol"
                ],
                "pass_by": [
                    "m2A"
                ],
                "interval": 2200,
                "index": 50,
                "yield_val": 24,
                "name": "安蒂亚村",
                "hard_ness": 1.5,
                "wolf_proportion": [
                    [
                        0.1,
                        "shamofeitianl"
                    ],
                    [
                        0.7,
                        "shamol"
                    ],
                    [
                        1,
                        "kunjiongl"
                    ]
                ],
                "random_boss": [
                    [
                        0.55,
                        "daomu3",
                        "1.2",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.6,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 1
            },
            "m4A": {
                "pop_max": 36,
                "pass_score": 1200,
                "boss": [
                    "kunjiongl",
                    "kunjiongl",
                    "shamol",
                    "shamofeitianl",
                    "shamol",
                    "hushil",
                    "shamol",
                    "kunjiongl",
                    "kunjiongl",
                    "lysme"
                ],
                "pass_by": [
                    "m3"
                ],
                "interval": 2100,
                "index": 60,
                "yield_val": 30,
                "name": "凯奇镇",
                "hard_ness": 2.2,
                "wolf_proportion": [
                    [
                        0.2,
                        "kunjiongl"
                    ],
                    [
                        0.6,
                        "shamol"
                    ],
                    [
                        0.95,
                        "shamofeitianl"
                    ],
                    [
                        1,
                        "hushil"
                    ]
                ],
                "random_boss": [
                    [
                        0.35,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.4,
                        "daomu3",
                        "1.3",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ],
                    [
                        0.95,
                        "daomu4",
                        "1.0",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang2": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        "daomu4",
                        "1.1",
                        {
                            "properties": {
                                "card": {
                                    "baoxiang5": 1
                                }
                            }
                        }
                    ]
                ],
                "interval_rule": 3
            },
            "m1": {
                "pop_max": 6,
                "hard_ness": 1,
                "index": 10,
                "boss": [
                    "dahuil",
                    "dahuil",
                    "dqcyl",
                    "dahuil",
                    "dahuil"
                ],
                "wolf_proportion": [
                    [
                        0.3,
                        "xiaohuil"
                    ],
                    [
                        1,
                        "dahuil"
                    ]
                ],
                "pass_by": [],
                "interval": 2500,
                "pass_score": 40,
                "interval_rule": 2,
                "yield_val": 20,
                "name": "巴罗村"
            }
        },
        "free_gift": {
            "za_nianzhuo": {
                "type": "card",
                "sort": 13,
                "lev": 10,
                "name": "free_gift_13^³¬¼¶Õ³×Å¼Á"
            },
            "bushoujia1": {
                "type": "snarp",
                "sort": 8,
                "lev": 5,
                "name": "free_gift_8^²ËÄñ²¶ÊÞ¼Ð"
            },
            "baozhatong1": {
                "type": "snarp",
                "sort": 7,
                "lev": 5,
                "name": "free_gift_7^²ËÄñµ¥±øÀ×"
            },
            "za_baozha": {
                "type": "card",
                "sort": 15,
                "lev": 10,
                "name": "free_gift_15^±¬Õ¨Ö®Ô´"
            },
            "sl1": {
                "type": "card",
                "sort": 9,
                "lev": 5,
                "name": "free_gift_9^²ËÄñÉ³Â©"
            },
            "za_xingchen": {
                "type": "card",
                "sort": 10,
                "lev": 10,
                "name": "free_gift_10^ÐÇ³½ËéÆ¬"
            },
            "za_jinggang": {
                "type": "card",
                "sort": 12,
                "lev": 10,
                "name": "free_gift_12^¾«¸Ö¿óÊ¯"
            },
            "lan1": {
                "type": "gem",
                "sort": 2,
                "lev": 1,
                "name": "free_gift_2^À¶±¦Ê¯ËéÆ¬"
            },
            "lv1": {
                "type": "gem",
                "sort": 3,
                "lev": 1,
                "name": "free_gift_3^ÂÌ±¦Ê¯ËéÆ¬"
            },
            "dicicao1": {
                "type": "snarp",
                "sort": 6,
                "lev": 5,
                "name": "free_gift_6^²ËÄñµØ´Ì²Ý"
            },
            "zi1": {
                "type": "gem",
                "sort": 4,
                "lev": 1,
                "name": "free_gift_4^×Ï±¦Ê¯ËéÆ¬"
            },
            "za_shiguang": {
                "type": "card",
                "sort": 14,
                "lev": 10,
                "name": "free_gift_14^Ê±¹âÖ®É³"
            },
            "hong1": {
                "type": "gem",
                "sort": 1,
                "lev": 1,
                "name": "free_gift_1^ºì±¦Ê¯ËéÆ¬"
            },
            "huang1": {
                "type": "gem",
                "sort": 5,
                "lev": 1,
                "name": "free_gift_5^»Æ±¦Ê¯ËéÆ¬"
            },
            "za_qiangwei": {
                "type": "card",
                "sort": 11,
                "lev": 10,
                "name": "free_gift_11^Ç¾Þ±¸ù¾¥"
            }
        },
        "exchange_properties": {
            "huangjinl_card": {
                "huangjinl_card_1": {
                    "type": "wc",
                    "bind_exchange": 1,
                    "index": -11,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_huan_drop": 10,
                            "za_le_drop": 10,
                            "za_song_drop": 10,
                            "za_cun_drop": 10,
                            "za_yang_drop": 10
                        }
                    }
                }
            },
            "haojiao_sd1": {
                "haojiao_sd1_1": {
                    "coin": 50,
                    "gold": 10000,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": -12,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_xingchen": 5,
                            "za_song_drop": 1
                        }
                    }
                }
            },
            "wexp_D": {
                "wexp_D_1": {
                    "gold": 100000,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": -18,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_shiguang": 5,
                            "za_cun_drop": 2,
                            "za_yang_drop": 2
                        }
                    }
                }
            },
            "tt_D": {
                "tt_D_2": {
                    "gold": 50000,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": -19,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_nianzhuo": 10,
                            "za_huan_drop": 2,
                            "za_le_drop": 2,
                            "za_song_drop": 2
                        }
                    }
                },
                "tt_D_1": {
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 320,
                    "num": 5,
                    "properties": {
                        "tame": {
                            "tt_C": 15
                        },
                        "card": {
                            "za_nianzhuo": 19,
                            "za_xingchen": 29,
                            "za_shiguang": 29
                        }
                    }
                }
            },
            "texp_B": {
                "texp_B_1": {
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 220,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_xingchen": 9,
                            "texp_A": 3
                        }
                    }
                },
                "texp_B_2": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 230,
                    "num": 3,
                    "properties": {
                        "card": {
                            "za_xingchen": 18,
                            "texp_A": 10
                        }
                    }
                }
            },
            "tiegao": {
                "tiegao_3": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 112,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_baozhen_drop": 5,
                            "za_jinggang": 9
                        }
                    }
                },
                "tiegao_2": {
                    "gold": 1000,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": -330,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_jinyang": 1,
                            "za_jinggang": 9
                        }
                    }
                },
                "tiegao_1": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": -110,
                    "num": 5,
                    "properties": {
                        "card": {
                            "mc": 10,
                            "za_jinggang": 9
                        }
                    }
                }
            },
            "zi5": {
                "zi5_1": {
                    "gold": 50000,
                    "type": "gem",
                    "bind_exchange": -1,
                    "index": -14,
                    "num": 1,
                    "properties": {
                        "gem": {
                            "zi4": 3
                        },
                        "card": {
                            "za_jinggang": 5,
                            "za_cun_drop": 2
                        }
                    }
                }
            },
            "wexp_A": {
                "wexp_A_1": {
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 212,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_shiguang": 4
                        }
                    }
                }
            },
            "hong5": {
                "hong5_1": {
                    "gold": 50000,
                    "type": "gem",
                    "bind_exchange": -1,
                    "index": -15,
                    "num": 1,
                    "properties": {
                        "gem": {
                            "hong4": 3
                        },
                        "card": {
                            "za_nianzhuo": 5,
                            "za_huan_drop": 2
                        }
                    }
                }
            },
            "texp_A": {
                "texp_A_1": {
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 202,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_xingchen": 4
                        }
                    }
                }
            },
            "tt_C": {
                "tt_C_1": {
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 310,
                    "num": 5,
                    "properties": {
                        "tame": {
                            "tt_B": 15
                        },
                        "card": {
                            "za_nianzhuo": 9,
                            "za_xingchen": 19,
                            "za_shiguang": 19
                        }
                    }
                }
            },
            "cuantiandan3": {
                "cuantiandan3_1": {
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 140,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "cuantiandan2": 3
                        },
                        "card": {
                            "za_baozha": 4
                        }
                    }
                }
            },
            "lv5": {
                "lv5_1": {
                    "gold": 50000,
                    "type": "gem",
                    "bind_exchange": -1,
                    "index": -17,
                    "num": 1,
                    "properties": {
                        "gem": {
                            "lv4": 3
                        },
                        "card": {
                            "za_song_drop": 2,
                            "za_baozha": 5
                        }
                    }
                }
            },
            "sb_Sprint_B": {
                "sb_Sprint_B_1": {
                    "type": "tame",
                    "bind_exchange": 1,
                    "index": 11,
                    "num": 1,
                    "properties": {
                        "tame": {
                            "sb_Blink_A": 1
                        },
                        "card": {
                            "za_baozhen_drop": 5,
                            "za_gangbi_drop": 5,
                            "za_bitong_drop": 5,
                            "za_beizi_drop": 5
                        }
                    }
                }
            },
            "bushoujia4": {
                "bushoujia4_1": {
                    "gold": 100000,
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 170,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "bushoujia3": 3
                        },
                        "card": {
                            "za_qiangwei": 10
                        }
                    }
                }
            },
            "wexp_C": {
                "wexp_C_1": {
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": -280,
                    "num": 1,
                    "properties": {
                        "tame": {
                            "wexp_B": 5
                        },
                        "card": {
                            "za_shiguang": 9
                        }
                    }
                },
                "wexp_C_2": {
                    "coin": 200,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 290,
                    "num": 3,
                    "properties": {
                        "tame": {
                            "wexp_B": 10
                        },
                        "card": {
                            "za_shiguang": 18
                        }
                    }
                },
                "wexp_C_3": {
                    "coin": 100,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 292,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_shiguang": 9,
                            "za_bitong_drop": 5
                        }
                    }
                }
            },
            "baozhatong3": {
                "baozhatong3_1": {
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 150,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "baozhatong1": 3,
                            "baozhatong2": 3
                        },
                        "card": {
                            "za_baozha": 2
                        }
                    }
                }
            },
            "lan5": {
                "lan5_1": {
                    "gold": 50000,
                    "type": "gem",
                    "bind_exchange": -1,
                    "index": -13,
                    "num": 1,
                    "properties": {
                        "gem": {
                            "lan4": 3
                        },
                        "card": {
                            "za_xingchen": 5,
                            "za_yang_drop": 2
                        }
                    }
                }
            },
            "tt_B": {
                "tt_B_1": {
                    "coin": 125,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 300,
                    "num": 5,
                    "properties": {
                        "tame": {
                            "tt_A": 15
                        }
                    }
                }
            },
            "texp_C": {
                "texp_C_1": {
                    "type": "card",
                    "bind_exchange": -1,
                    "index": -260,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_xingchen": 9,
                            "texp_B": 5
                        }
                    }
                },
                "texp_C_2": {
                    "coin": 20,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 270,
                    "num": 3,
                    "properties": {
                        "card": {
                            "za_xingchen": 18,
                            "texp_B": 10
                        }
                    }
                },
                "texp_C_3": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 272,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_gangbi_drop": 5,
                            "za_xingchen": 9
                        }
                    }
                }
            },
            "dicicao3": {
                "dicicao3_1": {
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 120,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "dicicao1": 3,
                            "dicicao2": 3
                        },
                        "card": {
                            "za_qiangwei": 2
                        }
                    }
                }
            },
            "huang5": {
                "huang5_1": {
                    "gold": 50000,
                    "type": "gem",
                    "bind_exchange": -1,
                    "index": -16,
                    "num": 1,
                    "properties": {
                        "gem": {
                            "huang4": 3
                        },
                        "card": {
                            "za_shiguang": 5,
                            "za_le_drop": 2
                        }
                    }
                }
            },
            "lyql_card": {
                "lyql_card_1": {
                    "coin": 1000,
                    "type": "wc",
                    "bind_exchange": 1,
                    "index": 1,
                    "num": 1,
                    "properties": {
                        "wc": {
                            "al_card": 7
                        },
                        "card": {
                            "za_nianzhuo": 49,
                            "za_xingchen": 49,
                            "za_shiguang": 49
                        }
                    }
                }
            },
            "cuantiandan4": {
                "cuantiandan4_1": {
                    "gold": 100000,
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 180,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "cuantiandan3": 3
                        },
                        "card": {
                            "za_baozha": 10
                        }
                    }
                }
            },
            "bushoujia3": {
                "bushoujia3_1": {
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 130,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "bushoujia1": 3,
                            "bushoujia2": 3
                        },
                        "card": {
                            "za_qiangwei": 2
                        }
                    }
                }
            },
            "baozhatong4": {
                "baozhatong4_1": {
                    "gold": 100000,
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 190,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "baozhatong3": 3
                        },
                        "card": {
                            "za_baozha": 10
                        }
                    }
                }
            },
            "mc": {
                "mc_3": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 32,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_qiangwei": 9,
                            "za_beizi_drop": 5
                        }
                    }
                },
                "mc_2": {
                    "gold": 5000,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": -30,
                    "num": 1,
                    "properties": {
                        "card": {
                            "za_jinyang": 1,
                            "za_jinggang": 9
                        }
                    }
                },
                "mc_1": {
                    "coin": 100,
                    "type": "card",
                    "bind_exchange": -1,
                    "index": 102,
                    "num": 5,
                    "properties": {
                        "card": {
                            "za_jinggang": 3,
                            "tiegao": 5
                        }
                    }
                }
            },
            "wexp_B": {
                "wexp_B_2": {
                    "coin": 100,
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 250,
                    "num": 3,
                    "properties": {
                        "tame": {
                            "wexp_A": 10
                        },
                        "card": {
                            "za_shiguang": 18
                        }
                    }
                },
                "wexp_B_1": {
                    "type": "tame",
                    "bind_exchange": -1,
                    "index": 240,
                    "num": 1,
                    "properties": {
                        "tame": {
                            "wexp_A": 3
                        },
                        "card": {
                            "za_shiguang": 9
                        }
                    }
                }
            },
            "dicicao4": {
                "dicicao4_1": {
                    "gold": 100000,
                    "type": "snarp",
                    "bind_exchange": -1,
                    "index": 160,
                    "num": 1,
                    "properties": {
                        "snarp": {
                            "dicicao3": 3
                        },
                        "card": {
                            "za_qiangwei": 10
                        }
                    }
                }
            }
        },
        "everyday_gift": [
            {
                "w": 0.15,
                "gold": [
                    500,
                    1000
                ]
            },
            {
                "w": 0.2,
                "properties": {
                    "gem": [
                        {
                            "num": 1,
                            "name": "hong4"
                        },
                        {
                            "num": 1,
                            "name": "lan4"
                        },
                        {
                            "num": 1,
                            "name": "huang4"
                        },
                        {
                            "num": 1,
                            "name": "lv4"
                        },
                        {
                            "num": 1,
                            "name": "zi4"
                        }
                    ]
                }
            },
            {
                "w": 0.35,
                "properties": {
                    "snarp": [
                        {
                            "num": 1,
                            "name": "baozhatong1"
                        },
                        {
                            "num": 1,
                            "name": "cuantiandan2"
                        },
                        {
                            "num": 1,
                            "name": "cuantiandan3"
                        }
                    ]
                }
            },
            {
                "w": 0.5,
                "properties": {
                    "tame": [
                        {
                            "num": 1,
                            "name": "wexp_A"
                        }
                    ]
                }
            },
            {
                "w": 0.6,
                "properties": {
                    "card": [
                        {
                            "num": 1,
                            "name": "rmbbt"
                        }
                    ]
                }
            },
            {
                "w": 0.65,
                "properties": {
                    "card": [
                        {
                            "num": 1,
                            "name": "sl1"
                        },
                        {
                            "num": 1,
                            "name": "sl2"
                        },
                        {
                            "num": 1,
                            "name": "sl3"
                        },
                        {
                            "num": 1,
                            "name": "sl4"
                        }
                    ]
                }
            },
            {
                "w": 0.8,
                "properties": {
                    "card": [
                        {
                            "num": 1,
                            "name": "texp_A"
                        }
                    ]
                }
            },
            {
                "w": 0.95,
                "properties": {
                    "gem": [
                        {
                            "num": 1,
                            "name": "hong1"
                        },
                        {
                            "num": 1,
                            "name": "lan1"
                        },
                        {
                            "num": 1,
                            "name": "huang1"
                        },
                        {
                            "num": 1,
                            "name": "lv1"
                        },
                        {
                            "num": 1,
                            "name": "zi1"
                        }
                    ]
                }
            },
            {
                "w": 1,
                "properties": {
                    "card": {
                        "num": 1,
                        "name": "mc"
                    }
                }
            }
        ],
        "pass_map_gift": {
            "m0D": {
                "gold": 60000,
                "properties": {
                    "snarp": {
                        "bushoujia4": 1,
                        "baozhatong4": 1,
                        "dicicao4": 1
                    },
                    "card": {
                        "sl3": 2,
                        "sl4": 2
                    }
                }
            },
            "m9C": {
                "gold": 160000,
                "properties": {
                    "snarp": {
                        "dicicao2": 1,
                        "bushoujia2": 2,
                        "baozhatong3": 2
                    }
                }
            },
            "m0B": {
                "gold": 55000,
                "properties": {
                    "snarp": {
                        "bushoujia4": 1,
                        "baozhatong4": 1,
                        "dicicao4": 1
                    },
                    "card": {
                        "sl3": 2,
                        "sl4": 2
                    }
                }
            },
            "m5": {
                "gold": 50000,
                "properties": {
                    "gem": {
                        "huang4": 1
                    }
                }
            },
            "m0C": {
                "gold": 55000,
                "properties": {
                    "snarp": {
                        "bushoujia4": 1,
                        "baozhatong4": 1,
                        "dicicao4": 1
                    },
                    "card": {
                        "sl3": 2,
                        "sl4": 2
                    }
                }
            },
            "m12A": {
                "gold": 60000,
                "properties": {
                    "gem": {
                        "zi3": 1,
                        "lv3": 1
                    }
                }
            },
            "m15": {
                "gold": 80000,
                "properties": {
                    "gem": {
                        "huang4": 4,
                        "zi4": 4
                    }
                }
            },
            "m0A": {
                "gold": 30000,
                "properties": {
                    "card": {
                        "sl2": 2,
                        "sl3": 2
                    }
                }
            },
            "m6": {
                "gold": 60000,
                "properties": {
                    "gem": {
                        "zi4": 1,
                        "lv3": 1
                    }
                }
            },
            "m0F": {
                "gold": 70000,
                "properties": {
                    "tame": {
                        "tt_D": 1,
                        "wexp_B": 1
                    },
                    "card": {
                        "mc": 1,
                        "texp_B": 1
                    }
                }
            },
            "m13A": {
                "gold": 70000,
                "properties": {
                    "gem": {
                        "huang4": 3,
                        "lv4": 3
                    }
                }
            },
            "m8C": {
                "gold": 160000,
                "properties": {
                    "snarp": {
                        "dicicao2": 1,
                        "bushoujia2": 2,
                        "baozhatong3": 2
                    }
                }
            },
            "m8B": {
                "gold": 140000,
                "properties": {
                    "snarp": {
                        "baozhatong3": 2,
                        "bushoujia2": 1
                    }
                }
            },
            "m0H": {
                "gold": 80000,
                "properties": {
                    "gem": {
                        "hong4": 4,
                        "lan4": 4
                    }
                }
            },
            "m2A": {
                "gold": 25000,
                "properties": {
                    "gem": {
                        "huang1": 1,
                        "hong3": 1,
                        "zi1": 1
                    }
                }
            },
            "m11": {
                "1": {
                    "properties": {
                        "card": {
                            "drws": 1,
                            "mc": 5,
                            "sl2": 2,
                            "sl3": 2
                        }
                    }
                },
                "2": {
                    "properties": {
                        "snarp": {
                            "dicicao2": 2,
                            "baozhatong3": 3,
                            "cuantiandan2": 3
                        },
                        "card": {
                            "drws": 1
                        }
                    }
                },
                "3": {
                    "properties": {
                        "snarp": {
                            "dicicao2": 2,
                            "baozhatong3": 3,
                            "cuantiandan2": 3
                        },
                        "card": {
                            "drws": 1,
                            "sl4": 2,
                            "mc": 3
                        }
                    }
                },
                "4": {
                    "properties": {
                        "snarp": {
                            "cuantiandan3": 3,
                            "baozhatong3": 3,
                            "dicicao3": 3
                        },
                        "card": {
                            "drws": 1,
                            "sl4": 3,
                            "mc": 3
                        }
                    }
                },
                "5": {
                    "properties": {
                        "snarp": {
                            "cuantiandan4": 1,
                            "baozhatong4": 1,
                            "dicicao4": 1
                        },
                        "card": {
                            "baoxiang7": 1,
                            "drws": 1,
                            "mc": 3
                        }
                    }
                },
                "6": {
                    "properties": {
                        "snarp": {
                            "cuantiandan4": 1,
                            "baozhatong4": 1,
                            "dicicao4": 1
                        },
                        "card": {
                            "baoxiang7": 2,
                            "drws": 1,
                            "mc": 3
                        }
                    }
                }
            },
            "m14B": {
                "gold": 75000,
                "properties": {
                    "gem": {
                        "huang4": 3,
                        "lan4": 3
                    }
                }
            },
            "m0E": {
                "gold": 60000,
                "properties": {
                    "tame": {
                        "wexp_B": 1,
                        "tt_C": 1
                    },
                    "card": {
                        "mc": 1,
                        "texp_B": 1
                    }
                }
            },
            "m13B": {
                "gold": 70000,
                "properties": {
                    "gem": {
                        "zi4": 3,
                        "hong4": 3
                    }
                }
            },
            "m4B": {
                "gold": 40000,
                "properties": {
                    "gem": {
                        "huang2": 1,
                        "huang3": 1,
                        "lan2": 1
                    }
                }
            },
            "m7": {
                "gold": 100000,
                "properties": {
                    "snarp": {
                        "baozhatong2": 1,
                        "bushoujia2": 1
                    }
                }
            },
            "m9A": {
                "gold": 120000,
                "properties": {
                    "snarp": {
                        "bushoujia2": 1
                    }
                }
            },
            "m12B": {
                "gold": 60000,
                "properties": {
                    "gem": {
                        "lv4": 2,
                        "zi4": 2
                    }
                }
            },
            "m2B": {
                "gold": 30000,
                "properties": {
                    "gem": {
                        "zi3": 1,
                        "zi2": 1
                    }
                }
            },
            "m0G": {
                "gold": 75000,
                "properties": {
                    "gem": {
                        "hei4": 3,
                        "hong4": 3
                    }
                }
            },
            "m9B": {
                "gold": 140000,
                "properties": {
                    "snarp": {
                        "baozhatong3": 2,
                        "bushoujia2": 1
                    }
                }
            },
            "m10": {
                "gold": 200000,
                "properties": {
                    "snarp": {
                        "dicicao2": 2,
                        "bushoujia2": 3,
                        "baozhatong3": 3
                    }
                }
            },
            "m2": {
                "gold": 20000,
                "properties": {
                    "snarp": {
                        "baozhatong1": 1,
                        "bushoujia1": 1
                    },
                    "gem": {
                        "hong1": 1
                    }
                }
            },
            "m14A": {
                "gold": 75000,
                "properties": {
                    "gem": {
                        "zi4": 3,
                        "hong4": 3
                    }
                }
            },
            "m8A": {
                "gold": 120000,
                "properties": {
                    "snarp": {
                        "baozhatong3": 1
                    }
                }
            },
            "m3": {
                "gold": 30000,
                "properties": {
                    "gem": {
                        "lv2": 1,
                        "hong2": 1,
                        "lan2": 1,
                        "zi2": 1
                    }
                }
            },
            "m4A": {
                "gold": 40000,
                "properties": {
                    "gem": {
                        "huang2": 1,
                        "hong2": 1,
                        "huang3": 1
                    }
                }
            },
            "m1": {
                "gold": 20000,
                "properties": {
                    "gem": {
                        "lv1": 1,
                        "lv3": 1
                    }
                }
            }
        },
        "wolf_hard_ness": {
            "0.8": {
                "desc": "wolf_hard_ness_1^小菜一碟",
                "add_score": 1
            },
            "1.0": {
                "desc": "wolf_hard_ness_3^势均力敌",
                "add_score": 2
            },
            "1.3": {
                "desc": "wolf_hard_ness_6^困难重重",
                "add_score": 3
            },
            "1.2": {
                "desc": "wolf_hard_ness_5^稍有难度",
                "add_score": 3
            },
            "0.9": {
                "desc": "wolf_hard_ness_2^轻而易举",
                "add_score": 1
            },
            "1.1": {
                "desc": "wolf_hard_ness_4^有惊无险",
                "add_score": 2
            }
        },
        "user_guide": {},
        "building": {
            "wall": {
                "panlong": {
                    "camp_price": [
                        "gold",
                        30000
                    ],
                    "value": [
                        "rate",
                        1.15
                    ],
                    "price": [
                        "gold",
                        10000
                    ],
                    "build_val": {
                        "c": 0,
                        "a": 100,
                        "b": 0
                    },
                    "info": "国威浩荡，增幅附近的塔15%攻击频率。只有国庆前后可以建造，每图最多建造2个",
                    "limit_num": 2,
                    "range": -3,
                    "index": -11,
                    "name": "盘龙柱"
                },
                "niulang": {
                    "camp_price": [
                        "gold",
                        53331
                    ],
                    "value": [
                        "damage",
                        1.2
                    ],
                    "price": [
                        "gold",
                        17777
                    ],
                    "build_val": {
                        "c": 0,
                        "a": 100,
                        "b": 0
                    },
                    "info": "遥望织女的牛郎，增幅附近的塔20%攻击力。只有七夕前后可以建造，每图最多建造1个",
                    "limit_num": 1,
                    "range": -3,
                    "index": -21,
                    "name": "牛郎雕像"
                },
                "zhinv": {
                    "camp_price": [
                        "gold",
                        53331
                    ],
                    "value": [
                        "range",
                        1.2
                    ],
                    "price": [
                        "gold",
                        17777
                    ],
                    "build_val": {
                        "c": 0,
                        "a": 100,
                        "b": 0
                    },
                    "info": "遥望牛郎的织女，增幅附近的塔20%射程。只有七夕前后可以建造，每图最多建造1个",
                    "limit_num": 1,
                    "range": -3,
                    "index": -11,
                    "name": "织女雕像"
                },
                "denglou": {
                    "camp_price": [
                        "gold",
                        45
                    ],
                    "price": [
                        "gold",
                        15
                    ],
                    "info": "挂满华美花灯的小楼，相当喜庆。只有正月十五前后可以建造",
                    "build_val": {
                        "c": 0,
                        "a": 50,
                        "b": 0
                    },
                    "index": -11,
                    "name": "元宵灯楼"
                },
                "qiang": {
                    "camp_price": [
                        "gold",
                        30
                    ],
                    "price": [
                        "gold",
                        10
                    ],
                    "info": "无法攻击，但占位一格的障碍。可用于快速布局",
                    "build_val": {
                        "c": 0,
                        "a": 30,
                        "b": 0
                    },
                    "index": 100,
                    "name": "墙"
                }
            },
            "tower": {
                "shaota": {
                    "skill": "",
                    "rate": 18,
                    "buffEffect": 0,
                    "bId": "bullet010",
                    "grade": [
                        4,
                        2,
                        7,
                        2,
                        2
                    ],
                    "skillLv": 0,
                    "index": 10,
                    "name": "哨塔",
                    "camp_price": [
                        "gold",
                        300
                    ],
                    "camp_build_val": {
                        "c": 16,
                        "a": 120,
                        "b": 24
                    },
                    "price": [
                        "gold",
                        100
                    ],
                    "bHeight": 600,
                    "build_cost": {
                        "c": 0.015,
                        "a": 20,
                        "b": 2.543
                    },
                    "bSpeed": 250,
                    "gemHeight": 600,
                    "info": "造的快，性价比高，省钱一族的最爱",
                    "camp_build_cost": {
                        "c": 0.045,
                        "a": 60,
                        "b": 7.629
                    },
                    "damage": {
                        "c": 0.075,
                        "a": 7,
                        "b": 0.93
                    },
                    "build_val": {
                        "c": 10.343,
                        "a": 75,
                        "b": 18
                    },
                    "lev_max": 100,
                    "range": 1800
                },
                "sandanta": {
                    "skill": "DivAP3",
                    "rate": 12,
                    "price": [
                        "gold",
                        200
                    ],
                    "buffEffect": 0,
                    "bId": "bullet010",
                    "grade": [
                        3,
                        4,
                        5,
                        3,
                        2
                    ],
                    "skillLv": 20,
                    "lev_max": 100,
                    "name": "散弹塔",
                    "camp_price": [
                        "gold",
                        600
                    ],
                    "camp_build_val": {
                        "c": 18,
                        "a": 150,
                        "b": 26
                    },
                    "damage": {
                        "c": 0.0347,
                        "a": 3,
                        "b": 1
                    },
                    "bHeight": 800,
                    "build_cost": {
                        "c": 0.02,
                        "a": 30,
                        "b": 3.97298
                    },
                    "gemHeight": 800,
                    "info": "可同时追踪3个目标，对空造成2倍伤害",
                    "res": "sandanta",
                    "camp_build_cost": {
                        "c": 0.06,
                        "a": 90,
                        "b": 11.91894
                    },
                    "bSpeed": 150,
                    "build_val": {
                        "c": 10.343,
                        "a": 75,
                        "b": 18
                    },
                    "index": 20,
                    "range": 2200
                },
                "paota": {
                    "skill": "AoeAP2",
                    "rate": 3,
                    "price": [
                        "gold",
                        260
                    ],
                    "buffEffect": 0,
                    "bId": "bullet020",
                    "grade": [
                        10,
                        10,
                        1,
                        4,
                        4
                    ],
                    "skillLv": 10,
                    "lev_max": 100,
                    "name": "炮塔",
                    "camp_price": [
                        "gold",
                        780
                    ],
                    "camp_build_val": {
                        "c": 20,
                        "a": 180,
                        "b": 30
                    },
                    "damage": {
                        "c": 0.31,
                        "a": 41,
                        "b": 3.59
                    },
                    "bHeight": 750,
                    "build_cost": {
                        "c": 0.032,
                        "a": 40,
                        "b": 4.9431
                    },
                    "gemHeight": 750,
                    "info": "超远射程且有范围溅射，但攻速慢，只能对地",
                    "res": "paota",
                    "camp_build_cost": {
                        "c": 0.096,
                        "a": 120,
                        "b": 14.8293
                    },
                    "bSpeed": 100,
                    "build_val": {
                        "c": 20.705,
                        "a": 150,
                        "b": 36
                    },
                    "index": 30,
                    "range": 4000
                },
                "xiangqianta": {
                    "skill": "",
                    "rate": 10,
                    "buffEffect": 0.1,
                    "bId": "",
                    "grade": [
                        0,
                        3,
                        4,
                        8,
                        8
                    ],
                    "skillLv": 0,
                    "index": 40,
                    "name": "镶嵌塔",
                    "camp_price": [
                        "gold",
                        1500
                    ],
                    "camp_build_val": {
                        "c": 194.001,
                        "a": 380,
                        "b": 230
                    },
                    "price": [
                        "gold",
                        500
                    ],
                    "bHeight": 800,
                    "build_cost": {
                        "c": 0.7,
                        "a": 100,
                        "b": 34.971
                    },
                    "bSpeed": 180,
                    "gemHeight": 800,
                    "info": "镶嵌后获得相应攻击能力，高成本高回报",
                    "camp_build_cost": {
                        "c": 2.1,
                        "a": 300,
                        "b": 104.913
                    },
                    "damage": {
                        "c": 0,
                        "a": 0,
                        "b": 0
                    },
                    "build_val": {
                        "c": 242,
                        "a": 500,
                        "b": 308
                    },
                    "lev_max": 50,
                    "range": 2000
                },
                "bodongta": {
                    "skill": "ThoAP1",
                    "rate": 2,
                    "buffEffect": 0.1,
                    "bId": "bullet210",
                    "grade": [
                        10,
                        8,
                        2,
                        10,
                        10
                    ],
                    "skillLv": 10,
                    "index": -50,
                    "name": "波动塔",
                    "camp_price": [
                        "gold",
                        1500
                    ],
                    "camp_build_val": {
                        "c": 10.343,
                        "a": 75,
                        "b": 18
                    },
                    "price": [
                        "gold",
                        500
                    ],
                    "bHeight": 200,
                    "build_cost": {
                        "c": 0.7,
                        "a": 100,
                        "b": 34.971
                    },
                    "bSpeed": 210,
                    "gemHeight": 800,
                    "info": "直线贯穿型攻击，合理安排将效果卓越，只能对地",
                    "camp_build_cost": {
                        "c": 0.015,
                        "a": 20,
                        "b": 2.543
                    },
                    "damage": {
                        "c": 0.73,
                        "a": 20,
                        "b": 3.1
                    },
                    "build_val": {
                        "c": 242,
                        "a": 500,
                        "b": 308
                    },
                    "lev_max": 100,
                    "range": -6
                }
            }
        },
        "user_task": {
            "content": {
                "NB_invite_success": {
                    "time": "Mon Apr 26 20:52:04 GMT+0800 2021",
                    "gifts": {
                        "invite_score": 10
                    },
                    "aims": [
                        {
                            "action": "invite_success",
                            "info": "task_6^成功邀请",
                            "params": [
                                1
                            ]
                        }
                    ],
                    "aims_code": [
                        0
                    ],
                    "info": "task_5^成功邀请1个好友一起保卫羊村",
                    "status": 0,
                    "name": "task_4^请求援助"
                },
                "DL_own_n_nlevel_xtower_7": {
                    "time": "Sat Jun 26 22:45:47 GMT+0800 2021",
                    "gifts": {
                        "task_ids": [
                            "DL_own_n_nlevel_xtower_8"
                        ],
                        "properties": {
                            "card": {
                                "texp_C": 1
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "own_n_nlevel_xtower",
                            "info": "task_386^20级哨塔",
                            "params": [
                                1,
                                20,
                                "shaota"
                            ]
                        },
                        {
                            "action": "own_n_nlevel_xtower",
                            "info": "task_387^20级散弹塔",
                            "params": [
                                1,
                                20,
                                "sandanta"
                            ]
                        },
                        {
                            "action": "own_n_nlevel_xtower",
                            "info": "task_388^20级炮塔",
                            "params": [
                                1,
                                20,
                                "paota"
                            ]
                        },
                        {
                            "action": "own_n_nlevel_xtower",
                            "info": "task_389^20级镶嵌塔",
                            "params": [
                                1,
                                20,
                                "xiangqianta"
                            ]
                        }
                    ],
                    "aims_code": [
                        1,
                        1,
                        0,
                        0
                    ],
                    "info": "task_385^防线中拥有1座20级哨塔、20级散弹塔、20级炮塔、20级镶嵌塔",
                    "status": 0,
                    "name": "task_384^工程学院"
                },
                "KB_pk_random_wolfs_18": {
                    "time": "Wed Aug 18 23:48:18 GMT+0800 2021",
                    "gifts": {
                        "task_ids": [
                            "KB_pk_random_wolfs_19"
                        ],
                        "experience": 4000,
                        "properties": {
                            "gem": {
                                "hei4": 2
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "pk_random_wolfs",
                            "info": "task_216^消灭随机BOSS",
                            "params": [
                                24
                            ]
                        }
                    ],
                    "aims_code": [
                        19
                    ],
                    "info": "task_215^去前线消灭24个入侵羊村的随机BOSS狼",
                    "status": 0,
                    "name": "task_214^不怕你哦"
                },
                "Map_pass_map_m8B": {
                    "time": "Tue Aug 17 17:45:05 GMT+0800 2021",
                    "gifts": {
                        "task_ids": [
                            "Map_pass_map_m8C"
                        ],
                        "experience": 9000,
                        "properties": {
                            "snarp": {
                                "dicicao4": 2
                            },
                            "card": {
                                "sl1": 9
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "pass_map",
                            "info": "task_87^通过拉卡维村",
                            "params": [
                                1,
                                "m8B"
                            ]
                        }
                    ],
                    "aims_code": [
                        0
                    ],
                    "info": "task_86^战胜BOSS通关地图，开始新的冒险",
                    "status": 0,
                    "name": "task_85^胜利的旗帜"
                },
                "DL_del_barrier_7": {
                    "time": "Fri Aug 6 16:00:41 GMT+0800 2021",
                    "gifts": {
                        "task_ids": [
                            "DL_del_barrier_8"
                        ],
                        "properties": {
                            "snarp": {
                                "baozhatong3": 2,
                                "dicicao3": 2
                            },
                            "card": {
                                "texp_B": 1
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "del_barrier",
                            "info": "task_344^清除障碍物",
                            "params": [
                                7
                            ]
                        }
                    ],
                    "aims_code": [
                        6
                    ],
                    "info": "task_343^清除7个防线的障碍物\n（铁镐和锯子可在竞技场抽奖或商城购买）",
                    "status": 0,
                    "name": "task_342^大扫除"
                },
                "Map_pass_map_m0D": {
                    "time": "Mon Jul 12 06:54:06 GMT+0800 2021",
                    "gifts": {
                        "experience": 4500,
                        "properties": {
                            "snarp": {
                                "dicicao3": 1
                            },
                            "card": {
                                "sl1": 6
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "pass_map",
                            "info": "task_60^通过银蛇之巅",
                            "params": [
                                1,
                                "m0D"
                            ]
                        }
                    ],
                    "aims_code": [
                        0
                    ],
                    "info": "task_59^战胜BOSS通关地图，开始新的冒险",
                    "status": 0,
                    "name": "task_58^胜利的旗帜"
                },
                "Lv_steal_mine": {
                    "time": "Sun May 2 01:24:35 GMT+0800 2021",
                    "gifts": {
                        "properties": {
                            "tame": {
                                "wexp_A": 1
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "steal_mine",
                            "info": "task_317^抢夺好友矿山",
                            "params": [
                                1
                            ]
                        }
                    ],
                    "aims_code": [
                        0
                    ],
                    "info": "task_316^去好友家占领好友成为好友的领主，并抢收好友矿山的收益",
                    "status": 0,
                    "name": "task_315^征税时间到"
                },
                "TW_own_n_nlevel_xwolf_2": {
                    "time": "Fri Jun 4 23:14:09 GMT+0800 2021",
                    "gifts": {
                        "task_ids": [
                            "TW_add_wolf_skill_3"
                        ],
                        "properties": {
                            "tame": {
                                "wexp_A": 2
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "own_n_nlevel_xwolf",
                            "info": "task_249^5级沃克狼",
                            "params": [
                                1,
                                5,
                                "wkl"
                            ]
                        },
                        {
                            "action": "own_n_nlevel_xwolf",
                            "info": "task_250^5级保姆狼",
                            "params": [
                                1,
                                5,
                                "bml"
                            ]
                        }
                    ],
                    "aims_code": [
                        0,
                        0
                    ],
                    "info": "task_248^拥有1只5级沃克狼、1只5级保姆狼\n（狼卡片可在竞技场抽奖获得）",
                    "status": 0,
                    "name": "task_247^要定你了"
                },
                "Map_pass_map_m9C": {
                    "time": "Tue Aug 31 17:05:41 GMT+0800 2021",
                    "gifts": {
                        "experience": 5400,
                        "properties": {
                            "snarp": {
                                "baozhatong3": 2
                            },
                            "card": {
                                "sl1": 7
                            }
                        }
                    },
                    "aims": [
                        {
                            "action": "pass_map",
                            "info": "task_81^通过西利村",
                            "params": [
                                1,
                                "m9C"
                            ]
                        }
                    ],
                    "aims_code": [
                        0
                    ],
                    "info": "task_80^战胜BOSS通关地图，开始新的冒险",
                    "status": 0,
                    "name": "task_79^胜利的旗帜"
                }
            },
            "everyday_task": {}
        },
        "version_ctrl": {
            "canStealWolfClip": 0,
            "loading_url_href": "",
            "adFunCtrl": 1,
            "vWolf": "20120621_001",
            "textScaleX": 1,
            "canFeed": 0,
            "qqYellowVIP": 0,
            "canPay": 1,
            "ShopTag": [
                0,
                "UI_tag_5_0",
                0,
                "UI_tag_5",
                "UI_tag_5"
            ],
            "vDefenseMap": "20120427_001",
            "tagFunGroupUIBox": 1,
            "Yuanxiao": 0,
            "vInternational_config": "20120531_002",
            "vWorldMap": "20120621_002",
            "qqPoint": 0,
            "ToolsTag": [
                0,
                0,
                0,
                "UI_tag_5",
                "UI_tag_5"
            ],
            "vMap": "20120621_001",
            "vSound": "20110823_001",
            "MapsLevelNum": [
                6,
                11
            ],
            "coinBrush": 0,
            "loading_url": "loadingAD_001.swf",
            "MapsUI": [
                "TheWorld_ui_0",
                "TheWorld_ui_1",
                "TheWorld_ui_2"
            ],
            "loginAward_isFan": 0,
            "help_url": "",
            "EndMap": "m11",
            "MapsFun": [
                "TheWorld_fun_0",
                "TheWorld_fun_1",
                "TheWorld_fun_2"
            ],
            "Maps": [
                "m0A",
                "m0B",
                "m0C",
                "m0D",
                "m0E",
                "m0F",
                "m1",
                "m2",
                "m2A",
                "m2B",
                "m3",
                "m4A",
                "m4B",
                "m5",
                "m6",
                "m7",
                "m8A",
                "m8B",
                "m8C",
                "m9A",
                "m9B",
                "m9C",
                "m10",
                "m11",
                "m12A",
                "m12B",
                "m13A",
                "m13B",
                "m14A",
                "m14B",
                "m15",
                "m16"
            ]
        },
        "skill": {
            "monsterSkill": {
                "ResistLight_B": {
                    "levels": [
                        [
                            0.04
                        ],
                        [
                            0.09
                        ],
                        [
                            0.14
                        ],
                        [
                            0.18
                        ],
                        [
                            0.26
                        ],
                        [
                            0.34
                        ],
                        [
                            0.41
                        ],
                        [
                            0.48
                        ],
                        [
                            0.57
                        ],
                        [
                            0.71
                        ]
                    ],
                    "kindId": "resistLight",
                    "name": "中级抗光"
                },
                "Reborn_Z2": {
                    "levels": [
                        [
                            [
                                "xtxl",
                                "xtxl",
                                "xtxl",
                                "xtxl"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "WeakLight_X5": {
                    "levels": [
                        [
                            -0.84
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "Divide_Z3": {
                    "levels": [
                        [
                            4,
                            8,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.35
                        ]
                    ],
                    "kindId": "divide",
                    "name": "分身"
                },
                "ResistBeat_B": {
                    "levels": [
                        [
                            0.02
                        ],
                        [
                            0.04
                        ],
                        [
                            0.05
                        ],
                        [
                            0.07
                        ],
                        [
                            0.11
                        ],
                        [
                            0.14
                        ],
                        [
                            0.18
                        ],
                        [
                            0.22
                        ],
                        [
                            0.28
                        ],
                        [
                            0.41
                        ]
                    ],
                    "kindId": "resistBeat",
                    "name": "中级抗击退"
                },
                "ResistFrost_Z1": {
                    "levels": [
                        [
                            0.72
                        ]
                    ],
                    "kindId": "resistFrost",
                    "name": "高级抗冰"
                },
                "Cloud_Z6": {
                    "levels": [
                        [
                            2,
                            4,
                            0.6,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.5,
                            1000,
                            10
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "Reborn_Z3": {
                    "levels": [
                        [
                            [
                                "fsyjblt"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "Invisible_Z6": {
                    "levels": [
                        [
                            2,
                            5,
                            1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            4
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "隐身"
                },
                "Cloud_B": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.12
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.24
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.36
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.48
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.72
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.96
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.2
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.44
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.8
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            3.4
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "中级乌云"
                },
                "Summon_B": {
                    "levels": [
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.12
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.14
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.16
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.18
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.22
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.26
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.3
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.34
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.4
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.5
                        ]
                    ],
                    "kindId": "summon",
                    "name": "中级召唤"
                },
                "WeakFire_X4": {
                    "levels": [
                        [
                            -1.5
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "Reborn_Z1": {
                    "levels": [
                        [
                            [
                                "al"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "Invisible_Z4": {
                    "levels": [
                        [
                            2,
                            10,
                            1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            6
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "隐身"
                },
                "WeakLight_X2": {
                    "levels": [
                        [
                            -0.28
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "WeakSilence_X7": {
                    "levels": [
                        [
                            -1.66
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "Summon_C": {
                    "levels": [
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.13
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.16
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.19
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.22
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.28
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.34
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.4
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.46
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.55
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.7
                        ]
                    ],
                    "kindId": "summon",
                    "name": "高级召唤"
                },
                "WeakBeat_X8": {
                    "levels": [
                        [
                            -0.35
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "Invisible_Z1": {
                    "levels": [
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5.8
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "高级隐身"
                },
                "Taunt_Z1": {
                    "levels": [
                        [
                            2,
                            10,
                            0.2,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            1
                        ]
                    ],
                    "kindId": "taunt",
                    "name": "嘲讽"
                },
                "ResistCrit_Z1": {
                    "levels": [
                        [
                            1
                        ]
                    ],
                    "kindId": "resistCrit",
                    "name": "高级抗暴击"
                },
                "MassTreatment_Z6": {
                    "levels": [
                        [
                            5,
                            5,
                            0.6,
                            [
                                2
                            ],
                            0.7,
                            1500,
                            0.05
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "群疗"
                },
                "Divide_Z4": {
                    "levels": [
                        [
                            4,
                            8,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            4,
                            0.35
                        ]
                    ],
                    "kindId": "divide",
                    "name": "分身"
                },
                "MassTreatment_Z3": {
                    "levels": [
                        [
                            2,
                            100,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.12
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "群疗"
                },
                "Cloud_Z1": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.5,
                            1000,
                            1.8
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "WeakBeat_X1": {
                    "levels": [
                        [
                            -0.04
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "MassTreatment_Z8": {
                    "levels": [
                        [
                            2,
                            4,
                            0.6,
                            [
                                1,
                                2
                            ],
                            0.7,
                            2000,
                            0.1
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "群疗"
                },
                "Taunt_Z2": {
                    "levels": [
                        [
                            2,
                            10,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.97
                        ]
                    ],
                    "kindId": "taunt",
                    "name": "高级嘲讽"
                },
                "Invisible_C": {
                    "levels": [
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.4
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2.4
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            3
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            3.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            4.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            4.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5.8
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "高级隐身"
                },
                "Blink_Z3": {
                    "levels": [
                        [
                            2,
                            3,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            0.3,
                            2000
                        ]
                    ],
                    "kindId": "blink",
                    "name": "闪烁"
                },
                "Blink_Z2": {
                    "levels": [
                        [
                            3,
                            4,
                            0.5,
                            [
                                3,
                                4
                            ],
                            0.3,
                            2250
                        ]
                    ],
                    "kindId": "blink",
                    "name": "闪烁"
                },
                "WeakCrit_X8": {
                    "levels": [
                        [
                            -6
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "Cloud_Z2": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.5,
                            1000,
                            2.2
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "Invisible_B": {
                    "levels": [
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.4
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            3.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            3.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            4.4
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "中级隐身"
                },
                "Blink_Z1": {
                    "levels": [
                        [
                            3,
                            4,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            0.3,
                            1000
                        ]
                    ],
                    "kindId": "blink",
                    "name": "闪烁"
                },
                "WeakBeat_X2": {
                    "levels": [
                        [
                            -0.08
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "Burst_A": {
                    "levels": [
                        [
                            2000,
                            0.2
                        ],
                        [
                            2000,
                            0.4
                        ],
                        [
                            2000,
                            0.6
                        ],
                        [
                            2000,
                            0.8
                        ],
                        [
                            2000,
                            1
                        ],
                        [
                            2000,
                            1.4
                        ],
                        [
                            2000,
                            1.8
                        ],
                        [
                            2000,
                            2.2
                        ],
                        [
                            2000,
                            2.6
                        ],
                        [
                            2000,
                            3
                        ]
                    ],
                    "kindId": "burst",
                    "name": "初级自爆"
                },
                "Cloud_Z3": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.5,
                            1000,
                            2.8
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "WeakBeat_X4": {
                    "levels": [
                        [
                            -0.15
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "ResistSilence_B": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistSilence",
                    "name": "中级抗沉默"
                },
                "WeakBeat_X3": {
                    "levels": [
                        [
                            -0.12
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "Invisible_A": {
                    "levels": [
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.4
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.6
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            0.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.4
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.8
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2.2
                        ],
                        [
                            2,
                            10,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2.6
                        ]
                    ],
                    "kindId": "invisible",
                    "name": "初级隐身"
                },
                "Cloud_A": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.06
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.12
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.18
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.24
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.36
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.48
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.6
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.72
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.9
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.2
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "初级乌云"
                },
                "ResistPoison_C": {
                    "levels": [
                        [
                            0.07
                        ],
                        [
                            0.14
                        ],
                        [
                            0.2
                        ],
                        [
                            0.26
                        ],
                        [
                            0.38
                        ],
                        [
                            0.48
                        ],
                        [
                            0.57
                        ],
                        [
                            0.66
                        ],
                        [
                            0.77
                        ],
                        [
                            0.93
                        ]
                    ],
                    "kindId": "resistPoison",
                    "name": "高级抗毒"
                },
                "WeakBeat_X5": {
                    "levels": [
                        [
                            -0.19
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "Burst_C": {
                    "levels": [
                        [
                            2000,
                            0.6
                        ],
                        [
                            2000,
                            1.2
                        ],
                        [
                            2000,
                            1.8
                        ],
                        [
                            2000,
                            2.4
                        ],
                        [
                            2000,
                            3
                        ],
                        [
                            2000,
                            3.8
                        ],
                        [
                            2000,
                            4.6
                        ],
                        [
                            2000,
                            5.4
                        ],
                        [
                            2000,
                            6.2
                        ],
                        [
                            2000,
                            7
                        ]
                    ],
                    "kindId": "burst",
                    "name": "高级自爆"
                },
                "MassTreatment_Z7": {
                    "levels": [
                        [
                            2,
                            4,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.08
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "群疗"
                },
                "Shield_Z4": {
                    "levels": [
                        [
                            5,
                            5,
                            1,
                            [
                                1,
                                2,
                                3
                            ],
                            1,
                            2000,
                            5,
                            0.8
                        ]
                    ],
                    "kindId": "shield",
                    "name": "护盾"
                },
                "ResistPoison_B": {
                    "levels": [
                        [
                            0.04
                        ],
                        [
                            0.09
                        ],
                        [
                            0.14
                        ],
                        [
                            0.18
                        ],
                        [
                            0.26
                        ],
                        [
                            0.34
                        ],
                        [
                            0.41
                        ],
                        [
                            0.48
                        ],
                        [
                            0.57
                        ],
                        [
                            0.71
                        ]
                    ],
                    "kindId": "resistPoison",
                    "name": "中级抗毒"
                },
                "WeakSilence_X4": {
                    "levels": [
                        [
                            -0.74
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "Cloud_Z5": {
                    "levels": [
                        [
                            2,
                            5,
                            0.6,
                            [
                                2,
                                3,
                                4
                            ],
                            0.5,
                            1000,
                            8
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "Burst_B": {
                    "levels": [
                        [
                            2000,
                            0.4
                        ],
                        [
                            2000,
                            0.8
                        ],
                        [
                            2000,
                            1.2
                        ],
                        [
                            2000,
                            1.6
                        ],
                        [
                            2000,
                            2
                        ],
                        [
                            2000,
                            2.6
                        ],
                        [
                            2000,
                            3.2
                        ],
                        [
                            2000,
                            3.8
                        ],
                        [
                            2000,
                            4.4
                        ],
                        [
                            2000,
                            5
                        ]
                    ],
                    "kindId": "burst",
                    "name": "中级自爆"
                },
                "Revive_B": {
                    "levels": [
                        [
                            1,
                            0.02
                        ],
                        [
                            1,
                            0.04
                        ],
                        [
                            1,
                            0.06
                        ],
                        [
                            1,
                            0.08
                        ],
                        [
                            1,
                            0.12
                        ],
                        [
                            1,
                            0.16
                        ],
                        [
                            1,
                            0.2
                        ],
                        [
                            1,
                            0.24
                        ],
                        [
                            1,
                            0.3
                        ],
                        [
                            1,
                            0.4
                        ]
                    ],
                    "kindId": "revive",
                    "name": "中级重生"
                },
                "Morph_Z3": {
                    "levels": [
                        [
                            2,
                            5,
                            1,
                            [
                                1
                            ],
                            1,
                            "ybklrXX"
                        ]
                    ],
                    "kindId": "morph",
                    "name": "变身"
                },
                "Cloud_C": {
                    "levels": [
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.18
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.36
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.54
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            1.72
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.08
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.44
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            2.8
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            3.16
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            3.7
                        ],
                        [
                            2,
                            5,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            1000,
                            4.6
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "高级乌云"
                },
                "WeakBeat_X6": {
                    "levels": [
                        [
                            -0.22
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "WeakSilence_X8": {
                    "levels": [
                        [
                            -2.24
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "Blink_Z4": {
                    "levels": [
                        [
                            2,
                            2,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            0.3,
                            1500
                        ]
                    ],
                    "kindId": "blink",
                    "name": "闪烁"
                },
                "WeakBeat_X7": {
                    "levels": [
                        [
                            -0.29
                        ]
                    ],
                    "kindId": "weakBeat",
                    "name": "怕击退"
                },
                "Blink_Z5": {
                    "levels": [
                        [
                            2,
                            10,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            0.3,
                            1315
                        ]
                    ],
                    "kindId": "blink",
                    "name": "高级闪烁"
                },
                "Burst_Z6": {
                    "levels": [
                        [
                            3000,
                            20
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "Divide_C": {
                    "levels": [
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.03
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.06
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.09
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.12
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.18
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.24
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.3
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.36
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.45
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.6
                        ]
                    ],
                    "kindId": "divide",
                    "name": "高级分身"
                },
                "Morph_Z1": {
                    "levels": [
                        [
                            5,
                            5,
                            1,
                            [
                                1
                            ],
                            1,
                            "al"
                        ]
                    ],
                    "kindId": "morph",
                    "name": "变身"
                },
                "Shield_Z1": {
                    "levels": [
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3
                            ],
                            1.5,
                            1500,
                            5,
                            0.5
                        ]
                    ],
                    "kindId": "shield",
                    "name": "护盾"
                },
                "Divide_A": {
                    "levels": [
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.01
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.02
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.03
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.04
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.06
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.08
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.1
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.12
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.15
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.2
                        ]
                    ],
                    "kindId": "divide",
                    "name": "初级分身"
                },
                "Revive_C": {
                    "levels": [
                        [
                            1,
                            0.03
                        ],
                        [
                            1,
                            0.06
                        ],
                        [
                            1,
                            0.09
                        ],
                        [
                            1,
                            0.12
                        ],
                        [
                            1,
                            0.18
                        ],
                        [
                            1,
                            0.24
                        ],
                        [
                            1,
                            0.3
                        ],
                        [
                            1,
                            0.36
                        ],
                        [
                            1,
                            0.45
                        ],
                        [
                            1,
                            0.6
                        ]
                    ],
                    "kindId": "revive",
                    "name": "高级重生"
                },
                "WeakCrit_X2": {
                    "levels": [
                        [
                            -0.67
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "Sprint_B": {
                    "levels": [
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.09
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.18
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.27
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.37
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.57
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.78
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1.22
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1.58
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            2.25
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "中级狂奔"
                },
                "WeakPoison_X2": {
                    "levels": [
                        [
                            -0.28
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Taunt_B": {
                    "levels": [
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.02
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.05
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.08
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.1
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.16
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.21
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.26
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.32
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.4
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.53
                        ]
                    ],
                    "kindId": "taunt",
                    "name": "中级嘲讽"
                },
                "Taunt_C": {
                    "levels": [
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.04
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.08
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.12
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.16
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.24
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.32
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.4
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.48
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.6
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.8
                        ]
                    ],
                    "kindId": "taunt",
                    "name": "高级嘲讽"
                },
                "WeakCrit_X1": {
                    "levels": [
                        [
                            -0.32
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "Divide_B": {
                    "levels": [
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.02
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.04
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.06
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.08
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.12
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.16
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.2
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.24
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.3
                        ],
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.4
                        ]
                    ],
                    "kindId": "divide",
                    "name": "中级分身"
                },
                "Revive_Z1": {
                    "levels": [
                        [
                            1,
                            0.6
                        ]
                    ],
                    "kindId": "revive",
                    "name": "高级重生"
                },
                "ResistSilence_A": {
                    "levels": [
                        [
                            0.02
                        ],
                        [
                            0.06
                        ],
                        [
                            0.1
                        ],
                        [
                            0.12
                        ],
                        [
                            0.2
                        ],
                        [
                            0.26
                        ],
                        [
                            0.34
                        ],
                        [
                            0.4
                        ],
                        [
                            0.52
                        ],
                        [
                            0.7
                        ]
                    ],
                    "kindId": "resistSilence",
                    "name": "初级抗沉默"
                },
                "WeakCrit_X5": {
                    "levels": [
                        [
                            -2
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "Taunt_A": {
                    "levels": [
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.01
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.02
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.04
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.05
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.08
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.1
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.13
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.16
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.2
                        ],
                        [
                            2,
                            6,
                            0.3,
                            [
                                2,
                                3,
                                4
                            ],
                            3,
                            2500,
                            0.26
                        ]
                    ],
                    "kindId": "taunt",
                    "name": "初级嘲讽"
                },
                "ResistVertigo_Z1": {
                    "levels": [
                        [
                            1
                        ]
                    ],
                    "kindId": "resistVertigo",
                    "name": "高级抗眩晕"
                },
                "WeakCrit_X4": {
                    "levels": [
                        [
                            -1.5
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "WeakVertigo_X8": {
                    "levels": [
                        [
                            -1.12
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "Airborne_Z1": {
                    "levels": [
                        [
                            -20,
                            7,
                            9
                        ]
                    ],
                    "kindId": "airborne",
                    "name": "空降"
                },
                "Revive_Z3": {
                    "levels": [
                        [
                            1,
                            0.8
                        ]
                    ],
                    "kindId": "revive",
                    "name": "重生"
                },
                "Revive_Z2": {
                    "levels": [
                        [
                            1,
                            0.7
                        ]
                    ],
                    "kindId": "revive",
                    "name": "重生"
                },
                "WeakSilence_X2": {
                    "levels": [
                        [
                            -0.36
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "Revive_A": {
                    "levels": [
                        [
                            1,
                            0.01
                        ],
                        [
                            1,
                            0.02
                        ],
                        [
                            1,
                            0.03
                        ],
                        [
                            1,
                            0.04
                        ],
                        [
                            1,
                            0.06
                        ],
                        [
                            1,
                            0.08
                        ],
                        [
                            1,
                            0.1
                        ],
                        [
                            1,
                            0.12
                        ],
                        [
                            1,
                            0.15
                        ],
                        [
                            1,
                            0.2
                        ]
                    ],
                    "kindId": "revive",
                    "name": "初级重生"
                },
                "Morph_Z4": {
                    "levels": [
                        [
                            2,
                            5,
                            1,
                            [
                                1
                            ],
                            1,
                            "ybklrX"
                        ]
                    ],
                    "kindId": "morph",
                    "name": "变身"
                },
                "WeakPoison_X6": {
                    "levels": [
                        [
                            -1.08
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Morph_Z5": {
                    "levels": [
                        [
                            2,
                            5,
                            1,
                            [
                                1
                            ],
                            1,
                            "byl2"
                        ]
                    ],
                    "kindId": "morph",
                    "name": "变身"
                },
                "WeakPoison_X1": {
                    "levels": [
                        [
                            -0.14
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Summon_Z8": {
                    "levels": [
                        [
                            3,
                            10,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            "xiaohuil",
                            3,
                            1
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "Sprint_Z1": {
                    "levels": [
                        [
                            0,
                            6,
                            1,
                            [
                                2
                            ],
                            1,
                            1.5
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "狂奔"
                },
                "WeakPoison_X7": {
                    "levels": [
                        [
                            -1.67
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Revive_Z4": {
                    "levels": [
                        [
                            2,
                            0.6
                        ]
                    ],
                    "kindId": "revive",
                    "name": "重生"
                },
                "Sprint_Z2": {
                    "levels": [
                        [
                            0,
                            3,
                            1,
                            [
                                1
                            ],
                            1,
                            1
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "狂奔"
                },
                "WeakSilence_X3": {
                    "levels": [
                        [
                            -0.56
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "WeakCrit_X3": {
                    "levels": [
                        [
                            -1.06
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "WeakPoison_X4": {
                    "levels": [
                        [
                            -0.63
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "ResistFrost_A": {
                    "levels": [
                        [
                            0.01
                        ],
                        [
                            0.03
                        ],
                        [
                            0.05
                        ],
                        [
                            0.07
                        ],
                        [
                            0.1
                        ],
                        [
                            0.14
                        ],
                        [
                            0.17
                        ],
                        [
                            0.2
                        ],
                        [
                            0.25
                        ],
                        [
                            0.32
                        ]
                    ],
                    "kindId": "resistFrost",
                    "name": "初级抗冰"
                },
                "ResistFrost_B": {
                    "levels": [
                        [
                            0.03
                        ],
                        [
                            0.07
                        ],
                        [
                            0.1
                        ],
                        [
                            0.14
                        ],
                        [
                            0.2
                        ],
                        [
                            0.26
                        ],
                        [
                            0.32
                        ],
                        [
                            0.37
                        ],
                        [
                            0.44
                        ],
                        [
                            0.54
                        ]
                    ],
                    "kindId": "resistFrost",
                    "name": "中级抗冰"
                },
                "ResistVertigo_A": {
                    "levels": [
                        [
                            0.01
                        ],
                        [
                            0.03
                        ],
                        [
                            0.05
                        ],
                        [
                            0.06
                        ],
                        [
                            0.1
                        ],
                        [
                            0.13
                        ],
                        [
                            0.17
                        ],
                        [
                            0.2
                        ],
                        [
                            0.26
                        ],
                        [
                            0.35
                        ]
                    ],
                    "kindId": "resistVertigo",
                    "name": "初级抗眩晕"
                },
                "ResistVertigo_B": {
                    "levels": [
                        [
                            0.03
                        ],
                        [
                            0.06
                        ],
                        [
                            0.1
                        ],
                        [
                            0.13
                        ],
                        [
                            0.2
                        ],
                        [
                            0.27
                        ],
                        [
                            0.35
                        ],
                        [
                            0.42
                        ],
                        [
                            0.55
                        ],
                        [
                            0.7
                        ]
                    ],
                    "kindId": "resistVertigo",
                    "name": "中级抗眩晕"
                },
                "WeakPoison_X5": {
                    "levels": [
                        [
                            -0.84
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Summon_Z3": {
                    "levels": [
                        [
                            3,
                            6,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            "jxl",
                            1,
                            0.8
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "ResistCrit_B": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistCrit",
                    "name": "中级抗暴击"
                },
                "WeakFire_X2": {
                    "levels": [
                        [
                            -0.67
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "ResistCrit_C": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistCrit",
                    "name": "高级抗暴击"
                },
                "WeakFire_X1": {
                    "levels": [
                        [
                            -0.32
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "ResistFrost_C": {
                    "levels": [
                        [
                            0.05
                        ],
                        [
                            0.1
                        ],
                        [
                            0.15
                        ],
                        [
                            0.2
                        ],
                        [
                            0.29
                        ],
                        [
                            0.37
                        ],
                        [
                            0.44
                        ],
                        [
                            0.5
                        ],
                        [
                            0.59
                        ],
                        [
                            0.72
                        ]
                    ],
                    "kindId": "resistFrost",
                    "name": "高级抗冰"
                },
                "WeakSilence_X1": {
                    "levels": [
                        [
                            -0.18
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "ResistVertigo_C": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistVertigo",
                    "name": "高级抗眩晕"
                },
                "WeakFire_X8": {
                    "levels": [
                        [
                            -6
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "ResistCrit_A": {
                    "levels": [
                        [
                            0.05
                        ],
                        [
                            0.11
                        ],
                        [
                            0.17
                        ],
                        [
                            0.23
                        ],
                        [
                            0.33
                        ],
                        [
                            0.44
                        ],
                        [
                            0.54
                        ],
                        [
                            0.64
                        ],
                        [
                            0.78
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistCrit",
                    "name": "初级抗暴击"
                },
                "Shield_B": {
                    "levels": [
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.38
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.4
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.42
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.44
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.48
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.52
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.56
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.59
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.63
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.7
                        ]
                    ],
                    "kindId": "shield",
                    "name": "中级护盾"
                },
                "Blink_A": {
                    "levels": [
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            100
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            200
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            300
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            400
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            500
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            600
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            700
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            800
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            900
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1000
                        ]
                    ],
                    "kindId": "blink",
                    "name": "初级闪烁"
                },
                "WeakCrit_X6": {
                    "levels": [
                        [
                            -2.58
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "ResistSilence_Z1": {
                    "levels": [
                        [
                            1
                        ]
                    ],
                    "kindId": "resistSilence",
                    "name": "高级抗沉默"
                },
                "WeakSilence_X5": {
                    "levels": [
                        [
                            -0.94
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "WeakFire_X5": {
                    "levels": [
                        [
                            -2
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "Summon_Z7": {
                    "levels": [
                        [
                            5,
                            10,
                            0.2,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            "xiaohuil",
                            1,
                            0.5
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "Shield_C": {
                    "levels": [
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.39
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.42
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.45
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.48
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.54
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.59
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.63
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.67
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.73
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.81
                        ]
                    ],
                    "kindId": "shield",
                    "name": "高级护盾"
                },
                "Blink_B": {
                    "levels": [
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            200
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            350
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            500
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            650
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            800
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            950
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1100
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1250
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1400
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1550
                        ]
                    ],
                    "kindId": "blink",
                    "name": "中级闪烁"
                },
                "Summon_Z1": {
                    "levels": [
                        [
                            4,
                            100,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.6
                        ]
                    ],
                    "kindId": "summon",
                    "name": "高级召唤"
                },
                "Burst_Z3": {
                    "levels": [
                        [
                            2000,
                            14
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "WeakFire_X6": {
                    "levels": [
                        [
                            -2.58
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "Summon_Z6": {
                    "levels": [
                        [
                            3,
                            6,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            "feizeil",
                            1,
                            0.7
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "Shield_A": {
                    "levels": [
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.37
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.38
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.39
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.4
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.42
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.44
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.46
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.48
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.51
                        ],
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.56
                        ]
                    ],
                    "kindId": "shield",
                    "name": "初级护盾"
                },
                "Burst_Z2": {
                    "levels": [
                        [
                            2000,
                            8
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "Blink_C": {
                    "levels": [
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            300
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            500
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            700
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            900
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1100
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1300
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1500
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1700
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            1900
                        ],
                        [
                            2,
                            9,
                            0.5,
                            [
                                2,
                                3,
                                4
                            ],
                            1,
                            2100
                        ]
                    ],
                    "kindId": "blink",
                    "name": "高级闪烁"
                },
                "ResistPoison_Z1": {
                    "levels": [
                        [
                            0.93
                        ]
                    ],
                    "kindId": "resistPoison",
                    "name": "高级抗毒"
                },
                "Sprint_A": {
                    "levels": [
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.04
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.09
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.13
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.18
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.27
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.37
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.47
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.57
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.72
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "初级狂奔"
                },
                "WeakFire_X3": {
                    "levels": [
                        [
                            -1.06
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "Summon_Z2": {
                    "levels": [
                        [
                            3,
                            6,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1,
                            "xiaoliyuqil",
                            1,
                            0.7
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "Burst_Z1": {
                    "levels": [
                        [
                            2000,
                            2
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "ResistSilence_C": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistSilence",
                    "name": "高级抗沉默"
                },
                "Summon_Z4": {
                    "levels": [
                        [
                            3,
                            6,
                            0.5,
                            [
                                3,
                                4
                            ],
                            1,
                            "hudunl",
                            1,
                            0.7
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "WeakPoison_X8": {
                    "levels": [
                        [
                            -2.5
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "Isolation_Z2": {
                    "levels": [
                        [
                            1
                        ]
                    ],
                    "kindId": "isolation",
                    "name": "免疫电"
                },
                "Summon_Z5": {
                    "levels": [
                        [
                            3,
                            5,
                            0.5,
                            [
                                3,
                                4
                            ],
                            1,
                            "feitianl",
                            1,
                            0.5
                        ]
                    ],
                    "kindId": "summon",
                    "name": "召唤"
                },
                "Sprint_Z3": {
                    "levels": [
                        [
                            0,
                            3,
                            1,
                            [
                                1
                            ],
                            1.5,
                            2
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "狂奔"
                },
                "WeakVertigo_X5": {
                    "levels": [
                        [
                            -0.47
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "ResistBeat_Z1": {
                    "levels": [
                        [
                            0.81
                        ]
                    ],
                    "kindId": "resistBeat",
                    "name": "高级抗击退"
                },
                "ResistFire_Z1": {
                    "levels": [
                        [
                            1
                        ]
                    ],
                    "kindId": "resistFire",
                    "name": "高级抗火"
                },
                "ResistLight_C": {
                    "levels": [
                        [
                            0.07
                        ],
                        [
                            0.14
                        ],
                        [
                            0.2
                        ],
                        [
                            0.26
                        ],
                        [
                            0.38
                        ],
                        [
                            0.48
                        ],
                        [
                            0.57
                        ],
                        [
                            0.66
                        ],
                        [
                            0.77
                        ],
                        [
                            0.93
                        ]
                    ],
                    "kindId": "resistLight",
                    "name": "高级抗光"
                },
                "ResistFire_C": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistFire",
                    "name": "高级抗火"
                },
                "Sprint_Z4": {
                    "levels": [
                        [
                            0,
                            3,
                            1,
                            [
                                1
                            ],
                            2,
                            2.5
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "狂奔"
                },
                "MassTreatment_B": {
                    "levels": [
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.02
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.03
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.04
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.06
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.08
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.1
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.12
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.14
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.16
                        ],
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.18
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "中级群疗"
                },
                "WeakVertigo_X6": {
                    "levels": [
                        [
                            -0.58
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "Sprint_Z5": {
                    "levels": [
                        [
                            0,
                            3,
                            1,
                            [
                                1,
                                2
                            ],
                            1,
                            3
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "狂奔"
                },
                "WeakVertigo_X7": {
                    "levels": [
                        [
                            -0.83
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "ResistFire_B": {
                    "levels": [
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistFire",
                    "name": "中级抗火"
                },
                "WeakVertigo_X4": {
                    "levels": [
                        [
                            -0.37
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "WeakFire_X7": {
                    "levels": [
                        [
                            -4
                        ]
                    ],
                    "kindId": "weakFire",
                    "name": "怕火"
                },
                "Burst_Z5": {
                    "levels": [
                        [
                            3000,
                            14
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "MassTreatment_C": {
                    "levels": [
                        [
                            2,
                            20,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.04
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.06
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.08
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.1
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.12
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.14
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.16
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.18
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.22
                        ],
                        [
                            2,
                            15,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.3
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "高级群疗"
                },
                "WeakLight_X8": {
                    "levels": [
                        [
                            -2.5
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "ResistFire_A": {
                    "levels": [
                        [
                            0.05
                        ],
                        [
                            0.11
                        ],
                        [
                            0.17
                        ],
                        [
                            0.23
                        ],
                        [
                            0.33
                        ],
                        [
                            0.44
                        ],
                        [
                            0.54
                        ],
                        [
                            0.64
                        ],
                        [
                            0.78
                        ],
                        [
                            1
                        ]
                    ],
                    "kindId": "resistFire",
                    "name": "初级抗火"
                },
                "Burst_Z4": {
                    "levels": [
                        [
                            3000,
                            8
                        ]
                    ],
                    "kindId": "burst",
                    "name": "自爆"
                },
                "WeakVertigo_X1": {
                    "levels": [
                        [
                            -0.09
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "Shield_Z2": {
                    "levels": [
                        [
                            8,
                            5,
                            0.5,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1500,
                            5,
                            0.81
                        ]
                    ],
                    "kindId": "shield",
                    "name": "高级护盾"
                },
                "MassTreatment_A": {
                    "levels": [
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.01
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.02
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.02
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.03
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.04
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.05
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.06
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.07
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.08
                        ],
                        [
                            2,
                            25,
                            0.3,
                            [
                                1,
                                2
                            ],
                            1,
                            2000,
                            0.1
                        ]
                    ],
                    "kindId": "massTreatment",
                    "name": "初级群疗"
                },
                "WeakFrost_X1": {
                    "levels": [
                        [
                            -0.11
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "WeakVertigo_X3": {
                    "levels": [
                        [
                            -0.28
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "Fly_Z6": {
                    "levels": [
                        [
                            1100
                        ]
                    ],
                    "kindId": "fly",
                    "name": "飞行"
                },
                "ResistLight_Z1": {
                    "levels": [
                        [
                            0.93
                        ]
                    ],
                    "kindId": "resistLight",
                    "name": "高级抗光"
                },
                "WeakCrit_X7": {
                    "levels": [
                        [
                            -4
                        ]
                    ],
                    "kindId": "weakCrit",
                    "name": "怕暴击"
                },
                "WeakSilence_X6": {
                    "levels": [
                        [
                            -1.16
                        ]
                    ],
                    "kindId": "weakSilence",
                    "name": "怕沉默"
                },
                "WeakFrost_X3": {
                    "levels": [
                        [
                            -0.34
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "Sprint_C": {
                    "levels": [
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.13
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.27
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.42
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.57
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            0.89
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1.22
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1.58
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            1.97
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            2.61
                        ],
                        [
                            0,
                            3,
                            0.4,
                            [
                                1,
                                2
                            ],
                            1,
                            3.85
                        ]
                    ],
                    "kindId": "sprint",
                    "name": "高级狂奔"
                },
                "Reborn_Z6": {
                    "levels": [
                        [
                            [
                                "zibaol",
                                "feitianl",
                                "jingangl"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "WeakFrost_X2": {
                    "levels": [
                        [
                            -0.22
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "Cloud_Z4": {
                    "levels": [
                        [
                            2,
                            5,
                            0.3,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            1.5,
                            1000,
                            6
                        ]
                    ],
                    "kindId": "cloud",
                    "name": "乌云"
                },
                "WeakLight_X7": {
                    "levels": [
                        [
                            -1.67
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "WeakLight_X4": {
                    "levels": [
                        [
                            -0.63
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "WeakFrost_X5": {
                    "levels": [
                        [
                            -0.65
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "ResistBeat_A": {
                    "levels": [
                        [
                            0.01
                        ],
                        [
                            0.02
                        ],
                        [
                            0.03
                        ],
                        [
                            0.04
                        ],
                        [
                            0.05
                        ],
                        [
                            0.07
                        ],
                        [
                            0.09
                        ],
                        [
                            0.11
                        ],
                        [
                            0.13
                        ],
                        [
                            0.18
                        ]
                    ],
                    "kindId": "resistBeat",
                    "name": "初级抗击退"
                },
                "WeakVertigo_X2": {
                    "levels": [
                        [
                            -0.18
                        ]
                    ],
                    "kindId": "weakVertigo",
                    "name": "怕眩晕"
                },
                "WeakLight_X3": {
                    "levels": [
                        [
                            -0.45
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "WeakFrost_X4": {
                    "levels": [
                        [
                            -0.49
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "ResistPoison_A": {
                    "levels": [
                        [
                            0.02
                        ],
                        [
                            0.04
                        ],
                        [
                            0.07
                        ],
                        [
                            0.09
                        ],
                        [
                            0.14
                        ],
                        [
                            0.18
                        ],
                        [
                            0.22
                        ],
                        [
                            0.26
                        ],
                        [
                            0.32
                        ],
                        [
                            0.41
                        ]
                    ],
                    "kindId": "resistPoison",
                    "name": "初级抗毒"
                },
                "Reborn_Z7": {
                    "levels": [
                        [
                            [
                                "daomu5X"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "Reborn_Z4": {
                    "levels": [
                        [
                            [
                                "daomu6X"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "WeakFrost_X7": {
                    "levels": [
                        [
                            -1.29
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "WeakLight_X6": {
                    "levels": [
                        [
                            -1.08
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "ResistBeat_C": {
                    "levels": [
                        [
                            0.03
                        ],
                        [
                            0.05
                        ],
                        [
                            0.08
                        ],
                        [
                            0.11
                        ],
                        [
                            0.16
                        ],
                        [
                            0.22
                        ],
                        [
                            0.28
                        ],
                        [
                            0.36
                        ],
                        [
                            0.48
                        ],
                        [
                            0.81
                        ]
                    ],
                    "kindId": "resistBeat",
                    "name": "高级抗击退"
                },
                "WeakLight_X1": {
                    "levels": [
                        [
                            -0.14
                        ]
                    ],
                    "kindId": "weakLight",
                    "name": "怕光"
                },
                "WeakPoison_X3": {
                    "levels": [
                        [
                            -0.45
                        ]
                    ],
                    "kindId": "weakPoison",
                    "name": "怕毒"
                },
                "WeakFrost_X6": {
                    "levels": [
                        [
                            -0.83
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "Reborn_Z5": {
                    "levels": [
                        [
                            [
                                "zbjkX"
                            ]
                        ]
                    ],
                    "kindId": "reborn",
                    "name": "转生"
                },
                "Divide_Z1": {
                    "levels": [
                        [
                            4,
                            10,
                            0.25,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            5,
                            2,
                            0.6
                        ]
                    ],
                    "kindId": "divide",
                    "name": "高级分身"
                },
                "WeakFrost_X8": {
                    "levels": [
                        [
                            -1.93
                        ]
                    ],
                    "kindId": "weakFrost",
                    "name": "怕冰"
                },
                "ResistLight_A": {
                    "levels": [
                        [
                            0.02
                        ],
                        [
                            0.04
                        ],
                        [
                            0.07
                        ],
                        [
                            0.09
                        ],
                        [
                            0.14
                        ],
                        [
                            0.18
                        ],
                        [
                            0.22
                        ],
                        [
                            0.26
                        ],
                        [
                            0.32
                        ],
                        [
                            0.41
                        ]
                    ],
                    "kindId": "resistLight",
                    "name": "初级抗光"
                },
                "Summon_A": {
                    "levels": [
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.11
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.12
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.13
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.14
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.16
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.18
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.2
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.22
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.25
                        ],
                        [
                            4,
                            20,
                            0.1,
                            [
                                1,
                                2,
                                3,
                                4
                            ],
                            2,
                            "al",
                            1,
                            0.3
                        ]
                    ],
                    "kindId": "summon",
                    "name": "初级召唤"
                }
            },
            "towerSkill": {
                "Intimidate01": {
                    "kindId": "Intimidate",
                    "params": [
                        0.002,
                        1
                    ]
                },
                "AoeAP01": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.1
                    ]
                },
                "Poison01": {
                    "kindId": "Poison",
                    "params": [
                        0.015,
                        4
                    ]
                },
                "Crit01": {
                    "kindId": "Crit",
                    "params": [
                        0.002,
                        0.03,
                        0.03
                    ]
                },
                "Bul021": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet021"
                    ]
                },
                "AoeAP03": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.5
                    ]
                },
                "Cuss01": {
                    "kindId": "Cuss",
                    "params": [
                        0.1,
                        5
                    ]
                },
                "BCC": {
                    "kindId": "BC",
                    "params": [
                        -1
                    ]
                },
                "GuidedBul01": {
                    "kindId": "GuidedBul",
                    "params": [
                        0.3,
                        0.1,
                        1
                    ]
                },
                "ThoAP01": {
                    "kindId": "ThoAP",
                    "params": [
                        1,
                        1
                    ]
                },
                "AoeAP02": {
                    "kindId": "AoeAP",
                    "params": [
                        1000,
                        0.25
                    ]
                },
                "Bul214": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet214"
                    ]
                },
                "Bul211": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet211"
                    ]
                },
                "AoeAP05": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.7
                    ]
                },
                "Bul026": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet026"
                    ]
                },
                "ChangeRange01": {
                    "kindId": "ChangeRange",
                    "params": [
                        0,
                        0.01,
                        0,
                        -1
                    ]
                },
                "Bul215": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet215"
                    ]
                },
                "AoeAP04": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.6
                    ]
                },
                "Poison00": {
                    "kindId": "Poison",
                    "params": [
                        0.1,
                        12
                    ]
                },
                "Bul025": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet025"
                    ]
                },
                "AoeAP07": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.9
                    ]
                },
                "AttackAir0": {
                    "kindId": "AttackRate",
                    "params": [
                        1,
                        0
                    ]
                },
                "Huobian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        27,
                        3.86,
                        1.192
                    ]
                },
                "AoeAP06": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        0.8
                    ]
                },
                "Silence01": {
                    "kindId": "Silence",
                    "params": [
                        0.003,
                        3
                    ]
                },
                "Bul212": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet212"
                    ]
                },
                "Bul012": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet012"
                    ]
                },
                "Bul009": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet009"
                    ]
                },
                "RedDef01": {
                    "kindId": "RedDef",
                    "params": [
                        0.008,
                        3
                    ]
                },
                "Bul213": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet213"
                    ]
                },
                "AoeAP08": {
                    "kindId": "AoeAP",
                    "params": [
                        800,
                        1
                    ]
                },
                "Vertigo01": {
                    "kindId": "Vertigo",
                    "params": [
                        0.004,
                        2
                    ]
                },
                "Jianbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        8,
                        1.84,
                        0.2
                    ]
                },
                "Bul013": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet013"
                    ]
                },
                "Dubian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        4,
                        1.67,
                        0.205
                    ]
                },
                "Bul003": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet003"
                    ]
                },
                "ALLAP01": {
                    "kindId": "ALLAP",
                    "params": [
                        0.004
                    ]
                },
                "Bul050": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet050"
                    ]
                },
                "Bul010": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet010"
                    ]
                },
                "Cussbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        21,
                        3.07,
                        0.73
                    ]
                },
                "CD01": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0.01,
                        0,
                        0,
                        0
                    ]
                },
                "AttackAir3": {
                    "kindId": "AttackRate",
                    "params": [
                        1,
                        2
                    ]
                },
                "Bingbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        18,
                        2.14,
                        0.35
                    ]
                },
                "Bul011": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet011"
                    ]
                },
                "Beat01": {
                    "kindId": "Beat",
                    "params": [
                        0.002,
                        800
                    ]
                },
                "ScaAP01": {
                    "kindId": "ScaAP",
                    "params": [
                        0.1
                    ]
                },
                "CD12": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        -0.005,
                        0,
                        0,
                        0
                    ]
                },
                "Sanbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        30,
                        2,
                        0.5
                    ]
                },
                "Bul100": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet100"
                    ]
                },
                "Bul023": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet023"
                    ]
                },
                "GuidedBul02": {
                    "kindId": "GuidedBul",
                    "params": [
                        0.25,
                        0,
                        1
                    ]
                },
                "CD02": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0.2,
                        0,
                        0,
                        0
                    ]
                },
                "Slow01": {
                    "kindId": "Slow",
                    "params": [
                        0.004,
                        3
                    ]
                },
                "Bul024": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet024"
                    ]
                },
                "Quanbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0.01,
                        9,
                        2.8,
                        0.4205
                    ]
                },
                "DivAP01": {
                    "kindId": "DivAP",
                    "params": [
                        0.1
                    ]
                },
                "GuidedBul03": {
                    "kindId": "GuidedBul",
                    "params": [
                        0,
                        0,
                        -6
                    ]
                },
                "Slow03": {
                    "kindId": "Slow",
                    "params": [
                        0.01,
                        8
                    ]
                },
                "CR03": {
                    "kindId": "ChangeRate",
                    "params": [
                        -0.3,
                        -0.005,
                        0
                    ]
                },
                "Bul015": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet015"
                    ]
                },
                "Tanbian": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        0,
                        24,
                        4.52,
                        1.02
                    ]
                },
                "Slow02": {
                    "kindId": "Slow",
                    "params": [
                        0.007,
                        5
                    ]
                },
                "CD11": {
                    "kindId": "ChangeDam",
                    "params": [
                        0,
                        -0.001,
                        0,
                        0,
                        0
                    ]
                },
                "Bul060": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet060"
                    ]
                },
                "Bul040": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet040"
                    ]
                },
                "Poison02": {
                    "kindId": "Poison",
                    "params": [
                        0.01,
                        2
                    ]
                },
                "ComAP01": {
                    "kindId": "ComAP",
                    "params": [
                        0.075,
                        0.1
                    ]
                },
                "ChangeRange02": {
                    "kindId": "ChangeRange",
                    "params": [
                        0,
                        0.015,
                        0,
                        2000
                    ]
                },
                "Bul020": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet020"
                    ]
                },
                "BouAP01": {
                    "kindId": "BouAP",
                    "params": [
                        0.1,
                        0.005
                    ]
                },
                "BCB": {
                    "kindId": "BC",
                    "params": [
                        1
                    ]
                },
                "Bul022": {
                    "kindId": "Bultype",
                    "params": [
                        "bullet022"
                    ]
                }
            }
        },
        "level_up_gift": {
            "4": {
                "gold": 1800,
                "properties": {
                    "gem": {
                        "hong1": 1
                    }
                }
            },
            "5": {
                "task_ids": [
                    "Lv_use_wc",
                    "DL_del_barrier_1",
                    "DL_own_n_nlevel_xtower_1"
                ],
                "gold": 2000,
                "properties": {
                    "gem": {
                        "hong1": 1
                    },
                    "card": {
                        "sl1": 1
                    }
                }
            },
            "6": {
                "gold": 2200,
                "properties": {
                    "gem": {
                        "lv1": 1
                    }
                }
            },
            "7": {
                "task_ids": [
                    "JJC_defend_arena_1"
                ],
                "gold": 2400,
                "properties": {
                    "gem": {
                        "lan1": 1
                    }
                }
            },
            "8": {
                "gold": 2600,
                "properties": {
                    "gem": {
                        "zi1": 1
                    }
                }
            },
            "9": {
                "gold": 2800,
                "properties": {
                    "gem": {
                        "huang1": 1
                    }
                }
            },
            "10": {
                "gold": 3000,
                "invite_score": 2,
                "properties": {
                    "gem": {
                        "hong2": 1
                    },
                    "card": {
                        "sl2": 1
                    }
                }
            },
            "11": {
                "gold": 3200,
                "properties": {
                    "gem": {
                        "lv2": 1
                    }
                }
            },
            "12": {
                "gold": 3400,
                "properties": {
                    "gem": {
                        "lan2": 1
                    }
                }
            },
            "13": {
                "gold": 3600,
                "properties": {
                    "gem": {
                        "zi2": 1
                    }
                }
            },
            "14": {
                "gold": 3800,
                "properties": {
                    "gem": {
                        "huang2": 1
                    }
                }
            },
            "15": {
                "gold": 4000,
                "invite_score": 4,
                "properties": {
                    "card": {
                        "sl3": 1
                    }
                }
            },
            "16": {
                "gold": 4200,
                "properties": {
                    "gem": {
                        "lv3": 1
                    }
                }
            },
            "17": {
                "gold": 4400,
                "properties": {
                    "gem": {
                        "lan3": 1
                    }
                }
            },
            "18": {
                "gold": 4600,
                "properties": {
                    "gem": {
                        "zi3": 1
                    }
                }
            },
            "19": {
                "gold": 4800,
                "properties": {
                    "gem": {
                        "huang3": 1
                    }
                }
            },
            "20": {
                "gold": 5000,
                "invite_score": 6,
                "properties": {
                    "snarp": {
                        "baozhatong1": 1
                    }
                }
            },
            "21": {
                "gold": 5200,
                "properties": {
                    "snarp": {
                        "baozhatong1": 1
                    }
                }
            },
            "22": {
                "gold": 5400,
                "properties": {
                    "snarp": {
                        "bushoujia1": 1
                    }
                }
            },
            "23": {
                "gold": 5600,
                "properties": {
                    "snarp": {
                        "baozhatong1": 1
                    }
                }
            },
            "24": {
                "gold": 5800,
                "properties": {
                    "snarp": {
                        "dicicao1": 1
                    }
                }
            },
            "25": {
                "gold": 6000,
                "invite_score": 8,
                "properties": {
                    "snarp": {
                        "baozhatong1": 2
                    }
                }
            },
            "26": {
                "gold": 6200,
                "properties": {
                    "snarp": {
                        "baozhatong1": 2
                    }
                }
            },
            "27": {
                "gold": 6400,
                "properties": {
                    "snarp": {
                        "bushoujia1": 2
                    }
                }
            },
            "28": {
                "gold": 6600,
                "properties": {
                    "snarp": {
                        "bushoujia1": 2
                    }
                }
            },
            "29": {
                "gold": 6800,
                "properties": {
                    "snarp": {
                        "dicicao1": 2
                    }
                }
            },
            "30": {
                "gold": 7000,
                "invite_score": 10,
                "properties": {
                    "snarp": {
                        "baozhatong2": 1
                    }
                }
            },
            "31": {
                "gold": 7200,
                "properties": {
                    "snarp": {
                        "baozhatong2": 1
                    }
                }
            },
            "32": {
                "gold": 7400,
                "properties": {
                    "snarp": {
                        "bushoujia2": 1
                    }
                }
            },
            "33": {
                "gold": 7600,
                "properties": {
                    "snarp": {
                        "bushoujia2": 1
                    }
                }
            },
            "34": {
                "gold": 7800,
                "properties": {
                    "snarp": {
                        "dicicao2": 1
                    }
                }
            },
            "35": {
                "gold": 8000,
                "invite_score": 12,
                "properties": {
                    "snarp": {
                        "baozhatong3": 1
                    }
                }
            },
            "36": {
                "gold": 8200,
                "properties": {
                    "snarp": {
                        "baozhatong3": 1
                    }
                }
            },
            "37": {
                "gold": 8400,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    }
                }
            },
            "38": {
                "gold": 8600,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    }
                }
            },
            "39": {
                "gold": 8800,
                "properties": {
                    "snarp": {
                        "dicicao2": 2
                    }
                }
            },
            "40": {
                "gold": 9000,
                "invite_score": 14,
                "properties": {
                    "snarp": {
                        "baozhatong3": 1
                    },
                    "card": {
                        "sl2": 2
                    }
                }
            },
            "41": {
                "gold": 9200,
                "properties": {
                    "snarp": {
                        "baozhatong3": 1
                    },
                    "card": {
                        "sl2": 2
                    }
                }
            },
            "42": {
                "gold": 9400,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    },
                    "card": {
                        "sl2": 2
                    }
                }
            },
            "43": {
                "gold": 9600,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    },
                    "card": {
                        "sl2": 2
                    }
                }
            },
            "44": {
                "gold": 9800,
                "properties": {
                    "snarp": {
                        "dicicao2": 2
                    },
                    "card": {
                        "sl2": 2
                    }
                }
            },
            "45": {
                "gold": 10000,
                "invite_score": 16,
                "properties": {
                    "snarp": {
                        "baozhatong3": 2
                    },
                    "card": {
                        "sl3": 1
                    }
                }
            },
            "46": {
                "gold": 10200,
                "properties": {
                    "snarp": {
                        "baozhatong3": 2
                    },
                    "card": {
                        "sl3": 2
                    }
                }
            },
            "47": {
                "gold": 10400,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    },
                    "card": {
                        "sl3": 2
                    }
                }
            },
            "48": {
                "gold": 10600,
                "properties": {
                    "snarp": {
                        "bushoujia2": 2
                    },
                    "card": {
                        "sl3": 2
                    }
                }
            },
            "49": {
                "gold": 10800,
                "properties": {
                    "snarp": {
                        "dicicao2": 2
                    },
                    "card": {
                        "sl3": 2
                    }
                }
            },
            "50": {
                "gold": 11000,
                "invite_score": 18,
                "properties": {
                    "card": {
                        "mc": 2,
                        "sl4": 2
                    }
                }
            }
        },
        "system_simple": {
            "dsort": [
                "1",
                "2",
                "3",
                "4-10",
                "11-20",
                "21-30"
            ],
            "top_limit": 100,
            "slave_cold_time": 60,
            "pk_gold_factor": 2,
            "invite_get_score": 10,
            "system_broadcast_rebroadcast_time": 300,
            "lured_wolf_level": 7,
            "top_gift": {
                "gold": 1000,
                "properties": {
                    "gem": {
                        "hong1": 1
                    }
                }
            },
            "random_boss_prob": 0.05,
            "exp_gold_power": [
                [
                    2,
                    3
                ],
                0.39
            ],
            "mixtrue_gem_need_gold": 500,
            "system_broadcast_broadcast_time": 10,
            "visit_exp_factor": [
                2,
                0.4,
                0.8
            ],
            "rare_item_invite_score": 30,
            "xc_gids": [
                "texp_A",
                "rmbbt",
                "tiegao",
                "juzi",
                "dalic"
            ],
            "user_default_name": "system_simple_1^小小羊",
            "comfort_slave_coin": 4,
            "conveyer_speed": 12,
            "bonus_fids_max_num": 10,
            "notification_leave_days": 7,
            "rare_item_coin": 15,
            "mixture_gem": {
                "base": 100,
                "max": 19,
                "val": 100
            },
            "visit_fids_min_num": 5,
            "bonus_fids_factor": [
                500,
                250
            ],
            "gift_send_person_max": 20,
            "qq_market_goods": {
                "properties": {
                    "card": {
                        "texp_B": 1
                    }
                }
            },
            "slave_friend_price": 7,
            "isFan_gift": null,
            "random_boss_minitem": 15,
            "gift_send_max": 3,
            "pk_exp_factor": 3.5,
            "user_level_max": 76,
            "user_default_headurl": "default_head_url.png",
            "lured_wolf_max": 20,
            "qq_vip_gift": {
                "vipInfo": "system_simple_2^黄钻用户每日登陆羊村可享黄钻每日礼包，高级黄钻用户将获赠奖励价值高达[132元/月]，高级年费黄钻贵族获赠价值更是高达[189元/月]！全场道具[8]折优惠，还有升级额外大礼等你拿哦~~・",
                "vip2": {
                    "properties": {
                        "card": {
                            "sl2": 2
                        }
                    }
                },
                "qqUpgrade_award": {
                    "properties": {
                        "snarp": {
                            "cuantiandan3": 1,
                            "cuantiandan4": 1
                        }
                    }
                },
                "vip7": {
                    "properties": {
                        "snarp": {
                            "baozhatong2": 4
                        },
                        "card": {
                            "sl2": 3
                        }
                    }
                },
                "vip3": {
                    "properties": {
                        "card": {
                            "sl2": 3
                        }
                    }
                },
                "year": {
                    "properties": {
                        "card": {
                            "mc": 1
                        }
                    }
                },
                "vip4": {
                    "properties": {
                        "snarp": {
                            "baozhatong2": 1
                        },
                        "card": {
                            "sl2": 3
                        }
                    }
                },
                "vip5": {
                    "properties": {
                        "snarp": {
                            "baozhatong2": 2
                        },
                        "card": {
                            "sl2": 3
                        }
                    }
                },
                "vip1": {
                    "properties": {
                        "card": {
                            "sl2": 1
                        }
                    }
                },
                "vip6": {
                    "properties": {
                        "snarp": {
                            "baozhatong2": 3
                        },
                        "card": {
                            "sl2": 3
                        }
                    }
                },
                "newbie": {
                    "properties": {
                        "gem": {
                            "lan3": 1,
                            "lv3": 1,
                            "huang3": 1,
                            "zi3": 1,
                            "hong3": 1
                        }
                    }
                },
                "vip8": {
                    "properties": {
                        "snarp": {
                            "baozhatong2": 4
                        },
                        "card": {
                            "sl2": 4
                        }
                    }
                }
            },
            "gift_receive_max": 10,
            "free_gift_close_pf": "tapp",
            "get_broadcast_time": 10,
            "kill_spy_wolf_gift": [
                {
                    "w": 0.02,
                    "properties": [
                        {
                            "w": 0.5,
                            "card": {
                                "num": 1,
                                "name": "sl2"
                            }
                        },
                        {
                            "w": 0.3,
                            "card": {
                                "num": 1,
                                "name": "sl3"
                            }
                        },
                        {
                            "w": 0.2,
                            "card": {
                                "num": 1,
                                "name": "sl4"
                            }
                        }
                    ]
                },
                {
                    "w": 0.05,
                    "properties": [
                        {
                            "w": 0.5,
                            "snarp": {
                                "num": 1,
                                "name": "baozhatong1"
                            }
                        },
                        {
                            "w": 0.3,
                            "snarp": {
                                "num": 1,
                                "name": "baozhatong2"
                            }
                        },
                        {
                            "w": 0.2,
                            "snarp": {
                                "num": 1,
                                "name": "baozhatong3"
                            }
                        }
                    ]
                },
                {
                    "w": 0.08,
                    "properties": [
                        {
                            "w": 0.5,
                            "snarp": {
                                "num": 1,
                                "name": "bushoujia1"
                            }
                        },
                        {
                            "w": 0.3,
                            "snarp": {
                                "num": 1,
                                "name": "bushoujia2"
                            }
                        },
                        {
                            "w": 0.2,
                            "snarp": {
                                "num": 1,
                                "name": "bushoujia2"
                            }
                        }
                    ]
                },
                {
                    "w": 0.11,
                    "properties": [
                        {
                            "w": 0.5,
                            "snarp": {
                                "num": 1,
                                "name": "dicicao1"
                            }
                        },
                        {
                            "w": 0.3,
                            "snarp": {
                                "num": 1,
                                "name": "dicicao2"
                            }
                        },
                        {
                            "w": 0.2,
                            "snarp": {
                                "num": 1,
                                "name": "dicicao2"
                            }
                        }
                    ]
                },
                {
                    "w": 0.13,
                    "invite_score": 2
                },
                {
                    "w": 0.14,
                    "properties": [
                        {
                            "w": 0.5,
                            "card": {
                                "num": 1,
                                "name": "za_gangbi_drop"
                            }
                        },
                        {
                            "w": 0.5,
                            "card": {
                                "num": 1,
                                "name": "za_bitong_drop"
                            }
                        }
                    ]
                }
            ],
            "get_global_broadcast_time": 120,
            "show_limit": 30,
            "notification_max_num": 10,
            "gift_demand_max": 15,
            "slave_friend_free_price": 0.1,
            "user_explev": {
                "c": 3,
                "a": 20,
                "d": 2,
                "b": 4
            },
            "random_boss_maxitem": 40,
            "slave_catch_time": 600,
            "sell_building_dis": 0.25,
            "qq_market_goods_id": "16488R120718001",
            "visit_fids_factor": 3,
            "visit_gold_factor": [
                100,
                18.5,
                22.5
            ],
            "slave_max_invite_score": {
                "c": 150,
                "a": 50,
                "b": 4
            },
            "user_power": {
                "c": 0.015,
                "a": 2,
                "b": 0.8
            },
            "active_dmaps": {
                "m3": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 5,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 4,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "ybb": 1,
                                    "dalic": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 2 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Aug 19 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m2A": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 5,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 4,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "ybb": 1,
                                    "dalic": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Aug 19 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Aug 5 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m9B": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "tame": {
                                    "tt_D": 3,
                                    "sb_Revive_B": 1,
                                    "tt_C": 5
                                },
                                "gem": {
                                    "hei5": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 4
                                },
                                "tame": {
                                    "sb_Revive_B": 1,
                                    "tt_C": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Revive_B": 1,
                                    "tt_C": 5
                                },
                                "card": {
                                    "mc": 3,
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Invisible_A": 1,
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3,
                                    "mc": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 30 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Sep 16 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m9A": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 5,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 4,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "ybb": 1,
                                    "dalic": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Aug 5 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Jul 22 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m0B": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "tame": {
                                    "tt_D": 3,
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                },
                                "gem": {
                                    "hei5": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 4
                                },
                                "tame": {
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                },
                                "card": {
                                    "mc": 3,
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Invisible_B": 1,
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3,
                                    "mc": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 2 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Aug 19 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m2B": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "tame": {
                                    "tt_D": 3,
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                },
                                "gem": {
                                    "hei5": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 4
                                },
                                "tame": {
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                },
                                "card": {
                                    "mc": 3,
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Invisible_B": 1,
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3,
                                    "mc": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Aug 5 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Jul 22 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m5": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "tame": {
                                    "tt_D": 3,
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                },
                                "gem": {
                                    "hei5": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 4
                                },
                                "tame": {
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Blink_C": 1,
                                    "tt_C": 5
                                },
                                "card": {
                                    "mc": 3,
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Invisible_B": 1,
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3,
                                    "mc": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 30 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Sep 16 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m7": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "tame": {
                                    "tt_D": 3,
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                },
                                "gem": {
                                    "hei5": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 4
                                },
                                "tame": {
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Sprint_C": 1,
                                    "tt_C": 5
                                },
                                "card": {
                                    "mc": 3,
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "sb_Invisible_B": 1,
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3,
                                    "mc": 5
                                }
                            }
                        },
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 16 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Sep 2 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                },
                "m4A": {
                    "dmap_gifts": [
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 3
                                },
                                "card": {
                                    "dalic": 5,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 4,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "ybb": 1,
                                    "dalic": 3
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei2": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                },
                                "card": {
                                    "dalic": 2
                                }
                            }
                        },
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 3
                                }
                            }
                        }
                    ],
                    "weekDay": 4,
                    "endTime": "Thu Sep 16 11:55:00 GMT+0800 2021",
                    "weekMinute": 0,
                    "startTime": "Thu Sep 2 12:05:00 GMT+0800 2021",
                    "weekHour": 4,
                    "test": 0
                }
            },
            "get_system_broadcast_time": 600,
            "free_gift_receive_time": 1440,
            "visit_fids_max_num": 60,
            "slave_build_max": {
                "b": 1,
                "a": 4
            },
            "slave_full_time": 1000,
            "everyday_task_timer": 480,
            "dalic_value": [
                0,
                20
            ],
            "slave_sleep_time": 800
        },
        "ploy": {
            "activecode_gift": {
                "ui": "weibo_gift.swf",
                "title": "ploy_5^兑换礼品",
                "link": "ploy_6^访问微博>>",
                "open": "",
                "icon": "jihuomaIcon.swf",
                "info": "ploy_7^访问微博可免费获得礼品兑换码!",
                "weibo_href": {
                    "cn": "http://t.qq.com/TDsheep",
                    "tw": "https://www.facebook.com/pages/%E4%BF%9D%E8%A1%9B%E7%BE%8A%E6%9D%91/322164321177530"
                }
            },
            "costcoin_gift": {
                "days": [
                    {
                        "ui": "xiaofei_wuyi.swf",
                        "end": "Tue Jul 17 07:59:59 GMT+0800 2012",
                        "title": "ploy_14^消羊送大",
                        "open": "",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_16^活期消即:",
                        "info1": "ploy_17^每期三品可各取1次",
                        "titleInfo": "ploy_15^真划算!物好天天送",
                        "gift": {
                            "999": {
                                "properties": {
                                    "tame": {
                                        "sb_Blink_C": 1
                                    }
                                }
                            },
                            "99": {
                                "properties": {
                                    "tame": {
                                        "wexp_C": 5
                                    }
                                }
                            },
                            "199": {
                                "properties": {
                                    "gem": {
                                        "huang5": 2
                                    }
                                }
                            }
                        },
                        "begin": "Wed Jul 11 18:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Mon Jan 23 07:59:59 GMT+0800 2012",
                        "title": "ploy_18^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_20^活动期间消费满额即赠:",
                        "info1": "ploy_21^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_19^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "tame": {
                                        "sb_ResistFire_A": 1
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "tame": {
                                        "sb_Revive_B": 1
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "tame": {
                                        "sb_Shield_B": 1
                                    }
                                }
                            }
                        },
                        "begin": "Fri Jan 20 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Thu Jan 26 07:59:59 GMT+0800 2012",
                        "title": "ploy_22^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_24^活动期间消费满额即赠:",
                        "info1": "ploy_25^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_23^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "tame": {
                                        "tt_B": 3
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "tame": {
                                        "tt_C": 4
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "tame": {
                                        "tt_C": 10
                                    }
                                }
                            }
                        },
                        "begin": "Mon Jan 23 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Sun Jan 29 07:59:59 GMT+0800 2012",
                        "title": "ploy_26^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_28^活动期间消费满额即赠:",
                        "info1": "ploy_29^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_27^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "card": {
                                        "texp_C": 1
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "card": {
                                        "texp_C": 4
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "card": {
                                        "texp_C": 10
                                    }
                                }
                            }
                        },
                        "begin": "Thu Jan 26 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Wed Feb 1 07:59:59 GMT+0800 2012",
                        "title": "ploy_30^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_32^活动期间消费满额即赠:",
                        "info1": "ploy_33^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_31^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "gem": {
                                        "hei4": 1
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "gem": {
                                        "hei5": 2
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "gem": {
                                        "hei5": 5
                                    }
                                }
                            }
                        },
                        "begin": "Sun Jan 29 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Sat Feb 4 07:59:59 GMT+0800 2012",
                        "title": "ploy_34^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_36^活动期间消费满额即赠:",
                        "info1": "ploy_37^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_35^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "tame": {
                                        "sb_ResistFire_A": 1
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "tame": {
                                        "sb_Revive_B": 1
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "tame": {
                                        "sb_Shield_B": 1
                                    }
                                }
                            }
                        },
                        "begin": "Wed Feb 1 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "xiaofei_chunjie.swf",
                        "end": "Tue Feb 7 07:59:59 GMT+0800 2012",
                        "title": "ploy_38^春节快乐",
                        "icon": "chunjie4Icon.swf",
                        "info": "ploy_40^活动期间消费满额即赠:",
                        "info1": "ploy_41^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_39^真划算!购物好礼天天送",
                        "gift": {
                            "188": {
                                "properties": {
                                    "tame": {
                                        "tt_B": 3
                                    }
                                }
                            },
                            "588": {
                                "properties": {
                                    "tame": {
                                        "tt_C": 4
                                    }
                                }
                            },
                            "2012": {
                                "properties": {
                                    "tame": {
                                        "tt_C": 10
                                    }
                                }
                            }
                        },
                        "begin": "Sat Feb 4 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "inviteFriends.swf",
                        "end": "Thu Aug 16 07:59:59 GMT+0800 2012",
                        "title": "ploy_42^邀请、消费领豪礼！",
                        "open_only": "",
                        "invite_num_limit": 10,
                        "icon": "liuyi3Icon.swf",
                        "info": "ploy_44^活动期间消费满额即赠:",
                        "info1": "ploy_45^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_43^真划算!购物好礼天天送",
                        "gift": {
                            "1": {
                                "properties": {
                                    "gem": {
                                        "lan3": 2,
                                        "hong3": 2
                                    },
                                    "card": {
                                        "dalic": 1
                                    }
                                }
                            },
                            "10": {
                                "properties": {
                                    "tame": {
                                        "wexp_C": 1
                                    },
                                    "card": {
                                        "texp_C": 1,
                                        "mc": 3
                                    }
                                }
                            },
                            "333": {
                                "properties": {
                                    "tame": {
                                        "sb_Divide_B": 1,
                                        "tt_C": 2
                                    },
                                    "card": {
                                        "drws": 2
                                    }
                                }
                            },
                            "999": {
                                "properties": {
                                    "tame": {
                                        "sb_Divide_C": 1,
                                        "tt_C": 2
                                    },
                                    "card": {
                                        "drws": 2
                                    }
                                }
                            }
                        },
                        "begin": "Fri Jul 20 08:00:00 GMT+0800 2012"
                    },
                    {
                        "ui": "inviteFriends_tw.swf",
                        "end": "Thu Aug 16 07:59:59 GMT+0800 2012",
                        "title": "ploy_46^邀、消豪！",
                        "open_only": "",
                        "invite_num_limit": 2,
                        "icon": "liuyi3Icon.swf",
                        "info": "ploy_48^活动期间消费满额即赠:",
                        "info1": "ploy_49^每期三种礼品可各领取1次",
                        "titleInfo": "ploy_47^真划算!购物好礼天天送",
                        "gift": {
                            "1": {
                                "properties": {
                                    "gem": {
                                        "lan3": 2,
                                        "hong3": 2
                                    },
                                    "card": {
                                        "dalic": 1
                                    }
                                }
                            },
                            "10": {
                                "properties": {
                                    "tame": {
                                        "wexp_C": 1
                                    },
                                    "card": {
                                        "texp_C": 1,
                                        "mc": 3
                                    }
                                }
                            },
                            "333": {
                                "properties": {
                                    "tame": {
                                        "sb_Divide_B": 1,
                                        "tt_C": 2
                                    },
                                    "card": {
                                        "drws": 2
                                    }
                                }
                            },
                            "999": {
                                "properties": {
                                    "tame": {
                                        "sb_Divide_C": 1,
                                        "tt_C": 2
                                    },
                                    "card": {
                                        "drws": 2
                                    }
                                }
                            }
                        },
                        "begin": "Fri Jul 20 08:00:00 GMT+0800 2012"
                    }
                ],
                "day": []
            },
            "recall_nums": 0,
            "send_interval_time": 360,
            "qq_vip_gift_only": {
                "gifts": {
                    "normal_gift": {
                        "properties": {
                            "gem": {
                                "hong5": 2
                            },
                            "card": {
                                "tiegao": 6
                            },
                            "tame": {
                                "wexp_C": 5
                            }
                        }
                    },
                    "year_gift": {
                        "properties": {
                            "gem": {
                                "hei5": 5
                            },
                            "card": {
                                "mc": 15
                            },
                            "tame": {
                                "sb_Sprint_C": 1
                            }
                        }
                    }
                },
                "open": ""
            },
            "friends_not_login_time": "Thu Mar 15 08:00:00 GMT+0800 2012",
            "year_active_gift": {
                "info1": "ploy_3^每点击按钮发出一次邀请，可增加一次抽奖机会",
                "end": "Mon Apr 16 07:59:59 GMT+0800 2012",
                "open": "cn",
                "icon": "baoxiang18",
                "info": "ploy_2^(即日起--2012.04.15)参与分享消息+邀请新老玩家达到一定人数,可全服领取给力礼品!若最终人数达到500W，官方还将通过微博发放终极礼包兑换码哦!",
                "gifts": {
                    "gift0": [
                        500000,
                        {
                            "properties": {
                                "tame": {
                                    "tt_A": 5
                                },
                                "card": {
                                    "mc": 5
                                }
                            }
                        }
                    ],
                    "gift1": [
                        1000000,
                        {
                            "properties": {
                                "tame": {
                                    "tt_B": 5
                                },
                                "snarp": {
                                    "bushoujia3": 5
                                }
                            }
                        }
                    ],
                    "gift2": [
                        1500000,
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 3
                                },
                                "card": {
                                    "texp_C": 3
                                }
                            }
                        }
                    ],
                    "gift3": [
                        2000000,
                        {
                            "properties": {
                                "tame": {
                                    "tt_B": 5
                                },
                                "gem": {
                                    "huang5": 1
                                }
                            }
                        }
                    ]
                },
                "max": 5000000,
                "begin": "Sat Mar 31 07:59:59 GMT+0800 2012",
                "info2": "ploy_4^点击右侧按钮，发出邀请可获抽奖机会",
                "name": "ploy_1^老玩家回归活动"
            },
            "popularize": [
                {
                    "icon": "hlbb_Icon.swf",
                    "href": "marketTask",
                    "open": "",
                    "name": "ploy_8^限量版狼宝宝大放送！"
                }
            ],
            "advertisingUIBox_open": 0,
            "online_gift": {
                "gifts": [
                    [
                        0,
                        {
                            "properties": {
                                "tame": {
                                    "wexp_C": 2
                                },
                                "card": {
                                    "texp_C": 2
                                }
                            }
                        }
                    ],
                    [
                        1,
                        {
                            "properties": {
                                "tame": {
                                    "tt_B": 2,
                                    "tt_C": 2
                                }
                            }
                        }
                    ],
                    [
                        1,
                        {
                            "properties": {
                                "card": {
                                    "mc": 1,
                                    "gem_hammer": 1,
                                    "ybb": 1,
                                    "lqxfj": 1
                                }
                            }
                        }
                    ]
                ],
                "giftid": "1918144096PID201202031746046340",
                "open": "cn",
                "end": "Mon Sep 17 07:59:00 GMT+0800 2012",
                "begin": "Thu Sep 6 23:00:00 GMT+0800 2012",
                "discountid": "UM120203174604625"
            },
            "advertisingUIBox": [
                {
                    "hrefList": {
                        "cn": "",
                        "tw": ""
                    },
                    "icon": "liuyi4Icon.swf",
                    "adURL": "liuyi.swf",
                    "open": "cn",
                    "name": "噩梦模式震撼上线"
                }
            ],
            "active_draw_gift": {
                "gifts": [
                    [
                        0.2,
                        {
                            "invite_score": 2
                        }
                    ],
                    [
                        0.38,
                        {
                            "properties": {
                                "gem": {
                                    "hei1": 1
                                }
                            }
                        }
                    ],
                    [
                        0.52,
                        {
                            "properties": {
                                "snarp": {
                                    "baozhatong2": 1
                                }
                            }
                        }
                    ],
                    [
                        0.64,
                        {
                            "properties": {
                                "card": {
                                    "texp_A": 1
                                }
                            }
                        }
                    ],
                    [
                        0.76,
                        {
                            "properties": {
                                "tame": {
                                    "wexp_A": 1
                                }
                            }
                        }
                    ],
                    [
                        0.88,
                        {
                            "properties": {
                                "tame": {
                                    "tt_A": 1
                                }
                            }
                        }
                    ],
                    [
                        0.96,
                        {
                            "properties": {
                                "gem": {
                                    "hei4": 1
                                }
                            }
                        }
                    ],
                    [
                        0.985,
                        {
                            "properties": {
                                "tame": {
                                    "tt_C": 1
                                }
                            }
                        }
                    ],
                    [
                        1,
                        {
                            "properties": {
                                "tame": {
                                    "sb_Sprint_A": 1
                                }
                            }
                        }
                    ]
                ]
            }
        },
        "slaves": {
            "slave2": {
                "name": "slaves_2^初级苦工",
                "price": [
                    "coin",
                    15
                ],
                "headurl": "img2",
                "power": 10,
                "lev": 10
            },
            "slave4": {
                "name": "slaves_4^高级苦工",
                "price": [
                    "coin",
                    60
                ],
                "headurl": "img4",
                "power": 70,
                "lev": 40
            },
            "slave1": {
                "name": "slaves_1^菜鸟苦工",
                "price": [
                    "gold",
                    200
                ],
                "headurl": "img1",
                "power": 5,
                "lev": 1
            },
            "slave3": {
                "name": "slaves_3^中级苦工",
                "price": [
                    "coin",
                    30
                ],
                "headurl": "img3",
                "power": 30,
                "lev": 25
            },
            "slave5": {
                "name": "slaves_5^专家苦工",
                "price": [
                    "coin",
                    120
                ],
                "headurl": "img5",
                "power": 150,
                "lev": 50
            }
        },
        "user_reward": [],
        "camp_system_simple": {
            "hold_time": 1440,
            "camp_wolf_gold_max_factor": [
                -1,
                -1,
                -1,
                -1,
                -1,
                -1,
                370000,
                540000,
                870000,
                1420000,
                2250000,
                3080000,
                3910000,
                4770000,
                4770000,
                4770000
            ],
            "tower_exp_max_factor": 6,
            "pk_succ_factor": 0.12,
            "wolf_worth_factor": [
                2,
                0.5,
                0.065
            ],
            "tower_level_reduce_dis": 1,
            "pk_cd_time": 60,
            "skill_lvup_spend": {
                "C": {
                    "1": {
                        "tame": {
                            "tt_C": 1
                        }
                    },
                    "2": {
                        "tame": {
                            "tt_C": 2
                        }
                    },
                    "3": {
                        "tame": {
                            "tt_C": 3
                        }
                    },
                    "4": {
                        "tame": {
                            "tt_D": 1,
                            "tt_C": 4
                        }
                    },
                    "5": {
                        "tame": {
                            "tt_D": 2,
                            "tt_C": 5
                        }
                    },
                    "6": {
                        "tame": {
                            "tt_D": 3,
                            "tt_C": 5
                        }
                    },
                    "7": {
                        "tame": {
                            "tt_D": 4,
                            "tt_C": 5
                        }
                    },
                    "8": {
                        "tame": {
                            "tt_D": 5,
                            "tt_C": 10
                        }
                    },
                    "9": {
                        "tame": {
                            "tt_D": 10,
                            "tt_C": 20
                        }
                    }
                },
                "A": {
                    "1": {
                        "tame": {
                            "tt_A": 1
                        }
                    },
                    "2": {
                        "tame": {
                            "tt_A": 2
                        }
                    },
                    "3": {
                        "tame": {
                            "tt_A": 3
                        }
                    },
                    "4": {
                        "tame": {
                            "tt_A": 4,
                            "tt_B": 1
                        }
                    },
                    "5": {
                        "tame": {
                            "tt_A": 5,
                            "tt_B": 2
                        }
                    },
                    "6": {
                        "tame": {
                            "tt_A": 5,
                            "tt_B": 3
                        }
                    },
                    "7": {
                        "tame": {
                            "tt_A": 5,
                            "tt_B": 4
                        }
                    },
                    "8": {
                        "tame": {
                            "tt_A": 10,
                            "tt_B": 5
                        }
                    },
                    "9": {
                        "tame": {
                            "tt_A": 20,
                            "tt_B": 10
                        }
                    }
                },
                "B": {
                    "1": {
                        "tame": {
                            "tt_B": 1
                        }
                    },
                    "2": {
                        "tame": {
                            "tt_B": 2
                        }
                    },
                    "3": {
                        "tame": {
                            "tt_B": 3
                        }
                    },
                    "4": {
                        "tame": {
                            "tt_B": 4,
                            "tt_C": 1
                        }
                    },
                    "5": {
                        "tame": {
                            "tt_B": 5,
                            "tt_C": 2
                        }
                    },
                    "6": {
                        "tame": {
                            "tt_B": 5,
                            "tt_C": 3
                        }
                    },
                    "7": {
                        "tame": {
                            "tt_B": 5,
                            "tt_C": 4
                        }
                    },
                    "8": {
                        "tame": {
                            "tt_B": 10,
                            "tt_C": 5
                        }
                    },
                    "9": {
                        "tame": {
                            "tt_B": 20,
                            "tt_C": 10
                        }
                    }
                }
            },
            "defend_cd_time": 60,
            "defend_failed_factor": 0.06,
            "skill_grade_score": {
                "A": {
                    "1": 1.01,
                    "2": 1.02,
                    "3": 1.03,
                    "4": 1.04,
                    "5": 1.06,
                    "6": 1.08,
                    "7": 1.1,
                    "8": 1.12,
                    "9": 1.15,
                    "10": 1.2
                },
                "B": {
                    "1": 1.02,
                    "2": 1.04,
                    "3": 1.06,
                    "4": 1.08,
                    "5": 1.12,
                    "6": 1.16,
                    "7": 1.2,
                    "8": 1.24,
                    "9": 1.3,
                    "10": 1.4
                },
                "C": {
                    "1": 1.03,
                    "2": 1.06,
                    "3": 1.09,
                    "4": 1.12,
                    "5": 1.18,
                    "6": 1.24,
                    "7": 1.3,
                    "8": 1.36,
                    "9": 1.45,
                    "10": 1.6
                },
                "X6": {
                    "1": 0.7
                },
                "Z2": {
                    "1": 1.5
                },
                "X2": {
                    "1": 0.9
                },
                "Z7": {
                    "1": 4
                },
                "Z6": {
                    "1": 3.3
                },
                "X7": {
                    "1": 0.6
                },
                "X1": {
                    "1": 0.95
                },
                "Z1": {
                    "1": 1.3
                },
                "X3": {
                    "1": 0.85
                },
                "Z3": {
                    "1": 1.8
                },
                "X4": {
                    "1": 0.8
                },
                "X8": {
                    "1": 0.5
                },
                "Z4": {
                    "1": 2.2
                },
                "X5": {
                    "1": 0.75
                },
                "Z8": {
                    "1": 5
                },
                "Z5": {
                    "1": 2.7
                }
            },
            "use_exp_tower_max": 10,
            "arena_need_user_level": 7,
            "camp_need_user_level": 5,
            "create_mine_help_friends_num": 5,
            "camp_pk_wolf_num_max": 8,
            "arena_step": {
                "wolf": [
                    2460,
                    3690,
                    5535,
                    11070,
                    22140,
                    44280,
                    132840,
                    398520,
                    1195560,
                    3586680,
                    10760040,
                    32280120,
                    96840360,
                    290521080
                ],
                "tower": [
                    2460,
                    3690,
                    5535,
                    11070,
                    22140,
                    44280,
                    132840,
                    398520,
                    1195560,
                    3586680,
                    10760040,
                    32280120,
                    96840360,
                    290521080
                ]
            },
            "camp_wolf_defend_max": 8,
            "defend_succ_factor": 0.12,
            "arena_cd_time": 60,
            "use_exp_wolf_max": 10,
            "pk_times_max": 5,
            "help_create_mine_gift": [
                [
                    "0.6",
                    [
                        [
                            0.28,
                            "gem",
                            "hong1",
                            1
                        ],
                        [
                            0.46,
                            "gem",
                            "lv1",
                            1
                        ],
                        [
                            0.64,
                            "gem",
                            "lan1",
                            1
                        ],
                        [
                            0.82,
                            "gem",
                            "zi1",
                            1
                        ],
                        [
                            1,
                            "gem",
                            "huang1",
                            1
                        ]
                    ]
                ],
                [
                    "0.8",
                    [
                        [
                            0.5,
                            "card",
                            "sl1",
                            2
                        ],
                        [
                            0.75,
                            "card",
                            "sl2",
                            1
                        ],
                        [
                            1,
                            "card",
                            "rmbbt",
                            1
                        ]
                    ]
                ],
                [
                    "0.95",
                    [
                        [
                            0.5,
                            "card",
                            "za_beizi_drop",
                            1
                        ],
                        [
                            1,
                            "card",
                            "za_baozhen_drop",
                            1
                        ]
                    ]
                ],
                [
                    "1.0",
                    [
                        [
                            1,
                            "invite_score",
                            2
                        ]
                    ]
                ]
            ],
            "wolf_tower_worth_factor": [
                10,
                0.01
            ],
            "conflict_skill_kind": [
                [
                    "fly",
                    "airborne",
                    "blink",
                    "sprint"
                ],
                [
                    "fly",
                    "summon"
                ],
                [
                    "resistFire",
                    "weakFire"
                ],
                [
                    "resistFrost",
                    "weakFrost"
                ],
                [
                    "resistPoison",
                    "weakPoison"
                ],
                [
                    "resistSlow",
                    "weakSlow"
                ],
                [
                    "resistBeat",
                    "weakBeat"
                ],
                [
                    "resistSilence",
                    "weakSilence"
                ],
                [
                    "resistVertigo",
                    "weakVertigo"
                ],
                [
                    "resistCrit",
                    "weakCrit"
                ],
                [
                    "resistLight",
                    "weakLight"
                ],
                [
                    "resistIntimidate",
                    "weakIntimidate"
                ],
                [
                    "revive",
                    "reborn",
                    "morph"
                ],
                [
                    "reborn",
                    "morph",
                    "burst"
                ],
                [
                    "shield",
                    "taunt",
                    "divide"
                ],
                [
                    "divide",
                    "sprint"
                ],
                [
                    "divide",
                    "invisible"
                ],
                [
                    "taunt",
                    "invisible"
                ]
            ],
            "hold_exp_need_seconds": 3600,
            "camp_wolf_lv_max_factor": [
                7,
                12,
                17,
                22,
                27,
                32
            ],
            "pk_arena_failed_factor": 0.06,
            "camp_install_wc_id": "al_card",
            "mine_rate": {
                "1": {
                    "harvest_num": 2,
                    "need_time": 240,
                    "steal_num": 1,
                    "help_reduce_time": 20
                },
                "2": {
                    "harvest_num": 3,
                    "need_time": 480,
                    "steal_num": 1,
                    "help_reduce_time": 40
                },
                "3": {
                    "harvest_num": 4,
                    "need_time": 720,
                    "steal_num": 2,
                    "help_reduce_time": 60
                }
            },
            "expand_lv_wolf_max": 6,
            "wolf_lv_max": 60,
            "camp_mine_luck_num": [
                0.3,
                1
            ],
            "create_mine_help_max": 5,
            "defend_map_snarp_max": 10,
            "pk_arena_times_max": 10,
            "sell_building_dis": 0.25,
            "passive_cd_time": 5,
            "pk_hold_factor": 0.00001157,
            "pk_arena_succ_factor": 0.12,
            "defend_times_max": 5,
            "defend_arena_failed_factor": 0.06,
            "pk_failed_factor": 0.06,
            "tower_worth_factor": [
                1,
                150,
                1,
                20
            ],
            "defend_arena_times_max": 10,
            "defend_arena_succ_factor": 0.12
        },
        "msg_templates": {
            "catch_others_slave": "msg_templates_7^你把${friend_owner}的苦工${friend}抢走了，你花费了${gold}银币。",
            "friend.pk_failed": "msg_templates_25^${friend}派出狼群试图占领你的大本营，由于你的防线太强，${friend}失败了。",
            "remove_manor": "msg_templates_33^你的驯化狼撤离了${friend}的防线，占领期间获得了${exp}经验",
            "slave_run": "msg_templates_3^${slave}挣脱了你的束缚，偷偷的逃跑了。",
            "catch_slave": "msg_templates_4^你抓${friend}回家，做了你的苦工。",
            "friend.lure_wolf": "msg_templates_11^${friend}成功的引走了你丛林中的一波狼,减轻了你羊村的压力,赶紧去谢谢 TA 吧。",
            "friend.defend_failed": "msg_templates_28^${friend}的防线挑战了你驯化营中的狼群，${friend}失败了。",
            "friend.arena.pk_failed": "msg_templates_29^${friend}的狼群在竞技场的切磋中试图突破你的防线，${friend}失败了。",
            "invite_friend": "msg_templates_12^${friend}通过你的邀请安装了游戏，你获得了${score_num}积分。",
            "friend.retreat": "msg_templates_20^${friend}已经从你的大本营撤防了，你恢复了自由。",
            "welcome": "msg_templates_1^欢迎你来到保卫羊村，贪婪邪恶的狼群正在羊村附近游荡，快快召集你的好友，发挥你的聪明才智，保护小羊，成为羊村的守护神吧！ ",
            "reward_msg": "msg_templates_16^${msg}",
            "friend.catch_slave_from_others": "msg_templates_9^${friend}把你从${friend_owner}的手中抢走了。",
            "friend.arena.defend": "msg_templates_23^${friend}的防线在竞技场的切磋中成功抵御了你的狼群。",
            "friend.arena.defend_failed1": "msg_templates_31^21233",
            "friend.pk": "msg_templates_17^你的大本营已经被${friend}占领了，快去${friend}的防线反抗他！",
            "friend.arena.pk": "msg_templates_22^${friend}的狼群在竞技场的切磋中成功突破了你的防线。",
            "receive_back_gift": "msg_templates_14^你接受并回赠了${friend}给你的礼物${gift_name}",
            "friend.resist_failed": "msg_templates_26^${friend}派出狼群试图突破你的防线进行反抗，由于你的防线太强，${friend}失败了。",
            "auto_reward_msg": "msg_templates_32^你在${dmap_name}的噩梦排行榜中获得了第${num}名的成绩，特此发放奖励。",
            "friend.friend.help_failed": "msg_templates_27^${helper}为了解救${friend}试图突破你的防线，${helper}失败了。",
            "friend.catch_slave": "msg_templates_6^你被${friend}抓去做了苦工,真可怜~~",
            "reward_61_invite_score": "msg_templates_15^感谢您参与“六一儿童节，写祝福得积分”活动，恭喜获得61点积分奖励！",
            "lure_wolf": "msg_templates_10^你成功的引来了 ${friend} 丛林中的一波狼,这种助人为乐的精神真是难能可贵啊。",
            "friend.friend.help": "msg_templates_19^${helper}为了解救${friend}成功突破了你的防线，你失去了一个领地。",
            "friend.arena.defend_failed": "msg_templates_30^${friend}的防线在竞技场的切磋中试图抵御你的狼群，${friend}失败了。",
            "friend.resist": "msg_templates_18^${friend}突破了你的防线反抗成功，你失去了一个领地。",
            "friend.defend": "msg_templates_21^${friend}访问了你的驯化营，挑战并战胜了你的狼群。",
            "receive_gift": "msg_templates_13^你接受了${friend}回赠给你的礼物${gift_name}",
            "friend.steal_mine": "msg_templates_24^你的领主${friend}先于你一步拿走了${p_str}",
            "exchanged_properties": "msg_templates_5^你刚刚兑换出了${n}个${gift_name}",
            "others.catch_my_slave": "msg_templates_8^${friend_owner}把你的苦工${friend}抢走了，你获得${gold}银币。",
            "buy_properties": "msg_templates_2^你购买得到了${properties}。 "
        },
        "feed_gift": {
            "use_ybb": {
                "title": "feed_gift_33^${me}使用留声机后获得“虐狼先进工作者”荣誉称号",
                "gift": {},
                "summary": "feed_gift_32^自从虐狼先进工作者${me}使用了留声机后，虐狼事业越来越好，无数掌声，鲜花荣誉铺天盖地而来~~",
                "desc": "feed_gift_31^我使用留声机后获得“虐狼先进工作者”荣誉称号，心情好了，狼来的快了，就连人也变的漂亮了",
                "image": "feed_use_ybb.gif"
            },
            "receive_gift": {
                "title": "feed_gift_64^快来送我礼物吧！",
                "gift": {},
                "summary": "feed_gift_63^${me}在保卫羊村中风生水起，TA正等着你来赠送礼物再用相同礼物回敬！",
                "desc": "feed_gift_62^我刚刚收到了${friend}的礼物，和我一起来保卫羊村，大家礼尚往来、互通有无！！！",
                "image": "feed_coin.jpg"
            },
            "free_gift": {
                "msg": "feed_gift_60^一起来保卫羊村参加好友互赠礼物吧！",
                "title": "feed_gift_61^${itemName}",
                "image": "feed_coin.jpg",
                "desc": "feed_gift_59^最具人气、最萌、最好玩的保卫羊村，等待最棒的你来挑战咯！！！"
            },
            "create_mine": {
                "title": "feed_gift_48^我要挖大大的宝石",
                "gift": {},
                "summary": "feed_gift_47^${me}开始挖地球了，速速前来围观",
                "desc": "feed_gift_46^亲，我开始采矿啦，快来帮我加速，你也有奖励呦",
                "image": "feed_mine.jpg"
            },
            "old_invite": {
                "msg": "feed_gift_56^老用户回归保卫羊村，更可以获得非常给力的回归礼包哦，快来领取吧！",
                "title": "feed_gift_57^千呼万唤使出来，羊村周年献新图",
                "image": "feed_arena.jpg",
                "desc": "feed_gift_55^千呼万唤使出来，羊村周年献新图，第一个通关的村长，会不会是你呢？"
            },
            "buy_friend_gift": {
                "title": "feed_gift_21^${me}抓了${friend}到自己的羊村做苦工",
                "gift": {},
                "summary": "feed_gift_20^月黑灯高抢人夜，${me}把TA的好友${friend}抓走做了羊村苦工。",
                "desc": "feed_gift_19^我抓了${friend}做羊村的苦工。哦耶~~ 我得意的笑，我得意的笑～",
                "image": "feed_buy_friend_gift.gif"
            },
            "new_invite": {
                "msg": "feed_gift_58^最具人气、最萌、最好玩的保卫羊村，等待最棒的你来挑战，现在登录更有给力大礼领取哦！",
                "image": "qiutian.jpg"
            },
            "pk_arena_win": {
                "title": "feed_gift_42^快点来人终结掉他吧",
                "gift": {},
                "summary": "feed_gift_41^${me}培养的狼群，在竞技场中骄傲的获得了${pkWin}连胜！",
                "desc": "feed_gift_40^${pkWin}连胜！我的狼在竞技场中横行千里，如入无塔之境",
                "image": "feed_arena.jpg"
            },
            "dream_boss": {
                "title": "feed_gift_39^勇敢的${me}杀死了${boss}",
                "gift": {},
                "summary": "feed_gift_38^英勇的牧羊人${me}成功的抵御了${boss}的侵扰,TA 的美名在大街小巷中广为传颂",
                "desc": "feed_gift_37^${boss}胆敢在小羊的梦中捣乱,已经被我教训了，咩哈哈",
                "image": "feed_pass_map.gif"
            },
            "defend_arena_win": {
                "title": "feed_gift_45^小狼儿，别被我吓跑呦",
                "gift": {},
                "summary": "feed_gift_44^${me}布局的塔阵，在竞技场中完美的获得了${defendWin}连胜！",
                "desc": "feed_gift_43^${defendWin}连胜！我的塔在竞技场中严防死守，一根狼毛也别想进来",
                "image": "feed_arena.jpg"
            },
            "pass_map": {
                "title": "feed_gift_12^勇敢的${me}杀死了${boss}",
                "gift": {},
                "summary": "feed_gift_11^英勇的牧羊人${me}成功的抵御了${boss}的侵扰,TA 的美名在大街小巷中广为传颂",
                "desc": "feed_gift_10^我勇敢的杀死了${boss},成功的抵御了${boss}的侵扰,雄赳赳,气昂昂,杀死${boss}保小羊！",
                "image": "feed_pass_map.gif"
            },
            "award_coin": {
                "title": "feed_gift_51^大量羊币道具登陆即可得，甚至还有给力铁镐！",
                "gift": {},
                "summary": "feed_gift_50^丰富奖励闪花了${me}的双眼！",
                "desc": "feed_gift_49^快登录【保卫羊村】每天都可领取到多种羊币道具，登陆即可得噢~~",
                "image": "feed_mine.jpg"
            },
            "killed_boss": {
                "title": "feed_gift_36^勇敢的${me}杀死了${boss}",
                "gift": {},
                "summary": "feed_gift_35^英勇的牧羊人${me}成功的抵御了${boss}的侵扰,TA 的美名在大街小巷中广为传颂",
                "desc": "feed_gift_34^我勇敢的杀死了${boss},成功的抵御了它的侵扰",
                "image": "feed_pass_map.gif"
            },
            "share": {
                "title": "feed_gift_54^最好玩的新图，最激烈的竞技场",
                "gift": {},
                "summary": "feed_gift_53^现在登录保卫羊村，更有给力大礼领取哦！！！",
                "desc": "feed_gift_52^最具人气、最萌、最好玩的保卫羊村，等待最棒的你来挑战咯！！！",
                "image": "feed_coin.jpg"
            },
            "call_friend_back": {
                "title": "feed_gift_27^各位英雄在上，受在下一拜。",
                "gift": {},
                "summary": "feed_gift_26^村长叫你们回村儿打狼 锄强扶弱，狼见狼怕的我对大家说：“村长说了，羊羊需要你们，快回村儿吧",
                "desc": "feed_gift_25^村长叫你们回村儿打狼 锄强扶弱，狼见狼怕的我对大家说：“村长说了，羊羊需要你们，快回村儿吧",
                "image": "feed_call_friend_back.jpg"
            },
            "grab_friend_gift": {
                "title": "feed_gift_24^天时地利人和，${me}把${friend}从TA的原主人手中抢走了。",
                "gift": {},
                "summary": "feed_gift_23^有钱能使鬼推磨，抓的早不如抓的巧，${me}就是那么的给力，那么的霸气外露。",
                "desc": "feed_gift_22^我把${friend}从TA的原主人手中抢走了 有钱能使鬼推磨，抓的早不如抓的巧，给力！",
                "image": "feed_grab_friend_gift.gif"
            },
            "arena_award": {
                "title": "feed_gift_3^来竞技场抽奖吧！",
                "gift": {},
                "summary": "feed_gift_2^${me}上辈子积了很多德，终于在这一刻爆发了",
                "desc": "feed_gift_1^我在竞技场的翻牌奖励中，获得了${itemName}，这就是RP使然啊！",
                "image": "${itemUrl}"
            },
            "use_lqxfj": {
                "title": "feed_gift_30^${me}使用稻草羊后获得“虐狼先进工作者”荣誉称号",
                "gift": {},
                "summary": "feed_gift_29^自从虐狼先进工作者${me}使用了稻草羊后，虐狼事业越来越好，无数掌声，鲜花荣誉铺天盖地而来~~",
                "desc": "feed_gift_28^我使用稻草羊后获得“虐狼先进工作者”荣誉称号，心情好了，狼来的多了，就连人也变的漂亮了",
                "image": "feed_use_lqxfj.gif"
            },
            "level_up": {
                "title": "feed_gift_15^${me}通过保卫羊村等级提升至${level}级",
                "gift": {},
                "summary": "feed_gift_14^${me}在不懈努力之后终于有了回报,为了庆祝等级提升,TA 决定大宴宾客,每人一份大红包!",
                "desc": "feed_gift_13^我终于到${level}级！！！为了庆祝等级提升,决定大宴宾客,每人一份大红包!",
                "image": "feed_level_up.gif"
            },
            "new_install": {
                "title": "feed_gift_9^恭贺${me}, 顺利完成新手试练",
                "gift": {},
                "summary": "feed_gift_8^${me}已经成功通过保卫羊村的试练,成为羊村守护神,受到万羊敬仰的 TA 正在召集你来加入,快快和 TA 一起,加入保卫羊村!",
                "desc": "feed_gift_7^我顺利完成新手试练!成为羊村守护神,快快和我一起,加入保卫羊村!",
                "image": "feed_new_install.gif"
            },
            "lure_wolf": {
                "title": "feed_gift_6^${me}助人为乐，帮助好友抵御蜂拥而至的狼群",
                "gift": {},
                "summary": "feed_gift_5^${me}上辈子一定是雷锋叔叔，始终坚持不懈的在做好事帮助好友消除狼患，快来敬仰TA吧",
                "desc": "feed_gift_4^我帮助${friend}解决了狼群危机，勇敢的引走了${friend}所在羊村外的狼。",
                "image": "feed_lure_wolf.gif"
            },
            "login_gift": {
                "title": "feed_gift_18^恶狼们小心喽，注意我的无敌漂漂拳！",
                "gift": {},
                "summary": "feed_gift_17^${me}历经千辛万苦总算得到了绝版秘籍《虐狼宝典》，让狼群来的更猛烈些吧！！",
                "desc": "feed_gift_16^大狼小狼都洗洗干净，${me}大神闪亮登场。",
                "image": "qiutian.jpg"
            }
        },
        "broadcast_templates": {
            "mixed_gem": "broadcast_templates_8^${user_name}合成出了${gem_name}",
            "level_up": "broadcast_templates_1^${user_name}等级达到${number}级",
            "map_pass": "broadcast_templates_9^${user_name}消灭了所有的狼，守卫了${map_name}",
            "buy_properties": "broadcast_templates_5^${user_name}在商城中购买了${properties}",
            "successive_offensive": "broadcast_templates_3^${user_name}竞技场狼连胜${number}次",
            "dmap_top_index": "broadcast_templates_6^${user_name}在本期${dmap_name}的噩梦排行榜中获得了第${top_index}名",
            "exchange_properties": "broadcast_templates_7^${user_name}在兑换道具兑换出了${properties}",
            "successive_defense": "broadcast_templates_2^${user_name}竞技场塔连胜${number}次",
            "get_arena_gifts": "broadcast_templates_4^${user_name}在竞技场中翻牌获得了${properties}"
        },
        "wolfs": {
            "tksjblt": {
                "skills": [
                    {
                        "skid": "Reborn_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_C",
                        "lev": 10
                    },
                    {
                        "skid": "WeakVertigo_X6",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    "尝尝机械手的威力吧",
                    "小羊们你们这是自寻死路！！",
                    "呃，机械手居然被打败了。。",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "邪恶的吉贝丽塔操纵着巨大的机械冲向羊村！！",
                "width": 850,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 200000,
                    "b": 0
                },
                "name": "机械手吉贝丽塔"
            },
            "xiaochoul": {
                "skills": [
                    {
                        "skid": "Summon_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakBeat_X4",
                        "lev": 1
                    }
                ],
                "charm": -25,
                "speed": 15,
                "speak": [
                    [],
                    "打群架神马的我最擅长了",
                    [],
                    [],
                    [],
                    "天灵灵地灵灵，小灰狼们快显灵"
                ],
                "pop": 8,
                "info": "会召唤出狼小弟",
                "width": 550,
                "height": 700,
                "defense": 3,
                "hp_factor": {
                    "c": 33.6,
                    "a": 280,
                    "b": 140
                },
                "name": "小丑狼"
            },
            "weisuol": {
                "skills": [
                    {
                        "skid": "Cloud_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakVertigo_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakLight_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 22,
                "speak": [
                    [],
                    "封塔的云朵是多么的美丽",
                    [],
                    [],
                    [],
                    "苍天大地，赐予我力量吧"
                ],
                "pop": 5,
                "info": "会乌云技能，使一座塔无效 ",
                "width": 550,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 20.4,
                    "a": 170,
                    "b": 85
                },
                "name": "猥琐狼"
            },
            "shentoul": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "Invisible_A",
                        "lev": 10
                    }
                ],
                "charm": -10,
                "speed": 17,
                "speak": [
                    "来也匆匆去也匆匆~",
                    [],
                    "神偷卡门是我的师兄~",
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "来无踪去无影~~",
                "width": 800,
                "height": 950,
                "defense": 1,
                "hp_factor": {
                    "c": 22,
                    "a": 120,
                    "b": 75
                },
                "name": "神偷狼"
            },
            "wjxc": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 22,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    "camp_wolfs_108^go go go!!",
                    "camp_wolfs_109^我只是追着小羊跑的狼！",
                    "camp_wolfs_110^魔术戏法如此神奇～",
                    "camp_wolfs_111^被看穿了！",
                    [],
                    []
                ],
                "pop": 3,
                "info": "camp_wolfs_107^小丑王忠实的部下",
                "width": 550,
                "height": 750,
                "hp_factor": {
                    "c": 18.6,
                    "a": 145.5,
                    "b": 47.5
                },
                "name": "camp_wolfs_106^玩具小丑"
            },
            "al": {
                "skills": [],
                "charm": -20,
                "speed": 22,
                "explev": {
                    "c": -119.74,
                    "a": -357.15,
                    "d": 18.39,
                    "b": 428.57
                },
                "speak": [
                    "camp_wolfs_3^今儿天不错，适合吃羊",
                    "camp_wolfs_4^左三圈右三圈，小羊一只小酒一壶",
                    "camp_wolfs_5^手。。。手下留情啊。。。",
                    "camp_wolfs_6^我的羊肉…火锅",
                    "camp_wolfs_7^哎呀哎呀，小羊我来啦",
                    "camp_wolfs_8^呔！看招！"
                ],
                "pop": 1,
                "info": "camp_wolfs_2^呆呆的像，因为太笨学不会东西总是被欺负",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 27.1,
                    "a": 212.1,
                    "b": 69.3
                },
                "name": "camp_wolfs_1^阿呆狼"
            },
            "sdxlw": {
                "skills": [
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 16,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    "camp_wolfs_60^Merry christmas！",
                    [],
                    [],
                    "camp_wolfs_61^大过节的，不要这么过分TT",
                    [],
                    "camp_wolfs_62^当当当当~~~"
                ],
                "pop": 3,
                "info": "camp_wolfs_59^据说得到了恩赐的魔法棒，一直爱不释手",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 44.8,
                    "a": 350,
                    "b": 114.3
                },
                "name": "camp_wolfs_58^圣诞小狼王"
            },
            "D_xcwad": {
                "charm": 10,
                "speak": [
                    "呦喝，轮到我上场喽",
                    "别小瞧我哦",
                    "哎呀哎呀，偷羊不成蚀把米",
                    "不要啊，我的演出还没结束呢",
                    "哦耶，烤羊表演现在开始",
                    []
                ],
                "width": 850,
                "info": "表面是开心的小丑，真实身份却是狼王卡卡罗兄弟的贴身侍卫，善于笑里藏刀，杀羊于无形。",
                "height": 1600,
                "hp_factor": {
                    "c": 58.8,
                    "a": 490,
                    "b": 245
                },
                "name": "小丑王奥丁",
                "res": "xcwad",
                "speed": 30,
                "pop": 100,
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakVertigo_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "zbjk": {
                "skills": [
                    {
                        "skid": "Summon_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "Reborn_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 10
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFire_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 8,
                "speak": [
                    "小羊诚可贵～财宝价更高～",
                    "若为自由故～两者也不抛～",
                    "别碰我的财宝，坏了你来赔啊！！！",
                    "财宝，我的财宝！～",
                    [],
                    []
                ],
                "pop": 100,
                "info": "身为海盗但不习水性，爱财宝胜过吃小羊，十足的吝啬鬼，为防止自己财宝被偷，经常睡在宝箱里。",
                "width": 750,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 3800000,
                    "b": 0
                },
                "name": "珍宝杰克"
            },
            "fsyjblt": {
                "skills": [
                    {
                        "skid": "ResistLight_C",
                        "lev": 10
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    "以为打到机械手就胜利了么？不！还没完",
                    "我要飞得更高～飞得更高～",
                    "不，这不可能！吉贝丽塔是不会失败的！",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "邪恶的吉贝丽塔操纵着巨大的机械冲向羊村！！",
                "width": 900,
                "height": 600,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 160000,
                    "b": 0
                },
                "name": "飞行员吉贝丽塔"
            },
            "D_eljj": {
                "charm": -15,
                "speak": [
                    "进攻，狼群的勇士们！",
                    "铁的纪律是攻陷羊村的唯一保障",
                    "不要气馁，继续前进",
                    "死亡并不可怕，可怕的是今后吃不到羊肉……",
                    "胜利！",
                    [
                        "接受命运吧",
                        "小羊们~"
                    ]
                ],
                "width": 850,
                "info": "撒旦陆军首领，北方狼族灭门惨案元凶，臭名昭著，相传有一股神秘力量在其背后撑腰。",
                "height": 1100,
                "hp_factor": {
                    "c": 62.4,
                    "a": 520,
                    "b": 260
                },
                "name": "恶狼将军",
                "res": "eljj",
                "speed": 20,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Summon_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 10
                    },
                    {
                        "skid": "Cloud_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "Sprint_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "eljj": {
                "skills": [
                    {
                        "skid": "Summon_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 10
                    },
                    {
                        "skid": "Cloud_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "Sprint_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 20,
                "speak": [
                    "进攻，狼群的勇士们！",
                    "铁的纪律是攻陷羊村的唯一保障",
                    "不要气馁，继续前进",
                    "死亡并不可怕，可怕的是今后吃不到羊肉……",
                    "胜利！",
                    [
                        "接受命运吧",
                        "小羊们~"
                    ]
                ],
                "pop": 100,
                "info": "撒旦陆军首领，北方狼族灭门惨案元凶，臭名昭著，相传有一股神秘力量在其背后撑腰。",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 620000,
                    "b": 0
                },
                "name": "恶狼将军"
            },
            "fashil": {
                "skills": [
                    {
                        "skid": "Summon_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -25,
                "speed": 15,
                "speak": [
                    "我可是狼中贵族",
                    "我这行头酷吧",
                    "别打脸行不...",
                    "小狼你不给力啊",
                    "看什么看，法师也要吃肉的",
                    "去开路吧，小狼!"
                ],
                "pop": 3,
                "info": "会召唤法术的狼",
                "width": 550,
                "height": 800,
                "defense": 1,
                "hp_factor": {
                    "c": 15.6,
                    "a": 130,
                    "b": 65
                },
                "name": "法师狼"
            },
            "bnl": {
                "skills": [
                    {
                        "skid": "Sprint_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 8
                    }
                ],
                "charm": -10,
                "speed": 20,
                "speak": [
                    "错的都是羊！",
                    "开砸了！",
                    "你家就是我家！",
                    [],
                    [],
                    []
                ],
                "pop": 99,
                "info": "充满愤怒的暴怒狼，一直以来被羊群们欺负，现在他们要开始反抗了！",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "暴怒狼"
            },
            "dengshenl2": {
                "skills": [
                    {
                        "skid": "Invisible_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_Z6",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 25,
                "speak": [
                    "是你在召唤我嘛？",
                    [],
                    "你有神马愿望？",
                    [],
                    "打败我，你的愿望就会实现，否则我会吃掉你！！",
                    []
                ],
                "pop": 99,
                "info": "从月光神灯中召唤出的狼",
                "width": 800,
                "height": 1300,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "月光神狼"
            },
            "ldmfd": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 15,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_88^上锯锯下敲敲左修修右补补",
                    "camp_wolfs_89^我们是劳动好能手",
                    "camp_wolfs_90^上锯锯下敲敲左修修右补补",
                    "camp_wolfs_91^我家的兄弟～爱劳动！",
                    [],
                    "camp_wolfs_92^噜啦噜啦咧！"
                ],
                "pop": 4,
                "info": "camp_wolfs_87^听大哥的话，别让它受伤！",
                "width": 850,
                "height": 1450,
                "hp_factor": {
                    "c": 51.8,
                    "a": 404.5,
                    "b": 132.1
                },
                "name": "camp_wolfs_86^劳动模范弟"
            },
            "hlbb2": {
                "skills": [
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_136^我就是那八九点的太阳啦",
                    "camp_wolfs_137^茁壮成长什么的~",
                    "camp_wolfs_138^喂…爱惜点儿童…",
                    "camp_wolfs_139^555，你们欺负我…",
                    "camp_wolfs_140^我先开动啦~",
                    "camp_wolfs_141^我先开动啦~"
                ],
                "pop": 2,
                "info": "camp_wolfs_135^小可爱一只，小小年纪就被派去抓羊",
                "width": 450,
                "height": 550,
                "hp_factor": {
                    "c": 21.9,
                    "a": 171.1,
                    "b": 55.9
                },
                "name": "camp_wolfs_134^限定灰狼宝宝（蓝）"
            },
            "feizeil": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 9
                    },
                    {
                        "skid": "Cloud_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 25,
                "speak": [
                    "哎呀，有情况！！！",
                    "小看我的飞行技术，你会后悔哒！",
                    "我飞我飞~",
                    "别让我掉水里，人家好怕怕～",
                    [],
                    []
                ],
                "pop": 8,
                "info": "虽然很会飞，但是很怕水...除了在天上，就是在船上…",
                "width": 750,
                "height": 600,
                "defense": 3,
                "hp_factor": {
                    "c": 20.4,
                    "a": 170,
                    "b": 85
                },
                "name": "飞贼狼"
            },
            "tsnm": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z8",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -5,
                "speed": 15,
                "speak": [
                    "小狼们，你们的后援军来啦",
                    "救死扶伤是我的爱好",
                    "加血加的好辛苦",
                    "医人却无法救已",
                    "有后勤保障就是给力吧",
                    "加血喽~"
                ],
                "pop": 100,
                "info": "北方狼族御用祭祀，跟随格鲁兄弟来到冰火岛，在一次火山爆发中与之失散。",
                "width": 900,
                "height": 750,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 150000,
                    "b": 0
                },
                "name": "天使奶妈"
            },
            "dahuil": {
                "skills": [
                    {
                        "skid": "WeakFire_X1",
                        "lev": 1
                    }
                ],
                "charm": -5,
                "speed": 22,
                "speak": [
                    "爱小羊，更爱吃羊，我是大灰狼",
                    "这天气，适合吃羊",
                    "好痛，别打啦~",
                    [
                        "我的羊肉火锅...",
                        "不甘心呐"
                    ],
                    "渍渍~小羊我来啦",
                    []
                ],
                "pop": 1,
                "info": "丛林中随处可见的狼",
                "width": 600,
                "height": 750,
                "defense": 1,
                "hp_factor": {
                    "c": 10.8,
                    "a": 90,
                    "b": 45
                },
                "name": "大灰狼"
            },
            "tsnm2": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z8",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -5,
                "speed": 15,
                "speak": [
                    "小狼们，你们的后援军来啦",
                    "救死扶伤是我的爱好",
                    "加血加的好辛苦",
                    "医人却无法救已",
                    "有后勤保障就是给力吧",
                    "加血喽~"
                ],
                "pop": 100,
                "info": "北方狼族御用祭祀，跟随格鲁兄弟来到冰火岛，在一次火山爆发中与之失散。",
                "width": 900,
                "height": 750,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 150000,
                    "b": 0
                },
                "name": "天使奶妈"
            },
            "daomu1": {
                "skills": [
                    {
                        "skid": "Invisible_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "我可是狼中贵族",
                    "我这行头酷吧",
                    "别打脸行不...",
                    "小狼你不给力啊",
                    "看什么看，法师也要吃肉的",
                    "去开路吧，小狼!"
                ],
                "pop": 99,
                "info": "盗墓组老大，从小励志盗取天下所有的珍宝，故创立盗亦有道青年团。",
                "width": 500,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 96,
                    "a": 800,
                    "b": 400
                },
                "name": "盗墓老大"
            },
            "wkl": {
                "skills": [
                    {
                        "skid": "ResistFrost_A",
                        "lev": 1
                    },
                    {
                        "skid": "WeakBeat_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "explev": {
                    "c": -119.74,
                    "a": -357.15,
                    "d": 18.39,
                    "b": 428.57
                },
                "speak": [
                    "camp_wolfs_11^走路睡觉也是一种本事",
                    "camp_wolfs_12^哎哟，又撞墙了",
                    [],
                    "camp_wolfs_13^果然…我是不合格的",
                    "camp_wolfs_14^纳尼？有羊肉！",
                    "camp_wolfs_15^龟派气功，哦打打打打打~"
                ],
                "pop": 1,
                "info": "camp_wolfs_10^走路都能睡着的狼，出了名的妻管严",
                "width": 550,
                "height": 700,
                "hp_factor": {
                    "c": 35.1,
                    "a": 274.5,
                    "b": 89.7
                },
                "name": "camp_wolfs_9^沃克狼"
            },
            "bdl": {
                "skills": [
                    {
                        "skid": "Sprint_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 20,
                "speak": [
                    "咳咳咳，啊切！",
                    "我要逮只小羊补补身子",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "患重度病毒感冒的狼！",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 36,
                    "a": 320,
                    "b": 150
                },
                "name": "病毒狼"
            },
            "renzhel": {
                "skills": [
                    {
                        "skid": "Divide_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_C",
                        "lev": 9
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    [],
                    "人海战术有时挺有用的",
                    [],
                    [],
                    [],
                    "分的出哪个是我么？"
                ],
                "pop": 8,
                "info": "擅长分身，不怕光和电",
                "width": 550,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 20.4,
                    "a": 170,
                    "b": 85
                },
                "name": "忍者狼"
            },
            "bml": {
                "skills": [
                    {
                        "skid": "ResistBeat_A",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 24,
                "explev": {
                    "c": -119.74,
                    "a": -357.15,
                    "d": 18.39,
                    "b": 428.57
                },
                "speak": [
                    "camp_wolfs_18^为了省钱，羊肉要自己抓",
                    "camp_wolfs_19^听说今天菜价又涨了",
                    "camp_wolfs_20^羊排夹肉饼…等等我…",
                    [],
                    "camp_wolfs_21^嗯，晚上可以吃烤全羊了~",
                    []
                ],
                "pop": 1,
                "info": "camp_wolfs_17^生平最爱：抽烟喝酒烫头带孩子管老公",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 24.9,
                    "a": 194.5,
                    "b": 63.5
                },
                "name": "camp_wolfs_16^保姆狼"
            },
            "hudunl": {
                "skills": [
                    {
                        "skid": "Shield_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistCrit_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 22,
                "speak": [
                    "哥来自圣殿！",
                    [
                        "打不着哥，打不着哥",
                        "我有护盾我怕谁"
                    ],
                    "哦漏…为什么是火球",
                    "原来被烤焦的滋味…",
                    "今晚吃烤羊腿呢，还是炖羊肉呢",
                    "看哥的无敌风火轮！"
                ],
                "pop": 7,
                "info": "能给附近的狼加上护盾",
                "width": 600,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 36,
                    "a": 300,
                    "b": 150
                },
                "name": "护盾狼"
            },
            "xtxl": {
                "skills": [
                    {
                        "skid": "ResistFrost_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "Airborne_Z1",
                        "lev": 1
                    }
                ],
                "charm": -2,
                "speed": 20,
                "speak": [
                    "冲啊~",
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 2,
                "info": "坐着装甲车悠哉悠哉去吃羊",
                "width": 450,
                "height": 550,
                "defense": 1,
                "hp_factor": {
                    "c": 50,
                    "a": 200,
                    "b": 100
                },
                "name": "小突袭狼"
            },
            "dengshenl3": {
                "skills": [
                    {
                        "skid": "Invisible_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_Z6",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 30,
                "speak": [
                    "是你在召唤我嘛？",
                    [],
                    "你有神马愿望？",
                    [],
                    "打败我，你的愿望就会实现，否则我会吃掉你！！",
                    []
                ],
                "pop": 99,
                "info": "从烈日神灯中召唤出的狼",
                "width": 800,
                "height": 1600,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "烈日神狼"
            },
            "sdys": {
                "skills": [
                    {
                        "skid": "Shield_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Taunt_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistCrit_A",
                        "lev": 8
                    },
                    {
                        "skid": "WeakPoison_X6",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "主啊！赐予我力量吧！",
                    [
                        "赌上我圣殿勇士的名誉！！！",
                        "我要代表上帝消灭你们！！"
                    ],
                    "小羊…不要…不要跑…",
                    "世界上最遥远的距离，就是我在村外，你在…村里",
                    "鲜嫩的羊肉在闪闪发光啊！！",
                    "向我开炮吧！！"
                ],
                "pop": 100,
                "info": "恶狼将军麾下第一战将，荣耀的骑士",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 700000,
                    "b": 0
                },
                "name": "圣殿勇士"
            },
            "D_bsel": {
                "charm": -15,
                "speak": [
                    [],
                    [
                        "气势最重要",
                        "我闪烁的身姿不错吧"
                    ],
                    [],
                    [],
                    [],
                    []
                ],
                "width": 900,
                "info": "冰雪岛的土著狼族首领，禁锢的思想让它们排斥一切外来势力。",
                "height": 1050,
                "hp_factor": {
                    "c": 61.2,
                    "a": 510,
                    "b": 255
                },
                "name": "冰霜恶狼",
                "res": "bsel",
                "speed": 18,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Blink_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "sdxhl": {
                "skills": [
                    {
                        "skid": "ResistFrost_A",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    "camp_wolfs_54^我带礼物来啦~~",
                    "camp_wolfs_55^啊呜~礼物就是被我吃掉~",
                    [],
                    "camp_wolfs_56^大过节的，不要这么过分TT",
                    [],
                    "camp_wolfs_57^天灵灵地灵灵，圣诞老人快显灵"
                ],
                "pop": 3,
                "info": "camp_wolfs_53^铃儿叮叮当当的，专门给圣诞老狼拉车打头阵的",
                "width": 450,
                "height": 550,
                "hp_factor": {
                    "c": 23.9,
                    "a": 186.7,
                    "b": 61
                },
                "name": "camp_wolfs_52^驯鹿宝宝狼"
            },
            "bsel": {
                "skills": [
                    {
                        "skid": "Blink_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    [],
                    [
                        "气势最重要",
                        "我闪烁的身姿不错吧"
                    ],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "冰雪岛的土著狼族首领，禁锢的思想让它们排斥一切外来势力。",
                "width": 900,
                "height": 1050,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 300000,
                    "b": 0
                },
                "name": "冰霜恶狼"
            },
            "gzl": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_159^贵族要有贵族的气质~",
                    [],
                    "camp_wolfs_160^开车要开法拉利，穿衣要穿阿玛尼，吃羊要吃小肥羊~",
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_158^我出身名门望族，一向只吃最好的羊肉~",
                "width": 800,
                "height": 1150,
                "hp_factor": {
                    "c": 28.7,
                    "a": 224.4,
                    "b": 73.3
                },
                "name": "camp_wolfs_157^贵族狼"
            },
            "bygkls": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 7
                    },
                    {
                        "skid": "Invisible_C",
                        "lev": 3
                    },
                    {
                        "skid": "ResistVertigo_C",
                        "lev": 4
                    }
                ],
                "charm": -15,
                "speed": 30,
                "speak": [
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "抱着一大坨货物仍然健步如飞的强壮狼",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 450000,
                    "b": 0
                },
                "name": "搬运工克里斯"
            },
            "shanzeil": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 8
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 3
                    },
                    {
                        "skid": "WeakVertigo_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 28,
                "speak": [
                    [],
                    [
                        "我不怕火哦",
                        "落草为寇不是我想要的"
                    ],
                    "拜托，下手轻一点嘛",
                    "大王，我先走一步了……",
                    [],
                    []
                ],
                "pop": 5,
                "info": "对火焰具备一些抗性   ",
                "width": 650,
                "height": 800,
                "defense": 3,
                "hp_factor": {
                    "c": 22.8,
                    "a": 190,
                    "b": 95
                },
                "name": "山贼狼"
            },
            "D_pkygl": {
                "charm": -15,
                "speak": [
                    "嘿，羊儿们，身为大明星的我来喽",
                    "粉丝们，看到我不要太兴奋哦",
                    "你怎么能这样对待帅气的我？",
                    "呃，看来我是兴奋过头了，再见亲爱的...",
                    "哦耶，今晚的羊肉派对开始喽",
                    [
                        "看我用大招！",
                        "奋起吧"
                    ]
                ],
                "width": 850,
                "info": "崇尚青春，活力的摇滚野兽派过气明星，随着名气的日渐衰弱，也不得不走上打家劫舍的日子。",
                "height": 1200,
                "hp_factor": {
                    "c": 34.8,
                    "a": 290,
                    "b": 145
                },
                "name": "朋克摇滚狼",
                "res": "pkygl",
                "speed": 25,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Summon_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "Sprint_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "MassTreatment_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "flkxd2": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 7
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 24,
                "speak": [
                    "小羊羊，沙漠之王来啦~~",
                    "阳光照在身上暖洋洋",
                    "呃，不要弄坏我的发型",
                    "看来我的修行还不够啊",
                    "来来 我已经闻到羊肉汤的味道了",
                    []
                ],
                "pop": 100,
                "info": "弗兰肯兄弟是恶名昭著的强盗，无恶不作，沙漠方圆十里内没有任何狼或羊不闻之丧胆。",
                "width": 750,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 60000,
                    "b": 0
                },
                "name": "弗兰肯兄弟"
            },
            "D_fzswr": {
                "charm": 10,
                "speak": [
                    [],
                    "现在都什么年代了，还步行~",
                    "我飞我飞~",
                    [],
                    [],
                    []
                ],
                "width": 900,
                "info": "曾为马戏团特技演员，在一次表演中被弄伤眼睛，故终日带眼罩不敢以真面目示人。",
                "height": 600,
                "hp_factor": {
                    "c": 53.4,
                    "a": 445,
                    "b": 222.5
                },
                "name": "飞贼沙维尔",
                "res": "fzswr",
                "speed": 15,
                "pop": 100,
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "daomu2": {
                "skills": [
                    {
                        "skid": "Cloud_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "Sprint_Z2",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 40,
                "speak": [
                    [
                        "咦，我来到羊村了？",
                        "向羊村发起进攻"
                    ],
                    [
                        "大哥，我把三弟弄丢了……",
                        "我可是会乌云哦"
                    ],
                    "该死的，非逼我狂奔",
                    "村长大人到底是何方神圣，好厉害……",
                    "哈哈，今晚吃羊肉席",
                    "封塔是我的一大爱好"
                ],
                "pop": 99,
                "info": "盗墓组老二，知名盗墓人士，因一次赌博输得倾家荡产，故投靠盗亦有道青年团。",
                "width": 750,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 52.8,
                    "a": 440,
                    "b": 220
                },
                "name": "盗墓老二"
            },
            "amstl": {
                "skills": [
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakLight_X1",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_123^我的一小步就是狼族的一大步～",
                    "camp_wolfs_124^月球上没有羊肉，还是地球好！",
                    "camp_wolfs_125^哎哟，有时候，进入羊村比登上月球还难～",
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_122^我的名字其实叫阿姆斯特朗",
                "width": 850,
                "height": 1200,
                "hp_factor": {
                    "c": 23.8,
                    "a": 186,
                    "b": 60.7
                },
                "name": "camp_wolfs_121^阿姆斯特狼"
            },
            "xiaohuil": {
                "skills": [
                    {
                        "skid": "WeakFire_X1",
                        "lev": 1
                    }
                ],
                "charm": -2,
                "speed": 36,
                "speak": [
                    "我跑的很快哦",
                    [
                        "我也有牙哦",
                        "皮薄不是我的错"
                    ],
                    "哎呦疼啦",
                    [
                        "唔...",
                        "呜555... "
                    ],
                    "我先开动啦",
                    []
                ],
                "pop": 1,
                "info": "跑的很快的小狼",
                "width": 450,
                "height": 550,
                "defense": 1,
                "hp_factor": {
                    "c": 6.6,
                    "a": 55,
                    "b": 27.5
                },
                "name": "小灰狼"
            },
            "flkxd": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 7
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 24,
                "speak": [
                    "小羊羊，沙漠之王来啦~~",
                    "阳光照在身上暖洋洋",
                    "呃，不要弄坏我的发型",
                    "看来我的修行还不够啊",
                    "来来 我已经闻到羊肉汤的味道了",
                    []
                ],
                "pop": 100,
                "info": "弗兰肯兄弟是恶名昭著的强盗，无恶不作，沙漠方圆十里内没有任何狼或羊不闻之丧胆。",
                "width": 750,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 60000,
                    "b": 0
                },
                "name": "弗兰肯兄弟"
            },
            "smzfl": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X4",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 14,
                "speak": [
                    "地狱的钟声已经敲响",
                    "要学会尊老爱幼",
                    "这是哪家的孩子，那么没礼貌",
                    "呃，我还不想死",
                    "哈哈，这次要开荤了",
                    []
                ],
                "pop": 100,
                "info": "表面是一对老老实实的守墓老者，外表冷酷，内心更是阴险毒辣。",
                "width": 850,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 200000,
                    "b": 0
                },
                "name": "萨摩双煞"
            },
            "smzfl2": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X4",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 14,
                "speak": [
                    "地狱的钟声已经敲响",
                    "要学会尊老爱幼",
                    "这是哪家的孩子，那么没礼貌",
                    "呃，我还不想死",
                    "哈哈，这次要开荤了",
                    []
                ],
                "pop": 100,
                "info": "表面是一对老老实实的守墓老者，外表冷酷，内心更是阴险毒辣。",
                "width": 850,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 200000,
                    "b": 0
                },
                "name": "萨摩双煞"
            },
            "kklxd": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 24,
                "speak": [
                    "小羊儿乖乖，把门儿开开",
                    "力量和血量决定一切！！",
                    "来吧，我有金刚的身躯",
                    "没想到我也有今天……不甘心呐",
                    "晚餐有着落了，哈哈",
                    []
                ],
                "pop": 100,
                "info": "荒漠中神秘恐怖、杀羊不眨眼的狼王兄弟，相传没有谁能够见它们后活着回家。",
                "width": 800,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 600000,
                    "b": 0
                },
                "name": "卡卡罗兄弟"
            },
            "lieshoul": {
                "skills": [
                    {
                        "skid": "Blink_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakBeat_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakVertigo_X2",
                        "lev": 1
                    }
                ],
                "charm": -25,
                "speed": 15,
                "speak": [
                    [],
                    "不要和我比短跑，你伤不起",
                    "伤不起啊伤不起……",
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "会闪烁突进",
                "width": 550,
                "height": 700,
                "defense": 3,
                "hp_factor": {
                    "c": 25.2,
                    "a": 210,
                    "b": 105
                },
                "name": "猎手狼"
            },
            "yzabl": {
                "skills": [
                    {
                        "skid": "ResistPoison_A",
                        "lev": 1
                    },
                    {
                        "skid": "WeakLight_X1",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 15,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    "camp_wolfs_120^登上月球不仅仅只是人类的梦想，也是狼族的梦想～",
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 3,
                "info": "camp_wolfs_119^起飞，目标月球",
                "width": 650,
                "height": 600,
                "hp_factor": {
                    "c": 20.2,
                    "a": 158.1,
                    "b": 51.6
                },
                "name": "camp_wolfs_118^月之阿波罗"
            },
            "shamol": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    }
                ],
                "charm": -5,
                "speed": 18,
                "speak": [
                    "向着羊村出发~",
                    "沙漠的阳光总是那么的明媚！",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 1,
                "info": "沙漠中随处可见的狼",
                "width": 550,
                "height": 750,
                "defense": 1,
                "hp_factor": {
                    "c": 13.2,
                    "a": 110,
                    "b": 55
                },
                "name": "沙漠狼"
            },
            "zblw": {
                "skills": [
                    {
                        "skid": "Burst_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X8",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 20,
                "speak": [
                    "为了圣战",
                    [],
                    "别逼我",
                    "为了……圣……",
                    "成功到达",
                    []
                ],
                "pop": 100,
                "info": "流浪在荒漠的圣战教徒，追随卡卡罗狼王兄弟，用鲜血来捍卫自己的忠诚。",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 50000,
                    "b": 0
                },
                "name": "自爆狼王"
            },
            "ybklrXX": {
                "skills": [
                    {
                        "skid": "Cloud_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 9
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 9
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 28,
                "speak": [
                    "我的世界只有血的颜色。",
                    [
                        "小羊们拿命来吧，哈哈哈哈哈！",
                        "挣扎吧，小羊们！"
                    ],
                    "看我的九天神雷…呃，好像歪了。",
                    [
                        "我还是太年轻了吧，妈妈…",
                        "我还是太年轻了…"
                    ],
                    "羊羊可以做很多事，比如烤全羊。",
                    "高级形态，启动！"
                ],
                "pop": 100,
                "info": "拥有不同于常狼的能力，残暴而喜好侵略，在极北冰地建立了自己的统治范围，并不断向外扩张。",
                "width": 850,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 700000,
                    "b": 0
                },
                "name": "异变科里尔"
            },
            "jingangl": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 6
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 3
                    },
                    {
                        "skid": "WeakVertigo_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -25,
                "speed": 14,
                "speak": [
                    "小狼们不给力，看来需要亲自上阵了",
                    "今天的天真不错~~",
                    "不要打了，再打就内出血了",
                    [],
                    [],
                    []
                ],
                "pop": 10,
                "info": "血量相当惊人",
                "width": 650,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 60,
                    "a": 500,
                    "b": 250
                },
                "name": "金刚狼"
            },
            "kklxd2": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 24,
                "speak": [
                    "小羊儿乖乖，把门儿开开",
                    "力量和血量决定一切！！",
                    "来吧，我有金刚的身躯",
                    "没想到我也有今天……不甘心呐",
                    "晚餐有着落了，哈哈",
                    []
                ],
                "pop": 100,
                "info": "荒漠中神秘恐怖、杀羊不眨眼的狼王兄弟，相传没有谁能够见它们后活着回家。",
                "width": 800,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 600000,
                    "b": 0
                },
                "name": "卡卡罗兄弟"
            },
            "tufeil": {
                "skills": [
                    {
                        "skid": "WeakVertigo_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 26,
                "speak": [
                    "老子生意开张喽",
                    [],
                    [],
                    "呃，阴沟翻船了……",
                    [],
                    []
                ],
                "pop": 5,
                "info": "沙漠中的土匪，土匪中的精英",
                "width": 600,
                "height": 750,
                "defense": 1,
                "hp_factor": {
                    "c": 25.2,
                    "a": 210,
                    "b": 105
                },
                "name": "土匪狼"
            },
            "daomu6": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "Reborn_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    "对付我，你还差点",
                    "喷火器要没油了？",
                    "桀桀，准备降落",
                    [],
                    [],
                    []
                ],
                "pop": 99,
                "info": "会飞并不可怕，飞得高还摔不死的家伙最可怕",
                "width": 800,
                "height": 800,
                "defense": 5,
                "hp_factor": {
                    "c": 24,
                    "a": 200,
                    "b": 100
                },
                "name": "天空萝莉"
            },
            "lzlm": {
                "skills": [
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 28,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    [],
                    "camp_wolfs_79^离开绿洲了就是这么热",
                    [],
                    "camp_wolfs_80^再也不热了！",
                    [],
                    []
                ],
                "pop": 3,
                "info": "camp_wolfs_78^她从绿洲来，带着兰花草",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 25.6,
                    "a": 200,
                    "b": 65.3
                },
                "name": "camp_wolfs_77^绿洲狼妹"
            },
            "abl": {
                "skills": [
                    {
                        "skid": "ResistPoison_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 22,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_24^爱学习，爱看报，国家大事都知道",
                    [],
                    "camp_wolfs_25^不要抢我的报…纸",
                    "camp_wolfs_26^你们。。。太过分了。。。",
                    [],
                    "camp_wolfs_27^嗯？该用这页的技能了。"
                ],
                "pop": 2,
                "info": "camp_wolfs_23^戴眼镜的老学究，听说对各方面都很有研究",
                "width": 550,
                "height": 750,
                "hp_factor": {
                    "c": 29.9,
                    "a": 233.4,
                    "b": 76.2
                },
                "name": "camp_wolfs_22^阿伯狼"
            },
            "hbtjl": {
                "skills": [
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_A",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X4",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 31,
                "explev": {
                    "c": -167.63,
                    "a": -500,
                    "d": 25.74,
                    "b": 600
                },
                "speak": [
                    "camp_wolfs_149^海豹突击队员们出击啦！！",
                    "camp_wolfs_150^我们是抓羊高手",
                    "camp_wolfs_151^突击大业未完未完啊。。。",
                    [],
                    [],
                    []
                ],
                "pop": 5,
                "info": "camp_wolfs_148^木有海豹，只有狼！",
                "width": 800,
                "height": 1150,
                "hp_factor": {
                    "c": 36.6,
                    "a": 286.2,
                    "b": 93.5
                },
                "name": "camp_wolfs_147^海豹突击狼"
            },
            "mssjl": {
                "skills": [
                    {
                        "skid": "Invisible_B",
                        "lev": 10
                    },
                    {
                        "skid": "Cloud_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "Blink_A",
                        "lev": 10
                    }
                ],
                "charm": -15,
                "speed": 30,
                "speak": [
                    "变！消失不见！",
                    [],
                    "变！来朵乌云！",
                    [],
                    "额。。彻底消失了。。。",
                    []
                ],
                "pop": 100,
                "info": "我是大魔术师加林，见证奇迹的时刻到了！",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 500000,
                    "b": 0
                },
                "name": "魔术师加林"
            },
            "dengshenl1": {
                "skills": [
                    {
                        "skid": "Invisible_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_Z6",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 20,
                "speak": [
                    "是你在召唤我嘛？",
                    [],
                    "你有神马愿望？",
                    [],
                    "打败我，你的愿望就会实现，否则我会吃掉你！！",
                    []
                ],
                "pop": 99,
                "info": "从星辰神灯中召唤出的狼",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "星辰神狼"
            },
            "bpbm": {
                "skills": [
                    {
                        "skid": "Burst_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 26,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_65^嗯...要烧着了",
                    [],
                    [],
                    "camp_wolfs_66^哎呀...真的烧着了T_T",
                    [],
                    []
                ],
                "pop": 2,
                "info": "camp_wolfs_64^作为身先士卒的新年爆竹，是狼族中的专业献身人士",
                "width": 550,
                "height": 750,
                "hp_factor": {
                    "c": 25.3,
                    "a": 197.5,
                    "b": 64.5
                },
                "name": "camp_wolfs_63^鞭炮鲍姆"
            },
            "wszm": {
                "skills": [
                    {
                        "skid": "Summon_Z8",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 14,
                "speak": [
                    "小的们上啊！",
                    "打架神马的最不好了，有事小弟们会帮我解决的",
                    "呜呜，我的护花使者在哪呢？",
                    "看来人海战术不是很管用的",
                    "成功进入羊村，羊肉人人有份啊",
                    "小的们快快现身"
                ],
                "pop": 100,
                "info": "冰火岛原始居民，相传会使用古代黑魔法――召唤术。",
                "width": 850,
                "height": 1150,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 230000,
                    "b": 0
                },
                "name": "巫术姊妹"
            },
            "xxgl_1": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "Invisible_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakLight_X2",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 22,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_163^我要新鲜的羊血~",
                    [],
                    "camp_wolfs_164^啊~如此鲜美怎能不让你蠢蠢欲动",
                    "camp_wolfs_165^喝到羊血立马精神百倍~",
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_162^吸血鬼和狼的合体就是无敌的存在~",
                "width": 800,
                "height": 1200,
                "hp_factor": {
                    "c": 22.9,
                    "a": 178.8,
                    "b": 58.4
                },
                "name": "camp_wolfs_161^吸血鬼狼"
            },
            "wszm2": {
                "skills": [
                    {
                        "skid": "Summon_Z8",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 14,
                "speak": [
                    "小的们上啊！",
                    "打架神马的最不好了，有事小弟们会帮我解决的",
                    "呜呜，我的护花使者在哪呢？",
                    "看来人海战术不是很管用的",
                    "成功进入羊村，羊肉人人有份啊",
                    "小的们快快现身"
                ],
                "pop": 100,
                "info": "冰火岛原始居民，相传会使用古代黑魔法――召唤术。",
                "width": 850,
                "height": 1150,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 230000,
                    "b": 0
                },
                "name": "巫术姊妹"
            },
            "glykl": {
                "skills": [
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_C",
                        "lev": 10
                    },
                    {
                        "skid": "Burst_Z5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "这些箱子是谁乱放的？！",
                    [],
                    "我要吃羊肉串！！",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "我是这个库房的管理员",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 550000,
                    "b": 0
                },
                "name": "管理员克里"
            },
            "hfel": {
                "skills": [
                    {
                        "skid": "Blink_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": 10,
                "speed": 12,
                "speak": [
                    "我闪我闪，我闪闪闪",
                    "看我风骚的跑位~",
                    "为什么你还能打到我呢？",
                    "呃，枉费了我的闪烁。",
                    "哦耶，得手！",
                    []
                ],
                "pop": 100,
                "info": "盗亦有道青年团前任CFO兼保安，在盗墓组接受合并时被扫地出门，从此浪迹天涯。",
                "width": 800,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 10000,
                    "b": 0
                },
                "name": "红发恶狼"
            },
            "D_ylnw": {
                "charm": -15,
                "speak": [
                    "嘘，不要出声",
                    "隐身的话，你是看不到我的哦",
                    "功力还是不到家啊",
                    "这次我彻底的隐身了……",
                    "我静悄悄的潜入了……",
                    []
                ],
                "width": 850,
                "info": "与小丑王奥丁同属于一个马戏团，善于使用魔法，因为待遇不公逃离至冰火岛。",
                "height": 1100,
                "hp_factor": {
                    "c": 54,
                    "a": 450,
                    "b": 225
                },
                "name": "幽灵女巫",
                "res": "ylnw",
                "speed": 14,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Invisible_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "lrggl2": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 28,
                "speak": [
                    [],
                    "我是力量的象征",
                    "我还……扛得住！",
                    "又失败了……",
                    "吃羊肉！",
                    []
                ],
                "pop": 100,
                "info": "北方狼族首领，卡卡罗兄弟的死敌，北方狼族被灭门后逃至冰火岛过活，卧薪尝胆，伺机重振北方狼族雄威。",
                "width": 700,
                "height": 850,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 280000,
                    "b": 0
                },
                "name": "格鲁双狼组"
            },
            "smssl": {
                "skills": [
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "MassTreatment_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 24,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "受死吧！小羊们！",
                    [],
                    "中了我的诅咒你们完蛋了！",
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "我就是古埃及死神奥西里斯的化身！",
                "width": 800,
                "height": 1200,
                "hp_factor": {
                    "c": 38.8,
                    "a": 303.4,
                    "b": 99.1
                },
                "name": "沙漠死神狼"
            },
            "ybklrX": {
                "skills": [
                    {
                        "skid": "Morph_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "Sprint_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 9
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 9
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 32,
                "speak": [
                    "我的世界只有血的颜色。",
                    [
                        "小羊们拿命来吧，哈哈哈哈哈！",
                        "挣扎吧，小羊们！"
                    ],
                    "看我的九天神雷…呃，好像歪了。",
                    [
                        "我还是太年轻了吧，妈妈…",
                        "我还是太年轻了…"
                    ],
                    "羊羊可以做很多事，比如烤全羊。",
                    "高级形态，启动！"
                ],
                "pop": 100,
                "info": "拥有不同于常狼的能力，残暴而喜好侵略，在极北冰地建立了自己的统治范围，并不断向外扩张。",
                "width": 850,
                "height": 850,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 700000,
                    "b": 0
                },
                "name": "异变科里尔"
            },
            "wjxcw": {
                "skills": [
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_A",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 25,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_114^变个魔术瞧瞧",
                    "camp_wolfs_115^神出鬼没，你打不到我的！",
                    "camp_wolfs_116^疯狂就像地心引力！",
                    "camp_wolfs_117^哎呦喂，好疼！",
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_113^神秘的身世，邪恶的力量",
                "width": 850,
                "height": 1450,
                "hp_factor": {
                    "c": 29,
                    "a": 226.5,
                    "b": 74
                },
                "name": "camp_wolfs_112^玩具小丑王"
            },
            "D_nrzzm": {
                "charm": -20,
                "speak": [
                    "敢在我的地盘撒野！",
                    [
                        "羊肉是我的最爱",
                        "我可不怕电哦"
                    ],
                    "假身也骗不过你啊？",
                    "这次又悲催了",
                    "羊肉是我的最爱",
                    []
                ],
                "width": 750,
                "info": "忍狼族少主，为人狡猾，精于算计，忍者红太狼的同门师兄。",
                "height": 900,
                "hp_factor": {
                    "c": 34.8,
                    "a": 290,
                    "b": 145
                },
                "name": "男忍佐佐木",
                "res": "nrzzm",
                "speed": 25,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Divide_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_C",
                        "lev": 6
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "lrggl": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 28,
                "speak": [
                    [],
                    "我是力量的象征",
                    "我还……扛得住！",
                    "又失败了……",
                    "吃羊肉！",
                    []
                ],
                "pop": 100,
                "info": "北方狼族首领，卡卡罗兄弟的死敌，北方狼族被灭门后逃至冰火岛过活，卧薪尝胆，伺机重振北方狼族雄威。",
                "width": 700,
                "height": 850,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 280000,
                    "b": 0
                },
                "name": "格鲁双狼组"
            },
            "jiangshil": {
                "skills": [
                    {
                        "skid": "Revive_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 10,
                "speak": [
                    [],
                    [
                        "我们是不死族",
                        "世道怎么变成这样了"
                    ],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "我们是僵尸，我们会重生",
                "width": 550,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 31.2,
                    "a": 260,
                    "b": 130
                },
                "name": "僵尸狼"
            },
            "xiangpil": {
                "skills": [
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "speak": [
                    [],
                    [
                        "我可不怕电哦",
                        "我最喜欢电镶嵌塔了"
                    ],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "不受闪电攻击",
                "width": 600,
                "height": 850,
                "defense": 3,
                "hp_factor": {
                    "c": 36,
                    "a": 300,
                    "b": 150
                },
                "name": "橡皮狼"
            },
            "shamofeitianl": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 28,
                "speak": [
                    [],
                    "阳光太刺眼，幸亏有防晒霜",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 3,
                "info": "无视障碍飞行，且速度快",
                "width": 650,
                "height": 600,
                "defense": 1,
                "hp_factor": {
                    "c": 7.32,
                    "a": 61,
                    "b": 30.5
                },
                "name": "沙漠飞天狼"
            },
            "smls": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_83^放风放风，风在哪里",
                    [],
                    "camp_wolfs_84^啊，眼镜都要被打烂了",
                    "camp_wolfs_85^我…看到风了…",
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_82^放风专家，眼镜有特殊功能",
                "width": 800,
                "height": 1150,
                "hp_factor": {
                    "c": 25.9,
                    "a": 202.2,
                    "b": 66
                },
                "name": "camp_wolfs_81^守墓老四"
            },
            "kunjiongl": {
                "skills": [
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 17,
                "speak": [
                    "饿了，吃羊！",
                    "我困我我开心",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 3,
                "info": "一副困像，血厚速度慢",
                "width": 550,
                "height": 700,
                "defense": 1,
                "hp_factor": {
                    "c": 26.88,
                    "a": 224,
                    "b": 112
                },
                "name": "困囧狼"
            },
            "dqcyl": {
                "skills": [
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 2
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFire_X3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": 10,
                "speed": 14,
                "speak": [
                    "别怕，我身上不带核辐射",
                    "看我优雅的小碎步",
                    "我嘞个去，疼！",
                    "这就是，地震么",
                    "羊儿们，成为我的能量吧",
                    []
                ],
                "pop": 100,
                "info": "为人狡猾偏执，小时曾偷男生内裤而被老师严惩，从此性格大变，一心报复社会，报复世界。",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 8000,
                    "b": 0
                },
                "name": "大犬蠢仪狼"
            },
            "pkygl": {
                "skills": [
                    {
                        "skid": "Summon_Z5",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "Sprint_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "MassTreatment_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "嘿，羊儿们，身为大明星的我来喽",
                    "粉丝们，看到我不要太兴奋哦",
                    "你怎么能这样对待帅气的我？",
                    "呃，看来我是兴奋过头了，再见亲爱的...",
                    "哦耶，今晚的羊肉派对开始喽",
                    [
                        "看我用大招！",
                        "奋起吧"
                    ]
                ],
                "pop": 100,
                "info": "崇尚青春，活力的摇滚野兽派过气明星，随着名气的日渐衰弱，也不得不走上打家劫舍的日子。",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 500000,
                    "b": 0
                },
                "name": "朋克摇滚狼"
            },
            "byl2": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 7
                    },
                    {
                        "skid": "Sprint_C",
                        "lev": 3
                    },
                    {
                        "skid": "ResistVertigo_C",
                        "lev": 3
                    }
                ],
                "charm": -20,
                "speed": 26,
                "speak": [
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "搬运工发怒了可不是好惹的",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 22,
                    "a": 120,
                    "b": 75
                },
                "name": "愤怒的搬运狼"
            },
            "ns": {
                "skills": [
                    {
                        "skid": "ResistBeat_A",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 20,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "speak": [
                    "camp_wolfs_69^小的们，跟好了！",
                    [],
                    [],
                    "camp_wolfs_70^放...放开我...放开我啊！",
                    [],
                    []
                ],
                "pop": 3,
                "info": "camp_wolfs_68^今年过年不收礼，收礼要收小年兽",
                "width": 800,
                "height": 1150,
                "hp_factor": {
                    "c": 35.8,
                    "a": 280,
                    "b": 91.4
                },
                "name": "camp_wolfs_67^“年兽”"
            },
            "hushil": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 20,
                "speak": [
                    [],
                    "医者仁心，善有善报嘛",
                    [],
                    [],
                    [],
                    "给你一剂强心针"
                ],
                "pop": 6,
                "info": "美丽的天使狼，会群疗技能",
                "width": 650,
                "height": 600,
                "defense": 3,
                "hp_factor": {
                    "c": 13.92,
                    "a": 116,
                    "b": 58
                },
                "name": "护士狼"
            },
            "jslw2": {
                "skills": [
                    {
                        "skid": "Revive_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Blink_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_C",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 20,
                "speak": [
                    [],
                    [],
                    "看我的不死之躯",
                    "我还会回来的",
                    [],
                    []
                ],
                "pop": 100,
                "info": "来自于远古的神秘狼王，被一股神秘力量唤醒，拥有重生的特殊力量。",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 80000,
                    "b": 0
                },
                "name": "僵尸狼王"
            },
            "nrzzm": {
                "skills": [
                    {
                        "skid": "Divide_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_C",
                        "lev": 6
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 25,
                "speak": [
                    "敢在我的地盘撒野！",
                    [
                        "羊肉是我的最爱",
                        "我可不怕电哦"
                    ],
                    "假身也骗不过你啊？",
                    "这次又悲催了",
                    "羊肉是我的最爱",
                    []
                ],
                "pop": 100,
                "info": "忍狼族少主，为人狡猾，精于算计，忍者红太狼的同门师兄。",
                "width": 750,
                "height": 900,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 350000,
                    "b": 0
                },
                "name": "男忍佐佐木"
            },
            "gthy": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 7
                    },
                    {
                        "skid": "Sprint_C",
                        "lev": 3
                    },
                    {
                        "skid": "Invisible_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistFire_B",
                        "lev": 6
                    },
                    {
                        "skid": "WeakPoison_X4",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 28,
                "speak": [
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "一手工帽，一手扇子一副工头的样子",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 500000,
                    "b": 0
                },
                "name": "工头霍依"
            },
            "bfsl": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "Cloud_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 17,
                "speak": [
                    [],
                    "尝尝化学瓶的味道，很甜哦～",
                    "小狼们来个瓶营养液！！",
                    "哎哟，推进器没电了。。",
                    [],
                    []
                ],
                "pop": 100,
                "info": "我就是狼群中的战斗机，战斗机中的航空母舰",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 500000,
                    "b": 0
                },
                "name": "暴风沙罗"
            },
            "lysme": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": 10,
                "speed": 55,
                "speak": [
                    [],
                    "看我的脚力怎样？",
                    "呃，好痛啊",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "狩猎高手，一次拉弓射箭误射中了一位特技演员，躲至荒漠，从此过上了猎杀羊群的生活。",
                "width": 850,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 120000,
                    "b": 0
                },
                "name": "猎羊手穆恩"
            },
            "feitianl": {
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 17,
                "speak": [
                    "不走寻常路，飞行才给力！",
                    [],
                    "那么高摔下来会很疼哦",
                    [],
                    "成功飞进羊村，嘿嘿！！",
                    []
                ],
                "pop": 1,
                "info": "无视障碍飞行",
                "width": 650,
                "height": 600,
                "defense": 1,
                "hp_factor": {
                    "c": 6.36,
                    "a": 53,
                    "b": 26.5
                },
                "name": "飞天狼"
            },
            "jxl": {
                "skills": [
                    {
                        "skid": "Sprint_C",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFrost_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "speak": [
                    "嘿嘿，小羊羔我来了",
                    "看我的造型帅吧？！",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "由疯狂工程师研制出的新一代恶狼，更加抗打～",
                "width": 600,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 70,
                    "a": 280,
                    "b": 140
                },
                "name": "机械狼"
            },
            "daomu3": {
                "skills": [
                    {
                        "skid": "Sprint_Z5",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 20,
                "speak": [
                    "大哥二哥你们在哪？",
                    [
                        "神马暴走狼，论暴走我才是老大",
                        "这是神马鬼地方？"
                    ],
                    "哎呀哎呀，我是打酱油路过的！",
                    "呃，果然……盗墓这行不太安全",
                    "今儿个不错，又有新收获了",
                    []
                ],
                "pop": 99,
                "info": "本是个善良孩子，曾被盗墓老二劫持，被它凄惨的过往所感染，打动，故而加入盗亦有道青年团。",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "盗墓老三"
            },
            "D_hfel": {
                "charm": 10,
                "speak": [
                    "我闪我闪，我闪闪闪",
                    "看我风骚的跑位~",
                    "为什么你还能打到我呢？",
                    "呃，枉费了我的闪烁。",
                    "哦耶，得手！",
                    []
                ],
                "width": 800,
                "info": "盗亦有道青年团前任CFO兼保安，在盗墓组接受合并时被扫地出门，从此浪迹天涯。",
                "height": 1000,
                "hp_factor": {
                    "c": 91.2,
                    "a": 760,
                    "b": 380
                },
                "name": "红发恶狼",
                "res": "hfel",
                "speed": 12,
                "pop": 100,
                "skills": [
                    {
                        "skid": "Blink_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "jslw": {
                "skills": [
                    {
                        "skid": "Revive_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Blink_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_C",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 20,
                "speak": [
                    [],
                    [],
                    "看我的不死之躯",
                    "我还会回来的",
                    [],
                    []
                ],
                "pop": 100,
                "info": "来自于远古的神秘狼王，被一股神秘力量唤醒，拥有重生的特殊力量。",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 80000,
                    "b": 0
                },
                "name": "僵尸狼王"
            },
            "tanhuangl": {
                "skills": [
                    {
                        "skid": "Blink_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakBeat_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "speak": [
                    "小样别跑！",
                    "疯狂工程师不会放过你们的！",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 5,
                "info": "哈哈，我蹦我蹦",
                "width": 550,
                "height": 600,
                "defense": 3,
                "hp_factor": {
                    "c": 50,
                    "a": 200,
                    "b": 100
                },
                "name": "弹簧狼"
            },
            "yll": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "MassTreatment_C",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 26,
                "explev": {
                    "c": -167.63,
                    "a": -500,
                    "d": 25.74,
                    "b": 600
                },
                "speak": [
                    "我身经百战，不畏强敌~",
                    [],
                    "快使用群疗，嘿嘿哈嘿~",
                    [],
                    [],
                    "我不会倒下的，直到我膝盖中了一箭。。。"
                ],
                "pop": 5,
                "info": "什么刀枪棍棒我都耍得有木有样~",
                "width": 800,
                "height": 1200,
                "hp_factor": {
                    "c": 26.5,
                    "a": 207.4,
                    "b": 67.7
                },
                "name": "杨六狼"
            },
            "D_lysme": {
                "charm": 10,
                "speak": [
                    [],
                    "看我的脚力怎样？",
                    "呃，好痛啊",
                    [],
                    [],
                    []
                ],
                "width": 850,
                "info": "狩猎高手，一次拉弓射箭误射中了一位特技演员，躲至荒漠，从此过上了猎杀羊群的生活。",
                "height": 950,
                "hp_factor": {
                    "c": 31.8,
                    "a": 265,
                    "b": 132.5
                },
                "name": "猎羊手穆恩",
                "res": "lysme",
                "speed": 55,
                "pop": 100,
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "zjylc": {
                "skills": [
                    {
                        "skid": "Reborn_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "Sprint_B",
                        "lev": 7
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 7
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "雄炯炯气昂昂冲进羊村！",
                    "安全运送狼群到达羊村，妥妥的～",
                    "让子弹来得更猛烈点吧！！",
                    [],
                    [],
                    []
                ],
                "pop": 99,
                "info": "载着恶狼冲向羊村的装甲坦克",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 125,
                    "a": 500,
                    "b": 250
                },
                "name": "装甲运狼车"
            },
            "qzxbl": {
                "skills": [
                    {
                        "skid": "Sprint_C",
                        "lev": 10
                    },
                    {
                        "skid": "Invisible_C",
                        "lev": 10
                    }
                ],
                "charm": -15,
                "speed": 30,
                "speak": [
                    "去牵只小羊来~",
                    [],
                    "抓羊这种事情对我来说就是手到擒来~",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "我不是贼，我只是顺手牵羊的高手~",
                "width": 850,
                "height": 1200,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 700000,
                    "b": 0
                },
                "name": "窃贼小布朗"
            },
            "sujiangl": {
                "skills": [
                    {
                        "skid": "Airborne_Z1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 17,
                "speak": [
                    "嘿嘿，钻个空子",
                    "奇袭，怕了吧",
                    "火力好强...",
                    "出其不意，羊肉不剩",
                    [],
                    []
                ],
                "pop": 6,
                "info": "危险从空而至",
                "width": 550,
                "height": 700,
                "defense": 3,
                "hp_factor": {
                    "c": 27.84,
                    "a": 232,
                    "b": 116
                },
                "name": "速降狼"
            },
            "fdl": {
                "skills": [
                    {
                        "skid": "Cloud_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_A",
                        "lev": 9
                    }
                ],
                "charm": -20,
                "speed": 26,
                "speak": [
                    "闻到毒气的羊都跑不掉！",
                    "看看",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "带着防毒面具，手中持着烧瓶，周身毒气缭绕",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 22,
                    "a": 120,
                    "b": 75
                },
                "name": "防毒狼"
            },
            "daomu5": {
                "skills": [
                    {
                        "skid": "Summon_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "Reborn_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 10
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFire_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 8,
                "speak": [
                    "破坏森林可不好",
                    "破坏森林，可不好",
                    "破坏森林，可，不，好",
                    "我要代表森林，消灭羊群！",
                    [],
                    []
                ],
                "pop": 100,
                "info": "绿色植物的极端捍卫者。为了防止绿色被破坏，为了维护环境的和平，特洛伊木狼说：只得吃肉了",
                "width": 750,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 3800000,
                    "b": 0
                },
                "name": "特洛伊木狼"
            },
            "byl1": {
                "skills": [
                    {
                        "skid": "ResistFrost_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "Morph_Z5",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 20,
                "speak": [
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "抱着木箱戴着鸭舌帽的搬运工",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 50.25,
                    "a": 201,
                    "b": 100.5
                },
                "name": "搬运狼"
            },
            "daomu4": {
                "skills": [
                    {
                        "skid": "Divide_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Isolation_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_C",
                        "lev": 6
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    [],
                    [
                        "我来如影，去如风",
                        "分身是我的最爱"
                    ],
                    "我去，假身不给力啊",
                    "呃，下辈子再也不分身了",
                    "小羊，我会对你很好的哦~",
                    []
                ],
                "pop": 99,
                "info": "富二代，头脑单纯，在海外学成归来后无所事事，无聊下出资成为盗亦有道青年团的独家赞助商。",
                "width": 750,
                "height": 1050,
                "defense": 5,
                "hp_factor": {
                    "c": 51.6,
                    "a": 430,
                    "b": 215
                },
                "name": "忍者红太狼"
            },
            "bld": {
                "skills": [
                    {
                        "skid": "Burst_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 26,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    [],
                    "camp_wolfs_73^炸的就是嗷吧狼家的电饭锅！",
                    [],
                    "camp_wolfs_74^我...安心的去了...",
                    "camp_wolfs_75^不要拦我！",
                    "camp_wolfs_76^爆裂吧！"
                ],
                "pop": 4,
                "info": "camp_wolfs_72^虽然他的“偶像”已经去了，但这并不妨碍他崇拜偶像的心",
                "width": 850,
                "height": 1500,
                "hp_factor": {
                    "c": 29.9,
                    "a": 233.4,
                    "b": 76.2
                },
                "name": "camp_wolfs_71^笨・狼灯"
            },
            "ybklr": {
                "skills": [
                    {
                        "skid": "Morph_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "Summon_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 10
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 25,
                "speak": [
                    "我的世界只有血的颜色。",
                    [
                        "小羊们拿命来吧，哈哈哈哈哈！",
                        "挣扎吧，小羊们！"
                    ],
                    "看我的九天神雷…呃，好像歪了。",
                    [
                        "我还是太年轻了吧，妈妈…",
                        "我还是太年轻了…"
                    ],
                    "羊羊可以做很多事，比如烤全羊。",
                    "高级形态，启动！"
                ],
                "pop": 100,
                "info": "拥有不同于常狼的能力，残暴而喜好侵略，在极北冰地建立了自己的统治范围，并不断向外扩张。",
                "width": 750,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 700000,
                    "b": 0
                },
                "name": "异变科里尔"
            },
            "baozul": {
                "skills": [
                    {
                        "skid": "WeakFrost_X3",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 24,
                "speak": [
                    "小的们，给老娘冲啊",
                    "吸烟喝酒烫头，我的最爱",
                    "咳咳，老娘要发力了",
                    "呃，不懂得尊重妇女么",
                    [],
                    []
                ],
                "pop": 2,
                "info": "肥硕的地主婆，不是很好对付",
                "width": 600,
                "height": 750,
                "defense": 1,
                "hp_factor": {
                    "c": 15,
                    "a": 125,
                    "b": 62.5
                },
                "name": "包租狼"
            },
            "fcgcs": {
                "skills": [
                    {
                        "skid": "Summon_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_B",
                        "lev": 4
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 10
                    }
                ],
                "charm": -15,
                "speed": 20,
                "speak": [
                    "什么刀枪棍棒我都耍得有模有样！！",
                    [],
                    "机械赐予我力量吧～",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "疯疯癫癫的科学怪狼，一生追求机械的力量和鲜美的羊肉",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 300000,
                    "b": 0
                },
                "name": "疯狂工程师"
            },
            "jkxd2": {
                "skills": [
                    {
                        "skid": "ResistBeat_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "WeakFire_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 18,
                "speak": [
                    "兄弟齐心，其利断金",
                    [],
                    [],
                    [
                        "我会回来滴~~",
                        "为什么受伤的总是我……"
                    ],
                    [],
                    []
                ],
                "pop": 100,
                "info": "梦想远洋出海当水手的兄弟俩，不料天生怕水，无奈之下弃明投暗，过上了山贼的日子。",
                "width": 900,
                "height": 900,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 20000,
                    "b": 0
                },
                "name": "杰克兄弟"
            },
            "xxlw": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 16,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_37^在下就是狼…狼中…之…之王",
                    "camp_wolfs_38^不…不要试图阻…阻拦我",
                    [],
                    "camp_wolfs_39^唉，又…又失算了",
                    [],
                    []
                ],
                "pop": 2,
                "info": "camp_wolfs_36^狼中之王，天资较其他狼都优秀很多",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 41.1,
                    "a": 320.9,
                    "b": 104.8
                },
                "name": "camp_wolfs_35^小小狼王"
            },
            "jkxd": {
                "skills": [
                    {
                        "skid": "ResistBeat_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "WeakFire_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFrost_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": -50,
                "speed": 18,
                "speak": [
                    "兄弟齐心，其利断金",
                    [],
                    [],
                    [
                        "我会回来滴~~",
                        "为什么受伤的总是我……"
                    ],
                    [],
                    []
                ],
                "pop": 100,
                "info": "梦想远洋出海当水手的兄弟俩，不料天生怕水，无奈之下弃明投暗，过上了山贼的日子。",
                "width": 900,
                "height": 900,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 20000,
                    "b": 0
                },
                "name": "杰克兄弟"
            },
            "mhxjl": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z3",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    }
                ],
                "charm": -10,
                "speed": 20,
                "speak": [
                    "你来抓我呀~嘻嘻~",
                    [],
                    "哟，打疼我了！",
                    [],
                    [],
                    []
                ],
                "pop": 99,
                "info": "我是梦幻王国的守卫者",
                "width": 800,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 30,
                    "a": 250,
                    "b": 125
                },
                "name": "梦幻小精灵"
            },
            "huangjinl": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 1
                    },
                    {
                        "skid": "ResistPoison_A",
                        "lev": 1
                    },
                    {
                        "skid": "ResistLight_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 15,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_154^懂什么叫固若金汤么，看我！",
                    "camp_wolfs_155^是金子在哪都会发光的",
                    [],
                    "camp_wolfs_156^哎哟！金子掉了！",
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_153^百炼成金",
                "width": 800,
                "height": 1150,
                "hp_factor": {
                    "c": 42.2,
                    "a": 329.9,
                    "b": 107.7
                },
                "name": "camp_wolfs_152^欧若狼"
            },
            "zibaol": {
                "skills": [
                    {
                        "skid": "Burst_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X6",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 20,
                "speak": [
                    [],
                    "我不是自杀式袭击者",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "我们是自杀式袭击者",
                "width": 550,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 18.6,
                    "a": 155,
                    "b": 77.5
                },
                "name": "自爆狼"
            },
            "hyy": {
                "skills": [
                    {
                        "skid": "ResistFire_A",
                        "lev": 10
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 8
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -2,
                "speed": 22,
                "speak": [
                    "烈焰中造就了牛掰的我！",
                    "数数我名字有几个火，就知道我有多厉害！",
                    "这挠痒痒也太过头了吧！",
                    [
                        "冷...",
                        "好冷啊... "
                    ],
                    "给我暖暖的小羊！～",
                    []
                ],
                "pop": 100,
                "info": "曾在地狱中打工扫厕所，因打碎花瓶被老板丢进岩浆里，获得顽强的生命力。",
                "width": 850,
                "height": 1000,
                "defense": 1,
                "hp_factor": {
                    "c": 0,
                    "a": 8300000,
                    "b": 0
                },
                "name": "火・炎・焱"
            },
            "sdal": {
                "skills": [
                    {
                        "skid": "ResistFrost_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 22,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_47^圣诞快乐~",
                    "camp_wolfs_48^元旦也快乐哟~",
                    [],
                    "camp_wolfs_49^大过节的，不要这么过分TT",
                    "camp_wolfs_50^PIU~我就进来了",
                    "camp_wolfs_51^嘛咪嘛咪轰~"
                ],
                "pop": 2,
                "info": "camp_wolfs_46^为了迎合气氛，不知道从哪里偷来了圣诞帽扣在头上",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 29.9,
                    "a": 233.4,
                    "b": 76.2
                },
                "name": "camp_wolfs_45^圣诞灰狼"
            },
            "sdsl": {
                "skills": [
                    {
                        "skid": "ResistPoison_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 18,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_42^啦啦啦，我是圣诞树",
                    "camp_wolfs_43^要礼物的快来啦",
                    [],
                    [],
                    "camp_wolfs_44^小羊儿乖乖，把门儿开开~",
                    []
                ],
                "pop": 2,
                "info": "camp_wolfs_41^藏身在圣诞树里，等着引诱来拿礼物的小羊上钩",
                "width": 750,
                "height": 950,
                "hp_factor": {
                    "c": 36.5,
                    "a": 285.2,
                    "b": 93.1
                },
                "name": "camp_wolfs_40^圣诞树狼"
            },
            "fbl": {
                "skills": [
                    {
                        "skid": "ResistBeat_A",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 25,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_144^来打我呀，不怕你哦",
                    "camp_wolfs_145^我要去暴揍小羊~",
                    "camp_wolfs_146^这防爆服不管事儿啊！好疼！！",
                    [],
                    [],
                    []
                ],
                "pop": 4,
                "info": "camp_wolfs_143^防爆狼顾名思义就是很抗打的！",
                "width": 600,
                "height": 750,
                "hp_factor": {
                    "c": 31.1,
                    "a": 242.7,
                    "b": 79.3
                },
                "name": "camp_wolfs_142^防爆狼"
            },
            "hxjjlfr": {
                "skills": [
                    {
                        "skid": "Invisible_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "Revive_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 10
                    },
                    {
                        "skid": "WeakPoison_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 15,
                "speak": [
                    "抓几只小羊回去做实验，呀哈哈",
                    "快使用",
                    [],
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "手持实验药瓶的贵妇（居里夫人？）",
                "width": 800,
                "height": 950,
                "defense": 6,
                "hp_factor": {
                    "c": 0,
                    "a": 450000,
                    "b": 0
                },
                "name": "化学家加里夫人"
            },
            "H_bld": {
                "charm": 10,
                "speak": [
                    [],
                    "炸的就是嗷吧狼家的电饭锅！",
                    [],
                    "我...安心的去了...",
                    "不要拦我！",
                    "爆裂吧！"
                ],
                "width": 850,
                "info": "虽然他的“偶像”已经去了，但这并不妨碍他崇拜偶像的心",
                "height": 1500,
                "hp_factor": {
                    "c": 18,
                    "a": 150,
                    "b": 75
                },
                "name": "笨・狼灯",
                "res": "bld",
                "speed": 26,
                "pop": 99,
                "skills": [
                    {
                        "skid": "Burst_B",
                        "lev": 10
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 10
                    },
                    {
                        "skid": "ResistFrost_A",
                        "lev": 10
                    }
                ],
                "defense": 5
            },
            "ylnw": {
                "skills": [
                    {
                        "skid": "Invisible_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 14,
                "speak": [
                    "嘘，不要出声",
                    "隐身的话，你是看不到我的哦",
                    "功力还是不到家啊",
                    "这次我彻底的隐身了……",
                    "我静悄悄的潜入了……",
                    []
                ],
                "pop": 100,
                "info": "与小丑王奥丁同属于一个马戏团，善于使用魔法，因为待遇不公逃离至冰火岛。",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 300000,
                    "b": 0
                },
                "name": "幽灵女巫"
            },
            "daomu7": {
                "skills": [
                    {
                        "skid": "MassTreatment_Z7",
                        "lev": 1
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFire_A",
                        "lev": 5
                    },
                    {
                        "skid": "WeakFrost_X4",
                        "lev": 1
                    }
                ],
                "charm": -5,
                "speed": 15,
                "speak": [
                    "小狼们，你们挑好羊了吗",
                    [],
                    [],
                    "呃，我的使命啊…",
                    "小羊，让我射你一箭吧！",
                    "加血喽~"
                ],
                "pop": 99,
                "info": "乱射红心箭，乱扯姻缘线，造就了无数对相爱的狼与羊",
                "width": 900,
                "height": 750,
                "defense": 5,
                "hp_factor": {
                    "c": 24,
                    "a": 200,
                    "b": 100
                },
                "name": "冒牌丘比特"
            },
            "hlbb": {
                "skills": [
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_30^我就是那八九点的太阳啦",
                    "camp_wolfs_31^茁壮成长什么的~",
                    "camp_wolfs_32^喂…爱惜点儿童…",
                    "camp_wolfs_33^555，你们欺负我…",
                    "camp_wolfs_34^我先开动啦~",
                    []
                ],
                "pop": 2,
                "info": "camp_wolfs_29^小可爱一只，小小年纪就被派去抓羊",
                "width": 450,
                "height": 550,
                "hp_factor": {
                    "c": 21.9,
                    "a": 171.1,
                    "b": 55.9
                },
                "name": "camp_wolfs_28^灰狼宝宝"
            },
            "baozoul": {
                "skills": [
                    {
                        "skid": "Sprint_Z2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakBeat_X4",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 31,
                "speak": [
                    "暴走族入场，各位让道！",
                    "带着墨镜就是有范儿",
                    [],
                    "速度再快也抚平不了羊儿给我的创伤",
                    "嘿，羊儿们 给暴走哥哥笑一个",
                    "嘿，看我的滑板冲刺吧！！"
                ],
                "pop": 2,
                "info": "速度很快，红血时会暴走",
                "width": 550,
                "height": 700,
                "defense": 2,
                "hp_factor": {
                    "c": 10.8,
                    "a": 90,
                    "b": 45
                },
                "name": "暴走狼"
            },
            "D_dqcyl": {
                "charm": 10,
                "speak": [
                    "别怕，我身上不带核辐射",
                    "看我优雅的小碎步",
                    "我嘞个去，疼！",
                    "这就是，地震么",
                    "羊儿们，成为我的能量吧",
                    []
                ],
                "width": 800,
                "info": "为人狡猾偏执，小时曾偷男生内裤而被老师严惩，从此性格大变，一心报复社会，报复世界。",
                "height": 950,
                "hp_factor": {
                    "c": 124.8,
                    "a": 1040,
                    "b": 520
                },
                "name": "大犬蠢仪狼",
                "res": "dqcyl",
                "speed": 14,
                "pop": 100,
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 2
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 6
                    },
                    {
                        "skid": "WeakFire_X3",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "defense": 5
            },
            "fzswr": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": 10,
                "speed": 15,
                "speak": [
                    [],
                    "现在都什么年代了，还步行~",
                    "我飞我飞~",
                    [],
                    [],
                    []
                ],
                "pop": 100,
                "info": "曾为马戏团特技演员，在一次表演中被弄伤眼睛，故终日带眼罩不敢以真面目示人。",
                "width": 900,
                "height": 600,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 30000,
                    "b": 0
                },
                "name": "飞贼沙维尔"
            },
            "xcwad": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 8
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X7",
                        "lev": 1
                    },
                    {
                        "skid": "WeakVertigo_X4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    }
                ],
                "charm": 10,
                "speed": 30,
                "speak": [
                    "呦喝，轮到我上场喽",
                    "别小瞧我哦",
                    "哎呀哎呀，偷羊不成蚀把米",
                    "不要啊，我的演出还没结束呢",
                    "哦耶，烤羊表演现在开始",
                    []
                ],
                "pop": 100,
                "info": "表面是开心的小丑，真实身份却是狼王卡卡罗兄弟的贴身侍卫，善于笑里藏刀，杀羊于无形。",
                "width": 850,
                "height": 1600,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 360000,
                    "b": 0
                },
                "name": "小丑王奥丁"
            },
            "hlbb1": {
                "skills": [
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "WeakPoison_X1",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 30,
                "explev": {
                    "c": -131.71,
                    "a": -392.86,
                    "d": 20.23,
                    "b": 471.42
                },
                "speak": [
                    "camp_wolfs_128^我就是那八九点的太阳啦",
                    "camp_wolfs_129^茁壮成长什么的~",
                    "camp_wolfs_130^喂…爱惜点儿童…",
                    "camp_wolfs_131^555，你们欺负我…",
                    "camp_wolfs_132^我先开动啦~",
                    "camp_wolfs_133^我先开动啦~"
                ],
                "pop": 2,
                "info": "camp_wolfs_127^小可爱一只，小小年纪就被派去抓羊",
                "width": 450,
                "height": 550,
                "hp_factor": {
                    "c": 21.9,
                    "a": 171.1,
                    "b": 55.9
                },
                "name": "camp_wolfs_126^限定灰狼宝宝（黄）"
            },
            "ldmfg": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 1
                    },
                    {
                        "skid": "ResistVertigo_A",
                        "lev": 1
                    }
                ],
                "charm": -20,
                "speed": 14,
                "explev": {
                    "c": -155.66,
                    "a": -464.29,
                    "d": 23.9,
                    "b": 557.14
                },
                "speak": [
                    "camp_wolfs_95^我爱劳动身体好好～嗷嗷嗷嗷",
                    "camp_wolfs_96^带上工具蹦蹦跳跳～嗷嗷嗷嗷",
                    [],
                    "camp_wolfs_97^劳～动～节～要祷告！",
                    [],
                    "camp_wolfs_98^噜啦噜啦咧！"
                ],
                "pop": 4,
                "info": "camp_wolfs_94^指挥弟弟干活，大哥很光荣！一级狼劳模～",
                "width": 850,
                "height": 1450,
                "hp_factor": {
                    "c": 55.5,
                    "a": 433.4,
                    "b": 141.5
                },
                "name": "camp_wolfs_93^劳动模范哥"
            },
            "daomu5X": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 10
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFire_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 6,
                "speak": [
                    "破坏森林可不好",
                    "破坏森林，可不好",
                    "破坏森林，可，不，好",
                    "我要代表森林，消灭羊群！",
                    [],
                    []
                ],
                "pop": 100,
                "info": "绿色植物的极端捍卫者。为了防止绿色被破坏，为了维护环境的和平，特洛伊木狼说：只得吃肉了",
                "width": 850,
                "height": 950,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 3800000,
                    "b": 0
                },
                "name": "特洛伊木狼"
            },
            "lyql": {
                "charm": -20,
                "speak": [
                    "camp_wolfs_101^不要抢我的鲤鱼旗",
                    "camp_wolfs_102^骑着鲤鱼飞呀飞",
                    "camp_wolfs_103^风向是不会变的",
                    "camp_wolfs_104^哎呀！要掉下去啦！",
                    "camp_wolfs_105^这样保持平衡最重要！",
                    []
                ],
                "res": "daomu8",
                "info": "camp_wolfs_100^骑着鲤鱼旗飞是一种境界",
                "height": 600,
                "hp_factor": {
                    "c": 30.5,
                    "a": 238.1,
                    "b": 77.8
                },
                "name": "camp_wolfs_99^鲤鱼旗狼",
                "width": 650,
                "speed": 14,
                "explev": {
                    "c": -143.69,
                    "a": -428.58,
                    "d": 22.06,
                    "b": 514.28
                },
                "pop": 3,
                "skills": [
                    {
                        "skid": "Fly_Z6",
                        "lev": 1
                    }
                ]
            },
            "H_ns": {
                "charm": 10,
                "speak": [
                    "小的们，跟好了！",
                    [],
                    [],
                    "放...放开我...放开我啊！",
                    [],
                    []
                ],
                "width": 800,
                "info": "今年过年不收礼，收礼要收小年兽",
                "height": 1150,
                "hp_factor": {
                    "c": 24,
                    "a": 200,
                    "b": 100
                },
                "name": "“年兽”",
                "res": "ns",
                "speed": 20,
                "pop": 99,
                "skills": [
                    {
                        "skid": "ResistBeat_A",
                        "lev": 10
                    },
                    {
                        "skid": "ResistPoison_B",
                        "lev": 10
                    }
                ],
                "defense": 5
            },
            "wushil": {
                "skills": [
                    {
                        "skid": "Invisible_Z4",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X1",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 17,
                "speak": [
                    "我悄悄的来",
                    "隐身好办事啊 哈哈",
                    "@#!&*%^@#!##",
                    [],
                    [],
                    []
                ],
                "pop": 6,
                "info": "会隐身",
                "width": 600,
                "height": 800,
                "defense": 3,
                "hp_factor": {
                    "c": 27.6,
                    "a": 230,
                    "b": 115
                },
                "name": "巫师狼"
            },
            "xiaolangwangl": {
                "skills": [
                    {
                        "skid": "ResistFrost_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakFire_X2",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 15,
                "speak": [
                    [],
                    "我是狼中之王",
                    "没有什么能够阻挡我!",
                    "今儿个又失算了……",
                    [],
                    []
                ],
                "pop": 10,
                "info": "皮糙肉厚，喜寒怕火",
                "width": 600,
                "height": 750,
                "defense": 3,
                "hp_factor": {
                    "c": 60,
                    "a": 500,
                    "b": 250
                },
                "name": "小狼王"
            },
            "daomu6X": {
                "skills": [
                    {
                        "skid": "Sprint_Z1",
                        "lev": 1
                    },
                    {
                        "skid": "ResistFrost_C",
                        "lev": 5
                    },
                    {
                        "skid": "ResistBeat_C",
                        "lev": 7
                    },
                    {
                        "skid": "ResistVertigo_B",
                        "lev": 8
                    },
                    {
                        "skid": "WeakCrit_X2",
                        "lev": 1
                    },
                    {
                        "skid": "WeakFire_X5",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 18,
                "speak": [
                    "对付我，你还差点",
                    "喷火器要没油了？",
                    "桀桀，准备降落",
                    [],
                    [],
                    []
                ],
                "pop": 99,
                "info": "会飞并不可怕，飞得高还摔不死的家伙最可怕",
                "width": 800,
                "height": 1000,
                "defense": 5,
                "hp_factor": {
                    "c": 108,
                    "a": 900,
                    "b": 450
                },
                "name": "天空萝莉"
            },
            "zbjkX": {
                "skills": [
                    {
                        "skid": "ResistFrost_C",
                        "lev": 10
                    },
                    {
                        "skid": "ResistBeat_B",
                        "lev": 10
                    },
                    {
                        "skid": "WeakFire_X8",
                        "lev": 1
                    }
                ],
                "charm": -15,
                "speed": 6,
                "speak": [
                    "我，收集财宝，用了1万年～现在……没啦！",
                    "你在你们又来打我！！！你们这是自寻死路～",
                    "信不信我还有下一次变身！",
                    "现在的羊啊，都不单纯了……",
                    [],
                    []
                ],
                "pop": 100,
                "info": "身为海盗但不习水性，爱财宝胜过吃小羊，十足的吝啬鬼，为防止自己财宝被偷，经常睡在宝箱里。",
                "width": 850,
                "height": 1100,
                "defense": 5,
                "hp_factor": {
                    "c": 0,
                    "a": 3800000,
                    "b": 0
                },
                "name": "珍宝杰克"
            }
        },
        "skill_package": {
            "test04": {
                "skills": [
                    "chongsheng01",
                    "kongjiang01",
                    "chaofeng01",
                    "bianshen01"
                ]
            },
            "ScaAP1": {
                "skills": [
                    "ScaAP01",
                    "GuidedBul02",
                    "CR03"
                ]
            },
            "bossFXKX": {
                "skills": [
                    "bossKX2",
                    "feixing"
                ]
            },
            "zibaoboss": {
                "skills": [
                    "zibao02"
                ]
            },
            "hudun1": {
                "skills": [
                    "hudun01"
                ]
            },
            "BC_B3": {
                "skills": [
                    "BCB",
                    "Bul211"
                ]
            },
            "baozouboss": {
                "skills": [
                    "run02"
                ]
            },
            "ChangeRange1": {
                "skills": [
                    "ChangeRange01"
                ]
            },
            "Vertigo1": {
                "skills": [
                    "Vertigo01",
                    "Bul025"
                ]
            },
            "ChangeRange3": {
                "skills": [
                    "ChangeRange02",
                    "Bul026",
                    "AoeAP04"
                ]
            },
            "hudunboss": {
                "skills": [
                    "hudun02",
                    "chaofeng01"
                ]
            },
            "Crit1": {
                "skills": [
                    "Crit01",
                    "Bul015"
                ]
            },
            "Vertigo2": {
                "skills": [
                    "Vertigo01",
                    "Bul215"
                ]
            },
            "Poison13": {
                "skills": [
                    "Poison01",
                    "Bul213"
                ]
            },
            "bossKX": {
                "skills": [
                    "bossKX"
                ]
            },
            "shanshuo": {
                "skills": [
                    "shanshuo01"
                ]
            },
            "Poison12": {
                "skills": [
                    "Poison02",
                    "Bul023"
                ]
            },
            "BC_C1": {
                "skills": [
                    "BCC",
                    "Bul012"
                ]
            },
            "zhaohuan": {
                "skills": [
                    "zhaohuan01"
                ]
            },
            "BC_B2": {
                "skills": [
                    "BCB",
                    "Bul021"
                ]
            },
            "pahuo": {
                "skills": [
                    "kangxing02"
                ]
            },
            "Poison11": {
                "skills": [
                    "Poison01",
                    "Bul013"
                ]
            },
            "BC_C2": {
                "skills": [
                    "BCC",
                    "Bul022"
                ]
            },
            "BC_B1": {
                "skills": [
                    "BCB",
                    "Bul011"
                ]
            },
            "zhiliaoboss": {
                "skills": [
                    "qunliao03",
                    "shanshuo04"
                ]
            },
            "wuyun": {
                "skills": [
                    "wuyun01"
                ]
            },
            "All_Dam1": {
                "skills": [
                    "ALLAP01",
                    "Quanbian",
                    "Bul010"
                ]
            },
            "BC_C3": {
                "skills": [
                    "BCC",
                    "Bul212"
                ]
            },
            "Intimidate1": {
                "skills": [
                    "Intimidate01"
                ]
            },
            "bawangboss1": {
                "skills": [
                    "zhaohuan04",
                    "bossKX3",
                    "wuyun03",
                    "run04"
                ]
            },
            "BouAP1": {
                "skills": [
                    "BouAP01",
                    "Bul100",
                    "Tanbian"
                ]
            },
            "chongsheng1": {
                "skills": [
                    "chongsheng01"
                ]
            },
            "Beat1": {
                "skills": [
                    "Beat01",
                    "Bul024"
                ]
            },
            "chongshengboss": {
                "skills": [
                    "chongsheng02",
                    "shanshuo04"
                ]
            },
            "qunliaoboss": {
                "skills": [
                    "qunliao02",
                    "feixing"
                ]
            },
            "yinshenboss1": {
                "skills": [
                    "yinshen02",
                    "kangxing07"
                ]
            },
            "huokang": {
                "skills": [
                    "kangxing06"
                ]
            },
            "fenshenboss": {
                "skills": [
                    "fenshenboss",
                    "jueyuan",
                    "kangxing05"
                ]
            },
            "jueyuan": {
                "skills": [
                    "jueyuan"
                ]
            },
            "kangbh": {
                "skills": [
                    "kangxing03"
                ]
            },
            "baozou": {
                "skills": [
                    "run01"
                ]
            },
            "ChangeRange2": {
                "skills": [
                    "ChangeRange01",
                    "Bul100"
                ]
            },
            "bossKX1": {
                "skills": [
                    "bossKX1"
                ]
            },
            "BC_B0": {
                "skills": [
                    "BCB",
                    "Bul040",
                    "Huobian"
                ]
            },
            "bianshenboss03": {
                "skills": [
                    "bossKXyb02",
                    "wuyun03"
                ]
            },
            "bossKX3": {
                "skills": [
                    "bossKX3"
                ]
            },
            "zhaohuan1": {
                "skills": [
                    "zhaohuan03"
                ]
            },
            "Beat2": {
                "skills": [
                    "Beat01",
                    "Bul214"
                ]
            },
            "wuyunboss": {
                "skills": [
                    "wuyun02",
                    "run01"
                ]
            },
            "bossKX2": {
                "skills": [
                    "bossKX2"
                ]
            },
            "ChangeRange5": {
                "skills": [
                    "ChangeRange02",
                    "Bul026",
                    "AoeAP06"
                ]
            },
            "AoeAP1": {
                "skills": [
                    "AoeAP01"
                ]
            },
            "bianshenboss02": {
                "skills": [
                    "bianshen02",
                    "bossKXyb01",
                    "run05"
                ]
            },
            "BC_C0": {
                "skills": [
                    "BCC",
                    "Bul050",
                    "Bingbian"
                ]
            },
            "ChangeRange4": {
                "skills": [
                    "ChangeRange02",
                    "Bul026",
                    "AoeAP05"
                ]
            },
            "AoeAP2": {
                "skills": [
                    "AoeAP03",
                    "AttackAir0"
                ]
            },
            "zhaohuanboss": {
                "skills": [
                    "zhaohuan02"
                ]
            },
            "ChangeRange6": {
                "skills": [
                    "ChangeRange02",
                    "Bul026",
                    "AoeAP07"
                ]
            },
            "ChangeRange7": {
                "skills": [
                    "ChangeRange02",
                    "Bul026",
                    "AoeAP08"
                ]
            },
            "yingfenshen": {
                "skills": [
                    "fenshen",
                    "jueyuan",
                    "kangxing04"
                ]
            },
            "test03": {
                "skills": [
                    "zhaohuan01",
                    "wuyun01",
                    "qunliao01"
                ]
            },
            "test01": {
                "skills": "zhuansheng01"
            },
            "test02": {
                "skills": "chaofeng01"
            },
            "Sil1": {
                "skills": [
                    "Silence01"
                ]
            },
            "pahuo2": {
                "skills": [
                    "kangxing02"
                ]
            },
            "yinshen": {
                "skills": [
                    "yinshen01",
                    "kangxing07"
                ]
            },
            "shanshuoboss2": {
                "skills": [
                    "shanshuo03",
                    "kangxing07"
                ]
            },
            "qunliao": {
                "skills": [
                    "qunliao01",
                    "feixing"
                ]
            },
            "feixing": {
                "skills": [
                    "feixing"
                ]
            },
            "bianshenboss01": {
                "skills": [
                    "bianshen01",
                    "zhaohuan05",
                    "bossKXyb03"
                ]
            },
            "kongjiang1": {
                "skills": [
                    "kongjiang01"
                ]
            },
            "RedDef1": {
                "skills": [
                    "RedDef01"
                ]
            },
            "ThoAP1": {
                "skills": [
                    "ThoAP01",
                    "AttackAir0",
                    "GuidedBul03"
                ]
            },
            "Poison10": {
                "skills": [
                    "Poison00",
                    "Bul060",
                    "Dubian"
                ]
            },
            "zibao1": {
                "skills": [
                    "zibao01"
                ]
            },
            "shanshuoboss1": {
                "skills": [
                    "shanshuo02"
                ]
            },
            "Slow1": {
                "skills": [
                    "Slow01",
                    "Bul009",
                    "Jianbian"
                ]
            },
            "pabing": {
                "skills": [
                    "kangxing01"
                ]
            },
            "yaogunboss1": {
                "skills": [
                    "zhaohuan04",
                    "kangxing08",
                    "run03",
                    "qunliao03"
                ]
            },
            "DivAP2": {
                "skills": [
                    "DivAP01",
                    "GuidedBul01",
                    "Sanbian",
                    "Bul010"
                ]
            },
            "Slow2": {
                "skills": [
                    "Slow02",
                    "Bul009",
                    "Jianbian"
                ]
            },
            "DivAP1": {
                "skills": [
                    "DivAP01",
                    "GuidedBul01"
                ]
            },
            "ComAP1": {
                "skills": [
                    "ComAP01"
                ]
            },
            "Cuss1": {
                "skills": [
                    "Cuss01",
                    "Bul010",
                    "Cussbian"
                ]
            },
            "DivAP3": {
                "skills": [
                    "DivAP01",
                    "GuidedBul01",
                    "AttackAir3"
                ]
            },
            "Slow3": {
                "skills": [
                    "Slow03",
                    "Bul009",
                    "Jianbian"
                ]
            }
        },
        "bullet": {
            "bullet012": {
                "damageMode": 1,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 0
            },
            "bullet013": {
                "damageMode": 1,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 0
            },
            "bullet022": {
                "damageMode": 4,
                "fallAcc": -10,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            },
            "bullet140": {
                "damageMode": 3,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect140",
                "shapeMode": 1
            },
            "bullet010": {
                "damageMode": 1,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 0
            },
            "bullet021": {
                "damageMode": 4,
                "fallAcc": -10,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            },
            "bullet100": {
                "damageMode": 3,
                "fallAcc": 0,
                "radii": 0,
                "effect": "lightning",
                "shapeMode": 1
            },
            "bullet011": {
                "damageMode": 1,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 0
            },
            "bullet214": {
                "shadow": 0.5,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet211": {
                "path": "pathBurn",
                "shadow": 0,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet023": {
                "damageMode": 4,
                "fallAcc": -10,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            },
            "bullet026": {
                "damageMode": 4,
                "fallAcc": -8,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 15
            },
            "bullet130": {
                "damageMode": 3,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 1
            },
            "bullet215": {
                "shadow": 0.5,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet110": {
                "damageMode": 3,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 1
            },
            "bullet015": {
                "damageMode": 1,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 0
            },
            "bullet025": {
                "damageMode": 4,
                "fallAcc": -9,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            },
            "bullet050": {
                "damageMode": 3,
                "fallAcc": -6,
                "radii": 80,
                "effect": "effect040",
                "shapeMode": 0
            },
            "bullet210": {
                "shadow": 0.5,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet024": {
                "damageMode": 4,
                "fallAcc": -9,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            },
            "bullet060": {
                "damageMode": 3,
                "fallAcc": -6,
                "radii": 80,
                "effect": "effect040",
                "shapeMode": 0
            },
            "bullet040": {
                "damageMode": 3,
                "fallAcc": -6,
                "radii": 80,
                "effect": "effect040",
                "shapeMode": 0
            },
            "bullet212": {
                "path": "pathCold",
                "shadow": 0,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet213": {
                "shadow": 0.5,
                "fallAcc": 0,
                "effect": "",
                "damageMode": 3,
                "radii": 300,
                "shapeMode": 1
            },
            "bullet120": {
                "damageMode": 3,
                "fallAcc": -3,
                "radii": 80,
                "effect": "effect010",
                "shapeMode": 1
            },
            "bullet020": {
                "damageMode": 4,
                "fallAcc": -10,
                "radii": 200,
                "effect": "effect020",
                "shapeMode": 20
            }
        },
        "return_msg_config": {
            "33301": "return_msg_config_256^更新",
            "101": "return_msg_config_7^TA家的间谍狼已经逃跑了",
            "102": "return_msg_config_8^对不起，你不是黄钻玩家",
            "103": "return_msg_config_9^今天的每日登录礼物已经领过了",
            "104": "return_msg_config_10^你还没有通过本地图",
            "105": "return_msg_config_11^银币不足",
            "106": "return_msg_config_12^不支持扣除羊币",
            "107": "return_msg_config_13^积分不足",
            "108": "return_msg_config_14^不支持赠送羊币",
            "109": "return_msg_config_15^无效的数量",
            "110": "return_msg_config_16^无效的物品",
            "112": "return_msg_config_17^背包物品不满足消耗条件",
            "113": "return_msg_config_18^你所购买的物品不存在！",
            "114": "return_msg_config_19^你还不能使用该物品",
            "115": "return_msg_config_20^多个购买只支持羊币购买",
            "116": "return_msg_config_21^羊币不足",
            "117": "return_msg_config_22^购买方式错误！",
            "118": "return_msg_config_23^你所购买的物品不存在！",
            "119": "return_msg_config_24^你还不能使用该物品",
            "120": "return_msg_config_25^此物品有购买限制，你已经不能再购买了",
            "124": "return_msg_config_26^抱歉，您的积分不足！",
            "125": "return_msg_config_27^自己不能抓自己做苦工",
            "126": "return_msg_config_28^苦工仓库已经装不下了",
            "127": "return_msg_config_29^只能雇用自己的好友做为苦工",
            "128": "return_msg_config_30^TA已经是你的苦工了",
            "129": "return_msg_config_31^TA现在不在家，过一会再来抓TA吧",
            "131": "return_msg_config_32^TA还是你的苦工啊",
            "132": "return_msg_config_33^TA正在别人家工作中,过一会再来抓TA吧",
            "133": "return_msg_config_34^你刚释放了TA，过一会再来抓TA吧",
            "141": "return_msg_config_35^该苦工不存在",
            "142": "return_msg_config_36^快乐度大于40不能释放",
            "143": "return_msg_config_37^苦工正在工作中，不能释放",
            "144": "return_msg_config_38^积分不足,快去邀请好友获取积分吧",
            "145": "return_msg_config_39^苦工仓库已达上限，不能再扩容了",
            "147": "return_msg_config_40^材料不足",
            "148": "return_msg_config_41^已经是最高级了，不能再合成了",
            "155": "return_msg_config_42^新手奖励已经领取过",
            "156": "return_msg_config_43^此处奖励已经领取过",
            "157": "return_msg_config_44^此处奖励最多每天领30次",
            "158": "return_msg_config_45^此处奖励最多可以领取10次",
            "159": "return_msg_config_46^任务不存在",
            "160": "return_msg_config_47^你的等级不符合要求",
            "161": "return_msg_config_48^你没有此物品",
            "162": "return_msg_config_49^背包中没有此物品",
            "163": "return_msg_config_50^已经没有位置提供给新开出的狼了",
            "164": "return_msg_config_51^数据是空的",
            "165": "return_msg_config_52^查询失败",
            "166": "return_msg_config_53^你还没有开启噩梦模式!",
            "167": "return_msg_config_54^只能引诱好友的狼",
            "168": "return_msg_config_55^不可以超过等级解锁上限",
            "169": "return_msg_config_56^你还没有达到解锁等级要求",
            "170": "return_msg_config_57^不可以超过银币解锁上限",
            "171": "return_msg_config_58^该狼不存在",
            "172": "return_msg_config_59^请选择防守空位",
            "173": "return_msg_config_60^不可以超出防守队列数量限制",
            "174": "return_msg_config_61^该狼已被派出占领，不能释放",
            "175": "return_msg_config_62^最后一只，不能释放",
            "176": "return_msg_config_63^该狼已经拥有同类技能了",
            "177": "return_msg_config_64^该狼已经拥有的技能与该技能冲突",
            "178": "return_msg_config_65^该狼的技能槽已经满了",
            "179": "return_msg_config_66^没有这个技能",
            "180": "return_msg_config_67^请选择要升级的技能",
            "181": "return_msg_config_68^不能升级",
            "182": "return_msg_config_69^今天不可以用了",
            "183": "return_msg_config_70^此狼已经很牛掰了，不要再升了...",
            "184": "return_msg_config_71^此处没有障碍物",
            "185": "return_msg_config_72^只有障碍物可以被清除",
            "186": "return_msg_config_73^这都有建筑物了，换个地方吧",
            "187": "return_msg_config_74^这个机关用光了",
            "188": "return_msg_config_75^你所建造的对象不存在！",
            "189": "return_msg_config_76^没有足够的羊币",
            "190": "return_msg_config_77^请选择要升级的建筑物",
            "191": "return_msg_config_78^只有塔是可以升级的",
            "192": "return_msg_config_79^此塔已经很牛掰了，不要再升了...",
            "193": "return_msg_config_80^请选择要卖掉的建筑物",
            "194": "return_msg_config_81^请选择要移动的建筑物",
            "195": "return_msg_config_82^只有塔是可以移动的",
            "196": "return_msg_config_83^移动目标有建筑物，还是换个地方吧",
            "197": "return_msg_config_84^你已经没有魔铲了",
            "198": "return_msg_config_85^不能攻占自己",
            "199": "return_msg_config_86^今天不可以再去进攻了",
            "200": "return_msg_config_87^派出的狼不符合条件(开战)",
            "201": "return_msg_config_88^派遣狼的属性发生了变化",
            "202": "return_msg_config_89^派遣狼的数量不正确",
            "203": "return_msg_config_90^不能连续攻打同一个人",
            "204": "return_msg_config_91^对方没有布防,不能开战",
            "205": "return_msg_config_92^对方正在被攻打,不能开战",
            "206": "return_msg_config_93^对方布防已经更新，请刷新重新开战",
            "207": "return_msg_config_94^攻占对方必须跟你是好友关系",
            "208": "return_msg_config_95^好友已经被占领，先解救TA才能占领TA",
            "209": "return_msg_config_96^不能占领自己的领主",
            "210": "return_msg_config_97^只能反抗自己的领主",
            "211": "return_msg_config_98^被解救方必须是自己的好友",
            "212": "return_msg_config_99^被解救人没有被占领",
            "213": "return_msg_config_100^被占领人不可以去解救",
            "214": "return_msg_config_101^错误的进攻关系",
            "215": "return_msg_config_102^错误的进攻关系,或者已超时",
            "216": "return_msg_config_103^你还没有占领对方，不可以撤防",
            "217": "return_msg_config_104^请选择需要镶嵌的建筑物",
            "218": "return_msg_config_105^只有塔才可以镶嵌",
            "219": "return_msg_config_106^你好像没有要镶嵌的宝石啊",
            "220": "return_msg_config_107^只能镶嵌高于建筑物原有宝石级别的宝石",
            "221": "return_msg_config_108^不能pk自己",
            "222": "return_msg_config_109^今天不可以挑战了",
            "223": "return_msg_config_110^对方没有大本营",
            "224": "return_msg_config_111^不能连续挑战同一个人的狼",
            "225": "return_msg_config_112^对方狼队列发生了变化，请刷新重来",
            "226": "return_msg_config_113^本方塔队列发生了变化，请刷新重来",
            "227": "return_msg_config_114^错误的战斗关系",
            "228": "return_msg_config_115^塔实力不符",
            "229": "return_msg_config_116^矿山正在开采中",
            "231": "return_msg_config_117^苦工快乐度小于20，不能工作了",
            "232": "return_msg_config_118^该苦工正在工作中",
            "233": "return_msg_config_119^苦工可工作时间不足",
            "234": "return_msg_config_120^矿山并不在开采中",
            "235": "return_msg_config_121^矿山不在开采中或还没有完成开采",
            "236": "return_msg_config_122^不是你的领地",
            "237": "return_msg_config_123^TA的矿山已经被抢过了",
            "238": "return_msg_config_124^今天不可以在竞技场挑战狼了",
            "239": "return_msg_config_125^不能连续攻打同一个人竞技场中的狼",
            "240": "return_msg_config_126^对方竞技狼队列发生了变化，请刷新重来",
            "241": "return_msg_config_127^本方竞技场塔队列发生了变化，请刷新重来",
            "242": "return_msg_config_128^不能连续攻打同一个人竞技场中的塔",
            "243": "return_msg_config_129^本方竞技狼队列发生了变化，请刷新重来",
            "244": "return_msg_config_130^对方竞技场塔队列发生了变化，请刷新重来",
            "245": "return_msg_config_131^不可以抽奖",
            "246": "return_msg_config_132^你倒是选个墙啊",
            "247": "return_msg_config_133^你好像没有此物品啊",
            "248": "return_msg_config_134^该机关只能放置在墙上",
            "249": "return_msg_config_135^该墙已经装有机关了",
            "250": "return_msg_config_136^只能从墙上移除",
            "251": "return_msg_config_137^该墙上没有这个机关",
            "252": "return_msg_config_138^今天不可以在竞技场挑战塔了",
            "253": "return_msg_config_139^该噩梦地图已经关闭",
            "254": "return_msg_config_140^出现错误，请刷新重来",
            "255": "return_msg_config_141^请正确选择噩梦地图",
            "256": "return_msg_config_142^本期噩梦已超时关闭!",
            "257": "return_msg_config_143^美梦点不足，本次挑战结束!",
            "258": "return_msg_config_144^当前排行已更新",
            "259": "return_msg_config_145^配置不存在",
            "260": "return_msg_config_146^该建筑到达地图设定上限",
            "262": "return_msg_config_147^噩梦币不足",
            "263": "return_msg_config_148^该塔经验值不足",
            "264": "return_msg_config_149^你没有此物品",
            "265": "return_msg_config_150^没有宝箱啦",
            "266": "return_msg_config_151^超出建筑物最高建造级别",
            "267": "return_msg_config_152^该物品不存在",
            "268": "return_msg_config_153^只能拆除墙上的物品",
            "269": "return_msg_config_154^该机关必须放置在墙上",
            "270": "return_msg_config_155^你好像没有窜天弹",
            "271": "return_msg_config_156^该墙已经装置了窜天弹",
            "272": "return_msg_config_157^只能放置在墙上",
            "300": "return_msg_config_158^当前关卡的前一关卡还没有通过",
            "301": "return_msg_config_159^耐心等待下波狼吧",
            "302": "return_msg_config_160^数据错误",
            "303": "return_msg_config_161^此地图你已经通过",
            "30000": "return_msg_config_254^本期噩梦到时已关闭!",
            "30001": "return_msg_config_255^当前排行已更新",
            "306": "return_msg_config_164^超出苦工连续升级上限",
            "307": "return_msg_config_165^建造耗时大于苦工可以工作时间",
            "308": "return_msg_config_166^需要使用苦工升级建筑物",
            "309": "return_msg_config_167^该塔正在建造中,不能升级",
            "310": "return_msg_config_168^请选择要加速建造的建筑物",
            "311": "return_msg_config_169^只有塔是可以加速建造的",
            "304": "return_msg_config_162^需要使用苦工建造建筑物",
            "305": "return_msg_config_163^苦工不存在",
            "314": "return_msg_config_172^机关是不可以卖的",
            "315": "return_msg_config_173^建造中的建筑物是不可以卖的",
            "316": "return_msg_config_174^请将机关放置到墙上",
            "317": "return_msg_config_175^之前从好友引诱来的狼还没有消灭",
            "318": "return_msg_config_176^对方等级太低，不能引狼",
            "319": "return_msg_config_177^每个好友每天只能引一次",
            "312": "return_msg_config_170^该塔已经完成建造",
            "313": "return_msg_config_171^缺少加速物品",
            "322": "return_msg_config_180^只能引好友的狼",
            "323": "return_msg_config_181^你的好友当前关卡已经通过，他还没有开启新地图",
            "324": "return_msg_config_182^稍微休息一下，等会才可以引诱",
            "325": "return_msg_config_183^TA家出现了BOSS，还是少惹为妙吧",
            "326": "return_msg_config_184^你现在还不能选择该地图",
            "327": "return_msg_config_185^你已经通过了此地图",
            "320": "return_msg_config_178^今天的引狼次数到达上限了",
            "321": "return_msg_config_179^不能引自己的狼",
            "330": "return_msg_config_188^请先使用较低级物品",
            "331": "return_msg_config_189^不能使用该物品",
            "332": "return_msg_config_190^当前前线地图，已经使用了更高级的留声机",
            "333": "return_msg_config_191^此地图已经使用该物品，不可重复使用",
            "334": "return_msg_config_192^目前无法使用该物品",
            "335": "return_msg_config_193^没有达到等级要求",
            "336": "return_msg_config_194^对方没有狼，不能开战",
            "337": "return_msg_config_195^本方没有狼，不能开战",
            "338": "return_msg_config_196^你只能帮助你的好友开采旷山",
            "339": "return_msg_config_197^矿山并不在开采中",
            "340": "return_msg_config_198^该好友已经获得很多人帮助啦！去帮助其它好友吧～",
            "341": "return_msg_config_199^你已经帮助过该好友",
            "342": "return_msg_config_200^你今天已经帮助过很多好友啦！ 休息一下，明天再来～",
            "343": "return_msg_config_201^不能自己帮助自己",
            "344": "return_msg_config_202^消灭引来的狼之后才能使用",
            "345": "return_msg_config_203^今日消费活动已到期",
            "346": "return_msg_config_204^请正确选择消费领奖数目",
            "347": "return_msg_config_205^未达到领奖消费数目",
            "348": "return_msg_config_206^此项消费奖励已领取",
            "349": "return_msg_config_207^当前没有领取奖励活动",
            "350": "return_msg_config_208^不在领奖时间区间内",
            "351": "return_msg_config_209^领取奖励记录错误",
            "352": "return_msg_config_210^今天领取奖励时间已过",
            "353": "return_msg_config_211^未到时间领取",
            "354": "return_msg_config_212^今天的奖励已经领取完",
            "355": "return_msg_config_213^您已经使用过这个礼品兑换码",
            "356": "return_msg_config_214^请输入12位的礼品兑换码",
            "357": "return_msg_config_215^您输入的礼品兑换码错误",
            "358": "return_msg_config_216^该领奖活动已结束",
            "359": "return_msg_config_217^你已经领过该奖品",
            "360": "return_msg_config_218^请选择你要领取的奖品",
            "361": "return_msg_config_219^还没达到该奖品所需活动人数",
            "362": "return_msg_config_220^请先分享消息或邀请好友再来抽奖",
            "363": "return_msg_config_221^你要接受的礼物已过期",
            "364": "return_msg_config_222^好友回赠的礼物只能接受",
            "365": "return_msg_config_223^该障碍物不可拆除",
            "366": "return_msg_config_224^类型错误",
            "367": "return_msg_config_225^您只能邀请您的好友",
            "368": "return_msg_config_226^需要间隔6小时",
            "369": "return_msg_config_227^请选择您要发送礼物的好友！",
            "370": "return_msg_config_228^请正确选择你要兑换的物品！",
            "371": "return_msg_config_229^您今天接受的礼物已达到最大值！",
            "372": "return_msg_config_230^还没达到兑换该物品所需的材料道具！",
            "373": "return_msg_config_231^您没有兑换目标道具所需材料道具！",
            "374": "return_msg_config_232^不能给自己发送礼物！",
            "375": "return_msg_config_233^不能调任到当前地图!",
            "376": "return_msg_config_234^今天发送礼物已达到上限！",
            "377": "return_msg_config_235^您的级别低于该礼物所需等级限制！",
            "378": "return_msg_config_236^请选择您要发送的礼物！",
            "379": "return_msg_config_237^您要兑换的目标道具不存在！",
            "380": "return_msg_config_238^您的领地已经达到了五个，请撤防或等占领时间结束再来占领",
            "381": "return_msg_config_239^您已达到了兑换该目标道具最大数量限制！",
            "382": "return_msg_config_240^您不能直接使用该道具",
            "383": "return_msg_config_241^任务还未完成",
            "384": "return_msg_config_242^邀请消费活动已到期",
            "385": "return_msg_config_243^请正确选择要领取的奖励",
            "386": "return_msg_config_244^此项奖励已领取",
            "387": "return_msg_config_245^成功邀请10个好友才能领取该奖励",
            "388": "return_msg_config_246^新玩家才能领取该奖励",
            "389": "return_msg_config_247^请选择要粉碎宝石的塔",
            "390": "return_msg_config_248^只能用来击碎塔上的宝石",
            "391": "return_msg_config_249^该塔上没有镶嵌宝石",
            "392": "return_msg_config_250^您已经没有粉碎锤",
            "393": "return_msg_config_251^请选择要取出宝石的塔",
            "394": "return_msg_config_252^只能用来取出塔上的宝石",
            "395": "return_msg_config_253^您已经没有神奇的起子",
            "328": "return_msg_config_186^此地图已经使用该物品，不可重复使用",
            "329": "return_msg_config_187^当前前线地图，已经使用了更高级的稻草羊",
            "501": "return_msg_config_1^操作失败，请清除浏览器缓存重试",
            "502": "return_msg_config_2^网络繁忙!",
            "503": "return_msg_config_3^您的游戏长时间没有操作，请刷新游戏",
            "504": "return_msg_config_4^您的账号在其他地方登陆，请刷新游戏！",
            "505": "return_msg_config_5^您的帐号已被冻结，请联系客服解决",
            "506": "return_msg_config_6^未登录"
        },
        "user_online_gift": {},
        "is_super": false,
        "properties": {
            "snarp": {
                "cuantiandan3": {
                    "value": [
                        "bullet120",
                        1000
                    ],
                    "range": 5500,
                    "use_times": 5,
                    "effectKind": "2",
                    "index": 522,
                    "name": "snarp_27^中级窜天弹",
                    "colddown": 2,
                    "kindId": "100",
                    "price": {
                        "coin": 45
                    },
                    "effectType": "2",
                    "info": "snarp_28^只能安置在[【墙】]上，发射追踪导弹超远程攻击空中目标，造成[1000]点伤害。可发射[5]次",
                    "effect": "effect232"
                },
                "qixi1": {
                    "value": [
                        "bullet140",
                        77
                    ],
                    "range": 7777,
                    "use_times": 77,
                    "effectKind": "2",
                    "index": -12,
                    "name": "snarp_33^七夕喜鹊窝",
                    "colddown": 0.2,
                    "kindId": "101",
                    "price": {
                        "coin": 35
                    },
                    "effectType": "2",
                    "info": "snarp_34^{想爱却不会飞？来搭乘鹊桥航班吧！}(每只喜鹊对空造成77点伤害。可起飞77次。只能安置在【墙】上)",
                    "effect": "effect231"
                },
                "dicicao3": {
                    "value": [
                        250
                    ],
                    "range": -1,
                    "use_times": 80,
                    "effectKind": "2",
                    "index": 322,
                    "name": "snarp_13^中级地刺草",
                    "colddown": 0.5,
                    "kindId": "2",
                    "price": {
                        "coin": 45
                    },
                    "effectType": "1",
                    "info": "snarp_14^每次刺击，造成一格范围内[250]点伤害。可刺击[80]次",
                    "effect": ""
                },
                "bushoujia4": {
                    "value": [
                        2
                    ],
                    "range": 20,
                    "use_times": 3,
                    "effectKind": "1",
                    "index": 430,
                    "name": "snarp_23^高级捕兽夹",
                    "colddown": 3.5,
                    "kindId": "3",
                    "price": {
                        "coin": 125
                    },
                    "effectType": "1",
                    "info": "snarp_24^夹住单个猎物，[2]秒内不能动弹。可触发[3]次",
                    "effect": "effect223"
                },
                "dicicao2": {
                    "value": [
                        80
                    ],
                    "range": -1,
                    "use_times": 50,
                    "effectKind": "2",
                    "index": 310,
                    "name": "snarp_11^初级地刺草",
                    "colddown": 0.5,
                    "kindId": "2",
                    "price": {
                        "coin": 25
                    },
                    "effectType": "1",
                    "info": "snarp_12^每次刺击，造成一格范围内[80]点伤害。可刺击[50]次",
                    "effect": ""
                },
                "bushoujia1": {
                    "value": [
                        0.4
                    ],
                    "use_times": 1,
                    "kindId": "3",
                    "price": {
                        "gold": 200
                    },
                    "effect": "effect220",
                    "effectType": "1",
                    "info": "snarp_18^夹住单个猎物，短暂一瞬不能动弹",
                    "range": 20,
                    "index": 400,
                    "effectKind": "1",
                    "name": "snarp_17^菜鸟捕兽夹"
                },
                "shengdan1": {
                    "value": [
                        "bullet212",
                        -4,
                        500
                    ],
                    "use_times": 1,
                    "kindId": "50",
                    "price": {
                        "coin": 50
                    },
                    "effect": "",
                    "effectType": "1",
                    "info": "snarp_38^{冰霜十字！}(放置于地面，触发后，造成[十字方向]三格范围内[75%]冰霜减速)",
                    "range": -1,
                    "index": -12,
                    "effectKind": "2",
                    "name": "snarp_37^圣诞雪球"
                },
                "baozhatong3": {
                    "value": [
                        0.3,
                        7000
                    ],
                    "use_times": 1,
                    "kindId": "1",
                    "price": {
                        "coin": 45
                    },
                    "effect": "effect203",
                    "effectType": "1",
                    "info": "snarp_6^对踩到的单体，造成其总血量[30%]的伤害\n(至多造成[7000]点伤害)",
                    "range": 50,
                    "index": 222,
                    "effectKind": "1",
                    "name": "snarp_5^中级单兵雷"
                },
                "baozhatong4": {
                    "value": [
                        0.4,
                        20000
                    ],
                    "use_times": 1,
                    "kindId": "1",
                    "price": {
                        "coin": 125
                    },
                    "effect": "effect204",
                    "effectType": "1",
                    "info": "snarp_8^对踩到的单体，造成其总血量[40%]的伤害\n(至多造成[20000]点伤害)",
                    "range": 50,
                    "index": 230,
                    "effectKind": "1",
                    "name": "snarp_7^高级单兵雷"
                },
                "cuantiandan2": {
                    "value": [
                        "bullet110",
                        500
                    ],
                    "range": 5000,
                    "use_times": 3,
                    "effectKind": "2",
                    "index": 510,
                    "name": "snarp_25^初级窜天弹",
                    "colddown": 2,
                    "kindId": "100",
                    "price": {
                        "coin": 25
                    },
                    "effectType": "2",
                    "info": "snarp_26^只能安置在[【墙】]上，发射追踪导弹超远程攻击空中目标，造成[500]点伤害。可发射[3]次",
                    "effect": "effect231"
                },
                "chunjie1": {
                    "value": [
                        0.15,
                        500
                    ],
                    "range": 50,
                    "effectRange": 2000,
                    "use_times": 1,
                    "effectKind": "2",
                    "index": -12,
                    "delay": 6,
                    "name": "snarp_39^春节爆竹",
                    "kindId": "1",
                    "price": {
                        "coin": 50
                    },
                    "effectType": "1",
                    "info": "snarp_40^{春节快乐！}(放置于地面，触发后6秒，对两格范围内的所有目标造成其总血量[15%]的伤害\n(至多造成[500]点伤害)",
                    "effect": "effect310"
                },
                "dicicao1": {
                    "value": [
                        20
                    ],
                    "range": -1,
                    "use_times": 20,
                    "effectKind": "2",
                    "index": 300,
                    "name": "snarp_9^菜鸟地刺草",
                    "colddown": 0.5,
                    "kindId": "2",
                    "price": {
                        "gold": 200
                    },
                    "effectType": "1",
                    "info": "snarp_10^每次刺击，造成一格范围内[20]点伤害。可刺击[20]次",
                    "effect": ""
                },
                "bushoujia3": {
                    "value": [
                        1.5
                    ],
                    "range": 20,
                    "use_times": 2,
                    "effectKind": "1",
                    "index": 422,
                    "name": "snarp_21^中级捕兽夹",
                    "colddown": 3,
                    "kindId": "3",
                    "price": {
                        "coin": 45
                    },
                    "effectType": "1",
                    "info": "snarp_22^夹住单个猎物，[1.5]秒内不能动弹。可触发[2]次",
                    "effect": "effect222"
                },
                "guoqing1": {
                    "value": [
                        500
                    ],
                    "range": 400,
                    "effectRange": 1500,
                    "use_times": 1,
                    "effectKind": "2",
                    "index": -12,
                    "name": "snarp_35^国庆大礼花",
                    "kindId": "5",
                    "price": {
                        "coin": 50
                    },
                    "effectType": "3",
                    "info": "snarp_36^{耀我国威！}(地空皆可触发，造成大范围击退效果（同时打断施法）)",
                    "effect": "effect300"
                },
                "cuantiandan4": {
                    "value": [
                        "bullet130",
                        1500
                    ],
                    "range": 6000,
                    "use_times": 10,
                    "effectKind": "2",
                    "index": 530,
                    "name": "snarp_29^高级窜天弹",
                    "colddown": 2,
                    "kindId": "100",
                    "price": {
                        "coin": 125
                    },
                    "effectType": "2",
                    "info": "snarp_30^只能安置在[【墙】]上，发射追踪导弹超远程攻击空中目标，造成[1500]点伤害。可发射[10]次",
                    "effect": "effect233"
                },
                "baozhatong2": {
                    "value": [
                        0.2,
                        2500
                    ],
                    "use_times": 1,
                    "kindId": "1",
                    "price": {
                        "coin": 25
                    },
                    "effect": "effect202",
                    "effectType": "1",
                    "info": "snarp_4^对踩到的单体，造成其总血量[20%]的伤害\n(至多造成[2500]点伤害)",
                    "range": 50,
                    "index": 210,
                    "effectKind": "1",
                    "name": "snarp_3^初级单兵雷"
                },
                "bushoujia2": {
                    "value": [
                        1
                    ],
                    "use_times": 1,
                    "kindId": "3",
                    "price": {
                        "coin": 25
                    },
                    "effect": "effect221",
                    "effectType": "1",
                    "info": "snarp_20^夹住单个猎物，[1]秒内不能动弹",
                    "range": 20,
                    "index": 410,
                    "effectKind": "1",
                    "name": "snarp_19^初级捕兽夹"
                },
                "baozhatong1": {
                    "value": [
                        0.1,
                        200
                    ],
                    "use_times": 1,
                    "kindId": "1",
                    "price": {
                        "gold": 200
                    },
                    "effect": "effect201",
                    "effectType": "1",
                    "info": "snarp_2^对踩到的单体，造成其总血量[10%]的伤害\n(至多造成[200]点伤害)",
                    "range": 50,
                    "index": 200,
                    "effectKind": "1",
                    "name": "snarp_1^菜鸟单兵雷"
                },
                "yuanxiao1": {
                    "value": [
                        0.5,
                        5
                    ],
                    "use_times": 1,
                    "kindId": "4",
                    "price": {
                        "coin": 5
                    },
                    "effect": "",
                    "effectType": "1",
                    "info": "snarp_32^{别拿元宵不当干粮，踩上我就黏上你了!}(对踩到的单体，造成50%减速，持续5秒)",
                    "range": 100,
                    "index": -12,
                    "effectKind": "1",
                    "name": "snarp_31^元宵黏黏球"
                },
                "dicicao4": {
                    "value": [
                        800
                    ],
                    "range": -1,
                    "use_times": 100,
                    "effectKind": "2",
                    "index": 330,
                    "name": "snarp_15^高级地刺草",
                    "colddown": 0.5,
                    "kindId": "2",
                    "price": {
                        "coin": 125
                    },
                    "effectType": "1",
                    "info": "snarp_16^每次刺击，造成一格范围内[800]点伤害。可刺击[100]次",
                    "effect": ""
                }
            },
            "gem": {
                "lv3": {
                    "color": 3,
                    "price": {
                        "coin": 45
                    },
                    "index": 310,
                    "qqvip": "",
                    "nextId": "lv4",
                    "info": "蕴含中等毒性能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "Poison11"
                        },
                        "sandanta": {
                            "lv": 30,
                            "id": "Poison11"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "Poison12"
                        },
                        "xiangqianta": {
                            "lv": 14,
                            "id": "Poison10"
                        },
                        "bodongta": {
                            "lv": 30,
                            "id": "Poison13"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m2",
                    "name": "绿宝石"
                },
                "lan3": {
                    "color": 4,
                    "price": {
                        "coin": 45
                    },
                    "index": 320,
                    "qqvip": "",
                    "nextId": "lan4",
                    "info": "蕴含中等冰霜能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "BC_C1"
                        },
                        "sandanta": {
                            "lv": 21,
                            "id": "BC_C1"
                        },
                        "paota": {
                            "lv": 45,
                            "id": "BC_C2"
                        },
                        "xiangqianta": {
                            "lv": 60,
                            "id": "BC_C0"
                        },
                        "bodongta": {
                            "lv": 15,
                            "id": "BC_C3"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m2A",
                    "name": "蓝宝石"
                },
                "lan2": {
                    "color": 4,
                    "price": {
                        "coin": 25
                    },
                    "index": 220,
                    "qqvip": "",
                    "nextId": "lan3",
                    "info": "蕴含些许冰霜能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "BC_C1"
                        },
                        "sandanta": {
                            "lv": 14,
                            "id": "BC_C1"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "BC_C2"
                        },
                        "xiangqianta": {
                            "lv": 40,
                            "id": "BC_C0"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "BC_C3"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m2A",
                    "name": "蓝宝石晶体"
                },
                "hei4": {
                    "color": 6,
                    "price": {
                        "coin": 125
                    },
                    "index": -31,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量神秘能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "ComAP1"
                        },
                        "sandanta": {
                            "lv": 50,
                            "id": "ScaAP1"
                        },
                        "paota": {
                            "lv": 40,
                            "id": "ChangeRange6"
                        },
                        "xiangqianta": {
                            "lv": 25,
                            "id": "Cuss1"
                        },
                        "bodongta": {
                            "lv": 40,
                            "id": "ComAP1"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m1",
                    "name": "黑宝石精华"
                },
                "huang2": {
                    "color": 2,
                    "price": {
                        "coin": 25
                    },
                    "index": 230,
                    "qqvip": "",
                    "nextId": "huang3",
                    "info": "蕴含些许炫光能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "Crit1"
                        },
                        "sandanta": {
                            "lv": 20,
                            "id": "Crit1"
                        },
                        "paota": {
                            "lv": 20,
                            "id": "Vertigo1"
                        },
                        "xiangqianta": {
                            "lv": 20,
                            "id": "All_Dam1"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "Vertigo2"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m5",
                    "name": "黄宝石晶体"
                },
                "huang1": {
                    "color": 2,
                    "price": {
                        "gold": 200
                    },
                    "index": -130,
                    "qqvip": "",
                    "nextId": "huang2",
                    "info": "蕴含微弱炫光能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "Crit1"
                        },
                        "sandanta": {
                            "lv": 10,
                            "id": "Crit1"
                        },
                        "paota": {
                            "lv": 10,
                            "id": "Vertigo1"
                        },
                        "xiangqianta": {
                            "lv": 10,
                            "id": "All_Dam1"
                        },
                        "bodongta": {
                            "lv": 5,
                            "id": "Vertigo2"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m5",
                    "name": "黄宝石碎片"
                },
                "zi4": {
                    "color": 5,
                    "price": {
                        "coin": 125
                    },
                    "index": 440,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量闪电能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "ChangeRange2"
                        },
                        "sandanta": {
                            "lv": 32,
                            "id": "ChangeRange2"
                        },
                        "paota": {
                            "lv": 40,
                            "id": "Beat1"
                        },
                        "xiangqianta": {
                            "lv": 40,
                            "id": "BouAP1"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "Beat2"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m2B",
                    "name": "紫宝石精华"
                },
                "lan1": {
                    "color": 4,
                    "price": {
                        "gold": 200
                    },
                    "index": -120,
                    "qqvip": "",
                    "nextId": "lan2",
                    "info": "蕴含微弱冰霜能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "BC_C1"
                        },
                        "sandanta": {
                            "lv": 7,
                            "id": "BC_C1"
                        },
                        "paota": {
                            "lv": 15,
                            "id": "BC_C2"
                        },
                        "xiangqianta": {
                            "lv": 20,
                            "id": "BC_C0"
                        },
                        "bodongta": {
                            "lv": 5,
                            "id": "BC_C3"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m2A",
                    "name": "蓝宝石碎片"
                },
                "lv2": {
                    "color": 3,
                    "price": {
                        "coin": 25
                    },
                    "index": 210,
                    "qqvip": "",
                    "nextId": "lv3",
                    "info": "蕴含些许毒性能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "Poison11"
                        },
                        "sandanta": {
                            "lv": 20,
                            "id": "Poison11"
                        },
                        "paota": {
                            "lv": 20,
                            "id": "Poison12"
                        },
                        "xiangqianta": {
                            "lv": 12,
                            "id": "Poison10"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "Poison13"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m2",
                    "name": "绿宝石晶体"
                },
                "huang3": {
                    "color": 2,
                    "price": {
                        "coin": 45
                    },
                    "index": 330,
                    "qqvip": "",
                    "nextId": "huang4",
                    "info": "蕴含中等炫光能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "Crit1"
                        },
                        "sandanta": {
                            "lv": 30,
                            "id": "Crit1"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "Vertigo1"
                        },
                        "xiangqianta": {
                            "lv": 30,
                            "id": "All_Dam1"
                        },
                        "bodongta": {
                            "lv": 15,
                            "id": "Vertigo2"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m5",
                    "name": "黄宝石"
                },
                "hong5": {
                    "color": 1,
                    "price": {
                        "coin": 345
                    },
                    "index": 502,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大燃烧能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "BC_B1"
                        },
                        "sandanta": {
                            "lv": 35,
                            "id": "BC_B1"
                        },
                        "paota": {
                            "lv": 75,
                            "id": "BC_B2"
                        },
                        "xiangqianta": {
                            "lv": 100,
                            "id": "BC_B0"
                        },
                        "bodongta": {
                            "lv": 25,
                            "id": "BC_B3"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m1",
                    "name": "强化红宝石"
                },
                "hong4": {
                    "color": 1,
                    "price": {
                        "coin": 125
                    },
                    "index": 400,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量燃烧能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "BC_B1"
                        },
                        "sandanta": {
                            "lv": 28,
                            "id": "BC_B1"
                        },
                        "paota": {
                            "lv": 60,
                            "id": "BC_B2"
                        },
                        "xiangqianta": {
                            "lv": 80,
                            "id": "BC_B0"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "BC_B3"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m1",
                    "name": "红宝石精华"
                },
                "zi5": {
                    "color": 5,
                    "price": {
                        "coin": 345
                    },
                    "index": 542,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大闪电能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "ChangeRange2"
                        },
                        "sandanta": {
                            "lv": 40,
                            "id": "ChangeRange2"
                        },
                        "paota": {
                            "lv": 50,
                            "id": "Beat1"
                        },
                        "xiangqianta": {
                            "lv": 50,
                            "id": "BouAP1"
                        },
                        "bodongta": {
                            "lv": 25,
                            "id": "Beat2"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m2B",
                    "name": "强化紫宝石"
                },
                "zi3": {
                    "color": 5,
                    "price": {
                        "coin": 45
                    },
                    "index": 340,
                    "qqvip": "",
                    "nextId": "zi4",
                    "info": "蕴含中等闪电能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "ChangeRange2"
                        },
                        "sandanta": {
                            "lv": 24,
                            "id": "ChangeRange2"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "Beat1"
                        },
                        "xiangqianta": {
                            "lv": 30,
                            "id": "BouAP1"
                        },
                        "bodongta": {
                            "lv": 15,
                            "id": "Beat2"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m2B",
                    "name": "紫宝石"
                },
                "zi2": {
                    "color": 5,
                    "price": {
                        "coin": 25
                    },
                    "index": 240,
                    "qqvip": "",
                    "nextId": "zi3",
                    "info": "蕴含些许闪电能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "ChangeRange2"
                        },
                        "sandanta": {
                            "lv": 16,
                            "id": "ChangeRange2"
                        },
                        "paota": {
                            "lv": 20,
                            "id": "Beat1"
                        },
                        "xiangqianta": {
                            "lv": 20,
                            "id": "BouAP1"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "Beat2"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m2B",
                    "name": "紫宝石晶体"
                },
                "hei3": {
                    "color": 6,
                    "price": {
                        "coin": 45
                    },
                    "index": -21,
                    "qqvip": "",
                    "nextId": "hei4",
                    "info": "蕴含中等神秘能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "ComAP1"
                        },
                        "sandanta": {
                            "lv": 40,
                            "id": "ScaAP1"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "ChangeRange5"
                        },
                        "xiangqianta": {
                            "lv": 20,
                            "id": "Cuss1"
                        },
                        "bodongta": {
                            "lv": 30,
                            "id": "ComAP1"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m1",
                    "name": "黑宝石"
                },
                "lv5": {
                    "color": 3,
                    "price": {
                        "coin": 345
                    },
                    "index": 512,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大毒性能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "Poison11"
                        },
                        "sandanta": {
                            "lv": 50,
                            "id": "Poison11"
                        },
                        "paota": {
                            "lv": 50,
                            "id": "Poison12"
                        },
                        "xiangqianta": {
                            "lv": 18,
                            "id": "Poison10"
                        },
                        "bodongta": {
                            "lv": 50,
                            "id": "Poison13"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m2",
                    "name": "强化绿宝石"
                },
                "hong2": {
                    "color": 1,
                    "price": {
                        "coin": 25
                    },
                    "index": 200,
                    "qqvip": "",
                    "nextId": "hong3",
                    "info": "蕴含些许燃烧能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "BC_B1"
                        },
                        "sandanta": {
                            "lv": 14,
                            "id": "BC_B1"
                        },
                        "paota": {
                            "lv": 30,
                            "id": "BC_B2"
                        },
                        "xiangqianta": {
                            "lv": 40,
                            "id": "BC_B0"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "BC_B3"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m1",
                    "name": "红宝石晶体"
                },
                "huang4": {
                    "color": 2,
                    "price": {
                        "coin": 125
                    },
                    "index": 430,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量炫光能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "Crit1"
                        },
                        "sandanta": {
                            "lv": 40,
                            "id": "Crit1"
                        },
                        "paota": {
                            "lv": 40,
                            "id": "Vertigo1"
                        },
                        "xiangqianta": {
                            "lv": 40,
                            "id": "All_Dam1"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "Vertigo2"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m5",
                    "name": "黄宝石精华"
                },
                "hong1": {
                    "color": 1,
                    "price": {
                        "gold": 200
                    },
                    "index": -100,
                    "qqvip": "",
                    "nextId": "hong2",
                    "info": "蕴含微弱燃烧能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "BC_B1"
                        },
                        "sandanta": {
                            "lv": 7,
                            "id": "BC_B1"
                        },
                        "paota": {
                            "lv": 15,
                            "id": "BC_B2"
                        },
                        "xiangqianta": {
                            "lv": 20,
                            "id": "BC_B0"
                        },
                        "bodongta": {
                            "lv": 5,
                            "id": "BC_B3"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m1",
                    "name": "红宝石碎片"
                },
                "lan4": {
                    "color": 4,
                    "price": {
                        "coin": 125
                    },
                    "index": 420,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量冰霜能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "BC_C1"
                        },
                        "sandanta": {
                            "lv": 28,
                            "id": "BC_C1"
                        },
                        "paota": {
                            "lv": 60,
                            "id": "BC_C2"
                        },
                        "xiangqianta": {
                            "lv": 80,
                            "id": "BC_C0"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "BC_C3"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m2A",
                    "name": "蓝宝石精华"
                },
                "lan5": {
                    "color": 4,
                    "price": {
                        "coin": 345
                    },
                    "index": 522,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大冰霜能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "BC_C1"
                        },
                        "sandanta": {
                            "lv": 35,
                            "id": "BC_C1"
                        },
                        "paota": {
                            "lv": 75,
                            "id": "BC_C2"
                        },
                        "xiangqianta": {
                            "lv": 100,
                            "id": "BC_C0"
                        },
                        "bodongta": {
                            "lv": 25,
                            "id": "BC_C3"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m2A",
                    "name": "强化蓝宝石"
                },
                "lv1": {
                    "color": 3,
                    "price": {
                        "gold": 200
                    },
                    "index": -110,
                    "qqvip": "",
                    "nextId": "lv2",
                    "info": "蕴含微弱毒性能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "Poison11"
                        },
                        "sandanta": {
                            "lv": 10,
                            "id": "Poison11"
                        },
                        "paota": {
                            "lv": 10,
                            "id": "Poison12"
                        },
                        "xiangqianta": {
                            "lv": 10,
                            "id": "Poison10"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "Poison13"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m2",
                    "name": "绿宝石碎片"
                },
                "hei2": {
                    "color": 6,
                    "price": {
                        "coin": 25
                    },
                    "index": -11,
                    "qqvip": "",
                    "nextId": "hei3",
                    "info": "蕴含些许神秘能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 20,
                            "id": "ComAP1"
                        },
                        "sandanta": {
                            "lv": 30,
                            "id": "ScaAP1"
                        },
                        "paota": {
                            "lv": 20,
                            "id": "ChangeRange4"
                        },
                        "xiangqianta": {
                            "lv": 15,
                            "id": "Cuss1"
                        },
                        "bodongta": {
                            "lv": 20,
                            "id": "ComAP1"
                        }
                    },
                    "gamLevel": 2,
                    "unlock_mid": "m1",
                    "name": "黑宝石晶体"
                },
                "huang5": {
                    "color": 2,
                    "price": {
                        "coin": 345
                    },
                    "index": 532,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大炫光能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "Crit1"
                        },
                        "sandanta": {
                            "lv": 50,
                            "id": "Crit1"
                        },
                        "paota": {
                            "lv": 50,
                            "id": "Vertigo1"
                        },
                        "xiangqianta": {
                            "lv": 50,
                            "id": "All_Dam1"
                        },
                        "bodongta": {
                            "lv": 25,
                            "id": "Vertigo2"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m5",
                    "name": "强化黄宝石"
                },
                "zi1": {
                    "color": 5,
                    "price": {
                        "gold": 200
                    },
                    "index": -140,
                    "qqvip": "",
                    "nextId": "zi2",
                    "info": "蕴含微弱闪电能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "ChangeRange2"
                        },
                        "sandanta": {
                            "lv": 8,
                            "id": "ChangeRange2"
                        },
                        "paota": {
                            "lv": 10,
                            "id": "Beat1"
                        },
                        "xiangqianta": {
                            "lv": 10,
                            "id": "BouAP1"
                        },
                        "bodongta": {
                            "lv": 5,
                            "id": "Beat2"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m2B",
                    "name": "紫宝石碎片"
                },
                "hei5": {
                    "color": 6,
                    "price": {
                        "coin": 345
                    },
                    "index": -41,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含巨大神秘能量，可用于镶嵌。[无法合成而来]",
                    "sp": {
                        "shaota": {
                            "lv": 50,
                            "id": "ComAP1"
                        },
                        "sandanta": {
                            "lv": 60,
                            "id": "ScaAP1"
                        },
                        "paota": {
                            "lv": 50,
                            "id": "ChangeRange7"
                        },
                        "xiangqianta": {
                            "lv": 30,
                            "id": "Cuss1"
                        },
                        "bodongta": {
                            "lv": 50,
                            "id": "ComAP1"
                        }
                    },
                    "gamLevel": 5,
                    "unlock_mid": "m1",
                    "name": "强化黑宝石"
                },
                "lv4": {
                    "color": 3,
                    "price": {
                        "coin": 125
                    },
                    "index": 410,
                    "qqvip": "",
                    "nextId": "",
                    "info": "蕴含大量毒性能量，可用于镶嵌",
                    "sp": {
                        "shaota": {
                            "lv": 40,
                            "id": "Poison11"
                        },
                        "sandanta": {
                            "lv": 40,
                            "id": "Poison11"
                        },
                        "paota": {
                            "lv": 40,
                            "id": "Poison12"
                        },
                        "xiangqianta": {
                            "lv": 16,
                            "id": "Poison10"
                        },
                        "bodongta": {
                            "lv": 40,
                            "id": "Poison13"
                        }
                    },
                    "gamLevel": 4,
                    "unlock_mid": "m2",
                    "name": "绿宝石精华"
                },
                "hei1": {
                    "color": 6,
                    "price": {
                        "gold": 200
                    },
                    "index": -1,
                    "qqvip": "",
                    "nextId": "hei2",
                    "info": "蕴含微弱神秘能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 10,
                            "id": "ComAP1"
                        },
                        "sandanta": {
                            "lv": 20,
                            "id": "ScaAP1"
                        },
                        "paota": {
                            "lv": 10,
                            "id": "ChangeRange3"
                        },
                        "xiangqianta": {
                            "lv": 10,
                            "id": "Cuss1"
                        },
                        "bodongta": {
                            "lv": 10,
                            "id": "ComAP1"
                        }
                    },
                    "gamLevel": 1,
                    "unlock_mid": "m1",
                    "name": "黑宝石碎片"
                },
                "hong3": {
                    "color": 1,
                    "price": {
                        "coin": 45
                    },
                    "index": 300,
                    "qqvip": "",
                    "nextId": "hong4",
                    "info": "蕴含中等燃烧能量，可用于镶嵌和合成",
                    "sp": {
                        "shaota": {
                            "lv": 30,
                            "id": "BC_B1"
                        },
                        "sandanta": {
                            "lv": 21,
                            "id": "BC_B1"
                        },
                        "paota": {
                            "lv": 45,
                            "id": "BC_B2"
                        },
                        "xiangqianta": {
                            "lv": 60,
                            "id": "BC_B0"
                        },
                        "bodongta": {
                            "lv": 15,
                            "id": "BC_B3"
                        }
                    },
                    "gamLevel": 3,
                    "unlock_mid": "m1",
                    "name": "红宝石"
                }
            },
            "card": {
                "baoxiang_E": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv3",
                                        "hong3",
                                        "lan3",
                                        "zi3",
                                        "huang3",
                                        "hei3"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        2
                    ],
                    "info": "card_76^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "cuantiandan3": 2,
                                "bushoujia3": 2,
                                "baozhatong3": 2
                            }
                        }
                    },
                    "index": -118,
                    "lev": 125,
                    "name": "card_75^豪华噩梦箱"
                },
                "baoxiang12": {
                    "res": "baoxiang11",
                    "bind_buy": 1,
                    "price": {
                        "coin": 990
                    },
                    "resColor": [
                        0,
                        0,
                        0,
                        -110
                    ],
                    "info": "card_48^打开可获得一张{驯鹿宝宝狼卡}、两本{狼经验书Ⅱ}和两本{塔经验书Ⅱ}\n[限购一个]",
                    "default_gift": {
                        "properties": {
                            "card": {
                                "texp_B": 2
                            },
                            "wc": {
                                "sdxhl_card": 1
                            },
                            "tame": {
                                "wexp_B": 2
                            }
                        }
                    },
                    "index": -622,
                    "open_num": [
                        1
                    ],
                    "name": "card_47^驯鹿萌狼礼包"
                },
                "baoxiang_sj": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "hong2",
                                        "huang2",
                                        "lan2",
                                        "lv2",
                                        "zi2",
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.47,
                                    "gem",
                                    [
                                        "hong3",
                                        "huang3",
                                        "lan3",
                                        "lv3",
                                        "zi3",
                                        "hei3"
                                    ]
                                ],
                                [
                                    0.485,
                                    "gem",
                                    [
                                        "hong4",
                                        "huang4",
                                        "lan4",
                                        "lv4",
                                        "zi4",
                                        "hei4"
                                    ]
                                ],
                                [
                                    0.49,
                                    "gem",
                                    [
                                        "hong5",
                                        "huang5",
                                        "lan5",
                                        "lv5",
                                        "zi5",
                                        "hei5"
                                    ]
                                ],
                                [
                                    0.5,
                                    "card",
                                    [
                                        "mc",
                                        "dalic",
                                        "tiegao"
                                    ]
                                ],
                                [
                                    0.506,
                                    "card",
                                    [
                                        "ybb",
                                        "lqxfj"
                                    ]
                                ],
                                [
                                    0.508,
                                    "card",
                                    [
                                        "ybb1",
                                        "lqxfj1"
                                    ]
                                ],
                                [
                                    0.509,
                                    "card",
                                    [
                                        "ybb2",
                                        "lqxfj2"
                                    ]
                                ],
                                [
                                    0.85,
                                    "tame",
                                    [
                                        "tt_C",
                                        "wexp_C"
                                    ]
                                ],
                                [
                                    0.95,
                                    "tame",
                                    [
                                        "tt_D",
                                        "wexp_D"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Sprint_C",
                                        "sb_Invisible_C"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "coin": 38
                    },
                    "qqvip": "",
                    "info": "打开小精灵留下的魔法袋会有怎样的惊喜？！",
                    "index": 680,
                    "open_num": [
                        1
                    ],
                    "name": "魔法袋"
                },
                "mc": {
                    "info": "card_14^充满魔力的铲子，可以用来[移动塔]。移动成功则{消耗}一个",
                    "price": {
                        "coin": 95
                    },
                    "index": 300,
                    "name": "card_13^魔铲"
                },
                "sl1": {
                    "info": "card_18^可以加速塔的建造或升级，使之完成时间提前[2]分钟",
                    "cut_time": 2,
                    "price": {
                        "gold": 200
                    },
                    "index": -400,
                    "name": "card_17^菜鸟沙漏"
                },
                "haojiao_sj": {
                    "hard_ness": "0.8",
                    "boss": [
                        "mhxjl"
                    ],
                    "wolf_proportion": [
                        [
                            0.2,
                            "zibaol"
                        ],
                        [
                            0.4,
                            "shanzeil"
                        ],
                        [
                            0.6,
                            "baozoul"
                        ],
                        [
                            0.8,
                            "dahuil"
                        ],
                        [
                            1,
                            "xiaolangwangl"
                        ]
                    ],
                    "info": "水晶水晶让我预见未来~",
                    "gift": {
                        "properties": {
                            "card": {
                                "baoxiang_sj": 1
                            }
                        }
                    },
                    "price": {
                        "coin": 45
                    },
                    "index": 670,
                    "qqvip": "",
                    "name": "梦幻小精灵"
                },
                "juzi": {
                    "info": "card_80^移除地图上的树木类障碍的必需品\n(（在防线中移除障碍物时会提示使用）)",
                    "price": {
                        "coin": 50,
                        "invite_score": 10
                    },
                    "index": 62,
                    "name": "card_79^锋利的锯子"
                },
                "tiegao": {
                    "info": "card_82^移除地图上的岩石类障碍的必需品\n(（在防线中移除障碍物时会提示使用）)",
                    "price": {
                        "coin": 90
                    },
                    "index": 72,
                    "name": "card_81^精良的铁镐"
                },
                "baoxiang20": {
                    "res": "baoxiang13",
                    "price": {
                        "gold": 108
                    },
                    "resColor": [
                        0,
                        0,
                        0,
                        -100
                    ],
                    "info": "card_62^一个神奇的宝石魔法袋，能开出五颜六色的宝石。",
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.25,
                                    "gem",
                                    [
                                        "hong3"
                                    ]
                                ],
                                [
                                    0.5,
                                    "gem",
                                    [
                                        "huang3"
                                    ]
                                ],
                                [
                                    0.75,
                                    "gem",
                                    [
                                        "lan3"
                                    ]
                                ],
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv3"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "index": -122,
                    "open_num": [
                        1
                    ],
                    "name": "card_61^宝石魔袋"
                },
                "baoxiang7": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "card",
                                    [
                                        "rmbbt"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 345
                    },
                    "info": "card_38^很大一捆{入梦棒棒糖}。标准装是[20]根，运气好或许能多开出几根哦",
                    "index": 80,
                    "open_num": [
                        20,
                        21,
                        22,
                        23
                    ],
                    "name": "card_37^大捆棒棒糖"
                },
                "baoxiang_zn": {
                    "price": {
                        "coin": 690
                    },
                    "info": "card_144^购买七夕织女礼包,打开礼包有{琥珀图腾}1个，{黄金图腾}1个，{狼经验书Ⅳ}1本，{塔经验书Ⅲ}1本，{铁镐}1个\n[免费赠送星辰神灯5个]",
                    "default_gift": {
                        "properties": {
                            "tame": {
                                "tt_D": 1,
                                "tt_C": 1,
                                "wexp_D": 1
                            },
                            "card": {
                                "haojiao_sd1": 5,
                                "texp_C": 1,
                                "tiegao": 1
                            }
                        }
                    },
                    "index": -2,
                    "open_num": [
                        1
                    ],
                    "name": "card_143^织女礼包"
                },
                "haojiao_sd3": {
                    "hard_ness": "1.2",
                    "boss": [
                        "dengshenl3"
                    ],
                    "wolf_proportion": [
                        [
                            0.4,
                            "shanzeil"
                        ],
                        [
                            0.6,
                            "baozoul"
                        ],
                        [
                            0.8,
                            "dahuil"
                        ],
                        [
                            1,
                            "xiaolangwangl"
                        ]
                    ],
                    "info": "card_126^我是烈日神灯~你可以许三个愿望~\n[使用后招出由烈日神狼带领的狼队列，打败烈日神狼会获得烈日宝箱]",
                    "gift": {
                        "properties": {
                            "card": {
                                "baoxiang_sd3": 1
                            }
                        }
                    },
                    "price": {
                        "coin": 195
                    },
                    "index": -15,
                    "name": "card_125^烈日神灯"
                },
                "za_cun_drop": {
                    "info": "card_130^集齐卡片[“羊”]、[“村”]、[“欢”]、[“乐”]、[“颂”]可以换取丰厚奖励~",
                    "res": "za_cun",
                    "price": {
                        "coin": 40
                    },
                    "index": -624,
                    "name": "card_129^“村”"
                },
                "baoxiang_A": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "lan1",
                                        "zi1",
                                        "huang1",
                                        "hei1"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        2
                    ],
                    "info": "card_68^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "dicicao1": 1,
                                "bushoujia1": 1,
                                "baozhatong1": 1
                            }
                        }
                    },
                    "index": -114,
                    "lev": 15,
                    "name": "card_67^迷你噩梦箱"
                },
                "texp_A": {
                    "info": "card_84^增加防线中塔[4500]点经验的书籍\n(（在防线中对塔加经验时提示使用，每天限用[10]本）)",
                    "price": {
                        "coin": 20
                    },
                    "index": 30,
                    "experience": 4500,
                    "name": "card_83^塔经验书Ⅰ"
                },
                "za_huan_drop": {
                    "info": "card_132^集齐卡片[“羊”]、[“村”]、[“欢”]、[“乐”]、[“颂”]可以换取丰厚奖励~",
                    "res": "za_huan",
                    "price": {
                        "coin": 40
                    },
                    "index": -625,
                    "name": "card_131^“欢”"
                },
                "rmbbt": {
                    "info": "card_64^很特别的棒棒糖，送给黑眼圈小羊，就能进入它的{梦境}",
                    "price": {
                        "coin": 25
                    },
                    "index": 90,
                    "name": "card_63^入梦棒棒糖"
                },
                "za_song_drop": {
                    "info": "card_136^集齐卡片[“羊”]、[“村”]、[“欢”]、[“乐”]、[“颂”]可以换取丰厚奖励~",
                    "res": "za_song",
                    "price": {
                        "coin": 40
                    },
                    "index": -627,
                    "name": "card_135^“颂”"
                },
                "baoxiang2": {
                    "data": [
                        [
                            0,
                            "invite_score",
                            [
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.04,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1"
                                    ]
                                ],
                                [
                                    0.08,
                                    "gem",
                                    [
                                        "zi1",
                                        "lan1"
                                    ]
                                ],
                                [
                                    0.31,
                                    "snarp",
                                    [
                                        "baozhatong1",
                                        "dicicao1",
                                        "bushoujia1"
                                    ]
                                ],
                                [
                                    0.36,
                                    "gem",
                                    [
                                        "lv2",
                                        "hong2",
                                        "huang2",
                                        "zi2",
                                        "lan2"
                                    ]
                                ],
                                [
                                    0.48,
                                    "snarp",
                                    [
                                        "baozhatong2"
                                    ]
                                ],
                                [
                                    0.6,
                                    "snarp",
                                    [
                                        "dicicao2"
                                    ]
                                ],
                                [
                                    0.72,
                                    "snarp",
                                    [
                                        "bushoujia2"
                                    ]
                                ],
                                [
                                    0.84,
                                    "snarp",
                                    [
                                        "cuantiandan2"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "sl1",
                                        "sl2"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_28^里面装了什么呢，碰碰运气吧？\n(开启所需等级：)[10]",
                    "index": -102,
                    "need_lev": 10,
                    "open_num": [
                        5,
                        10,
                        15
                    ],
                    "name": "card_27^银宝箱"
                },
                "haojiao_qbt": {
                    "hard_ness": "1.0",
                    "boss": [
                        "daomu7"
                    ],
                    "wolf_proportion": [
                        [
                            0.1,
                            "xiaolangwangl"
                        ],
                        [
                            0.4,
                            "baozul"
                        ],
                        [
                            0.45,
                            "hushil"
                        ],
                        [
                            1,
                            "dahuil"
                        ]
                    ],
                    "info": "card_92^使用后可以引来冒牌丘比特带领的狼群(（有飞行狼，请慎重使用！）)",
                    "gift": {
                        "coin": 25
                    },
                    "price": {
                        "gold": 20
                    },
                    "index": -11,
                    "name": "card_91^丘比特号角"
                },
                "za_le_drop": {
                    "info": "card_134^集齐卡片[“羊”]、[“村”]、[“欢”]、[“乐”]、[“颂”]可以换取丰厚奖励~",
                    "res": "za_le",
                    "price": {
                        "coin": 40
                    },
                    "index": -626,
                    "name": "card_133^“乐”"
                },
                "baoxiang18": {
                    "price": {
                        "gold": 108
                    },
                    "info": "card_60^庆周年、迎回归，打开看看给不给力咯～",
                    "default_gift": {
                        "properties": {
                            "card": {
                                "baoxiang_sd1": 1,
                                "baoxiang_sd2": 1,
                                "baoxiang_tt": 1,
                                "baoxiang9": 1,
                                "baoxiang_sd3": 1,
                                "baoxiang4": 1,
                                "haojiao_sd3": 1,
                                "baoxiang20": 1
                            }
                        }
                    },
                    "index": -121,
                    "open_num": [
                        1
                    ],
                    "name": "card_59^终极礼包"
                },
                "gem_hammer": {
                    "info": "card_138^用来击碎自己塔上的宝石,小心敲坏自己的塔哦~",
                    "price": {
                        "coin": 40
                    },
                    "index": 21,
                    "name": "card_137^粉碎锤"
                },
                "sl2": {
                    "info": "card_20^可以加速塔的建造或升级，使之完成时间提前[20]分钟",
                    "cut_time": 20,
                    "price": {
                        "coin": 40
                    },
                    "index": 410,
                    "name": "card_19^初级沙漏"
                },
                "haojiao_sd2": {
                    "hard_ness": "1.0",
                    "boss": [
                        "dengshenl2"
                    ],
                    "wolf_proportion": [
                        [
                            0.4,
                            "shanzeil"
                        ],
                        [
                            0.6,
                            "baozoul"
                        ],
                        [
                            0.8,
                            "dahuil"
                        ],
                        [
                            1,
                            "xiaolangwangl"
                        ]
                    ],
                    "info": "card_124^我是月光神灯~你可以许二个愿望~\n[使用后招出由月光神狼带领的狼队列，打败月光神狼会获得月光宝箱]",
                    "gift": {
                        "properties": {
                            "card": {
                                "baoxiang_sd2": 1
                            }
                        }
                    },
                    "price": {
                        "coin": 95
                    },
                    "index": -14,
                    "name": "card_123^月光神灯"
                },
                "za_xingchen": {
                    "info": "card_94^天外星辰的碎片，有着神奇的力量蕴含其中。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -440,
                    "name": "card_93^星辰碎片"
                },
                "baoxiang13": {
                    "data": [
                        [
                            0.2,
                            "invite_score",
                            [
                                2,
                                3
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.8,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1",
                                        "lan1",
                                        "zi1"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "rmbbt"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 108
                    },
                    "info": "card_50^精巧的小福袋，不知道装着什么好东西",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "chunjie1": 1
                            }
                        }
                    },
                    "index": -110,
                    "open_num": [
                        2,
                        3
                    ],
                    "name": "card_49^春节小福袋"
                },
                "baoxiang_F": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv3",
                                        "hong3",
                                        "lan3",
                                        "zi3",
                                        "huang3",
                                        "hei3"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        4
                    ],
                    "info": "card_78^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "cuantiandan4": 4,
                                "bushoujia3": 3,
                                "baozhatong3": 3
                            }
                        }
                    },
                    "index": -119,
                    "lev": 150,
                    "name": "card_77^无敌噩梦箱"
                },
                "baoxiang11": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1290
                    },
                    "info": "card_46^打开可获得一张{圣诞小狼王卡}、一本{中级隐身}、两本{狼经验书Ⅲ}和两本{塔经验书Ⅲ}\n[限购一个]",
                    "default_gift": {
                        "properties": {
                            "card": {
                                "texp_C": 2
                            },
                            "wc": {
                                "sdxlw_card": 1
                            },
                            "tame": {
                                "sb_Invisible_B": 1,
                                "wexp_C": 2
                            }
                        }
                    },
                    "index": -612,
                    "open_num": [
                        1
                    ],
                    "name": "card_45^威武狼王礼包"
                },
                "baoxiang_tt": {
                    "res": "baoxiang_tt",
                    "price": {
                        "coin": 56.25
                    },
                    "info": "card_112^图腾满满的样子",
                    "data": [
                        [
                            0,
                            "invite_score",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.7,
                                    "tame",
                                    [
                                        "tt_A"
                                    ]
                                ],
                                [
                                    0.9,
                                    "tame",
                                    [
                                        "tt_B"
                                    ]
                                ],
                                [
                                    0.96,
                                    "tame",
                                    [
                                        "tt_C"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "tt_D"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "index": -150,
                    "open_num": [
                        1,
                        2
                    ],
                    "name": "card_111^图腾宝箱"
                },
                "drws": {
                    "info": "card_66^{消耗道具}，可保留当前地图进度，强制转移到另一地图防守(（在大地图上选择新图时会提示使用）)",
                    "price": {
                        "coin": 95
                    },
                    "index": 222,
                    "name": "card_65^调任文书"
                },
                "baoxiang6": {
                    "data": [
                        [
                            0,
                            "invite_score",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.5,
                                    "gem",
                                    [
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.8,
                                    "gem",
                                    [
                                        "hei3"
                                    ]
                                ],
                                [
                                    0.95,
                                    "gem",
                                    [
                                        "hei4"
                                    ]
                                ],
                                [
                                    1,
                                    "gem",
                                    [
                                        "hei5"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_36^听说里面装了黑宝石，是不是真的啊？\n(开启所需等级：)[30]",
                    "index": -106,
                    "need_lev": 30,
                    "open_num": [
                        2,
                        3
                    ],
                    "name": "card_35^神秘大宝袋"
                },
                "baoxiang14": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Revive_A",
                                        "sb_Summon_A",
                                        "sb_ResistLight_A",
                                        "sb_ResistCrit_A",
                                        "sb_ResistFire_A"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 108
                    },
                    "info": "card_52^鼓鼓的大福袋，一看就知道有好多宝贝在里面",
                    "default_gift": {
                        "invite_score": 30,
                        "properties": {
                            "snarp": {
                                "chunjie1": 3
                            },
                            "tame": {
                                "tt_A": 3,
                                "tt_B": 3
                            },
                            "wc": {
                                "bpbm_card": 1
                            }
                        }
                    },
                    "index": -111,
                    "open_num": [
                        1
                    ],
                    "name": "card_51^春节大福袋"
                },
                "za_bitong_drop": {
                    "info": "card_150^收集教师节特殊道具可兑换丰富奖励\n[打间谍狼、帮好友挖矿、竞技场均可获得]",
                    "price": {
                        "coin": 45
                    },
                    "index": -24,
                    "name": "card_149^笔筒"
                },
                "za_beizi_drop": {
                    "info": "card_152^收集教师节特殊道具可兑换丰富奖励\n[打间谍狼、帮好友挖矿、竞技场均可获得]",
                    "price": {
                        "coin": 45
                    },
                    "index": -25,
                    "name": "card_151^杯子"
                },
                "baoxiang8": {
                    "price": {
                        "gold": 1
                    },
                    "info": "card_40^天啊，里面全是没见过的宝贝，但是用牙咬不开这个盒子\n[资料片更新后即可打开]",
                    "default_gift": {
                        "properties": {
                            "tame": {
                                "sb_ResistFire_A": 1,
                                "tt_B": 6,
                                "sb_Revive_B": 1,
                                "wexp_B": 5
                            },
                            "card": {
                                "texp_B": 5,
                                "juzi": 5,
                                "tiegao": 5
                            }
                        }
                    },
                    "index": -107,
                    "open_num": [
                        1
                    ],
                    "name": "card_39^新版大礼包"
                },
                "baoxiang_nl": {
                    "price": {
                        "coin": 830
                    },
                    "info": "card_142^购买七夕牛郎礼包，打开礼包有{大力锤}1个，{初级稻草羊}1个，{初级留声机}1个，{强化黑宝石}1个\n[免费赠送星辰神灯5个]",
                    "default_gift": {
                        "properties": {
                            "gem": {
                                "hei5": 1
                            },
                            "card": {
                                "dalic": 1,
                                "ybb": 1,
                                "haojiao_sd1": 5,
                                "lqxfj": 1
                            }
                        }
                    },
                    "index": -12,
                    "open_num": [
                        1
                    ],
                    "name": "card_141^牛郎礼包"
                },
                "za_jinggang": {
                    "info": "card_98^黑黑的一块矿石，硬度难以想象。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -460,
                    "name": "card_97^精钢矿石"
                },
                "sl4": {
                    "info": "card_24^可以加速塔的建造或升级，使之完成时间提前[100]分钟",
                    "cut_time": 100,
                    "price": {
                        "coin": 175
                    },
                    "index": 430,
                    "name": "card_23^高级沙漏"
                },
                "qixi2Icon": {
                    "info": "card_146^sdfsdf2",
                    "res": "qixi2Icon",
                    "price": {
                        "coin": 0
                    },
                    "index": -580,
                    "name": "card_145^12kuihkj"
                },
                "za_nianzhuo": {
                    "info": "card_100^粘稠的液体，风干之后可以粘着任何物体。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -470,
                    "name": "card_99^超级粘着剂"
                },
                "baoxiang_DW": {
                    "res": "baoxiang_DW",
                    "price": {
                        "coin": 16
                    },
                    "info": "card_110^香香的粽子，满满的惊喜~",
                    "data": [
                        [
                            0.05,
                            "invite_score",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            0.4,
                            "properties",
                            [
                                [
                                    0.2,
                                    "gem",
                                    [
                                        "hong1"
                                    ]
                                ],
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "huang1"
                                    ]
                                ],
                                [
                                    0.6,
                                    "gem",
                                    [
                                        "lan1"
                                    ]
                                ],
                                [
                                    0.8,
                                    "gem",
                                    [
                                        "lv1"
                                    ]
                                ],
                                [
                                    1,
                                    "gem",
                                    [
                                        "hei1"
                                    ]
                                ]
                            ]
                        ],
                        [
                            0.75,
                            "properties",
                            [
                                [
                                    0.25,
                                    "snarp",
                                    [
                                        "dicicao1"
                                    ]
                                ],
                                [
                                    0.5,
                                    "snarp",
                                    [
                                        "bushoujia1"
                                    ]
                                ],
                                [
                                    0.75,
                                    "snarp",
                                    [
                                        "baozhatong1"
                                    ]
                                ],
                                [
                                    1,
                                    "snarp",
                                    [
                                        "cuantiandan2"
                                    ]
                                ]
                            ]
                        ],
                        [
                            0.9,
                            "properties",
                            [
                                [
                                    0.6,
                                    "tame",
                                    [
                                        "tt_A"
                                    ]
                                ],
                                [
                                    0.8,
                                    "tame",
                                    [
                                        "tt_B"
                                    ]
                                ],
                                [
                                    0.9,
                                    "tame",
                                    [
                                        "tt_C"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_ResistFire_A"
                                    ]
                                ]
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.2,
                                    "card",
                                    [
                                        "ybb"
                                    ]
                                ],
                                [
                                    0.5,
                                    "card",
                                    [
                                        "lqxfj"
                                    ]
                                ],
                                [
                                    0.8,
                                    "card",
                                    [
                                        "dalic"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "tiegao"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "index": -140,
                    "open_num": [
                        1,
                        2
                    ],
                    "name": "card_109^羊村粽子"
                },
                "baoxiang_sd3": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "hong2",
                                        "huang2",
                                        "lan2",
                                        "lv2",
                                        "zi2",
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.47,
                                    "gem",
                                    [
                                        "hong3",
                                        "huang3",
                                        "lan3",
                                        "lv3",
                                        "zi3",
                                        "hei3"
                                    ]
                                ],
                                [
                                    0.485,
                                    "gem",
                                    [
                                        "hong4",
                                        "huang4",
                                        "lan4",
                                        "lv4",
                                        "zi4",
                                        "hei4"
                                    ]
                                ],
                                [
                                    0.49,
                                    "gem",
                                    [
                                        "hong5",
                                        "huang5",
                                        "lan5",
                                        "lv5",
                                        "zi5",
                                        "hei5"
                                    ]
                                ],
                                [
                                    0.5,
                                    "card",
                                    [
                                        "mc",
                                        "dalic",
                                        "tiegao"
                                    ]
                                ],
                                [
                                    0.506,
                                    "card",
                                    [
                                        "ybb",
                                        "lqxfj"
                                    ]
                                ],
                                [
                                    0.508,
                                    "card",
                                    [
                                        "ybb1",
                                        "lqxfj1"
                                    ]
                                ],
                                [
                                    0.509,
                                    "card",
                                    [
                                        "ybb2",
                                        "lqxfj2"
                                    ]
                                ],
                                [
                                    0.909,
                                    "tame",
                                    [
                                        "tt_A",
                                        "wexp_A"
                                    ]
                                ],
                                [
                                    0.979,
                                    "tame",
                                    [
                                        "tt_B",
                                        "wexp_B"
                                    ]
                                ],
                                [
                                    0.994,
                                    "tame",
                                    [
                                        "tt_C",
                                        "wexp_C"
                                    ]
                                ],
                                [
                                    0.999,
                                    "tame",
                                    [
                                        "tt_D",
                                        "wexp_D"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Sprint_C",
                                        "sb_Invisible_C"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "coin": 114
                    },
                    "info": "card_120^哇塞！愿望就在里面耶！",
                    "index": -126,
                    "open_num": [
                        3
                    ],
                    "name": "card_119^烈日宝箱"
                },
                "dalic": {
                    "info": "card_16^充满力量的神器，使用后[24]小时内提升自身力量[20]点。",
                    "use_time": 1440,
                    "price": {
                        "coin": 145
                    },
                    "index": 310,
                    "name": "card_15^大力锤"
                },
                "za_gangbi_drop": {
                    "info": "card_148^收集教师节特殊道具可兑换丰富奖励\n[打间谍狼、帮好友挖矿、竞技场均可获得]",
                    "price": {
                        "coin": 45
                    },
                    "index": -23,
                    "name": "card_147^钢笔"
                },
                "lqxfj": {
                    "price": {
                        "coin": 145
                    },
                    "wolf_max": 30,
                    "info": "card_8^羊村周围设立稻草羊，供狼群解闷。使用后，{当前前线地图}狼群聚集上限提高至[30]波",
                    "dif_val": 10,
                    "index": 350,
                    "name": "card_7^初级稻草羊"
                },
                "gem_opener": {
                    "info": "card_140^用来摘取自己塔上的宝石",
                    "price": {
                        "coin": 345
                    },
                    "index": 22,
                    "name": "card_139^神奇的起子"
                },
                "baoxiang16": {
                    "data": [
                        [
                            0.1,
                            "properties",
                            [
                                [
                                    1,
                                    "card",
                                    [
                                        "haojiao_qbt"
                                    ]
                                ]
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.8,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1",
                                        "lan1",
                                        "zi1"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "rmbbt"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 108
                    },
                    "info": "card_56^镶有玫瑰的精致礼盒，或许能开出好东西哦",
                    "index": -113,
                    "open_num": [
                        2,
                        3
                    ],
                    "name": "card_55^温情玫瑰"
                },
                "texp_B": {
                    "info": "card_86^增加防线中塔[10000]点经验的书籍\n(（在防线中对塔加经验时提示使用，每天限用[10]本）)",
                    "price": {
                        "coin": 40
                    },
                    "index": 40,
                    "experience": 10000,
                    "name": "card_85^塔经验书Ⅱ"
                },
                "haojiao_sd1": {
                    "hard_ness": "0.8",
                    "boss": [
                        "dengshenl1"
                    ],
                    "wolf_proportion": [
                        [
                            0.4,
                            "shanzeil"
                        ],
                        [
                            0.6,
                            "baozoul"
                        ],
                        [
                            0.8,
                            "dahuil"
                        ],
                        [
                            1,
                            "xiaolangwangl"
                        ]
                    ],
                    "info": "card_122^我是星辰神灯~你可以许一个愿望~\n[使用后招出由星辰神狼带领的狼队列，打败星辰神狼会获得星辰宝箱]",
                    "gift": {
                        "properties": {
                            "card": {
                                "baoxiang_sd1": 1
                            }
                        }
                    },
                    "price": {
                        "coin": 45
                    },
                    "index": -13,
                    "name": "card_121^星辰神灯"
                },
                "ybb": {
                    "price": {
                        "coin": 195
                    },
                    "wolf_cycle": 20,
                    "info": "card_2^循环播放羊叫，赚得狼群更多口水。使用后，{当前前线地图}狼群聚集时间缩短至[20]分钟/波",
                    "wolftime": 24,
                    "index": 200,
                    "name": "card_1^初级留声机"
                },
                "baoxiang_D": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv2",
                                        "hong2",
                                        "lan2",
                                        "zi2",
                                        "huang2",
                                        "hei2"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        4
                    ],
                    "info": "card_74^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "bushoujia3": 1,
                                "baozhatong3": 1,
                                "cuantiandan2": 1
                            }
                        }
                    },
                    "index": -117,
                    "lev": 100,
                    "name": "card_73^精品噩梦箱"
                },
                "za_yang_drop": {
                    "info": "card_128^集齐卡片[“羊”]、[“村”]、[“欢”]、[“乐”]、[“颂”]可以换取丰厚奖励~",
                    "res": "za_yang",
                    "price": {
                        "coin": 40
                    },
                    "index": -623,
                    "name": "card_127^“羊”"
                },
                "baoxiang9": {
                    "res": "baoxiang4",
                    "price": {
                        "gold": 1
                    },
                    "resColor": [
                        0,
                        0,
                        0,
                        -30
                    ],
                    "info": "card_42^一个鼓鼓的礼包，打开来发现都是好东东~",
                    "default_gift": {
                        "properties": {
                            "tame": {
                                "tt_A": 3,
                                "wexp_A": 1
                            },
                            "card": {
                                "texp_A": 1
                            }
                        }
                    },
                    "index": -108,
                    "open_num": [
                        1
                    ],
                    "name": "card_41^登陆大礼包"
                },
                "baoxiang10": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Revive_A",
                                        "sb_Summon_A",
                                        "sb_ResistFire_A"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 1
                    },
                    "info": "card_44^圣诞节特制的礼品袜子，传说只有挂在床头才能收到圣诞老羊羊空投的礼物",
                    "default_gift": {
                        "invite_score": 30,
                        "properties": {
                            "snarp": {
                                "baozhatong2": 2
                            },
                            "card": {
                                "texp_A": 3
                            },
                            "tame": {
                                "tt_B": 3
                            }
                        }
                    },
                    "index": -109,
                    "open_num": [
                        1
                    ],
                    "name": "card_43^圣诞袜子"
                },
                "ybb1": {
                    "before": "ybb",
                    "price": {
                        "coin": 395
                    },
                    "wolf_cycle": 16,
                    "info": "card_4^使用后，{当前前线地图}狼群聚集时间缩短至[16]分钟/波。{需要先使用初级留声机}",
                    "wolftime": 20,
                    "index": 210,
                    "name": "card_3^中级留声机"
                },
                "baoxiang_B": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "lan1",
                                        "zi1",
                                        "huang1",
                                        "hei1"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        4
                    ],
                    "info": "card_70^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "dicicao2": 1,
                                "baozhatong2": 1,
                                "bushoujia2": 1
                            }
                        }
                    },
                    "index": -115,
                    "lev": 45,
                    "name": "card_69^普通噩梦箱"
                },
                "lqxfj1": {
                    "before": "lqxfj",
                    "price": {
                        "coin": 245
                    },
                    "wolf_max": 45,
                    "info": "card_10^使用后，{当前前线地图}狼群聚集上限提高至[45]波。{需要先使用初级稻草羊}",
                    "dif_val": 15,
                    "index": 360,
                    "name": "card_9^中级稻草羊"
                },
                "ybb2": {
                    "before": "ybb1",
                    "price": {
                        "coin": 745
                    },
                    "wolf_cycle": 12,
                    "info": "card_6^使用后，{当前前线地图}狼群聚集时间缩短至[12]分钟/波。{需要先使用中级留声机}",
                    "wolftime": 16,
                    "index": 220,
                    "name": "card_5^高级留声机"
                },
                "baoxiang5": {
                    "data": [
                        [
                            0,
                            "invite_score",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.7,
                                    "gem",
                                    [
                                        "hei1"
                                    ]
                                ],
                                [
                                    0.9,
                                    "gem",
                                    [
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.97,
                                    "gem",
                                    [
                                        "hei3"
                                    ]
                                ],
                                [
                                    1,
                                    "gem",
                                    [
                                        "hei4"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_34^听说里面装了黑宝石，是不是真的啊？\n(开启所需等级：)[15]",
                    "index": -105,
                    "need_lev": 15,
                    "open_num": [
                        1,
                        2
                    ],
                    "name": "card_33^神秘小宝袋"
                },
                "liuyi3Icon": {
                    "info": "card_108^",
                    "price": {
                        "coin": 5
                    },
                    "index": -520,
                    "name": "card_107^"
                },
                "lqxfj2": {
                    "before": "lqxfj1",
                    "price": {
                        "coin": 445
                    },
                    "wolf_max": 65,
                    "info": "card_12^使用后，{当前前线地图}狼群聚集上限提高至[65]波。{需要先使用中级稻草羊}",
                    "dif_val": 20,
                    "index": 370,
                    "name": "card_11^高级稻草羊"
                },
                "baoxiang1": {
                    "data": [
                        [
                            0,
                            "invite_score",
                            [
                                0,
                                0
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.08,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1"
                                    ]
                                ],
                                [
                                    0.16,
                                    "gem",
                                    [
                                        "zi1",
                                        "lan1"
                                    ]
                                ],
                                [
                                    0.44,
                                    "snarp",
                                    [
                                        "baozhatong1"
                                    ]
                                ],
                                [
                                    0.72,
                                    "snarp",
                                    [
                                        "dicicao1"
                                    ]
                                ],
                                [
                                    1,
                                    "snarp",
                                    [
                                        "bushoujia1"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_26^里面装了什么呢，碰碰运气吧？",
                    "index": -101,
                    "open_num": [
                        10,
                        20,
                        30
                    ],
                    "name": "card_25^铜宝箱"
                },
                "baoxiang_sd2": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "hong2",
                                        "huang2",
                                        "lan2",
                                        "lv2",
                                        "zi2",
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.47,
                                    "gem",
                                    [
                                        "hong3",
                                        "huang3",
                                        "lan3",
                                        "lv3",
                                        "zi3",
                                        "hei3"
                                    ]
                                ],
                                [
                                    0.485,
                                    "gem",
                                    [
                                        "hong4",
                                        "huang4",
                                        "lan4",
                                        "lv4",
                                        "zi4",
                                        "hei4"
                                    ]
                                ],
                                [
                                    0.49,
                                    "gem",
                                    [
                                        "hong5",
                                        "huang5",
                                        "lan5",
                                        "lv5",
                                        "zi5",
                                        "hei5"
                                    ]
                                ],
                                [
                                    0.5,
                                    "card",
                                    [
                                        "mc",
                                        "dalic",
                                        "tiegao"
                                    ]
                                ],
                                [
                                    0.506,
                                    "card",
                                    [
                                        "ybb",
                                        "lqxfj"
                                    ]
                                ],
                                [
                                    0.508,
                                    "card",
                                    [
                                        "ybb1",
                                        "lqxfj1"
                                    ]
                                ],
                                [
                                    0.509,
                                    "card",
                                    [
                                        "ybb2",
                                        "lqxfj2"
                                    ]
                                ],
                                [
                                    0.909,
                                    "tame",
                                    [
                                        "tt_A",
                                        "wexp_A"
                                    ]
                                ],
                                [
                                    0.979,
                                    "tame",
                                    [
                                        "tt_B",
                                        "wexp_B"
                                    ]
                                ],
                                [
                                    0.994,
                                    "tame",
                                    [
                                        "tt_C",
                                        "wexp_C"
                                    ]
                                ],
                                [
                                    0.999,
                                    "tame",
                                    [
                                        "tt_D",
                                        "wexp_D"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Sprint_C",
                                        "sb_Invisible_C"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "coin": 76
                    },
                    "info": "card_118^哇塞！愿望就在里面耶！",
                    "index": -125,
                    "open_num": [
                        2
                    ],
                    "name": "card_117^月光宝箱"
                },
                "za_jinyang": {
                    "info": "card_106^一只黄金制成的羊,打间谍狼或帮好友挖矿可有几率获得",
                    "price": {
                        "invite_score": 1
                    },
                    "index": -510,
                    "name": "card_105^黄金羊羊"
                },
                "za_baozha": {
                    "info": "card_104^暴躁的能量体，随时都有可能有强大的力量爆发出来。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -490,
                    "name": "card_103^爆炸之源"
                },
                "baoxiang4": {
                    "data": [
                        [
                            0.2,
                            "invite_score",
                            [
                                5
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.1,
                                    "gem",
                                    [
                                        "lv4",
                                        "hong4",
                                        "huang4",
                                        "zi4",
                                        "lan4"
                                    ]
                                ],
                                [
                                    0.3,
                                    "snarp",
                                    [
                                        "baozhatong3"
                                    ]
                                ],
                                [
                                    0.5,
                                    "snarp",
                                    [
                                        "bushoujia2"
                                    ]
                                ],
                                [
                                    0.7,
                                    "snarp",
                                    [
                                        "dicicao2"
                                    ]
                                ],
                                [
                                    0.9,
                                    "card",
                                    [
                                        "sl4"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "mc"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        0
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_32^超值神秘大礼包，里面藏有好东东哦~~",
                    "index": -104,
                    "open_num": [
                        5
                    ],
                    "name": "card_31^神秘礼物"
                },
                "za_baozhen_drop": {
                    "info": "card_154^收集教师节特殊道具可兑换丰富奖励\n[打间谍狼、帮好友挖矿、竞技场均可获得]",
                    "price": {
                        "coin": 45
                    },
                    "index": -26,
                    "name": "card_153^抱枕"
                },
                "haojiao_ns": {
                    "hard_ness": "1.0",
                    "boss": [
                        "H_ns",
                        "H_bld"
                    ],
                    "wolf_proportion": [
                        [
                            0.5,
                            "zibaol"
                        ],
                        [
                            1,
                            "dahuil"
                        ]
                    ],
                    "info": "card_90^使用后可以引来由“年兽”和笨・狼灯带领的狼群",
                    "gift": {
                        "properties": {
                            "card": {
                                "baoxiang15": 1
                            }
                        }
                    },
                    "price": {
                        "gold": 20
                    },
                    "index": -10,
                    "name": "card_89^春节号角"
                },
                "sl3": {
                    "info": "card_22^可以加速塔的建造或升级，使之完成时间提前[50]分钟",
                    "cut_time": 50,
                    "price": {
                        "coin": 95
                    },
                    "index": 420,
                    "name": "card_21^中级沙漏"
                },
                "baoxiang17": {
                    "price": {
                        "gold": 108
                    },
                    "info": "card_58^献给保卫羊村回归老用户的给力礼包，开包有惊喜哦～",
                    "default_gift": {
                        "properties": {
                            "gem": {
                                "hong5": 2
                            },
                            "card": {
                                "texp_C": 1,
                                "lqxfj": 1,
                                "drws": 1,
                                "juzi": 1,
                                "ybb": 1,
                                "tiegao": 1
                            },
                            "wc": {
                                "sdal_card": 1
                            },
                            "tame": {
                                "wexp_C": 1
                            }
                        }
                    },
                    "index": -120,
                    "open_num": [
                        1
                    ],
                    "name": "card_57^回归大礼包"
                },
                "baoxiang3": {
                    "data": [
                        [
                            0.1,
                            "invite_score",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.05,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1"
                                    ]
                                ],
                                [
                                    0.1,
                                    "gem",
                                    [
                                        "zi1",
                                        "lan1"
                                    ]
                                ],
                                [
                                    0.2,
                                    "gem",
                                    [
                                        "lv2",
                                        "hong2",
                                        "huang2",
                                        "zi2",
                                        "lan2"
                                    ]
                                ],
                                [
                                    0.35,
                                    "snarp",
                                    [
                                        "baozhatong1",
                                        "dicicao1",
                                        "bushoujia1"
                                    ]
                                ],
                                [
                                    0.4,
                                    "snarp",
                                    [
                                        "baozhatong2",
                                        "cuantiandan2"
                                    ]
                                ],
                                [
                                    0.45,
                                    "snarp",
                                    [
                                        "bushoujia2",
                                        "cuantiandan2"
                                    ]
                                ],
                                [
                                    0.5,
                                    "snarp",
                                    [
                                        "dicicao2",
                                        "cuantiandan2"
                                    ]
                                ],
                                [
                                    0.55,
                                    "snarp",
                                    [
                                        "baozhatong3"
                                    ]
                                ],
                                [
                                    0.6,
                                    "snarp",
                                    [
                                        "cuantiandan3"
                                    ]
                                ],
                                [
                                    0.65,
                                    "card",
                                    [
                                        "sl1",
                                        "sl2",
                                        "sl3"
                                    ]
                                ],
                                [
                                    0.75,
                                    "gem",
                                    [
                                        "lv3",
                                        "hong3",
                                        "huang3",
                                        "zi3",
                                        "lan3"
                                    ]
                                ],
                                [
                                    0.85,
                                    "gem",
                                    [
                                        "lv4",
                                        "hong4",
                                        "huang4",
                                        "zi4",
                                        "lan4"
                                    ]
                                ],
                                [
                                    1,
                                    "card",
                                    [
                                        "mc",
                                        "sl3",
                                        "sl4"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "gold": [
                        4000,
                        4001,
                        4002,
                        4003,
                        4004,
                        4005,
                        4006,
                        4007,
                        4008,
                        4009,
                        4010,
                        4011,
                        4012,
                        4013,
                        4014,
                        4015,
                        4016,
                        4017,
                        4018,
                        4019,
                        4020,
                        4021,
                        4022,
                        4023,
                        4024,
                        4025,
                        4026,
                        4027,
                        4028,
                        4029,
                        4030,
                        4031,
                        4032,
                        4033,
                        4034,
                        4035,
                        4036,
                        4037,
                        4038,
                        4039,
                        4040,
                        4041,
                        4042,
                        4043,
                        4044,
                        4045,
                        4046,
                        4047,
                        4048,
                        4049,
                        4050,
                        4051,
                        4052,
                        4053,
                        4054,
                        4055,
                        4056,
                        4057,
                        4058,
                        4059,
                        4060,
                        4061,
                        4062,
                        4063,
                        4064,
                        4065,
                        4066,
                        4067,
                        4068,
                        4069,
                        4070,
                        4071,
                        4072,
                        4073,
                        4074,
                        4075,
                        4076,
                        4077,
                        4078,
                        4079,
                        4080,
                        4081,
                        4082,
                        4083,
                        4084,
                        4085,
                        4086,
                        4087,
                        4088,
                        4089,
                        4090,
                        4091,
                        4092,
                        4093,
                        4094,
                        4095,
                        4096,
                        4097,
                        4098,
                        4099,
                        4100,
                        4101,
                        4102,
                        4103,
                        4104,
                        4105,
                        4106,
                        4107,
                        4108,
                        4109,
                        4110,
                        4111,
                        4112,
                        4113,
                        4114,
                        4115,
                        4116,
                        4117,
                        4118,
                        4119,
                        4120,
                        4121,
                        4122,
                        4123,
                        4124,
                        4125,
                        4126,
                        4127,
                        4128,
                        4129,
                        4130,
                        4131,
                        4132,
                        4133,
                        4134,
                        4135,
                        4136,
                        4137,
                        4138,
                        4139,
                        4140,
                        4141,
                        4142,
                        4143,
                        4144,
                        4145,
                        4146,
                        4147,
                        4148,
                        4149,
                        4150,
                        4151,
                        4152,
                        4153,
                        4154,
                        4155,
                        4156,
                        4157,
                        4158,
                        4159,
                        4160,
                        4161,
                        4162,
                        4163,
                        4164,
                        4165,
                        4166,
                        4167,
                        4168,
                        4169,
                        4170,
                        4171,
                        4172,
                        4173,
                        4174,
                        4175,
                        4176,
                        4177,
                        4178,
                        4179,
                        4180,
                        4181,
                        4182,
                        4183,
                        4184,
                        4185,
                        4186,
                        4187,
                        4188,
                        4189,
                        4190,
                        4191,
                        4192,
                        4193,
                        4194,
                        4195,
                        4196,
                        4197,
                        4198,
                        4199,
                        4200,
                        4201,
                        4202,
                        4203,
                        4204,
                        4205,
                        4206,
                        4207,
                        4208,
                        4209,
                        4210,
                        4211,
                        4212,
                        4213,
                        4214,
                        4215,
                        4216,
                        4217,
                        4218,
                        4219,
                        4220,
                        4221,
                        4222,
                        4223,
                        4224,
                        4225,
                        4226,
                        4227,
                        4228,
                        4229,
                        4230,
                        4231,
                        4232,
                        4233,
                        4234,
                        4235,
                        4236,
                        4237,
                        4238,
                        4239,
                        4240,
                        4241,
                        4242,
                        4243,
                        4244,
                        4245,
                        4246,
                        4247,
                        4248,
                        4249,
                        4250,
                        4251,
                        4252,
                        4253,
                        4254,
                        4255,
                        4256,
                        4257,
                        4258,
                        4259,
                        4260,
                        4261,
                        4262,
                        4263,
                        4264,
                        4265,
                        4266,
                        4267,
                        4268,
                        4269,
                        4270,
                        4271,
                        4272,
                        4273,
                        4274,
                        4275,
                        4276,
                        4277,
                        4278,
                        4279,
                        4280,
                        4281,
                        4282,
                        4283,
                        4284,
                        4285,
                        4286,
                        4287,
                        4288,
                        4289,
                        4290,
                        4291,
                        4292,
                        4293,
                        4294,
                        4295,
                        4296,
                        4297,
                        4298,
                        4299,
                        4300,
                        4301,
                        4302,
                        4303,
                        4304,
                        4305,
                        4306,
                        4307,
                        4308,
                        4309,
                        4310,
                        4311,
                        4312,
                        4313,
                        4314,
                        4315,
                        4316,
                        4317,
                        4318,
                        4319,
                        4320,
                        4321,
                        4322,
                        4323,
                        4324,
                        4325,
                        4326,
                        4327,
                        4328,
                        4329,
                        4330,
                        4331,
                        4332,
                        4333,
                        4334,
                        4335,
                        4336,
                        4337,
                        4338,
                        4339,
                        4340,
                        4341,
                        4342,
                        4343,
                        4344,
                        4345,
                        4346,
                        4347,
                        4348,
                        4349,
                        4350,
                        4351,
                        4352,
                        4353,
                        4354,
                        4355,
                        4356,
                        4357,
                        4358,
                        4359,
                        4360,
                        4361,
                        4362,
                        4363,
                        4364,
                        4365,
                        4366,
                        4367,
                        4368,
                        4369,
                        4370,
                        4371,
                        4372,
                        4373,
                        4374,
                        4375,
                        4376,
                        4377,
                        4378,
                        4379,
                        4380,
                        4381,
                        4382,
                        4383,
                        4384,
                        4385,
                        4386,
                        4387,
                        4388,
                        4389,
                        4390,
                        4391,
                        4392,
                        4393,
                        4394,
                        4395,
                        4396,
                        4397,
                        4398,
                        4399,
                        4400,
                        4401,
                        4402,
                        4403,
                        4404,
                        4405,
                        4406,
                        4407,
                        4408,
                        4409,
                        4410,
                        4411,
                        4412,
                        4413,
                        4414,
                        4415,
                        4416,
                        4417,
                        4418,
                        4419,
                        4420,
                        4421,
                        4422,
                        4423,
                        4424,
                        4425,
                        4426,
                        4427,
                        4428,
                        4429,
                        4430,
                        4431,
                        4432,
                        4433,
                        4434,
                        4435,
                        4436,
                        4437,
                        4438,
                        4439,
                        4440,
                        4441,
                        4442,
                        4443,
                        4444,
                        4445,
                        4446,
                        4447,
                        4448,
                        4449,
                        4450,
                        4451,
                        4452,
                        4453,
                        4454,
                        4455,
                        4456,
                        4457,
                        4458,
                        4459,
                        4460,
                        4461,
                        4462,
                        4463,
                        4464,
                        4465,
                        4466,
                        4467,
                        4468,
                        4469,
                        4470,
                        4471,
                        4472,
                        4473,
                        4474,
                        4475,
                        4476,
                        4477,
                        4478,
                        4479,
                        4480,
                        4481,
                        4482,
                        4483,
                        4484,
                        4485,
                        4486,
                        4487,
                        4488,
                        4489,
                        4490,
                        4491,
                        4492,
                        4493,
                        4494,
                        4495,
                        4496,
                        4497,
                        4498,
                        4499,
                        4500,
                        4501,
                        4502,
                        4503,
                        4504,
                        4505,
                        4506,
                        4507,
                        4508,
                        4509,
                        4510,
                        4511,
                        4512,
                        4513,
                        4514,
                        4515,
                        4516,
                        4517,
                        4518,
                        4519,
                        4520,
                        4521,
                        4522,
                        4523,
                        4524,
                        4525,
                        4526,
                        4527,
                        4528,
                        4529,
                        4530,
                        4531,
                        4532,
                        4533,
                        4534,
                        4535,
                        4536,
                        4537,
                        4538,
                        4539,
                        4540,
                        4541,
                        4542,
                        4543,
                        4544,
                        4545,
                        4546,
                        4547,
                        4548,
                        4549,
                        4550,
                        4551,
                        4552,
                        4553,
                        4554,
                        4555,
                        4556,
                        4557,
                        4558,
                        4559,
                        4560,
                        4561,
                        4562,
                        4563,
                        4564,
                        4565,
                        4566,
                        4567,
                        4568,
                        4569,
                        4570,
                        4571,
                        4572,
                        4573,
                        4574,
                        4575,
                        4576,
                        4577,
                        4578,
                        4579,
                        4580,
                        4581,
                        4582,
                        4583,
                        4584,
                        4585,
                        4586,
                        4587,
                        4588,
                        4589,
                        4590,
                        4591,
                        4592,
                        4593,
                        4594,
                        4595,
                        4596,
                        4597,
                        4598,
                        4599,
                        4600,
                        4601,
                        4602,
                        4603,
                        4604,
                        4605,
                        4606,
                        4607,
                        4608,
                        4609,
                        4610,
                        4611,
                        4612,
                        4613,
                        4614,
                        4615,
                        4616,
                        4617,
                        4618,
                        4619,
                        4620,
                        4621,
                        4622,
                        4623,
                        4624,
                        4625,
                        4626,
                        4627,
                        4628,
                        4629,
                        4630,
                        4631,
                        4632,
                        4633,
                        4634,
                        4635,
                        4636,
                        4637,
                        4638,
                        4639,
                        4640,
                        4641,
                        4642,
                        4643,
                        4644,
                        4645,
                        4646,
                        4647,
                        4648,
                        4649,
                        4650,
                        4651,
                        4652,
                        4653,
                        4654,
                        4655,
                        4656,
                        4657,
                        4658,
                        4659,
                        4660,
                        4661,
                        4662,
                        4663,
                        4664,
                        4665,
                        4666,
                        4667,
                        4668,
                        4669,
                        4670,
                        4671,
                        4672,
                        4673,
                        4674,
                        4675,
                        4676,
                        4677,
                        4678,
                        4679,
                        4680,
                        4681,
                        4682,
                        4683,
                        4684,
                        4685,
                        4686,
                        4687,
                        4688,
                        4689,
                        4690,
                        4691,
                        4692,
                        4693,
                        4694,
                        4695,
                        4696,
                        4697,
                        4698,
                        4699,
                        4700,
                        4701,
                        4702,
                        4703,
                        4704,
                        4705,
                        4706,
                        4707,
                        4708,
                        4709,
                        4710,
                        4711,
                        4712,
                        4713,
                        4714,
                        4715,
                        4716,
                        4717,
                        4718,
                        4719,
                        4720,
                        4721,
                        4722,
                        4723,
                        4724,
                        4725,
                        4726,
                        4727,
                        4728,
                        4729,
                        4730,
                        4731,
                        4732,
                        4733,
                        4734,
                        4735,
                        4736,
                        4737,
                        4738,
                        4739,
                        4740,
                        4741,
                        4742,
                        4743,
                        4744,
                        4745,
                        4746,
                        4747,
                        4748,
                        4749,
                        4750,
                        4751,
                        4752,
                        4753,
                        4754,
                        4755,
                        4756,
                        4757,
                        4758,
                        4759,
                        4760,
                        4761,
                        4762,
                        4763,
                        4764,
                        4765,
                        4766,
                        4767,
                        4768,
                        4769,
                        4770,
                        4771,
                        4772,
                        4773,
                        4774,
                        4775,
                        4776,
                        4777,
                        4778,
                        4779,
                        4780,
                        4781,
                        4782,
                        4783,
                        4784,
                        4785,
                        4786,
                        4787,
                        4788,
                        4789,
                        4790,
                        4791,
                        4792,
                        4793,
                        4794,
                        4795,
                        4796,
                        4797,
                        4798,
                        4799,
                        4800,
                        4801,
                        4802,
                        4803,
                        4804,
                        4805,
                        4806,
                        4807,
                        4808,
                        4809,
                        4810,
                        4811,
                        4812,
                        4813,
                        4814,
                        4815,
                        4816,
                        4817,
                        4818,
                        4819,
                        4820,
                        4821,
                        4822,
                        4823,
                        4824,
                        4825,
                        4826,
                        4827,
                        4828,
                        4829,
                        4830,
                        4831,
                        4832,
                        4833,
                        4834,
                        4835,
                        4836,
                        4837,
                        4838,
                        4839,
                        4840,
                        4841,
                        4842,
                        4843,
                        4844,
                        4845,
                        4846,
                        4847,
                        4848,
                        4849,
                        4850,
                        4851,
                        4852,
                        4853,
                        4854,
                        4855,
                        4856,
                        4857,
                        4858,
                        4859,
                        4860,
                        4861,
                        4862,
                        4863,
                        4864,
                        4865,
                        4866,
                        4867,
                        4868,
                        4869,
                        4870,
                        4871,
                        4872,
                        4873,
                        4874,
                        4875,
                        4876,
                        4877,
                        4878,
                        4879,
                        4880,
                        4881,
                        4882,
                        4883,
                        4884,
                        4885,
                        4886,
                        4887,
                        4888,
                        4889,
                        4890,
                        4891,
                        4892,
                        4893,
                        4894,
                        4895,
                        4896,
                        4897,
                        4898,
                        4899,
                        4900,
                        4901,
                        4902,
                        4903,
                        4904,
                        4905,
                        4906,
                        4907,
                        4908,
                        4909,
                        4910,
                        4911,
                        4912,
                        4913,
                        4914,
                        4915,
                        4916,
                        4917,
                        4918,
                        4919,
                        4920,
                        4921,
                        4922,
                        4923,
                        4924,
                        4925,
                        4926,
                        4927,
                        4928,
                        4929,
                        4930,
                        4931,
                        4932,
                        4933,
                        4934,
                        4935,
                        4936,
                        4937,
                        4938,
                        4939,
                        4940,
                        4941,
                        4942,
                        4943,
                        4944,
                        4945,
                        4946,
                        4947,
                        4948,
                        4949,
                        4950,
                        4951,
                        4952,
                        4953,
                        4954,
                        4955,
                        4956,
                        4957,
                        4958,
                        4959,
                        4960,
                        4961,
                        4962,
                        4963,
                        4964,
                        4965,
                        4966,
                        4967,
                        4968,
                        4969,
                        4970,
                        4971,
                        4972,
                        4973,
                        4974,
                        4975,
                        4976,
                        4977,
                        4978,
                        4979,
                        4980,
                        4981,
                        4982,
                        4983,
                        4984,
                        4985,
                        4986,
                        4987,
                        4988,
                        4989,
                        4990,
                        4991,
                        4992,
                        4993,
                        4994,
                        4995,
                        4996,
                        4997,
                        4998,
                        4999,
                        5000,
                        5001,
                        5002,
                        5003,
                        5004,
                        5005,
                        5006,
                        5007,
                        5008,
                        5009,
                        5010,
                        5011,
                        5012,
                        5013,
                        5014,
                        5015,
                        5016,
                        5017,
                        5018,
                        5019,
                        5020,
                        5021,
                        5022,
                        5023,
                        5024,
                        5025,
                        5026,
                        5027,
                        5028,
                        5029,
                        5030,
                        5031,
                        5032,
                        5033,
                        5034,
                        5035,
                        5036,
                        5037,
                        5038,
                        5039,
                        5040,
                        5041,
                        5042,
                        5043,
                        5044,
                        5045,
                        5046,
                        5047,
                        5048,
                        5049,
                        5050,
                        5051,
                        5052,
                        5053,
                        5054,
                        5055,
                        5056,
                        5057,
                        5058,
                        5059,
                        5060,
                        5061,
                        5062,
                        5063,
                        5064,
                        5065,
                        5066,
                        5067,
                        5068,
                        5069,
                        5070,
                        5071,
                        5072,
                        5073,
                        5074,
                        5075,
                        5076,
                        5077,
                        5078,
                        5079,
                        5080,
                        5081,
                        5082,
                        5083,
                        5084,
                        5085,
                        5086,
                        5087,
                        5088,
                        5089,
                        5090,
                        5091,
                        5092,
                        5093,
                        5094,
                        5095,
                        5096,
                        5097,
                        5098,
                        5099,
                        5100,
                        5101,
                        5102,
                        5103,
                        5104,
                        5105,
                        5106,
                        5107,
                        5108,
                        5109,
                        5110,
                        5111,
                        5112,
                        5113,
                        5114,
                        5115,
                        5116,
                        5117,
                        5118,
                        5119,
                        5120,
                        5121,
                        5122,
                        5123,
                        5124,
                        5125,
                        5126,
                        5127,
                        5128,
                        5129,
                        5130,
                        5131,
                        5132,
                        5133,
                        5134,
                        5135,
                        5136,
                        5137,
                        5138,
                        5139,
                        5140,
                        5141,
                        5142,
                        5143,
                        5144,
                        5145,
                        5146,
                        5147,
                        5148,
                        5149,
                        5150,
                        5151,
                        5152,
                        5153,
                        5154,
                        5155,
                        5156,
                        5157,
                        5158,
                        5159,
                        5160,
                        5161,
                        5162,
                        5163,
                        5164,
                        5165,
                        5166,
                        5167,
                        5168,
                        5169,
                        5170,
                        5171,
                        5172,
                        5173,
                        5174,
                        5175,
                        5176,
                        5177,
                        5178,
                        5179,
                        5180,
                        5181,
                        5182,
                        5183,
                        5184,
                        5185,
                        5186,
                        5187,
                        5188,
                        5189,
                        5190,
                        5191,
                        5192,
                        5193,
                        5194,
                        5195,
                        5196,
                        5197,
                        5198,
                        5199,
                        5200,
                        5201,
                        5202,
                        5203,
                        5204,
                        5205,
                        5206,
                        5207,
                        5208,
                        5209,
                        5210,
                        5211,
                        5212,
                        5213,
                        5214,
                        5215,
                        5216,
                        5217,
                        5218,
                        5219,
                        5220,
                        5221,
                        5222,
                        5223,
                        5224,
                        5225,
                        5226,
                        5227,
                        5228,
                        5229,
                        5230,
                        5231,
                        5232,
                        5233,
                        5234,
                        5235,
                        5236,
                        5237,
                        5238,
                        5239,
                        5240,
                        5241,
                        5242,
                        5243,
                        5244,
                        5245,
                        5246,
                        5247,
                        5248,
                        5249,
                        5250,
                        5251,
                        5252,
                        5253,
                        5254,
                        5255,
                        5256,
                        5257,
                        5258,
                        5259,
                        5260,
                        5261,
                        5262,
                        5263,
                        5264,
                        5265,
                        5266,
                        5267,
                        5268,
                        5269,
                        5270,
                        5271,
                        5272,
                        5273,
                        5274,
                        5275,
                        5276,
                        5277,
                        5278,
                        5279,
                        5280,
                        5281,
                        5282,
                        5283,
                        5284,
                        5285,
                        5286,
                        5287,
                        5288,
                        5289,
                        5290,
                        5291,
                        5292,
                        5293,
                        5294,
                        5295,
                        5296,
                        5297,
                        5298,
                        5299,
                        5300,
                        5301,
                        5302,
                        5303,
                        5304,
                        5305,
                        5306,
                        5307,
                        5308,
                        5309,
                        5310,
                        5311,
                        5312,
                        5313,
                        5314,
                        5315,
                        5316,
                        5317,
                        5318,
                        5319,
                        5320,
                        5321,
                        5322,
                        5323,
                        5324,
                        5325,
                        5326,
                        5327,
                        5328,
                        5329,
                        5330,
                        5331,
                        5332,
                        5333,
                        5334,
                        5335,
                        5336,
                        5337,
                        5338,
                        5339,
                        5340,
                        5341,
                        5342,
                        5343,
                        5344,
                        5345,
                        5346,
                        5347,
                        5348,
                        5349,
                        5350,
                        5351,
                        5352,
                        5353,
                        5354,
                        5355,
                        5356,
                        5357,
                        5358,
                        5359,
                        5360,
                        5361,
                        5362,
                        5363,
                        5364,
                        5365,
                        5366,
                        5367,
                        5368,
                        5369,
                        5370,
                        5371,
                        5372,
                        5373,
                        5374,
                        5375,
                        5376,
                        5377,
                        5378,
                        5379,
                        5380,
                        5381,
                        5382,
                        5383,
                        5384,
                        5385,
                        5386,
                        5387,
                        5388,
                        5389,
                        5390,
                        5391,
                        5392,
                        5393,
                        5394,
                        5395,
                        5396,
                        5397,
                        5398,
                        5399,
                        5400,
                        5401,
                        5402,
                        5403,
                        5404,
                        5405,
                        5406,
                        5407,
                        5408,
                        5409,
                        5410,
                        5411,
                        5412,
                        5413,
                        5414,
                        5415,
                        5416,
                        5417,
                        5418,
                        5419,
                        5420,
                        5421,
                        5422,
                        5423,
                        5424,
                        5425,
                        5426,
                        5427,
                        5428,
                        5429,
                        5430,
                        5431,
                        5432,
                        5433,
                        5434,
                        5435,
                        5436,
                        5437,
                        5438,
                        5439,
                        5440,
                        5441,
                        5442,
                        5443,
                        5444,
                        5445,
                        5446,
                        5447,
                        5448,
                        5449,
                        5450,
                        5451,
                        5452,
                        5453,
                        5454,
                        5455,
                        5456,
                        5457,
                        5458,
                        5459,
                        5460,
                        5461,
                        5462,
                        5463,
                        5464,
                        5465,
                        5466,
                        5467,
                        5468,
                        5469,
                        5470,
                        5471,
                        5472,
                        5473,
                        5474,
                        5475,
                        5476,
                        5477,
                        5478,
                        5479,
                        5480,
                        5481,
                        5482,
                        5483,
                        5484,
                        5485,
                        5486,
                        5487,
                        5488,
                        5489,
                        5490,
                        5491,
                        5492,
                        5493,
                        5494,
                        5495,
                        5496,
                        5497,
                        5498,
                        5499,
                        5500,
                        5501,
                        5502,
                        5503,
                        5504,
                        5505,
                        5506,
                        5507,
                        5508,
                        5509,
                        5510,
                        5511,
                        5512,
                        5513,
                        5514,
                        5515,
                        5516,
                        5517,
                        5518,
                        5519,
                        5520,
                        5521,
                        5522,
                        5523,
                        5524,
                        5525,
                        5526,
                        5527,
                        5528,
                        5529,
                        5530,
                        5531,
                        5532,
                        5533,
                        5534,
                        5535,
                        5536,
                        5537,
                        5538,
                        5539,
                        5540,
                        5541,
                        5542,
                        5543,
                        5544,
                        5545,
                        5546,
                        5547,
                        5548,
                        5549,
                        5550,
                        5551,
                        5552,
                        5553,
                        5554,
                        5555,
                        5556,
                        5557,
                        5558,
                        5559,
                        5560,
                        5561,
                        5562,
                        5563,
                        5564,
                        5565,
                        5566,
                        5567,
                        5568,
                        5569,
                        5570,
                        5571,
                        5572,
                        5573,
                        5574,
                        5575,
                        5576,
                        5577,
                        5578,
                        5579,
                        5580,
                        5581,
                        5582,
                        5583,
                        5584,
                        5585,
                        5586,
                        5587,
                        5588,
                        5589,
                        5590,
                        5591,
                        5592,
                        5593,
                        5594,
                        5595,
                        5596,
                        5597,
                        5598,
                        5599,
                        5600,
                        5601,
                        5602,
                        5603,
                        5604,
                        5605,
                        5606,
                        5607,
                        5608,
                        5609,
                        5610,
                        5611,
                        5612,
                        5613,
                        5614,
                        5615,
                        5616,
                        5617,
                        5618,
                        5619,
                        5620,
                        5621,
                        5622,
                        5623,
                        5624,
                        5625,
                        5626,
                        5627,
                        5628,
                        5629,
                        5630,
                        5631,
                        5632,
                        5633,
                        5634,
                        5635,
                        5636,
                        5637,
                        5638,
                        5639,
                        5640,
                        5641,
                        5642,
                        5643,
                        5644,
                        5645,
                        5646,
                        5647,
                        5648,
                        5649,
                        5650,
                        5651,
                        5652,
                        5653,
                        5654,
                        5655,
                        5656,
                        5657,
                        5658,
                        5659,
                        5660,
                        5661,
                        5662,
                        5663,
                        5664,
                        5665,
                        5666,
                        5667,
                        5668,
                        5669,
                        5670,
                        5671,
                        5672,
                        5673,
                        5674,
                        5675,
                        5676,
                        5677,
                        5678,
                        5679,
                        5680,
                        5681,
                        5682,
                        5683,
                        5684,
                        5685,
                        5686,
                        5687,
                        5688,
                        5689,
                        5690,
                        5691,
                        5692,
                        5693,
                        5694,
                        5695,
                        5696,
                        5697,
                        5698,
                        5699,
                        5700,
                        5701,
                        5702,
                        5703,
                        5704,
                        5705,
                        5706,
                        5707,
                        5708,
                        5709,
                        5710,
                        5711,
                        5712,
                        5713,
                        5714,
                        5715,
                        5716,
                        5717,
                        5718,
                        5719,
                        5720,
                        5721,
                        5722,
                        5723,
                        5724,
                        5725,
                        5726,
                        5727,
                        5728,
                        5729,
                        5730,
                        5731,
                        5732,
                        5733,
                        5734,
                        5735,
                        5736,
                        5737,
                        5738,
                        5739,
                        5740,
                        5741,
                        5742,
                        5743,
                        5744,
                        5745,
                        5746,
                        5747,
                        5748,
                        5749,
                        5750,
                        5751,
                        5752,
                        5753,
                        5754,
                        5755,
                        5756,
                        5757,
                        5758,
                        5759,
                        5760,
                        5761,
                        5762,
                        5763,
                        5764,
                        5765,
                        5766,
                        5767,
                        5768,
                        5769,
                        5770,
                        5771,
                        5772,
                        5773,
                        5774,
                        5775,
                        5776,
                        5777,
                        5778,
                        5779,
                        5780,
                        5781,
                        5782,
                        5783,
                        5784,
                        5785,
                        5786,
                        5787,
                        5788,
                        5789,
                        5790,
                        5791,
                        5792,
                        5793,
                        5794,
                        5795,
                        5796,
                        5797,
                        5798,
                        5799,
                        5800,
                        5801,
                        5802,
                        5803,
                        5804,
                        5805,
                        5806,
                        5807,
                        5808,
                        5809,
                        5810,
                        5811,
                        5812,
                        5813,
                        5814,
                        5815,
                        5816,
                        5817,
                        5818,
                        5819,
                        5820,
                        5821,
                        5822,
                        5823,
                        5824,
                        5825,
                        5826,
                        5827,
                        5828,
                        5829,
                        5830,
                        5831,
                        5832,
                        5833,
                        5834,
                        5835,
                        5836,
                        5837,
                        5838,
                        5839,
                        5840,
                        5841,
                        5842,
                        5843,
                        5844,
                        5845,
                        5846,
                        5847,
                        5848,
                        5849,
                        5850,
                        5851,
                        5852,
                        5853,
                        5854,
                        5855,
                        5856,
                        5857,
                        5858,
                        5859,
                        5860,
                        5861,
                        5862,
                        5863,
                        5864,
                        5865,
                        5866,
                        5867,
                        5868,
                        5869,
                        5870,
                        5871,
                        5872,
                        5873,
                        5874,
                        5875,
                        5876,
                        5877,
                        5878,
                        5879,
                        5880,
                        5881,
                        5882,
                        5883,
                        5884,
                        5885,
                        5886,
                        5887,
                        5888,
                        5889,
                        5890,
                        5891,
                        5892,
                        5893,
                        5894,
                        5895,
                        5896,
                        5897,
                        5898,
                        5899,
                        5900,
                        5901,
                        5902,
                        5903,
                        5904,
                        5905,
                        5906,
                        5907,
                        5908,
                        5909,
                        5910,
                        5911,
                        5912,
                        5913,
                        5914,
                        5915,
                        5916,
                        5917,
                        5918,
                        5919,
                        5920,
                        5921,
                        5922,
                        5923,
                        5924,
                        5925,
                        5926,
                        5927,
                        5928,
                        5929,
                        5930,
                        5931,
                        5932,
                        5933,
                        5934,
                        5935,
                        5936,
                        5937,
                        5938,
                        5939,
                        5940,
                        5941,
                        5942,
                        5943,
                        5944,
                        5945,
                        5946,
                        5947,
                        5948,
                        5949,
                        5950,
                        5951,
                        5952,
                        5953,
                        5954,
                        5955,
                        5956,
                        5957,
                        5958,
                        5959,
                        5960,
                        5961,
                        5962,
                        5963,
                        5964,
                        5965,
                        5966,
                        5967,
                        5968,
                        5969,
                        5970,
                        5971,
                        5972,
                        5973,
                        5974,
                        5975,
                        5976,
                        5977,
                        5978,
                        5979,
                        5980,
                        5981,
                        5982,
                        5983,
                        5984,
                        5985,
                        5986,
                        5987,
                        5988,
                        5989,
                        5990,
                        5991,
                        5992,
                        5993,
                        5994,
                        5995,
                        5996,
                        5997,
                        5998,
                        5999,
                        6000,
                        6001,
                        6002,
                        6003,
                        6004,
                        6005,
                        6006,
                        6007,
                        6008,
                        6009,
                        6010,
                        6011,
                        6012,
                        6013,
                        6014,
                        6015,
                        6016,
                        6017,
                        6018,
                        6019,
                        6020,
                        6021,
                        6022,
                        6023,
                        6024,
                        6025,
                        6026,
                        6027,
                        6028,
                        6029,
                        6030,
                        6031,
                        6032,
                        6033,
                        6034,
                        6035,
                        6036,
                        6037,
                        6038,
                        6039,
                        6040,
                        6041,
                        6042,
                        6043,
                        6044,
                        6045,
                        6046,
                        6047,
                        6048,
                        6049,
                        6050,
                        6051,
                        6052,
                        6053,
                        6054,
                        6055,
                        6056,
                        6057,
                        6058,
                        6059,
                        6060,
                        6061,
                        6062,
                        6063,
                        6064,
                        6065,
                        6066,
                        6067,
                        6068,
                        6069,
                        6070,
                        6071,
                        6072,
                        6073,
                        6074,
                        6075,
                        6076,
                        6077,
                        6078,
                        6079,
                        6080,
                        6081,
                        6082,
                        6083,
                        6084,
                        6085,
                        6086,
                        6087,
                        6088,
                        6089,
                        6090,
                        6091,
                        6092,
                        6093,
                        6094,
                        6095,
                        6096,
                        6097,
                        6098,
                        6099,
                        6100,
                        6101,
                        6102,
                        6103,
                        6104,
                        6105,
                        6106,
                        6107,
                        6108,
                        6109,
                        6110,
                        6111,
                        6112,
                        6113,
                        6114,
                        6115,
                        6116,
                        6117,
                        6118,
                        6119,
                        6120,
                        6121,
                        6122,
                        6123,
                        6124,
                        6125,
                        6126,
                        6127,
                        6128,
                        6129,
                        6130,
                        6131,
                        6132,
                        6133,
                        6134,
                        6135,
                        6136,
                        6137,
                        6138,
                        6139,
                        6140,
                        6141,
                        6142,
                        6143,
                        6144,
                        6145,
                        6146,
                        6147,
                        6148,
                        6149,
                        6150,
                        6151,
                        6152,
                        6153,
                        6154,
                        6155,
                        6156,
                        6157,
                        6158,
                        6159,
                        6160,
                        6161,
                        6162,
                        6163,
                        6164,
                        6165,
                        6166,
                        6167,
                        6168,
                        6169,
                        6170,
                        6171,
                        6172,
                        6173,
                        6174,
                        6175,
                        6176,
                        6177,
                        6178,
                        6179,
                        6180,
                        6181,
                        6182,
                        6183,
                        6184,
                        6185,
                        6186,
                        6187,
                        6188,
                        6189,
                        6190,
                        6191,
                        6192,
                        6193,
                        6194,
                        6195,
                        6196,
                        6197,
                        6198,
                        6199,
                        6200,
                        6201,
                        6202,
                        6203,
                        6204,
                        6205,
                        6206,
                        6207,
                        6208,
                        6209,
                        6210,
                        6211,
                        6212,
                        6213,
                        6214,
                        6215,
                        6216,
                        6217,
                        6218,
                        6219,
                        6220,
                        6221,
                        6222,
                        6223,
                        6224,
                        6225,
                        6226,
                        6227,
                        6228,
                        6229,
                        6230,
                        6231,
                        6232,
                        6233,
                        6234,
                        6235,
                        6236,
                        6237,
                        6238,
                        6239,
                        6240,
                        6241,
                        6242,
                        6243,
                        6244,
                        6245,
                        6246,
                        6247,
                        6248,
                        6249,
                        6250,
                        6251,
                        6252,
                        6253,
                        6254,
                        6255,
                        6256,
                        6257,
                        6258,
                        6259,
                        6260,
                        6261,
                        6262,
                        6263,
                        6264,
                        6265,
                        6266,
                        6267,
                        6268,
                        6269,
                        6270,
                        6271,
                        6272,
                        6273,
                        6274,
                        6275,
                        6276,
                        6277,
                        6278,
                        6279,
                        6280,
                        6281,
                        6282,
                        6283,
                        6284,
                        6285,
                        6286,
                        6287,
                        6288,
                        6289,
                        6290,
                        6291,
                        6292,
                        6293,
                        6294,
                        6295,
                        6296,
                        6297,
                        6298,
                        6299,
                        6300,
                        6301,
                        6302,
                        6303,
                        6304,
                        6305,
                        6306,
                        6307,
                        6308,
                        6309,
                        6310,
                        6311,
                        6312,
                        6313,
                        6314,
                        6315,
                        6316,
                        6317,
                        6318,
                        6319,
                        6320,
                        6321,
                        6322,
                        6323,
                        6324,
                        6325,
                        6326,
                        6327,
                        6328,
                        6329,
                        6330,
                        6331,
                        6332,
                        6333,
                        6334,
                        6335,
                        6336,
                        6337,
                        6338,
                        6339,
                        6340,
                        6341,
                        6342,
                        6343,
                        6344,
                        6345,
                        6346,
                        6347,
                        6348,
                        6349,
                        6350,
                        6351,
                        6352,
                        6353,
                        6354,
                        6355,
                        6356,
                        6357,
                        6358,
                        6359,
                        6360,
                        6361,
                        6362,
                        6363,
                        6364,
                        6365,
                        6366,
                        6367,
                        6368,
                        6369,
                        6370,
                        6371,
                        6372,
                        6373,
                        6374,
                        6375,
                        6376,
                        6377,
                        6378,
                        6379,
                        6380,
                        6381,
                        6382,
                        6383,
                        6384,
                        6385,
                        6386,
                        6387,
                        6388,
                        6389,
                        6390,
                        6391,
                        6392,
                        6393,
                        6394,
                        6395,
                        6396,
                        6397,
                        6398,
                        6399,
                        6400,
                        6401,
                        6402,
                        6403,
                        6404,
                        6405,
                        6406,
                        6407,
                        6408,
                        6409,
                        6410,
                        6411,
                        6412,
                        6413,
                        6414,
                        6415,
                        6416,
                        6417,
                        6418,
                        6419,
                        6420,
                        6421,
                        6422,
                        6423,
                        6424,
                        6425,
                        6426,
                        6427,
                        6428,
                        6429,
                        6430,
                        6431,
                        6432,
                        6433,
                        6434,
                        6435,
                        6436,
                        6437,
                        6438,
                        6439,
                        6440,
                        6441,
                        6442,
                        6443,
                        6444,
                        6445,
                        6446,
                        6447,
                        6448,
                        6449,
                        6450,
                        6451,
                        6452,
                        6453,
                        6454,
                        6455,
                        6456,
                        6457,
                        6458,
                        6459,
                        6460,
                        6461,
                        6462,
                        6463,
                        6464,
                        6465,
                        6466,
                        6467,
                        6468,
                        6469,
                        6470,
                        6471,
                        6472,
                        6473,
                        6474,
                        6475,
                        6476,
                        6477,
                        6478,
                        6479,
                        6480,
                        6481,
                        6482,
                        6483,
                        6484,
                        6485,
                        6486,
                        6487,
                        6488,
                        6489,
                        6490,
                        6491,
                        6492,
                        6493,
                        6494,
                        6495,
                        6496,
                        6497,
                        6498,
                        6499,
                        6500,
                        6501,
                        6502,
                        6503,
                        6504,
                        6505,
                        6506,
                        6507,
                        6508,
                        6509,
                        6510,
                        6511,
                        6512,
                        6513,
                        6514,
                        6515,
                        6516,
                        6517,
                        6518,
                        6519,
                        6520,
                        6521,
                        6522,
                        6523,
                        6524,
                        6525,
                        6526,
                        6527,
                        6528,
                        6529,
                        6530,
                        6531,
                        6532,
                        6533,
                        6534,
                        6535,
                        6536,
                        6537,
                        6538,
                        6539,
                        6540,
                        6541,
                        6542,
                        6543,
                        6544,
                        6545,
                        6546,
                        6547,
                        6548,
                        6549,
                        6550,
                        6551,
                        6552,
                        6553,
                        6554,
                        6555,
                        6556,
                        6557,
                        6558,
                        6559,
                        6560,
                        6561,
                        6562,
                        6563,
                        6564,
                        6565,
                        6566,
                        6567,
                        6568,
                        6569,
                        6570,
                        6571,
                        6572,
                        6573,
                        6574,
                        6575,
                        6576,
                        6577,
                        6578,
                        6579,
                        6580,
                        6581,
                        6582,
                        6583,
                        6584,
                        6585,
                        6586,
                        6587,
                        6588,
                        6589,
                        6590,
                        6591,
                        6592,
                        6593,
                        6594,
                        6595,
                        6596,
                        6597,
                        6598,
                        6599,
                        6600,
                        6601,
                        6602,
                        6603,
                        6604,
                        6605,
                        6606,
                        6607,
                        6608,
                        6609,
                        6610,
                        6611,
                        6612,
                        6613,
                        6614,
                        6615,
                        6616,
                        6617,
                        6618,
                        6619,
                        6620,
                        6621,
                        6622,
                        6623,
                        6624,
                        6625,
                        6626,
                        6627,
                        6628,
                        6629,
                        6630,
                        6631,
                        6632,
                        6633,
                        6634,
                        6635,
                        6636,
                        6637,
                        6638,
                        6639,
                        6640,
                        6641,
                        6642,
                        6643,
                        6644,
                        6645,
                        6646,
                        6647,
                        6648,
                        6649,
                        6650,
                        6651,
                        6652,
                        6653,
                        6654,
                        6655,
                        6656,
                        6657,
                        6658,
                        6659,
                        6660,
                        6661,
                        6662,
                        6663,
                        6664,
                        6665,
                        6666,
                        6667,
                        6668,
                        6669,
                        6670,
                        6671,
                        6672,
                        6673,
                        6674,
                        6675,
                        6676,
                        6677,
                        6678,
                        6679,
                        6680,
                        6681,
                        6682,
                        6683,
                        6684,
                        6685,
                        6686,
                        6687,
                        6688,
                        6689,
                        6690,
                        6691,
                        6692,
                        6693,
                        6694,
                        6695,
                        6696,
                        6697,
                        6698,
                        6699,
                        6700,
                        6701,
                        6702,
                        6703,
                        6704,
                        6705,
                        6706,
                        6707,
                        6708,
                        6709,
                        6710,
                        6711,
                        6712,
                        6713,
                        6714,
                        6715,
                        6716,
                        6717,
                        6718,
                        6719,
                        6720,
                        6721,
                        6722,
                        6723,
                        6724,
                        6725,
                        6726,
                        6727,
                        6728,
                        6729,
                        6730,
                        6731,
                        6732,
                        6733,
                        6734,
                        6735,
                        6736,
                        6737,
                        6738,
                        6739,
                        6740,
                        6741,
                        6742,
                        6743,
                        6744,
                        6745,
                        6746,
                        6747,
                        6748,
                        6749,
                        6750,
                        6751,
                        6752,
                        6753,
                        6754,
                        6755,
                        6756,
                        6757,
                        6758,
                        6759,
                        6760,
                        6761,
                        6762,
                        6763,
                        6764,
                        6765,
                        6766,
                        6767,
                        6768,
                        6769,
                        6770,
                        6771,
                        6772,
                        6773,
                        6774,
                        6775,
                        6776,
                        6777,
                        6778,
                        6779,
                        6780,
                        6781,
                        6782,
                        6783,
                        6784,
                        6785,
                        6786,
                        6787,
                        6788,
                        6789,
                        6790,
                        6791,
                        6792,
                        6793,
                        6794,
                        6795,
                        6796,
                        6797,
                        6798,
                        6799,
                        6800,
                        6801,
                        6802,
                        6803,
                        6804,
                        6805,
                        6806,
                        6807,
                        6808,
                        6809,
                        6810,
                        6811,
                        6812,
                        6813,
                        6814,
                        6815,
                        6816,
                        6817,
                        6818,
                        6819,
                        6820,
                        6821,
                        6822,
                        6823,
                        6824,
                        6825,
                        6826,
                        6827,
                        6828,
                        6829,
                        6830,
                        6831,
                        6832,
                        6833,
                        6834,
                        6835,
                        6836,
                        6837,
                        6838,
                        6839,
                        6840,
                        6841,
                        6842,
                        6843,
                        6844,
                        6845,
                        6846,
                        6847,
                        6848,
                        6849,
                        6850,
                        6851,
                        6852,
                        6853,
                        6854,
                        6855,
                        6856,
                        6857,
                        6858,
                        6859,
                        6860,
                        6861,
                        6862,
                        6863,
                        6864,
                        6865,
                        6866,
                        6867,
                        6868,
                        6869,
                        6870,
                        6871,
                        6872,
                        6873,
                        6874,
                        6875,
                        6876,
                        6877,
                        6878,
                        6879,
                        6880,
                        6881,
                        6882,
                        6883,
                        6884,
                        6885,
                        6886,
                        6887,
                        6888,
                        6889,
                        6890,
                        6891,
                        6892,
                        6893,
                        6894,
                        6895,
                        6896,
                        6897,
                        6898,
                        6899,
                        6900,
                        6901,
                        6902,
                        6903,
                        6904,
                        6905,
                        6906,
                        6907,
                        6908,
                        6909,
                        6910,
                        6911,
                        6912,
                        6913,
                        6914,
                        6915,
                        6916,
                        6917,
                        6918,
                        6919,
                        6920,
                        6921,
                        6922,
                        6923,
                        6924,
                        6925,
                        6926,
                        6927,
                        6928,
                        6929,
                        6930,
                        6931,
                        6932,
                        6933,
                        6934,
                        6935,
                        6936,
                        6937,
                        6938,
                        6939,
                        6940,
                        6941,
                        6942,
                        6943,
                        6944,
                        6945,
                        6946,
                        6947,
                        6948,
                        6949,
                        6950,
                        6951,
                        6952,
                        6953,
                        6954,
                        6955,
                        6956,
                        6957,
                        6958,
                        6959,
                        6960,
                        6961,
                        6962,
                        6963,
                        6964,
                        6965,
                        6966,
                        6967,
                        6968,
                        6969,
                        6970,
                        6971,
                        6972,
                        6973,
                        6974,
                        6975,
                        6976,
                        6977,
                        6978,
                        6979,
                        6980,
                        6981,
                        6982,
                        6983,
                        6984,
                        6985,
                        6986,
                        6987,
                        6988,
                        6989,
                        6990,
                        6991,
                        6992,
                        6993,
                        6994,
                        6995,
                        6996,
                        6997,
                        6998,
                        6999
                    ],
                    "price": {
                        "coin": 50
                    },
                    "info": "card_30^里面装了什么呢，碰碰运气吧？\n(开启所需等级：)[20]",
                    "index": -103,
                    "need_lev": 20,
                    "open_num": [
                        4,
                        5,
                        6
                    ],
                    "name": "card_29^金宝箱"
                },
                "baoxiang_sd1": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "hong2",
                                        "huang2",
                                        "lan2",
                                        "lv2",
                                        "zi2",
                                        "hei2"
                                    ]
                                ],
                                [
                                    0.47,
                                    "gem",
                                    [
                                        "hong3",
                                        "huang3",
                                        "lan3",
                                        "lv3",
                                        "zi3",
                                        "hei3"
                                    ]
                                ],
                                [
                                    0.485,
                                    "gem",
                                    [
                                        "hong4",
                                        "huang4",
                                        "lan4",
                                        "lv4",
                                        "zi4",
                                        "hei4"
                                    ]
                                ],
                                [
                                    0.49,
                                    "gem",
                                    [
                                        "hong5",
                                        "huang5",
                                        "lan5",
                                        "lv5",
                                        "zi5",
                                        "hei5"
                                    ]
                                ],
                                [
                                    0.5,
                                    "card",
                                    [
                                        "mc",
                                        "dalic",
                                        "tiegao"
                                    ]
                                ],
                                [
                                    0.506,
                                    "card",
                                    [
                                        "ybb",
                                        "lqxfj"
                                    ]
                                ],
                                [
                                    0.508,
                                    "card",
                                    [
                                        "ybb1",
                                        "lqxfj1"
                                    ]
                                ],
                                [
                                    0.509,
                                    "card",
                                    [
                                        "ybb2",
                                        "lqxfj2"
                                    ]
                                ],
                                [
                                    0.909,
                                    "tame",
                                    [
                                        "tt_A",
                                        "wexp_A"
                                    ]
                                ],
                                [
                                    0.979,
                                    "tame",
                                    [
                                        "tt_B",
                                        "wexp_B"
                                    ]
                                ],
                                [
                                    0.994,
                                    "tame",
                                    [
                                        "tt_C",
                                        "wexp_C"
                                    ]
                                ],
                                [
                                    0.999,
                                    "tame",
                                    [
                                        "tt_D",
                                        "wexp_D"
                                    ]
                                ],
                                [
                                    1,
                                    "tame",
                                    [
                                        "sb_Sprint_C",
                                        "sb_Invisible_C"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "coin": 38
                    },
                    "info": "card_116^哇塞！愿望就在里面耶！",
                    "index": -124,
                    "open_num": [
                        1
                    ],
                    "name": "card_115^星辰宝箱"
                },
                "texp_C": {
                    "info": "card_88^增加防线中塔[20000]点经验的书籍\n(（在防线中对塔加经验时提示使用，每天限用[10]本）)",
                    "price": {
                        "coin": 100
                    },
                    "index": 52,
                    "experience": 20000,
                    "name": "card_87^塔经验书Ⅲ"
                },
                "baoxiang_C": {
                    "data": [
                        [
                            1,
                            "properties",
                            [
                                [
                                    1,
                                    "gem",
                                    [
                                        "lv2",
                                        "hong2",
                                        "lan2",
                                        "zi2",
                                        "huang2",
                                        "hei2"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 100
                    },
                    "open_num": [
                        2
                    ],
                    "info": "card_72^可以带出梦境的珍贵宝箱，里面藏着什么东东呢？",
                    "default_gift": {
                        "properties": {
                            "snarp": {
                                "dicicao1": 2,
                                "baozhatong2": 2,
                                "bushoujia2": 2
                            }
                        }
                    },
                    "index": -116,
                    "lev": 70,
                    "name": "card_71^实用噩梦箱"
                },
                "baoxiang_ql": {
                    "price": {
                        "coin": 2800
                    },
                    "info": "card_114^清凉夏日优惠多多,打开礼包有3本{狼经验书Ⅳ}，3个{琥珀图腾}，3个{黄金图腾}，3个{大力锤}，3个{调任文书}，3个{精良铁镐}，3个{强化蓝宝石}\n[2012年8月15号下架]",
                    "default_gift": {
                        "properties": {
                            "gem": {
                                "lan5": 3
                            },
                            "card": {
                                "drws": 3,
                                "dalic": 3,
                                "tiegao": 3
                            },
                            "tame": {
                                "tt_D": 3,
                                "tt_C": 3,
                                "wexp_D": 3
                            }
                        }
                    },
                    "index": -520,
                    "open_num": [
                        1
                    ],
                    "name": "card_113^清凉大礼包"
                },
                "za_shiguang": {
                    "info": "card_102^时间沙漏中的沙子，相传有着穿梭时光的能力。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -480,
                    "name": "card_101^时光之沙"
                },
                "za_qiangwei": {
                    "info": "card_96^长满尖刺的野花，有种顽强的生命力。兑换用材料",
                    "price": {
                        "coin": 5
                    },
                    "index": -450,
                    "name": "card_95^蔷薇根茎"
                },
                "baoxiang15": {
                    "data": [
                        [
                            0.2,
                            "invite_score",
                            [
                                2
                            ]
                        ],
                        [
                            1,
                            "properties",
                            [
                                [
                                    0.2,
                                    "gem",
                                    [
                                        "lv1",
                                        "hong1",
                                        "huang1"
                                    ]
                                ],
                                [
                                    0.4,
                                    "gem",
                                    [
                                        "zi1",
                                        "lan1"
                                    ]
                                ],
                                [
                                    0.6,
                                    "snarp",
                                    [
                                        "chunjie1"
                                    ]
                                ],
                                [
                                    0.8,
                                    "gem",
                                    [
                                        "lv2",
                                        "hong2",
                                        "huang2",
                                        "zi2",
                                        "lan2"
                                    ]
                                ],
                                [
                                    1,
                                    "snarp",
                                    [
                                        "chunjie1"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    "price": {
                        "gold": 108
                    },
                    "info": "card_54^年兽掉落的福袋，传说得到的人新的一年能够万事如意心想事成",
                    "index": -112,
                    "open_num": [
                        8,
                        10,
                        12
                    ],
                    "name": "card_53^年兽福袋"
                }
            },
            "wc": {
                "huangjinl_card": {
                    "kindId": "C",
                    "price": {
                        "coin": 1490
                    },
                    "info": "wc_54^驯化狼卡，使用后可获得一只{四星}欧若狼，带有中级抗冰、初级抗火、初级抗毒、中级抗光1级\n[限兑换一个]",
                    "wid": "huangjinl",
                    "bind_buy": 1,
                    "index": 272,
                    "name": "wc_53^欧若狼卡"
                },
                "abl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 50
                    },
                    "qqvip": "",
                    "info": "wc_8^驯化狼卡，使用后可获得一只{二星}阿伯狼，先天带有初级抗毒1级",
                    "wid": "abl",
                    "kindId": "A",
                    "index": -40,
                    "name": "wc_7^阿伯狼卡"
                },
                "bld_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1290
                    },
                    "qqvip": "",
                    "info": "wc_26^春节特供驯化狼卡，使用后可获得一只稀有的{四星}笨・狼灯，先天带有中级自爆1级、中级抗击退1级、初级抗冰1级\n[限购一个]",
                    "wid": "bld",
                    "kindId": "E",
                    "index": 130,
                    "name": "wc_25^笨・狼灯卡"
                },
                "amstl": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1995
                    },
                    "qqvip": "",
                    "info": "wc_44^驯化狼卡，使用后可获得一只稀有的{四星}阿姆斯特狼，先天带有中级抗毒，先天怕光，飞行\n[限购一个]",
                    "wid": "amstl",
                    "kindId": "C",
                    "index": 220,
                    "name": "wc_43^阿姆斯特狼"
                },
                "lzlm_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 790
                    },
                    "qqvip": "",
                    "info": "wc_28^驯化狼卡，使用后可获得一只稀有的{三星}绿洲狼妹，先天带有中级抗毒1级、初级抗眩晕1级\n[限购一个]",
                    "wid": "lzlm",
                    "kindId": "B",
                    "index": 140,
                    "name": "wc_27^绿洲狼妹卡"
                },
                "al_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 50
                    },
                    "qqvip": "",
                    "info": "wc_2^驯化狼卡，使用后可获得一只{一星}阿呆狼，没有先天天赋\n",
                    "wid": "al",
                    "kindId": "A",
                    "index": -10,
                    "name": "wc_1^阿呆狼卡"
                },
                "bml_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 50
                    },
                    "qqvip": "",
                    "info": "wc_6^驯化狼卡，使用后可获得一只{一星}保姆狼，先天怕冰，同时带有初级抗击退1级",
                    "wid": "bml",
                    "kindId": "A",
                    "index": -30,
                    "name": "wc_5^保姆狼卡"
                },
                "sdsl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 90
                    },
                    "qqvip": "",
                    "info": "wc_14^圣诞特供驯化狼卡，使用后可获得一只稀有的{二星}圣诞树狼，先天怕火，同时带有中级抗毒1级\n[限购一个]",
                    "wid": "sdsl",
                    "kindId": "D",
                    "index": -72,
                    "name": "wc_13^圣诞树狼卡"
                },
                "sdxlw_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 940
                    },
                    "qqvip": "",
                    "info": "wc_20^圣诞特供驯化狼卡，使用后可获得一只稀有的{三星}圣诞小狼王，先天带有中级抗击退1级、中级抗毒1级\n[限购一个]",
                    "wid": "sdxlw",
                    "kindId": "D",
                    "index": 100,
                    "name": "wc_19^圣诞狼王卡"
                },
                "hbtjl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 2495
                    },
                    "qqvip": "",
                    "info": "wc_52^驯化狼卡，使用后可获得一只{五星}海豹突击狼，先天怕毒，同时带有初级抗冰、中级抗击退和中级抗晕眩1级\n[限购一个]",
                    "wid": "hbtjl",
                    "kindId": "C",
                    "index": 262,
                    "name": "wc_51^海豹突击狼卡"
                },
                "yzabl": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1995
                    },
                    "qqvip": "",
                    "info": "wc_42^驯化狼卡，使用后可获得一只稀有的{三星}月之阿波罗狼，先天带有初级抗毒，先天怕光，飞行\n[限购一个]",
                    "wid": "yzabl",
                    "kindId": "B",
                    "index": 210,
                    "name": "wc_41^月之阿波罗"
                },
                "xxlw_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 490
                    },
                    "qqvip": "",
                    "info": "wc_12^驯化狼卡，使用后可获得一只{二星}小狼王，先天带有中级抗冰1级\n[限购一个]",
                    "wid": "xxlw",
                    "kindId": "B",
                    "index": 60,
                    "name": "wc_11^小狼王卡"
                },
                "yll_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 2495
                    },
                    "qqvip": "",
                    "info": "驯化狼卡，使用后可获得一只{五星}杨六狼，带有中级抗冰1级、中级抗击退1级、高级群疗1级\n[限购一个]",
                    "wid": "yll",
                    "kindId": "C",
                    "index": 312,
                    "name": "杨六狼卡"
                },
                "gzl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1595
                    },
                    "qqvip": "",
                    "info": "驯化狼卡，使用后可获得一只{四星}贵族狼，带有中级抗冰1级、中级抗光1级\n[限购一个]",
                    "wid": "gzl",
                    "kindId": "C",
                    "index": 282,
                    "name": "贵族狼卡"
                },
                "ldmfd_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 940
                    },
                    "qqvip": "",
                    "info": "wc_32^驯化狼卡，使用后可获得一只稀有的{四星}劳动模范弟，先天带有中级抗冰1级、初级抗眩1级\n[限购一个]",
                    "wid": "ldmfd",
                    "kindId": "C",
                    "index": 161,
                    "name": "wc_31^劳动模范弟卡"
                },
                "bpbm_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 440
                    },
                    "qqvip": "",
                    "info": "wc_22^春节特供驯化狼卡，使用后可获得一只稀有的{二星}鞭炮鲍姆，先天带有初级自爆1级\n[限购一个]",
                    "wid": "bpbm",
                    "kindId": "E",
                    "index": 110,
                    "name": "wc_21^鞭炮鲍姆卡"
                },
                "ns_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 690
                    },
                    "qqvip": "",
                    "info": "wc_24^春节特供驯化狼卡，使用后可获得一只稀有的{三星}“年兽”，先天带有中级抗毒1级、初级抗击退1级\n[限购一个]",
                    "wid": "ns",
                    "kindId": "E",
                    "index": 120,
                    "name": "wc_23^“年兽”卡"
                },
                "ldmfg_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1450
                    },
                    "qqvip": "",
                    "info": "wc_34^驯化狼卡，使用后可获得一只稀有的{四星}劳动模范哥，先天带有中级抗冰1级、中级抗击退1级、初级抗眩晕1级\n[限购一个]",
                    "wid": "ldmfg",
                    "kindId": "C",
                    "index": 171,
                    "name": "wc_33^劳动模范哥卡"
                },
                "wjxcw_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1490
                    },
                    "qqvip": "",
                    "info": "wc_40^驯化狼卡，使用后可获得一只稀有的{四星}玩具小丑王，先天带有中级抗毒，初级抗击退，中级乌云\n[限购一个]",
                    "wid": "wjxcw",
                    "kindId": "C",
                    "index": 200,
                    "name": "wc_39^玩具小丑王卡"
                },
                "wjxc_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 940
                    },
                    "qqvip": "",
                    "info": "wc_38^驯化狼卡，使用后可获得一只稀有的{三星}玩具小丑，先天带有中级抗冰，初级乌云\n[限购一个]",
                    "wid": "wjxc",
                    "kindId": "B",
                    "index": 190,
                    "name": "wc_37^玩具小丑卡"
                },
                "smls_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1440
                    },
                    "qqvip": "",
                    "info": "wc_30^驯化狼卡，使用后可获得一只稀有的{四星}守墓老四，先天带有中级抗冰1级、中级抗毒1级、初级抗眩晕1级\n[限购一个]",
                    "wid": "smls",
                    "kindId": "C",
                    "index": 150,
                    "name": "wc_29^守墓老四卡"
                },
                "hlbb_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 490
                    },
                    "qqvip": "",
                    "info": "wc_10^驯化狼卡，使用后可获得一只{二星}灰狼宝宝，先天怕毒，同时带有中级抗击退1级\n[限购一个]",
                    "wid": "hlbb",
                    "kindId": "A",
                    "index": 50,
                    "name": "wc_9^狼宝宝卡"
                },
                "hlbb1_card": {
                    "bind_buy": 1,
                    "price": {
                        "gold": 1000
                    },
                    "qqvip": "",
                    "info": "wc_46^驯化狼卡，使用后可获得一只{二星}灰狼宝宝，先天怕毒，同时带有中级抗击退1级\n[限购一个]",
                    "wid": "hlbb1",
                    "kindId": "A",
                    "index": -230,
                    "name": "wc_45^限定狼宝宝卡（黄）"
                },
                "xxgl_1_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1795
                    },
                    "qqvip": "",
                    "info": "驯化狼卡，使用后可获得一只{四星}吸血鬼狼，先天怕光、并且带有飞行、中级隐身1级\n[限购一个]",
                    "wid": "xxgl_1",
                    "kindId": "C",
                    "index": 292,
                    "name": "吸血鬼狼卡"
                },
                "smssl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1995
                    },
                    "qqvip": "",
                    "info": "驯化狼卡，使用后可获得一只{四星}沙漠死神狼，带有中级抗毒1级、中级群疗1级\n[限购一个]",
                    "wid": "smssl",
                    "kindId": "C",
                    "index": 302,
                    "name": "沙漠死神狼卡"
                },
                "sdxhl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 390
                    },
                    "qqvip": "",
                    "info": "wc_18^圣诞特供驯化狼卡，使用后可获得一只稀有的{三星}驯鹿宝宝狼，先天带有初级抗冰1级、初级抗火1级\n[限购一个]",
                    "wid": "sdxhl",
                    "kindId": "D",
                    "index": 90,
                    "name": "wc_17^驯鹿狼宝卡"
                },
                "fbl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1995
                    },
                    "qqvip": "",
                    "info": "wc_50^驯化狼卡，使用后可获得一只{四星}防爆狼，带有初级抗击退和中级抗晕眩1级\n[限购一个]",
                    "wid": "fbl",
                    "kindId": "C",
                    "index": 252,
                    "name": "wc_49^防爆狼卡"
                },
                "hlbb2_card": {
                    "bind_buy": 1,
                    "price": {
                        "gold": 1000
                    },
                    "qqvip": "",
                    "info": "wc_48^驯化狼卡，使用后可获得一只{二星}灰狼宝宝，先天怕毒，同时带有中级抗击退1级\n[限购一个]",
                    "wid": "hlbb2",
                    "kindId": "A",
                    "index": -240,
                    "name": "wc_47^限定狼宝宝卡（蓝）"
                },
                "lyql_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1490
                    },
                    "qqvip": "",
                    "info": "wc_36^驯化狼卡，使用后可获得一只稀有的{三星}鲤鱼旗狼，先天带有飞行技能\n[限购一个]",
                    "wid": "lyql",
                    "kindId": "C",
                    "index": -181,
                    "name": "wc_35^鲤鱼旗狼卡"
                },
                "sdal_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 95
                    },
                    "qqvip": "",
                    "info": "wc_16^圣诞特供驯化狼卡，使用后可获得一只稀有的{二星}圣诞灰狼，先天带有初级抗冰1级\n[限购一个]",
                    "wid": "sdal",
                    "kindId": "D",
                    "index": -82,
                    "name": "wc_15^圣诞灰狼卡"
                },
                "wkl_card": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 50
                    },
                    "qqvip": "",
                    "info": "wc_4^驯化狼卡，使用后可获得一只{一星}沃克狼，先天怕击退，同时带有初级抗冰1级",
                    "wid": "wkl",
                    "kindId": "A",
                    "index": -20,
                    "name": "wc_3^沃克狼卡"
                }
            },
            "tame": {
                "sb_ResistLight_B": {
                    "price": {
                        "coin": 595
                    },
                    "skid": "ResistLight_B",
                    "info": "抗光",
                    "index": 311,
                    "qqvip": "",
                    "name": "中级抗光"
                },
                "sb_Cloud_Z1": {
                    "price": {
                        "coin": 4495
                    },
                    "skid": "Cloud_Z1",
                    "info": "乌云",
                    "index": -570,
                    "qqvip": "",
                    "name": "乌云"
                },
                "sb_Fly_Z6": {
                    "price": {
                        "coin": 499995
                    },
                    "skid": "Fly_Z6",
                    "info": "飞行",
                    "index": -610,
                    "qqvip": "",
                    "name": "飞行"
                },
                "sb_Sprint_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Sprint_A",
                    "info": "狂奔",
                    "index": 190,
                    "qqvip": "",
                    "name": "初级狂奔"
                },
                "sb_MassTreatment_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "MassTreatment_B",
                    "info": "中级群疗",
                    "index": 881,
                    "qqvip": "",
                    "name": "中级群疗"
                },
                "sb_ResistBeat_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistBeat_Z1",
                    "info": "抗击退",
                    "index": -710,
                    "qqvip": "",
                    "name": "抗击退"
                },
                "sb_Cloud_Z3": {
                    "price": {
                        "coin": 24995
                    },
                    "skid": "Cloud_Z3",
                    "info": "乌云",
                    "index": -590,
                    "qqvip": "",
                    "name": "乌云"
                },
                "sb_MassTreatment_Z3": {
                    "price": {
                        "coin": 24995
                    },
                    "skid": "MassTreatment_Z3",
                    "info": "群疗",
                    "index": -560,
                    "qqvip": "",
                    "name": "群疗"
                },
                "sb_ResistCrit_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistCrit_C",
                    "info": "抗暴击",
                    "index": -460,
                    "qqvip": "",
                    "name": "高级抗暴击"
                },
                "sb_ResistVertigo_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistVertigo_Z1",
                    "info": "抗眩晕",
                    "index": -730,
                    "qqvip": "",
                    "name": "抗眩晕"
                },
                "sb_Taunt_C": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Taunt_C",
                    "info": "嘲讽",
                    "index": 550,
                    "qqvip": "",
                    "name": "高级嘲讽"
                },
                "tt_A": {
                    "info": "升级驯化狼初级技能的必需品\n(（在驯化营中对狼的初级技能进行升级时会提示使用）)",
                    "price": {
                        "coin": 25
                    },
                    "index": 10,
                    "qqvip": "",
                    "name": "木质图腾"
                },
                "wexp_A": {
                    "price": {
                        "coin": 20
                    },
                    "experience": 8100,
                    "qqvip": "",
                    "info": "增加驯化狼[8100]点经验的书籍\n(（在驯化营中对狼加经验时提示使用，每天限用[10]本）)",
                    "index": 50,
                    "name": "狼经验书Ⅰ"
                },
                "sb_Summon_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Summon_Z1",
                    "info": "召唤",
                    "index": -770,
                    "qqvip": "",
                    "name": "召唤"
                },
                "sb_ResistPoison_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistPoison_Z1",
                    "info": "抗毒",
                    "index": -700,
                    "qqvip": "",
                    "name": "抗毒"
                },
                "sb_ResistPoison_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistPoison_A",
                    "info": "抗毒",
                    "index": 100,
                    "qqvip": "",
                    "name": "初级抗毒"
                },
                "sb_Taunt_B": {
                    "bind_buy": 1,
                    "price": {
                        "coin": 800
                    },
                    "skid": "Taunt_B",
                    "info": "嘲讽",
                    "index": 390,
                    "qqvip": "",
                    "name": "中级嘲讽"
                },
                "sb_Shield_Z2": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Shield_Z2",
                    "info": "护盾",
                    "index": -850,
                    "qqvip": "",
                    "name": "护盾"
                },
                "sb_Cloud_Z2": {
                    "price": {
                        "coin": 9995
                    },
                    "skid": "Cloud_Z2",
                    "info": "乌云",
                    "index": -580,
                    "qqvip": "",
                    "name": "乌云"
                },
                "sb_Blink_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Blink_C",
                    "info": "闪烁",
                    "index": 500,
                    "qqvip": "",
                    "name": "高级闪烁"
                },
                "sb_ResistCrit_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistCrit_Z1",
                    "info": "抗暴击",
                    "index": -740,
                    "qqvip": "",
                    "name": "抗暴击"
                },
                "sb_Divide_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Divide_A",
                    "info": "分身",
                    "index": 210,
                    "qqvip": "",
                    "name": "初级分身"
                },
                "sb_ResistPoison_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistPoison_B",
                    "info": "抗毒",
                    "index": 260,
                    "qqvip": "",
                    "name": "中级抗毒"
                },
                "sb_Airborne_Z1": {
                    "price": {
                        "coin": 4495
                    },
                    "skid": "Airborne_Z1",
                    "info": "空降",
                    "index": -620,
                    "qqvip": "",
                    "name": "空降"
                },
                "sb_Divide_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Divide_Z1",
                    "info": "分身",
                    "index": -810,
                    "qqvip": "",
                    "name": "分身"
                },
                "sb_Sprint_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Sprint_B",
                    "info": "狂奔",
                    "index": -350,
                    "qqvip": "",
                    "name": "中级狂奔"
                },
                "sb_Revive_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Revive_B",
                    "info": "重生",
                    "index": 320,
                    "qqvip": "",
                    "name": "中级重生"
                },
                "sb_Invisible_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Invisible_B",
                    "info": "隐身",
                    "index": 360,
                    "qqvip": "",
                    "name": "中级隐身"
                },
                "sb_ResistLight_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistLight_Z1",
                    "info": "抗光",
                    "index": -750,
                    "qqvip": "",
                    "name": "抗光"
                },
                "sb_Taunt_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Taunt_A",
                    "info": "嘲讽",
                    "index": 230,
                    "qqvip": "",
                    "name": "初级嘲讽"
                },
                "sb_Sprint_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Sprint_C",
                    "info": "狂奔",
                    "index": -510,
                    "qqvip": "",
                    "name": "高级狂奔"
                },
                "sb_ResistFire_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistFire_B",
                    "info": "抗火",
                    "index": -240,
                    "qqvip": "",
                    "name": "中级抗火"
                },
                "sb_ResistFrost_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistFrost_C",
                    "info": "抗冰",
                    "index": 410,
                    "qqvip": "",
                    "name": "高级抗冰"
                },
                "sb_Summon_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Summon_C",
                    "info": "召唤",
                    "index": 491,
                    "qqvip": "",
                    "name": "高级召唤"
                },
                "sb_Shield_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Shield_Z1",
                    "info": "护盾",
                    "index": -820,
                    "qqvip": "",
                    "name": "护盾"
                },
                "sb_Shield_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Shield_C",
                    "info": "护盾",
                    "index": 540,
                    "qqvip": "",
                    "name": "高级护盾"
                },
                "sb_ResistPoison_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistPoison_C",
                    "info": "抗毒",
                    "index": 420,
                    "qqvip": "",
                    "name": "高级抗毒"
                },
                "sb_Invisible_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Invisible_A",
                    "info": "隐身",
                    "index": 200,
                    "qqvip": "",
                    "name": "初级隐身"
                },
                "sb_Taunt_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Taunt_Z1",
                    "info": "嘲讽",
                    "index": -830,
                    "qqvip": "",
                    "name": "嘲讽"
                },
                "tt_D": {
                    "info": "升级驯化狼高级技能的必需品\n(（在驯化营中对狼的高级技能进行升级时会提示使用）)",
                    "price": {
                        "coin": 200
                    },
                    "index": 40,
                    "qqvip": "",
                    "name": "琥珀图腾"
                },
                "sb_Shield_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Shield_B",
                    "info": "护盾",
                    "index": 380,
                    "qqvip": "",
                    "name": "中级护盾"
                },
                "sb_ResistFire_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistFire_Z1",
                    "info": "抗火",
                    "index": -680,
                    "qqvip": "",
                    "name": "抗火"
                },
                "sb_ResistBeat_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistBeat_B",
                    "info": "抗击退",
                    "index": 270,
                    "qqvip": "",
                    "name": "中级抗击退"
                },
                "wexp_B": {
                    "price": {
                        "coin": 40
                    },
                    "experience": 18000,
                    "qqvip": "",
                    "info": "增加驯化狼[18000]点经验的书籍\n(（在驯化营中对狼加经验时提示使用，每天限用[10]本）)",
                    "index": 60,
                    "name": "狼经验书Ⅱ"
                },
                "sb_Taunt_Z2": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Taunt_Z2",
                    "info": "嘲讽",
                    "index": -860,
                    "qqvip": "",
                    "name": "嘲讽"
                },
                "sb_ResistFire_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistFire_C",
                    "info": "抗火",
                    "index": -400,
                    "qqvip": "",
                    "name": "高级抗火"
                },
                "sb_Burst_Z2": {
                    "price": {
                        "coin": 9995
                    },
                    "skid": "Burst_Z2",
                    "info": "自爆",
                    "index": -640,
                    "qqvip": "",
                    "name": "自爆"
                },
                "sb_ResistFrost_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistFrost_Z1",
                    "info": "抗冰",
                    "index": -690,
                    "qqvip": "",
                    "name": "抗冰"
                },
                "wexp_D": {
                    "price": {
                        "coin": 195
                    },
                    "experience": 70000,
                    "qqvip": "",
                    "info": "增加驯化狼[70000]点经验的书籍\n(（在驯化营中对狼加经验时提示使用，每天限用[10]本）)",
                    "index": 2,
                    "name": "狼经验书Ⅳ"
                },
                "sb_ResistBeat_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistBeat_C",
                    "info": "抗击退",
                    "index": 430,
                    "qqvip": "",
                    "name": "高级抗击退"
                },
                "sb_Summon_B": {
                    "price": {
                        "coin": 800
                    },
                    "skid": "Summon_B",
                    "info": "召唤",
                    "index": 330,
                    "qqvip": "",
                    "name": "中级召唤"
                },
                "sb_Burst_Z3": {
                    "price": {
                        "coin": 24995
                    },
                    "skid": "Burst_Z3",
                    "info": "自爆",
                    "index": -650,
                    "qqvip": "",
                    "name": "自爆"
                },
                "sb_Divide_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Divide_B",
                    "info": "分身",
                    "index": 371,
                    "qqvip": "",
                    "name": "中级分身"
                },
                "sb_Morph_Z1": {
                    "price": {
                        "coin": 4495
                    },
                    "skid": "Morph_Z1",
                    "info": "变身",
                    "index": -600,
                    "qqvip": "",
                    "name": "变身"
                },
                "sb_ResistFire_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistFire_A",
                    "info": "抗火",
                    "index": 82,
                    "qqvip": "",
                    "name": "初级抗火"
                },
                "sb_ResistBeat_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistBeat_A",
                    "info": "抗击退",
                    "index": 110,
                    "qqvip": "",
                    "name": "初级抗击退"
                },
                "sb_Burst_Z1": {
                    "price": {
                        "coin": 4495
                    },
                    "skid": "Burst_Z1",
                    "info": "自爆",
                    "index": -630,
                    "qqvip": "",
                    "name": "自爆"
                },
                "sb_ResistCrit_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistCrit_A",
                    "info": "抗暴击",
                    "index": 140,
                    "qqvip": "",
                    "name": "初级抗暴击"
                },
                "sb_MassTreatment_A": {
                    "price": {
                        "coin": 495
                    },
                    "skid": "MassTreatment_A",
                    "info": "初级群疗",
                    "index": 870,
                    "qqvip": "",
                    "name": "初级群疗"
                },
                "sb_Isolation_Z2": {
                    "price": {
                        "coin": 9995
                    },
                    "skid": "Isolation_Z2",
                    "info": "免疫电",
                    "index": -670,
                    "qqvip": "",
                    "name": "免疫电"
                },
                "sb_Divide_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Divide_C",
                    "info": "分身",
                    "index": 531,
                    "qqvip": "",
                    "name": "高级分身"
                },
                "sb_ResistSilence_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "ResistSilence_Z1",
                    "info": "抗沉默",
                    "index": -720,
                    "qqvip": "",
                    "name": "抗沉默"
                },
                "sb_Blink_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "Blink_B",
                    "info": "闪烁",
                    "index": 341,
                    "qqvip": "",
                    "name": "中级闪烁"
                },
                "tt_C": {
                    "info": "升级驯化狼中级、高级技能的必需品\n(（在驯化营中对狼的中、高级技能进行升级时会提示使用）)",
                    "price": {
                        "coin": 100
                    },
                    "index": 30,
                    "qqvip": "",
                    "name": "黄金图腾"
                },
                "sb_Invisible_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Invisible_C",
                    "info": "隐身",
                    "index": 520,
                    "qqvip": "",
                    "name": "高级隐身"
                },
                "sb_Invisible_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Invisible_Z1",
                    "info": "隐身",
                    "index": -800,
                    "qqvip": "",
                    "name": "隐身"
                },
                "sb_MassTreatment_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "MassTreatment_C",
                    "info": "高级群疗",
                    "index": 891,
                    "qqvip": "",
                    "name": "高级群疗"
                },
                "sb_ResistVertigo_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistVertigo_C",
                    "info": "抗眩晕",
                    "index": -450,
                    "qqvip": "",
                    "name": "高级抗眩晕"
                },
                "sb_ResistFrost_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistFrost_A",
                    "info": "抗冰",
                    "index": 90,
                    "qqvip": "",
                    "name": "初级抗冰"
                },
                "sb_Sprint_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Sprint_Z1",
                    "info": "狂奔",
                    "index": -790,
                    "qqvip": "",
                    "name": "狂奔"
                },
                "sb_ResistSilence_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistSilence_B",
                    "info": "抗沉默",
                    "index": -280,
                    "qqvip": "",
                    "name": "中级抗沉默"
                },
                "sb_Revive_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "Revive_C",
                    "info": "重生",
                    "index": 480,
                    "qqvip": "",
                    "name": "高级重生"
                },
                "tt_B": {
                    "info": "升级驯化狼初级、中级技能的必需品\n(（在驯化营中对狼的初、中级技能进行升级时会提示使用）)",
                    "price": {
                        "coin": 50
                    },
                    "index": 20,
                    "qqvip": "",
                    "name": "石质图腾"
                },
                "sb_ResistLight_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistLight_A",
                    "info": "抗光",
                    "index": 150,
                    "qqvip": "",
                    "name": "初级抗光"
                },
                "sb_ResistSilence_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistSilence_A",
                    "info": "抗沉默",
                    "index": 120,
                    "qqvip": "",
                    "name": "初级抗沉默"
                },
                "sb_ResistVertigo_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistVertigo_B",
                    "info": "抗眩晕",
                    "index": 290,
                    "qqvip": "",
                    "name": "中级抗眩晕"
                },
                "sb_Revive_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Revive_Z1",
                    "info": "重生",
                    "index": -760,
                    "qqvip": "",
                    "name": "重生"
                },
                "sb_Blink_Z1": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Blink_Z1",
                    "info": "闪烁",
                    "index": -780,
                    "qqvip": "",
                    "name": "闪烁"
                },
                "wexp_C": {
                    "price": {
                        "coin": 100
                    },
                    "experience": 36000,
                    "qqvip": "",
                    "info": "增加驯化狼[36000]点经验的书籍\n(（在驯化营中对狼加经验时提示使用，每天限用[10]本）)",
                    "index": 72,
                    "name": "狼经验书Ⅲ"
                },
                "sb_Summon_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Summon_A",
                    "info": "召唤",
                    "index": 170,
                    "qqvip": "",
                    "name": "初级召唤"
                },
                "sb_ResistFrost_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistFrost_B",
                    "info": "抗冰",
                    "index": 250,
                    "qqvip": "",
                    "name": "中级抗冰"
                },
                "sb_Reborn_Z1": {
                    "price": {
                        "coin": 4495
                    },
                    "skid": "Reborn_Z1",
                    "info": "转生",
                    "index": -660,
                    "qqvip": "",
                    "name": "转生"
                },
                "sb_ResistLight_C": {
                    "price": {
                        "coin": 1495
                    },
                    "skid": "ResistLight_C",
                    "info": "抗光",
                    "index": 471,
                    "qqvip": "",
                    "name": "高级抗光"
                },
                "sb_ResistVertigo_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "ResistVertigo_A",
                    "info": "抗眩晕",
                    "index": 130,
                    "qqvip": "",
                    "name": "初级抗眩晕"
                },
                "sb_Revive_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Revive_A",
                    "info": "重生",
                    "index": 160,
                    "qqvip": "",
                    "name": "初级重生"
                },
                "sb_ResistSilence_C": {
                    "price": {
                        "coin": 1995
                    },
                    "skid": "ResistSilence_C",
                    "info": "抗沉默",
                    "index": -440,
                    "qqvip": "",
                    "name": "高级抗沉默"
                },
                "sb_Shield_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Shield_A",
                    "info": "护盾",
                    "index": 220,
                    "qqvip": "",
                    "name": "初级护盾"
                },
                "sb_Blink_Z5": {
                    "price": {
                        "coin": 50
                    },
                    "skid": "Blink_Z5",
                    "info": "闪烁",
                    "index": -840,
                    "qqvip": "",
                    "name": "闪烁"
                },
                "sb_ResistCrit_B": {
                    "price": {
                        "coin": 995
                    },
                    "skid": "ResistCrit_B",
                    "info": "抗暴击",
                    "index": -300,
                    "qqvip": "",
                    "name": "中级抗暴击"
                },
                "sb_Blink_A": {
                    "price": {
                        "coin": 195
                    },
                    "skid": "Blink_A",
                    "info": "闪烁",
                    "index": 180,
                    "qqvip": "",
                    "name": "初级闪烁"
                }
            }
        }
    },
    "server_now": "Tue Aug 31 21:37:48 GMT+0800 2021",
    "params": {
        "xc_publish": "cn_cn",
        "pf": "discuz",
        "actionID": "a1630388267942795402314"
    },
    "return_code": 0
}.data;