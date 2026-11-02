"use strict";
var CourseTutor = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // assistant/bootstrap.ts
  var bootstrap_exports = {};
  __export(bootstrap_exports, {
    debug: () => debug,
    readSnapshot: () => readSnapshot
  });

  // assistant/bridge/build-profile.json
  var build_profile_default = {
    build: "Unity 2018.4.13c1 / original 61f717f",
    byteLength: 36161455,
    functionCount: 64883,
    importFunctionCount: 357,
    hooks: [
      {
        name: "MainVarController.Start",
        className: "MainVarController",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4645,
        tableSlot: 65985,
        functionIndex: 25821,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1429,
        enter: {
          code: 1,
          payload: 0
        },
        leave: {
          code: 2,
          payload: 0
        }
      },
      {
        name: "MainVarController.ReturnMenu",
        className: "MainVarController",
        methodName: "ReturnMenu",
        signature: "vii",
        managedPointer: 4650,
        tableSlot: 65990,
        functionIndex: 25828,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 421,
        enter: {
          code: 3,
          payload: 0
        },
        leave: {
          code: 4,
          payload: 0
        }
      },
      {
        name: "MainVarController.StartProject",
        className: "MainVarController",
        methodName: "StartProject",
        signature: "vii",
        managedPointer: 4648,
        tableSlot: 65988,
        functionIndex: 25826,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 425,
        enter: {
          code: 5,
          payload: 0
        },
        leave: {
          code: 6,
          payload: 0
        }
      },
      {
        name: "MainVarController.StartTests",
        className: "MainVarController",
        methodName: "StartTests",
        signature: "vii",
        managedPointer: 4651,
        tableSlot: 65991,
        functionIndex: 25829,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 588,
        enter: {
          code: 7,
          payload: 0
        },
        leave: {
          code: 8,
          payload: 0
        }
      },
      {
        name: "MainVarController.SwitchToBeforePrepare",
        className: "MainVarController",
        methodName: "SwitchToBeforePrepare",
        signature: "vii",
        managedPointer: 4653,
        tableSlot: 65993,
        functionIndex: 25834,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 169,
        enter: {
          code: 9,
          payload: 0
        },
        leave: {
          code: 10,
          payload: 0
        }
      },
      {
        name: "MainVarController.ToRepairPartTest",
        className: "MainVarController",
        methodName: "ToRepairPartTest",
        signature: "viii",
        managedPointer: 5425,
        tableSlot: 75135,
        functionIndex: 25840,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 330,
        enter: {
          code: 11,
          payload: 0
        },
        leave: {
          code: 12,
          payload: 1
        }
      },
      {
        name: "MainVarController.ThePartRepairEnd",
        className: "MainVarController",
        methodName: "ThePartRepairEnd",
        signature: "vii",
        managedPointer: 4657,
        tableSlot: 65997,
        functionIndex: 25841,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 142,
        enter: {
          code: 13,
          payload: 0
        },
        leave: {
          code: 14,
          payload: 0
        }
      },
      {
        name: "MainVarController.StartToRepair",
        className: "MainVarController",
        methodName: "StartToRepair",
        signature: "vii",
        managedPointer: 4659,
        tableSlot: 65999,
        functionIndex: 25844,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1156,
        enter: {
          code: 15,
          payload: 0
        },
        leave: {
          code: 16,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.Start",
        className: "Part1Calculate",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4680,
        tableSlot: 66020,
        functionIndex: 25877,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1687,
        enter: {
          code: 17,
          payload: 0
        },
        leave: {
          code: 18,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.Update",
        className: "Part1Calculate",
        methodName: "Update",
        signature: "vii",
        managedPointer: 4681,
        tableSlot: 66021,
        functionIndex: 25883,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 3141,
        enter: {
          code: 19,
          payload: 0
        },
        leave: {
          code: 20,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.CalcuteJiaquan",
        className: "Part1Calculate",
        methodName: "CalcuteJiaquan",
        signature: "vii",
        managedPointer: 4682,
        tableSlot: 66022,
        functionIndex: 25885,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 2063,
        enter: {
          code: 21,
          payload: 0
        },
        leave: {
          code: 22,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.ResultPlay",
        className: "Part1Calculate",
        methodName: "ResultPlay",
        signature: "viii",
        managedPointer: 5436,
        tableSlot: 75146,
        functionIndex: 25886,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 133,
        enter: {
          code: 23,
          payload: 0
        },
        leave: {
          code: 24,
          payload: 1
        }
      },
      {
        name: "Part1Calculate.JiaquanCalculate",
        className: "Part1Calculate",
        methodName: "JiaquanCalculate",
        signature: "vii",
        managedPointer: 4683,
        tableSlot: 66023,
        functionIndex: 25887,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 3840,
        enter: {
          code: 25,
          payload: 0
        },
        leave: {
          code: 26,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.ZuheCalculate",
        className: "Part1Calculate",
        methodName: "ZuheCalculate",
        signature: "vii",
        managedPointer: 4684,
        tableSlot: 66024,
        functionIndex: 25888,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 2478,
        enter: {
          code: 27,
          payload: 0
        },
        leave: {
          code: 28,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.ActiveFunction",
        className: "Part1Calculate",
        methodName: "ActiveFunction",
        signature: "vii",
        managedPointer: 4685,
        tableSlot: 66025,
        functionIndex: 25889,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 2372,
        enter: {
          code: 29,
          payload: 0
        },
        leave: {
          code: 30,
          payload: 0
        }
      },
      {
        name: "Part1Calculate.CalculateScore",
        className: "Part1Calculate",
        methodName: "CalculateScore",
        signature: "vii",
        managedPointer: 4686,
        tableSlot: 66026,
        functionIndex: 25892,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 301,
        enter: {
          code: 31,
          payload: 0
        },
        leave: {
          code: 32,
          payload: 0
        }
      },
      {
        name: "Part2Process.Start",
        className: "Part2Process",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4690,
        tableSlot: 66030,
        functionIndex: 25899,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 247,
        enter: {
          code: 33,
          payload: 0
        },
        leave: {
          code: 34,
          payload: 0
        }
      },
      {
        name: "Part2Process.Update",
        className: "Part2Process",
        methodName: "Update",
        signature: "vii",
        managedPointer: 4696,
        tableSlot: 66036,
        functionIndex: 25912,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 49,
        enter: {
          code: 35,
          payload: 0
        },
        leave: {
          code: 36,
          payload: 0
        }
      },
      {
        name: "Part2Process.StateSwitch",
        className: "Part2Process",
        methodName: "StateSwitch",
        signature: "viiii",
        managedPointer: 2489,
        tableSlot: 80433,
        functionIndex: 25902,
        parameters: [
          127,
          127,
          127,
          127
        ],
        results: [],
        bodySize: 204,
        enter: {
          code: 37,
          payload: 0
        },
        leave: {
          code: 38,
          payload: 0
        }
      },
      {
        name: "Part2Process.Execute",
        className: "Part2Process",
        methodName: "Execute",
        signature: "vii",
        managedPointer: 4695,
        tableSlot: 66035,
        functionIndex: 25903,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1702,
        enter: {
          code: 39,
          payload: 0
        },
        leave: {
          code: 40,
          payload: 0
        }
      },
      {
        name: "Part2Process.CalcateIsRight",
        className: "Part2Process",
        methodName: "CalcateIsRight",
        signature: "iiii",
        managedPointer: 3920,
        tableSlot: 24069,
        functionIndex: 25904,
        parameters: [
          127,
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 1822,
        enter: {
          code: 41,
          payload: 0
        },
        leave: {
          code: 42,
          payload: "result"
        }
      },
      {
        name: "Part2Process.RightResult",
        className: "Part2Process",
        methodName: "RightResult",
        signature: "fiffi",
        managedPointer: 2,
        tableSlot: 559,
        functionIndex: 25909,
        parameters: [
          127,
          125,
          125,
          127
        ],
        results: [
          125
        ],
        bodySize: 123,
        enter: {
          code: 43,
          payload: 0
        },
        leave: {
          code: 44,
          payload: "result"
        }
      },
      {
        name: "Part2Process.ResultTip",
        className: "Part2Process",
        methodName: "ResultTip",
        signature: "viii",
        managedPointer: 5441,
        tableSlot: 75151,
        functionIndex: 25905,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 681,
        enter: {
          code: 45,
          payload: 0
        },
        leave: {
          code: 46,
          payload: 1
        }
      },
      {
        name: "Part2Process.ResultIsRight",
        className: "Part2Process",
        methodName: "ResultIsRight",
        signature: "viii",
        managedPointer: 5442,
        tableSlot: 75152,
        functionIndex: 25911,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 372,
        enter: {
          code: 47,
          payload: 0
        },
        leave: {
          code: 48,
          payload: 1
        }
      },
      {
        name: "Part3Calculate.Start",
        className: "Part3Calculate",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4706,
        tableSlot: 66046,
        functionIndex: 25924,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1593,
        enter: {
          code: 49,
          payload: 0
        },
        leave: {
          code: 50,
          payload: 0
        }
      },
      {
        name: "Part3Calculate.Update",
        className: "Part3Calculate",
        methodName: "Update",
        signature: "vii",
        managedPointer: 4707,
        tableSlot: 66047,
        functionIndex: 25925,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 137,
        enter: {
          code: 51,
          payload: 0
        },
        leave: {
          code: 52,
          payload: 0
        }
      },
      {
        name: "Part3Calculate.Execute",
        className: "Part3Calculate",
        methodName: "Execute",
        signature: "vii",
        managedPointer: 4709,
        tableSlot: 66049,
        functionIndex: 25930,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 767,
        enter: {
          code: 53,
          payload: 0
        },
        leave: {
          code: 54,
          payload: 0
        }
      },
      {
        name: "Part3Calculate.RightInputW",
        className: "Part3Calculate",
        methodName: "RightInputW",
        signature: "vii",
        managedPointer: 4708,
        tableSlot: 66048,
        functionIndex: 25926,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 2793,
        enter: {
          code: 55,
          payload: 0
        },
        leave: {
          code: 56,
          payload: 0
        }
      },
      {
        name: "Part3Calculate.LeftInputIsRight",
        className: "Part3Calculate",
        methodName: "LeftInputIsRight",
        signature: "iii",
        managedPointer: 8342,
        tableSlot: 11939,
        functionIndex: 25928,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 1183,
        enter: {
          code: 57,
          payload: 0
        },
        leave: {
          code: 58,
          payload: "result"
        }
      },
      {
        name: "Part4Calculate.Start",
        className: "Part4Calculate",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4711,
        tableSlot: 66051,
        functionIndex: 25932,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 3805,
        enter: {
          code: 59,
          payload: 0
        },
        leave: {
          code: 60,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Update",
        className: "Part4Calculate",
        methodName: "Update",
        signature: "vii",
        managedPointer: 4713,
        tableSlot: 66053,
        functionIndex: 25939,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 3787,
        enter: {
          code: 61,
          payload: 0
        },
        leave: {
          code: 62,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_UserInput",
        className: "Part4Calculate",
        methodName: "Compare_UserInput",
        signature: "vii",
        managedPointer: 4722,
        tableSlot: 66062,
        functionIndex: 25952,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 202,
        enter: {
          code: 63,
          payload: 0
        },
        leave: {
          code: 64,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_GeJieDianCalculate",
        className: "Part4Calculate",
        methodName: "Compare_GeJieDianCalculate",
        signature: "vii",
        managedPointer: 4723,
        tableSlot: 66063,
        functionIndex: 25956,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1237,
        enter: {
          code: 65,
          payload: 0
        },
        leave: {
          code: 66,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_CalZongWucha",
        className: "Part4Calculate",
        methodName: "Compare_CalZongWucha",
        signature: "vii",
        managedPointer: 4724,
        tableSlot: 66064,
        functionIndex: 25960,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 501,
        enter: {
          code: 67,
          payload: 0
        },
        leave: {
          code: 68,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_WeightUpdate",
        className: "Part4Calculate",
        methodName: "Compare_WeightUpdate",
        signature: "vii",
        managedPointer: 4725,
        tableSlot: 66065,
        functionIndex: 25961,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 837,
        enter: {
          code: 69,
          payload: 0
        },
        leave: {
          code: 70,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_WeightUpdate2_00",
        className: "Part4Calculate",
        methodName: "Compare_WeightUpdate2_00",
        signature: "vii",
        managedPointer: 4726,
        tableSlot: 66066,
        functionIndex: 25962,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1564,
        enter: {
          code: 71,
          payload: 0
        },
        leave: {
          code: 72,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_WeightUpdate2_01",
        className: "Part4Calculate",
        methodName: "Compare_WeightUpdate2_01",
        signature: "vii",
        managedPointer: 4727,
        tableSlot: 66067,
        functionIndex: 25963,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1598,
        enter: {
          code: 73,
          payload: 0
        },
        leave: {
          code: 74,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.Compare_WeightUpdate2_02",
        className: "Part4Calculate",
        methodName: "Compare_WeightUpdate2_02",
        signature: "vii",
        managedPointer: 4728,
        tableSlot: 66068,
        functionIndex: 25964,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 2422,
        enter: {
          code: 75,
          payload: 0
        },
        leave: {
          code: 76,
          payload: 0
        }
      },
      {
        name: "Part4Calculate.CalculateScore",
        className: "Part4Calculate",
        methodName: "CalculateScore",
        signature: "vii",
        managedPointer: 4730,
        tableSlot: 66070,
        functionIndex: 25959,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 301,
        enter: {
          code: 77,
          payload: 0
        },
        leave: {
          code: 78,
          payload: 0
        }
      },
      {
        name: "AudioPlayer.Awake",
        className: "AudioPlayer",
        methodName: "Awake",
        signature: "vii",
        managedPointer: 4798,
        tableSlot: 66138,
        functionIndex: 60211,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 748,
        enter: {
          code: 79,
          payload: 0
        },
        leave: {
          code: 80,
          payload: 0
        }
      },
      {
        name: "AudioPlayer.StopSpeech",
        className: "AudioPlayer",
        methodName: "StopSpeech",
        signature: "vii",
        managedPointer: 4801,
        tableSlot: 66141,
        functionIndex: 60218,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 232,
        enter: {
          code: 81,
          payload: 0
        },
        leave: {
          code: 82,
          payload: 0
        }
      },
      {
        name: "Summary.Start",
        className: "Summary",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4770,
        tableSlot: 66110,
        functionIndex: 26011,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 267,
        enter: {
          code: 83,
          payload: 0
        },
        leave: {
          code: 84,
          payload: 0
        }
      },
      {
        name: "Summary.Submit",
        className: "Summary",
        methodName: "Submit",
        signature: "vii",
        managedPointer: 4771,
        tableSlot: 66111,
        functionIndex: 26012,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1037,
        enter: {
          code: 85,
          payload: 0
        },
        leave: {
          code: 86,
          payload: 0
        }
      },
      {
        name: "Summary.ShowScore",
        className: "Summary",
        methodName: "ShowScore",
        signature: "vii",
        managedPointer: 4772,
        tableSlot: 66112,
        functionIndex: 26014,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1668,
        enter: {
          code: 87,
          payload: 0
        },
        leave: {
          code: 88,
          payload: 0
        }
      },
      {
        name: "SetTestInfo.Start",
        className: "SetTestInfo",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4760,
        tableSlot: 66100,
        functionIndex: 26004,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 337,
        enter: {
          code: 89,
          payload: 0
        },
        leave: {
          code: 90,
          payload: 0
        }
      },
      {
        name: "AudioSource.set_volume",
        className: "AudioSource",
        methodName: "set_volume",
        signature: "vifi",
        managedPointer: 40,
        tableSlot: 61232,
        functionIndex: 60157,
        parameters: [
          127,
          125,
          127
        ],
        results: [],
        bodySize: 109,
        enter: {
          code: 91,
          payload: 0
        },
        leave: {
          code: 92,
          payload: 1
        }
      },
      {
        name: "DragableCard.OnEndDrag",
        className: "DragableCard",
        methodName: "OnEndDrag",
        signature: "viii",
        managedPointer: 5397,
        tableSlot: 75107,
        functionIndex: 25680,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 103,
        enter: {
          code: 93,
          payload: 0
        },
        leave: {
          code: 94,
          payload: 0
        }
      },
      {
        name: "DragableCardOperateZuhe.OnEndDrag",
        className: "DragableCardOperateZuhe",
        methodName: "OnEndDrag",
        signature: "viii",
        managedPointer: 5403,
        tableSlot: 75113,
        functionIndex: 25688,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 92,
        enter: {
          code: 95,
          payload: 0
        },
        leave: {
          code: 96,
          payload: 0
        }
      },
      {
        name: "DragFunction.OnEndDrag",
        className: "DragFunction",
        methodName: "OnEndDrag",
        signature: "viii",
        managedPointer: 5394,
        tableSlot: 75104,
        functionIndex: 25666,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 92,
        enter: {
          code: 97,
          payload: 0
        },
        leave: {
          code: 98,
          payload: 0
        }
      },
      {
        name: "PageView.Start",
        className: "PageView",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4677,
        tableSlot: 66017,
        functionIndex: 25870,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 1034,
        enter: {
          code: 99,
          payload: 0
        },
        leave: {
          code: 100,
          payload: 0
        }
      },
      {
        name: "PageView.Update",
        className: "PageView",
        methodName: "Update",
        signature: "vii",
        managedPointer: 4678,
        tableSlot: 66018,
        functionIndex: 25872,
        parameters: [
          127,
          127
        ],
        results: [],
        bodySize: 914,
        enter: {
          code: 101,
          payload: 0
        },
        leave: {
          code: 102,
          payload: 0
        }
      },
      {
        name: "PageView.SetPageIndex",
        className: "PageView",
        methodName: "SetPageIndex",
        signature: "viii",
        managedPointer: 5433,
        tableSlot: 75143,
        functionIndex: 25701,
        parameters: [
          127,
          127,
          127
        ],
        results: [],
        bodySize: 374,
        enter: {
          code: 103,
          payload: 0
        },
        leave: {
          code: 104,
          payload: 1
        }
      },
      {
        name: "InputField_WebGL.Start",
        className: "InputField_WebGL",
        methodName: "Start",
        signature: "vii",
        managedPointer: 4630,
        tableSlot: 65970,
        functionIndex: 25787,
        parameters: [127, 127],
        results: [],
        bodySize: 1230,
        enter: { code: 105, payload: 0 },
        leave: { code: 106, payload: 0 }
      },
      {
        name: "Part4Calculate.Cal2NetOutValue",
        className: "Part4Calculate",
        methodName: "Cal2NetOutValue",
        signature: "vii",
        managedPointer: 4714,
        tableSlot: 66054,
        functionIndex: 25942,
        parameters: [127, 127],
        results: [],
        bodySize: 1001,
        enter: { code: 107, payload: 0 },
        leave: { code: 108, payload: 0 }
      }
    ],
    getters: {
      active: {
        name: "GameObject.get_activeInHierarchy",
        className: "GameObject",
        methodName: "get_activeInHierarchy",
        signature: "iii",
        managedPointer: 6370,
        tableSlot: 9967,
        functionIndex: 42725,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 116
      },
      name: {
        name: "Object.get_name",
        className: "Object",
        methodName: "get_name",
        signature: "iii",
        managedPointer: 6415,
        tableSlot: 10012,
        functionIndex: 42895,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 226
      },
      gameObject: {
        name: "Component.get_gameObject",
        className: "Component",
        methodName: "get_gameObject",
        signature: "iii",
        managedPointer: 6330,
        tableSlot: 9927,
        functionIndex: 42553,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 110
      },
      childCount: {
        name: "Transform.get_childCount",
        className: "Transform",
        methodName: "get_childCount",
        signature: "iii",
        managedPointer: 6511,
        tableSlot: 10108,
        functionIndex: 59241,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 110
      },
      child: {
        name: "Transform.GetChild",
        className: "Transform",
        methodName: "GetChild",
        signature: "iiii",
        managedPointer: 2892,
        tableSlot: 23041,
        functionIndex: 59247,
        parameters: [
          127,
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 128
      },
      transform: {
        name: "GameObject.get_transform",
        className: "GameObject",
        methodName: "get_transform",
        signature: "iii",
        managedPointer: 6367,
        tableSlot: 9964,
        functionIndex: 42720,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 110
      },
      parent: {
        name: "Transform.get_parent",
        className: "Transform",
        methodName: "get_parent",
        signature: "iii",
        managedPointer: 6508,
        tableSlot: 10105,
        functionIndex: 58992,
        parameters: [
          127,
          127
        ],
        results: [
          127
        ],
        bodySize: 142
      }
    },
    audio: {
      setVolume: {
        name: "AudioSource.set_volume",
        className: "AudioSource",
        methodName: "set_volume",
        signature: "vifi",
        managedPointer: 40,
        tableSlot: 61232,
        functionIndex: 60157,
        parameters: [
          127,
          125,
          127
        ],
        results: [],
        bodySize: 109
      }
    },
    input: {
      setCharacterLimit: {
        name: "InputField.set_characterLimit",
        className: "InputField",
        methodName: "set_characterLimit",
        signature: "viii",
        managedPointer: 4702,
        tableSlot: 74412,
        functionIndex: 44935,
        parameters: [127, 127, 127],
        results: [],
        bodySize: 495
      }
    },
    repair: {
      setText: { name: "Text.set_text", signature: "viii", managedPointer: 4846, tableSlot: 74556, functionIndex: 49370 },
      newString: { name: "String.CreateString", signature: "iiii", managedPointer: 1395, tableSlot: 21544, functionIndex: 34205 },
      getText: { name: "Component.GetComponent<Text>", signature: "iii", managedPointer: 8606, tableSlot: 12203, functionIndex: 36696, metadataAddress: 3059240 }
    },
    objectiveLayout: {
      getPosition: { name: "RectTransform.get_anchoredPosition_Injected", signature: "viii", managedPointer: 3471, tableSlot: 73181, functionIndex: 58960 },
      setPosition: { name: "RectTransform.set_anchoredPosition_Injected", signature: "viii", managedPointer: 3472, tableSlot: 73182, functionIndex: 58962 },
      getSize: { name: "RectTransform.get_sizeDelta_Injected", signature: "viii", managedPointer: 3473, tableSlot: 73183, functionIndex: 58964 },
      setSize: { name: "RectTransform.set_sizeDelta_Injected", signature: "viii", managedPointer: 3474, tableSlot: 73184, functionIndex: 58966 },
      getScroll: { name: "Scrollbar.get_value", signature: "fii", managedPointer: 143, tableSlot: 770, functionIndex: 49169 },
      setScroll: { name: "Scrollbar.set_value", signature: "vifi", managedPointer: 94, tableSlot: 61286, functionIndex: 49164 }
    },
    geometry: {
      rect: {
        name: "UnityEngine.RectTransform$$get_rect_Injected",
        signature: "viii",
        managedPointer: 3466,
        tableSlot: 73176,
        functionIndex: 58950,
        parameters: [
          127,
          127,
          127
        ],
        results: []
      },
      transformPoint: {
        name: "UnityEngine.Transform$$TransformPoint_Injected",
        signature: "viiii",
        managedPointer: 1858,
        tableSlot: 79802,
        functionIndex: 59238,
        parameters: [
          127,
          127,
          127,
          127
        ],
        results: []
      },
      screenWidth: {
        name: "UnityEngine.Screen$$get_width",
        signature: "ii",
        managedPointer: 1238,
        tableSlot: 2489,
        functionIndex: 59059,
        parameters: [
          127
        ],
        results: [
          127
        ]
      },
      screenHeight: {
        name: "UnityEngine.Screen$$get_height",
        signature: "ii",
        managedPointer: 1239,
        tableSlot: 2490,
        functionIndex: 59060,
        parameters: [
          127
        ],
        results: [
          127
        ]
      }
    }
  };

  // assistant/bridge/wasm.ts
  var EVENT_MARKER = 1095303168;
  var GUARD_MARKER = 1095368704;
  var HEADER = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
  var utf8 = new TextDecoder("utf-8", { fatal: true });
  var WasmReader = class {
    bytes;
    offset = 0;
    constructor(bytes) {
      this.bytes = bytes;
    }
    byte() {
      const value = this.bytes[this.offset++];
      if (value === void 0) throw new Error("Truncated WASM binary");
      return value;
    }
    u32() {
      let value = 0;
      for (let count = 0; count < 5; count++) {
        const byte = this.byte();
        if (count === 4 && byte > 15) throw new Error("Invalid WASM u32");
        value += (byte & 127) * 2 ** (count * 7);
        if (!(byte & 128)) return value;
      }
      throw new Error("Invalid WASM u32");
    }
    i32() {
      let value = 0, shift = 0, byte = 0;
      do {
        if (shift >= 35) throw new Error("Invalid WASM i32");
        byte = this.byte();
        value |= (byte & 127) << shift;
        shift += 7;
      } while (byte & 128);
      if (shift < 32 && byte & 64) value |= -1 << shift;
      return value | 0;
    }
    take(length) {
      if (!Number.isSafeInteger(length) || length < 0 || this.offset + length > this.bytes.length) {
        throw new Error("Truncated WASM binary section");
      }
      const slice = this.bytes.subarray(this.offset, this.offset + length);
      this.offset += length;
      return slice;
    }
    name() {
      return utf8.decode(this.take(this.u32()));
    }
    limits() {
      const flags = this.u32();
      if (flags > 3) throw new Error("Unsupported WASM limits");
      this.u32();
      if (flags & 1) this.u32();
    }
  };
  function u32(value) {
    if (!Number.isInteger(value) || value < 0 || value > 4294967295) throw new Error("Invalid u32 value");
    const result = [];
    do {
      const byte = value & 127;
      value >>>= 7;
      result.push(byte | (value ? 128 : 0));
    } while (value);
    return result;
  }
  function i32(value) {
    value |= 0;
    const result = [];
    for (; ; ) {
      const byte = value & 127;
      value >>= 7;
      const last = value === 0 && !(byte & 64) || value === -1 && !!(byte & 64);
      result.push(byte | (last ? 0 : 128));
      if (last) return result;
    }
  }
  function concat(parts) {
    const result = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
    let offset = 0;
    for (const part of parts) {
      result.set(part, offset);
      offset += part.length;
    }
    return result;
  }
  function serializeWasm(sections) {
    return concat([HEADER, ...sections.flatMap((section) => [
      new Uint8Array([section.id, ...u32(section.data.length)]),
      section.data
    ])]);
  }
  function describeWasm(binary, globalValues = {}) {
    if (binary.length < 8 || HEADER.some((byte, index) => binary[index] !== byte)) {
      throw new Error("Invalid WASM header");
    }
    const reader = new WasmReader(binary.subarray(8));
    const result = {
      sections: [],
      types: [],
      imports: [],
      globalImports: [],
      functionTypes: [],
      definedTypes: [],
      bodies: [],
      exports: [],
      elements: /* @__PURE__ */ new Map(),
      elementSegments: []
    };
    while (reader.offset < reader.bytes.length) {
      const id = reader.byte(), data = reader.take(reader.u32());
      result.sections.push({ id, data });
      const section = new WasmReader(data);
      if (id === 1) {
        const count = section.u32();
        for (let index = 0; index < count; index++) {
          if (section.byte() !== 96) throw new Error("Unsupported WASM function type");
          const parameters = [...section.take(section.u32())];
          const results = [...section.take(section.u32())];
          result.types.push({ parameters, results });
        }
      } else if (id === 2) {
        const count = section.u32();
        for (let index = 0; index < count; index++) {
          const module = section.name(), name = section.name(), kind = section.byte();
          if (kind === 0) {
            const typeIndex = section.u32();
            result.imports.push({ module, name, typeIndex, functionIndex: result.imports.length });
            result.functionTypes.push(typeIndex);
          } else if (kind === 1) {
            section.byte();
            section.limits();
          } else if (kind === 2) section.limits();
          else if (kind === 3) {
            section.byte();
            section.byte();
            result.globalImports.push({ module, name });
          } else throw new Error("Unsupported WASM import kind");
        }
      } else if (id === 3) {
        const count = section.u32();
        for (let index = 0; index < count; index++) result.definedTypes.push(section.u32());
        result.functionTypes.push(...result.definedTypes);
      } else if (id === 7) {
        const count = section.u32();
        for (let index = 0; index < count; index++) {
          result.exports.push({ name: section.name(), kind: section.byte(), index: section.u32() });
        }
      } else if (id === 9) {
        const count = section.u32();
        for (let index = 0; index < count; index++) {
          const flags = section.u32();
          if (flags !== 0 && flags !== 2) throw new Error("Unsupported WASM element segment");
          if (flags === 2 && section.u32() !== 0) throw new Error("Unsupported WASM table index");
          const opcode = section.byte();
          let offset;
          let resolvedOffset;
          if (opcode === 65) {
            offset = section.i32();
            resolvedOffset = offset;
          } else if (opcode === 35) {
            const globalIndex = section.u32();
            const imported = result.globalImports[globalIndex];
            if (!imported) throw new Error("Invalid WASM table offset global");
            offset = { globalIndex };
            resolvedOffset = globalValues[`${imported.module}.${imported.name}`];
          } else throw new Error("Unsupported WASM table offset");
          if (section.byte() !== 11 || resolvedOffset !== void 0 && resolvedOffset < 0) throw new Error("Invalid WASM table offset");
          if (flags === 2 && section.byte() !== 0) throw new Error("Unsupported WASM element kind");
          const count2 = section.u32(), functions = [];
          for (let slot = 0; slot < count2; slot++) {
            const functionIndex = section.u32();
            functions.push(functionIndex);
            if (resolvedOffset !== void 0) result.elements.set(resolvedOffset + slot, functionIndex);
          }
          result.elementSegments.push({ offset, functions });
        }
      } else if (id === 10) {
        const count = section.u32();
        for (let index = 0; index < count; index++) result.bodies.push(section.take(section.u32()));
      }
    }
    if (result.bodies.length !== result.definedTypes.length) throw new Error("WASM function/code count mismatch");
    return result;
  }
  function instrumentWasm(binary, hooks2) {
    const wasm = describeWasm(binary);
    if (!hooks2.length) return concat([binary]);
    const log = wasm.imports.find((item) => item.module === "env" && item.name === "_emscripten_log");
    if (!log) throw new Error("Required WASM log import is missing");
    const logType = wasm.types[log.typeIndex];
    if (!logType || logType.parameters.join() !== "127,127" || logType.results.length) {
      throw new Error("Unexpected WASM log signature");
    }
    const guard = wasm.imports.find((item) => item.module === "env" && item.name === "invoke_ii");
    if (hooks2.some((hook) => hook.guard)) {
      const type = guard && wasm.types[guard.typeIndex];
      if (!guard || !type || type.parameters.join() !== "127,127" || type.results.join() !== "127") throw new Error("Required WASM submission guard is missing");
    }
    const used = /* @__PURE__ */ new Set();
    const bodies = [...wasm.bodies], types = [...wasm.definedTypes];
    for (const hook of hooks2) {
      if (used.has(hook.functionIndex)) throw new Error(`Duplicate method hook: ${hook.name}`);
      used.add(hook.functionIndex);
      const bodyIndex = hook.functionIndex - wasm.imports.length;
      const original = wasm.bodies[bodyIndex];
      const typeIndex = wasm.functionTypes[hook.functionIndex];
      const type = typeIndex === void 0 ? void 0 : wasm.types[typeIndex];
      if (bodyIndex < 0 || !original || !type) throw new Error(`Unknown WASM function: ${hook.name}`);
      if (type.parameters.join() !== hook.parameters.join() || type.results.join() !== hook.results.join()) {
        throw new Error(`Changed method signature: ${hook.name}`);
      }
      if (hook.bodySize !== void 0 && original.length !== hook.bodySize) {
        throw new Error(`Changed method body size: ${hook.name}`);
      }
      if (type.results.length > 1) throw new Error(`Unsupported result arity: ${hook.name}`);
      const implementationIndex = wasm.imports.length + bodies.length;
      bodies.push(original);
      types.push(typeIndex);
      const returnLocal = type.parameters.length;
      const bytes = type.results.length ? [1, 1, type.results[0]] : [0];
      const signal = (item, isReturn) => {
        if (!item) return;
        if (!Number.isInteger(item.code) || item.code < 1 || item.code > 65535) throw new Error("Invalid hook event code");
        let local;
        let valueType;
        if (item.payload === "result") {
          if (!isReturn || ![127, 125].includes(type.results[0] ?? -1)) throw new Error(`Invalid observed result: ${hook.name}`);
          local = returnLocal;
          valueType = type.results[0];
        } else {
          if (!Number.isInteger(item.payload) || ![127, 125].includes(type.parameters[item.payload] ?? -1)) {
            throw new Error(`Invalid observed parameter: ${hook.name}`);
          }
          local = item.payload;
          valueType = type.parameters[item.payload];
        }
        bytes.push(65, ...i32(EVENT_MARKER | item.code), 32, ...u32(local));
        if (valueType === 125) bytes.push(188);
        bytes.push(16, ...u32(log.functionIndex));
      };
      signal(hook.enter, false);
      if (hook.guard) {
        if (type.results.length || type.parameters[0] !== 127 || !hook.enter) throw new Error(`Invalid guarded method: ${hook.name}`);
        bytes.push(65, ...i32(GUARD_MARKER | hook.enter.code), 32, 0, 16, ...u32(guard.functionIndex), 4, 64, 5);
      }
      type.parameters.forEach((_, index) => bytes.push(32, ...u32(index)));
      bytes.push(16, ...u32(implementationIndex));
      if (type.results.length) bytes.push(33, ...u32(returnLocal));
      if (hook.guard) bytes.push(11);
      signal(hook.leave, true);
      if (type.results.length) bytes.push(32, ...u32(returnLocal));
      bytes.push(11);
      bodies[bodyIndex] = new Uint8Array(bytes);
    }
    const functionData = new Uint8Array([...u32(types.length), ...types.flatMap(u32)]);
    const codeData = concat([new Uint8Array(u32(bodies.length)), ...bodies.flatMap((body) => [
      new Uint8Array(u32(body.length)),
      body
    ])]);
    return serializeWasm(wasm.sections.map((section) => section.id === 3 ? { id: 3, data: functionData } : section.id === 10 ? { id: 10, data: codeData } : section));
  }

  // assistant/bridge/memory.ts
  var UnityMemory = class {
    buffer;
    current = null;
    constructor(buffer) {
      this.buffer = buffer;
    }
    view(address, length) {
      const buffer = this.buffer();
      if (!this.current || this.current.buffer !== buffer) this.current = new DataView(buffer);
      if (!Number.isSafeInteger(address) || address < 0 || address + length > buffer.byteLength) {
        throw new Error("Unity memory read is out of bounds");
      }
      return this.current;
    }
    u32(address) {
      return this.view(address, 4).getUint32(address, true);
    }
    i32(address) {
      return this.view(address, 4).getInt32(address, true);
    }
    f32(address) {
      return this.view(address, 4).getFloat32(address, true);
    }
    boolean(address) {
      return this.view(address, 1).getUint8(address) !== 0;
    }
    string(pointer) {
      if (!pointer) return null;
      const length = this.i32(pointer + 8);
      if (length < 0 || length > 8192) throw new Error("Invalid Unity string length");
      const view = this.view(pointer + 12, length * 2);
      let text = "";
      for (let index = 0; index < length; index++) text += String.fromCharCode(view.getUint16(pointer + 12 + index * 2, true));
      return text;
    }
    className(pointer) {
      if (!pointer) return null;
      const klass = this.u32(pointer), name = this.u32(klass + 8);
      if (!klass || !name) throw new Error("Invalid Unity class pointer");
      let text = "";
      for (let index = 0; index < 128; index++) {
        const byte = this.view(name + index, 1).getUint8(name + index);
        if (!byte) return text;
        text += String.fromCharCode(byte);
      }
      throw new Error("Invalid Unity class name length");
    }
    arrayLength(pointer, size, limit) {
      const length = this.u32(pointer + 12);
      if (length > limit) throw new Error("Invalid Unity array length");
      this.view(pointer + 16, length * size);
      return length;
    }
    pointers(pointer, limit = 128) {
      if (!pointer) return [];
      return Array.from({ length: this.arrayLength(pointer, 4, limit) }, (_, index) => this.u32(pointer + 16 + index * 4));
    }
    booleans(pointer, limit = 128) {
      if (!pointer) return [];
      return Array.from({ length: this.arrayLength(pointer, 1, limit) }, (_, index) => this.boolean(pointer + 16 + index));
    }
    floats(pointer, limit = 128) {
      if (!pointer) return [];
      return Array.from({ length: this.arrayLength(pointer, 4, limit) }, (_, index) => this.f32(pointer + 16 + index * 4));
    }
    text(pointer) {
      return pointer ? this.string(this.u32(pointer + 104)) : null;
    }
  };

  // assistant/bridge/geometry.ts
  var NativeGeometry = class {
    scratch = 0;
    paths = /* @__PURE__ */ new Map();
    width = 0;
    height = 0;
    clip = null;
    module;
    memory;
    getter;
    active;
    constructor(module, memory, getter, active) {
      this.module = module;
      this.memory = memory;
      this.getter = getter;
      this.active = active;
    }
    invoke(key, ...args) {
      const method = build_profile_default.geometry[key], fn = this.module[`dynCall_${method.signature}`];
      if (typeof fn !== "function") throw new Error("\u63A7\u4EF6\u5B9A\u4F4D\u63A5\u53E3\u5C1A\u672A\u5C31\u7EEA");
      return fn(method.managedPointer, ...args, 0);
    }
    begin(clipTransform = 0) {
      if (!this.scratch) {
        const allocate = this.module._malloc;
        if (typeof allocate !== "function") throw new Error("\u63A7\u4EF6\u5B9A\u4F4D\u4E34\u65F6\u7F13\u51B2\u533A\u4E0D\u53EF\u7528");
        this.scratch = allocate(64);
        if (!this.scratch) throw new Error("\u65E0\u6CD5\u5206\u914D\u63A7\u4EF6\u5B9A\u4F4D\u7F13\u51B2\u533A");
      }
      this.width = this.invoke("screenWidth");
      this.height = this.invoke("screenHeight");
      if (this.width < 1 || this.height < 1) throw new Error("\u5B9E\u9A8C\u753B\u5E03\u5C3A\u5BF8\u65E0\u6548");
      this.clip = null;
      if (clipTransform) this.clip = this.rect(clipTransform);
    }
    root(component) {
      return this.getter("transform", this.getter("gameObject", component));
    }
    path(root, path) {
      const key = `${root}:${path}`;
      if (this.paths.has(key)) return this.paths.get(key);
      let current = root;
      for (const name of path.split("/")) {
        const count = this.getter("childCount", current);
        if (count < 0 || count > 512) throw new Error("\u63A7\u4EF6\u5C42\u7EA7\u6570\u91CF\u5F02\u5E38");
        let child = 0;
        for (let i = 0; i < count; i++) {
          const candidate = this.getter("child", current, i);
          if (this.memory.string(this.getter("name", candidate)) === name) {
            child = candidate;
            break;
          }
        }
        if (!child) return 0;
        current = child;
      }
      this.paths.set(key, current);
      return current;
    }
    rect(transform) {
      if (!transform || this.memory.className(transform) !== "RectTransform") return null;
      if (!this.active(this.getter("gameObject", transform))) return null;
      const scratch = this.scratch;
      this.invoke("rect", transform, scratch);
      const x = this.memory.f32(scratch), y = this.memory.f32(scratch + 4), width = this.memory.f32(scratch + 8), height = this.memory.f32(scratch + 12);
      const points = [];
      for (const [px, py] of [[x, y], [x + width, y], [x, y + height], [x + width, y + height]]) {
        const view = new DataView(this.module.HEAPU8.buffer);
        view.setFloat32(scratch + 16, px, true);
        view.setFloat32(scratch + 20, py, true);
        view.setFloat32(scratch + 24, 0, true);
        this.invoke("transformPoint", transform, scratch + 16, scratch + 32);
        points.push([this.memory.f32(scratch + 32), this.memory.f32(scratch + 36)]);
      }
      if (points.flat().some((value) => !Number.isFinite(value))) throw new Error("\u63A7\u4EF6\u5B9A\u4F4D\u8FD4\u56DE\u65E0\u6548\u5750\u6807");
      const left = Math.min(...points.map((point) => point[0])) / this.width, right = Math.max(...points.map((point) => point[0])) / this.width;
      const top = 1 - Math.max(...points.map((point) => point[1])) / this.height, bottom = 1 - Math.min(...points.map((point) => point[1])) / this.height;
      return { x: left, y: top, width: right - left, height: bottom - top };
    }
    transform(id, label, transform) {
      return this.anchor(id, label, this.rect(transform));
    }
    bounds(transform) {
      return this.rect(transform);
    }
    anchor(id, label, rect) {
      if (!rect) return null;
      const clip = this.clip ?? { x: 0, y: 0, width: 1, height: 1 };
      const left = Math.max(0, rect.x, clip.x), top = Math.max(0, rect.y, clip.y), right = Math.min(1, rect.x + rect.width, clip.x + clip.width), bottom = Math.min(1, rect.y + rect.height, clip.y + clip.height);
      if (right - left < 2 / this.width || bottom - top < 2 / this.height) return null;
      return { id, label, x: left, y: top, width: right - left, height: bottom - top };
    }
    component(id, label, component, parent = false) {
      if (!component) return null;
      const transform = this.root(component);
      if (!parent) return this.transform(id, label, transform);
      let rect = this.rect(this.getter("parent", transform));
      if (rect && (rect.width < 2 / this.width || rect.height < 2 / this.height)) rect = this.rect(transform);
      return this.anchor(id, label, rect);
    }
  };

  // assistant/bridge/native-contract.ts
  var MODULE4_FIELDS = {
    forward: ["\u9690\u85CF\u8282\u70B9 h1 \u7684 net", "\u9690\u85CF\u8282\u70B9 h1 \u7684 out", "\u9690\u85CF\u8282\u70B9 h2 \u7684 net", "\u9690\u85CF\u8282\u70B9 h2 \u7684 out", "\u8F93\u51FA\u8282\u70B9 o1 \u7684 net", "\u8F93\u51FA\u8282\u70B9 o1 \u7684 out", "\u8F93\u51FA\u8282\u70B9 o2 \u7684 net", "\u8F93\u51FA\u8282\u70B9 o2 \u7684 out"],
    loss: ["Eo1", "Eo2"],
    weight: ["\u8F93\u51FA O1 \u7684\u8BEF\u5DEE\u5BFC\u6570", "\u8F93\u51FA O1 \u7684\u6FC0\u6D3B\u5BFC\u6570", "\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "\u8F93\u51FA\u5C42 W\xB211 \u7684\u66F4\u65B0\u503C"],
    updated: ["\u8F93\u51FA O1 \u7684\u8BEF\u5DEE\u9879", "O1 \u8DEF\u5F84\u7684\u8FDE\u63A5\u6743\u91CD", "\u8F93\u51FA O2 \u7684\u8BEF\u5DEE\u9879", "O2 \u8DEF\u5F84\u7684\u8FDE\u63A5\u6743\u91CD", "\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "1\u2212\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "\u8F93\u5165 X1", "W\xB911 \u7684\u66F4\u65B0\u503C"]
  };
  var CHECK_METHODS = {
    "Part1Calculate.CalcuteJiaquan": 1,
    "Part2Process.Execute": 2,
    "Part3Calculate.Execute": 3,
    "Part4Calculate.Compare_UserInput": 4,
    "Part4Calculate.Compare_GeJieDianCalculate": 4,
    "Part4Calculate.Compare_CalZongWucha": 4,
    "Part4Calculate.Compare_WeightUpdate": 4,
    "Part4Calculate.Compare_WeightUpdate2_00": 4,
    "Part4Calculate.Compare_WeightUpdate2_01": 4,
    "Part4Calculate.Compare_WeightUpdate2_02": 4
  };

  // docs/reference/course-content-index.json
  var course_content_index_default = {
    recorded_on: "2026-10-31",
    baseline_commit: "61f717f",
    source_file: "ai_sjwltz-webgl/Build/webgl.data.unityweb",
    source_container_entry: "data.unity3d",
    tools: {
      UnityPy: "1.25.4",
      TypeTreeGeneratorAPI: "0.0.10",
      Il2CppDumper: "6.7.46"
    },
    counts: {
      slides: 37,
      nonempty_ui_texts_extracted: 219,
      course_ui_texts_indexed: 190,
      audio_resources: 19
    },
    limitations: [
      "Only static assets were inspected; runtime event bridge is not verified.",
      "Audio contents have not been listened to or transcribed.",
      "Part4Calculate component 2991 did not fully deserialize; no missing values were fabricated.",
      "Slide topics are human summaries; use original page images when checking formulas."
    ],
    slides: [
      {
        number: 1,
        name: "\u5E7B\u706F\u724701",
        asset: "sharedassets0.assets",
        path_id: 119,
        topic: "\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u67B6\u6784\uFF1A\u5C01\u9762"
      },
      {
        number: 2,
        name: "\u5E7B\u706F\u724702",
        asset: "resources.assets",
        path_id: 6,
        topic: "\u795E\u7ECF\u7F51\u7EDC\uFF1A\u751F\u7269\u7F51\u7EDC\u4E0E\u4EBA\u5DE5\u7F51\u7EDC"
      },
      {
        number: 3,
        name: "\u5E7B\u706F\u724703",
        asset: "resources.assets",
        path_id: 12,
        topic: "\u751F\u7269\u795E\u7ECF\u5143\uFF1A\u7EC6\u80DE\u4F53\u3001\u6811\u7A81\u3001\u8F74\u7A81\u3001\u7A81\u89E6"
      },
      {
        number: 4,
        name: "\u5E7B\u706F\u724704",
        asset: "resources.assets",
        path_id: 28,
        topic: "\u751F\u7269\u795E\u7ECF\u5143\u4E0E\u8FDE\u63A5\u7F51\u7EDC\u7684\u80CC\u666F\u4ECB\u7ECD"
      },
      {
        number: 5,
        name: "\u5E7B\u706F\u724705",
        asset: "resources.assets",
        path_id: 13,
        topic: "\u751F\u7269\u795E\u7ECF\u5143\u7684\u5DE5\u4F5C\u72B6\u6001\u4E0E\u53EF\u5851\u6027"
      },
      {
        number: 6,
        name: "\u5E7B\u706F\u724706",
        asset: "resources.assets",
        path_id: 9,
        topic: "\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u5904\u7406\u5355\u5143"
      },
      {
        number: 7,
        name: "\u5E7B\u706F\u724707",
        asset: "resources.assets",
        path_id: 20,
        topic: "\u5904\u7406\u5355\u5143\u7684\u52A0\u6743\u3001\u7EC4\u5408\u548C\u8F93\u51FA\u529F\u80FD"
      },
      {
        number: 8,
        name: "\u5E7B\u706F\u724708",
        asset: "resources.assets",
        path_id: 29,
        topic: "\u8F93\u5165\u5411\u91CF\u4E0E\u8FDE\u63A5\u6743\u5411\u91CF"
      },
      {
        number: 9,
        name: "\u5E7B\u706F\u724709",
        asset: "resources.assets",
        path_id: 40,
        topic: "\u9608\u503C\u3001\u504F\u7F6E\u4E0E\u6269\u5C55\u8F93\u5165"
      },
      {
        number: 10,
        name: "\u5E7B\u706F\u724710",
        asset: "resources.assets",
        path_id: 5,
        topic: "\u70B9\u79EF\u4E0E\u52A0\u6743\u548C"
      },
      {
        number: 11,
        name: "\u5E7B\u706F\u724711",
        asset: "resources.assets",
        path_id: 24,
        topic: "\u6FC0\u6D3B\u51FD\u6570\u4E0E\u795E\u7ECF\u5143\u8F93\u51FA"
      },
      {
        number: 12,
        name: "\u5E7B\u706F\u724712",
        asset: "resources.assets",
        path_id: 4,
        topic: "\u5E38\u7528\u6FC0\u6D3B\u51FD\u6570\u76EE\u5F55"
      },
      {
        number: 13,
        name: "\u5E7B\u706F\u724713",
        asset: "resources.assets",
        path_id: 30,
        topic: "\u7EBF\u6027\u51FD\u6570"
      },
      {
        number: 14,
        name: "\u5E7B\u706F\u724714",
        asset: "resources.assets",
        path_id: 18,
        topic: "Sigmoid \u51FD\u6570\u53CA\u5176\u5BFC\u6570"
      },
      {
        number: 15,
        name: "\u5E7B\u706F\u724715",
        asset: "resources.assets",
        path_id: 32,
        topic: "Tanh\u3001ReLU\u3001PReLU\u3001ELU\u3001Maxout"
      },
      {
        number: 16,
        name: "\u5E7B\u706F\u724716",
        asset: "resources.assets",
        path_id: 35,
        topic: "\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u7684\u62D3\u6251\u7ED3\u6784\uFF1A\u7AE0\u8282\u9875"
      },
      {
        number: 17,
        name: "\u5E7B\u706F\u724717",
        asset: "resources.assets",
        path_id: 17,
        topic: "\u8282\u70B9\u4E0E\u8FDE\u63A5\u6743"
      },
      {
        number: 18,
        name: "\u5E7B\u706F\u724718",
        asset: "resources.assets",
        path_id: 16,
        topic: "\u5355\u5C42\u795E\u7ECF\u7F51\u7EDC\uFF1A\u8282\u70B9\u5C42"
      },
      {
        number: 19,
        name: "\u5E7B\u706F\u724719",
        asset: "resources.assets",
        path_id: 37,
        topic: "\u5355\u5C42\u795E\u7ECF\u7F51\u7EDC\uFF1A\u8F93\u5165\u4E0E\u5168\u8FDE\u63A5"
      },
      {
        number: 20,
        name: "\u5E7B\u706F\u724720",
        asset: "resources.assets",
        path_id: 38,
        topic: "\u5355\u5C42\u795E\u7ECF\u7F51\u7EDC\uFF1A\u6743\u91CD\u77E9\u9635"
      },
      {
        number: 21,
        name: "\u5E7B\u706F\u724721",
        asset: "resources.assets",
        path_id: 25,
        topic: "\u5355\u5C42\u795E\u7ECF\u7F51\u7EDC\uFF1AS=xW \u4E0E\u8F93\u51FA"
      },
      {
        number: 22,
        name: "\u5E7B\u706F\u724722",
        asset: "resources.assets",
        path_id: 33,
        topic: "\u591A\u5C42\u795E\u7ECF\u7F51\u7EDC\uFF1A\u5C42\u95F4\u7EA7\u8054"
      },
      {
        number: 23,
        name: "\u5E7B\u706F\u724723",
        asset: "resources.assets",
        path_id: 15,
        topic: "\u4E24\u5C42\u524D\u9988\u5168\u8FDE\u63A5\u7F51\u7EDC"
      },
      {
        number: 24,
        name: "\u5E7B\u706F\u724724",
        asset: "resources.assets",
        path_id: 34,
        topic: "\u975E\u7EBF\u6027\u6FC0\u6D3B\u4E0E\u591A\u5C42\u8868\u8FBE\u80FD\u529B"
      },
      {
        number: 25,
        name: "\u5E7B\u706F\u724725",
        asset: "resources.assets",
        path_id: 19,
        topic: "\u8F93\u5165\u5C42\u3001\u9690\u85CF\u5C42\u548C\u8F93\u51FA\u5C42"
      },
      {
        number: 26,
        name: "\u5E7B\u706F\u724726",
        asset: "resources.assets",
        path_id: 31,
        topic: "\u524D\u5411\u4F20\u64AD\u548C\u53CD\u5411\u4F20\u64AD\uFF1A\u7AE0\u8282\u9875"
      },
      {
        number: 27,
        name: "\u5E7B\u706F\u724727",
        asset: "resources.assets",
        path_id: 36,
        topic: "\u524D\u5411\u4F20\u64AD\u4E0E\u8BAD\u7EC3\u6982\u89C8"
      },
      {
        number: 28,
        name: "\u5E7B\u706F\u724728",
        asset: "resources.assets",
        path_id: 10,
        topic: "\u68AF\u5EA6\u4E0B\u964D"
      },
      {
        number: 29,
        name: "\u5E7B\u706F\u724729",
        asset: "resources.assets",
        path_id: 39,
        topic: "\u94FE\u5F0F\u6CD5\u5219\uFF1A\u590D\u5408\u51FD\u6570"
      },
      {
        number: 30,
        name: "\u5E7B\u706F\u724730",
        asset: "resources.assets",
        path_id: 11,
        topic: "\u94FE\u5F0F\u6CD5\u5219\uFF1A\u5355\u53D8\u91CF\u793A\u4F8B"
      },
      {
        number: 31,
        name: "\u5E7B\u706F\u724731",
        asset: "resources.assets",
        path_id: 3,
        topic: "\u94FE\u5F0F\u6CD5\u5219\uFF1A\u591A\u53D8\u91CF\u4E0E\u8DEF\u5F84\u6C42\u548C"
      },
      {
        number: 32,
        name: "\u5E7B\u706F\u724732",
        asset: "resources.assets",
        path_id: 27,
        topic: "\u5355\u9690\u85CF\u5C42\u7F51\u7EDC\u7684\u524D\u5411\u4F20\u64AD"
      },
      {
        number: 33,
        name: "\u5E7B\u706F\u724733",
        asset: "resources.assets",
        path_id: 26,
        topic: "\u9010\u5C42\u524D\u5411\u8BA1\u7B97\u7684\u9012\u63A8\u8868\u8FBE"
      },
      {
        number: 34,
        name: "\u5E7B\u706F\u724734",
        asset: "resources.assets",
        path_id: 41,
        topic: "\u53CD\u5411\u4F20\u64AD\uFF1A\u8BAD\u7EC3\u6D41\u7A0B"
      },
      {
        number: 35,
        name: "\u5E7B\u706F\u724735",
        asset: "resources.assets",
        path_id: 8,
        topic: "\u53CD\u5411\u4F20\u64AD\uFF1A\u8BAD\u7EC3\u6D41\u7A0B\u7EED\u9875"
      },
      {
        number: 36,
        name: "\u5E7B\u706F\u724736",
        asset: "resources.assets",
        path_id: 22,
        topic: "\u5355\u6837\u672C\u635F\u5931\u4E0E\u53C2\u6570\u6C42\u5BFC"
      },
      {
        number: 37,
        name: "\u5E7B\u706F\u724737",
        asset: "resources.assets",
        path_id: 23,
        topic: "\u5E73\u5747\u635F\u5931\u4E0E\u68AF\u5EA6\u4E0B\u964D\u53C2\u6570\u66F4\u65B0"
      }
    ],
    ui_texts: [
      {
        class: "Text",
        asset: "level0",
        component_id: 2787,
        path: "Canvas3D/3DTips/03Tip4parts/00Tip1part_red/Text",
        text: "\u6D4B\u8BD5\u524D\u5411\u4F20\u64AD\u548C\u53CD\u5411\u529F\u80FD\n\u672A\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2805,
        path: "Canvas3D/3DTips/02Tip3parts/00Tip1part_red/Text",
        text: "\u5305\u542B\u9690\u85CF\u5C42\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\n\u672A\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2822,
        path: "Canvas3D/3DTips/01Tip2parts /00Tip1part_red/Text",
        text: "\u591A\u8F93\u5165\u591A\u8F93\u51FA\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\n\u672A\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2828,
        path: "Canvas3D/3DTips/03Tip4parts/01Tip1part_green/Text",
        text: "\u6D4B\u8BD5\u524D\u5411\u4F20\u64AD\u548C\u53CD\u5411\u529F\u80FD\n\u5DF2\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2836,
        path: "Canvas3D/3DTips/00Tip1parts/01Tip1part_green/Text",
        text: "\u5355\u4EBA\u5DE5\u795E\u7ECF\u5143\n\u5DF2\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2849,
        path: "Canvas3D/3DTips/00Tip1parts/00Tip1part_red/Text",
        text: "\u5355\u4EBA\u5DE5\u795E\u7ECF\u5143\n\u672A\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2852,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/CalculateButton/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2853,
        path: "Canvas3D/3DTips/01Tip2parts /01Tip1part_green/Text",
        text: "\u591A\u8F93\u5165\u591A\u8F93\u51FA\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\n\u5DF2\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2870,
        path: "Canvas3D/3DTips/02Tip3parts/01Tip1part_green/Text",
        text: "\u5305\u542B\u9690\u85CF\u5C42\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\n\u5DF2\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2896,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip2/Text",
        text: "\u8BF7\u62D6\u52A8\u6B63\u786E\u7684\u7EC4\u5408\u8FD0\u7B97\u7B26\u5230N\u7684\u4F4D\u7F6E"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2897,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/X1/8.5",
        text: "8.5"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2899,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/X1",
        text: "X1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2903,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip0/Text",
        text: "\u8BF7\u4EFB\u610F\u8F93\u5165X\u3001W\u548CB\u7684\u503C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2912,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S11/circle/Image/Data",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2913,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S11/circle/Image (1)/Data",
        text: "0.4"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2914,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/X2/Text (1)",
        text: "0.65"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2924,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/B",
        text: "b"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2929,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/XW",
        text: "XW"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2932,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip4/Text",
        text: "\u8BF7\u62D6\u52A8\u4EFB\u610F\u6FC0\u6D3B\u51FD\u6570\u5230F\u4F4D\u7F6E"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2941,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S11/S1/Text",
        text: "S1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2942,
        path: "Canvas/TestReport/Scores/Score/Test2",
        text: "\u6A21\u5757\u4E8C\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2951,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_h1/Text",
        text: "h1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2955,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FB\u503C/Text",
        text: "\u504F\u79FB\u503C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2959,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Tips/Tip2/Text",
        text: "\u901A\u8FC7\u8BA1\u7B97\u586B\u5199\u5404\u4E2AH\u7684\u503C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2960,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_X1/Text",
        text: "X1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2962,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S22/circle/Image/Data",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2963,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/X1/Text",
        text: "X1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2970,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/Arrowsb1-2/Text",
        text: "b1=0.35"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2974,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/Bg00 (2)/X1 (2)",
        text: "g01"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 2984,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/Left_yuanli/0.85/Text",
        text: "8.5"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3002,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/06W3_row/Placeholder",
        text: "\u5217"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3003,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FBValue/Text (1)",
        text: "b"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3004,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W12_1 (1)",
        text: "0.50"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3011,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_o2/Value (1)",
        text: "0.99"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3017,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/W/Text",
        text: "W"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3023,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/ResultText",
        text: "\u6267\u884C\u7ED3\u679C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3029,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FBValue/Text (4)",
        text: "0.65"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3032,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/O/O1",
        text: "0.01"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3033,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W12 (1)/Text",
        text: "0.50"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3037,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/1/W21/Text",
        text: "0.2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3038,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/Example1/Text",
        text: "\uFF080.05,0.01\uFF09"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3047,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/Arrowsb2-2/Text",
        text: "b2=0.60"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3048,
        path: "Canvas/TestReport/Scores/Score/Test4",
        text: "\u6A21\u5757\u56DB\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3053,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W2/Text",
        text: "W2="
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3054,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/X1",
        text: "X1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3058,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/04W2_row/Placeholder",
        text: "\u5217"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3062,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_X2/Value (1)",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3072,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW21-1/Text",
        text: "1\n W 21"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3076,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_o1/Value",
        text: "0.01"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3079,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/2/W11/Text",
        text: "0.0"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3080,
        path: "Canvas/TestReport/Scores/Score/Zonngjie",
        text: "\u5B9E\u9A8C\u5FC3\u5F97\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3081,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (6)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3091,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/AutoShowUp/Text0 (2)",
        text: "0.05"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3092,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_h2/Value",
        text: "0.596884378"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3093,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip5/Text",
        text: "\u8BF7\u8BA1\u7B97\u6B63\u786E\u7684XW\u503C\u5E76\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3095,
        path: "Canvas/TestReport/Scores/Score/AllScore",
        text: "\u603B\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3097,
        path: "Canvas/TestReport/Scores/Score/Test1",
        text: "\u6A21\u5757\u4E00\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3111,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S33/circle/Image/Text (1)",
        text: "W13"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3120,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W22_1",
        text: "0.30"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3124,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (4)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3129,
        path: "Canvas/TestReport/ConfirmBtn/Text",
        text: "\u786E\u5B9A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3130,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/2/W21/Text",
        text: "1.3"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3133,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/0/W11/Text",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3135,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_o1/Text",
        text: "O1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3136,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FBValue/Text (3)",
        text: "0.35"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3138,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/03W2_line/Placeholder",
        text: "\u884C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3149,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/02W1_row/Placeholder",
        text: "\u5217"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3150,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_o2/Text",
        text: "O2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3158,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Result/Error/Button/Text",
        text: "\u8FD4\u56DE\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3163,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S33/circle/Image/Data (1)",
        text: "0.0"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3178,
        path: "Canvas/BeforeClassPrepare/Text",
        text: "\u8BFE\u524D\u9884\u4E60"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3181,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW11-1/Text",
        text: "1\n W 11"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3189,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/1/W11/Text",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3190,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/01W1_line/Placeholder",
        text: "\u884C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3195,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S11/circle/Image (1)/Text (2)",
        text: "W21"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3198,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Result/Right/Confirm/Text",
        text: "\u786E\u5B9A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3207,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (2)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3210,
        path: "Canvas/StartRepair/Text (1)",
        text: "\u98DE\u8239\u7684\u4EBA\u5DE5\u667A\u80FD\u7CFB\u7EDF\u906D\u5230\u7834\u574F\uFF0C\u73B0\u5728\u4F60\u9700\u8981\u91CD\u65B0\u642D\u5EFA\u795E\u7ECF\u7F51\u7EDC\uFF0C\u5E76\u8BA9\u4EBA\u5DE5\u667A\u80FD\u91CD\u65B0\u542F\u52A8\u3002\u4F60\u9700\u8981\u5230\u5404\u4E2A\u64CD\u4F5C\u53F0\u4E0A\uFF0C\u6309\u7167\u987A\u5E8F\uFF0C\u5B8C\u6210\uFF1A\n1.\u5355\u4EBA\u5DE5\u795E\u7ECF\u5143\u7684\u4FEE\u590D\uFF1B\n2.\u591A\u8F93\u5165\u591A\u8F93\u51FA\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u7684\u4FEE\u590D\uFF1B\n3.\u5305\u542B\u9690\u85CF\u5C42\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u7684\u4FEE\u590D\uFF1B\n4.\u6D4B\u8BD5\u524D\u5411\u4F20\u64AD\u548C\u53CD\u5411\u529F\u80FD\u3002"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3215,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/2/W21/Text",
        text: "1.3"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3216,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u521D\u59CB\u5316",
        text: "\u521D\u59CB\u5316"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3222,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S22/circle/Image (1)/Text (2)",
        text: "W22"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3246,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (5)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3272,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Result/0Right/Button/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3273,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/N",
        text: "N"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3274,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Title/Text",
        text: "\u68AF\u5EA6\u4E0B\u964D\u4E0E\u53CD\u5411\u4F20\u64AD\u673A\u5236"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3290,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/Z",
        text: "Z"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3294,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_X2/Text",
        text: "X2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3296,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Result/0Right/Text",
        text: "\u795E\u7ECF\u7F51\u7EDC\u6784\u5EFA\u6210\u529F"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3297,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FBValue/Text (5)",
        text: "}"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3303,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/0/W21/Text",
        text: "0.4"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3306,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/0/W11/Text",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3314,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/X/X1",
        text: "0.05"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3316,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/CalculateBtns (1)/weightUpdate5/Text",
        text: "0.29950229"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3322,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW22-1/Text",
        text: "1\n W 22"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3323,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (3)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3327,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W21/Text",
        text: "0.20"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3329,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/AutoShowUp/Text0",
        text: "0.036350306"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3338,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Execute/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3348,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_b1/Text",
        text: "1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3351,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_X1/Value",
        text: "0.05"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3355,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (7)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3356,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W11_1 (1)",
        text: "0.40"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3358,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/CalculateBtns (1)/weightUpdate3/Text",
        text: "0.19956143"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3361,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Result/1Error/Text",
        text: "S\u503C\u8BA1\u7B97\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3364,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/F",
        text: "F"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3370,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W12/Text",
        text: "0.25"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3379,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/1/W11/Text",
        text: "0.1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3380,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/O",
        text: "O"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3392,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Title/Text",
        text: "\u591A\u8F93\u5165\u591A\u8F93\u51FA\u795E\u7ECF\u7F51\u7EDC\u6784\u5EFA"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3397,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S22/S2/Text",
        text: "S2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3399,
        path: "Canvas/StartRepair/Button/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3408,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/Bg00 (2)/X1 (3)",
        text: "g02"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3416,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Output/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3417,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW11-2/Text",
        text: "2\n W 11"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3418,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Result/Error/Text",
        text: "S\u503C\u8BA1\u7B97\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3419,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/H21",
        text: "H21"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3425,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u6837\u672C/Text",
        text: "\u6837\u672C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3429,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S22/circle/Image/Text (1)",
        text: "W12"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3446,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W21_1 (1)",
        text: "0.45"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3459,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/X2/Text",
        text: "X2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3467,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_b2/Text",
        text: "1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3475,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW22-2/Text",
        text: "2\n W 22"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3476,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W11/Text",
        text: "0.15"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3479,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (8)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3480,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW12-2/Text",
        text: "2\n W 12"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3483,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/H11",
        text: "H11"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3490,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W12_1",
        text: "0.25"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3491,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/Tip/Text (1)",
        text: "\u9690\u85CF\u5C421\u548C\u9690\u85CF\u5C422\u7684\u8F93\u51FA\u4F7F\u7528ReLU\u6FC0\u6D3B\u51FD\u6570\uFF0C\u8F93\u51FA\u5C42O\u4E0D\u4F7F\u7528\u6FC0\u6D3B\u51FD\u6570"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3494,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/2/W11/Text",
        text: "0.0"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3498,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_h1/Value",
        text: "0.593269992"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3500,
        path: "Canvas/TestReport/Title/Text",
        text: "\u5B9E\u9A8C\u5FC3\u5F97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3508,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W22 (1)/Text",
        text: "0.55"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3509,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S11/circle/Image/Text (1)",
        text: "W11"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3510,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/S",
        text: "S"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3511,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W11 (1)/Text",
        text: "0.40"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3512,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W22_1 (1)",
        text: "0.55"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3514,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/X1Value",
        text: "8.5"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3515,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip3/Text",
        text: "\u8BF7\u8BA1\u7B97\u6B63\u786E\u7684S\u503C\u5E76\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3521,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Result/1Error/Button/Text",
        text: "\u8FD4\u56DE\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3524,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W22/Text",
        text: "0.30"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3527,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/H22",
        text: "H22"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3528,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WData/1/W21/Text",
        text: "0.2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3531,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/Left_yuanli/0.65/Text",
        text: "0.65"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3532,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/RightCalculate/WGongshi/0/W21/Text",
        text: "0.4"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3537,
        path: "Canvas/TestReport/InputField/Placeholder",
        text: "\u8BF7\u586B\u5199\u5B9E\u9A8C\u5FC3\u5F97\uFF0C\u4E0D\u5C11\u4E8E20\u5B57"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3539,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/X2Value",
        text: "0.65"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3540,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/AutoShowUp/Text0 (1)",
        text: "0.241300709"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3541,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW12-1/Text",
        text: "1\n W 12"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3543,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/AutoShowUp/ButtonVal/Text0 (3)",
        text: "0.000438568"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3546,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/03/weightUpdate2/CalculateBtns (1)/weightUpdate4/Text",
        text: "0.24975114"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3551,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/H12",
        text: "H12"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3553,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/\u504F\u79FBValue/Text (2)",
        text: "{"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3556,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S33/circle/Image (1)/Data (2)",
        text: "1.3"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3559,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/H31",
        text: "H31"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3560,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W1/Text",
        text: "W1="
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3561,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Input/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3564,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Tips/Tip1/Text",
        text: "\u901A\u8FC7\u62D6\u62FD\u586B\u5165\u5BF9\u5E94\u7684W\u503C\uFF0C\u7136\u540E\u8BA1\u7B97\u51FA\u5BF9\u5E94\u7684\u503C\uFF0C\u5E76\u586B\u5165S\u4F4D\u7F6E"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3572,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Title/Text",
        text: "\u53CC\u5C42\u9690\u85CF\u5C42\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u6784\u5EFA\u4E0E\u524D\u5411\u4F20\u64AD\u673A\u5236"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3574,
        path: "Canvas/StartRepair/startSceneRepairBtn/Text",
        text: "\u5F00\u59CB\u4FEE\u590D"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3579,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W11_1",
        text: "0.15"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3580,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Tips/Tip1/Text",
        text: "\u8BF7\u8F93\u5165\u4E09\u4E2A\u77E9\u9635W\u7684\u5927\u5C0F\u3001\u884C\u6570\u548C\u5217\u6570"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3582,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/LeftTex/Texts/X2",
        text: "X2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3588,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Result/Right/Text",
        text: "\u795E\u7ECF\u7F51\u7EDC\u6784\u5EFA\u6210\u529F"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3589,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/Arrows/ArrowsW21-2/Text",
        text: "2\n W 21"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3593,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/RightTex/InputTextRight/05W3_line/Placeholder",
        text: "\u884C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3597,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/Example2/Text",
        text: "\uFF080.10,0.99\uFF09"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3598,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S33/circle/Image (1)/Text (2)",
        text: "W23"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3600,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/W21_1",
        text: "0.20"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3604,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S33/S3/Text",
        text: "S3"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3607,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Result/Right/Button/Text",
        text: "Button"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3609,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Red_Circles/S22/circle/Image (1)/Data",
        text: "0.2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3610,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/O/O11",
        text: "0.99"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3611,
        path: "Canvas/TestReport/Scores/Score/Test3",
        text: "\u6A21\u5757\u4E09\u5F97\u5206\uFF1A"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3612,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/01/TextAuto/X/X1 (1)",
        text: "0.10"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3617,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/StartInput/W21 (1)/Text",
        text: "0.45"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3618,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/00/LeftRedCircle/RedCircle_h2/Text",
        text: "h2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3625,
        path: "Canvas/TestReport/Tips/Tip0/Text",
        text: "\u8BF7\u586B\u5199\u5B9E\u9A8C\u5FC3\u5F97"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3643,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/XW",
        text: "XW"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3651,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/X2",
        text: "X2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3657,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Result/1Error/Button/Text",
        text: "\u8FD4\u56DE\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3662,
        path: "Canvas/Contents/PartsObjs/Parts/Part3/Result/1Error/Text",
        text: "\u8F93\u5165\u6570\u636E\u6709\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3665,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Tips/Tip1/Text",
        text: "\u8BF7\u62D6\u52A8\u52A0\u6743\u8FD0\u7B97\u7B26\u81F3\u76F8\u5E94\u4F4D\u7F6E"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3668,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/W1",
        text: "W1"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3675,
        path: "Canvas/Contents/PartsObjs/Parts/Part2/Tips/Tip0/Text",
        text: "\u6839\u636E\u63D0\u793A\uFF0C\u8FDE\u63A5\u4E0D\u540C\u7684S"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3680,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/Title/Text",
        text: "\u4EBA\u5DE5\u795E\u7ECF\u5143\u6784\u5EFA"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3690,
        path: "Canvas/Contents/PartsObjs/Parts/Part1/LeftTex/Texts/W2",
        text: "W2"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3707,
        path: "Canvas/BeforeClassPrepare/ppt/InputField/Placeholder",
        text: "\u8F93\u5165\u8DF3\u8F6C\u9875"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3709,
        path: "Canvas/BeforeClassPrepare/ppt/Button/Text",
        text: "\u8DF3\u8F6C"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3713,
        path: "Canvas/BeforeClassPrepare/ppt/TextNumber",
        text: "New Text"
      },
      {
        class: "Text",
        asset: "level0",
        component_id: 3724,
        path: "Canvas/Contents/PartsObjs/Parts/Part4/Scroll View/Viewport/Content/TipClickBtnAutoCalculate/Text (1)",
        text: "\u8BF7\u70B9\u51FB\u8FDB\u884C\u7CFB\u7EDF\u81EA\u52A8\u8BA1\u7B97"
      }
    ],
    audio: [
      {
        name: "00part10",
        seconds: 4.37,
        asset: "resources.assets",
        path_id: 43
      },
      {
        name: "01part11",
        seconds: 3.89,
        asset: "resources.assets",
        path_id: 60
      },
      {
        name: "02part12",
        seconds: 4.25,
        asset: "resources.assets",
        path_id: 42
      },
      {
        name: "03part13",
        seconds: 3.41,
        asset: "resources.assets",
        path_id: 57
      },
      {
        name: "04part14",
        seconds: 3.82,
        asset: "resources.assets",
        path_id: 45
      },
      {
        name: "05part21",
        seconds: 3.55,
        asset: "resources.assets",
        path_id: 51
      },
      {
        name: "06part22",
        seconds: 7.84,
        asset: "resources.assets",
        path_id: 49
      },
      {
        name: "07part31",
        seconds: 5.27,
        asset: "resources.assets",
        path_id: 52
      },
      {
        name: "08part32",
        seconds: 3.43,
        asset: "resources.assets",
        path_id: 47
      },
      {
        name: "09part15",
        seconds: 4.03,
        asset: "resources.assets",
        path_id: 56
      },
      {
        name: "part10",
        seconds: 4.37,
        asset: "resources.assets",
        path_id: 55
      },
      {
        name: "part11",
        seconds: 3.89,
        asset: "resources.assets",
        path_id: 50
      },
      {
        name: "part12",
        seconds: 4.25,
        asset: "resources.assets",
        path_id: 59
      },
      {
        name: "part13",
        seconds: 3.41,
        asset: "resources.assets",
        path_id: 54
      },
      {
        name: "part14",
        seconds: 3.82,
        asset: "resources.assets",
        path_id: 58
      },
      {
        name: "part21",
        seconds: 5.99,
        asset: "resources.assets",
        path_id: 53
      },
      {
        name: "part22",
        seconds: 9.51,
        asset: "resources.assets",
        path_id: 48
      },
      {
        name: "part31",
        seconds: 5.3,
        asset: "resources.assets",
        path_id: 44
      },
      {
        name: "part32",
        seconds: 3.43,
        asset: "resources.assets",
        path_id: 46
      }
    ]
  };

  // assistant/core/course.ts
  var MODULES = [
    { id: 1, title: "\u4EBA\u5DE5\u795E\u7ECF\u5143", subtitle: "\u7406\u89E3\u4E00\u4E2A\u8BA1\u7B97\u5355\u5143", topic: "\u8F93\u5165\u3001\u6743\u91CD\u3001\u504F\u7F6E\u3001\u7EC4\u5408\u8FD0\u7B97\u4E0E\u6FC0\u6D3B\u51FD\u6570" },
    { id: 2, title: "\u591A\u8F93\u5165\u591A\u8F93\u51FA", subtitle: "\u4ECE\u795E\u7ECF\u5143\u5230\u7F51\u7EDC", topic: "\u8FDE\u63A5\u5173\u7CFB\u3001\u6743\u91CD\u4E0B\u6807\u3001\u52A0\u6743\u548C\u4E0E\u77E9\u9635\u8868\u8FBE" },
    { id: 3, title: "\u53CC\u9690\u85CF\u5C42\u7F51\u7EDC", subtitle: "\u8BA9\u4FE1\u606F\u9010\u5C42\u6D41\u52A8", topic: "2\u21923\u21922\u21921 \u7F51\u7EDC\u3001\u77E9\u9635\u7EF4\u5EA6\u3001ReLU \u4E0E\u524D\u5411\u4F20\u64AD" },
    { id: 4, title: "\u68AF\u5EA6\u4E0E\u53CD\u5411\u4F20\u64AD", subtitle: "\u8BA9\u7F51\u7EDC\u4ECE\u8BEF\u5DEE\u4E2D\u5B66\u4E60", topic: "net/out\u3001\u635F\u5931\u3001\u94FE\u5F0F\u6CD5\u5219\u3001\u68AF\u5EA6\u4E0E\u6743\u91CD\u66F4\u65B0" }
  ];
  function step(id, module, title, goal, hint, pages, questions, narration = hint) {
    return { id, module, title, goal, hint, pages, questions, narration };
  }
  var STEPS = {
    welcome: step("welcome", null, "\u6B22\u8FCE\u8FDB\u5165\u795E\u7ECF\u7F51\u7EDC\u5B9E\u9A8C", "\u4ECE\u4E00\u4E2A\u795E\u7ECF\u5143\u5F00\u59CB\uFF0C\u9010\u6B65\u4FEE\u590D\u98DE\u8239\u7684\u667A\u80FD\u7CFB\u7EDF\u3002", "\u586B\u5199\u4FE1\u606F\u6216\u9009\u62E9\u201C\u8DF3\u8FC7\u5E76\u5F00\u59CB\u201D\u3002\u6211\u4F1A\u8DDF\u968F\u4F60\u7684\u771F\u5B9E\u64CD\u4F5C\u63D0\u4F9B\u63D0\u793A\u3002", [1, 6], ["\u8FD9\u4E2A\u5B9E\u9A8C\u4F1A\u5B66\u5230\u4EC0\u4E48\uFF1F"]),
    menu: step("menu", null, "\u5148\u9009\u4E00\u6761\u5B66\u4E60\u8DEF\u5F84", "\u9884\u4E60\u77E5\u8BC6\uFF0C\u518D\u8FDB\u5165\u56DB\u4E2A\u5B9E\u9A8C\u6A21\u5757\u3002", "\u53EF\u4EE5\u5148\u9605\u8BFB\u8BFE\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5F00\u59CB\u5B9E\u9A8C\u3002\u9700\u8981\u89E3\u91CA\u65F6\u968F\u65F6\u5411\u6211\u63D0\u95EE\u3002", [1, 16, 26], ["\u5B9E\u9A8C\u7684\u56DB\u4E2A\u6A21\u5757\u6709\u4EC0\u4E48\u8054\u7CFB\uFF1F"]),
    introduction: step("introduction", null, "\u51C6\u5907\u4FEE\u590D\u98DE\u8239\u7684\u667A\u80FD\u7CFB\u7EDF", "\u6309\u987A\u5E8F\u5B8C\u6210\u56DB\u4E2A\u6A21\u5757\u3002", "\u8BFB\u5B8C\u60C5\u5883\u8BF4\u660E\u540E\uFF0C\u70B9\u51FB\u539F\u9875\u9762\u7684\u201C\u5F00\u59CB\u4FEE\u590D\u201D\u3002\u8FDB\u5165\u573A\u666F\u540E\uFF0C\u6211\u4F1A\u8DDF\u7740\u4F60\u7684\u5B9E\u9645\u64CD\u4F5C\u7EE7\u7EED\u63D0\u793A\u3002", [1, 6], ["\u56DB\u4E2A\u4FEE\u590D\u6A21\u5757\u5206\u522B\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F"]),
    "repair-prompt": step("repair-prompt", null, "\u786E\u8BA4\u5F53\u524D\u4FEE\u590D\u4EFB\u52A1", "\u8FDB\u5165\u5F53\u524D\u5141\u8BB8\u4FEE\u590D\u7684\u6A21\u5757\u3002", "\u539F\u9875\u9762\u51FA\u73B0\u201C\u5F00\u59CB\u4FEE\u590D\u201D\u65F6\uFF0C\u70B9\u51FB\u5B83\u8FDB\u5165\u4EFB\u52A1\uFF1B\u82E5\u63D0\u793A\u6309\u987A\u5E8F\u4FEE\u590D\uFF0C\u5148\u8FD4\u56DE\u5BFB\u627E\u5F53\u524D\u5F85\u5B8C\u6210\u7684\u6A21\u5757\u3002", [], ["\u600E\u6837\u627E\u5230\u4E0B\u4E00\u4E2A\u64CD\u4F5C\u53F0\uFF1F"]),
    exploring: step("exploring", null, "\u627E\u5230\u5F53\u524D\u5F85\u4FEE\u590D\u7684\u64CD\u4F5C\u53F0", "\u6309\u987A\u5E8F\u5B8C\u6210\u56DB\u4E2A\u6A21\u5757\u7684\u4FEE\u590D\u3002", "\u7528 W\u3001A\u3001S\u3001D \u79FB\u52A8\uFF0C\u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u8F6C\u52A8\u89C6\u89D2\uFF0C\u9760\u8FD1\u5F85\u4FEE\u590D\u7684\u5C4F\u5E55\u5E76\u70B9\u51FB\u3002", [1], ["\u4E3A\u4EC0\u4E48\u5148\u4ECE\u5355\u4E2A\u4EBA\u5DE5\u795E\u7ECF\u5143\u5F00\u59CB\uFF1F"]),
    "m1.parameters": step("m1.parameters", 1, "\u8F93\u5165 X\u3001W \u4E0E b", "\u8BA4\u8BC6\u8F93\u5165\u3001\u6743\u91CD\u548C\u504F\u7F6E\u3002", "\u5728\u4E24\u8DEF\u8F93\u5165\u3001\u5BF9\u5E94\u6743\u91CD\u548C\u504F\u7F6E\u4F4D\u7F6E\u586B\u5199\u6570\u503C\u3002\u5148\u89C2\u5BDF\u6BCF\u4E2A\u91CF\u5728\u8BA1\u7B97\u4E2D\u627F\u62C5\u4EC0\u4E48\u4F5C\u7528\u3002", [6, 8, 9], ["\u6743\u91CD\u548C\u504F\u7F6E\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", "\u504F\u7F6E\u4E3A\u4EC0\u4E48\u4E0D\u662F\u53E6\u4E00\u4E2A\u666E\u901A\u8F93\u5165\uFF1F"]),
    "m1.operators": step("m1.operators", 1, "\u9009\u62E9\u52A0\u6743\u8FD0\u7B97", "\u628A\u8F93\u5165\u4E0E\u6743\u91CD\u8FDE\u63A5\u6210\u8BA1\u7B97\u8DEF\u5F84\u3002", "\u5C06\u52A0\u6743\u8FD0\u7B97\u7B26\u62D6\u5230\u4E24\u8DEF\u84DD\u8272\u69FD\u4F4D\u4E2D\u3002\u653E\u7A33\u540E\u677E\u5F00\u9F20\u6807\uFF0C\u518D\u6309\u9009\u5B9A\u8FD0\u7B97\u8BA1\u7B97\u7ED3\u679C\u3002", [7, 10], ["\u52A0\u6743\u8FD0\u7B97\u4E3A\u4EC0\u4E48\u5E38\u7528\u4E58\u6CD5\uFF1F"]),
    "m1.weighted": step("m1.weighted", 1, "\u8BA1\u7B97\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C", "\u5206\u522B\u6838\u5BF9\u6BCF\u4E00\u8DEF\u8F93\u5165\u4E0E\u6743\u91CD\u7684\u7EC4\u5408\u7ED3\u679C\u3002", "\u586B\u5199\u4E24\u4E2A XW \u503C\uFF0C\u518D\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u63D0\u4EA4\u6821\u9A8C\u3002\u6CE8\u610F\u4E0D\u8981\u628A\u4E58\u6CD5\u5F53\u6210\u52A0\u6CD5\u3002", [8, 10], ["\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\u600E\u6837\u8BA1\u7B97\uFF1F", "\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u628A\u6240\u6709\u6570\u76F8\u52A0\uFF1F"]),
    "m1.combine": step("m1.combine", 1, "\u9009\u62E9\u7EC4\u5408\u8FD0\u7B97", "\u5C06\u4E24\u8DEF\u7ED3\u679C\u6C47\u603B\u5230\u795E\u7ECF\u5143\u3002", "\u628A\u6B63\u786E\u7684\u7EC4\u5408\u8FD0\u7B97\u7B26\u62D6\u5230 N \u69FD\u4F4D\uFF0C\u6CE8\u610F\u56FE\u6807\u843D\u70B9\u4E0E\u76EE\u6807\u69FD\u4F4D\u5BF9\u9F50\u3002", [7, 9, 10], ["\u7EC4\u5408\u8FD0\u7B97\u4E0E\u52A0\u6743\u8FD0\u7B97\u6709\u4EC0\u4E48\u533A\u522B\uFF1F"]),
    "m1.sum": step("m1.sum", 1, "\u8BA1\u7B97\u7EC4\u5408\u7ED3\u679C S", "\u628A\u52A0\u6743\u7ED3\u679C\u548C\u5F53\u524D\u4EFB\u52A1\u7684\u504F\u7F6E\u5173\u7CFB\u4E00\u8D77\u8003\u8651\u3002", "\u6838\u5BF9\u7EC4\u5408\u8FD0\u7B97\u53CA\u504F\u7F6E\uFF0C\u586B\u5199 S \u540E\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002S \u662F\u8FDB\u5165\u6FC0\u6D3B\u51FD\u6570\u4E4B\u524D\u7684\u503C\u3002", [9, 11], ["S \u548C\u6700\u7EC8\u8F93\u51FA\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", "\u9608\u503C\u4E0E\u504F\u7F6E\u7684\u7B26\u53F7\u4E3A\u4EC0\u4E48\u6709\u65F6\u4E0D\u540C\uFF1F"]),
    "m1.activation": step("m1.activation", 1, "\u9009\u62E9\u6FC0\u6D3B\u51FD\u6570", "\u89C2\u5BDF\u540C\u4E00\u4E2A S \u600E\u6837\u53D8\u6210\u4E0D\u540C\u7684\u8F93\u51FA\u3002", "\u5C06\u4E00\u4E2A\u6FC0\u6D3B\u51FD\u6570\u62D6\u5230 F \u4F4D\u7F6E\uFF0C\u518D\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002\u6BD4\u8F83\u8F93\u51FA\u4E0E S \u7684\u5173\u7CFB\uFF0C\u5E76\u5B8C\u6210\u6A21\u5757\u63D0\u793A\u7684\u540E\u7EED\u64CD\u4F5C\u3002", [12, 13, 14, 15], ["ReLU \u4E0E Sigmoid \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", "\u6240\u6709\u6FC0\u6D3B\u51FD\u6570\u7684\u8F93\u51FA\u90FD\u6709\u754C\u5417\uFF1F"]),
    "m3.dimensions": step("m3.dimensions", 3, "\u586B\u5199\u4E09\u4E2A\u6743\u91CD\u77E9\u9635\u7684\u7EF4\u5EA6", "\u8BA9\u76F8\u90BB\u5C42\u7684\u8F93\u5165\u4E0E\u8F93\u51FA\u7EF4\u5EA6\u5339\u914D\u3002", "\u6309\u76F8\u90BB\u5C42\u8282\u70B9\u6570\u586B\u5199\u4E09\u4E2A\u77E9\u9635\u7684\u884C\u5217\u3002\u7EF4\u5EA6\u6B63\u786E\u540E\u4F1A\u81EA\u52A8\u8FDB\u5165\u524D\u5411\u8BA1\u7B97\uFF0C\u8FD9\u4E00\u6B65\u4E0D\u7528\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002", [20, 21, 23], ["\u600E\u6837\u4ECE\u76F8\u90BB\u5C42\u8282\u70B9\u6570\u5224\u65AD\u77E9\u9635\u5927\u5C0F\uFF1F", "\u884C\u5411\u91CF\u548C\u5217\u5411\u91CF\u7684\u5199\u6CD5\u6709\u4EC0\u4E48\u533A\u522B\uFF1F"]),
    "m3.forward": step("m3.forward", 3, "\u9010\u5C42\u8BA1\u7B97\u9690\u85CF\u8282\u70B9", "\u5C06\u524D\u4E00\u5C42\u7684\u8F93\u51FA\u4F5C\u4E3A\u4E0B\u4E00\u5C42\u7684\u8F93\u5165\u3002", "\u7EF4\u5EA6\u5DF2\u7ECF\u901A\u8FC7\uFF0C\u63A5\u4E0B\u6765\u6309\u5C42\u586B\u5199\u5404\u4E2A H \u548C\u8F93\u51FA O\u3002\u5B8C\u6210\u5168\u90E8\u8282\u70B9\u8BA1\u7B97\u540E\uFF0C\u518D\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002\u9690\u85CF\u5C42\u7528 ReLU\uFF0C\u8F93\u51FA\u5C42\u4E0D\u6FC0\u6D3B\u3002", [22, 24, 32, 33], ["ReLU \u5728\u8D1F\u6570\u8F93\u5165\u65F6\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F", "\u591A\u5C42\u7F51\u7EDC\u4E3A\u4EC0\u4E48\u9700\u8981\u975E\u7EBF\u6027\uFF1F"]),
    "m4.formula": step("m4.formula", 4, "\u914D\u7F6E\u6837\u672C\u548C\u8FDE\u63A5\u6743\u91CD", "\u5148\u770B\u6E05\u8F93\u5165\u3001\u9690\u85CF\u8282\u70B9\u3001\u8F93\u51FA\u8282\u70B9\u4E4B\u95F4\u7684\u8BA1\u7B97\u8DEF\u5F84\u3002", "\u628A\u4E24\u7EC4\u6837\u672C\u5206\u522B\u62D6\u5230 X1\u3001X2\uFF0C\u518D\u628A\u516B\u4E2A\u6743\u91CD\u62D6\u5230\u56FE\u4E2D\u5BF9\u5E94\u7684\u8FDE\u63A5\u7EBF\u4E0A\u3002\u5168\u90E8\u653E\u597D\u540E\u70B9\u51FB\u7B2C\u4E00\u7EC4\u201C\u4FEE\u590D\u201D\u3002", [26, 27, 32, 33], ["\u8FD9\u5F20\u7F51\u7EDC\u56FE\u600E\u6837\u4ECE\u5DE6\u5230\u53F3\u8BA1\u7B97\uFF1F", "\u6743\u91CD\u4E0B\u6807\u600E\u6837\u5BF9\u5E94\u56FE\u4E2D\u7684\u8FDE\u63A5\uFF1F"]),
    "m4.forward": step("m4.forward", 4, "\u5B8C\u6210\u524D\u5411\u8BA1\u7B97", "\u533A\u5206\u8282\u70B9\u7684 net \u4E0E\u6FC0\u6D3B\u540E\u7684 out\u3002", "\u6309\u8F93\u5165\u5C42\u3001\u9690\u85CF\u5C42\u3001\u8F93\u51FA\u5C42\u7684\u987A\u5E8F\u8BA1\u7B97\u3002\u4F7F\u7528\u672C\u5B9E\u9A8C\u5F53\u524D\u7ED9\u5B9A\u7684\u6743\u91CD\u4E0E\u504F\u7F6E\uFF0C\u4E0D\u8981\u6DF7\u5165\u66F4\u65B0\u540E\u7684\u53C2\u6570\u3002", [14, 27, 32, 33], ["net \u548C out \u5206\u522B\u662F\u4EC0\u4E48\uFF1F", "Sigmoid \u7684\u5BFC\u6570\u600E\u6837\u6C42\uFF1F"]),
    "m4.loss": step("m4.loss", 4, "\u8BA1\u7B97\u8F93\u51FA\u8BEF\u5DEE", "\u6BD4\u8F83\u9884\u6D4B\u8F93\u51FA\u548C\u76EE\u6807\u503C\u3002", "\u6839\u636E\u76EE\u6807\u503C\u548C\u8F93\u51FA\u503C\u5206\u522B\u8BA1\u7B97\u4E24\u9879\u5E73\u65B9\u8BEF\u5DEE\uFF0C\u518D\u70B9\u51FB Etotal \u7684\u84DD\u8272\u8BA1\u7B97\u533A\u548C\u201C\u4FEE\u590D\u201D\u3002", [34, 36, 37], ["\u635F\u5931\u51FD\u6570\u4E3A\u4EC0\u4E48\u5E38\u51FA\u73B0\u4E8C\u5206\u4E4B\u4E00\uFF1F"], "\u5E73\u65B9\u8BEF\u5DEE\u5148\u76F8\u51CF\u3001\u518D\u5E73\u65B9\uFF0C\u4E0D\u80FD\u5148\u5206\u522B\u5E73\u65B9\u518D\u76F8\u51CF\u3002"),
    "m4.weights": step("m4.weights", 4, "\u8BA1\u7B97\u8F93\u51FA\u5C42\u6743\u91CD\u66F4\u65B0", "\u628A\u94FE\u5F0F\u6CD5\u5219\u4E2D\u7684\u6BCF\u4E2A\u56E0\u5B50\u4E32\u8D77\u6765\u3002", "\u586B\u5199\u8F93\u51FA\u5C42\u68AF\u5EA6\u7684\u4E09\u4E2A\u56E0\u5B50\uFF0C\u70B9\u51FB\u84DD\u8272\u533A\u57DF\u8BA1\u7B97\uFF0C\u518D\u586B\u5199 W\xB211 \u7684\u65B0\u503C\u5E76\u8BA1\u7B97\u5176\u4F59\u6743\u91CD\uFF0C\u6700\u540E\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002", [28, 29, 30, 31, 37], ["\u94FE\u5F0F\u6CD5\u5219\u4E2D\u7684\u6BCF\u4E00\u9879\u5206\u522B\u4EE3\u8868\u4EC0\u4E48\uFF1F", "\u4E3A\u4EC0\u4E48\u66F4\u65B0\u65F6\u8981\u51CF\u53BB\u68AF\u5EA6\uFF1F"]),
    "m4.update": step("m4.update", 4, "\u6C47\u603B\u9690\u85CF\u8282\u70B9\u7684\u4E24\u6761\u8DEF\u5F84", "\u6CBF\u4E24\u4E2A\u8F93\u51FA\u65B9\u5411\u8BA1\u7B97\uFF0C\u518D\u6C47\u603B\u8D21\u732E\u3002", "\u5206\u522B\u586B\u5199 O1\u3001O2 \u4E24\u6761\u8DEF\u5F84\u7684\u8BEF\u5DEE\u9879\u548C\u8FDE\u63A5\u6743\u91CD\uFF0C\u518D\u70B9\u51FB\u84DD\u8272\u533A\u57DF\u8BA1\u7B97\u5E76\u4FEE\u590D\u3002", [31, 36, 37], ["\u4E00\u4E2A\u53C2\u6570\u7ECF\u8FC7\u591A\u6761\u8DEF\u5F84\u5F71\u54CD\u635F\u5931\u65F6\u600E\u4E48\u529E\uFF1F"], "\u9690\u85CF\u8282\u70B9\u901A\u8FC7 O1\u3001O2 \u4E24\u6761\u8DEF\u5F84\u5F71\u54CD\u603B\u635F\u5931\u3002\u6BCF\u6761\u8DEF\u5F84\u5148\u5C06\u8F93\u51FA\u8282\u70B9\u7684\u8BEF\u5DEE\u9879\u4E58\u5BF9\u5E94\u8FDE\u63A5\u6743\u91CD\uFF0C\u518D\u628A\u4E24\u6761\u8DEF\u5F84\u7684\u8D21\u732E\u76F8\u52A0\u3002"),
    "m4.hidden": step("m4.hidden", 4, "\u8BA1\u7B97\u9690\u85CF\u8282\u70B9\u7684\u6FC0\u6D3B\u5BFC\u6570", "\u7528\u9690\u85CF\u8282\u70B9\u7684\u8F93\u51FA\u8BA1\u7B97 Sigmoid \u5BFC\u6570\u3002", "\u586B\u5199 h1 \u7684\u8F93\u51FA\u548C 1\u2212h1 \u7684\u8F93\u51FA\uFF0C\u70B9\u51FB\u84DD\u8272\u533A\u57DF\u8BA1\u7B97\uFF0C\u518D\u70B9\u51FB\u8FD9\u4E00\u7EC4\u201C\u4FEE\u590D\u201D\u3002", [29, 30, 31, 37], ["Sigmoid \u7684\u5BFC\u6570\u4E3A\u4EC0\u4E48\u5199\u6210 out\xD7(1\u2212out)\uFF1F"]),
    "m4.finish": step("m4.finish", 4, "\u5B8C\u6210\u6700\u540E\u4E00\u7EC4\u53C2\u6570\u66F4\u65B0", "\u5C06\u53CD\u5411\u4F20\u64AD\u7ED3\u679C\u7528\u4E8E\u65B0\u7684\u7F51\u7EDC\u53C2\u6570\u3002", "\u586B\u5199 X1 \u5BF9\u5E94\u7684\u5BFC\u6570\u4E0E W\xB911 \u66F4\u65B0\u503C\uFF0C\u70B9\u51FB\u4E0A\u65B9\u84DD\u8272\u533A\u57DF\u6C47\u603B\u68AF\u5EA6\uFF0C\u518D\u5B8C\u6210\u6700\u540E\u4E00\u7EC4\u4FEE\u590D\u3002", [31, 36, 37], ["\u4E00\u6B21\u66F4\u65B0\u540E\u662F\u5426\u5DF2\u7ECF\u5B8C\u6210\u6574\u4E2A\u8BAD\u7EC3\uFF1F"]),
    report: step("report", null, "\u56DE\u987E\u5B9E\u9A8C\u4E0E\u5B66\u4E60\u8BB0\u5F55", "\u628A\u5B8C\u6210\u7684\u64CD\u4F5C\u4E0E\u77E5\u8BC6\u70B9\u8054\u7CFB\u8D77\u6765\u3002", "\u539F\u7A0B\u5E8F\u8D1F\u8D23\u5B9E\u9A8C\u8BC4\u5206\uFF1B\u52A9\u6559\u8BB0\u5F55\u6821\u9A8C\u3001\u7528\u65F6\u548C\u9700\u8981\u590D\u4E60\u7684\u77E5\u8BC6\u70B9\u3002\u586B\u5199\u5FC3\u5F97\u540E\u53EF\u67E5\u770B\u539F\u7A0B\u5E8F\u62A5\u544A\u3002", [27, 37], ["\u600E\u6837\u603B\u7ED3\u8FD9\u6B21\u5B9E\u9A8C\u7684\u4E3B\u8981\u6536\u83B7\uFF1F"])
  };
  var transitions = [
    "\u4EBA\u5DE5\u795E\u7ECF\u5143\u5DF2\u4FEE\u590D\u3002\u4F60\u5DF2\u7ECF\u5B8C\u6210\u8F93\u5165\u3001\u52A0\u6743\u3001\u7EC4\u5408\u548C\u6FC0\u6D3B\u3002\u63A5\u4E0B\u6765\u524D\u5F80\u4E0B\u4E00\u5904\u64CD\u4F5C\u53F0\uFF0C\u628A\u4E24\u8DEF\u8F93\u5165\u8FDE\u63A5\u6210\u4E09\u4E2A\u8F93\u51FA\u3002",
    "\u591A\u8F93\u5165\u591A\u8F93\u51FA\u6A21\u5757\u5DF2\u4FEE\u590D\u3002\u6BCF\u4E2A\u8F93\u51FA\u90FD\u6709\u81EA\u5DF1\u7684\u8FDE\u63A5\u4E0E\u6743\u91CD\u3002\u63A5\u4E0B\u6765\u8FDB\u5165\u53CC\u9690\u85CF\u5C42\u6A21\u5757\uFF0C\u8BA9\u4FE1\u606F\u9010\u5C42\u4F20\u9012\u3002",
    "\u53CC\u9690\u85CF\u5C42\u7F51\u7EDC\u5DF2\u4FEE\u590D\u3002\u4F60\u5DF2\u7ECF\u5B8C\u6210\u77E9\u9635\u7EF4\u5EA6\u4E0E\u524D\u5411\u8BA1\u7B97\u3002\u6700\u540E\u8FDB\u5165\u53CD\u5411\u4F20\u64AD\u6A21\u5757\uFF0C\u5B66\u4E60\u600E\u6837\u6839\u636E\u8BEF\u5DEE\u8C03\u6574\u53C2\u6570\u3002",
    "\u56DB\u4E2A\u6A21\u5757\u5DF2\u5168\u90E8\u4FEE\u590D\u3002\u4F60\u5DF2\u7ECF\u8D70\u5B8C\u795E\u7ECF\u5143\u3001\u7F51\u7EDC\u8FDE\u63A5\u3001\u591A\u5C42\u524D\u5411\u4F20\u64AD\u548C\u53C2\u6570\u66F4\u65B0\u3002\u73B0\u5728\u53EF\u4EE5\u67E5\u770B\u5B66\u4E60\u8BB0\u5F55\uFF0C\u5E76\u7ED3\u5408\u9519\u8BEF\u56DE\u987E\u603B\u7ED3\u5B9E\u9A8C\u5FC3\u5F97\u3002"
  ];
  for (const module of MODULES) STEPS[`complete.m${module.id}`] = step(`complete.m${module.id}`, module.id, `${module.title}\u5DF2\u5B8C\u6210`, module.id === 4 ? "\u56DE\u987E\u5B9E\u9A8C\uFF0C\u6574\u7406\u5B66\u4E60\u6536\u83B7\u3002" : `\u524D\u5F80\u6A21\u5757 ${module.id + 1}\uFF0C\u7EE7\u7EED\u4FEE\u590D\u98DE\u8239\u3002`, transitions[module.id - 1], module.id === 4 ? [27, 37] : [], ["\u8FD9\u4E00\u6A21\u5757\u6700\u91CD\u8981\u7684\u77E5\u8BC6\u662F\u4EC0\u4E48\uFF1F"]);
  for (let index = 1; index <= 3; index++) {
    STEPS[`m2.s${index}.connect`] = step(`m2.s${index}.connect`, 2, `\u8FDE\u63A5\u8F93\u51FA S${index}`, "\u8BC6\u522B\u5F53\u524D\u8F93\u51FA\u7684\u4E24\u8DEF\u8F93\u5165\u6765\u6E90\u3002", `\u5148\u70B9\u51FB X1\uFF0C\u518D\u70B9\u51FB S${index}\uFF1B\u63A5\u7740\u70B9\u51FB X2\uFF0C\u518D\u70B9\u51FB S${index}\uFF0C\u628A\u4E24\u6761\u8F93\u5165\u8DEF\u5F84\u90FD\u8FDE\u63A5\u8D77\u6765\u3002`, [18, 19, 20], [`S${index} \u5E94\u4F7F\u7528\u54EA\u4E24\u9879\u6743\u91CD\uFF1F`]);
    STEPS[`m2.s${index}.calculate`] = step(`m2.s${index}.calculate`, 2, `\u8BA1\u7B97\u8F93\u51FA S${index}`, "\u4E3A\u6B63\u786E\u8FDE\u7EBF\u5339\u914D\u6743\u91CD\uFF0C\u518D\u8BA1\u7B97\u52A0\u6743\u548C\u3002", `\u5C06\u5BF9\u5E94\u7684 W \u503C\u62D6\u5230\u8FDE\u7EBF\u4E0A\uFF0C\u8BA1\u7B97 S${index} \u5E76\u63D0\u4EA4\u6821\u9A8C\u3002\u4E0D\u8981\u6F0F\u6389\u4EFB\u4F55\u4E00\u8DEF\u8F93\u5165\u3002`, [20, 21], [`\u5982\u4F55\u628A S${index} \u7684\u8BA1\u7B97\u5199\u6210\u77E9\u9635\u5F62\u5F0F\uFF1F`]);
  }
  var PREVIEW_PAGES = course_content_index_default.slides.map((page) => ({ number: page.number, title: page.topic }));
  function previewStep(number) {
    const page = PREVIEW_PAGES.find((page2) => page2.number === number);
    return step(
      `preview.${number}`,
      null,
      page?.title ?? "\u8BFE\u524D\u9884\u4E60",
      "\u5C06\u9884\u4E60\u6982\u5FF5\u4E0E\u5B9E\u9A8C\u64CD\u4F5C\u5BF9\u5E94\u8D77\u6765\u3002",
      `\u6B63\u5728\u9605\u8BFB\u7B2C ${number} \u9875\u3002\u53EF\u4EE5\u7ED3\u5408\u672C\u9875\u5185\u5BB9\u63D0\u95EE\uFF0C\u6216\u5B8C\u6210\u77E5\u8BC6\u81EA\u6D4B\u68C0\u9A8C\u7406\u89E3\u3002`,
      [number],
      ["\u8BF7\u89E3\u91CA\u8FD9\u4E00\u9875\u7684\u4E3B\u8981\u6982\u5FF5\u3002"],
      `\u7B2C ${number} \u9875\uFF0C${page?.title ?? "\u8BFE\u524D\u9884\u4E60"}\u3002\u4F60\u53EF\u4EE5\u968F\u65F6\u5411\u6211\u63D0\u95EE\u3002`
    );
  }
  var VOICE_CUES = {
    ...Object.fromEntries(Object.values(STEPS).map((step2) => [step2.id, step2.narration])),
    ...Object.fromEntries(PREVIEW_PAGES.map((page) => {
      const item = previewStep(page.number);
      return [item.id, item.narration];
    })),
    "feedback.correct": "\u672C\u6B21\u6821\u9A8C\u901A\u8FC7\u3002\u8BF7\u6839\u636E\u65B0\u7684\u4EFB\u52A1\u63D0\u793A\u7EE7\u7EED\u4E0B\u4E00\u6B65\u3002",
    "feedback.error": "\u8FD9\u6B21\u7ED3\u679C\u8FD8\u6CA1\u6709\u901A\u8FC7\u6821\u9A8C\u3002\u8BF7\u770B\u5B57\u5E55\u4E2D\u7684\u5177\u4F53\u63D0\u793A\uFF0C\u4FEE\u6539\u540E\u518D\u8BD5\u3002"
  };

  // assistant/core/teaching.ts
  var lesson = (principle, actions, hints, example, takeaway) => ({ principle, actions, hints, example, takeaway });
  var CONTENT = {
    introduction: lesson("\u8FD9\u6B21\u5B9E\u9A8C\u628A\u795E\u7ECF\u7F51\u7EDC\u77E5\u8BC6\u4E32\u6210\u98DE\u8239\u4FEE\u590D\u4EFB\u52A1\u3002\u56DB\u4E2A\u6A21\u5757\u4F9D\u6B21\u4F7F\u7528\u524D\u9762\u5EFA\u7ACB\u7684\u6982\u5FF5\uFF0C\u5E2E\u52A9\u4F60\u4ECE\u5355\u4E2A\u8BA1\u7B97\u5355\u5143\u8D70\u5230\u53C2\u6570\u5B66\u4E60\u3002", ["\u8BFB\u5B8C\u539F\u9875\u9762\u7684\u60C5\u5883\u8BF4\u660E\u3002", "\u70B9\u51FB\u201C\u5F00\u59CB\u4FEE\u590D\u201D\u8FDB\u5165\u573A\u666F\u3002", "\u627E\u5230\u5F53\u524D\u53EF\u4FEE\u590D\u7684\u64CD\u4F5C\u53F0\u3002"], ["\u5148\u5B8C\u6210\u539F\u9875\u9762\u7684\u60C5\u5883\u786E\u8BA4\u3002", "\u8FDB\u5165\u573A\u666F\u540E\u6309\u987A\u5E8F\u4FEE\u590D\uFF0C\u4E0D\u9700\u8981\u540C\u65F6\u5904\u7406\u56DB\u4E2A\u6A21\u5757\u3002", "\u7B2C\u4E00\u6A21\u5757\u5148\u5173\u6CE8\u8F93\u5165\u3001\u6743\u91CD\u3001\u504F\u7F6E\u548C\u6FC0\u6D3B\u3002"], "\u5B66\u4E60\u8DEF\u7EBF\uFF1A\u4E00\u4E2A\u795E\u7ECF\u5143\u2192\u591A\u4E2A\u8F93\u51FA\u2192\u9690\u85CF\u5C42\u4F20\u64AD\u2192\u6839\u636E\u8BEF\u5DEE\u66F4\u65B0\u53C2\u6570\u3002", "\u6309\u5B9E\u9645\u4EFB\u52A1\u4E00\u6B65\u4E00\u6B65\u63A8\u8FDB\u3002"),
    "repair-prompt": lesson("\u539F\u5B9E\u9A8C\u6309\u6A21\u5757\u987A\u5E8F\u5F00\u653E\u4EFB\u52A1\u3002\u786E\u8BA4\u5F39\u7A97\u662F\u5728\u544A\u8BC9\u4F60\u5F53\u524D\u64CD\u4F5C\u53F0\u80FD\u5426\u8FDB\u5165\u3002", ["\u67E5\u770B\u539F\u9875\u9762\u7684\u786E\u8BA4\u63D0\u793A\u3002", "\u6709\u201C\u5F00\u59CB\u4FEE\u590D\u201D\u65F6\u70B9\u51FB\u8FDB\u5165\u3002", "\u82E5\u63D0\u793A\u6309\u987A\u5E8F\u5B8C\u6210\uFF0C\u5148\u8FD4\u56DE\u5F53\u524D\u5F85\u4FEE\u590D\u64CD\u4F5C\u53F0\u3002"], ["\u5148\u770B\u539F\u5F39\u7A97\u4E0A\u7684\u6309\u94AE\u3002", "\u7EFF\u8272\u5C4F\u5E55\u8868\u793A\u5DF2\u4FEE\u590D\uFF1B\u5F85\u5B8C\u6210\u7684\u5C4F\u5E55\u4ECD\u663E\u793A\u6545\u969C\u63D0\u793A\u3002", "\u88AB\u4E2D\u592E\u7ACB\u67F1\u6321\u4F4F\u65F6\uFF0C\u53EF\u4EE5\u5DE6\u53F3\u79FB\u52A8\uFF0C\u518D\u8C03\u6574\u89C6\u89D2\u3002"], "\u5B8C\u6210\u795E\u7ECF\u5143\u540E\u8FDB\u5165\u591A\u8F93\u5165\u591A\u8F93\u51FA\uFF0C\u518D\u8FDB\u5165\u53CC\u9690\u85CF\u5C42\uFF0C\u6700\u540E\u5904\u7406\u53CD\u5411\u4F20\u64AD\u3002", "\u4EE5\u539F\u9875\u9762\u5F00\u653E\u7684\u6A21\u5757\u4E3A\u51C6\u3002"),
    welcome: lesson(
      "\u4F60\u662F\u98DE\u8239\u7684\u7CFB\u7EDF\u5DE5\u7A0B\u5E08\uFF0C\u5C06\u4F9D\u6B21\u4FEE\u590D\u56DB\u4E2A\u795E\u7ECF\u7F51\u7EDC\u6A21\u5757\u3002\u52A9\u6559\u901A\u8FC7\u771F\u5B9E\u7A0B\u5E8F\u72B6\u6001\u8DDF\u968F\u5B9E\u9A8C\uFF0C\u5728\u9700\u8981\u65F6\u63D0\u4F9B\u8BED\u97F3\u3001\u5B57\u5E55\u548C\u89E3\u91CA\u3002",
      ["\u586B\u5199\u5165\u53E3\u4FE1\u606F\uFF0C\u6216\u9009\u62E9\u201C\u8DF3\u8FC7\u5E76\u5F00\u59CB\u201D\u3002", "\u8FDB\u5165\u83DC\u5355\u540E\uFF0C\u53EF\u5148\u9884\u4E60\u518D\u5F00\u59CB\u5B9E\u9A8C\u3002", "\u70B9\u51FB\u201C\u5F00\u542F\u65C1\u767D\u201D\uFF0C\u8BA9\u5BFC\u5E08\u968F\u6B65\u9AA4\u8BB2\u89E3\u3002"],
      ["\u5148\u5B8C\u6210\u539F\u5B9E\u9A8C\u5165\u53E3\uFF0C\u624D\u4F1A\u8FDB\u5165\u8BFE\u7A0B\u83DC\u5355\u3002", "\u82E5\u53EA\u662F\u672C\u673A\u8BD5\u7528\uFF0C\u53EF\u4F7F\u7528\u9875\u9762\u5DF2\u6709\u7684\u201C\u8DF3\u8FC7\u5E76\u5F00\u59CB\u201D\u3002", "\u8F93\u5165\u2192\u52A0\u6743\u2192\u6FC0\u6D3B\u2192\u7F51\u7EDC\u2192\u53CD\u5411\u4F20\u64AD\uFF0C\u662F\u672C\u6B21\u5B9E\u9A8C\u7684\u5B66\u4E60\u4E3B\u7EBF\u3002"],
      "\u5B9E\u9A8C\u4ECE\u4E00\u4E2A\u795E\u7ECF\u5143\u7684\u8F93\u5165\u4E0E\u6743\u91CD\u5F00\u59CB\uFF0C\u9010\u6B65\u6269\u5C55\u5230\u591A\u5C42\u7F51\u7EDC\uFF0C\u6700\u540E\u6839\u636E\u8BEF\u5DEE\u66F4\u65B0\u53C2\u6570\u3002",
      "\u5148\u8FDB\u5165\u5B9E\u9A8C\uFF0C\u518D\u8DDF\u968F\u4EFB\u52A1\u9010\u6B65\u4FEE\u590D\u3002"
    ),
    menu: lesson(
      "\u9884\u4E60\u5E2E\u52A9\u4F60\u7406\u89E3\u7B26\u53F7\uFF0C\u5B9E\u9A8C\u5E2E\u52A9\u4F60\u628A\u516C\u5F0F\u53D8\u6210\u64CD\u4F5C\u3002\u56DB\u4E2A\u6A21\u5757\u6309\u77E5\u8BC6\u4F9D\u8D56\u6392\u5217\uFF0C\u540E\u9762\u7684\u4EFB\u52A1\u4F1A\u4F7F\u7528\u524D\u9762\u5DF2\u7ECF\u5B66\u5230\u7684\u6982\u5FF5\u3002",
      ["\u9009\u62E9\u8BFE\u4EF6\u9884\u4E60\uFF0C\u6216\u76F4\u63A5\u5F00\u59CB\u5B9E\u9A8C\u3002", "\u9884\u4E60\u65F6\u53EF\u968F\u7FFB\u9875\u542C\u53D6\u8BB2\u89E3\u3002", "\u7528\u201C\u81EA\u6D4B\u201D\u68C0\u67E5\u7406\u89E3\uFF0C\u518D\u8FDB\u5165\u5B9E\u9A8C\u3002"],
      ["\u7B2C\u4E00\u6B21\u5B66\u4E60\u5EFA\u8BAE\u5148\u770B\u795E\u7ECF\u5143\u3001\u6743\u91CD\u548C\u504F\u7F6E\u3002", "\u5DF2\u6709\u57FA\u7840\u65F6\u53EF\u76F4\u63A5\u8FDB\u5165\u5B9E\u9A8C\uFF0C\u9047\u5230\u56F0\u96BE\u518D\u67E5\u770B\u539F\u7406\u4E0E\u793A\u4F8B\u3002", "\u9884\u4E60\u91CD\u70B9\u662F\u7406\u89E3\u6982\u5FF5\uFF0C\u4E0D\u9700\u8981\u80CC\u4E0B\u6BCF\u4E2A\u4F8B\u5B50\u7684\u6570\u5B57\u3002"],
      "\u53EA\u4F1A\u8BA1\u7B97\u4E00\u6761 XW\uFF0C\u8FD8\u4E0D\u8DB3\u4EE5\u5B8C\u6210\u53CD\u5411\u4F20\u64AD\uFF1B\u9010\u6B65\u7406\u89E3\u7EC4\u5408\u3001\u6FC0\u6D3B\u3001\u635F\u5931\u4E0E\u6C42\u5BFC\uFF0C\u624D\u80FD\u628A\u6574\u6761\u8BA1\u7B97\u94FE\u8FDE\u8D77\u6765\u3002",
      "\u628A\u8BFE\u524D\u77E5\u8BC6\u4E0E\u5B9E\u9645\u64CD\u4F5C\u4E92\u76F8\u5BF9\u5E94\u3002"
    ),
    exploring: lesson(
      "\u98DE\u8239\u4E2D\u7684\u56DB\u4E2A\u64CD\u4F5C\u53F0\u5206\u522B\u5BF9\u5E94\u795E\u7ECF\u5143\u3001\u591A\u8F93\u51FA\u7F51\u7EDC\u3001\u53CC\u9690\u85CF\u5C42\u7F51\u7EDC\u548C\u53CD\u5411\u4F20\u64AD\u3002\u5B8C\u6210\u5F53\u524D\u6A21\u5757\u540E\uFF0C\u624D\u80FD\u8FDB\u5165\u540E\u7EED\u4EFB\u52A1\u3002",
      ["\u7528 W\u3001A\u3001S\u3001D \u79FB\u52A8\uFF0C\u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u8C03\u6574\u89C6\u89D2\u3002", "\u9760\u8FD1\u5F53\u524D\u5F85\u4FEE\u590D\u7684\u64CD\u4F5C\u53F0\u3002", "\u70B9\u51FB\u64CD\u4F5C\u5C4F\u5E55\uFF0C\u8FDB\u5165\u6A21\u5757\u3002"],
      ["\u5148\u5BFB\u627E\u573A\u666F\u4E2D\u5F53\u524D\u53EF\u4EA4\u4E92\u7684\u5F85\u4FEE\u590D\u5C4F\u5E55\u3002", "\u9760\u8FD1\u64CD\u4F5C\u53F0\u540E\u518D\u70B9\u51FB\uFF0C\u6CE8\u610F\u573A\u666F\u63D0\u793A\u3002", "\u6309\u6A21\u5757\u987A\u5E8F\u63A8\u8FDB\uFF1B\u524D\u4E00\u6A21\u5757\u5C1A\u672A\u4FEE\u590D\u65F6\uFF0C\u4E0D\u8981\u628A\u672A\u5F00\u653E\u7684\u4E0B\u4E00\u6A21\u5757\u5F53\u4F5C\u6545\u969C\u3002"],
      "\u7B2C\u4E00\u5904\u64CD\u4F5C\u53F0\u4FEE\u590D\u4E00\u4E2A\u795E\u7ECF\u5143\uFF0C\u4E0B\u4E00\u5904\u624D\u628A\u5B83\u6269\u5C55\u6210\u4E24\u8F93\u5165\u3001\u4E09\u8F93\u51FA\u7684\u7F51\u7EDC\u3002",
      "\u627E\u5230\u4EFB\u52A1\u5165\u53E3\u540E\uFF0C\u52A9\u6559\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u5177\u4F53\u6B65\u9AA4\u3002"
    ),
    report: lesson(
      "\u5B66\u4E60\u8BC4\u4EF7\u8981\u7ED3\u5408\u5B9E\u9645\u64CD\u4F5C\u3001\u9519\u8BEF\u4FEE\u6539\u548C\u77E5\u8BC6\u7406\u89E3\u3002\u52A9\u6559\u4FDD\u7559\u539F\u5B9E\u9A8C\u5206\u6570\uFF0C\u540C\u65F6\u72EC\u7ACB\u5448\u73B0\u9884\u4E60\u81EA\u6D4B\u3001\u7EC3\u4E60\u79EF\u5206\u4E0E\u884C\u4E3A\u8BB0\u5F55\u3002",
      ["\u67E5\u770B\u56DB\u4E2A\u6A21\u5757\u7684\u5B8C\u6210\u60C5\u51B5\u548C\u64CD\u4F5C\u8BB0\u5F55\u3002", "\u7ED3\u5408\u66FE\u7ECF\u51FA\u73B0\u7684\u9519\u8BEF\uFF0C\u603B\u7ED3\u4F60\u7684\u4FEE\u6B63\u601D\u8DEF\u3002", "\u6309\u539F\u5B9E\u9A8C\u8981\u6C42\u586B\u5199\u5FC3\u5F97\uFF1B\u9700\u8981\u7559\u5B58\u65F6\u5BFC\u51FA\u52A9\u6559\u8BB0\u5F55\u3002"],
      ["\u5148\u56DE\u987E\u54EA\u4E9B\u6A21\u5757\u5B8C\u6210\uFF0C\u54EA\u4E9B\u8BA1\u7B97\u66FE\u7ECF\u9700\u8981\u91CD\u8BD5\u3002", "\u4E0D\u8981\u53EA\u5199\u201C\u5B8C\u6210\u5B9E\u9A8C\u201D\uFF0C\u8BF4\u660E\u4E00\u5904\u9519\u8BEF\u53CA\u5176\u539F\u56E0\u3002", "\u53EF\u6309\u201C\u8F93\u5165\u4E0E\u53C2\u6570\u2014\u524D\u5411\u8BA1\u7B97\u2014\u635F\u5931\u2014\u68AF\u5EA6\u2014\u66F4\u65B0\u201D\u7684\u987A\u5E8F\u7EC4\u7EC7\u5FC3\u5F97\u3002"],
      "\u793A\u4F8B\u601D\u8DEF\uFF1A\u6211\u66FE\u628A\u9690\u85CF\u5C42 net \u5F53\u4F5C\u4E0B\u4E00\u5C42\u8F93\u5165\uFF0C\u540E\u6765\u5148\u8BA1\u7B97\u6FC0\u6D3B\u540E\u7684 out\uFF0C\u518D\u91CD\u65B0\u8BA1\u7B97\u4E0B\u4E00\u5C42\uFF0C\u4ECE\u800C\u7406\u89E3\u4E86\u6FC0\u6D3B\u51FD\u6570\u7684\u4F4D\u7F6E\u3002",
      "\u7528\u9519\u8BEF\u4E0E\u4FEE\u6B63\u8FC7\u7A0B\u8BF4\u660E\u81EA\u5DF1\u7684\u7406\u89E3\u3002"
    ),
    "m1.parameters": lesson(
      "\u4E00\u4E2A\u4EBA\u5DE5\u795E\u7ECF\u5143\u63A5\u6536\u8F93\u5165 X\uFF0C\u7528\u6743\u91CD W \u8C03\u8282\u5404\u8DEF\u8F93\u5165\u7684\u8D21\u732E\uFF0C\u518D\u901A\u8FC7\u504F\u7F6E b \u8C03\u6574\u6574\u4F53\u4F4D\u7F6E\u3002\u53C2\u6570\u672C\u8EAB\u6CA1\u6709\u7EDF\u4E00\u7684\u201C\u6807\u51C6\u503C\u201D\uFF0C\u5173\u952E\u662F\u540E\u7EED\u8BA1\u7B97\u4E0E\u5F53\u524D\u8F93\u5165\u4FDD\u6301\u4E00\u81F4\u3002",
      ["\u586B\u5199 X1\u3001X2 \u4E24\u8DEF\u8F93\u5165\u3002", "\u4E3A\u5404\u8DEF\u586B\u5199 W1\u3001W2\uFF0C\u518D\u586B\u5199\u504F\u7F6E b\u3002", "\u786E\u8BA4\u6570\u503C\u5B8C\u6574\uFF0C\u6309\u51FA\u73B0\u7684\u65B0\u63D0\u793A\u7EE7\u7EED\u3002"],
      ["\u628A\u6BCF\u4E00\u8DEF\u7684 X \u548C W \u5148\u914D\u6210\u4E00\u5BF9\uFF0C\u907F\u514D\u4E0A\u4E0B\u4E24\u8DEF\u4EA4\u53C9\u3002", "\u6743\u91CD\u53EF\u4EE5\u6539\u53D8\u8D21\u732E\u7684\u5927\u5C0F\u548C\u7B26\u53F7\uFF0C\u504F\u7F6E\u5728\u7EC4\u5408\u9636\u6BB5\u5355\u72EC\u5904\u7406\u3002", "\u53EF\u5148\u7528\u4FBF\u4E8E\u5FC3\u7B97\u7684\u6570\u7EC3\u4E60\uFF0C\u4F8B\u5982 X1=1\u3001W1=3\u3001X2=2\u3001W2=4\u3001b=1\uFF1B\u8FD9\u53EA\u662F\u7EC3\u4E60\u793A\u4F8B\u3002"],
      "\u793A\u4F8B\uFF1AX1=1\u3001W1=3\u3001X2=2\u3001W2=4\u3002\u4E24\u8DEF\u52A0\u6743\u8D21\u732E\u5206\u522B\u4E3A 3 \u548C 8\uFF1B\u82E5\u5F53\u524D\u7EA6\u5B9A\u4E3A\u52A0\u504F\u7F6E b=1\uFF0C\u5219\u6700\u7EC8\u52A0\u6743\u548C\u4E3A 12\u3002",
      "\u5206\u6E05\u8F93\u5165\u3001\u6743\u91CD\u4E0E\u504F\u7F6E\u5404\u81EA\u7684\u4F5C\u7528\u3002"
    ),
    "m1.operators": lesson(
      "\u52A0\u6743\u8FD0\u7B97\u5904\u7406\u4E00\u6761\u8FDE\u63A5\u4E0A\u7684\u8F93\u5165\u4E0E\u6743\u91CD\u3002\u5F53\u524D\u4EFB\u52A1\u4F7F\u7528\u4E58\u6CD5\uFF0C\u6240\u4EE5\u6BCF\u4E00\u8DEF\u5148\u6C42 Xi\xD7Wi\uFF0C\u518D\u8FDB\u884C\u540E\u9762\u7684\u7EC4\u5408\u3002",
      ["\u627E\u5230\u52A0\u6743\u8FD0\u7B97\u533A\u4E2D\u7684\u4E58\u6CD5\u7B26\u53F7\u3002", "\u628A\u4E58\u6CD5\u7B26\u53F7\u62D6\u8FDB\u7B2C\u4E00\u8DEF\u84DD\u8272\u69FD\u4F4D\uFF0C\u4E2D\u5FC3\u5BF9\u9F50\u540E\u677E\u5F00\u3002", "\u7B2C\u4E8C\u8DEF\u4E5F\u653E\u5165\u4E58\u6CD5\u7B26\u53F7\uFF0C\u7B49\u5F85\u4EFB\u52A1\u5207\u6362\u5230\u586B\u5199\u7ED3\u679C\u3002"],
      ["\u52A0\u6743\u7684\u4F4D\u7F6E\u5728\u5355\u6761\u8F93\u5165\u8DEF\u5F84\u4E0A\uFF0C\u8FD8\u6CA1\u6709\u6C47\u603B\u4E24\u8DEF\u7ED3\u679C\u3002", "\u770B\u69FD\u4F4D\u662F\u5426\u63A5\u6536\u56FE\u6807\uFF1B\u56FE\u6807\u56DE\u5F39\u65F6\uFF0C\u5148\u91CD\u65B0\u5BF9\u51C6\u4E2D\u5FC3\u3002", "\u8FD9\u91CC\u9009\u62E9\u4E58\u6CD5\u7B26\u53F7\uFF0C\u4E0D\u8981\u628A\u540E\u9762\u7528\u4E8E\u6C47\u603B\u7684\u6C42\u548C\u7B26\u53F7\u63D0\u524D\u653E\u8FDB\u6765\u3002"],
      "\u793A\u4F8B\uFF1A\u8F93\u5165\u4E3A 2\u3001\u6743\u91CD\u4E3A 4\uFF0C\u8FD9\u6761\u8FDE\u63A5\u7684\u52A0\u6743\u7ED3\u679C\u662F 2\xD74=8\uFF0C\u800C\u4E0D\u662F 2+4=6\u3002",
      "\u4E00\u6761\u8FDE\u63A5\u5148\u5B8C\u6210\u81EA\u5DF1\u7684\u52A0\u6743\u8BA1\u7B97\u3002"
    ),
    "m1.weighted": lesson(
      "\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\u8981\u5206\u522B\u8BA1\u7B97\u3002\u8FD9\u4E00\u6B65\u53EA\u5904\u7406\u5404\u8DEF Xi \u4E0E Wi\uFF0C\u504F\u7F6E\u4E0E\u8DE8\u8DEF\u5F84\u7684\u6C47\u603B\u7559\u5230\u7EC4\u5408\u9636\u6BB5\u3002",
      ["\u6309\u7B2C\u4E00\u8DEF\u5F53\u524D\u7684 X1\u3001W1 \u8BA1\u7B97\u5E76\u586B\u5199\u7B2C\u4E00\u4E2A XW\u3002", "\u6309\u7B2C\u4E8C\u8DEF\u7684 X2\u3001W2 \u586B\u5199\u7B2C\u4E8C\u4E2A XW\u3002", "\u70B9\u51FB\u201C\u4FEE\u590D\u201D\uFF0C\u6839\u636E\u539F\u7A0B\u5E8F\u53CD\u9988\u4FEE\u6B63\u6216\u7EE7\u7EED\u3002"],
      ["\u5148\u906E\u4F4F\u53E6\u4E00\u8DEF\uFF0C\u53EA\u7B97\u773C\u524D\u8FD9\u4E00\u8DEF\u3002", "\u6BCF\u4E00\u8DEF\u90FD\u662F\u8F93\u5165\u4E58\u4EE5\u5BF9\u5E94\u6743\u91CD\uFF1B\u8FD9\u91CC\u6682\u4E0D\u52A0\u504F\u7F6E\u3002", "\u9010\u9879\u6838\u5BF9\u6570\u5B57\u548C\u8FD0\u7B97\u7B26\uFF0C\u5C24\u5176\u68C0\u67E5\u628A\u4E58\u6CD5\u7B97\u6210\u52A0\u6CD5\u3001\u4E0A\u4E0B\u8DEF\u6284\u9519\u8FD9\u4E24\u7C7B\u9519\u8BEF\u3002"],
      "\u793A\u4F8B\uFF1AX1=1\u3001W1=3 \u5F97\u5230 3\uFF1BX2=2\u3001W2=4 \u5F97\u5230 8\u3002\u5148\u5C06 3\u30018 \u5206\u522B\u586B\u5165\uFF0C\u4E0D\u8981\u63D0\u524D\u628A 11 \u586B\u5230\u67D0\u4E00\u8DEF\u3002",
      "\u5206\u8DEF\u8BA1\u7B97\u80FD\u5E2E\u52A9\u5B9A\u4F4D\u54EA\u4E00\u6761\u8FDE\u63A5\u51FA\u9519\u3002"
    ),
    "m1.combine": lesson(
      "\u7EC4\u5408\u8FD0\u7B97\u628A\u591A\u8DEF\u52A0\u6743\u8D21\u732E\u6C47\u603B\u6210\u4E00\u4E2A\u503C\u3002\u6807\u51C6\u52A0\u6743\u548C\u4F7F\u7528\u6C42\u548C\u8FD0\u7B97\uFF0C\u968F\u540E\u6839\u636E\u5F53\u524D\u7B26\u53F7\u7EA6\u5B9A\u8BA1\u5165\u504F\u7F6E\u6216\u9608\u503C\u3002",
      ["\u627E\u5230\u7EC4\u5408\u8FD0\u7B97\u7B26\u533A\u7684\u6C42\u548C\u7B26\u53F7 \u03A3\u3002", "\u62D6\u5230 N \u5BF9\u5E94\u7684\u76EE\u6807\u69FD\u4F4D\uFF0C\u4E2D\u5FC3\u5BF9\u9F50\u540E\u677E\u5F00\u3002", "\u69FD\u4F4D\u63A5\u6536\u540E\uFF0C\u7EE7\u7EED\u586B\u5199\u7EC4\u5408\u503C S\u3002"],
      ["N \u8868\u793A\u6C47\u603B\u4F4D\u7F6E\uFF0C\u4E0D\u662F\u67D0\u4E00\u6761\u8F93\u5165\u8FDE\u63A5\u3002", "\u4E24\u8DEF\u52A0\u6743\u503C\u9700\u8981\u76F8\u52A0\uFF0C\u9009\u62E9\u6C42\u548C\u7B26\u53F7\u3002", "\u5982\u679C\u7B26\u53F7\u56DE\u5F39\uFF0C\u91CD\u65B0\u4ECE\u539F\u4F4D\u7F6E\u62D6\u52A8\uFF0C\u505C\u5728\u76EE\u6807\u69FD\u4F4D\u4E2D\u5FC3\u518D\u677E\u5F00\uFF1B\u4E0D\u8981\u628A\u56DE\u5F39\u5F53\u6210\u5DF2\u5B8C\u6210\u3002"],
      "\u4E24\u8DEF\u8D21\u732E\u4E3A 3 \u4E0E 8 \u65F6\uFF0C\u5148\u6C47\u603B\u6210 11\u3002\u968F\u540E\u518D\u6309\u5F53\u524D\u5B9E\u9A8C\u7684\u504F\u7F6E\u7EA6\u5B9A\u5904\u7406\u3002",
      "\u7EC4\u5408\u8FD0\u7B97\u628A\u591A\u6761\u8DEF\u5F84\u53D8\u6210\u4E00\u4E2A\u795E\u7ECF\u5143\u8F93\u5165\u3002"
    ),
    "m1.sum": lesson(
      "S \u662F\u8FDB\u5165\u6FC0\u6D3B\u51FD\u6570\u4E4B\u524D\u7684\u503C\u3002\u5E38\u89C1\u5199\u6CD5\u4E3A S=\u03A3XiWi+b\uFF1B\u4E5F\u53EF\u5199\u6210 \u03A3XiWi\u2212\u03B8\u3002\u5F53 b=\u2212\u03B8 \u65F6\uFF0C\u4E24\u79CD\u5199\u6CD5\u7B49\u4EF7\uFF0C\u4E0D\u80FD\u628A\u76F8\u540C\u6570\u503C\u4E0D\u6539\u7B26\u53F7\u5730\u4E92\u6362\u3002",
      ["\u786E\u8BA4\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\u5DF2\u7ECF\u6B63\u786E\u3002", "\u6309\u5F53\u524D\u7EC4\u5408\u8FD0\u7B97\u548C\u504F\u7F6E\u7EA6\u5B9A\u6C42 S\u3002", "\u586B\u5199 S \u5E76\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u5148\u6C47\u603B\u4E24\u8DEF\u52A0\u6743\u8D21\u732E\uFF0C\u518D\u5355\u72EC\u68C0\u67E5\u504F\u7F6E\u3002", "\u8FD9\u91CC\u6C42\u7684\u662F\u6FC0\u6D3B\u524D\u7684\u503C\uFF0C\u6682\u65F6\u4E0D\u7528 Sigmoid \u6216 ReLU\u3002", "\u82E5\u53C2\u8003\u8D44\u6599\u4F7F\u7528\u9608\u503C \u03B8\uFF0C\u68C0\u67E5\u5B83\u4E0E\u5F53\u524D\u504F\u7F6E b \u7684\u7B26\u53F7\u5173\u7CFB\uFF1B\u539F\u7A0B\u5E8F\u672C\u6B21\u7ED3\u679C\u4F1A\u5728\u9519\u8BEF\u53CD\u9988\u4E2D\u7ED9\u51FA\u3002"],
      "\u6309\u52A0\u504F\u7F6E\u7684\u7EA6\u5B9A\uFF1AS=1\xD73+2\xD74+1=12\u3002\u82E5\u6539\u5199\u6210\u51CF\u9608\u503C\uFF0C\u5219 \u03B8=\u22121\u3002",
      "S \u662F\u6FC0\u6D3B\u524D\u7684\u7EC4\u5408\u7ED3\u679C\uFF0C\u4E0D\u80FD\u4E0E\u6700\u7EC8\u8F93\u51FA\u6DF7\u6DC6\u3002"
    ),
    "m1.activation": lesson(
      "\u6FC0\u6D3B\u51FD\u6570\u5C06\u7EC4\u5408\u503C S \u6620\u5C04\u4E3A\u8F93\u51FA Z\u3002linear \u4FDD\u6301\u539F\u503C\uFF1BSigmoid \u628A\u8F93\u51FA\u538B\u5230 0 \u4E0E 1 \u4E4B\u95F4\uFF1BReLU \u5C06\u8D1F\u6570\u7F6E\u96F6\u3002\u5E76\u975E\u6240\u6709\u6FC0\u6D3B\u51FD\u6570\u7684\u8F93\u51FA\u90FD\u6709\u754C\u3002",
      ["\u9009\u62E9\u4E00\u4E2A\u5F53\u524D\u53EF\u7528\u7684\u6FC0\u6D3B\u51FD\u6570\u3002", "\u628A\u51FD\u6570\u62D6\u8FDB F \u7684\u69FD\u4F4D\u3002", "\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u89C2\u5BDF\u8F93\u51FA\uFF0C\u6309\u6A21\u5757\u5B8C\u6210\u63D0\u793A\u7EE7\u7EED\u3002"],
      ["\u5148\u786E\u8BA4\u51FD\u6570\u5DF2\u7ECF\u88AB F \u69FD\u4F4D\u63A5\u6536\u3002", "linear(S)=S\uFF1BSigmoid(S)=1/(1+e^(\u2212S))\uFF1BReLU(S)=max(0,S)\u3002", "\u6BD4\u8F83\u6FC0\u6D3B\u524D\u540E\u4E24\u4E2A\u503C\uFF1AS \u4E0D\u53D8\uFF0C\u6362\u51FD\u6570\u4F1A\u6539\u53D8\u8F93\u51FA\u89C4\u5219\uFF0C\u800C\u4E0D\u662F\u6539\u53D8\u524D\u9762\u5DF2\u5B8C\u6210\u7684\u52A0\u6743\u8BA1\u7B97\u3002"],
      "\u5F53 S=\u22122 \u65F6\uFF0Clinear \u8F93\u51FA \u22122\uFF0CReLU \u8F93\u51FA 0\uFF0CSigmoid \u7EA6\u4E3A 0.119\u3002\u4E0D\u540C\u51FD\u6570\u5E26\u6765\u4E0D\u540C\u7684\u54CD\u5E94\u65B9\u5F0F\u3002",
      "\u6FC0\u6D3B\u51FD\u6570\u51B3\u5B9A\u795E\u7ECF\u5143\u600E\u6837\u54CD\u5E94\u7EC4\u5408\u8F93\u5165\u3002"
    ),
    "m3.dimensions": lesson(
      "\u5728\u884C\u5411\u91CF XW \u7684\u7EA6\u5B9A\u4E0B\uFF0C\u6743\u91CD\u77E9\u9635\u7684\u884C\u6570\u5BF9\u5E94\u4E0A\u4E00\u5C42\u8282\u70B9\u6570\uFF0C\u5217\u6570\u5BF9\u5E94\u4E0B\u4E00\u5C42\u8282\u70B9\u6570\u3002\u77E9\u9635\u4E58\u6CD5\u7684\u4E2D\u95F4\u7EF4\u5EA6\u5FC5\u987B\u76F8\u7B49\u3002",
      ["\u4ECE\u5DE6\u5230\u53F3\u6570\u51FA\u56DB\u5C42\u8282\u70B9\uFF1A2\u30013\u30012\u30011\u3002", "\u4F9D\u6B21\u586B\u5199 W1\u3001W2\u3001W3 \u7684\u884C\u6570\u548C\u5217\u6570\u3002", "\u5168\u90E8\u6B63\u786E\u540E\u7CFB\u7EDF\u81EA\u52A8\u8FDB\u5165\u524D\u5411\u8BA1\u7B97\uFF1B\u968F\u540E\u5148\u586B\u5404\u5C42\u8F93\u51FA\uFF0C\u518D\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u5148\u628A\u5C42\u5BBD\u5199\u6210 2\u21923\u21922\u21921\uFF0C\u518D\u53EA\u770B\u76F8\u90BB\u4E24\u5C42\u3002", "\u8F93\u5165\u662F 1\xD72\uFF0C\u4E58 W1 \u540E\u5E94\u53D8\u6210 1\xD73\uFF0C\u6240\u4EE5 W1 \u4E3A 2\xD73\u3002", "\u4E09\u7EC4\u77E9\u9635\u4F9D\u6B21\u4E3A 2\xD73\u30013\xD72\u30012\xD71\u3002\u82E5\u8BFE\u4EF6\u4F7F\u7528\u5217\u5411\u91CF\u516C\u5F0F\uFF0C\u9700\u8981\u6574\u4F53\u8F6C\u7F6E\uFF0C\u4E0D\u80FD\u53EA\u7FFB\u8F6C\u4E00\u7EC4\u3002"],
      "(1\xD72)\xB7(2\xD73)\u2192(1\xD73)\uFF0C\u518D\u4E58 (3\xD72)\u2192(1\xD72)\uFF0C\u6700\u540E\u4E58 (2\xD71)\u2192(1\xD71)\u3002",
      "\u6BCF\u4E2A\u77E9\u9635\u8D1F\u8D23\u8FDE\u63A5\u76F8\u90BB\u4E24\u5C42\u3002"
    ),
    "m3.forward": lesson(
      "\u524D\u5411\u4F20\u64AD\u6309\u5C42\u8BA1\u7B97\u3002\u4E00\u4E2A\u8282\u70B9\u7684\u8F93\u5165\u6765\u81EA\u7D27\u90BB\u4E0A\u4E00\u5C42\u7684\u8F93\u51FA\uFF0C\u4E0D\u80FD\u76F4\u63A5\u6CBF\u7528\u6700\u521D\u7684 X\u3002\u56FE\u4E2D\u91C7\u7528\u4F55\u79CD\u6FC0\u6D3B\uFF0C\u4EE5\u5F53\u524D\u4EFB\u52A1\u9636\u6BB5\u63D0\u793A\u4E3A\u51C6\uFF1B\u9690\u85CF\u5C42\u7684\u89C4\u5219\u4E0D\u81EA\u52A8\u5957\u7528\u5230\u8F93\u51FA\u5C42\u3002",
      ["\u5148\u8BA1\u7B97\u7B2C\u4E00\u9690\u85CF\u5C42\u7684\u4E09\u4E2A\u8282\u70B9\u3002", "\u7528\u8FD9\u4E9B\u7ED3\u679C\u8BA1\u7B97\u7B2C\u4E8C\u9690\u85CF\u5C42\u7684\u4E24\u4E2A\u8282\u70B9\u3002", "\u6700\u540E\u8BA1\u7B97\u8F93\u51FA\u8282\u70B9\uFF0C\u5B8C\u6210\u5168\u90E8\u586B\u5199\u540E\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u6309\u5C42\u524D\u8FDB\uFF0C\u5148\u4FEE\u6B63\u6700\u9760\u8FD1\u8F93\u5165\u5C42\u7684\u9519\u8BEF\uFF0C\u518D\u68C0\u67E5\u540E\u9762\u7684\u8FDE\u9501\u5F71\u54CD\u3002", "\u82E5\u5F53\u524D\u4EFB\u52A1\u8981\u6C42 ReLU\uFF0C\u5BF9\u8BE5\u9690\u85CF\u8282\u70B9\u7684\u52A0\u6743\u548C\u53D6 max(0,z)\uFF1B\u8F93\u51FA\u5C42\u662F\u5426\u6FC0\u6D3B\u8981\u5355\u72EC\u770B\u63D0\u793A\u3002", "\u68C0\u67E5\u6743\u91CD\u7684\u4E24\u7AEF\u662F\u5426\u8FDE\u63A5\u5230\u5F53\u524D\u8282\u70B9\uFF0C\u8D1F\u503C\u662F\u5426\u7ECF\u8FC7\u4E86\u672C\u9636\u6BB5\u8981\u6C42\u7684\u6FC0\u6D3B\uFF0C\u4EE5\u53CA\u4E0B\u4E00\u5C42\u662F\u5426\u4F7F\u7528\u4E86\u4E0A\u4E00\u5C42\u8F93\u51FA\u3002"],
      "\u4E3E\u4F8B\uFF1A\u67D0\u9690\u85CF\u8282\u70B9\u7684\u6FC0\u6D3B\u524D\u503C\u4E3A \u22121\uFF0C\u82E5\u8981\u6C42 ReLU\uFF0C\u5219\u5B83\u5411\u4E0B\u4E00\u5C42\u4F20\u9012 0\uFF1B\u4E0B\u4E00\u5C42\u4E0D\u80FD\u7EE7\u7EED\u628A \u22121 \u5F53\u4F5C\u8F93\u5165\u3002",
      "\u4E0A\u4E00\u5C42\u7684\u8F93\u51FA\u662F\u4E0B\u4E00\u5C42\u7684\u8F93\u5165\u3002"
    ),
    "m4.formula": lesson(
      "\u8FD9\u4E00\u6A21\u5757\u628A\u201C\u7B97\u51FA\u7ED3\u679C\u201D\u6269\u5C55\u4E3A\u201C\u6839\u636E\u8BEF\u5DEE\u5B66\u4E60\u201D\u3002\u5148\u5B8C\u6210\u524D\u5411\u8BA1\u7B97\u5F97\u5230\u9884\u6D4B\uFF0C\u518D\u6BD4\u8F83\u76EE\u6807\uFF0C\u6700\u540E\u6CBF\u8BA1\u7B97\u56FE\u53CD\u5411\u6C42\u68AF\u5EA6\u5E76\u66F4\u65B0\u53C2\u6570\u3002",
      ["\u628A\u4E24\u7EC4\u6837\u672C\u5206\u522B\u62D6\u5230 X1\u3001X2\u3002", "\u628A W1\u3001W2 \u4E2D\u7684\u516B\u4E2A\u6743\u91CD\u62D6\u5230\u56FE\u4E2D\u7684\u5BF9\u5E94\u8FDE\u63A5\u3002", "\u5168\u90E8\u653E\u597D\u540E\u70B9\u51FB\u7B2C\u4E00\u7EC4\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u5148\u5206\u6E05\u56FE\u4E2D\u7684\u9884\u6D4B\u8F93\u51FA\u4E0E\u7ED9\u5B9A\u76EE\u6807\u503C\uFF0C\u5B83\u4EEC\u4E0D\u662F\u540C\u4E00\u4E2A\u91CF\u3002", "\u6BCF\u4E2A\u8282\u70B9\u5148\u6C42 net\uFF0C\u518D\u7531 Sigmoid \u6C42 out\uFF1B\u4E00\u4E2A out \u53EF\u4EE5\u5F71\u54CD\u591A\u4E2A\u540E\u7EED\u8282\u70B9\u3002", "\u5148\u5C06\u4E24\u7EC4\u6837\u672C\u5206\u522B\u62D6\u5230 X1\u3001X2\uFF0C\u518D\u6309\u56FE\u4E2D\u8FDE\u63A5\u62D6\u5165\u516B\u4E2A\u6743\u91CD\u3002"],
      "\u5355\u8282\u70B9\u7684\u8DEF\u5F84\u4E3A\uFF1A\u8F93\u5165\u2192\u4E58\u6743\u91CD\u2192\u6C42\u548C\u52A0\u504F\u7F6E net\u2192Sigmoid\u2192out\u3002\u6574\u5F20\u7F51\u7EDC\u53EA\u662F\u628A\u8FD9\u6837\u7684\u8BA1\u7B97\u5355\u5143\u63A5\u8D77\u6765\u3002",
      "\u8BAD\u7EC3\u5305\u542B\u524D\u5411\u3001\u8BEF\u5DEE\u3001\u53CD\u5411\u6C42\u5BFC\u4E0E\u66F4\u65B0\u56DB\u4E2A\u73AF\u8282\u3002"
    ),
    "m4.forward": lesson(
      "net \u662F\u8FDB\u5165\u6FC0\u6D3B\u51FD\u6570\u524D\u7684\u52A0\u6743\u548C\uFF0Cout \u662F\u6FC0\u6D3B\u540E\u7684\u8F93\u51FA\u3002\u672C\u6A21\u5757\u4F7F\u7528 Sigmoid\u3002\u7B97\u8F93\u51FA\u5C42\u65F6\uFF0C\u8F93\u5165\u5E94\u4E3A\u9690\u85CF\u5C42 out\uFF0C\u800C\u975E\u9690\u85CF\u5C42 net\u3002",
      ["\u5148\u8BA1\u7B97 h1\u3001h2 \u7684 net \u548C out\u3002", "\u7528\u9690\u85CF\u5C42 out \u8BA1\u7B97 O1\u3001O2 \u7684 net \u548C out\u3002", "\u6309\u9875\u9762\u8981\u6C42\u4FDD\u7559\u5C0F\u6570\u4F4D\uFF0C\u63D0\u4EA4\u5F53\u524D\u7EC4\u4FEE\u590D\u3002"],
      ["\u6BCF\u4E2A\u8282\u70B9\u5148\u7B97 net=\u03A3\u8F93\u5165\xD7\u5BF9\u5E94\u6743\u91CD+\u504F\u7F6E\u3002", "\u518D\u628A net \u6574\u4F53\u4EE3\u5165 1/(1+e^(\u2212net))\uFF1B\u6307\u6570\u91CC\u7684\u8D1F\u53F7\u4E0D\u8981\u6F0F\u3002", "\u8F93\u51FA\u5C42\u4F7F\u7528 h1\u3001h2 \u7684 out\u3002\u4E2D\u95F4\u503C\u5C3D\u91CF\u4FDD\u7559\u7CBE\u5EA6\uFF0C\u586B\u5199\u65F6\u9075\u5FAA\u9875\u9762\u7ED9\u5B9A\u7684\u5C0F\u6570\u4F4D\u3002"],
      "\u82E5 net=0\uFF0C\u5219 Sigmoid(0)=0.5\u3002\u5C06 net=0 \u76F4\u63A5\u586B\u5230 out \u4F1A\u628A\u6FC0\u6D3B\u6B65\u9AA4\u6F0F\u6389\u3002",
      "\u533A\u5206 net \u4E0E out\uFF0C\u5E76\u6CBF\u5C42\u4F7F\u7528\u6B63\u786E\u7684\u8F93\u5165\u3002"
    ),
    "m4.loss": lesson(
      "\u635F\u5931\u8861\u91CF\u9884\u6D4B\u4E0E\u76EE\u6807\u7684\u5DEE\u8DDD\u3002\u5E73\u65B9\u8BEF\u5DEE\u5E38\u5199\u4E3A\u6BCF\u4E2A\u8F93\u51FA\u7684 \xBD(t\u2212o)\xB2\uFF0C\u518D\u5BF9\u8F93\u51FA\u6C42\u548C\uFF1B\u67D0\u4E9B\u8BFE\u7A0B\u8FD8\u53D6\u5E73\u5747\uFF0C\u5FC5\u987B\u9075\u5FAA\u5F53\u524D\u9898\u76EE\u7684\u5B9A\u4E49\u3002",
      ["\u4ECE\u4E0A\u65B9 out o1\u3001out o2 \u8BFB\u53D6\u9884\u6D4B\u503C\u3002", "\u5206\u522B\u7528 g01\u3001g02 \u548C\u5BF9\u5E94\u9884\u6D4B\u503C\u8BA1\u7B97\u8BEF\u5DEE\u3002", "\u70B9\u51FB Etotal \u7684\u84DD\u8272\u8BA1\u7B97\u533A\uFF0C\u518D\u5B8C\u6210\u672C\u7EC4\u4FEE\u590D\u3002"],
      ["\u5E73\u65B9\u8BEF\u5DEE\u5148\u76F8\u51CF\u3001\u518D\u5E73\u65B9\uFF0C\u4E0D\u80FD\u5148\u5206\u522B\u5E73\u65B9\u518D\u76F8\u51CF\u3002", "\u68C0\u67E5\u5F53\u524D\u516C\u5F0F\u662F\u5426\u542B \xBD\uFF0C\u4EE5\u53CA Etotal \u8981\u6C42\u6C42\u548C\u8FD8\u662F\u5E73\u5747\u3002", "\u4E24\u4E2A\u8F93\u51FA\u5206\u522B\u8D21\u732E\u8BEF\u5DEE\uFF1B\u4E00\u4E2A\u8F93\u51FA\u5F88\u63A5\u8FD1\u76EE\u6807\uFF0C\u4E0D\u4EE3\u8868\u603B\u8BEF\u5DEE\u5DF2\u4E3A\u96F6\u3002"],
      "\u82E5 t=0.8\u3001o=0.6\uFF0C\u5219 \xBD(t\u2212o)\xB2=0.02\u3002\u82E5\u6709\u4E24\u4E2A\u8F93\u51FA\uFF0C\u5E94\u6309\u9898\u76EE\u8981\u6C42\u6C47\u603B\u4E24\u9879\u3002",
      "\u635F\u5931\u662F\u5BF9\u9884\u6D4B\u504F\u5DEE\u7684\u91CF\u5316\u3002"
    ),
    "m4.weights": lesson(
      "\u8F93\u51FA\u5C42\u6743\u91CD\u7684\u68AF\u5EA6\u6CBF E\u2192out\u2192net\u2192w \u76F8\u4E58\uFF1A\u2202E/\u2202w=(out\u2212target)\xD7out(1\u2212out)\xD7\u8F93\u5165\u3002\u518D\u4F7F\u7528 w\u65B0=w\u65E7\u2212\u03B7\xD7\u68AF\u5EA6\u3002",
      ["\u9009\u62E9\u5F53\u524D\u9700\u8981\u6C42\u5BFC\u7684\u6743\u91CD\u3002", "\u6309\u94FE\u5F0F\u6CD5\u5219\u8865\u9F50\u5404\u4E2A\u5BFC\u6570\u56E0\u5B50\uFF0C\u8BA1\u7B97\u68AF\u5EA6\u3002", "\u4EE3\u5165\u5B66\u4E60\u7387\uFF0C\u586B\u5199\u66F4\u65B0\u540E\u7684\u6743\u91CD\u5E76\u4FEE\u590D\u3002"],
      ["\u5148\u5199\u6E05\u8981\u6C42\u7684\u662F\u635F\u5931\u5BF9\u54EA\u4E00\u4E2A\u6743\u91CD\u7684\u5BFC\u6570\u3002", "\u4E09\u4E2A\u56E0\u5B50\u5206\u522B\u6765\u81EA\u635F\u5931\u3001Sigmoid \u548C\u52A0\u6743\u548C\uFF1B\u6700\u540E\u7684\u8F93\u5165\u662F\u8FD9\u6761\u6743\u91CD\u524D\u7684\u8282\u70B9\u8F93\u51FA\u3002", "\u68C0\u67E5\u51CF\u53F7\uFF1A\u68AF\u5EA6\u4E3A\u6B63\uFF0C\u6743\u91CD\u5E94\u51CF\u5C0F\uFF1B\u68AF\u5EA6\u4E3A\u8D1F\uFF0C\u51CF\u53BB\u8D1F\u503C\u4F1A\u4F7F\u6743\u91CD\u589E\u5927\u3002"],
      "\u82E5 w=0.5\u3001\u03B7=0.1\u3001\u68AF\u5EA6\u4E3A 2\uFF0C\u5219 w\u65B0=0.5\u22120.1\xD72=0.3\u3002",
      "\u94FE\u5F0F\u6CD5\u5219\u628A\u5C40\u90E8\u5BFC\u6570\u7EC4\u5408\u6210\u76EE\u6807\u68AF\u5EA6\u3002"
    ),
    "m4.update": lesson(
      "\u9690\u85CF\u8282\u70B9\u901A\u8FC7 O1\u3001O2 \u4E24\u6761\u8DEF\u5F84\u5F71\u54CD\u603B\u635F\u5931\u3002\u6BCF\u6761\u8DEF\u5F84\u5148\u5C06\u8F93\u51FA\u8282\u70B9\u7684\u8BEF\u5DEE\u9879\u4E58\u5BF9\u5E94\u8FDE\u63A5\u6743\u91CD\uFF0C\u518D\u628A\u4E24\u6761\u8DEF\u5F84\u7684\u8D21\u732E\u76F8\u52A0\u3002",
      ["\u4F9D\u6B21\u586B\u5199 O1 \u7684\u8BEF\u5DEE\u9879\u3001\u8FDE\u63A5\u6743\u91CD\u3002", "\u518D\u586B\u5199 O2 \u7684\u8BEF\u5DEE\u9879\u548C\u8FDE\u63A5\u6743\u91CD\u3002", "\u70B9\u51FB\u84DD\u8272\u8BA1\u7B97\u533A\uFF0C\u518D\u70B9\u51FB\u8FD9\u4E00\u7EC4\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u76F8\u540C\u5C42\u7684\u6743\u91CD\u4E0D\u610F\u5473\u7740\u68AF\u5EA6\u76F8\u540C\uFF0C\u8981\u770B\u5B83\u8FDE\u63A5\u7684\u662F\u54EA\u4E2A\u8282\u70B9\u3002", "\u4E0D\u8981\u628A\u67D0\u4E00\u4E2A\u8F93\u51FA\u7684\u8BEF\u5DEE\u9879\u590D\u5236\u5230\u6240\u6709\u6743\u91CD\u4E0A\u3002", "\u5148\u4FDD\u5B58\u672C\u8F6E\u65E7\u53C2\u6570\uFF0C\u6309\u9898\u76EE\u8BA1\u7B97\u5B8C\u6240\u9700\u68AF\u5EA6\uFF0C\u518D\u4F7F\u7528\u540C\u4E00\u5B66\u4E60\u7387\u66F4\u65B0\uFF0C\u907F\u514D\u6DF7\u7528\u4E24\u8F6E\u53C2\u6570\u3002"],
      "\u540C\u4E00\u4E2A\u9690\u85CF\u8F93\u51FA h \u8FDE\u63A5 O1\u3001O2 \u65F6\uFF0C\u4E24\u6761\u6743\u91CD\u90FD\u4F7F\u7528 h \u4F5C\u4E3A\u8F93\u5165\uFF0C\u4F46\u5BF9\u5E94\u7684 (out\u2212target) \u4E0D\u540C\u3002",
      "\u516C\u5F0F\u53EF\u590D\u7528\uFF0C\u5177\u4F53\u8DEF\u5F84\u4E0A\u7684\u6570\u503C\u5FC5\u987B\u91CD\u65B0\u5BF9\u5E94\u3002"
    ),
    "m4.hidden": lesson(
      "Sigmoid \u7684\u5BFC\u6570\u53EF\u7528\u8BE5\u8282\u70B9\u7684\u8F93\u51FA\u8868\u793A\uFF1Aout\xD7(1\u2212out)\u3002\u8FD9\u4E00\u6B65\u7528 h1 \u7684\u8F93\u51FA\uFF0C\u8BA1\u7B97\u5B83\u5BF9\u81EA\u8EAB\u52A0\u6743\u548C\u7684\u5BFC\u6570\u3002",
      ["\u586B\u5199\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA\u3002", "\u586B\u5199 1 \u51CF\u53BB\u8BE5\u8F93\u51FA\u3002", "\u70B9\u51FB\u84DD\u8272\u533A\u57DF\u8BA1\u7B97\uFF0C\u518D\u70B9\u51FB\u672C\u7EC4\u201C\u4FEE\u590D\u201D\u3002"],
      ["\u5148\u627E\u5230\u4E0A\u65B9\u5DF2\u7ECF\u7B97\u51FA\u7684 out h1\u3002", "\u7B2C\u4E8C\u4E2A\u56E0\u5B50\u662F 1\u2212out h1\u3002", "\u5C06\u4E24\u4E2A\u56E0\u5B50\u76F8\u4E58\uFF0C\u5F97\u5230 h1 \u7684 Sigmoid \u5BFC\u6570\u3002"],
      "\u82E5\u67D0\u8282\u70B9 out \u4E3A 0.6\uFF0C\u5B83\u7684 Sigmoid \u5BFC\u6570\u4E3A 0.6\xD70.4=0.24\u3002",
      "\u6FC0\u6D3B\u5BFC\u6570\u662F\u9690\u85CF\u5C42\u94FE\u5F0F\u6CD5\u5219\u4E2D\u7684\u4E00\u4E2A\u56E0\u5B50\u3002"
    ),
    "m4.finish": lesson(
      "\u53C2\u6570\u66F4\u65B0\u53EA\u5B8C\u6210\u4E86\u4E00\u8F6E\u5B66\u4E60\u3002\u65B0\u53C2\u6570\u4F1A\u6539\u53D8\u4E0B\u4E00\u6B21\u524D\u5411\u4F20\u64AD\u7684\u9884\u6D4B\u4E0E\u635F\u5931\uFF1B\u5B8C\u6574\u8BAD\u7EC3\u901A\u5E38\u9700\u8981\u53CD\u590D\u6267\u884C\u524D\u5411\u3001\u53CD\u5411\u548C\u66F4\u65B0\u3002",
      ["\u8865\u9F50\u6700\u540E\u4E00\u7EC4\u7684\u94FE\u5F0F\u6CD5\u5219\u5143\u7D20\u3002", "\u6838\u5BF9\u68AF\u5EA6\u3001\u5B66\u4E60\u7387\u548C\u65B0\u6743\u91CD\u7684\u5BF9\u5E94\u5173\u7CFB\u3002", "\u5B8C\u6210\u5404\u7EC4\u4FEE\u590D\uFF0C\u8FDB\u5165\u5B9E\u9A8C\u603B\u7ED3\u3002"],
      ["\u68C0\u67E5\u662F\u5426\u4ECD\u6709\u672A\u586B\u5199\u7684\u516C\u5F0F\u69FD\u4F4D\u6216\u53C2\u6570\u9879\u3002", "\u65B0\u6743\u91CD\u6765\u81EA\u65E7\u6743\u91CD\u51CF\u53BB\u5B66\u4E60\u7387\u4E58\u68AF\u5EA6\uFF0C\u4E0D\u662F\u76F4\u63A5\u7528\u68AF\u5EA6\u66FF\u6362\u6743\u91CD\u3002", "\u7ED3\u675F\u524D\u80FD\u8BF4\u660E\uFF1A\u8BEF\u5DEE\u6765\u81EA\u54EA\u91CC\u3001\u5982\u4F55\u6CBF\u8DEF\u5F84\u6C42\u5BFC\u3001\u4E3A\u4EC0\u4E48\u6CBF\u8D1F\u68AF\u5EA6\u66F4\u65B0\u3002"],
      "\u4E00\u6B21\u66F4\u65B0\u4F7F\u67D0\u9879\u635F\u5931\u4E0B\u964D\uFF0C\u5E76\u4E0D\u610F\u5473\u7740\u5DF2\u627E\u5230\u5168\u5C40\u6700\u4F18\uFF1B\u8FD8\u9700\u8981\u89C2\u5BDF\u540E\u7EED\u8FED\u4EE3\u548C\u6574\u4F53\u635F\u5931\u3002",
      "\u628A\u8BA1\u7B97\u8FC7\u7A0B\u8FDE\u6210\u4E00\u6761\u5B8C\u6574\u7684\u8BAD\u7EC3\u94FE\u8DEF\u3002"
    )
  };

  // assistant/core/assessment.ts
  var strings = (value) => Array.isArray(value) ? value.map((item) => String(item ?? "")) : [];
  function compareWeightFactors(snapshot) {
    const actual = strings(snapshot.values.weights), forward = strings(snapshot.values.forward), native = strings(snapshot.values.weightExpected);
    if (actual.length < 3 || forward.length < 6 || !forward[1]?.trim() || !forward[5]?.trim() || !native[1]?.trim()) return null;
    const hidden = Number(forward[1]), output = Number(forward[5]), delta = Number(native[1]);
    const activation = output * (1 - output);
    if (![hidden, output, delta, activation].every(Number.isFinite) || Math.abs(activation) < 1e-12) return null;
    const expected = [delta / activation, activation, hidden];
    const index = expected.findIndex((value, i) => !actual[i]?.trim() || !Number.isFinite(Number(actual[i])) || Math.abs(Number(actual[i]) - value) > 1e-6);
    return { index, actual, expected };
  }

  // assistant/core/module4-check.ts
  var groups = {
    "Part4Calculate.Compare_GeJieDianCalculate": { field: "forward", expected: "forwardExpected", indices: [0, 1, 2, 3, 4, 5, 6, 7], offset: 0 },
    "Part4Calculate.Compare_CalZongWucha": { field: "loss", expected: "lossExpected", indices: [0, 1], offset: 0 },
    "Part4Calculate.Compare_WeightUpdate": { field: "weights", expected: "weightExpected", indices: [3], offset: 0 },
    "Part4Calculate.Compare_WeightUpdate2_00": { field: "updatedWeights", expected: "weightExpected", indices: [0, 1, 2, 3], offset: 1 },
    "Part4Calculate.Compare_WeightUpdate2_01": { field: "updatedWeights", expected: "updateMiddleExpected", indices: [4, 5], offset: 0 },
    "Part4Calculate.Compare_WeightUpdate2_02": { field: "updatedWeights", expected: "updateLastExpected", indices: [6, 7], offset: 0 }
  };
  function checkModule4(method, snapshot) {
    const group = groups[method];
    if (!group) return null;
    const actual = snapshot.values[group.field], expected = snapshot.values[group.expected];
    if (!Array.isArray(actual) || !Array.isArray(expected)) return null;
    if (method === "Part4Calculate.Compare_WeightUpdate") {
      const factors = compareWeightFactors(snapshot);
      if (!factors) return null;
      if (factors.index >= 0) return { valid: false, normalizations: [] };
    }
    const normalizations = [];
    for (const [position, index] of group.indices.entries()) {
      const expectedIndex = position + group.offset, e = String(expected[expectedIndex] ?? "").trim(), a = String(actual[index] ?? "").trim();
      if (!e || !Number.isFinite(Number(e))) return null;
      if (!a || !Number.isFinite(Number(a)) || Math.abs(Number(a) - Number(e)) > 1e-6) return { valid: false, normalizations: [] };
      normalizations.push({ field: group.field, index, expected: group.expected, expectedIndex });
    }
    return { valid: true, normalizations };
  }

  // assistant/core/module4-correction.ts
  function correctModule4References(forward, target2, w12, w22) {
    if (forward.length !== 8 || [target2, w12, w22].some((value) => !Number.isFinite(value))) throw new Error("\u7B2C\u56DB\u6A21\u5757\u7684\u7F51\u7EDC\u6570\u636E\u4E0D\u5B8C\u6574");
    const hidden2 = Number(forward[3]), output2 = Number(forward[7]);
    if (!Number.isFinite(hidden2) || !Number.isFinite(output2) || output2 < 0 || output2 > 1 || target2 < 0 || target2 > 1) throw new Error("\u7B2C\u56DB\u6A21\u5757\u7684\u7F51\u7EDC\u6570\u636E\u65E0\u6548");
    const delta = (output2 - target2) * output2 * (1 - output2);
    return { outputDelta2: delta.toFixed(9), secondPathWeight: String(w12), updatedW22: (w22 - 0.5 * delta * hidden2).toFixed(9) };
  }

  // assistant/bridge/module4-repair.ts
  var FIELDS = { forward: 32, loss: 60, weights: 80, updatedWeights: 124 };
  var EXPECTED = { forwardExpected: 36, lossExpected: 64, weightExpected: 88, updateMiddleExpected: 92, updateLastExpected: 96 };
  var Module4Repair = class {
    constructor(unity, memory, geometry) {
      this.unity = unity;
      this.memory = memory;
      this.geometry = geometry;
    }
    unity;
    memory;
    geometry;
    invoke(info, ...args) {
      const fn = this.unity[`dynCall_${info.signature}`];
      if (typeof fn !== "function") throw new Error(`\u5B9E\u9A8C\u4FEE\u590D\u63A5\u53E3\u4E0D\u53EF\u7528\uFF1A${info.name}`);
      return fn(info.managedPointer, ...args, 0);
    }
    string(value) {
      const allocate = this.unity._malloc, free = this.unity._free;
      if (typeof allocate !== "function" || typeof free !== "function") throw new Error("\u5B9E\u9A8C\u6587\u672C\u63A5\u53E3\u4E0D\u53EF\u7528");
      const bytes = new TextEncoder().encode(value), pointer = allocate(bytes.length + 1);
      if (!pointer) throw new Error("\u65E0\u6CD5\u521B\u5EFA\u5B9E\u9A8C\u6587\u672C");
      try {
        this.unity.HEAPU8.set(bytes, pointer);
        this.unity.HEAPU8[pointer + bytes.length] = 0;
        const result = this.invoke(build_profile_default.repair.newString, 0, pointer);
        if (!result) throw new Error("\u65E0\u6CD5\u521B\u5EFA\u5B9E\u9A8C\u6587\u672C");
        return result;
      } finally {
        free(pointer);
      }
    }
    setText(component, textPointer) {
      if (!component || !textPointer || this.memory.className(component) !== "Text") throw new Error("\u5B9E\u9A8C\u6587\u672C\u63A7\u4EF6\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4");
      if (this.memory.u32(component + 104) !== textPointer) this.invoke(build_profile_default.repair.setText, component, textPointer);
    }
    textAt(root, path) {
      const transform = this.geometry.path(root, `Scroll View/Viewport/Content/${path}`), info = build_profile_default.repair.getText;
      const fn = this.unity[`dynCall_${info.signature}`], metadata = this.memory.u32(info.metadataAddress);
      if (!transform || !metadata || typeof fn !== "function") throw new Error(`\u5B9E\u9A8C\u63A7\u4EF6\u672A\u627E\u5230\uFF1A${path}`);
      const component = fn(info.managedPointer, transform, metadata);
      if (!component || this.memory.className(component) !== "Text") throw new Error(`\u5B9E\u9A8C\u6587\u672C\u672A\u627E\u5230\uFF1A${path}`);
      return component;
    }
    writeArray(array, index, value) {
      const entries = this.memory.pointers(array);
      if (index < 0 || index >= entries.length) throw new Error("\u5B9E\u9A8C\u53C2\u8003\u503C\u6570\u91CF\u4E0D\u4E00\u81F4");
      new DataView(this.unity.HEAPU8.buffer).setUint32(array + 16 + index * 4, this.string(value), true);
    }
    correctReferences(instance) {
      const root = this.geometry.root(instance), read = (path) => this.memory.text(this.textAt(root, path)) ?? "";
      const target2 = Number(read("01/TextAuto/O/O11")), w12 = Number(read("01/TextAuto/W12_1 (1)")), w22 = Number(read("01/TextAuto/W22_1 (1)"));
      const forward = this.memory.pointers(this.memory.u32(instance + 36)).map((p) => this.memory.string(p) ?? "");
      const refs = correctModule4References(forward, target2, w12, w22);
      const weight = this.memory.u32(instance + 88), outputWeights = this.memory.u32(instance + 84);
      const existing = this.memory.pointers(weight).map((p) => this.memory.string(p) ?? "");
      if (existing.length !== 5 || Number(existing[4]) !== 0.4) throw new Error("\u7B2C\u56DB\u6A21\u5757\u53C2\u8003\u503C\u4E0E\u5DF2\u9A8C\u8BC1\u7248\u672C\u4E0D\u4E00\u81F4");
      this.writeArray(weight, 3, refs.outputDelta2);
      this.writeArray(weight, 4, refs.secondPathWeight);
      this.writeArray(outputWeights, 2, refs.updatedW22);
      const graphBias = read("00/Arrows/Arrowsb2-2/Text").split("=")[1]?.trim();
      if (!graphBias || !Number.isFinite(Number(graphBias))) throw new Error("\u7B2C\u56DB\u6A21\u5757\u504F\u7F6E\u663E\u793A\u65E0\u6548");
      this.setText(this.textAt(root, "00/StartInput/\u504F\u79FBValue/Text (4)"), this.string(graphBias));
    }
    correctDisplayedOutputs(instance) {
      const inputs = this.memory.pointers(this.memory.u32(instance + 32));
      for (const [targetOffset, index] of [[48, 5], [52, 7]]) {
        const source = inputs[index], target = this.memory.u32(instance + targetOffset);
        if (!source || !target) continue;
        const text = this.memory.u32(source + 104);
        if (text && this.memory.string(text)) this.setText(target, text);
      }
    }
    validate(method, instance, snapshot) {
      const result = checkModule4(method, snapshot);
      if (!result) return null;
      if (!result.valid) {
        this.invoke({ name: "Part4Calculate.CalculateScore", signature: "vii", managedPointer: 4730 }, instance);
        return false;
      }
      for (const item of result.normalizations) this.normalize(instance, item);
      return true;
    }
    normalize(instance, item) {
      const fields = this.memory.pointers(this.memory.u32(instance + FIELDS[item.field]));
      const expected = this.memory.pointers(this.memory.u32(instance + EXPECTED[item.expected]));
      const field = fields[item.index], value = expected[item.expectedIndex];
      if (!field || !value) throw new Error("\u5B9E\u9A8C\u8F93\u5165\u4E0E\u53C2\u8003\u503C\u6570\u91CF\u4E0D\u4E00\u81F4");
      if (this.memory.className(field) !== "Text") throw new Error("\u5B9E\u9A8C\u8F93\u5165\u63A7\u4EF6\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4");
      this.memory.u32(field + 104);
      new DataView(this.unity.HEAPU8.buffer).setUint32(field + 104, value, true);
    }
  };

  // assistant/bridge/objective-layout.ts
  var OBJECTIVE_GAP_UNITS = 600;
  var clamp = (value) => Math.max(0, Math.min(1, value));
  function calculateObjectiveArea(next, reference, viewport) {
    const height = reference.height * OBJECTIVE_GAP_UNITS / 100;
    if (!Number.isFinite(height) || height <= 0 || next.width <= 0 || viewport.width <= 0 || viewport.height <= 0) throw new Error("\u65E0\u6CD5\u786E\u5B9A\u4EFB\u52A1\u5339\u914D\u9898\u7684\u4F4D\u7F6E");
    return { question: { x: next.x, y: next.y - height, width: next.width, height }, viewport };
  }
  function scrollToObjective(current, targetY, viewport, contentHeight, inset = 0.05) {
    const range = contentHeight - viewport.height;
    if (range <= 0) return clamp(current);
    return clamp(current - (targetY - (viewport.y + viewport.height * inset)) / range);
  }
  function scrollObjectiveBy(current, deltaPixels, canvasHeight, contentHeight, viewportHeight) {
    const range = contentHeight - viewportHeight;
    if (range <= 0 || canvasHeight <= 0) return clamp(current);
    return clamp(current - deltaPixels / canvasHeight / range);
  }

  // assistant/bridge/module4-layout.ts
  var Module4Layout = class {
    constructor(unity, memory, geometry) {
      this.unity = unity;
      this.memory = memory;
      this.geometry = geometry;
    }
    unity;
    memory;
    geometry;
    scratch = 0;
    instance = 0;
    viewport = 0;
    content = 0;
    reference = 0;
    next = 0;
    scrollbar = 0;
    lastFrameScroll = null;
    lastFrameSize = "";
    frameViewport = null;
    frameReference = null;
    get active() {
      return this.instance !== 0;
    }
    invoke(key, ...args) {
      const method = build_profile_default.objectiveLayout[key], fn = this.unity[`dynCall_${method.signature}`];
      if (typeof fn !== "function") throw new Error(`\u5B9E\u9A8C\u5E03\u5C40\u63A5\u53E3\u4E0D\u53EF\u7528\uFF1A${method.name}`);
      return fn(method.managedPointer, ...args, 0);
    }
    pair(key, target) {
      this.invoke(key, target, this.scratch);
      const view = new DataView(this.unity.HEAPU8.buffer);
      return { x: view.getFloat32(this.scratch, true), y: view.getFloat32(this.scratch + 4, true) };
    }
    setPair(key, target, value) {
      const view = new DataView(this.unity.HEAPU8.buffer);
      view.setFloat32(this.scratch, value.x, true);
      view.setFloat32(this.scratch + 4, value.y, true);
      this.invoke(key, target, this.scratch);
    }
    change(kind, target, dx, dy) {
      if (!target || this.memory.className(target) !== "RectTransform") throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5E03\u5C40\u4E0E\u5DF2\u9A8C\u8BC1\u7248\u672C\u4E0D\u4E00\u81F4");
      const before = this.pair(kind === "position" ? "getPosition" : "getSize", target);
      if (!Number.isFinite(before.x) || !Number.isFinite(before.y)) throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5750\u6807\u65E0\u6548");
      return { target, kind, before, after: { x: before.x + dx, y: before.y + dy } };
    }
    open(instance) {
      if (this.instance === instance) return;
      if (this.active) throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5E03\u5C40\u5DF2\u7ECF\u521D\u59CB\u5316");
      if (!this.scratch) {
        const allocate = this.unity._malloc;
        if (typeof allocate !== "function") throw new Error("\u5B9E\u9A8C\u5E03\u5C40\u5185\u5B58\u4E0D\u53EF\u7528");
        this.scratch = allocate(16);
        if (!this.scratch) throw new Error("\u65E0\u6CD5\u521B\u5EFA\u5B9E\u9A8C\u5E03\u5C40");
      }
      const root = this.geometry.root(instance), path = (name) => {
        const transform = this.geometry.path(root, name);
        if (!transform) throw new Error(`\u5B9E\u9A8C\u9898\u76EE\u4F4D\u7F6E\u672A\u627E\u5230\uFF1A${name}`);
        return transform;
      };
      const base = "Scroll View/Viewport/Content", viewport = path("Scroll View/Viewport"), content = path(base), reference = path(`${base}/01`), next = path(`${base}/01/Bg00 (1)`);
      const scrollbar = this.memory.u32(instance + 192);
      if (!scrollbar || this.memory.className(scrollbar) !== "Scrollbar") throw new Error("\u5B9E\u9A8C\u6EDA\u52A8\u6761\u4E0E\u5DF2\u9A8C\u8BC1\u7248\u672C\u4E0D\u4E00\u81F4");
      const changes = [];
      for (const name of ["01/Bg00 (1)", "01/Bg00 (2)", "01/TextCalculate", "01/WuchaInputs", "02", "03", "TipClickBtnAutoCalculate", "Repair"]) changes.push(this.change("position", path(`${base}/${name}`), 0, -OBJECTIVE_GAP_UNITS));
      for (let i = 1; i <= 6; i++) changes.push(this.change("position", path(`${base}/Repairs/Repair0 (${i})`), 0, -OBJECTIVE_GAP_UNITS));
      const background = path(`${base}/Image`);
      changes.push(this.change("size", background, 0, OBJECTIVE_GAP_UNITS), this.change("position", background, 0, -OBJECTIVE_GAP_UNITS / 2), this.change("size", content, 0, OBJECTIVE_GAP_UNITS));
      const applied = [];
      try {
        for (const change of changes) {
          this.setPair(change.kind === "position" ? "setPosition" : "setSize", change.target, change.after);
          applied.push(change);
        }
      } catch (error) {
        for (const change of applied.reverse()) this.setPair(change.kind === "position" ? "setPosition" : "setSize", change.target, change.before);
        throw error;
      }
      this.instance = instance;
      this.viewport = viewport;
      this.content = content;
      this.reference = reference;
      this.next = next;
      this.scrollbar = scrollbar;
    }
    geometryValues() {
      if (!this.active) throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5C1A\u672A\u63D2\u5165");
      this.geometry.begin(this.viewport);
      const viewport = this.geometry.bounds(this.viewport), next = this.geometry.bounds(this.next), reference = this.geometry.bounds(this.reference), content = this.geometry.bounds(this.content);
      if (!viewport || !next || !reference || !content) throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5F53\u524D\u4E0D\u53EF\u89C1");
      return { area: calculateObjectiveArea(next, reference, viewport), contentHeight: content.height, nextY: next.y };
    }
    area() {
      return this.geometryValues().area;
    }
    frameArea() {
      if (!this.active) return null;
      const canvas = document.querySelector("canvas");
      if (!canvas) throw new Error("\u5B9E\u9A8C\u753B\u5E03\u4E0D\u53EF\u7528");
      const size = `${canvas.width}:${canvas.height}:${window.innerWidth}:${window.innerHeight}`;
      const scroll = this.invoke("getScroll", this.scrollbar);
      if (!Number.isFinite(scroll)) throw new Error("\u5B9E\u9A8C\u6EDA\u52A8\u4F4D\u7F6E\u65E0\u6548");
      if (scroll === this.lastFrameScroll && size === this.lastFrameSize) return null;
      this.geometry.begin();
      const next = this.geometry.bounds(this.next);
      if (size !== this.lastFrameSize || !this.frameViewport || !this.frameReference) {
        this.frameViewport = this.geometry.bounds(this.viewport);
        this.frameReference = this.geometry.bounds(this.reference);
      }
      if (!next || !this.frameViewport || !this.frameReference) throw new Error("\u5B9E\u9A8C\u9898\u76EE\u5F53\u524D\u4E0D\u53EF\u89C1");
      const area = calculateObjectiveArea(next, this.frameReference, this.frameViewport);
      this.lastFrameScroll = scroll;
      this.lastFrameSize = size;
      return area;
    }
    scrollToQuestion() {
      const { area, contentHeight } = this.geometryValues(), current = this.invoke("getScroll", this.scrollbar);
      this.invoke("setScroll", this.scrollbar, scrollToObjective(current, area.question.y, area.viewport, contentHeight));
    }
    scrollToNext() {
      const { area, contentHeight, nextY } = this.geometryValues(), current = this.invoke("getScroll", this.scrollbar);
      this.invoke("setScroll", this.scrollbar, scrollToObjective(current, nextY, area.viewport, contentHeight, 0));
    }
    scrollBy(delta) {
      const { area, contentHeight } = this.geometryValues(), current = this.invoke("getScroll", this.scrollbar);
      this.invoke("setScroll", this.scrollbar, scrollObjectiveBy(current, delta, 1, contentHeight, area.viewport.height));
    }
  };

  // assistant/bridge/observer.ts
  var hooks = build_profile_default.hooks.map((item) => ({
    ...item,
    guard: ["Part4Calculate.Compare_GeJieDianCalculate", "Part4Calculate.Compare_CalZongWucha", "Part4Calculate.Compare_WeightUpdate", "Part4Calculate.Compare_WeightUpdate2_00", "Part4Calculate.Compare_WeightUpdate2_01", "Part4Calculate.Compare_WeightUpdate2_02"].includes(item.name),
    enter: { code: item.enter.code, payload: item.enter.payload },
    leave: { code: item.leave.code, payload: item.leave.payload === "result" ? "result" : Number(item.leave.payload) }
  }));
  var NativeObserver = class {
    status = "waiting";
    error = null;
    sourceSession = crypto.randomUUID();
    snapshot = { sourceSession: this.sourceSession, mode: "loading", module: null, state: null, activeTips: [], scores: null, nextRepair: null, previewPage: null, speechPlaying: false, values: {}, report: { submitted: false, total: null, reflection: null, operations: null } };
    instances = /* @__PURE__ */ new Map();
    traces = [];
    unity = null;
    memory = null;
    lastSample = -Infinity;
    queued = false;
    pollTimer = null;
    callbacks = /* @__PURE__ */ new Set();
    callCallbacks = /* @__PURE__ */ new Set();
    objectiveAreaCallbacks = /* @__PURE__ */ new Set();
    objectiveAreaQueued = false;
    sequence = 0;
    speechMuted = false;
    settingVolume = false;
    volumeCalls = [];
    requestedVolumes = /* @__PURE__ */ new Map();
    floatBits = new DataView(new ArrayBuffer(4));
    dropBefore = /* @__PURE__ */ new Map();
    observedReport = null;
    geometry = null;
    geometryError = null;
    module4Repair = null;
    module4Layout = null;
    weightedSlots = /* @__PURE__ */ new Set();
    subscribe(callback) {
      this.callbacks.add(callback);
      return () => this.callbacks.delete(callback);
    }
    subscribeCalls(callback) {
      this.callCallbacks.add(callback);
      return () => this.callCallbacks.delete(callback);
    }
    subscribeObjectiveArea(callback) {
      this.objectiveAreaCallbacks.add(callback);
      return () => this.objectiveAreaCallbacks.delete(callback);
    }
    notify() {
      for (const callback of this.callbacks) callback();
    }
    fail(error) {
      this.status = "error";
      this.error = error instanceof Error ? error.message : String(error);
      console.error("[AI tutor bridge]", this.error);
      this.notify();
    }
    createModuleHooks() {
      return {
        instantiateWasm: (imports, receive) => {
          const unity = imports.parent;
          this.unity = unity;
          this.memory = new UnityMemory(() => unity.HEAPU8.buffer);
          this.geometry = new NativeGeometry(unity, this.memory, (key, pointer, ...args) => this.getter(key, pointer, ...args), (pointer) => this.active(pointer));
          this.module4Repair = new Module4Repair(unity, this.memory, this.geometry);
          this.module4Layout = new Module4Layout(unity, this.memory, this.geometry);
          const bytes = new Uint8Array(unity.wasmBinary);
          const originalLog = imports.env._emscripten_log;
          let prepared;
          try {
            const layout = describeWasm(bytes, { "env.tableBase": Number(imports.env.tableBase) });
            if (bytes.length !== build_profile_default.byteLength || layout.functionTypes.length !== build_profile_default.functionCount || layout.imports.length !== build_profile_default.importFunctionCount) {
              throw new Error("\u5F53\u524D\u5B9E\u9A8C\u6784\u5EFA\u4E0E\u5DF2\u9A8C\u8BC1\u7684\u6865\u63A5\u7248\u672C\u4E0D\u4E00\u81F4");
            }
            for (const method of build_profile_default.hooks) {
              if (layout.elements.get(method.tableSlot) !== method.functionIndex) throw new Error(`\u65B9\u6CD5\u7ED1\u5B9A\u53D1\u751F\u53D8\u5316\uFF1A${method.name}`);
            }
            for (const method of Object.values(build_profile_default.geometry)) {
              if (layout.elements.get(method.tableSlot) !== method.functionIndex) throw new Error(`\u5B9A\u4F4D\u63A5\u53E3\u7ED1\u5B9A\u53D1\u751F\u53D8\u5316\uFF1A${method.name}`);
            }
            for (const method of Object.values(build_profile_default.input)) {
              if (layout.elements.get(method.tableSlot) !== method.functionIndex) throw new Error(`\u8F93\u5165\u63A5\u53E3\u7ED1\u5B9A\u53D1\u751F\u53D8\u5316\uFF1A${method.name}`);
            }
            for (const method of Object.values(build_profile_default.repair)) {
              if (layout.elements.get(method.tableSlot) !== method.functionIndex) throw new Error(`\u5B9E\u9A8C\u4FEE\u590D\u63A5\u53E3\u7ED1\u5B9A\u53D1\u751F\u53D8\u5316\uFF1A${method.name}`);
            }
            for (const method of Object.values(build_profile_default.objectiveLayout)) {
              if (layout.elements.get(method.tableSlot) !== method.functionIndex) throw new Error(`\u5B9E\u9A8C\u5E03\u5C40\u63A5\u53E3\u7ED1\u5B9A\u53D1\u751F\u53D8\u5316\uFF1A${method.name}`);
            }
            prepared = instrumentWasm(bytes, hooks);
            const originalInvoke = imports.env.invoke_ii;
            imports.env.invoke_ii = (index, value) => {
              if ((index & 4294901760) !== GUARD_MARKER) return originalInvoke(index, value);
              const method = build_profile_default.hooks[Math.floor(((index & 65535) - 1) / 2)];
              try {
                if (!method || !this.module4Repair) throw new Error("\u5B9E\u9A8C\u6821\u9A8C\u63A5\u53E3\u4E0D\u53EF\u7528");
                this.sample();
                const valid = this.module4Repair.validate(method.name, value, this.snapshot);
                if (valid === null) throw new Error("\u5B9E\u9A8C\u6821\u9A8C\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u5B9E\u9A8C");
                return valid ? 0 : 1;
              } catch (error) {
                this.fail(error);
                return 1;
              }
            };
            imports.env._emscripten_log = (flags, value) => {
              if ((flags & 4294901760) === EVENT_MARKER) {
                if (this.status !== "error") {
                  try {
                    this.receive(flags & 65535, value);
                  } catch (error) {
                    this.fail(error);
                  }
                }
                return;
              }
              originalLog(flags, value);
            };
          } catch (error) {
            this.fail(error);
            prepared = bytes;
          }
          WebAssembly.instantiate(prepared, imports).then((result) => receive(result.instance, result.module)).catch((error) => this.fail(error));
          return {};
        }
      };
    }
    receive(code, value) {
      const index = Math.floor((code - 1) / 2), method = build_profile_default.hooks[index];
      if (!method) throw new Error("Unknown native bridge signal");
      const phase = code === method.enter.code ? "enter" : "leave";
      const memory = this.memory;
      if (phase === "enter") {
        if (this.instances.get(method.className) !== value) {
          const actual = memory.className(value);
          if (actual !== method.className) throw new Error(`\u7C7B\u578B\u9A8C\u8BC1\u5931\u8D25\uFF1A${method.name} / ${actual}`);
          this.instances.set(method.className, value);
          if (method.className === "MainVarController" && this.pollTimer === null) {
            this.pollTimer = window.setInterval(() => {
              if (this.status !== "error") {
                try {
                  this.sample();
                } catch (error) {
                  this.fail(error);
                }
              }
            }, 150);
          }
        }
      }
      if (method.name === "AudioSource.set_volume") {
        if (phase === "enter") this.volumeCalls.push(value);
        else {
          const target = this.volumeCalls.pop();
          this.floatBits.setInt32(0, value, true);
          const requested = this.floatBits.getFloat32(0, true);
          if (target !== void 0 && !this.settingVolume) {
            if (!Number.isFinite(requested)) throw new Error("\u539F\u7A0B\u5E8F\u8BBE\u7F6E\u4E86\u65E0\u6548\u97F3\u91CF");
            this.requestedVolumes.set(target, requested);
            if (this.speechMuted && target === this.speechSource()) this.writeSpeechVolume(target, 0);
          }
        }
        return;
      }
      if (method.name === "InputField_WebGL.Start" && phase === "leave") this.extendLoginInput(this.instances.get(method.className));
      if (method.name === "Part4Calculate.Start" && phase === "leave") this.module4Repair?.correctReferences(this.instances.get(method.className));
      if (method.name === "Part4Calculate.Cal2NetOutValue" && phase === "leave") this.module4Repair?.correctDisplayedOutputs(this.instances.get(method.className));
      if (method.name === "Part4Calculate.Update" && phase === "leave" && this.module4Layout?.active) this.queueObjectiveArea();
      if (method.methodName !== "Update") {
        let observed = method.name === "Part1Calculate.ResultPlay" && phase === "leave" ? memory.string(value) : value;
        if (phase === "leave" && method.leave.payload === "result" && method.results[0] === 125) {
          this.floatBits.setInt32(0, value, true);
          observed = this.floatBits.getFloat32(0, true);
        }
        this.traces.push({ method: method.name, phase, value: observed, at: Math.round(performance.now()) });
        if (this.traces.length > 60) this.traces.splice(0, this.traces.length - 60);
        if (CHECK_METHODS[method.name] || method.methodName === "OnEndDrag" || phase === "leave" && method.name === "MainVarController.ThePartRepairEnd") this.sample();
        const payload = phase === "leave" && method.leave.payload !== 0 ? observed : null;
        const call = { sequence: ++this.sequence, method: method.name, phase, value: payload, snapshot: this.snapshot };
        if (phase === "enter" && method.methodName === "OnEndDrag" && this.snapshot.module === 1) {
          this.dropBefore.set(method.name, method.className === "DragableCard" ? memory.booleans(memory.u32(value + 20)) : [this.snapshot.values[method.className === "DragFunction" ? "activationReady" : "combineReady"] === true]);
        }
        if (phase === "leave" && method.methodName === "OnEndDrag" && this.snapshot.mode === "experiment" && this.snapshot.module === 1) {
          const instance = this.instances.get(method.className);
          const before = this.dropBefore.get(method.name) ?? [];
          this.dropBefore.delete(method.name);
          if (method.className === "DragableCard") {
            const targets = memory.booleans(memory.u32(instance + 20)).flatMap((placed, index2) => placed && before[index2] !== true ? [index2] : []);
            call.action = { kind: "weighted-drop", accepted: targets.length > 0, targets, wrongOperator: !memory.boolean(instance + 12) };
            if (call.action.accepted) for (const target of targets) this.weightedSlots.add(target);
          } else if (method.className === "DragableCardOperateZuhe" && before[0] !== true) {
            call.action = { kind: "combine-drop", accepted: this.snapshot.values.combineReady === true, targets: [], wrongOperator: !memory.boolean(instance + 28) };
          } else if (method.className === "DragFunction" && before[0] !== true) {
            call.action = { kind: "activation-drop", accepted: this.snapshot.values.activationReady === true, targets: [], wrongOperator: false };
          }
        }
        for (const callback of this.callCallbacks) callback(call);
      }
      if (!this.queued && (method.methodName !== "Update" || performance.now() - this.lastSample >= 100)) {
        this.queued = true;
        queueMicrotask(() => {
          this.queued = false;
          if (this.status === "error") return;
          try {
            this.sample();
          } catch (error) {
            this.fail(error);
          }
        });
      }
    }
    getter(name, pointer, ...args) {
      if (!pointer) return 0;
      const info = build_profile_default.getters[name];
      const fn = this.unity?.[`dynCall_${info.signature}`];
      if (typeof fn !== "function") throw new Error(`Unity \u53EA\u8BFB\u63A5\u53E3\u5C1A\u672A\u5C31\u7EEA\uFF1A${name}`);
      return fn(info.managedPointer, pointer, ...args, 0);
    }
    queueObjectiveArea() {
      if (this.objectiveAreaQueued) return;
      this.objectiveAreaQueued = true;
      queueMicrotask(() => {
        this.objectiveAreaQueued = false;
        const instance = this.instances.get("Part4Calculate");
        if (this.status !== "connected" || this.snapshot.module !== 4 || !instance || !this.module4Layout?.active) return;
        try {
          if (!this.activeComponent(instance)) return;
          const area = this.module4Layout.frameArea();
          if (area) for (const callback of this.objectiveAreaCallbacks) callback(area);
        } catch (error) {
          this.fail(error);
        }
      });
    }
    extendLoginInput(component) {
      const memory = this.memory, transform = this.getter("transform", this.getter("gameObject", component));
      const parent = this.getter("parent", transform), name = memory.string(this.getter("name", transform));
      if (memory.string(this.getter("name", parent)) !== "Login" || !name || !["Name", "School", "Class", "Index", "Zhuanye"].includes(name)) return;
      const input = memory.u32(component + 12);
      if (memory.className(input) !== "InputField") throw new Error("\u767B\u5F55\u8F93\u5165\u6846\u7C7B\u578B\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4");
      const setter = build_profile_default.input.setCharacterLimit, call = this.unity?.[`dynCall_${setter.signature}`];
      if (typeof call !== "function") throw new Error("\u767B\u5F55\u8F93\u5165\u63A5\u53E3\u5C1A\u672A\u5C31\u7EEA");
      call(setter.managedPointer, input, 64, 0);
    }
    active(pointer) {
      return !!pointer && this.memory.u32(pointer + 8) !== 0 && !!this.getter("active", pointer);
    }
    activeComponent(pointer) {
      return !!pointer && this.active(this.getter("gameObject", pointer));
    }
    tips(pointer) {
      if (!pointer) return [];
      const count = this.getter("childCount", pointer);
      if (count < 0 || count > 32) throw new Error("Unexpected course hint collection size");
      const active = [];
      for (let index = 0; index < count; index++) {
        const child = this.getter("child", pointer, index);
        if (this.activeComponent(child)) active.push(this.memory.string(this.getter("name", child)) ?? "");
      }
      return active;
    }
    texts(pointer) {
      return this.memory.pointers(pointer).map((item) => this.memory.text(item));
    }
    strings(pointer) {
      return this.memory.pointers(pointer).map((item) => this.memory.string(item));
    }
    inputNames(pointer) {
      return this.memory.pointers(pointer).map((item) => {
        if (!item) return "";
        const transform = this.getter("transform", this.getter("gameObject", item));
        const parent = this.getter("parent", transform);
        return this.memory.string(this.getter("name", parent || transform)) ?? "";
      });
    }
    speechSource() {
      const audio = this.instances.get("AudioPlayer");
      return audio && this.memory ? this.memory.u32(audio + 20) : 0;
    }
    writeSpeechVolume(source, volume) {
      const info = build_profile_default.audio.setVolume;
      const fn = this.unity?.[`dynCall_${info.signature}`];
      if (typeof fn !== "function") throw new Error("\u539F\u5B9E\u9A8C\u7684\u97F3\u91CF\u63A5\u53E3\u5C1A\u672A\u5C31\u7EEA");
      this.settingVolume = true;
      try {
        fn(info.managedPointer, source, volume, 0);
      } finally {
        this.settingVolume = false;
      }
    }
    setSpeechMuted(muted) {
      const source = this.speechSource(), manager = this.instances.get("MainVarController");
      if (!source || !manager || !this.memory) return;
      const volume = this.requestedVolumes.get(source) ?? this.memory.f32(manager + 16);
      if (!Number.isFinite(volume)) throw new Error("\u539F\u5B9E\u9A8C\u65C1\u767D\u97F3\u91CF\u4E0D\u53EF\u7528");
      this.requestedVolumes.set(source, volume);
      this.speechMuted = muted;
      this.writeSpeechVolume(source, muted ? 0 : volume);
    }
    refresh() {
      if (this.status === "connected") this.sample();
      return this.snapshot;
    }
    openObjective() {
      const instance = this.instances.get("Part4Calculate");
      if (!instance || this.snapshot.module !== 4 || !Array.isArray(this.snapshot.values.repaired) || this.snapshot.values.repaired[0] !== true || !this.module4Layout) throw new Error("\u5F53\u524D\u4E0D\u80FD\u63D2\u5165\u4EFB\u52A1\u5339\u914D\u9898");
      this.module4Layout.open(instance);
      requestAnimationFrame(() => {
        try {
          if (!this.activeComponent(instance)) return;
          this.module4Layout.scrollToQuestion();
          this.sample();
        } catch (error) {
          this.fail(error);
        }
      });
    }
    scrollObjective(delta) {
      if (this.snapshot.mode !== "experiment" || this.snapshot.module !== 4 || !this.module4Layout?.active || !Number.isFinite(delta)) return;
      this.module4Layout.scrollBy(Math.max(-1, Math.min(1, delta)));
      this.queueObjectiveArea();
    }
    continueObjective() {
      if (this.snapshot.mode !== "experiment" || this.snapshot.module !== 4 || !this.module4Layout?.active) return;
      this.module4Layout.scrollToNext();
      this.sample();
    }
    sample() {
      this.lastSample = performance.now();
      const memory = this.memory, manager = this.instances.get("MainVarController");
      if (!manager) return;
      const ptr = (offset) => memory.u32(manager + offset);
      let module = null, state = null, activeTips = [];
      const values = {};
      let anchors = [];
      let objectiveArea = null;
      for (const [index, name] of ["Part1Calculate", "Part2Process", "Part3Calculate", "Part4Calculate"].entries()) {
        const instance = this.instances.get(name);
        if (!instance || !this.activeComponent(instance)) continue;
        module = index + 1;
        const field = (offset) => memory.u32(instance + offset);
        state = memory.i32(instance + [12, 12, 76, 16][index]);
        if (index === 0) {
          activeTips = this.tips(field(36));
          values.inputs = this.texts(field(40));
          values.result = memory.text(field(48));
          values.weightedCorrect = memory.boolean(instance + 60);
          values.sumCorrect = memory.boolean(instance + 61);
          values.weighted = [memory.f32(instance + 84), memory.f32(instance + 88)];
          values.sum = memory.f32(instance + 92);
          values.operatorPlacements = [this.weightedSlots.has(0), this.weightedSlots.has(1)];
          values.dialogVisible = this.tips(field(52)).length > 0 || this.activeComponent(field(56));
          const staticFields = memory.u32(memory.u32(instance) + 92);
          if (staticFields) {
            values.weightedReady = memory.boolean(staticFields);
            values.combineReady = memory.boolean(staticFields + 1);
            values.activationReady = memory.boolean(staticFields + 2);
          }
        } else if (index === 1) {
          activeTips = this.tips(field(108));
          values.inputs = this.texts(field(20));
          values.correct = memory.boolean(instance + 104);
          values.connection = memory.i32(instance + 144);
          values.inputConnections = [memory.boolean(instance + 128), memory.boolean(instance + 129)];
          values.dialogVisible = memory.pointers(field(100)).some((pointer) => this.active(pointer));
        } else if (index === 2) {
          activeTips = this.tips(field(52));
          values.dimensions = this.texts(field(20));
          values.outputs = this.texts(field(40));
          values.dimensionCorrect = memory.i32(instance + 80);
          values.outputCorrect = memory.i32(instance + 84);
          values.dimensionChecks = memory.booleans(field(24));
          values.outputExpected = memory.floats(field(48));
          values.dimensionLabels = this.inputNames(field(20));
          values.outputLabels = this.inputNames(field(40));
          values.errorVisible = this.active(field(72));
        } else {
          values.forward = this.texts(field(32));
          values.loss = this.texts(field(60));
          values.weights = this.texts(field(80));
          values.updatedWeights = this.texts(field(124));
          values.repaired = memory.booleans(field(176));
          values.repairAvailable = memory.pointers(field(172)).map((pointer) => this.activeComponent(pointer));
          values.ended = memory.boolean(instance + 152);
          values.part4Count = memory.i32(manager + 24);
          values.forwardExpected = this.strings(field(36));
          values.forwardLabels = MODULE4_FIELDS.forward;
          values.lossExpected = this.strings(field(64));
          values.lossLabels = MODULE4_FIELDS.loss;
          values.weightExpected = this.strings(field(88));
          values.updatedLabels = MODULE4_FIELDS.updated;
          values.updateMiddleExpected = this.strings(field(92));
          values.updateLastExpected = this.strings(field(96));
        }
        if (this.geometry && !this.geometryError) {
          try {
            const geo = this.geometry, root = geo.root(instance), add = (value) => {
              if (value) anchors.push(value);
            };
            geo.begin(index === 3 ? geo.path(root, "Scroll View/Viewport") : 0);
            const inputs = (offset, prefix, labels) => memory.pointers(field(offset)).forEach((pointer, i) => add(geo.component(`${prefix}.${i}`, labels[i] ?? `\u7B2C ${i + 1} \u9879`, pointer, true)));
            if (index === 0) {
              inputs(40, "m1.input", ["X1", "W1", "\u7B2C\u4E00\u8DEF\u52A0\u6743\u7ED3\u679C", "X2", "W2", "\u7B2C\u4E8C\u8DEF\u52A0\u6743\u7ED3\u679C", "\u504F\u7F6E b", "\u7EC4\u5408\u503C S", "\u8F93\u51FA Z"]);
              for (const [id, label, path] of [["m1.operator.0", "\u7B2C\u4E00\u8DEF\u52A0\u6743\u69FD\u4F4D", "TargetPos/Add1"], ["m1.operator.1", "\u7B2C\u4E8C\u8DEF\u52A0\u6743\u69FD\u4F4D", "TargetPos/Add2"], ["m1.combine", "\u7EC4\u5408\u69FD\u4F4D N", "TargetPos/ZuheOperate"], ["m1.activation", "\u6FC0\u6D3B\u69FD\u4F4D F", "TargetPos/FunctionActive"]]) add(geo.transform(id, label, geo.path(root, path)));
              add(geo.component("m1.repair", "\u4FEE\u590D", field(44)));
            } else if (index === 1) {
              inputs(20, "m2.output", ["\u8F93\u51FA S1", "\u8F93\u51FA S2", "\u8F93\u51FA S3"]);
              add(geo.transform("m2.input.0", "\u8F93\u5165 X1", geo.path(root, "Red_Circles/X1")));
              add(geo.transform("m2.input.1", "\u8F93\u5165 X2", geo.path(root, "Red_Circles/X2")));
            } else if (index === 2) {
              inputs(20, "m3.dimension", ["W1 \u884C\u6570", "W1 \u5217\u6570", "W2 \u884C\u6570", "W2 \u5217\u6570", "W3 \u884C\u6570", "W3 \u5217\u6570"]);
              inputs(40, "m3.output", ["H11", "H21", "H31", "H12", "H22", "\u8F93\u51FA O"]);
            } else {
              inputs(32, "m4.forward", MODULE4_FIELDS.forward);
              inputs(60, "m4.loss", MODULE4_FIELDS.loss);
              inputs(80, "m4.weight", MODULE4_FIELDS.weight);
              inputs(124, "m4.updated", MODULE4_FIELDS.updated);
              memory.pointers(field(172)).forEach((pointer, i) => add(geo.component(`m4.repair.${i}`, `\u7B2C ${i + 1} \u7EC4\u4FEE\u590D`, pointer)));
            }
          } catch (error) {
            this.geometryError = error instanceof Error ? error.message : "\u63A7\u4EF6\u5B9A\u4F4D\u4E0D\u53EF\u7528";
            console.error("[AI tutor focus]", this.geometryError);
            anchors = [];
          }
        }
        if (index === 3 && this.module4Layout?.active) objectiveArea = this.module4Layout.area();
      }
      const login = this.instances.get("SetTestInfo");
      const mode = login && this.activeComponent(memory.u32(login + 12)) ? "login" : this.active(ptr(64)) ? "preview" : this.active(ptr(68)) ? "report" : this.active(ptr(60)) ? "menu" : module ? "experiment" : this.active(ptr(52)) ? "exploring" : "login";
      const page = this.instances.get("PageView"), audio = this.instances.get("AudioPlayer");
      const summary = this.instances.get("Summary");
      if (summary && mode === "report" && this.active(memory.u32(summary + 36))) {
        this.observedReport = { submitted: true, verified: true, total: login ? memory.i32(login + 40) : null, reflection: memory.i32(summary + 24), operations: memory.i32(summary + 28) };
      }
      const scenePrompts = this.tips(ptr(128));
      values.scenePrompt = this.active(ptr(116)) ? "introduction" : scenePrompts.some((name) => name === "00yisunhuai" || name === "03InOrderToRepair") ? "repair-prompt" : null;
      values.scenePromptKind = scenePrompts[0] ?? null;
      this.snapshot = {
        sourceSession: this.sourceSession,
        mode,
        module,
        state,
        activeTips,
        scores: [136, 140, 144, 148].map((offset) => memory.i32(manager + offset)),
        nextRepair: memory.i32(manager + 124),
        previewPage: page ? memory.i32(page + 28) + 1 : null,
        speechPlaying: audio ? memory.boolean(audio + 32) : false,
        values,
        anchors,
        objectiveArea,
        focusError: this.geometryError,
        report: this.observedReport ?? { submitted: false, total: null, reflection: null, operations: null }
      };
      this.status = "connected";
      this.notify();
    }
    debug() {
      return { status: this.status, error: this.error, snapshot: this.snapshot, classes: [...this.instances.keys()], traces: this.traces, speechMuted: this.speechMuted };
    }
  };

  // assistant/bridge/ime.ts
  function installImeInput(document2) {
    let composing = false, lastValue = "", pending;
    const input = (event) => event.target instanceof HTMLInputElement && event.target.id === "ChineseInputWebGLId" ? event.target : null;
    document2.addEventListener("compositionstart", (event) => {
      const field = input(event);
      if (!field) return;
      if (pending !== void 0) window.clearTimeout(pending);
      pending = void 0;
      composing = true;
      lastValue = field.value;
    }, true);
    document2.addEventListener("input", (event) => {
      const field = input(event);
      if (!field) return;
      if (composing || event instanceof InputEvent && event.isComposing) {
        event.stopImmediatePropagation();
        return;
      }
      if (pending !== void 0) window.clearTimeout(pending);
      pending = void 0;
      lastValue = field.value;
    }, true);
    document2.addEventListener("compositionend", (event) => {
      const field = input(event);
      if (!field) return;
      composing = false;
      pending = window.setTimeout(() => {
        pending = void 0;
        if (document2.activeElement === field && field.value !== lastValue) field.dispatchEvent(new Event("input", { bubbles: true }));
      }, 0);
    }, true);
  }

  // assistant/bootstrap.ts
  installImeInput(document);
  var observer = new NativeObserver();
  function createModuleHooks() {
    return observer.createModuleHooks();
  }
  function debug() {
    return observer.debug();
  }
  function readSnapshot() {
    return observer.refresh();
  }
  function attach() {
    const origin = window.parent.location.origin;
    const send = (value) => window.parent.postMessage({ channel: "neural-lab-tutor", ...value }, origin);
    const state = () => send({ kind: "state", status: observer.status, error: observer.error, snapshot: observer.snapshot });
    observer.subscribe(state);
    observer.subscribeCalls((call) => send({ kind: "call", call }));
    observer.subscribeObjectiveArea((area) => send({ kind: "objective-area", sourceSession: observer.sourceSession, area }));
    window.addEventListener("message", (event) => {
      if (event.source !== window.parent || event.origin !== origin || event.data?.channel !== "neural-lab-tutor") return;
      if (event.data.kind === "snapshot") state();
      else if (event.data.kind === "objective-open") {
        try {
          observer.openObjective();
        } catch (error) {
          observer.fail(error);
        }
      } else if (event.data.kind === "objective-scroll" && typeof event.data.delta === "number") {
        try {
          observer.scrollObjective(event.data.delta);
        } catch (error) {
          observer.fail(error);
        }
      } else if (event.data.kind === "objective-continue") {
        try {
          observer.continueObjective();
        } catch (error) {
          observer.fail(error);
        }
      } else if (event.data.kind === "speech-mute" && typeof event.data.muted === "boolean") {
        try {
          observer.setSpeechMuted(event.data.muted);
        } catch (error) {
          send({ kind: "voice-error", message: error instanceof Error ? error.message : "\u539F\u5B9E\u9A8C\u8BED\u97F3\u534F\u8C03\u5931\u8D25" });
        }
      }
    });
    state();
  }
  var host = window;
  if (host.UnityLoader) {
    const original = host.UnityLoader.instantiate;
    host.UnityLoader.instantiate = function(container, config, options = {}) {
      const instance = original.call(this, container, config, {
        ...options,
        Module: { ...options.Module, ...createModuleHooks() }
      });
      host.ToggleFullScreen = () => {
        const parent = window.parent;
        parent.CourseTutorHost?.toggleFullscreen();
      };
      attach();
      return instance;
    };
  }
  return __toCommonJS(bootstrap_exports);
})();
