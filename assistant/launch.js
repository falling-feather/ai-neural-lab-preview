"use strict";
(() => {
  // assistant/bridge/native-contract.ts
  var MODULE4_FIELDS = {
    forward: ["\u9690\u85CF\u8282\u70B9 h1 \u7684 net", "\u9690\u85CF\u8282\u70B9 h1 \u7684 out", "\u9690\u85CF\u8282\u70B9 h2 \u7684 net", "\u9690\u85CF\u8282\u70B9 h2 \u7684 out", "\u8F93\u51FA\u8282\u70B9 o1 \u7684 net", "\u8F93\u51FA\u8282\u70B9 o1 \u7684 out", "\u8F93\u51FA\u8282\u70B9 o2 \u7684 net", "\u8F93\u51FA\u8282\u70B9 o2 \u7684 out"],
    loss: ["Eo1", "Eo2"],
    weight: ["\u8F93\u51FA O1 \u7684\u8BEF\u5DEE\u5BFC\u6570", "\u8F93\u51FA O1 \u7684\u6FC0\u6D3B\u5BFC\u6570", "\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "\u8F93\u51FA\u5C42 W\xB211 \u7684\u66F4\u65B0\u503C"],
    updated: ["\u8F93\u51FA O1 \u7684\u8BEF\u5DEE\u9879", "O1 \u8DEF\u5F84\u7684\u8FDE\u63A5\u6743\u91CD", "\u8F93\u51FA O2 \u7684\u8BEF\u5DEE\u9879", "O2 \u8DEF\u5F84\u7684\u8FDE\u63A5\u6743\u91CD", "\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "1\u2212\u9690\u85CF\u8282\u70B9 h1 \u7684\u8F93\u51FA", "\u8F93\u5165 X1", "W\xB911 \u7684\u66F4\u65B0\u503C"]
  };
  var REPAIR_TARGETS = {
    "Part4Calculate.Compare_UserInput": 0,
    "Part4Calculate.Compare_GeJieDianCalculate": 1,
    "Part4Calculate.Compare_CalZongWucha": 2,
    "Part4Calculate.Compare_WeightUpdate": 3,
    "Part4Calculate.Compare_WeightUpdate2_00": 4,
    "Part4Calculate.Compare_WeightUpdate2_01": 5,
    "Part4Calculate.Compare_WeightUpdate2_02": 6
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
  function currentStep(snapshot) {
    if (snapshot.values.scenePrompt === "introduction") return STEPS.introduction;
    if (snapshot.values.scenePrompt === "repair-prompt" && snapshot.mode === "exploring") return STEPS["repair-prompt"];
    if (snapshot.mode === "preview") {
      return previewStep(snapshot.previewPage ?? 1);
    }
    if ((snapshot.mode === "exploring" || snapshot.mode === "experiment") && (snapshot.nextRepair ?? 0) > 0 && (!snapshot.module || (snapshot.nextRepair ?? 0) >= snapshot.module)) return STEPS[`complete.m${Math.min(4, snapshot.nextRepair)}`];
    if (snapshot.mode !== "experiment" || !snapshot.module) return STEPS[snapshot.mode === "login" || snapshot.mode === "loading" ? "welcome" : snapshot.mode] ?? STEPS.welcome;
    if (snapshot.module === 1) {
      const names = { Tip0: "parameters", Tip1: "operators", Tip5: "weighted", Tip2: "combine", Tip3: "sum", Tip4: "activation" };
      const tip = snapshot.activeTips.find((tip2) => names[tip2]);
      return STEPS[`m1.${tip ? names[tip] : snapshot.state === 4 ? "activation" : "parameters"}`];
    }
    if (snapshot.module === 2) {
      const index = Math.min(3, Math.max(1, snapshot.state ?? 1));
      return STEPS[`m2.s${index}.${snapshot.activeTips.includes("Tip1") ? "calculate" : "connect"}`];
    }
    if (snapshot.module === 3) return STEPS[snapshot.state === 2 ? "m3.forward" : "m3.dimensions"];
    const repaired = Array.isArray(snapshot.values.repaired) ? snapshot.values.repaired : [];
    if (snapshot.state === 1) return STEPS[repaired[0] === true ? "m4.forward" : "m4.formula"];
    if (snapshot.state === 2) return STEPS[repaired[1] === true ? "m4.loss" : "m4.forward"];
    if (snapshot.state === 3) return STEPS[repaired[3] === true ? "m4.update" : "m4.weights"];
    if (snapshot.state === 4) return STEPS[repaired[5] === true ? "m4.finish" : repaired[4] === true ? "m4.hidden" : "m4.update"];
    return STEPS["m4.formula"];
  }
  var QUIZ = [
    { id: "bias", module: 1, concept: "bias", question: "\u8F93\u5165\u4E3A 2\u30013\uFF0C\u6743\u91CD\u4E3A 4\u30011\uFF0C\u504F\u7F6E\u4E3A 1\u3002\u6309\u52A0\u6743\u6C42\u548C\u52A0\u504F\u7F6E\u8BA1\u7B97\uFF0C\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", options: ["10", "11", "12", "24"], answer: 2, explanation: "2\xD74 + 3\xD71 + 1 = 12\u3002\u504F\u7F6E\u5728\u52A0\u6743\u548C\u4E4B\u540E\u6309\u5F53\u524D\u7EA6\u5B9A\u76F8\u52A0\u3002" },
    { id: "relu", module: 1, concept: "activation", question: "ReLU(-2) \u7684\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", options: ["-2", "0", "2", "0.5"], answer: 1, explanation: "ReLU(x)=max(0,x)\uFF0C\u8D1F\u6570\u8F93\u5165\u5F97\u5230 0\u3002" },
    { id: "matrix", module: 2, concept: "dimensions", question: "\u884C\u5411\u91CF X \u6709 2 \u4E2A\u8F93\u5165\uFF0C\u8981\u5F97\u5230 3 \u4E2A\u8F93\u51FA\uFF0CXW \u4E2D W \u5E94\u662F\u4EC0\u4E48\u5F62\u72B6\uFF1F", options: ["3\xD72", "2\xD73", "2\xD72", "3\xD73"], answer: 1, explanation: "(1\xD72)\xB7(2\xD73) \u5F97\u5230 (1\xD73)\u3002" },
    { id: "weights", module: 2, concept: "connections", question: "\u6309\u5B9E\u9A8C\u7684 W\u1D62\u2C7C \u4E0B\u6807\uFF0C\u7B2C\u4E09\u4E2A\u8F93\u51FA\u4F7F\u7528\u54EA\u4E00\u7EC4\u8FDE\u63A5\u6743\u91CD\uFF1F", options: ["W\u2081\u2081\u3001W\u2082\u2081", "W\u2081\u2082\u3001W\u2082\u2082", "W\u2081\u2083\u3001W\u2082\u2083", "W\u2083\u2081\u3001W\u2083\u2082"], answer: 2, explanation: "\u7B2C\u4E00\u4E2A\u4E0B\u6807\u5BF9\u5E94\u8F93\u5165\uFF0C\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u5BF9\u5E94\u8F93\u51FA\uFF0C\u56E0\u6B64\u7B2C\u4E09\u4E2A\u8F93\u51FA\u4F7F\u7528 W\u2081\u2083\u3001W\u2082\u2083\u3002" },
    { id: "nonlinear", module: 3, concept: "activation", question: "\u591A\u5C42\u7F51\u7EDC\u4E3A\u4EC0\u4E48\u901A\u5E38\u8981\u5728\u5C42\u95F4\u4F7F\u7528\u975E\u7EBF\u6027\u6FC0\u6D3B\uFF1F", options: ["\u8BA9\u6240\u6709\u8F93\u51FA\u90FD\u5728 0 \u5230 1 \u4E4B\u95F4", "\u4FDD\u8BC1\u6743\u91CD\u5168\u90E8\u4E3A\u6B63", "\u907F\u514D\u591A\u5C42\u7EBF\u6027\u53D8\u6362\u4ECD\u7B49\u4EF7\u4E8E\u4E00\u4E2A\u7EBF\u6027\u53D8\u6362", "\u81EA\u52A8\u6D88\u9664\u6240\u6709\u8BEF\u5DEE"], answer: 2, explanation: "\u8FDE\u7EED\u7EBF\u6027\u53D8\u6362\u53EF\u4EE5\u5408\u5E76\u6210\u4E00\u4E2A\u7EBF\u6027\u53D8\u6362\uFF0C\u975E\u7EBF\u6027\u6FC0\u6D3B\u63D0\u9AD8\u4E86\u8868\u8FBE\u80FD\u529B\u3002" },
    { id: "hidden-shape", module: 3, concept: "dimensions", question: "\u6309\u884C\u5411\u91CF XW \u7684\u7EA6\u5B9A\uFF0C2\u21923\u21922\u21921 \u7F51\u7EDC\u7684\u4E09\u7EC4\u6743\u91CD\u77E9\u9635\u4F9D\u6B21\u4E3A\uFF1F", options: ["2\xD73\u30013\xD72\u30012\xD71", "3\xD72\u30012\xD73\u30011\xD72", "2\xD72\u30013\xD73\u30011\xD71", "2\xD73\u30012\xD73\u30011\xD72"], answer: 0, explanation: "\u6BCF\u7EC4\u77E9\u9635\u7684\u884C\u6570\u63A5\u4E0A\u5C42\u8F93\u51FA\u7EF4\u5EA6\uFF0C\u5217\u6570\u5BF9\u5E94\u4E0B\u5C42\u8282\u70B9\u6570\u3002" },
    { id: "sigmoid-derivative", module: 4, concept: "chain", question: "\u82E5 a=Sigmoid(z)\uFF0C\u5176\u5BF9 z \u7684\u5BFC\u6570\u53EF\u4EE5\u5199\u6210\uFF1F", options: ["a\xB2", "1-a", "a(1-a)", "z(1-z)"], answer: 2, explanation: "Sigmoid \u7684\u5BFC\u6570\u53EF\u5199\u6210\u81EA\u8EAB\u8F93\u51FA a \u4E0E (1-a) \u7684\u4E58\u79EF\u3002" },
    { id: "gradient", module: 4, concept: "update", question: "\u5F53\u524D\u6743\u91CD 0.5\uFF0C\u5B66\u4E60\u7387 0.1\uFF0C\u68AF\u5EA6\u4E3A 2\u3002\u4E00\u6B21\u68AF\u5EA6\u4E0B\u964D\u66F4\u65B0\u540E\u4E3A\uFF1F", options: ["0.7", "0.3", "0.05", "2.5"], answer: 1, explanation: "w\u65B0 = w\u65E7 - \u5B66\u4E60\u7387\xD7\u68AF\u5EA6 = 0.5-0.1\xD72 = 0.3\u3002" }
  ];

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
  var PREVIEW_NOTES = {
    1: "\u8FD9\u95E8\u8BFE\u6309\u201C\u795E\u7ECF\u5143\u2192\u7F51\u7EDC\u8FDE\u63A5\u2192\u591A\u5C42\u4F20\u64AD\u2192\u53C2\u6570\u5B66\u4E60\u201D\u5C55\u5F00\u3002\u9884\u4E60\u65F6\u91CD\u70B9\u7406\u89E3\u6BCF\u4E00\u6B65\u600E\u6837\u4E3A\u4E0B\u4E00\u6B65\u63D0\u4F9B\u8F93\u5165\u3002",
    2: "\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u501F\u9274\u751F\u7269\u7F51\u7EDC\u7684\u8FDE\u63A5\u601D\u60F3\uFF0C\u4F46\u5B83\u662F\u6570\u5B66\u6A21\u578B\u3002\u8282\u70B9\u5B8C\u6210\u8BA1\u7B97\uFF0C\u8FDE\u63A5\u4E0A\u7684\u6743\u91CD\u51B3\u5B9A\u4FE1\u606F\u5982\u4F55\u7EC4\u5408\u3002",
    3: "\u751F\u7269\u795E\u7ECF\u5143\u53EF\u4ECE\u63A5\u6536\u3001\u6574\u5408\u548C\u4F20\u9012\u4FE1\u53F7\u4E09\u4E2A\u89D2\u5EA6\u7406\u89E3\u3002\u4EBA\u5DE5\u6A21\u578B\u7528\u8F93\u5165\u3001\u7EC4\u5408\u8FD0\u7B97\u548C\u8F93\u51FA\u5BF9\u5E94\u8FD9\u4E9B\u529F\u80FD\uFF0C\u5E76\u4E0D\u5B8C\u6574\u6A21\u62DF\u751F\u7269\u7EC6\u8282\u3002",
    4: "\u7F51\u7EDC\u7684\u80FD\u529B\u6765\u81EA\u591A\u4E2A\u8282\u70B9\u53CA\u8FDE\u63A5\u7684\u534F\u4F5C\u3002\u7406\u89E3\u5355\u4E2A\u8282\u70B9\u540E\uFF0C\u8FD8\u9700\u8981\u770B\u62D3\u6251\u7ED3\u6784\u600E\u6837\u51B3\u5B9A\u4FE1\u606F\u4F20\u9012\u8DEF\u5F84\u3002",
    5: "\u8FDE\u63A5\u5F3A\u5F31\u53EF\u968F\u5B66\u4E60\u53D1\u751F\u53D8\u5316\u3002\u4EBA\u5DE5\u7F51\u7EDC\u7528\u53EF\u8C03\u6574\u53C2\u6570\u8868\u8FBE\u8FD9\u79CD\u601D\u60F3\uFF0C\u901A\u8FC7\u635F\u5931\u548C\u4F18\u5316\u89C4\u5219\u66F4\u65B0\u6743\u91CD\u3002",
    6: "\u4EBA\u5DE5\u5904\u7406\u5355\u5143\u5148\u63A5\u6536\u8F93\u5165\uFF0C\u518D\u52A0\u6743\u7EC4\u5408\uFF0C\u6700\u540E\u7ECF\u8FC7\u6FC0\u6D3B\u4EA7\u751F\u8F93\u51FA\u3002\u5B66\u4E60\u65F6\u5206\u6E05\u6570\u636E\u3001\u53C2\u6570\u548C\u8BA1\u7B97\u64CD\u4F5C\u3002",
    7: "\u628A\u4E00\u4E2A\u795E\u7ECF\u5143\u62C6\u6210\u8F93\u5165\u3001\u6743\u91CD\u3001\u7EC4\u5408\u8FD0\u7B97\u548C\u6FC0\u6D3B\u51FD\u6570\uFF0C\u80FD\u5E2E\u52A9\u4F60\u5B9A\u4F4D\u5B9E\u9A8C\u4E2D\u6BCF\u4E2A\u69FD\u4F4D\u7684\u804C\u8D23\u3002",
    8: "\u6BCF\u4E00\u8DEF\u8F93\u5165\u5148\u4E0E\u81EA\u5DF1\u7684\u6743\u91CD\u76F8\u4E58\u3002\u6743\u91CD\u5927\u4E0D\u4E00\u5B9A\u603B\u662F\u8D21\u732E\u5927\uFF0C\u8FD8\u53D6\u51B3\u4E8E\u8F93\u5165\u5927\u5C0F\u53CA\u6B63\u8D1F\u53F7\u3002",
    9: "\u9608\u503C\u5199\u6210\u51CF \u03B8\uFF0C\u504F\u7F6E\u5E38\u5199\u6210\u52A0 b\uFF1Bb=\u2212\u03B8 \u65F6\u7B49\u4EF7\u3002\u6539\u53D8\u8868\u793A\u6CD5\u65F6\u8981\u8FDE\u540C\u7B26\u53F7\u4E00\u8D77\u8F6C\u6362\u3002",
    10: "\u70B9\u79EF\u662F\u5BF9\u5E94\u4F4D\u7F6E\u76F8\u4E58\u540E\u6C42\u548C\u3002\u5411\u91CF\u7684\u7EF4\u5EA6\u5FC5\u987B\u5339\u914D\uFF1B\u4E0D\u8981\u628A\u4E58\u79EF\u6C42\u548C\u8BEF\u5199\u6210\u4E24\u4E2A\u5411\u91CF\u5404\u81EA\u6C42\u548C\u518D\u76F8\u4E58\u3002",
    11: "\u6FC0\u6D3B\u51FD\u6570\u628A\u7EC4\u5408\u503C\u6620\u5C04\u4E3A\u8F93\u51FA\u3002\u5B83\u4EEC\u5E76\u4E0D\u5168\u90E8\u6709\u754C\uFF1Alinear \u548C ReLU \u90FD\u53EF\u4EA7\u751F\u4EFB\u610F\u5927\u7684\u6B63\u8F93\u51FA\u3002",
    12: "\u5E38\u89C1\u6FC0\u6D3B\u51FD\u6570\u5305\u62EC\u7EBF\u6027\u51FD\u6570\u3001Sigmoid\u3001Tanh \u548C ReLU \u7B49\u3002\u5148\u6BD4\u8F83\u66F2\u7EBF\u3001\u8F93\u51FA\u8303\u56F4\u548C\u5BFC\u6570\uFF0C\u4E0D\u8981\u8BA4\u4E3A\u6240\u6709\u51FD\u6570\u90FD\u628A\u8F93\u51FA\u9650\u5236\u5728\u540C\u4E00\u533A\u95F4\u3002",
    13: "\u7EBF\u6027\u6FC0\u6D3B\u4FDD\u6301\u7EBF\u6027\u5173\u7CFB\u3002\u591A\u5C42\u4E4B\u95F4\u5982\u679C\u59CB\u7EC8\u53EA\u6709\u7EBF\u6027\u53D8\u6362\uFF0C\u6574\u4F53\u4ECD\u53EF\u5408\u5E76\u4E3A\u4E00\u4E2A\u7EBF\u6027\u53D8\u6362\u3002",
    14: "\u82E5 a=Sigmoid(z)\uFF0C\u5BFC\u6570\u4E3A a(1\u2212a)\u3002\u53CD\u5411\u4F20\u64AD\u65F6\u7528\u6FC0\u6D3B\u540E\u7684 a \u8BA1\u7B97\u8FD9\u4E2A\u56E0\u5B50\u3002",
    15: "Tanh\u3001ReLU \u7B49\u6FC0\u6D3B\u5177\u6709\u4E0D\u540C\u54CD\u5E94\u4E0E\u8F93\u51FA\u8303\u56F4\u3002\u9009\u51FD\u6570\u65F6\u8981\u770B\u6A21\u578B\u9700\u6C42\uFF0C\u4E0D\u80FD\u628A\u6240\u6709\u6FC0\u6D3B\u90FD\u5F53\u4F5C Sigmoid\u3002",
    16: "\u62D3\u6251\u63CF\u8FF0\u54EA\u4E9B\u8282\u70B9\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u4EE5\u53CA\u4FE1\u606F\u6309\u600E\u6837\u7684\u5C42\u6B21\u4F20\u9012\u3002\u5C42\u5BBD\u4E0E\u8FDE\u63A5\u65B9\u5F0F\u5F71\u54CD\u53C2\u6570\u6570\u91CF\u548C\u8BA1\u7B97\u8FC7\u7A0B\u3002",
    17: "\u4ECE\u5355\u4E2A\u795E\u7ECF\u5143\u6269\u5C55\u5230\u4E00\u5C42\u591A\u4E2A\u8F93\u51FA\u65F6\uFF0C\u6BCF\u4E2A\u8F93\u51FA\u5404\u81EA\u6C47\u603B\u8F93\u5165\uFF0C\u4F7F\u7528\u81EA\u5DF1\u7684\u4E00\u7EC4\u6743\u91CD\u3002",
    18: "\u5168\u8FDE\u63A5\u8868\u793A\u524D\u4E00\u5C42\u6BCF\u4E2A\u8282\u70B9\u90FD\u8FDE\u63A5\u5230\u540E\u4E00\u5C42\u6BCF\u4E2A\u8282\u70B9\u3002\u4E24\u8F93\u5165\u5230\u4E09\u8F93\u51FA\u5171\u6709\u516D\u6761\u8FDE\u63A5\u3002",
    19: "\u6743\u91CD\u4E0B\u6807\u8981\u4E0E\u5F53\u524D\u56FE\u793A\u7EA6\u5B9A\u5BF9\u5E94\u3002\u672C\u5B9E\u9A8C W\u1D62\u2C7C \u7684\u7B2C\u4E00\u4E2A\u4E0B\u6807\u5BF9\u5E94\u8F93\u5165\uFF0C\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u5BF9\u5E94\u8F93\u51FA\u3002",
    20: "\u6309\u884C\u5411\u91CF XW \u7684\u5199\u6CD5\uFF0C2 \u4E2A\u8F93\u5165\u5230 3 \u4E2A\u8F93\u51FA\u4F7F\u7528 2\xD73 \u7684\u6743\u91CD\u77E9\u9635\uFF0C\u6BCF\u4E00\u5217\u6C47\u603B\u6210\u4E00\u4E2A\u8F93\u51FA\u3002",
    21: "\u77E9\u9635\u4E58\u6CD5\u628A\u591A\u4E2A\u8F93\u51FA\u7684\u52A0\u6743\u548C\u7EDF\u4E00\u5199\u5728\u4E00\u8D77\u3002\u4E2D\u95F4\u7EF4\u5EA6\u5FC5\u987B\u76F8\u540C\uFF0C\u7ED3\u679C\u4FDD\u7559\u5DE6\u8FB9\u7684\u884C\u6570\u548C\u53F3\u8FB9\u7684\u5217\u6570\u3002",
    22: "\u9690\u85CF\u5C42\u4F4D\u4E8E\u8F93\u5165\u4E0E\u8F93\u51FA\u4E4B\u95F4\u3002\u4E0A\u4E00\u5C42\u7684\u6FC0\u6D3B\u8F93\u51FA\u6210\u4E3A\u4E0B\u4E00\u5C42\u8F93\u5165\uFF0C\u6309\u5C42\u8BA1\u7B97\u53EF\u4EE5\u907F\u514D\u5F15\u7528\u9519\u8BEF\u8282\u70B9\u3002",
    23: "\u5148\u6570\u76F8\u90BB\u4E24\u5C42\u7684\u8282\u70B9\uFF0C\u518D\u786E\u5B9A\u6743\u91CD\u77E9\u9635\u5F62\u72B6\u3002\u4E0D\u540C\u6559\u6750\u7684\u884C\u5411\u91CF\u548C\u5217\u5411\u91CF\u5199\u6CD5\u9700\u8981\u6574\u4F53\u4E00\u81F4\u3002",
    24: "\u5C42\u95F4\u52A0\u5165\u975E\u7EBF\u6027\u540E\uFF0C\u591A\u5C42\u7F51\u7EDC\u4E0D\u518D\u53EA\u662F\u4E00\u4E2A\u7EBF\u6027\u53D8\u6362\u3002ReLU \u5BF9\u8D1F\u503C\u8F93\u51FA\u96F6\uFF0C\u5BF9\u975E\u8D1F\u503C\u4FDD\u6301\u539F\u503C\u3002",
    25: "\u8F93\u5165\u5C42\u63A5\u6536\u6570\u636E\uFF0C\u9690\u85CF\u5C42\u9010\u5C42\u53D8\u6362\u8868\u793A\uFF0C\u8F93\u51FA\u5C42\u4EA7\u751F\u4EFB\u52A1\u6240\u9700\u7ED3\u679C\u3002\u5224\u65AD\u4E00\u5C42\u7684\u804C\u8D23\u65F6\uFF0C\u8981\u7ED3\u5408\u5B83\u5728\u8BA1\u7B97\u8DEF\u5F84\u4E2D\u7684\u4F4D\u7F6E\u3002",
    26: "\u524D\u5411\u4F20\u64AD\u5728\u5DF2\u77E5\u53C2\u6570\u4E0B\u7B97\u9884\u6D4B\u3002\u53CD\u5411\u4F20\u64AD\u6839\u636E\u635F\u5931\u8BA1\u7B97\u68AF\u5EA6\uFF0C\u53C2\u6570\u66F4\u65B0\u518D\u7528\u68AF\u5EA6\u6539\u53D8\u4E0B\u4E00\u8F6E\u7684\u8BA1\u7B97\u3002",
    27: "\u8BAD\u7EC3\u5FAA\u73AF\u53EF\u6982\u62EC\u4E3A\uFF1A\u524D\u5411\u8BA1\u7B97\u2192\u6C42\u635F\u5931\u2192\u53CD\u5411\u6C42\u68AF\u5EA6\u2192\u66F4\u65B0\u53C2\u6570\u3002\u68AF\u5EA6\u548C\u53C2\u6570\u4E0D\u662F\u540C\u4E00\u4E2A\u91CF\u3002",
    28: "\u68AF\u5EA6\u6307\u5411\u5C40\u90E8\u589E\u957F\u6700\u5FEB\u7684\u65B9\u5411\uFF0C\u68AF\u5EA6\u4E0B\u964D\u6CBF\u76F8\u53CD\u65B9\u5411\u66F4\u65B0\u3002\u5B66\u4E60\u7387\u51B3\u5B9A\u8FD9\u4E00\u6B65\u8D70\u591A\u8FDC\u3002",
    29: "\u590D\u5408\u51FD\u6570\u6C42\u5BFC\u4F7F\u7528\u94FE\u5F0F\u6CD5\u5219\uFF1A\u6CBF\u4F9D\u8D56\u5173\u7CFB\u628A\u5C40\u90E8\u5BFC\u6570\u76F8\u4E58\u3002\u5148\u753B\u6E05\u53D8\u91CF\u4F9D\u8D56\uFF0C\u6BD4\u6B7B\u8BB0\u5C55\u5F00\u5F0F\u66F4\u53EF\u9760\u3002",
    30: "\u5BF9\u5355\u6761\u8BA1\u7B97\u8DEF\u5F84\uFF0C\u9010\u6BB5\u6C42\u5BFC\u540E\u76F8\u4E58\u3002\u6CE8\u610F\u6BCF\u4E2A\u5BFC\u6570\u7684\u81EA\u53D8\u91CF\u4E0E\u4EE3\u5165\u4F4D\u7F6E\uFF0C\u907F\u514D\u6F0F\u6389\u4E2D\u95F4\u6FC0\u6D3B\u3002",
    31: "\u4E00\u4E2A\u53D8\u91CF\u901A\u8FC7\u591A\u6761\u8DEF\u5F84\u5F71\u54CD\u76EE\u6807\u65F6\uFF0C\u5404\u8DEF\u5F84\u5BFC\u6570\u5148\u5206\u522B\u6C42\u4E58\u79EF\uFF0C\u518D\u628A\u8D21\u732E\u76F8\u52A0\u3002\u9690\u85CF\u5C42\u53CD\u5411\u4F20\u64AD\u6B63\u9700\u8981\u8FD9\u4E00\u6B65\u3002",
    32: "\u5148\u8BA1\u7B97\u9690\u85CF\u5C42 net\uFF0C\u518D\u6FC0\u6D3B\u4E3A out\uFF1B\u8F93\u51FA\u5C42\u7684\u8F93\u5165\u6765\u81EA\u8FD9\u4E9B out\u3002\u6743\u91CD\u4E0E\u504F\u7F6E\u90FD\u8981\u4E0E\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u3002",
    33: "\u9010\u5C42\u9012\u63A8\u4E2D\uFF0C\u524D\u4E00\u5C42\u8F93\u51FA\u53CD\u590D\u5145\u5F53\u4E0B\u4E00\u5C42\u8F93\u5165\u3002\u516C\u5F0F\u4E66\u5199\u65B9\u5411\u53EF\u80FD\u53D8\u5316\uFF0C\u8981\u540C\u65F6\u6838\u5BF9\u77E9\u9635\u5F62\u72B6\u3002",
    34: "\u635F\u5931\u628A\u9884\u6D4B\u4E0E\u76EE\u6807\u7684\u5DEE\u8DDD\u53D8\u6210\u53EF\u4F18\u5316\u7684\u6807\u91CF\u3002\u53CD\u5411\u4F20\u64AD\u4ECE\u8FD9\u4E2A\u76EE\u6807\u51FA\u53D1\uFF0C\u8BA1\u7B97\u5B83\u5BF9\u6BCF\u4E2A\u53C2\u6570\u7684\u5BFC\u6570\u3002",
    35: "\u68AF\u5EA6\u7531\u5C40\u90E8\u5BFC\u6570\u7EC4\u5408\u5F97\u5230\u3002\u8F93\u51FA\u5C42\u8DEF\u5F84\u8F83\u77ED\uFF1B\u9690\u85CF\u5C42\u9700\u8981\u6C47\u603B\u4E0B\u6E38\u591A\u4E2A\u8282\u70B9\u4F20\u56DE\u6765\u7684\u8D21\u732E\u3002",
    36: "\u5E73\u65B9\u8BEF\u5DEE\u901A\u5E38\u5148\u8BA1\u7B97\u6BCF\u4E2A\u8F93\u51FA\u4E0E\u76EE\u6807\u7684\u5DEE\uFF0C\u518D\u5E73\u65B9\u5E76\u6C47\u603B\u3002\u662F\u5426\u5305\u542B \xBD \u6216\u5E73\u5747\u56E0\u5B50\u53D6\u51B3\u4E8E\u5F53\u524D\u5B9A\u4E49\u3002",
    37: "\u66F4\u65B0\u516C\u5F0F\u4E3A w\u65B0=w\u65E7\u2212\u03B7\xD7\u2202E/\u2202w\u3002\u5E73\u5747\u635F\u5931\u4E0E\u603B\u635F\u5931\u7684\u7F29\u653E\u4E0D\u540C\uFF0C\u8BA1\u7B97\u68AF\u5EA6\u65F6\u5FC5\u987B\u548C\u9009\u5B9A\u635F\u5931\u4FDD\u6301\u4E00\u81F4\u3002"
  };
  function teachingFor(step2) {
    if (CONTENT[step2.id]) return CONTENT[step2.id];
    const multi = /^m2\.s([123])\.(connect|calculate)$/.exec(step2.id);
    if (multi) {
      const n = Number(multi[1]), connect = multi[2] === "connect";
      return lesson(
        `S${n} \u6C47\u603B\u4E24\u8DEF\u8F93\u5165\u3002\u6309\u672C\u5B9E\u9A8C\u4E0B\u6807\uFF0CW1${n} \u8FDE\u63A5 X1\u2192S${n}\uFF0CW2${n} \u8FDE\u63A5 X2\u2192S${n}\uFF1B\u8BA1\u7B97\u4E3A S${n}=X1\xD7W1${n}+X2\xD7W2${n}\u3002`,
        connect ? [`\u5148\u70B9 X1\uFF0C\u518D\u70B9 S${n}\u3002`, `\u518D\u70B9 X2\uFF0C\u518D\u70B9 S${n}\u3002`, "\u4E24\u6761\u8DEF\u5F84\u90FD\u8FDE\u63A5\u540E\uFF0C\u7EE7\u7EED\u653E\u7F6E\u5BF9\u5E94\u6743\u91CD\u3002"] : [`\u628A W1${n}\u3001W2${n} \u5206\u522B\u653E\u5230\u5BF9\u5E94\u7684\u4E24\u6761\u8FDE\u63A5\u3002`, `\u5206\u522B\u8BA1\u7B97\u4E24\u8DEF\u4E58\u79EF\uFF0C\u6C42\u548C\u5F97\u5230 S${n}\u3002`, "\u586B\u5199\u5F53\u524D\u8F93\u51FA\uFF0C\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002"],
        ["\u5148\u56FA\u5B9A\u5F53\u524D\u8F93\u51FA\uFF0C\u6CBF\u8FDE\u7EBF\u5411\u524D\u5BFB\u627E\u4E24\u8DEF\u8F93\u5165\u3002", `\u4E24\u4E2A\u6743\u91CD\u7684\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u90FD\u662F ${n}\uFF1B\u7B2C\u4E00\u4E2A\u4E0B\u6807\u7528\u6765\u533A\u5206 X1 \u4E0E X2\u3002`, `\u6309 S${n}=X1\xD7W1${n}+X2\xD7W2${n} \u6838\u5BF9\uFF0C\u6BCF\u6761\u8FDE\u63A5\u53EA\u7528\u4E00\u6B21\uFF0C\u4E0D\u80FD\u6F0F\u6389\u5176\u4E2D\u4E00\u8DEF\u3002`],
        "\u793A\u4F8B\uFF1A\u82E5 X1=2\u3001X2=3\uFF0C\u5BF9\u5E94\u6743\u91CD\u4E3A 0.1\u30010.4\uFF0C\u5219\u8BE5\u8F93\u51FA\u4E3A 2\xD70.1+3\xD70.4=1.4\u3002\u793A\u4F8B\u4E0D\u66FF\u4EE3\u9875\u9762\u5F53\u524D\u503C\u3002",
        "\u540C\u4E00\u7EC4\u8F93\u5165\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u6743\u91CD\u5F62\u6210\u591A\u4E2A\u8F93\u51FA\u3002"
      );
    }
    if (step2.id.startsWith("preview.")) {
      const page = Number(step2.id.split(".")[1]);
      const example = page <= 6 ? CONTENT.welcome.example : page <= 11 ? CONTENT["m1.sum"].example : page <= 15 ? CONTENT["m1.activation"].example : page <= 21 ? teachingFor(STEPS["m2.s1.calculate"]).example : page <= 25 ? CONTENT["m3.dimensions"].example : page <= 33 ? CONTENT["m4.forward"].example : CONTENT["m4.weights"].example;
      return lesson(PREVIEW_NOTES[page] ?? step2.hint, ["\u9605\u8BFB\u5F53\u524D\u9875\uFF0C\u627E\u51FA\u8F93\u5165\u3001\u53C2\u6570\u4E0E\u8F93\u51FA\u3002", "\u7528\u81EA\u5DF1\u7684\u8BDD\u89E3\u91CA\u4E00\u4E2A\u5173\u952E\u6982\u5FF5\u3002", "\u5C06\u6982\u5FF5\u4E0E\u5BF9\u5E94\u6A21\u5757\u8054\u7CFB\u8D77\u6765\uFF0C\u6216\u8FDB\u5165\u9884\u4E60\u81EA\u6D4B\u3002"], ["\u5148\u6293\u4F4F\u8FD9\u9875\u7684\u6838\u5FC3\u6982\u5FF5\u3002", "\u68C0\u67E5\u7B26\u53F7\u7684\u542B\u4E49\u548C\u516C\u5F0F\u7684\u9002\u7528\u6761\u4EF6\u3002", "\u7528\u4E00\u4E2A\u7B80\u5355\u6570\u503C\u6216\u5C0F\u7F51\u7EDC\u9A8C\u8BC1\u81EA\u5DF1\u7684\u7406\u89E3\u3002"], example, "\u7406\u89E3\u6982\u5FF5\u540E\uFF0C\u518D\u8FDB\u5165\u5B9E\u9A8C\u52A8\u624B\u9A8C\u8BC1\u3002");
    }
    if (step2.id.startsWith("complete.")) {
      const module = MODULES.find((item) => item.id === step2.module);
      return lesson(`\u672C\u6A21\u5757\u8986\u76D6\uFF1A${module.topic}\u3002`, ["\u56DE\u60F3\u672C\u6A21\u5757\u7684\u8F93\u5165\u3001\u5173\u952E\u64CD\u4F5C\u548C\u8F93\u51FA\u3002", "\u67E5\u770B\u5B66\u4E60\u8BB0\u5F55\u4E2D\u7684\u9519\u8BEF\u53CA\u7EA0\u6B63\u8FC7\u7A0B\u3002", module.id === 4 ? "\u586B\u5199\u5B9E\u9A8C\u5FC3\u5F97\uFF0C\u5B8C\u6210\u603B\u7ED3\u3002" : "\u524D\u5F80\u4E0B\u4E00\u5904\u64CD\u4F5C\u53F0\u3002"], ["\u5148\u8BF4\u6E05\u8FD9\u4E2A\u6A21\u5757\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\u3002", "\u518D\u627E\u4E00\u5904\u4F60\u66FE\u4FEE\u6539\u7684\u64CD\u4F5C\uFF0C\u8BF4\u660E\u4FEE\u6539\u539F\u56E0\u3002", "\u7528\u672C\u6A21\u5757\u7684\u77E5\u8BC6\u89E3\u91CA\u4E0B\u4E00\u6A21\u5757\u4E3A\u4EC0\u4E48\u9700\u8981\u5B83\u3002"], module.topic, step2.hint);
    }
    return lesson(
      "\u4F60\u662F\u98DE\u8239\u7684\u7CFB\u7EDF\u5DE5\u7A0B\u5E08\uFF0C\u5C06\u4F9D\u6B21\u4FEE\u590D\u56DB\u4E2A\u795E\u7ECF\u7F51\u7EDC\u6A21\u5757\u3002\u52A9\u6559\u4F1A\u8BFB\u53D6\u771F\u5B9E\u8FDB\u5EA6\uFF0C\u81EA\u52A8\u5207\u6362\u4EFB\u52A1\u3001\u89E3\u91CA\u539F\u7406\u5E76\u53CD\u9988\u64CD\u4F5C\u3002",
      ["\u5148\u9605\u8BFB\u8BFE\u4EF6\u6216\u5B8C\u6210\u9884\u4E60\u81EA\u6D4B\u3002", "\u8FDB\u5165\u5B9E\u9A8C\uFF0C\u6309\u987A\u5E8F\u627E\u5230\u56DB\u4E2A\u5F85\u4FEE\u590D\u64CD\u4F5C\u53F0\u3002", "\u9700\u8981\u5E2E\u52A9\u65F6\u4F7F\u7528\u5206\u5C42\u63D0\u793A\uFF0C\u6216\u5411\u5BFC\u5E08\u63D0\u95EE\u3002"],
      ["\u5148\u4ECE\u6700\u5C0F\u7684\u4EBA\u5DE5\u795E\u7ECF\u5143\u5F00\u59CB\u3002", "\u4E4B\u540E\u6269\u5C55\u4E3A\u591A\u8F93\u51FA\u548C\u591A\u5C42\u7F51\u7EDC\u3002", "\u6700\u540E\u901A\u8FC7\u635F\u5931\u4E0E\u68AF\u5EA6\u7406\u89E3\u7F51\u7EDC\u600E\u6837\u5B66\u4E60\u3002"],
      "\u8F93\u5165\u2192\u52A0\u6743\u2192\u6FC0\u6D3B\u2192\u591A\u5C42\u4F20\u64AD\u2192\u635F\u5931\u2192\u53CD\u5411\u6C42\u5BFC\u2192\u53C2\u6570\u66F4\u65B0\u3002",
      "\u628A\u6BCF\u6B21\u64CD\u4F5C\u4E0E\u5B83\u5BF9\u5E94\u7684\u77E5\u8BC6\u70B9\u8FDE\u8D77\u6765\u3002"
    );
  }
  function fields(snapshot, key, indices) {
    const values = snapshot.values[key];
    if (!Array.isArray(values) || !values.length) return null;
    const selected = indices ?? values.map((_, index) => index), missing = selected.filter((index) => !String(values[index] ?? "").trim());
    const labels = key === "forward" && snapshot.module === 4 ? MODULE4_FIELDS.forward : key === "loss" ? MODULE4_FIELDS.loss : key === "weights" ? MODULE4_FIELDS.weight : key === "updatedWeights" ? MODULE4_FIELDS.updated : snapshot.values[`${key === "dimensions" ? "dimension" : key === "outputs" ? "output" : key}Labels`];
    const firstIndex = missing[0];
    const label2 = firstIndex === void 0 ? "" : key === "inputs" && snapshot.module === 1 ? ["X1", "W1", "\u7B2C\u4E00\u8DEF XW", "X2", "W2", "\u7B2C\u4E8C\u8DEF XW", "\u504F\u7F6E b", "\u7EC4\u5408\u503C S", "\u8F93\u51FA Z"][firstIndex] : key === "inputs" && snapshot.module === 2 ? `S${firstIndex + 1}` : Array.isArray(labels) ? String(labels[firstIndex] ?? "") : "";
    return { done: selected.length - missing.length, total: selected.length, first: label2 || `\u7B2C ${(firstIndex ?? 0) + 1} \u9879` };
  }
  function currentFocus(step2, snapshot) {
    let progress = null;
    if (step2.id === "m4.formula" && typeof snapshot.values.part4Count === "number") {
      const count = snapshot.values.part4Count;
      if (Number.isInteger(count) && count >= 0 && count <= 10) return count === 10 ? "\u6837\u672C\u548C\u6743\u91CD\u5DF2\u653E\u597D\uFF0C\u70B9\u51FB\u7B2C\u4E00\u7EC4\u201C\u4FEE\u590D\u201D\u3002" : `\u5DF2\u653E\u597D ${count}/10 \u4E2A\u6837\u672C\u6216\u6743\u91CD\uFF0C\u7EE7\u7EED\u62D6\u5230\u56FE\u4E2D\u7684\u5BF9\u5E94\u4F4D\u7F6E\u3002`;
    }
    if (step2.id === "m1.parameters") progress = fields(snapshot, "inputs", [0, 1, 3, 4, 6]);
    if (step2.id === "m1.weighted") progress = fields(snapshot, "inputs", [2, 5]);
    if (step2.id === "m1.sum") progress = fields(snapshot, "inputs", [7]);
    if (step2.id === "m1.activation") return snapshot.values.activationReady ? "\u51FD\u6570\u5DF2\u653E\u5165\u69FD\u4F4D\uFF0C\u4E0B\u4E00\u6B65\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002" : "\u4E0B\u4E00\u6B65\uFF1A\u628A\u9009\u5B9A\u7684\u6FC0\u6D3B\u51FD\u6570\u653E\u5165 F\u3002";
    if (step2.id === "m3.dimensions") {
      progress = fields(snapshot, "dimensions");
      return progress ? progress.done === progress.total ? "\u7EF4\u5EA6\u4F1A\u81EA\u52A8\u6838\u5BF9\uFF0C\u68C0\u67E5\u5C1A\u672A\u5339\u914D\u7684\u884C\u5217\uFF1B\u8FDB\u5165\u4E0B\u4E00\u9636\u6BB5\u540E\u518D\u586B\u5199\u8282\u70B9\u503C\u3002" : `\u5DF2\u586B\u5199 ${progress.done}/${progress.total} \u683C\u3002\u5148\u8865\u9F50\u77E9\u9635\u884C\u5217\uFF0C\u6B63\u786E\u540E\u4F1A\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u9636\u6BB5\u3002` : step2.hint;
    }
    if (step2.id === "m3.forward") progress = fields(snapshot, "outputs");
    if (step2.id === "m4.forward") progress = fields(snapshot, "forward");
    if (step2.id === "m4.loss") {
      progress = fields(snapshot, "loss");
      if (progress && progress.done === progress.total) return Array.isArray(snapshot.values.repairAvailable) && snapshot.values.repairAvailable[2] === true ? "\u603B\u8BEF\u5DEE\u5DF2\u8BA1\u7B97\uFF0C\u6838\u5BF9\u4E24\u9879\u8BEF\u5DEE\u540E\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002" : "\u4E24\u9879\u8BEF\u5DEE\u5DF2\u586B\u5199\uFF0C\u70B9\u51FB Etotal \u7684\u84DD\u8272\u533A\u57DF\u8BA1\u7B97\u603B\u8BEF\u5DEE\u3002";
    }
    if (step2.id === "m4.weights") progress = fields(snapshot, "weights");
    if (step2.id === "m4.update") progress = fields(snapshot, "updatedWeights", [0, 1, 2, 3]);
    if (step2.id === "m4.hidden") progress = fields(snapshot, "updatedWeights", [4, 5]);
    if (step2.id === "m4.finish") progress = fields(snapshot, "updatedWeights", [6, 7]);
    if (/^m2\.s\d\.calculate$/.test(step2.id)) progress = fields(snapshot, "inputs", [(snapshot.state ?? 1) - 1]);
    if (progress) return progress.done === progress.total ? step2.id.startsWith("m4.") && step2.id !== "m4.forward" ? step2.hint : `\u5DF2\u586B\u5199 ${progress.done}/${progress.total} \u9879\uFF0C\u4E0B\u4E00\u6B65\u63D0\u4EA4\u201C\u4FEE\u590D\u201D\u6821\u9A8C\u3002` : `\u5DF2\u586B\u5199 ${progress.done}/${progress.total} \u9879\uFF0C\u5148\u5B8C\u6210 ${progress.first}\u3002`;
    return teachingFor(step2).actions[0] ?? STEPS.welcome.hint;
  }
  function successForStep(id) {
    const fixed = {
      "m1.parameters": "\u8F93\u5165\u3001\u6743\u91CD\u548C\u504F\u7F6E\u90FD\u586B\u5199\u9F50\u4E86\u3002",
      "m1.weighted": "\u8FD9\u6B21\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\u90FD\u6838\u5BF9\u4E0A\u4E86\u3002",
      "m1.sum": "\u7EC4\u5408\u503C\u5DF2\u7ECF\u901A\u8FC7\uFF0C\u63A5\u4E0B\u6765\u53EF\u4EE5\u89C2\u5BDF\u6FC0\u6D3B\u600E\u6837\u6539\u53D8\u8F93\u51FA\u3002",
      "m1.activation": "\u5F53\u524D\u6FC0\u6D3B\u51FD\u6570\u7684\u8F93\u51FA\u5DF2\u751F\u6210\u3002",
      "m3.dimensions": "\u4E09\u7EC4\u77E9\u9635\u7684\u884C\u5217\u90FD\u5DF2\u81EA\u52A8\u901A\u8FC7\uFF0C\u73B0\u5728\u8FDB\u5165\u8282\u70B9\u8BA1\u7B97\u3002",
      "m3.forward": "\u5404\u5C42\u8F93\u51FA\u5DF2\u901A\u8FC7\u672C\u6B21\u6821\u9A8C\u3002",
      "m4.formula": "\u6837\u672C\u548C\u8FDE\u63A5\u6743\u91CD\u5DF2\u914D\u7F6E\u5B8C\u6210\u3002",
      "m4.forward": "\u672C\u7EC4 net \u4E0E out \u5DF2\u901A\u8FC7\u6821\u9A8C\u3002",
      "m4.loss": "\u672C\u7EC4\u635F\u5931\u8BA1\u7B97\u5DF2\u901A\u8FC7\u786E\u8BA4\u3002",
      "m4.weights": "\u8FD9\u4E00\u9879\u68AF\u5EA6\u4E0E\u6743\u91CD\u66F4\u65B0\u5DF2\u901A\u8FC7\u3002",
      "m4.update": "\u4E24\u6761\u53CD\u5411\u8DEF\u5F84\u5DF2\u5B8C\u6210\u539F\u5B9E\u9A8C\u7684\u6821\u9A8C\u3002",
      "m4.hidden": "\u9690\u85CF\u8282\u70B9\u7684\u6FC0\u6D3B\u5BFC\u6570\u5DF2\u901A\u8FC7\u3002",
      "m4.finish": "\u6700\u540E\u4E00\u7EC4\u53C2\u6570\u66F4\u65B0\u5DF2\u5B8C\u6210\u4FEE\u590D\u3002"
    };
    const output = /^m2\.s([123])\.(connect|calculate)$/.exec(id);
    if (output) return output[2] === "connect" ? `S${output[1]} \u7684\u4E24\u6761\u8F93\u5165\u8DEF\u5F84\u90FD\u63A5\u597D\u4E86\u3002` : `S${output[1]} \u7684\u52A0\u6743\u548C\u5DF2\u901A\u8FC7\u6821\u9A8C\u3002`;
    return fixed[id] ?? "\u8FD9\u4E00\u6B65\u5DF2\u901A\u8FC7\u539F\u5B9E\u9A8C\u786E\u8BA4\u3002";
  }
  function connectionCue(step2, snapshot) {
    const match = /^m2\.s([123])\.connect$/.exec(step2.id);
    if (!match) return null;
    const output = match[1], state = snapshot.values.connection, inputs = snapshot.values.inputConnections;
    if (state === 1) return { key: `${step2.id}:x1-selected`, text: `\u5DF2\u9009\u4E2D X1\uFF0C\u73B0\u5728\u70B9\u51FB S${output}\uFF0C\u63A5\u597D\u7B2C\u4E00\u6761\u8DEF\u5F84\u3002` };
    if (state === 2) return { key: `${step2.id}:x2-selected`, text: `\u5DF2\u9009\u4E2D X2\uFF0C\u73B0\u5728\u70B9\u51FB S${output}\uFF0C\u63A5\u597D\u7B2C\u4E8C\u6761\u8DEF\u5F84\u3002` };
    if (Array.isArray(inputs) && inputs[0] === true && inputs[1] !== true) return { key: `${step2.id}:first-connected`, text: `\u7B2C\u4E00\u6761\u8DEF\u5F84\u5DF2\u7ECF\u63A5\u597D\u3002\u63A5\u7740\u70B9\u51FB X2\uFF0C\u518D\u70B9\u51FB S${output}\u3002` };
    return null;
  }

  // assistant/core/assessment.ts
  var strings = (value) => Array.isArray(value) ? value.map((item) => String(item ?? "")) : [];
  var numbers = (value) => Array.isArray(value) ? value.map((item) => typeof item === "number" ? item : NaN) : [];
  var label = (value) => Number(value.toPrecision(7)).toString();
  var DIMENSION_LABELS = ["W1 \u7684\u884C\u6570", "W1 \u7684\u5217\u6570", "W2 \u7684\u884C\u6570", "W2 \u7684\u5217\u6570", "W3 \u7684\u884C\u6570", "W3 \u7684\u5217\u6570"];
  var OUTPUT_LABELS = ["\u7B2C\u4E00\u9690\u85CF\u5C42 H11", "\u7B2C\u4E00\u9690\u85CF\u5C42 H21", "\u7B2C\u4E00\u9690\u85CF\u5C42 H31", "\u7B2C\u4E8C\u9690\u85CF\u5C42 H12", "\u7B2C\u4E8C\u9690\u85CF\u5C42 H22", "\u8F93\u51FA\u8282\u70B9 O"];
  function compareLoss(snapshot) {
    const actual = strings(snapshot.values.loss), expected = strings(snapshot.values.lossExpected);
    if (actual.length !== 2 || expected.length !== 2 || expected.some((value) => !value.trim() || !Number.isFinite(Number(value)))) return null;
    const index = actual.findIndex((value, i) => !value.trim() || !Number.isFinite(Number(value)) || Math.abs(Number(value) - Number(expected[i])) > 1e-6);
    return { index, actual, expected };
  }
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
  function nativeOutcome(check, after) {
    const module = CHECK_METHODS[check.method];
    if (module === 1) {
      const result = check.observations.filter((item) => item.method === "Part1Calculate.ResultPlay").at(-1)?.value;
      return typeof result === "string" ? result.startsWith("\u6B63\u786E") ? true : result.includes("\u9519\u8BEF") ? false : null : null;
    }
    if (module === 2) {
      const result = check.observations.filter((item) => item.method === "Part2Process.CalcateIsRight").at(-1)?.value;
      return result === 1 ? true : result === 0 ? false : null;
    }
    if (module === 3) {
      if (check.before.state !== 2) return null;
      if ((after.nextRepair ?? 0) >= 3 || after.state !== check.before.state) return true;
      if (after.values.errorVisible === true) return false;
      const count = after.values.outputCorrect, inputs = strings(after.values.outputs);
      return typeof count === "number" && inputs.length > 0 ? count === inputs.length : null;
    }
    if (module === 4) {
      const flags = after.values.repaired, target = REPAIR_TARGETS[check.method];
      if (!Array.isArray(flags) || target === void 0 || typeof flags[target] !== "boolean") return null;
      if (!flags[target]) return false;
      if (check.method === "Part4Calculate.Compare_CalZongWucha") {
        const comparison = compareLoss(check.before);
        return comparison ? comparison.index < 0 : null;
      }
      if (check.method === "Part4Calculate.Compare_WeightUpdate") {
        const comparison = compareWeightFactors(check.before);
        return comparison ? comparison.index < 0 : null;
      }
      return true;
    }
    return null;
  }
  function diagnostic(code, area, location2, levels, returnToInput = true, targetId) {
    return { code, area, location: location2, levels, returnToInput, targetId };
  }
  function diagnoseCheck(check, after) {
    const inputs = strings(check.before.values.inputs), id = check.step.id;
    if (id === "m1.weighted") {
      const expected = numbers(after.values.weighted);
      const row = [0, 1].find((row2) => {
        const actual2 = inputs[row2 ? 5 : 2]?.trim();
        return !actual2 || !Number.isFinite(Number(actual2)) || Math.fround(Number(actual2)) !== Math.fround(expected[row2] ?? NaN);
      }) ?? 0;
      const name = row ? "\u7B2C\u4E8C\u8DEF" : "\u7B2C\u4E00\u8DEF", base = row ? 3 : 0, actual = inputs[base + 2]?.trim(), x = inputs[base] ?? "", w = inputs[base + 1] ?? "";
      return diagnostic(!actual ? "empty-input" : "weighted-value", !actual ? "input" : "knowledge", name, [
        !actual ? `${name}\u7684\u7ED3\u679C\u8FD8\u6CA1\u6709\u586B\u5199\u3002\u5148\u5B8C\u6210\u8FD9\u4E00\u683C\uFF0C\u518D\u63D0\u4EA4\u3002` : `\u5148\u68C0\u67E5${name}\uFF1A\u628A\u8FD9\u4E00\u8DEF\u7684\u8F93\u5165\u4E0E\u5BF9\u5E94\u6743\u91CD\u914D\u5BF9\uFF0C\u91CD\u65B0\u505A\u4E00\u6B21\u52A0\u6743\u8FD0\u7B97\u3002`,
        `${name}\u5F53\u524D\u8F93\u5165\u662F ${x}\uFF0C\u6743\u91CD\u662F ${w}\u3002\u8FD9\u91CC\u6C42 ${x}\xD7${w}\uFF0C\u6682\u65F6\u4E0D\u7528\u52A0\u504F\u7F6E\u3002`,
        Number.isFinite(expected[row]) ? `${name}\u6309\u5F53\u524D\u4E58\u6CD5\u8BA1\u7B97\uFF1A${x}\xD7${w}=${label(expected[row])}\u3002\u4FEE\u6B63\u8FD9\u4E00\u683C\uFF0C\u518D\u72EC\u7ACB\u68C0\u67E5\u53E6\u4E00\u8DEF\u3002` : "\u6309\u5F53\u524D\u8F93\u5165\u4E58\u4EE5\u5BF9\u5E94\u6743\u91CD\uFF0C\u5206\u522B\u6838\u5BF9\u4E24\u8DEF\u7ED3\u679C\u3002"
      ], true, `m1.input.${base + 2}`);
    }
    if (id === "m1.sum") {
      const parts = numbers(after.values.weighted), expected = after.values.sum;
      return diagnostic(!inputs[7]?.trim() ? "empty-input" : "bias-sum", !inputs[7]?.trim() ? "input" : "knowledge", "\u7EC4\u5408\u503C S", [
        !inputs[7]?.trim() ? "S \u8FD8\u6CA1\u6709\u586B\u5199\u3002\u5148\u6C47\u603B\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\uFF0C\u518D\u68C0\u67E5\u504F\u7F6E\u3002" : "\u5148\u68C0\u67E5\u7EC4\u5408\u503C S\uFF1A\u4E24\u8DEF\u8D21\u732E\u90FD\u8981\u8BA1\u5165\uFF0C\u518D\u6309\u5F53\u524D\u7EA6\u5B9A\u5904\u7406\u504F\u7F6E\u3002",
        `\u5148\u6C47\u603B ${parts.map((value) => Number.isFinite(value) ? label(value) : "\u5F53\u524D\u52A0\u6743\u503C").join(" \u4E0E ")}\uFF0C\u518D\u5904\u7406 b=${inputs[6] || "\u5F53\u524D\u504F\u7F6E"}\u3002\u6B64\u65F6\u8FD8\u6CA1\u6709\u7ECF\u8FC7\u6FC0\u6D3B\u51FD\u6570\u3002`,
        typeof expected === "number" && Number.isFinite(expected) ? `\u539F\u5B9E\u9A8C\u672C\u6B21\u5F97\u5230 S=${label(expected)}\u3002\u628A\u8BA1\u7B97\u5206\u6210\u201C\u4E24\u8DEF\u6C47\u603B\u201D\u548C\u201C\u8BA1\u5165\u504F\u7F6E\u201D\u4E24\u6B65\uFF0C\u786E\u8BA4\u81EA\u5DF1\u5728\u54EA\u4E00\u6B65\u6F0F\u7B97\u3002` : "\u6309\u9875\u9762\u7684\u7EC4\u5408\u65B9\u5F0F\u6C47\u603B\u4E24\u8DEF\uFF0C\u518D\u5904\u7406\u504F\u7F6E\u3002"
      ], true, "m1.input.7");
    }
    if (check.before.module === 2) {
      const output = check.before.state ?? 1, actual = inputs[output - 1]?.trim();
      const expected = check.observations.filter((item) => item.method === "Part2Process.RightResult").at(-1)?.value;
      return diagnostic(!actual ? "empty-input" : "weighted-output", !actual ? "input" : "knowledge", `\u8F93\u51FA S${output}`, [
        !actual ? `S${output} \u8FD8\u6CA1\u6709\u586B\u5199\uFF0C\u5148\u7B97\u5B8C\u4E24\u8DEF\u8D21\u732E\u3002` : `S${output} \u5C1A\u672A\u901A\u8FC7\u3002\u5148\u6CBF\u4E24\u6761\u8FDE\u63A5\u68C0\u67E5\u8F93\u5165\u4E0E\u6743\u91CD\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u786E\u8BA4\u6CA1\u6709\u6F0F\u6389\u4E00\u8DEF\u3002`,
        `S${output}=X1\xD7W1${output}+X2\xD7W2${output}\u3002\u4E24\u4E2A\u6743\u91CD\u7684\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u90FD\u5E94\u662F ${output}\uFF1B\u5148\u5206\u522B\u6C42\u4E58\u79EF\uFF0C\u518D\u6C42\u548C\u3002`,
        typeof expected === "number" ? `\u539F\u5B9E\u9A8C\u672C\u6B21\u8BA1\u7B97 S${output}=${label(expected)}\u3002\u628A\u4F60\u7684\u4E24\u4E2A\u4E58\u79EF\u5206\u522B\u5217\u51FA\u6765\uFF0C\u68C0\u67E5\u5B83\u4EEC\u7684\u548C\uFF1B\u4E0D\u8981\u76F4\u63A5\u628A\u6743\u91CD\u76F8\u52A0\u3002` : "\u5148\u5206\u522B\u6C42\u4E24\u8DEF\u4E58\u79EF\uFF0C\u518D\u628A\u5B83\u4EEC\u76F8\u52A0\u3002"
      ], true, `m2.output.${output - 1}`);
    }
    if (check.before.module === 3) {
      if (check.before.state === 1) {
        const flags = after.values.dimensionChecks, index2 = Array.isArray(flags) ? flags.findIndex((item) => item === false) : 0;
        const field2 = DIMENSION_LABELS[Math.max(0, index2)];
        return diagnostic("matrix-shape", "knowledge", field2, [`\u5148\u68C0\u67E5${field2}\u3002\u884C\u6570\u63A5\u4E0A\u4E00\u5C42\u8282\u70B9\uFF0C\u5217\u6570\u63A5\u4E0B\u4E00\u5C42\u8282\u70B9\u3002`, "\u6309 XW \u7684\u884C\u5411\u91CF\u7EA6\u5B9A\uFF0C\u4ECE\u5DE6\u5230\u53F3\u770B\u76F8\u90BB\u4E24\u5C42\uFF0C\u4E0D\u8981\u628A\u77E9\u9635\u7684\u884C\u548C\u5217\u98A0\u5012\u3002", "\u4E09\u7EC4\u7EF4\u5EA6\u4F9D\u6B21\u4E3A 2\xD73\u30013\xD72\u30012\xD71\u3002\u586B\u5BF9\u540E\u4F1A\u81EA\u52A8\u8FDB\u5165\u524D\u5411\u8BA1\u7B97\uFF0C\u65E0\u9700\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002"], false, `m3.dimension.${Math.max(0, index2)}`);
      }
      const actual = strings(check.before.values.outputs), expected = numbers(after.values.outputExpected);
      const index = actual.findIndex((value, index2) => Number.isFinite(expected[index2]) && value !== label(expected[index2]));
      const i = index < 0 ? 0 : index, field = OUTPUT_LABELS[i] ?? `\u7B2C ${i + 1} \u4E2A\u8F93\u51FA`, empty = !actual[i]?.trim();
      return diagnostic(empty ? "empty-input" : "layer-output", empty ? "input" : "knowledge", field, [
        empty ? `${field}\u8FD8\u6CA1\u6709\u586B\u5199\u3002\u5148\u4ECE\u7B2C\u4E00\u9690\u85CF\u5C42\u5F00\u59CB\uFF0C\u6309\u5C42\u5411\u540E\u8BA1\u7B97\u3002` : `\u5148\u68C0\u67E5${field}\u3002\u5B83\u4F7F\u7528\u7D27\u90BB\u4E0A\u4E00\u5C42\u7684\u8F93\u51FA\uFF0C\u6838\u5BF9\u8FDE\u63A5\u6743\u91CD\u548C\u672C\u5C42\u6FC0\u6D3B\u89C4\u5219\u3002`,
        i < 3 ? "\u5148\u5BF9\u5F53\u524D\u8282\u70B9\u7684\u4E24\u8DEF\u8F93\u5165\u52A0\u6743\u6C42\u548C\u3002\u9690\u85CF\u5C42\u4F7F\u7528 ReLU\uFF0C\u8D1F\u7684\u52A0\u6743\u548C\u8F93\u51FA\u4E3A 0\u3002" : i < 5 ? "\u5148\u786E\u8BA4\u7B2C\u4E00\u9690\u85CF\u5C42\u7684\u4E09\u4E2A\u8F93\u51FA\uFF0C\u518D\u4E58\u5404\u81EA\u8FDE\u63A5\u6743\u91CD\u6C42\u548C\uFF0C\u5E76\u5BF9\u5F53\u524D\u9690\u85CF\u8282\u70B9\u4F7F\u7528 ReLU\u3002" : "O \u4F7F\u7528\u7B2C\u4E8C\u9690\u85CF\u5C42\u7684\u4E24\u4E2A\u8F93\u51FA\u505A\u52A0\u6743\u7EC4\u5408\uFF0C\u5F53\u524D\u8F93\u51FA\u5C42\u4E0D\u4F7F\u7528\u6FC0\u6D3B\u51FD\u6570\u3002",
        Number.isFinite(expected[i]) ? `${field}\u7684\u539F\u7A0B\u5E8F\u53C2\u8003\u503C\u662F ${label(expected[i])}\u3002\u5148\u4FEE\u6B63\u8FD9\u4E00\u8282\u70B9\uFF0C\u518D\u91CD\u7B97\u4F9D\u8D56\u5B83\u7684\u540E\u7EED\u8282\u70B9\uFF1B\u586B\u5199\u65F6\u6309\u9875\u9762\u8981\u6C42\u4FDD\u7559\u6570\u503C\u3002` : "\u6309\u5C42\u590D\u6838\uFF0C\u4E0D\u8DF3\u8FC7\u4E2D\u95F4\u8282\u70B9\u3002"
      ], true, `m3.output.${i}`);
    }
    if (check.before.module === 4 && check.method === "Part4Calculate.Compare_GeJieDianCalculate") {
      const actual = strings(check.before.values.forward), expected = strings(after.values.forwardExpected);
      const index = actual.findIndex((value, index2) => expected[index2] !== void 0 && (!value.trim() || !Number.isFinite(Number(value)) || Math.abs(Number(value) - Number(expected[index2])) > 1e-6));
      const i = Math.max(0, index), field = MODULE4_FIELDS.forward[i] ?? `\u524D\u5411\u8BA1\u7B97\u7B2C ${i + 1} \u683C`, a = actual[i]?.trim(), e = expected[i];
      const format = !!a && !!e && Number.isFinite(Number(a)) && Number(a) === Number(e);
      if (format) return diagnostic("number-format", "input", field, [`${field}\u7684\u6570\u503C\u4E0E\u53C2\u8003\u503C\u7B49\u4EF7\uFF0C\u539F\u7A0B\u5E8F\u4ECD\u8981\u6C42\u7279\u5B9A\u586B\u5199\u683C\u5F0F\u3002\u8BF7\u6309 ${e} \u7684\u683C\u5F0F\u586B\u5199\u3002`, "\u8FD9\u91CC\u53EA\u8C03\u6574\u683C\u5F0F\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u63A8\u5BFC\u6574\u4E2A\u7F51\u7EDC\u3002", `\u8FD9\u4E00\u683C\u6309\u539F\u7A0B\u5E8F\u8981\u6C42\u586B\u5199 ${e}\u3002`], false, `m4.forward.${i}`);
      return diagnostic(a ? "net-out-value" : "empty-input", a ? "knowledge" : "input", field, [
        a ? `\u5148\u68C0\u67E5${field}\u5C5E\u4E8E net \u8FD8\u662F out\uFF1B\u5148\u7B97\u52A0\u6743\u548C\uFF0C\u518D\u505A\u6FC0\u6D3B\u3002` : `${field}\u8FD8\u6CA1\u6709\u586B\u5199\uFF0C\u6309\u9690\u85CF\u5C42\u5230\u8F93\u51FA\u5C42\u7684\u987A\u5E8F\u5B8C\u6210\u3002`,
        "net=\u5404\u8DEF\u8F93\u5165\xD7\u5BF9\u5E94\u6743\u91CD\u4E4B\u548C+\u504F\u7F6E\uFF1Bout=1/(1+e^(\u2212net))\u3002\u8F93\u51FA\u5C42\u7684\u8F93\u5165\u5E94\u662F\u9690\u85CF\u5C42 out\u3002",
        e ? `${field}\u7684\u539F\u7A0B\u5E8F\u53C2\u8003\u6587\u672C\u4E3A ${e}\u3002\u5148\u6838\u5BF9\u8BE5\u8282\u70B9\u7684\u52A0\u6743\u548C\u548C Sigmoid\uFF0C\u518D\u6309\u9875\u9762\u8981\u6C42\u586B\u5199\u5C0F\u6570\u4F4D\u3002` : "\u628A net \u4E0E out \u5206\u4E24\u884C\u8BA1\u7B97\uFF0C\u68C0\u67E5\u6BCF\u4E00\u4E2A\u8F93\u5165\u6765\u81EA\u54EA\u4E00\u5C42\u3002"
      ], false, `m4.forward.${i}`);
    }
    if (check.method === "Part4Calculate.Compare_CalZongWucha") {
      const comparison = compareLoss(check.before), i = Math.max(0, comparison?.index ?? 0), field = `Eo${i + 1}`, actual = comparison?.actual[i]?.trim(), expected = comparison?.expected[i];
      return diagnostic(actual ? "loss-value" : "empty-input", actual ? "knowledge" : "input", field, [
        `${field} \u9700\u8981\u590D\u6838\uFF1A\u7528\u4E0A\u65B9\u7684 out o${i + 1} \u4E0E\u76EE\u6807 g0${i + 1} \u8BA1\u7B97\u8FD9\u4E00\u9879\u8BEF\u5DEE\u3002`,
        `${field}=\xBD\xD7(g0${i + 1}\u2212out o${i + 1})\xB2\u3002\u5148\u76F8\u51CF\u3001\u518D\u5E73\u65B9\uFF0C\u6700\u540E\u4E58 \xBD\u3002`,
        expected ? `${field} \u7684\u672C\u6B21\u53C2\u8003\u503C\u4E3A ${expected}\u3002\u4FEE\u6B63\u540E\u91CD\u65B0\u8BA1\u7B97\u603B\u8BEF\u5DEE\uFF0C\u518D\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u3002` : "\u628A\u76EE\u6807\u4E0E\u9884\u6D4B\u8F93\u51FA\u4EE3\u5165\u5F53\u524D\u8BEF\u5DEE\u516C\u5F0F\u3002"
      ], false, `m4.loss.${i}`);
    }
    if (check.method === "Part4Calculate.Compare_WeightUpdate") {
      const comparison = compareWeightFactors(check.before), i = comparison?.index ?? -1;
      if (comparison && i >= 0) {
        const field = MODULE4_FIELDS.weight[i], actual = comparison.actual[i]?.trim();
        const method = ["\u7528 out o1 \u51CF\u53BB\u76EE\u6807 g01\u3002", "\u7528 out o1\xD7(1\u2212out o1)\u3002", "\u4F7F\u7528\u524D\u4E00\u5C42\u7684 out h1\u3002"][i];
        return diagnostic(actual ? "gradient-factor" : "empty-input", actual ? "knowledge" : "input", field, [
          actual ? `\u5148\u590D\u6838${field}\u3002${method}` : `${field}\u8FD8\u6CA1\u6709\u586B\u5199\u3002${method}`,
          `${field}\u5BF9\u5E94\u5F53\u524D\u94FE\u5F0F\u6CD5\u5219\u4E2D\u7684\u7B2C ${i + 1} \u4E2A\u56E0\u5B50\u3002${method}`,
          `${field}\u7EA6\u4E3A ${label(comparison.expected[i])}\u3002\u5148\u6838\u5BF9\u8FD9\u4E00\u56E0\u5B50\uFF0C\u518D\u8BA1\u7B97\u68AF\u5EA6\u3002`
        ], false, `m4.weight.${i}`);
      }
    }
    const groups = {
      "Part4Calculate.Compare_WeightUpdate": { key: "weights", expected: "weightExpected", indices: [3], offset: 0, labels: [MODULE4_FIELDS.weight[3]], prefix: "weight" },
      "Part4Calculate.Compare_WeightUpdate2_00": { key: "updatedWeights", expected: "weightExpected", indices: [0, 1, 2, 3], offset: 1, labels: MODULE4_FIELDS.updated.slice(0, 4), prefix: "updated" },
      "Part4Calculate.Compare_WeightUpdate2_01": { key: "updatedWeights", expected: "updateMiddleExpected", indices: [4, 5], offset: 0, labels: MODULE4_FIELDS.updated.slice(4, 6), prefix: "updated" },
      "Part4Calculate.Compare_WeightUpdate2_02": { key: "updatedWeights", expected: "updateLastExpected", indices: [6, 7], offset: 0, labels: MODULE4_FIELDS.updated.slice(6, 8), prefix: "updated" }
    };
    const group = groups[check.method];
    if (group) {
      const actual = strings(check.before.values[group.key]), expected = strings(after.values[group.expected]);
      const position = group.indices.findIndex((index, i) => {
        const e = expected[i + group.offset], a = actual[index]?.trim();
        return e !== void 0 && (!a || !Number.isFinite(Number(a)) || Math.abs(Number(a) - Number(e)) > 1e-6);
      });
      if (position >= 0) {
        const index = group.indices[position], field = group.labels[position], a = actual[index]?.trim(), e = expected[position + group.offset];
        if (a && Number.isFinite(Number(a)) && Number(a) === Number(e)) return diagnostic("number-format", "input", field, [`${field}\u7684\u6570\u503C\u76F8\u540C\uFF0C\u539F\u7A0B\u5E8F\u8981\u6C42\u586B\u5199\u683C\u5F0F\u4E3A ${e}\u3002`, "\u8FD9\u91CC\u53EA\u9700\u8C03\u6574\u5C0F\u6570\u683C\u5F0F\u3002", `\u8FD9\u4E00\u683C\u586B\u5199 ${e}\u3002`], false, `m4.${group.prefix}.${index}`);
        return diagnostic(a ? "gradient-value" : "empty-input", a ? "knowledge" : "input", field, [
          a ? `\u5148\u68C0\u67E5${field}\uFF0C\u6838\u5BF9\u5B83\u5C5E\u4E8E\u54EA\u6761\u8BA1\u7B97\u8DEF\u5F84\u3002` : `${field}\u8FD8\u6CA1\u6709\u586B\u5199\u3002`,
          check.method === "Part4Calculate.Compare_WeightUpdate2_00" ? "\u6CBF O1\u3001O2 \u4E24\u6761\u8DEF\u5F84\u5206\u522B\u6C42\u5BFC\uFF0C\u518D\u628A\u8D21\u732E\u76F8\u52A0\u3002" : teachingFor(check.step).hints[1] ?? check.step.hint,
          `${field}\u7684\u539F\u7A0B\u5E8F\u53C2\u8003\u6587\u672C\u4E3A ${e}\u3002\u6838\u5BF9\u8DEF\u5F84\u4E0E\u5C0F\u6570\u4F4D\u540E\u518D\u63D0\u4EA4\u3002`
        ], false, `m4.${group.prefix}.${index}`);
      }
    }
    const content = teachingFor(check.step);
    const location2 = check.step.title;
    return diagnostic(check.before.module === 4 ? "gradient-path" : "calculation", "knowledge", location2, [
      `\u8FD9\u4E00\u6B65\u8FD8\u6CA1\u6709\u901A\u8FC7\u3002${content.hints[0] ?? check.step.hint}`,
      content.hints[1] ?? content.principle,
      content.hints[2] ?? content.example
    ], check.before.module !== 4);
  }
  function diagnoseDrop(action) {
    return action.wrongOperator ? diagnostic("operator-selection", "knowledge", action.kind === "weighted-drop" ? "\u52A0\u6743\u69FD\u4F4D" : "\u7EC4\u5408\u69FD\u4F4D", ["\u5148\u68C0\u67E5\u9009\u7528\u7684\u8FD0\u7B97\u7B26\uFF1A\u5355\u6761\u8FDE\u63A5\u7684\u52A0\u6743\uFF0C\u4E0E\u6C47\u603B\u591A\u8DEF\u7ED3\u679C\u662F\u4E24\u79CD\u4E0D\u540C\u64CD\u4F5C\u3002", "\u52A0\u6743\u69FD\u4F4D\u4F7F\u7528\u4E58\u6CD5\uFF0C\u7EC4\u5408\u69FD\u4F4D\u4F7F\u7528\u6C42\u548C\u3002\u9009\u62E9\u540E\u518D\u5BF9\u51C6\u76EE\u6807\u4E2D\u5FC3\u3002", "\u628A\u4E58\u53F7\u653E\u5230\u4E24\u8DEF\u84DD\u8272\u52A0\u6743\u69FD\u4F4D\uFF0C\u628A \u03A3 \u653E\u5230 N\uFF1B\u6BCF\u653E\u597D\u4E00\u5904\uFF0C\u7B49\u5F85\u9875\u9762\u786E\u8BA4\u3002"], false) : diagnostic("drag-target", "operation", "\u76EE\u6807\u69FD\u4F4D", ["\u8FD9\u6B21\u56FE\u6807\u8FD8\u6CA1\u6709\u88AB\u69FD\u4F4D\u63A5\u6536\u3002\u5148\u628A\u56FE\u6807\u4E2D\u5FC3\u5BF9\u51C6\u76EE\u6807\uFF0C\u518D\u677E\u5F00\u3002", "\u4ECE\u539F\u4F4D\u7F6E\u91CD\u65B0\u62D6\u52A8\uFF0C\u5728\u76EE\u6807\u4E2D\u5FC3\u505C\u7A33\u540E\u677E\u5F00\uFF1B\u56FE\u6807\u56DE\u5F39\u8868\u793A\u5C1A\u672A\u653E\u597D\u3002", "\u5148\u53EA\u5B8C\u6210\u4E00\u4E2A\u69FD\u4F4D\uFF0C\u786E\u8BA4\u56FE\u6807\u7559\u5728\u76EE\u6807\u4F4D\u7F6E\uFF0C\u518D\u8FDB\u884C\u4E0B\u4E00\u6B21\u64CD\u4F5C\u3002"], false);
  }

  // assistant/core/learning.ts
  var CONCEPTS = {
    parameters: "\u8F93\u5165\u3001\u6743\u91CD\u4E0E\u504F\u7F6E",
    weighted: "\u9010\u8DEF\u52A0\u6743\u8BA1\u7B97",
    bias: "\u7EC4\u5408\u4E0E\u504F\u7F6E",
    activation: "\u6FC0\u6D3B\u51FD\u6570",
    connections: "\u8F93\u5165\u4E0E\u8F93\u51FA\u7684\u8FDE\u63A5",
    dimensions: "\u77E9\u9635\u7EF4\u5EA6",
    forward: "\u9010\u5C42\u524D\u5411\u4F20\u64AD",
    "net-out": "net \u4E0E out",
    loss: "\u635F\u5931\u8BA1\u7B97",
    chain: "\u94FE\u5F0F\u6CD5\u5219",
    update: "\u68AF\u5EA6\u4E0E\u53C2\u6570\u66F4\u65B0",
    hidden: "\u9690\u85CF\u5C42\u591A\u8DEF\u5F84\u68AF\u5EA6"
  };
  function conceptForStep(id) {
    if (id === "m1.parameters") return "parameters";
    if (id === "m1.operators" || id === "m1.weighted") return "weighted";
    if (id === "m1.combine" || id === "m1.sum") return "bias";
    if (id === "m1.activation") return "activation";
    if (/^m2\..*\.connect$/.test(id)) return "connections";
    if (/^m2\..*\.calculate$/.test(id)) return "weighted";
    if (id === "m3.dimensions") return "dimensions";
    if (id === "m3.forward") return "forward";
    if (id === "m4.formula") return "connections";
    if (id === "m4.forward") return "net-out";
    if (id === "m4.loss") return "loss";
    if (id === "m4.weights") return "chain";
    if (id === "m4.update") return "hidden";
    if (id === "m4.hidden") return "chain";
    return "update";
  }
  var LearningMemory = class {
    steps = /* @__PURE__ */ new Map();
    independentStreak = 0;
    entry(step2) {
      let evidence = this.steps.get(step2.id);
      if (!evidence) {
        if (step2.module === null) throw new Error("\u5B66\u4E60\u8BC1\u636E\u5FC5\u987B\u5C5E\u4E8E\u5B9E\u9A8C\u6A21\u5757");
        evidence = { stepId: step2.id, module: step2.module, concept: conceptForStep(step2.id), title: step2.title, attempts: 0, correct: 0, errors: 0, errorStreak: 0, operationAttempts: 0, operationErrors: 0, helpRequests: 0, requestedHintLevel: 0, supportLevel: 0, scoreLoss: 0, firstPass: null, completed: false, status: "working", lastErrorCode: null };
        this.steps.set(step2.id, evidence);
      }
      return evidence;
    }
    check(step2, correct, delta, code) {
      const item = this.entry(step2), previouslyPassed = item.correct > 0;
      item.attempts++;
      item.scoreLoss += Math.max(0, -(delta ?? 0));
      if (item.attempts === 1) item.firstPass = correct;
      if (correct) {
        item.correct++;
        item.completed = true;
        item.errorStreak = 0;
        item.status = item.helpRequests > 0 || item.supportLevel >= 2 ? "supported" : item.errors > 0 ? "corrected" : "independent";
        if (!previouslyPassed) {
          if (item.status === "independent") this.independentStreak++;
          else this.independentStreak = 0;
        }
      } else {
        item.errors++;
        item.errorStreak++;
        item.status = "review";
        item.lastErrorCode = code;
        this.independentStreak = 0;
      }
    }
    operation(step2, correct, code) {
      const item = this.entry(step2);
      item.operationAttempts++;
      if (correct) {
        item.errorStreak = 0;
        if (item.status === "review") item.status = "working";
      } else {
        item.operationErrors++;
        item.errorStreak++;
        item.lastErrorCode = code;
        item.status = "review";
      }
    }
    complete(step2) {
      const item = this.entry(step2);
      item.completed = true;
      item.errorStreak = 0;
      if (!item.correct) item.status = item.helpRequests > 0 ? "supported" : "completed";
    }
    help(step2, kind) {
      const item = this.entry(step2);
      item.helpRequests++;
      if (kind === "hint") item.requestedHintLevel = Math.min(3, Math.max(item.requestedHintLevel, item.supportLevel) + 1);
      else if (kind === "example") item.supportLevel = Math.max(3, item.supportLevel);
      else if (kind === "principle") item.supportLevel = Math.max(2, item.supportLevel);
      return kind === "hint" ? item.requestedHintLevel : item.supportLevel;
    }
    support(step2, level) {
      const item = this.entry(step2);
      item.supportLevel = Math.max(item.supportLevel, Math.min(3, level));
    }
    view() {
      const steps = [...this.steps.values()].map((item) => ({ ...item }));
      return { steps, independentStreak: this.independentStreak, helpRequests: steps.reduce((sum, item) => sum + item.helpRequests, 0) };
    }
  };

  // assistant/core/training.ts
  function suggestTraining(available, trained, completedModule) {
    const pending = available.filter((module) => !trained.some((item) => item.module === module));
    return completedModule === null ? pending.at(-1) : pending.includes(completedModule) ? completedModule : void 0;
  }
  var q = (id, module, concept, question, options, answer, explanation) => ({ id, module, concept, question, options, answer, explanation });
  var TRAINING_BANK = [
    q("m1-weighted-a", 1, "weighted", "\u4E00\u8DEF\u8F93\u5165\u4E3A \u22122\uFF0C\u6743\u91CD\u4E3A 3\u3002\u52A0\u6743\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", ["1", "6", "\u22126", "\u22122"], 2, "\u22122\xD73=\u22126\u3002\u5148\u6309\u8FD9\u4E00\u6761\u8FDE\u63A5\u76F8\u4E58\uFF0C\u6B63\u8D1F\u53F7\u4E5F\u5C5E\u4E8E\u8BA1\u7B97\u7684\u4E00\u90E8\u5206\u3002"),
    q("m1-weighted-b", 1, "weighted", "\u4E00\u8DEF\u8F93\u5165\u4E3A 4\uFF0C\u6743\u91CD\u4E3A \u22120.5\u3002\u52A0\u6743\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", ["3.5", "\u22122", "2", "\u22120.5"], 1, "4\xD7(\u22120.5)=\u22122\u3002\u8F93\u5165\u4E0E\u6743\u91CD\u76F8\u4E58\uFF0C\u4E0D\u662F\u76F8\u52A0\u3002"),
    q("m1-bias-a", 1, "bias", "\u4E24\u8DEF\u52A0\u6743\u7ED3\u679C\u4E3A 2 \u548C 5\uFF0C\u504F\u7F6E b=\u22121\uFF0C\u91C7\u7528\u52A0\u504F\u7F6E\u7684\u7EA6\u5B9A\u3002S \u662F\u591A\u5C11\uFF1F", ["6", "7", "8", "\u22127"], 0, "S=2+5+(\u22121)=6\u3002\u52A0\u4E00\u4E2A\u8D1F\u504F\u7F6E\uFF0C\u4F1A\u4F7F\u7EC4\u5408\u503C\u51CF\u5C0F\u3002"),
    q("m1-bias-b", 1, "bias", "\u52A0\u6743\u548C\u4E3A \u22123\uFF0C\u504F\u7F6E b=2\u3002\u6309 S=\u52A0\u6743\u548C+b\uFF0CS \u662F\u591A\u5C11\uFF1F", ["\u22125", "1", "\u22121", "5"], 2, "S=\u22123+2=\u22121\u3002\u6CE8\u610F\u504F\u7F6E b \u4E0E\u51CF\u9879\u9608\u503C \u03B8 \u7684\u7B26\u53F7\u7EA6\u5B9A\u3002"),
    q("m1-activation-a", 1, "activation", "\u82E5\u7EC4\u5408\u503C S=\u22124\uFF0C\u7ECF\u8FC7 ReLU \u540E\u8F93\u51FA\u662F\u591A\u5C11\uFF1F", ["\u22124", "4", "0", "0.5"], 2, "ReLU(S)=max(0,S)\uFF0C\u8D1F\u503C\u5728\u6FC0\u6D3B\u540E\u53D8\u4E3A 0\u3002"),
    q("m1-activation-b", 1, "activation", "\u540C\u4E00\u4E2A S=0\uFF0Clinear \u548C Sigmoid \u7684\u8F93\u51FA\u4F9D\u6B21\u662F\u4EC0\u4E48\uFF1F", ["0\u30010", "0\u30010.5", "0.5\u30010", "1\u30011"], 1, "linear(0)=0\uFF0CSigmoid(0)=1/(1+1)=0.5\u3002\u6FC0\u6D3B\u51FD\u6570\u6539\u53D8\u4E86\u6620\u5C04\u65B9\u5F0F\u3002"),
    q("m1-parameters-a", 1, "parameters", "\u4FDD\u6301\u8F93\u5165\u4E0E\u6743\u91CD\u4E0D\u53D8\uFF0C\u4EC5\u5C06\u504F\u7F6E\u4ECE 1 \u6539\u4E3A 2\uFF0C\u52A0\u6743\u548C\u52A0\u504F\u7F6E\u7684\u7ED3\u679C\u600E\u6837\u53D8\u5316\uFF1F", ["\u589E\u52A0 1", "\u4E58\u4EE5 2", "\u4E0D\u53D8", "\u6240\u6709\u8FDE\u63A5\u90FD\u65AD\u5F00"], 0, "\u504F\u7F6E\u4F5C\u4E3A\u72EC\u7ACB\u52A0\u9879\uFF0C\u589E\u52A0 1 \u4F1A\u4F7F\u6FC0\u6D3B\u524D\u7684\u7EC4\u5408\u503C\u589E\u52A0 1\u3002"),
    q("m1-parameters-b", 1, "parameters", "\u6B63\u8F93\u5165\u7ECF\u8FC7\u8D1F\u6743\u91CD\u7684\u4E58\u6CD5\u52A0\u6743\uFF0C\u5BF9\u7EC4\u5408\u503C\u4EA7\u751F\u54EA\u79CD\u8D21\u732E\uFF1F", ["\u4E00\u5B9A\u4E3A\u6B63", "\u4E00\u5B9A\u4E3A\u96F6", "\u4E3A\u8D1F", "\u65E0\u6CD5\u53C2\u4E0E\u6C42\u548C"], 2, "\u6B63\u6570\u4E0E\u8D1F\u6570\u76F8\u4E58\u5F97\u5230\u8D1F\u6570\u3002\u6743\u91CD\u65E2\u63A7\u5236\u5927\u5C0F\uFF0C\u4E5F\u63A7\u5236\u8D21\u732E\u7684\u7B26\u53F7\u3002"),
    q("m2-connections-a", 2, "connections", "\u6CBF\u672C\u5B9E\u9A8C\u7684\u4E0B\u6807\u7EA6\u5B9A\uFF0C\u8F93\u51FA S2 \u5E94\u4F7F\u7528\u54EA\u4E24\u6761\u8FDE\u63A5\uFF1F", ["W11\u3001W21", "W12\u3001W22", "W13\u3001W23", "W21\u3001W23"], 1, "\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u8868\u793A\u8F93\u51FA\u3002\u5230 S2 \u7684\u4E24\u8DEF\u6765\u81EA X1\u3001X2\uFF0C\u56E0\u6B64\u4F7F\u7528 W12\u3001W22\u3002"),
    q("m2-connections-b", 2, "connections", "\u4ECE\u8F93\u5165 X2 \u6307\u5411\u8F93\u51FA S3 \u7684\u8FDE\u63A5\u5E94\u6807\u4E3A\uFF1F", ["W32", "W13", "W23", "W22"], 2, "\u672C\u5B9E\u9A8C\u7B2C\u4E00\u4E2A\u4E0B\u6807\u662F\u8F93\u5165\uFF0C\u7B2C\u4E8C\u4E2A\u4E0B\u6807\u662F\u8F93\u51FA\uFF0C\u56E0\u6B64\u662F W23\u3002"),
    q("m2-weighted-a", 2, "weighted", "\u67D0\u8F93\u51FA\u7684\u8F93\u5165\u4E3A 2\u30014\uFF0C\u5BF9\u5E94\u6743\u91CD\u4E3A 0.3\u30010.2\uFF0C\u65E0\u504F\u7F6E\u3002\u8F93\u51FA\u662F\u591A\u5C11\uFF1F", ["0.5", "1.4", "2.8", "6"], 1, "2\xD70.3+4\xD70.2=0.6+0.8=1.4\u3002\u4E24\u6761\u8FDE\u63A5\u90FD\u8981\u8BA1\u5165\u3002"),
    q("m2-weighted-b", 2, "weighted", "\u67D0\u8F93\u51FA\u7684\u8F93\u5165\u4E3A 1\u30013\uFF0C\u5BF9\u5E94\u6743\u91CD\u4E3A 0.6\u30010.2\uFF0C\u65E0\u504F\u7F6E\u3002\u8F93\u51FA\u662F\u591A\u5C11\uFF1F", ["0.8", "1.8", "1.2", "4"], 2, "1\xD70.6+3\xD70.2=1.2\u3002\u5148\u5206\u522B\u76F8\u4E58\uFF0C\u518D\u6C47\u603B\u3002"),
    q("m2-dimensions-a", 2, "dimensions", "\u6309\u884C\u5411\u91CF XW\uFF0C3 \u4E2A\u8F93\u5165\u5F97\u5230 2 \u4E2A\u8F93\u51FA\uFF0CW \u7684\u5F62\u72B6\u5E94\u4E3A\uFF1F", ["2\xD73", "3\xD72", "3\xD73", "2\xD72"], 1, "(1\xD73)\xB7(3\xD72)=(1\xD72)\u3002\u884C\u6570\u5BF9\u5E94\u8F93\u5165\uFF0C\u5217\u6570\u5BF9\u5E94\u8F93\u51FA\u3002"),
    q("m2-dimensions-b", 2, "dimensions", "\u6309\u884C\u5411\u91CF XW\uFF0CW \u7684\u7B2C\u4E09\u5217\u5BF9\u5E94\u4EC0\u4E48\uFF1F", ["\u7B2C\u4E09\u4E2A\u8F93\u5165\u7684\u5168\u90E8\u8FDE\u63A5", "\u7B2C\u4E09\u4E2A\u8F93\u51FA\u7684\u5168\u90E8\u8F93\u5165\u6743\u91CD", "\u6240\u6709\u8F93\u51FA\u4E4B\u548C", "\u504F\u7F6E"], 1, "\u77E9\u9635\u7684\u6BCF\u4E00\u5217\u6C47\u603B\u4E3A\u4E00\u4E2A\u8F93\u51FA\uFF0C\u7B2C\u4E09\u5217\u5BF9\u5E94\u7B2C\u4E09\u4E2A\u8F93\u51FA\u7684\u8F93\u5165\u6743\u91CD\u3002"),
    q("m3-dimensions-a", 3, "dimensions", "\u6309\u884C\u5411\u91CF\u7EA6\u5B9A\uFF0C3\u21924\u21922 \u7684\u7F51\u7EDC\uFF0C\u4E24\u4E2A\u6743\u91CD\u77E9\u9635\u4F9D\u6B21\u4E3A\uFF1F", ["4\xD73\u30012\xD74", "3\xD74\u30014\xD72", "3\xD72\u30012\xD74", "4\xD74\u30012\xD72"], 1, "\u76F8\u90BB\u5C42\u8282\u70B9\u6570\u51B3\u5B9A\u77E9\u9635\u5F62\u72B6\uFF0C\u4F9D\u6B21\u662F 3\xD74 \u548C 4\xD72\u3002"),
    q("m3-dimensions-b", 3, "dimensions", "\u6309 XW \u5199\u6CD5\uFF0C\u5F53\u524D\u5C42\u8F93\u51FA\u4E3A 1\xD74\uFF0C\u4E0B\u4E00\u5C42\u6709 2 \u4E2A\u8282\u70B9\uFF0CW \u5E94\u4E3A\uFF1F", ["2\xD74", "1\xD72", "4\xD72", "4\xD71"], 2, "\u4E2D\u95F4\u7EF4\u5EA6\u5FC5\u987B\u5339\u914D\uFF1A(1\xD74)\xB7(4\xD72)=(1\xD72)\u3002"),
    q("m3-forward-a", 3, "forward", "\u4E0A\u4E00\u9690\u85CF\u5C42\u7ECF\u8FC7\u6FC0\u6D3B\u540E\u8F93\u51FA\u4E3A 0 \u548C 2\uFF0C\u8FDE\u63A5\u6743\u91CD\u4E3A 0.5 \u548C 0.3\uFF0C\u65E0\u504F\u7F6E\u3002\u4E0B\u4E00\u8282\u70B9\u6FC0\u6D3B\u524D\u7684\u503C\u662F\u591A\u5C11\uFF1F", ["1.6", "0.6", "2.8", "0"], 1, "\u4F7F\u7528\u4E0A\u4E00\u5C42\u6FC0\u6D3B\u540E\u7684\u8F93\u51FA\uFF1A0\xD70.5+2\xD70.3=0.6\u3002"),
    q("m3-forward-b", 3, "forward", "\u4E0A\u4E00\u5C42\u67D0\u8282\u70B9\u7684 net=\u22122\uFF0C\u7ECF\u8FC7 ReLU \u540E\uFF0C\u4E0B\u4E00\u5C42\u5E94\u63A5\u6536\u4EC0\u4E48\uFF1F", ["\u22122", "2", "0", "\u22121"], 2, "\u4E0B\u4E00\u5C42\u63A5\u6536\u6FC0\u6D3B\u540E\u7684 out\u3002ReLU(\u22122)=0\uFF0C\u4E0D\u80FD\u7EE7\u7EED\u4F20\u9012 net=\u22122\u3002"),
    q("m3-activation-a", 3, "activation", "\u672C\u6A21\u5757\u9690\u85CF\u5C42\u4F7F\u7528 ReLU\u3001\u8F93\u51FA\u5C42\u4E0D\u6FC0\u6D3B\u3002\u8F93\u51FA\u5C42\u52A0\u6743\u548C\u4E3A \u22120.4 \u65F6\uFF0C\u5E94\u8F93\u51FA\uFF1F", ["0", "0.4", "\u22120.4", "Sigmoid(\u22120.4)"], 2, "\u8F93\u51FA\u5C42\u4E0D\u4F7F\u7528\u6FC0\u6D3B\uFF0C\u4FDD\u6301\u5176\u52A0\u6743\u7EC4\u5408\u7ED3\u679C \u22120.4\u3002"),
    q("m3-activation-b", 3, "activation", "\u591A\u5C42\u4E4B\u95F4\u59CB\u7EC8\u6CA1\u6709\u975E\u7EBF\u6027\u6FC0\u6D3B\uFF0C\u6574\u4F53\u8868\u8FBE\u4F1A\u600E\u6837\uFF1F", ["\u53EF\u5408\u5E76\u6210\u4E00\u4E2A\u4EFF\u5C04\u53D8\u6362", "\u5FC5\u7136\u89E3\u51B3\u4EFB\u4F55\u975E\u7EBF\u6027\u95EE\u9898", "\u6240\u6709\u68AF\u5EA6\u4E3A\u96F6", "\u6240\u6709\u8F93\u51FA\u5728 0 \u5230 1 \u4E4B\u95F4"], 0, "\u591A\u4E2A\u7EBF\u6027\u53D8\u6362\u52A0\u504F\u7F6E\u4ECD\u53EF\u5408\u5E76\u4E3A\u4E00\u4E2A\u4EFF\u5C04\u53D8\u6362\uFF0C\u5C42\u95F4\u975E\u7EBF\u6027\u5E26\u6765\u989D\u5916\u8868\u8FBE\u80FD\u529B\u3002"),
    q("m4-net-a", 4, "net-out", "\u67D0\u8282\u70B9 net=0\uFF0C\u91C7\u7528 Sigmoid\uFF0Cout \u662F\u591A\u5C11\uFF1F", ["0", "1", "0.5", "\u22120.5"], 2, "out=1/(1+e^0)=0.5\u3002net \u662F\u6FC0\u6D3B\u524D\u7684\u503C\u3002"),
    q("m4-net-b", 4, "net-out", "\u9690\u85CF\u8282\u70B9 net=\u22122\u3001out\u22480.119\u3002\u8BA1\u7B97\u8F93\u51FA\u5C42\u65F6\uFF0C\u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A\u503C\u4F5C\u4E3A\u8BE5\u8FDE\u63A5\u7684\u8F93\u5165\uFF1F", ["\u22122", "0.119", "2", "\u4EFB\u53D6\u4E00\u4E2A"], 1, "\u8F93\u51FA\u5C42\u63A5\u6536\u9690\u85CF\u5C42\u6FC0\u6D3B\u540E\u7684 out\uFF0C\u800C\u4E0D\u662F\u9690\u85CF\u5C42 net\u3002"),
    q("m4-loss-a", 4, "loss", "\u5355\u4E2A\u8F93\u51FA t=0.8\u3001o=0.4\uFF0C\u635F\u5931\u4E3A \xBD(t\u2212o)\xB2\uFF0C\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", ["0.4", "0.16", "0.08", "0.32"], 2, "\xBD\xD7(0.8\u22120.4)\xB2=\xBD\xD70.16=0.08\u3002"),
    q("m4-loss-b", 4, "loss", "\u5355\u4E2A\u8F93\u51FA t=0.3\u3001o=0.1\uFF0C\u635F\u5931\u4E3A \xBD(t\u2212o)\xB2\uFF0C\u7ED3\u679C\u662F\u591A\u5C11\uFF1F", ["0.02", "0.04", "0.2", "0.1"], 0, "\u5148\u6C42\u5DEE 0.2\uFF0C\u518D\u5E73\u65B9\u4E3A 0.04\uFF0C\u6700\u540E\u4E58 \xBD \u5F97 0.02\u3002"),
    q("m4-chain-a", 4, "chain", "Sigmoid \u7684\u8F93\u51FA a=0.8\uFF0C\u5B83\u5BF9 net \u7684\u5BFC\u6570\u662F\u591A\u5C11\uFF1F", ["0.8", "0.2", "0.16", "0.64"], 2, "a(1\u2212a)=0.8\xD70.2=0.16\u3002\u5BFC\u6570\u56E0\u5B50\u4F7F\u7528\u6FC0\u6D3B\u540E\u7684\u8F93\u51FA a\u3002"),
    q("m4-chain-b", 4, "chain", "\u540C\u4E00\u6761\u6C42\u5BFC\u8DEF\u5F84\u4E0A\uFF0C\u4E09\u4E2A\u5C40\u90E8\u5BFC\u6570\u662F 0.2\u30010.25\u30010.6\uFF0C\u8DEF\u5F84\u5BFC\u6570\u4E3A\uFF1F", ["1.05", "0.03", "0.12", "0.05"], 1, "\u5355\u6761\u8DEF\u5F84\u4F7F\u7528\u4E58\u6CD5\uFF1A0.2\xD70.25\xD70.6=0.03\u3002\u591A\u6761\u8DEF\u5F84\u4E4B\u95F4\u624D\u6C42\u548C\u3002"),
    q("m4-update-a", 4, "update", "w=0.8\uFF0C\u5B66\u4E60\u7387\u4E3A 0.2\uFF0C\u68AF\u5EA6\u4E3A 0.5\uFF0C\u4E00\u6B21\u68AF\u5EA6\u4E0B\u964D\u540E\u7684 w \u662F\u591A\u5C11\uFF1F", ["0.9", "0.7", "0.4", "0.3"], 1, "w\u65B0=0.8\u22120.2\xD70.5=0.7\u3002"),
    q("m4-update-b", 4, "update", "w=0.4\uFF0C\u5B66\u4E60\u7387\u4E3A 0.1\uFF0C\u68AF\u5EA6\u4E3A \u22122\uFF0C\u4E00\u6B21\u68AF\u5EA6\u4E0B\u964D\u540E\u7684 w \u662F\u591A\u5C11\uFF1F", ["0.2", "\u22120.2", "0.6", "2.4"], 2, "w\u65B0=0.4\u22120.1\xD7(\u22122)=0.6\u3002\u51CF\u53BB\u8D1F\u68AF\u5EA6\u4F1A\u8BA9\u53C2\u6570\u589E\u5927\u3002"),
    q("m4-hidden-a", 4, "hidden", "\u4E00\u4E2A\u9690\u85CF\u8282\u70B9\u7ECF\u4E24\u6761\u8DEF\u5F84\u4EA7\u751F\u7684\u68AF\u5EA6\u8D21\u732E\u4E3A 0.3\u3001\u22120.1\uFF0C\u5408\u5E76\u540E\u662F\u591A\u5C11\uFF1F", ["\u22120.03", "0.4", "0.2", "0.3"], 2, "\u591A\u6761\u8DEF\u5F84\u7684\u8D21\u732E\u76F8\u52A0\uFF1A0.3+(\u22120.1)=0.2\uFF0C\u4FDD\u7559\u7B26\u53F7\u3002"),
    q("m4-hidden-b", 4, "hidden", "\u4E00\u4E2A\u9690\u85CF\u8282\u70B9\u540C\u65F6\u5F71\u54CD\u4E24\u4E2A\u8F93\u51FA\uFF0C\u603B\u635F\u5931\u5BF9\u5B83\u7684\u5BFC\u6570\u5E94\u5982\u4F55\u6C42\uFF1F", ["\u53EA\u53D6\u8BEF\u5DEE\u66F4\u5927\u7684\u8F93\u51FA", "\u4E24\u6761\u8DEF\u5F84\u5206\u522B\u6C42\u5BFC\uFF0C\u518D\u76F8\u52A0", "\u628A\u4E24\u6761\u8DEF\u5F84\u7684\u5BFC\u6570\u76F8\u4E58", "\u5FFD\u7565\u8F93\u51FA\u5C42\u6743\u91CD"], 1, "\u6BCF\u6761\u8DEF\u5F84\u5185\u90E8\u4F7F\u7528\u94FE\u5F0F\u6CD5\u5219\u76F8\u4E58\uFF0C\u518D\u7D2F\u52A0\u6240\u6709\u6709\u6548\u8DEF\u5F84\u7684\u8D21\u732E\u3002")
  ];
  function selectTraining(module, learning, previous, id) {
    const pool = TRAINING_BANK.filter((question) => question.module === module);
    if (pool.length < 2) throw new Error("\u8BE5\u6A21\u5757\u6CA1\u6709\u53EF\u7528\u7684\u8BAD\u7EC3\u9898");
    const concepts = [...new Set(pool.map((question) => question.concept))];
    const last = previous.at(-1);
    const score = (concept) => learning.steps.filter((step2) => step2.module === module && step2.concept === concept).reduce((sum, step2) => sum + step2.errors * 3 + (step2.lastErrorCode === "drag-target" ? 0 : step2.errorStreak * 4) + step2.helpRequests + (step2.lastErrorCode === "operator-selection" ? step2.operationErrors : 0), 0) + (last?.items.some((item) => !item.correct && (item.concept ?? TRAINING_BANK.find((question) => question.id === item.id)?.concept) === concept) ? 10 : 0);
    const focus = concepts.map((concept, index) => ({ concept, index, score: score(concept) })).sort((a, b) => b.score - a.score || a.index - b.index).slice(0, 2);
    const questions = focus.map(({ concept }) => {
      const variants = pool.filter((question) => question.concept === concept);
      let chosen = variants[previous.length % variants.length];
      if (last?.items.some((item) => item.id === chosen.id) && variants.length > 1) chosen = variants[(variants.indexOf(chosen) + 1) % variants.length];
      return chosen;
    });
    const needs = focus.filter((item) => item.score > 0).map((item) => CONCEPTS[item.concept]);
    const reason = needs.length ? `\u6839\u636E\u672C\u9636\u6BB5\u7684\u5C1D\u8BD5\u548C\u6C42\u52A9\u8BB0\u5F55\uFF0C\u5148\u5DE9\u56FA${needs.join("\u3001")}\u3002\u8FD9\u6B21\u6362\u7528\u65B0\u7684\u6570\u503C\u6216\u60C5\u5883\uFF0C\u770B\u770B\u80FD\u5426\u72EC\u7ACB\u5B8C\u6210\u3002` : `\u672C\u9636\u6BB5\u64CD\u4F5C\u5DF2\u5B8C\u6210\u3002\u7528\u4E24\u9053\u65B0\u9898\u68C0\u67E5${focus.map((item) => CONCEPTS[item.concept]).join("\u4E0E")}\uFF0C\u518D\u7EE7\u7EED\u5411\u524D\u3002`;
    return { id, module, reason, questions };
  }

  // assistant/core/session.ts
  var LearningSession = class {
    id;
    startedAt = (/* @__PURE__ */ new Date()).toISOString();
    clock;
    current = null;
    activeModule = null;
    activeSince = 0;
    moduleElapsed = [0, 0, 0, 0];
    moduleScores = [null, null, null, null];
    visited = /* @__PURE__ */ new Set();
    rewarded = /* @__PURE__ */ new Set();
    learning = new LearningMemory();
    feedback = null;
    journal = [];
    check = null;
    sequence = 0;
    quiz = null;
    experimentStarted = false;
    stageTraining = [];
    trainingPlans = /* @__PURE__ */ new Map();
    nativeReport = null;
    objectiveResult = null;
    lastStepId = "";
    recordSequence = 0;
    feedbackSequence = 0;
    challenge;
    constructor(sourceSession, clock = () => performance.now()) {
      this.id = sourceSession;
      this.clock = clock;
    }
    totalTimes() {
      const times = [...this.moduleElapsed];
      if (this.activeModule !== null) times[this.activeModule - 1] += Math.max(0, this.clock() - this.activeSince);
      return times;
    }
    record(kind, title, message, module) {
      this.journal.push({ id: `${this.id}:${++this.recordSequence}`, kind, title, message, module, elapsedMs: this.totalTimes().reduce((sum, value) => sum + value, 0) });
    }
    observe(snapshot) {
      if (snapshot.sourceSession !== this.id) return;
      const active = snapshot.mode === "experiment" && snapshot.module !== null && (snapshot.nextRepair ?? 0) < snapshot.module ? snapshot.module : null;
      if (active !== null) this.experimentStarted = true;
      if (active !== this.activeModule) {
        if (this.activeModule !== null) this.moduleElapsed[this.activeModule - 1] += Math.max(0, this.clock() - this.activeSince);
        this.activeModule = active;
        this.activeSince = this.clock();
      }
      const previous = this.current;
      this.current = snapshot;
      if (snapshot.report.submitted && snapshot.report.verified) this.nativeReport = { ...snapshot.report };
      if (snapshot.mode === "preview" && snapshot.previewPage !== null && snapshot.previewPage >= 1 && snapshot.previewPage <= 37) this.visited.add(snapshot.previewPage);
      for (let module = 1; module <= 4; module++) {
        if ((snapshot.nextRepair ?? 0) >= module && snapshot.scores?.[module - 1] !== void 0) {
          if (this.moduleScores[module - 1] === null) this.record("completed", `${MODULES[module - 1].title}\u5DF2\u5B8C\u6210`, "\u4F9D\u636E\u539F\u5B9E\u9A8C\u7684\u6A21\u5757\u5B8C\u6210\u72B6\u6001\u8BB0\u5F55\u3002", module);
          this.moduleScores[module - 1] = snapshot.scores[module - 1];
        }
      }
      const step2 = currentStep(snapshot);
      if (step2.id !== this.lastStepId) {
        const prior = STEPS[this.lastStepId];
        const autoNext = { "m1.parameters": "m1.operators", "m2.s1.connect": "m2.s1.calculate", "m2.s2.connect": "m2.s2.calculate", "m2.s3.connect": "m2.s3.calculate", "m3.dimensions": "m3.forward" };
        if (previous?.mode === "experiment" && snapshot.mode === "experiment" && prior && autoNext[prior.id] === step2.id) {
          this.learning.complete(prior);
          const key = `auto:${prior.id}`;
          if (!this.rewarded.has(key)) {
            this.rewarded.add(key);
            const message = prior.id === "m3.dimensions" ? "\u4E09\u7EC4\u77E9\u9635\u7EF4\u5EA6\u5DF2\u81EA\u52A8\u6838\u5BF9\u901A\u8FC7\uFF0C\u73B0\u5728\u5F00\u59CB\u586B\u5199\u5404\u5C42\u8F93\u51FA\u3002" : prior.id === "m1.parameters" ? "\u8F93\u5165\u3001\u6743\u91CD\u548C\u504F\u7F6E\u5DF2\u7ECF\u586B\u5199\u9F50\u5168\u3002" : "\u4E24\u8DEF\u8F93\u5165\u8FDE\u63A5\u5DF2\u5B8C\u6210\uFF0C\u53EF\u4EE5\u4E3A\u5F53\u524D\u8F93\u51FA\u914D\u7F6E\u6743\u91CD\u3002";
            this.feedback = { id: this.feedbackId(), source: "transition", kind: "correct", title: "\u8FD9\u4E00\u6B65\u5DF2\u5B8C\u6210", message, module: prior.module, stepId: prior.id, nativeScore: null, nativeDelta: null, pointsEarned: 1, at: this.clock() };
            this.record("correct", prior.title, message, prior.module);
          }
        }
        if (previous?.mode === "experiment" && prior?.module && (snapshot.nextRepair ?? 0) >= prior.module) this.learning.complete(prior);
        this.lastStepId = step2.id;
        if (snapshot.mode === "experiment") this.record("step", step2.title, step2.goal, snapshot.module);
      }
    }
    nativeCall(call) {
      if (call.snapshot.sourceSession !== this.id || call.sequence <= this.sequence) return;
      this.sequence = call.sequence;
      this.observe(call.snapshot);
      if (call.action) {
        this.recordAction(call.action);
        return;
      }
      if (CHECK_METHODS[call.method]) {
        if (call.phase === "enter") {
          this.check = { method: call.method, before: call.snapshot, step: currentStep(call.snapshot), observations: [] };
        } else if (this.check?.method === call.method) {
          const check = this.check;
          this.check = null;
          const result = nativeOutcome(check, call.snapshot);
          if (result === null) return;
          const module = CHECK_METHODS[call.method];
          const key = module === 4 ? call.method : check.step.id;
          const newReward = result && !this.rewarded.has(key);
          if (result) this.rewarded.add(key);
          const previous = check.before.scores?.[module - 1] ?? null;
          const score = call.snapshot.scores?.[module - 1] ?? null;
          const delta = score !== null && previous !== null ? score - previous : null;
          const diagnosis = result ? void 0 : diagnoseCheck(check, call.snapshot);
          this.learning.check(check.step, result, delta, diagnosis?.code ?? null);
          this.feedback = {
            id: this.feedbackId(),
            source: "check",
            pointsEarned: newReward ? 1 : 0,
            diagnosis,
            kind: result ? "correct" : "error",
            title: result ? "\u672C\u6B21\u6821\u9A8C\u901A\u8FC7" : "\u4E00\u8D77\u68C0\u67E5\u8FD9\u4E00\u6B65",
            message: result ? check.method === "Part4Calculate.Compare_CalZongWucha" ? "\u4E24\u9879\u8F93\u51FA\u8BEF\u5DEE\u5DF2\u6838\u5BF9\u901A\u8FC7\u3002" : check.method === "Part4Calculate.Compare_WeightUpdate" ? "\u68AF\u5EA6\u56E0\u5B50\u548C\u66F4\u65B0\u503C\u5DF2\u6838\u5BF9\u901A\u8FC7\u3002" : "\u672C\u6B21\u8BA1\u7B97\u5DF2\u901A\u8FC7\u539F\u5B9E\u9A8C\u6821\u9A8C\u3002" : diagnosis.levels[0],
            module,
            stepId: check.step.id,
            nativeScore: score,
            nativeDelta: delta,
            at: this.clock()
          };
          this.record(result ? "correct" : "error", check.step.title, this.feedback.message, module);
        }
      } else if (this.check && call.phase === "leave") this.check.observations.push({ method: call.method, value: call.value });
    }
    recordAction(action) {
      const step2 = STEPS[action.kind === "weighted-drop" ? "m1.operators" : action.kind === "combine-drop" ? "m1.combine" : "m1.activation"];
      const keys = action.kind === "weighted-drop" ? action.targets.map((target) => `drop:weighted:${target}`) : [`drop:${action.kind}`];
      const points = action.accepted ? keys.filter((key) => !this.rewarded.has(key)).length : 0;
      const diagnosis = action.accepted ? void 0 : diagnoseDrop(action);
      this.learning.operation(step2, action.accepted, diagnosis?.code ?? null);
      if (action.accepted) keys.forEach((key) => this.rewarded.add(key));
      const message = action.accepted ? action.kind === "weighted-drop" ? "\u52A0\u6743\u8FD0\u7B97\u7B26\u5DF2\u653E\u5165\u69FD\u4F4D\u3002\u4E24\u8DEF\u90FD\u653E\u597D\u540E\uFF0C\u6309\u5F53\u524D\u63D0\u793A\u586B\u5199\u5404\u8DEF\u8BA1\u7B97\u7ED3\u679C\u3002" : action.kind === "combine-drop" ? "\u7EC4\u5408\u8FD0\u7B97\u7B26\u5DF2\u63A5\u5165\uFF0C\u63A5\u4E0B\u6765\u8BA1\u7B97 S\u3002" : "\u6FC0\u6D3B\u51FD\u6570\u5DF2\u63A5\u5165\uFF0C\u70B9\u51FB\u201C\u4FEE\u590D\u201D\u67E5\u770B\u8F93\u51FA\u3002" : diagnosis.levels[0];
      this.feedback = { id: this.feedbackId(), source: "operation", pointsEarned: points, diagnosis, kind: action.accepted ? "correct" : "error", title: action.accepted ? "\u653E\u7F6E\u6210\u529F" : "\u8C03\u6574\u8FD9\u6B21\u653E\u7F6E", message, module: 1, stepId: step2.id, nativeScore: null, nativeDelta: null, at: this.clock() };
      this.record(action.accepted ? "correct" : "error", step2.title, message, 1);
    }
    feedbackId() {
      return `${this.id}:feedback:${++this.feedbackSequence}`;
    }
    requestHelp(kind) {
      const step2 = this.current ? currentStep(this.current) : null;
      if (!step2?.module || step2.id.startsWith("complete.")) return 0;
      const level = this.learning.help(step2, kind);
      const labels = { hint: "\u8BF7\u6C42\u8FDB\u4E00\u6B65\u63D0\u793A", principle: "\u67E5\u770B\u539F\u7406\u8BB2\u89E3", example: "\u67E5\u770B\u6570\u503C\u793A\u4F8B", question: "\u5411\u5BFC\u5E08\u63D0\u95EE" };
      this.record("help", labels[kind], `${step2.title}${kind === "hint" ? ` \xB7 \u7B2C ${level} \u5C42\u63D0\u793A` : ""}`, step2.module);
      return level;
    }
    recordObjective(result) {
      if (this.objectiveResult) return;
      this.objectiveResult = { ...result };
      this.record("quiz", "\u4EFB\u52A1\u4E0E\u635F\u5931\u51FD\u6570\u5339\u914D", `${result.score}/5 \u5206${result.expired ? "\uFF0C\u672C\u6B65\u9AA4\u5DF2\u8D85\u65F6" : ""}\u3002`, 4);
    }
    recordSupport(stepId, level) {
      const step2 = STEPS[stepId];
      if (step2?.module && !step2.id.startsWith("complete.")) this.learning.support(step2, level);
    }
    updateChallenge(view) {
      const previous = this.challenge;
      this.challenge = { ...view, completedUnits: [...view.completedUnits] };
      if (previous?.status === view.status && previous.unitId === view.unitId && previous.reviewing === view.reviewing) return;
      const module = this.current?.module ?? null;
      if (view.status === "failed" && !view.reviewing) this.record("challenge", "\u9650\u65F6\u6311\u6218\u672A\u5B8C\u6210", `${view.label}\u5DF2\u8D85\u65F6\uFF0C\u672C\u8F6E\u6311\u6218\u672A\u901A\u8FC7\u3002\u539F\u5B9E\u9A8C\u6210\u7EE9\u4FDD\u7559\uFF0C\u53EF\u4FDD\u5B58\u540E\u91CD\u65B0\u5B9E\u9A8C\u6216\u7EE7\u7EED\u590D\u76D8\u3002`, module);
      else if (view.status === "interrupted" && !view.reviewing) this.record("challenge", "\u6311\u6218\u56E0\u8FDE\u63A5\u4E2D\u65AD\u800C\u505C\u6B62", "\u8BE5\u60C5\u51B5\u4E0D\u8BA1\u4E3A\u5B66\u751F\u8D85\u65F6\u5931\u8D25\u3002", module);
      else if (view.reviewing) this.record("challenge", "\u7EE7\u7EED\u590D\u76D8", "\u672C\u8F6E\u6311\u6218\u7ED3\u679C\u4FDD\u6301\u4E0D\u53D8\uFF0C\u540E\u7EED\u64CD\u4F5C\u4F5C\u4E3A\u590D\u76D8\u8BB0\u5F55\u3002", module);
      else if (view.status === "completed") this.record("challenge", "\u9650\u65F6\u6311\u6218\u5B8C\u6210", "\u5168\u90E8\u4E94\u4E2A\u8BA1\u65F6\u9636\u6BB5\u5747\u5728\u9650\u65F6\u5185\u5B8C\u6210\u3002", null);
      else if (view.status === "running" && view.unitId !== previous?.unitId && view.limitMs) this.record("challenge", "\u5F00\u59CB\u9650\u65F6\u9636\u6BB5", `${view.label}\uFF1A${view.limitMs / 6e4} \u5206\u949F\uFF0C\u79BB\u5F00\u5F53\u524D\u6A21\u5757\u4E0D\u4F1A\u91CD\u7F6E\u5269\u4F59\u65F6\u95F4\u3002`, module);
    }
    view() {
      const moduleElapsed = this.totalTimes(), learning = this.learning.view();
      const correct = learning.steps.reduce((sum, step2) => sum + step2.correct, 0), errors = learning.steps.reduce((sum, step2) => sum + step2.errors, 0), attempts = correct + errors;
      const operationAttempts = learning.steps.reduce((sum, step2) => sum + step2.operationAttempts, 0), operationErrors = learning.steps.reduce((sum, step2) => sum + step2.operationErrors, 0);
      const evaluation = MODULES.map((module) => {
        const questions = QUIZ.filter((question) => question.module === module.id), ids = new Set(questions.map((question) => question.id));
        const quizCorrect = this.quiz ? this.quiz.items.filter((item) => ids.has(item.id) && item.correct).length : null;
        const entries = learning.steps.filter((step2) => step2.module === module.id), training = this.stageTraining.find((item) => item.module === module.id)?.attempts.at(-1);
        const weak = [...new Set(entries.filter((step2) => step2.status === "review").map((step2) => CONCEPTS[step2.concept]))];
        const trainingWeak = [...new Set(training?.items.filter((item) => !item.correct && item.concept).map((item) => CONCEPTS[item.concept]) ?? [])];
        const review = training ? training.correct < training.total : weak.length > 0 || quizCorrect !== null && quizCorrect < questions.length;
        const advice = training ? trainingWeak.length ? `\u672C\u6B21\u8BAD\u7EC3\u5EFA\u8BAE\u518D\u770B\uFF1A${trainingWeak.join("\u3001")}\u3002` : "\u672C\u6B21\u9636\u6BB5\u8BAD\u7EC3\u5DF2\u901A\u8FC7\uFF0C\u63A5\u4E0B\u6765\u5C1D\u8BD5\u72EC\u7ACB\u8FD0\u7528\u3002" : weak.length ? `\u4E0B\u4E00\u6B21\u5148\u68C0\u67E5\uFF1A${weak.join("\u3001")}\u3002` : this.moduleScores[module.id - 1] !== null ? "\u64CD\u4F5C\u5DF2\u5B8C\u6210\uFF0C\u53EF\u4EE5\u505A\u9636\u6BB5\u8BAD\u7EC3\u5DE9\u56FA\u4E00\u4E0B\u3002" : "\u5B8C\u6210\u64CD\u4F5C\u540E\uFF0C\u8FD9\u91CC\u4F1A\u6574\u7406\u672C\u6A21\u5757\u7684\u5B66\u4E60\u60C5\u51B5\u3002";
        return { module: module.id, title: module.title, nativeScore: this.moduleScores[module.id - 1] ?? null, checks: entries.reduce((sum, step2) => sum + step2.attempts, 0), correct: entries.reduce((sum, step2) => sum + step2.correct, 0), quizCorrect, quizTotal: questions.length, trainingScore: training?.score ?? null, review, advice };
      });
      const empty = { sourceSession: this.id, mode: "loading", module: null, state: null, activeTips: [], scores: null, nextRepair: null, previewPage: null, speechPlaying: false, values: {}, report: { submitted: false, total: null, reflection: null, operations: null } };
      return {
        id: this.id,
        startedAt: this.startedAt,
        step: currentStep(this.current ?? empty),
        attempts,
        correct,
        errors,
        accuracy: attempts ? correct / attempts : null,
        practicePoints: this.rewarded.size,
        operationAttempts,
        operationCorrect: operationAttempts - operationErrors,
        operationErrors,
        completedSteps: learning.steps.filter((step2) => step2.completed).map((step2) => step2.stepId),
        evaluation,
        learning,
        recordVersion: 2,
        challenge: this.challenge ? { ...this.challenge, completedUnits: [...this.challenge.completedUnits] } : void 0,
        elapsedMs: moduleElapsed.reduce((sum, value) => sum + value, 0),
        moduleElapsed,
        moduleScores: [...this.moduleScores],
        completedModules: this.moduleScores.flatMap((value, index) => value === null ? [] : [index + 1]),
        visitedPages: [...this.visited].sort((a, b) => a - b),
        feedback: this.feedback,
        journal: [...this.journal],
        quiz: this.quiz,
        quizPurpose: this.quiz ? "prestudy" : void 0,
        canPrestudy: !this.experimentStarted && (this.current?.mode === "menu" || this.current?.mode === "preview"),
        availableTraining: this.trainingAvailable(),
        stageTraining: this.stageTraining.map((item) => ({ module: item.module, attempts: item.attempts.map((attempt) => ({ ...attempt, items: attempt.items.map((item2) => ({ ...item2 })) })) })),
        nativeReport: this.nativeReport ? { ...this.nativeReport } : null,
        objectiveResult: this.objectiveResult ? { ...this.objectiveResult } : null,
        reviewModules: evaluation.filter((item) => item.review).map((item) => item.module)
      };
    }
    answerQuiz(answers) {
      if (this.experimentStarted || !["menu", "preview"].includes(this.current?.mode ?? "")) throw new Error("\u9884\u4E60\u68C0\u6D4B\u53EA\u5728\u5B9E\u9A8C\u5F00\u59CB\u524D\u8FDB\u884C\u3002");
      this.quiz = grade(QUIZ, answers);
      this.record("quiz", "\u5B8C\u6210\u9884\u4E60\u68C0\u6D4B", `${this.quiz.correct}/${this.quiz.total} \u9898\u6B63\u786E\uFF1B\u9884\u4E60\u6210\u7EE9\u72EC\u7ACB\u663E\u793A\u3002`, null);
      return this.quiz;
    }
    trainingAvailable() {
      const snapshot = this.current;
      if (snapshot?.mode === "experiment" && snapshot.module !== null && (snapshot.nextRepair ?? 0) < snapshot.module) return [];
      return this.moduleScores.flatMap((score, index) => score === null ? [] : [index + 1]);
    }
    requireTraining(module) {
      if (!Number.isInteger(module) || module < 1 || module > 4 || this.moduleScores[module - 1] === null) throw new Error("\u8BF7\u5148\u5B8C\u6210\u5BF9\u5E94\u6A21\u5757\uFF0C\u518D\u8FDB\u884C\u9636\u6BB5\u8BAD\u7EC3\u3002");
      if (!this.trainingAvailable().includes(module)) throw new Error("\u8BF7\u5148\u5B8C\u6210\u5F53\u524D\u5B9E\u9A8C\u64CD\u4F5C\uFF0C\u518D\u8FDB\u884C\u9636\u6BB5\u8BAD\u7EC3\u3002");
    }
    beginStageTraining(module) {
      this.requireTraining(module);
      let plan = this.trainingPlans.get(module);
      if (!plan) {
        const attempts = this.stageTraining.find((item) => item.module === module)?.attempts ?? [];
        plan = selectTraining(module, this.learning.view(), attempts, `${this.id}:training:${module}:${attempts.length + 1}`);
        this.trainingPlans.set(module, plan);
      }
      return { ...plan, questions: plan.questions.map((question) => ({ ...question, options: [...question.options] })) };
    }
    answerStageQuiz(module, answers, planId) {
      this.requireTraining(module);
      const plan = this.trainingPlans.get(module);
      if (!plan || plan.id !== planId) throw new Error("\u8FD9\u7EC4\u8BAD\u7EC3\u5DF2\u7ED3\u675F\u6216\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u9636\u6BB5\u8BAD\u7EC3\u3002");
      const result = grade(plan.questions, answers);
      let record = this.stageTraining.find((item) => item.module === module);
      if (!record) {
        record = { module, attempts: [] };
        this.stageTraining.push(record);
      }
      record.attempts.push({ ...result, submittedAt: (/* @__PURE__ */ new Date()).toISOString(), reason: plan.reason });
      this.trainingPlans.delete(module);
      this.record("quiz", `\u5B8C\u6210${MODULES[module - 1].title}\u9636\u6BB5\u8BAD\u7EC3`, `${result.correct}/${result.total} \u9898\u6B63\u786E\uFF1B\u672C\u9636\u6BB5\u7B2C ${record.attempts.length} \u6B21\u8BAD\u7EC3\uFF0C\u72EC\u7ACB\u4E8E\u9884\u4E60\u548C\u539F\u5B9E\u9A8C\u6210\u7EE9\u3002`, module);
      return result;
    }
  };
  function grade(questions, answers) {
    if (questions.some((question) => !Number.isInteger(answers[question.id]) || answers[question.id] < 0 || answers[question.id] >= question.options.length)) throw new Error("\u8BF7\u5B8C\u6574\u56DE\u7B54\u672C\u6B21\u5168\u90E8\u9898\u76EE\u540E\u518D\u63D0\u4EA4\u3002");
    const items = questions.map((question) => ({ id: question.id, correct: answers[question.id] === question.answer, answer: question.answer, explanation: question.explanation, question: question.question, options: [...question.options], selected: answers[question.id], concept: question.concept }));
    const correct = items.filter((item) => item.correct).length;
    return { score: correct / questions.length * 100, correct, total: questions.length, items };
  }

  // assistant/core/narration.ts
  var VOICE_CUES2 = { ...VOICE_CUES };
  for (const step2 of Object.values(STEPS)) {
    const content = teachingFor(step2);
    VOICE_CUES2[`${step2.id}.principle`] = content.principle;
    VOICE_CUES2[`${step2.id}.example`] = content.example;
    content.hints.forEach((text, index) => {
      VOICE_CUES2[`${step2.id}.hint.${index + 1}`] = text;
    });
  }
  for (const page of PREVIEW_PAGES) {
    const step2 = previewStep(page.number), content = teachingFor(step2);
    VOICE_CUES2[`${step2.id}.guide`] = `${step2.title}\u3002${content.principle}`;
    VOICE_CUES2[`${step2.id}.principle`] = content.principle;
    VOICE_CUES2[`${step2.id}.example`] = content.example;
    content.hints.forEach((text, index) => {
      VOICE_CUES2[`${step2.id}.hint.${index + 1}`] = text;
    });
  }
  var NARRATION_ENCODING = { format: "mp3", bitrateKbps: 96, sampleRate: 22050, channels: 1 };
  var NARRATION_TRACKS = [];
  var NARRATION_FILES = {};
  var recordings = /* @__PURE__ */ new Map();
  for (const [id, text] of Object.entries(VOICE_CUES2)) {
    const tone = id.startsWith("complete.") ? "summary" : id === "feedback.correct" ? "encourage" : "calm";
    const key = JSON.stringify([text, tone]);
    let track = recordings.get(key);
    if (!track) {
      track = { id, text, tone, file: `${id}.${NARRATION_ENCODING.format}`, cueIds: [] };
      recordings.set(key, track);
      NARRATION_TRACKS.push(track);
    }
    track.cueIds.push(id);
    NARRATION_FILES[id] = track.file;
  }

  // assistant/core/tutor.ts
  var TutorAgent = class {
    view = null;
    snapshot = null;
    stepId = "";
    feedbackId = "";
    hintLevel = 0;
    connectionKey = "";
    focusText = "";
    lossWasReady = false;
    weightWasReady = false;
    serial = 0;
    message = null;
    observe(view, snapshot) {
      this.view = view;
      this.snapshot = snapshot;
      const step2 = view.step, changed = step2.id !== this.stepId, previousStep = this.stepId;
      const focus = currentFocus(step2, snapshot), focusChanged = focus !== this.focusText;
      this.focusText = focus;
      if (changed) {
        this.stepId = step2.id;
        this.hintLevel = 0;
        this.connectionKey = "";
        this.lossWasReady = false;
        this.weightWasReady = false;
      }
      const feedback = view.feedback;
      if (feedback && feedback.id !== this.feedbackId) {
        this.feedbackId = feedback.id;
        if (feedback.kind === "correct" && step2.id.startsWith("complete.") && step2.module) {
          return changed || this.message?.kind !== "complete" ? this.summarize(view, step2.module) : null;
        }
        const evidence = view.learning.steps.find((item) => item.stepId === feedback.stepId);
        if (feedback.kind === "error") {
          const diagnosis = feedback.diagnosis;
          let level = Math.min(3, Math.max(1, evidence?.errorStreak ?? 1, evidence?.requestedHintLevel ?? 0, evidence?.supportLevel ?? 0));
          if (diagnosis?.code === "empty-input" && (evidence?.requestedHintLevel ?? 0) < 3) level = Math.min(2, level);
          const slower = feedback.nativeDelta !== null && feedback.nativeDelta < 0 && (evidence?.scoreLoss ?? 0) >= 2 && (evidence?.errorStreak ?? 0) >= 2 && level === 2;
          const lead = slower ? "\u539F\u5B9E\u9A8C\u5DF2\u7ECF\u8FDE\u7EED\u6263\u5206\uFF0C\u6211\u4EEC\u5148\u53EA\u5904\u7406\u8FD9\u4E00\u5904\u3002" : "";
          const recovery = diagnosis?.returnToInput ? "\u5982\u679C\u539F\u9875\u9762\u4ECD\u6709\u9519\u8BEF\u5F39\u7A97\uFF0C\u5148\u70B9\u201C\u8FD4\u56DE\u91CD\u65B0\u8F93\u5165\u201D\u3002" : "";
          const text2 = lead + recovery + (diagnosis?.levels[level - 1] ?? feedback.message);
          const label3 = diagnosis?.area === "operation" ? "\u5148\u628A\u64CD\u4F5C\u505A\u7A33" : level === 1 ? "\u5148\u68C0\u67E5\u8FD9\u4E00\u5904" : level === 2 ? "\u6211\u4EEC\u62C6\u5F00\u7B97" : "\u4E00\u8D77\u6838\u5BF9\u5173\u952E\u4E00\u6B65";
          return this.set("feedback", label3, text2, void 0, true, level, feedback.stepId);
        }
        let text, label2;
        const repeat = feedback.source === "check" && (evidence?.correct ?? 0) > 1 && feedback.pointsEarned === 0;
        if (feedback.source === "operation") {
          text = feedback.message;
          label2 = "\u8FD9\u6B21\u653E\u597D\u4E86";
        } else if (feedback.source === "transition") {
          text = successForStep(feedback.stepId);
          label2 = "\u5DF2\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u6B65";
        } else if (repeat) {
          text = "\u590D\u6838\u7ED3\u679C\u4ECD\u7136\u4E00\u81F4\uFF0C\u8FD9\u4E00\u9879\u5DF2\u7ECF\u901A\u8FC7\u3002";
          label2 = "\u590D\u6838\u901A\u8FC7";
        } else {
          const supported = evidence?.status === "supported", corrected = (evidence?.errors ?? 0) > 0;
          text = (supported ? "\u6309\u7167\u63D0\u793A\u91CD\u65B0\u68C0\u67E5\u540E\uFF0C\u8FD9\u4E00\u6B65\u901A\u8FC7\u4E86\u3002" : corrected ? "\u521A\u624D\u7684\u95EE\u9898\u5DF2\u7ECF\u4FEE\u6B63\u3002" : "") + successForStep(feedback.stepId);
          label2 = supported || corrected ? "\u4FEE\u6B63\u6210\u529F" : "\u8FD9\u4E00\u6B65\u5B8C\u6210\u4E86";
        }
        if (step2.id !== feedback.stepId && !step2.id.startsWith("complete.")) {
          text += (feedback.module === 2 && feedback.source === "check" ? "\u5148\u786E\u8BA4\u539F\u9875\u9762\u7684\u6210\u529F\u63D0\u793A\u3002" : "") + "\u63A5\u4E0B\u6765\uFF0C" + currentFocus(step2, snapshot);
        }
        if (feedback.pointsEarned > 0 && Math.floor(view.practicePoints / 5) > Math.floor((view.practicePoints - feedback.pointsEarned) / 5)) text += `\u7EC3\u4E60\u79EF\u5206\u5DF2\u7D2F\u8BA1 ${view.practicePoints} \u70B9\u3002`;
        return this.set("feedback", label2, text, void 0, !repeat && (view.learning.independentStreak < 3 || (evidence?.errors ?? 0) > 0 || feedback.source === "transition"));
      }
      if (changed) {
        if (step2.id.startsWith("preview.")) return this.set("guide", "\u9884\u4E60\u8BB2\u89E3", `${step2.title}\u3002${teachingFor(step2).principle}`, `${step2.id}.guide`);
        if (step2.id.startsWith("complete.") && step2.module) {
          return this.summarize(view, step2.module);
        }
        const sameModule = /^m([1-4])\./.exec(previousStep)?.[1] === String(step2.module);
        return this.set("guide", "\u5F53\u524D\u4EFB\u52A1", step2.narration, step2.id, !(sameModule && view.learning.independentStreak >= 3));
      }
      if (step2.id === "m4.loss") {
        const ready = Array.isArray(snapshot.values.repairAvailable) && snapshot.values.repairAvailable[2] === true;
        const newlyReady = ready && !this.lossWasReady;
        this.lossWasReady = ready;
        const loss = newlyReady ? compareLoss(snapshot) : null;
        if (loss && loss.index >= 0) {
          const n = loss.index + 1;
          return this.set("hint", "\u5148\u6838\u5BF9\u8BEF\u5DEE", `Eo${n} \u9700\u8981\u590D\u6838\uFF1A\u7528\u4E0A\u65B9 out o${n} \u548C\u76EE\u6807 g0${n} \u8BA1\u7B97\uFF0C\u786E\u8BA4\u540E\u518D\u70B9\u51FB\u4FEE\u590D\u3002`, void 0, true);
        }
      }
      if (step2.id === "m4.weights") {
        const ready = Array.isArray(snapshot.values.repairAvailable) && snapshot.values.repairAvailable[3] === true;
        const newlyReady = ready && !this.weightWasReady;
        this.weightWasReady = ready;
        const factors = newlyReady ? compareWeightFactors(snapshot) : null;
        if (factors && factors.index >= 0) return this.set("hint", "\u5148\u6838\u5BF9\u68AF\u5EA6", `${MODULE4_FIELDS.weight[factors.index]}\u9700\u8981\u590D\u6838\uFF0C\u786E\u8BA4\u540E\u518D\u70B9\u51FB\u4FEE\u590D\u3002`, void 0, true);
      }
      const connection = connectionCue(step2, snapshot);
      if (connection && connection.key !== this.connectionKey) {
        this.connectionKey = connection.key;
        return this.set("guide", "\u8DDF\u7740\u8FD9\u6761\u8FDE\u63A5\u7EE7\u7EED", connection.text);
      }
      if (focusChanged && snapshot.mode === "experiment" && !snapshot.values.dialogVisible && !snapshot.values.errorVisible && !(feedback?.kind === "error" && feedback.stepId === step2.id)) return this.set("guide", "\u4E0B\u4E00\u6B65", focus, void 0, false);
      return null;
    }
    summarize(view, module) {
      const entries = view.learning.steps.filter((item) => item.module === module);
      const corrected = entries.filter((item) => item.completed && item.errors > 0);
      const needs = [...new Set(entries.filter((item) => item.errors > 0 || item.helpRequests > 0).map((item) => CONCEPTS[item.concept]))];
      const score = view.moduleScores[module - 1];
      let text = `\u8FD9\u4E00\u6A21\u5757\u7684\u64CD\u4F5C\u5DF2\u5B8C\u6210${score != null ? `\uFF0C\u539F\u5B9E\u9A8C\u8BB0\u5F55\u4E3A ${score} \u5206` : ""}\u3002`;
      if (corrected.length) text += `\u5176\u4E2D\u201C${corrected.at(-1).title}\u201D\u7ECF\u8FC7\u4FEE\u6B63\u5DF2\u7ECF\u901A\u8FC7\u3002`;
      text += needs.length ? `\u63A5\u4E0B\u6765\u7528\u4E24\u9053\u65B0\u9898\u5DE9\u56FA${needs.slice(0, 2).join("\u3001")}\u3002` : "\u53EF\u4EE5\u5148\u505A\u4E24\u9053\u9636\u6BB5\u8BAD\u7EC3\uFF0C\u518D\u7EE7\u7EED\u4E0B\u4E00\u6BB5\u5B66\u4E60\u3002";
      return this.set("complete", "\u5B8C\u6210\u4E00\u6BB5\uFF0C\u5DE9\u56FA\u4E00\u4E0B", text);
    }
    help(kind, view, snapshot) {
      if (view) this.view = view;
      if (snapshot) this.snapshot = snapshot;
      if (!this.view || !this.snapshot) return null;
      const step2 = this.view.step, content = teachingFor(step2);
      if (kind === "hint") {
        const evidence = this.view.learning.steps.find((item) => item.stepId === step2.id);
        this.hintLevel = Math.min(3, Math.max(this.hintLevel + 1, evidence?.requestedHintLevel ?? 0));
        const recent = this.view.feedback?.kind === "error" && this.view.feedback.stepId === step2.id ? this.view.feedback.diagnosis : null;
        const diagnosis = recent ?? (step2.id === "m3.dimensions" ? diagnoseCheck({ method: "Part3Calculate.Execute", before: this.snapshot, step: step2, observations: [] }, this.snapshot) : null);
        if (diagnosis) {
          const recovery = diagnosis.returnToInput ? "\u82E5\u9519\u8BEF\u5F39\u7A97\u4ECD\u5728\uFF0C\u5148\u70B9\u201C\u8FD4\u56DE\u91CD\u65B0\u8F93\u5165\u201D\u3002" : "";
          return this.set(kind, `\u63D0\u793A ${this.hintLevel}/3`, recovery + diagnosis.levels[this.hintLevel - 1], void 0, true, this.hintLevel, step2.id);
        }
        const connection = connectionCue(step2, this.snapshot);
        if (this.hintLevel === 1) return this.set(kind, "\u5148\u5B8C\u6210\u773C\u524D\u8FD9\u4E00\u6B65", connection?.text ?? currentFocus(step2, this.snapshot), void 0, true, 1, step2.id);
        return this.set(kind, `\u63D0\u793A ${this.hintLevel}/3`, content.hints[this.hintLevel - 1], `${step2.id}.hint.${this.hintLevel}`, true, this.hintLevel, step2.id);
      }
      if (kind === "explain") return this.set(kind, "\u539F\u7406\u8BB2\u89E3", content.principle, `${step2.id}.principle`);
      return this.set(kind, "\u6570\u503C\u793A\u4F8B", content.example, `${step2.id}.example`);
    }
    replay() {
      return this.message;
    }
    set(kind, label2, text, cue, speak = true, supportLevel, supportFor) {
      this.message = { id: `${this.stepId}:${++this.serial}`, kind, label: label2, text, cue, speak, supportLevel, supportFor };
      return this.message;
    }
  };

  // assistant/core/history.ts
  var KEY = "ai-neural-lab.tutor-history.v1";
  function readHistory(storage) {
    const value = storage.getItem(KEY);
    if (value === null) return [];
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || !("version" in parsed) || parsed.version !== 1 || !("sessions" in parsed) || !Array.isArray(parsed.sessions)) throw new Error("\u5B66\u4E60\u8BB0\u5F55\u683C\u5F0F\u65E0\u6CD5\u8BC6\u522B");
    const sessions = parsed.sessions;
    if (sessions.some((item) => !item || typeof item.id !== "string" || typeof item.startedAt !== "string" || !Array.isArray(item.journal) || !Array.isArray(item.moduleScores) || typeof item.elapsedMs !== "number")) throw new Error("\u5B66\u4E60\u8BB0\u5F55\u5185\u5BB9\u4E0D\u5B8C\u6574");
    return sessions;
  }
  function saveHistory(storage, session) {
    const sessions = readHistory(storage), index = sessions.findIndex((item) => item.id === session.id);
    if (index < 0) sessions.push(session);
    else sessions[index] = session;
    storage.setItem(KEY, JSON.stringify({ version: 1, sessions }));
  }

  // assistant/core/sse.ts
  async function* readSse(stream) {
    const reader = stream.getReader(), decoder = new TextDecoder();
    let pending = "";
    const payload = (frame) => {
      const lines = frame.split("\n").filter((line) => line.startsWith("data:")).map((line) => line.slice(5).replace(/^ /, ""));
      return lines.length ? lines.join("\n") : null;
    };
    try {
      for (; ; ) {
        const chunk = await reader.read();
        pending += chunk.done ? decoder.decode() : decoder.decode(chunk.value, { stream: true });
        pending = pending.replace(/\r\n/g, "\n");
        if (pending.length > 262144) throw new Error("\u56DE\u590D\u6570\u636E\u8D85\u51FA\u9884\u671F\u9650\u5EA6");
        let end;
        while ((end = pending.indexOf("\n\n")) >= 0) {
          const value = payload(pending.slice(0, end));
          pending = pending.slice(end + 2);
          if (value !== null) yield value;
        }
        if (chunk.done) {
          const value = payload(pending);
          if (value !== null) yield value;
          break;
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  // assistant/core/speech.ts
  function voiceCommand(text) {
    const value = text.trim().replace(/[。！!？?\s]/g, "");
    const commands = { "\u505C\u4E00\u4E0B": "stop", "\u505C\u6B62\u8BB2\u89E3": "stop", "\u6682\u505C\u8BB2\u89E3": "stop", "\u522B\u5FF5\u4E86": "stop", "\u91CD\u64AD": "replay", "\u518D\u8BF4\u4E00\u904D": "replay", "\u91CD\u65B0\u8BB2\u4E00\u904D": "replay", "\u6162\u4E00\u70B9": "slower", "\u8BF4\u6162\u4E00\u70B9": "slower", "\u8BB2\u6162\u4E00\u70B9": "slower", "\u5FEB\u4E00\u70B9": "faster", "\u8BF4\u5FEB\u4E00\u70B9": "faster", "\u53EA\u63D0\u793A\u4E00\u6B65": "hint", "\u7ED9\u6211\u4E00\u4E2A\u63D0\u793A": "hint" };
    return commands[value] ?? null;
  }
  var SentenceBuffer = class {
    pending = "";
    push(chunk, final = false) {
      this.pending += chunk;
      const result = [];
      for (; ; ) {
        const sentence = /[。！？!?；;\n]/.exec(this.pending);
        let end = sentence ? sentence.index + 1 : 0;
        if (!end && this.pending.length > 70) {
          const comma = this.pending.lastIndexOf("\uFF0C", 60);
          end = comma > 10 ? comma + 1 : 60;
        }
        if (!end) break;
        const text = this.pending.slice(0, end).trim();
        this.pending = this.pending.slice(end);
        if (text) result.push(text);
      }
      if (final && this.pending.trim()) {
        result.push(this.pending.trim());
        this.pending = "";
      }
      return result;
    }
  };

  // assistant/ui/paths.ts
  function resolveAppUrl(pageUrl, root, path) {
    return new URL(path, new URL(root, pageUrl)).href;
  }
  function appUrl(path) {
    return resolveAppUrl(window.location.href, document.documentElement.dataset.appRoot ?? "/", path);
  }

  // assistant/ui/voice.ts
  var TutorVoice = class {
    constructor(changed) {
      this.changed = changed;
    }
    changed;
    enabled = false;
    activated = false;
    state = "idle";
    error = "";
    caption = "";
    rate = 1;
    audio = null;
    request = null;
    urls = /* @__PURE__ */ new Set();
    generation = 0;
    queue = [];
    pumping = false;
    streamOpen = false;
    sentences = new SentenceBuffer();
    context = null;
    analyser = null;
    samples = new Uint8Array(256);
    lastText = "";
    stop() {
      this.generation++;
      this.request?.abort();
      this.request = null;
      this.queue = [];
      this.pumping = false;
      this.streamOpen = false;
      this.sentences = new SentenceBuffer();
      if (this.audio) {
        this.audio.pause();
        this.audio.removeAttribute("src");
        this.audio.load();
        this.audio = null;
      }
      for (const url of this.urls) URL.revokeObjectURL(url);
      this.urls.clear();
      this.state = "idle";
      this.changed();
    }
    disable() {
      this.enabled = false;
      this.stop();
    }
    setRate(rate) {
      this.rate = Math.min(1.3, Math.max(0.7, rate));
      if (this.audio) this.audio.playbackRate = this.rate;
      this.changed();
    }
    amplitude() {
      if (this.state !== "speaking" || !this.analyser) return 0;
      this.analyser.getByteTimeDomainData(this.samples);
      let energy = 0;
      for (const sample of this.samples) {
        const value = (sample - 128) / 128;
        energy += value * value;
      }
      return Math.min(1, Math.sqrt(energy / this.samples.length) * 3.2);
    }
    startStream() {
      this.stop();
      this.request = new AbortController();
      this.streamOpen = true;
      this.lastText = "";
      return this.generation;
    }
    appendStream(text, token) {
      if (token !== this.generation || !this.enabled) return;
      this.lastText += text;
      for (const sentence of this.sentences.push(text)) this.queue.push({ text: sentence, tone: "calm", dynamic: true });
      void this.pump(token);
    }
    finishStream(token) {
      if (token !== this.generation) return;
      for (const text of this.sentences.push("", true)) this.queue.push({ text, tone: "calm", dynamic: true });
      this.streamOpen = false;
      void this.pump(token);
    }
    replayLast(dynamic = true) {
      if (this.lastText) void this.play(this.lastText, void 0, dynamic);
    }
    async play(text, cue, dynamicVoice = true, tone = "calm") {
      if (!this.enabled) return;
      this.stop();
      const token = this.generation;
      this.request = new AbortController();
      this.lastText = text;
      this.error = "";
      const segments = cue ? [text] : new SentenceBuffer().push(text, true);
      this.queue = segments.map((segment) => ({ text: segment, cue, tone, dynamic: dynamicVoice }));
      await this.pump(token);
    }
    prepare(item, token) {
      if (item.prepared) return item.prepared;
      const signal = this.request.signal;
      item.prepared = (async () => {
        if (item.cue && VOICE_CUES2[item.cue] === item.text) return appUrl("assistant/audio/" + encodeURIComponent(NARRATION_FILES[item.cue]));
        if (!item.dynamic) throw new Error("\u672C\u5730\u8BED\u97F3\u670D\u52A1\u6682\u4E0D\u53EF\u7528\u3002");
        const response = await fetch(appUrl("api/speech"), { method: "POST", signal, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: item.text.slice(0, 1500), tone: item.tone }) });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error ?? "\u8BED\u97F3\u751F\u6210\u5931\u8D25");
        }
        const blob = await response.blob();
        if (token !== this.generation) throw new DOMException("Cancelled", "AbortError");
        const url = URL.createObjectURL(blob);
        this.urls.add(url);
        return url;
      })();
      void item.prepared.catch(() => {
      });
      return item.prepared;
    }
    async pump(token) {
      if (this.pumping || token !== this.generation || !this.enabled) return;
      this.pumping = true;
      try {
        while (this.queue.length && token === this.generation && this.enabled) {
          const item = this.queue.shift();
          this.caption = item.text;
          this.state = "loading";
          this.error = "";
          this.changed();
          const url = await this.prepare(item, token);
          if (token !== this.generation) return;
          if (this.queue[0]) void this.prepare(this.queue[0], token);
          await this.playAudio(url, token);
          if (this.urls.has(url)) {
            URL.revokeObjectURL(url);
            this.urls.delete(url);
          }
        }
        if (token === this.generation) {
          this.state = this.streamOpen ? "loading" : "idle";
          this.changed();
        }
      } catch (error) {
        if (token !== this.generation || this.request?.signal.aborted) return;
        this.queue = [];
        this.streamOpen = false;
        this.activated = false;
        this.state = error instanceof DOMException && error.name === "NotAllowedError" ? "blocked" : "error";
        this.error = this.state === "blocked" ? "\u70B9\u51FB\u201C\u5F00\u542F\u65C1\u767D\u201D\u5373\u53EF\u542F\u7528\u58F0\u97F3\u3002" : error instanceof Error ? error.message : "\u65C1\u767D\u6682\u4E0D\u53EF\u7528";
        this.changed();
      } finally {
        if (token === this.generation) this.pumping = false;
      }
    }
    async playAudio(url, token) {
      const audio = new Audio(url);
      this.audio = audio;
      audio.playbackRate = this.rate;
      audio.preservesPitch = true;
      const signal = this.request.signal;
      let complete = () => {
      };
      const ended = new Promise((resolve) => {
        complete = resolve;
        audio.addEventListener("ended", resolveEnded, { once: true });
        signal.addEventListener("abort", resolveEnded, { once: true });
      });
      function resolveEnded() {
        complete();
      }
      audio.addEventListener("playing", () => {
        if (token === this.generation) {
          this.state = "speaking";
          this.activated = true;
          this.changed();
        }
      });
      audio.addEventListener("error", () => {
        complete();
      });
      if (!this.context) {
        this.context = new AudioContext();
        this.analyser = this.context.createAnalyser();
        this.analyser.fftSize = 256;
        this.analyser.connect(this.context.destination);
      }
      const source = this.context.createMediaElementSource(audio);
      source.connect(this.analyser);
      try {
        if (this.context.state === "suspended") await this.context.resume();
        if (signal.aborted || token !== this.generation) return;
        await audio.play();
        await ended;
        if (audio.error && token === this.generation) throw new Error("\u65C1\u767D\u97F3\u9891\u64AD\u653E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
      } finally {
        signal.removeEventListener("abort", resolveEnded);
        source.disconnect();
        if (this.audio === audio) this.audio = null;
      }
    }
  };

  // assistant/core/focus.ts
  function firstEmpty(value) {
    return Array.isArray(value) ? value.findIndex((item) => !String(item ?? "").trim()) : -1;
  }
  function focusTarget(snapshot, session) {
    if (snapshot.mode !== "experiment" || snapshot.values.dialogVisible === true || snapshot.values.errorVisible === true) return null;
    const step2 = currentStep(snapshot), feedback = session?.feedback;
    if (feedback?.kind === "error" && feedback.stepId === step2.id && feedback.diagnosis?.targetId) return feedback.diagnosis.targetId;
    if (step2.id === "m1.parameters") {
      const values = snapshot.values.inputs;
      const index = Array.isArray(values) ? [0, 1, 3, 4, 6].find((i) => !String(values[i] ?? "").trim()) : void 0;
      return index === void 0 ? null : `m1.input.${index}`;
    }
    if (step2.id === "m1.operators") return Array.isArray(snapshot.values.operatorPlacements) && snapshot.values.operatorPlacements[0] === true ? "m1.operator.1" : "m1.operator.0";
    if (step2.id === "m1.weighted") {
      const values = snapshot.values.inputs;
      return Array.isArray(values) && String(values[2] ?? "").trim() ? "m1.input.5" : "m1.input.2";
    }
    if (step2.id === "m1.combine") return "m1.combine";
    if (step2.id === "m1.sum") return "m1.input.7";
    if (step2.id === "m1.activation") return snapshot.values.activationReady ? "m1.repair" : "m1.activation";
    const match = /^m2\.s([123])\.(connect|calculate)$/.exec(step2.id);
    if (match) {
      const index = Number(match[1]) - 1;
      if (match[2] === "calculate") return `m2.output.${index}`;
      if (snapshot.values.connection === 1 || snapshot.values.connection === 2) return `m2.output.${index}`;
      const inputs = snapshot.values.inputConnections;
      return Array.isArray(inputs) && inputs[0] === true ? "m2.input.1" : "m2.input.0";
    }
    if (step2.id === "m3.dimensions") {
      const flags = snapshot.values.dimensionChecks, index = Array.isArray(flags) ? flags.findIndex((value) => value !== true) : 0;
      return index < 0 ? null : `m3.dimension.${index}`;
    }
    if (step2.id === "m3.forward") {
      const index = firstEmpty(snapshot.values.outputs);
      return index < 0 ? null : `m3.output.${index}`;
    }
    const groups = { "m4.forward": ["forward", "forward"], "m4.loss": ["loss", "loss"], "m4.weights": ["weights", "weight"], "m4.update": ["updatedWeights", "updated"], "m4.hidden": ["updatedWeights", "updated"], "m4.finish": ["updatedWeights", "updated"] };
    const group = groups[step2.id];
    if (group) {
      const index = firstEmpty(snapshot.values[group[0]]);
      return index < 0 ? null : `m4.${group[1]}.${index}`;
    }
    return step2.id === "m4.formula" ? "m4.repair.0" : null;
  }
  function visibleFocus(snapshot, session) {
    const id = focusTarget(snapshot, session);
    return snapshot.anchors?.find((anchor) => anchor.id === id) ?? null;
  }

  // assistant/ui/focus.ts
  var FocusOverlay = class {
    root;
    target = null;
    frame;
    enabled = true;
    requested = null;
    constructor(frame) {
      this.frame = frame;
      this.root = document.createElement("div");
      this.root.className = "tutor-focus";
      this.root.hidden = true;
      this.root.setAttribute("aria-hidden", "true");
      this.root.innerHTML = '<span class="focus-label"></span>';
      document.body.append(this.root);
      new ResizeObserver(() => this.position()).observe(frame);
      window.addEventListener("resize", () => this.position());
    }
    update(snapshot, session) {
      if (this.requested && (this.requested.source !== snapshot.sourceSession || this.requested.step !== session.step.id || this.requested.state !== JSON.stringify(snapshot.values) || snapshot.values.dialogVisible === true || snapshot.values.errorVisible === true)) this.requested = null;
      this.target = this.requested ? snapshot.anchors?.find((item) => item.id === this.requested.id) ?? null : visibleFocus(snapshot, session);
      this.root.dataset.result = !this.requested && session.feedback?.stepId === session.step.id ? session.feedback.kind : "guide";
      this.position();
    }
    showTarget(snapshot, id) {
      if (!this.enabled || snapshot.mode !== "experiment" || snapshot.values.dialogVisible === true || snapshot.values.errorVisible === true) return false;
      const target = snapshot.anchors?.find((item) => item.id === id);
      if (!target) return false;
      this.requested = { id, source: snapshot.sourceSession, step: currentStep(snapshot).id, state: JSON.stringify(snapshot.values) };
      this.target = target;
      this.position();
      return true;
    }
    setEnabled(enabled) {
      this.enabled = enabled;
      if (!enabled) this.requested = null;
      this.position();
    }
    clear() {
      this.requested = null;
      this.target = null;
      this.position();
    }
    position() {
      const anchor = this.target;
      this.root.hidden = !this.enabled || !anchor;
      if (!anchor) return;
      const canvas = this.frame.contentDocument?.querySelector("canvas");
      if (!canvas) {
        this.root.hidden = true;
        return;
      }
      const frameBox = this.frame.getBoundingClientRect(), canvasBox = canvas.getBoundingClientRect();
      const left = frameBox.left + canvasBox.left + anchor.x * canvasBox.width, top = frameBox.top + canvasBox.top + anchor.y * canvasBox.height;
      Object.assign(this.root.style, { left: `${left - 4}px`, top: `${top - 4}px`, width: `${anchor.width * canvasBox.width + 8}px`, height: `${anchor.height * canvasBox.height + 8}px` });
      this.root.querySelector("span").textContent = anchor.label;
    }
  };

  // assistant/core/challenge.ts
  var TIME_RULES = [
    { id: "m1", label: "\u4EBA\u5DE5\u795E\u7ECF\u5143\u6A21\u5757", module: 1, minutes: 15 },
    { id: "m2", label: "\u591A\u8F93\u5165\u591A\u8F93\u51FA\u6A21\u5757", module: 2, minutes: 15 },
    { id: "m3", label: "\u53CC\u9690\u85CF\u5C42\u6A21\u5757", module: 3, minutes: 20 },
    { id: "m4-forward", label: "\u524D\u5411\u8BA1\u7B97\u4E0E\u8BEF\u5DEE\u9636\u6BB5", module: 4, minutes: 10 },
    { id: "m4-backward", label: "\u53CD\u5411\u4F20\u64AD\u4E0E\u6743\u91CD\u66F4\u65B0\u9636\u6BB5", module: 4, minutes: 10 }
  ];
  var Challenge = class {
    clock;
    source = "";
    status = "not-started";
    active = null;
    deadline = 0;
    pausedAt = null;
    completed = /* @__PURE__ */ new Set();
    attempt = 1;
    failures = 0;
    reviewing = false;
    constructor(clock = () => Date.now(), carry) {
      this.clock = clock;
      if (carry) {
        this.source = carry.source;
        this.attempt = carry.attempt;
        this.failures = carry.failures;
      }
    }
    carry() {
      return { source: this.source, attempt: this.attempt, failures: this.failures };
    }
    attach(source) {
      if (source === this.source) return;
      if (this.source) this.attempt++;
      this.source = source;
      this.status = "not-started";
      this.active = null;
      this.deadline = 0;
      this.pausedAt = null;
      this.completed.clear();
      this.reviewing = false;
    }
    observe(snapshot) {
      if (snapshot.sourceSession !== this.source) return;
      this.tick();
      if (this.pausedAt !== null) return;
      if (["failed", "interrupted", "completed"].includes(this.status)) return;
      if (this.active) {
        const finished = this.active.id === "m4-forward" ? (snapshot.nextRepair ?? 0) >= 4 || snapshot.module === 4 && (snapshot.state ?? 0) >= 3 : (snapshot.nextRepair ?? 0) >= this.active.module;
        if (finished) {
          this.completed.add(this.active.id);
          this.active = null;
        }
      }
      if (this.completed.size === TIME_RULES.length) {
        this.status = "completed";
        return;
      }
      if (snapshot.mode !== "experiment" || snapshot.module === null) return;
      const id = snapshot.module === 4 ? (snapshot.state ?? 0) >= 3 ? "m4-backward" : "m4-forward" : `m${snapshot.module}`;
      if (this.completed.has(id) || this.active?.id === id) return;
      if (this.active) return;
      const rule = TIME_RULES.find((rule2) => rule2.id === id);
      if (!rule) return;
      this.active = rule;
      this.deadline = this.clock() + rule.minutes * 6e4;
      this.status = "running";
    }
    tick() {
      if (this.status === "running" && this.active && this.pausedAt === null && this.clock() >= this.deadline) {
        this.status = "failed";
        this.failures++;
      }
    }
    pause() {
      this.tick();
      if (this.status === "running" && this.active && this.pausedAt === null) this.pausedAt = this.clock();
    }
    resume() {
      if (this.pausedAt !== null) {
        this.deadline += Math.max(0, this.clock() - this.pausedAt);
        this.pausedAt = null;
      }
    }
    review() {
      if (this.status === "failed" || this.status === "interrupted") this.reviewing = true;
    }
    interrupt() {
      if (this.status === "running") this.status = "interrupted";
    }
    view() {
      this.tick();
      return {
        status: this.status,
        unitId: this.active?.id ?? null,
        label: this.active?.label ?? "",
        limitMs: this.active ? this.active.minutes * 6e4 : null,
        remainingMs: this.active && (this.status === "running" || this.status === "failed") ? Math.max(0, this.deadline - (this.pausedAt ?? this.clock())) : null,
        attempt: this.attempt,
        failures: this.failures,
        reviewing: this.reviewing,
        completedUnits: [...this.completed]
      };
    }
  };

  // assistant/core/evaluation.ts
  function analyzeLearning(learning, quiz, training) {
    const groups = /* @__PURE__ */ new Map();
    const group = (module, concept) => {
      const key = `${module}:${concept}`;
      let item = groups.get(key);
      if (!item) {
        item = { module, concept, steps: [], prestudy: [], training: null };
        groups.set(key, item);
      }
      return item;
    };
    for (const step2 of learning?.steps ?? []) {
      const concept = ["m4.formula", "m4.update", "m4.hidden"].includes(step2.stepId) ? conceptForStep(step2.stepId) : step2.concept;
      group(step2.module, concept).steps.push(step2);
    }
    for (const item of quiz?.items ?? []) {
      const question = QUIZ.find((q2) => q2.id === item.id), concept = item.concept ?? question?.concept;
      if (question && concept) group(question.module, concept).prestudy.push(item.correct);
    }
    for (const record of training) {
      for (const attempt of record.attempts) {
        const latest = /* @__PURE__ */ new Map();
        for (const item of attempt.items) {
          const concept = item.concept ?? TRAINING_BANK.find((q2) => q2.id === item.id)?.concept;
          if (concept) {
            const results = latest.get(concept) ?? [];
            results.push(item.correct);
            latest.set(concept, results);
          }
        }
        for (const [concept, results] of latest) group(record.module, concept).training = results;
      }
    }
    const count = (items) => ({ correct: items.filter(Boolean).length, total: items.length });
    return [...groups.values()].map(({ module, concept, steps, prestudy, training: training2 }) => {
      const attempts = steps.reduce((sum, s) => sum + s.attempts, 0), correct = steps.reduce((sum, s) => sum + s.correct, 0), errors = steps.reduce((sum, s) => sum + s.errors, 0);
      const operationErrors = steps.reduce((sum, s) => sum + s.operationErrors, 0), helpRequests = steps.reduce((sum, s) => sum + s.helpRequests, 0);
      const first = steps.filter((s) => s.firstPass !== null), independent = steps.filter((s) => s.status === "independent").length;
      const corrected = steps.filter((s) => s.completed && s.errors > 0).length, supported = steps.filter((s) => s.completed && (s.helpRequests > 0 || s.supportLevel >= 2)).length, completed = steps.filter((s) => s.completed).length;
      const pending = steps.find((s) => s.status === "review"), pre = prestudy.length ? count(prestudy) : null, post = training2?.length ? count(training2) : null;
      const failedTraining = !!post && post.correct < post.total, passedTraining = !!post && post.correct === post.total;
      const needsReview = !!pending || failedTraining || !passedTraining && (errors > 0 || helpRequests > 0 || !!pre && pre.correct < pre.total);
      let advice;
      if (pending?.lastErrorCode === "drag-target") advice = "\u5148\u628A\u56FE\u6807\u5BF9\u51C6\u76EE\u6807\u69FD\u4F4D\uFF0C\u518D\u7EE7\u7EED\u64CD\u4F5C\u3002";
      else if (pending?.stepId === "m4.loss") advice = "\u56DE\u770B\u4E24\u9879\u8F93\u51FA\u8BEF\u5DEE\u7684\u8BA1\u7B97\uFF0C\u5E76\u901A\u8FC7\u9636\u6BB5\u8BAD\u7EC3\u590D\u6838\u3002";
      else if (pending) advice = `\u5148\u56DE\u770B\u201C${pending.title}\u201D\u7684\u63D0\u793A\uFF0C\u4FEE\u6B63\u540E\u518D\u63D0\u4EA4\u3002`;
      else if (failedTraining) advice = "\u5148\u770B\u9636\u6BB5\u8BAD\u7EC3\u7684\u9519\u9898\u89E3\u6790\uFF0C\u518D\u7528\u540C\u7C7B\u9898\u68C0\u67E5\u3002";
      else if (passedTraining) advice = "\u672C\u77E5\u8BC6\u70B9\u7684\u6700\u8FD1\u4E00\u6B21\u9636\u6BB5\u8BAD\u7EC3\u5DF2\u901A\u8FC7\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u5C1D\u8BD5\u72EC\u7ACB\u5E94\u7528\u3002";
      else if (errors > 0) advice = "\u672C\u6B21\u51FA\u73B0\u8FC7\u8BA1\u7B97\u9519\u8BEF\uFF0C\u5EFA\u8BAE\u7528\u9636\u6BB5\u8BAD\u7EC3\u518D\u68C0\u67E5\u4E00\u6B21\u3002";
      else if (helpRequests > 0) advice = "\u672C\u6B21\u4F7F\u7528\u8FC7\u5E2E\u52A9\uFF0C\u4E0B\u4E00\u6B21\u53EF\u4EE5\u5C1D\u8BD5\u72EC\u7ACB\u5B8C\u6210\u3002";
      else if (pre && pre.correct < pre.total) advice = "\u5148\u56DE\u770B\u9884\u4E60\u9898\u89E3\u6790\uFF0C\u518D\u7ED3\u5408\u5BF9\u5E94\u64CD\u4F5C\u7406\u89E3\u3002";
      else if (independent > 0) advice = "\u672C\u6B21\u5DF2\u6709\u72EC\u7ACB\u901A\u8FC7\u7684\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u540C\u7C7B\u7EC3\u4E60\u3002";
      else if (completed > 0) advice = "\u672C\u77E5\u8BC6\u70B9\u7684\u64CD\u4F5C\u5DF2\u5B8C\u6210\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u7EC3\u4E60\u3002";
      else advice = "\u7ED3\u5408\u5BF9\u5E94\u6A21\u5757\u7684\u64CD\u4F5C\u7EE7\u7EED\u5B66\u4E60\u3002";
      const priority = pending ? 3 : failedTraining ? 2 : needsReview ? 1 : 0;
      return { module, concept, label: CONCEPTS[concept], attempts, correct, errors, operationErrors, helpRequests, firstPassCorrect: first.filter((s) => s.firstPass === true).length, firstPassTotal: first.length, independent, corrected, supported, completed, prestudy: pre, training: post, needsReview, advice, priority };
    }).sort((a, b) => b.priority - a.priority || a.module - b.module).map(({ priority: _, ...item }) => item);
  }

  // assistant/core/objective.ts
  var SCENARIOS = {
    regression: { prompt: "\u6839\u636E\u4F20\u611F\u5668\u6570\u636E\u9884\u6D4B\u6E29\u5EA6\uFF0C\u6837\u672C\u6807\u7B7E\u4E3A\u8FDE\u7EED\u6570\u503C\u3002", labels: ["18.4", "21.7", "25.3"], loss: "mse" },
    classification: { prompt: "\u6839\u636E\u4F20\u611F\u5668\u6570\u636E\u5224\u65AD\u8BBE\u5907\u662F\u5426\u62A5\u8B66\uFF0C\u6837\u672C\u6807\u7B7E\u4E3A 0 \u6216 1\u3002", labels: ["0", "1", "0", "1"], loss: "cross-entropy" }
  };
  var ObjectiveExercise = class {
    scenario;
    started;
    clock;
    selectedTask = null;
    selectedLoss = null;
    result = null;
    constructor(random = Math.random, clock = Date.now) {
      const value = random();
      if (!Number.isFinite(value) || value < 0 || value >= 1) throw new Error("\u65E0\u6CD5\u751F\u6210\u5B9E\u9A8C\u4EFB\u52A1");
      this.scenario = value < 0.5 ? "regression" : "classification";
      this.clock = clock;
      this.started = clock();
    }
    requireOpen() {
      if (!this.result && this.clock() - this.started >= 18e4) this.finish(true);
      if (this.result) throw new Error("\u672C\u6B65\u9AA4\u5DF2\u7ECF\u5B8C\u6210");
    }
    chooseTask(value) {
      this.requireOpen();
      if (value !== "regression" && value !== "classification") throw new Error("\u4EFB\u52A1\u7C7B\u578B\u65E0\u6548");
      this.selectedTask = value;
    }
    chooseLoss(value) {
      this.requireOpen();
      if (value !== "mse" && value !== "cross-entropy") throw new Error("\u635F\u5931\u51FD\u6570\u65E0\u6548");
      this.selectedLoss = value;
    }
    view() {
      const data = SCENARIOS[this.scenario];
      const elapsed = this.result?.elapsedMs ?? Math.max(0, this.clock() - this.started);
      return { scenario: this.scenario, prompt: data.prompt, labels: data.labels, selectedTask: this.selectedTask, selectedLoss: this.selectedLoss, status: this.result ? "finished" : "answering", remainingMs: Math.max(0, 18e4 - elapsed), result: this.result ? { ...this.result } : null };
    }
    submit() {
      if (this.result) return { ...this.result };
      if (this.clock() - this.started >= 18e4) return this.finish(true);
      if (!this.selectedTask || !this.selectedLoss) throw new Error("\u8BF7\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B\u5E76\u653E\u5165\u4E00\u4E2A\u635F\u5931\u51FD\u6570\u3002");
      return this.finish(false);
    }
    finishIfExpired() {
      return !this.result && this.clock() - this.started >= 18e4 ? this.finish(true) : null;
    }
    finish(expired) {
      const taskCorrect = this.selectedTask === this.scenario, lossCorrect = this.selectedLoss === SCENARIOS[this.scenario].loss;
      this.result = { scenario: this.scenario, selectedTask: this.selectedTask, selectedLoss: this.selectedLoss, taskCorrect, lossCorrect, score: (Number(taskCorrect) + Number(lossCorrect)) * 2.5, expired, elapsedMs: Math.max(0, Math.min(18e4, this.clock() - this.started)) };
      return { ...this.result };
    }
  };

  // assistant/ui/app.ts
  var DISPLAY_PREFERENCE = "ai-neural-lab.tutor-expanded.v1";
  var TUCK_PREFERENCE = "ai-neural-lab.tutor-tucked.v1";
  var CHALLENGE_CARRY = "ai-neural-lab.challenge-carry.v1";
  var OBJECTIVE_GUIDANCE = "\u89C2\u5BDF\u6837\u672C\u6807\u7B7E\uFF0C\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B\uFF0C\u518D\u628A\u5BF9\u5E94\u7684\u635F\u5931\u51FD\u6570\u62D6\u5165\u9EC4\u8272\u6846\u3002";
  function node(tag, className = "", text = "") {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
  }
  function duration(ms) {
    const seconds = Math.max(0, Math.floor(ms / 1e3));
    return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  }
  function dateLabel(value) {
    return new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(value));
  }
  var TutorApp = class {
    root;
    frame;
    restart;
    session = null;
    snapshot = null;
    bridgeStatus = "waiting";
    expanded = false;
    tucked = false;
    tab = "guide";
    voice;
    aiReady = false;
    voiceReady = false;
    chat = [];
    chatRequest = null;
    guideTimer = null;
    agent = new TutorAgent();
    muteKey = "";
    renderKey = "";
    lastSave = 0;
    historyError = false;
    selectedHistory = null;
    quizMode = null;
    spokenSource = "guide";
    trainingPlan = null;
    focusOverlay;
    focusEnabled = true;
    challenge = new Challenge();
    challengeStorage = true;
    objective = null;
    objectiveRequested = false;
    constructor(frame, restart) {
      this.frame = frame;
      this.restart = restart;
      this.root = node("div", "tutor-root");
      this.root.id = "tutor-root";
      this.root.dataset.tab = "guide";
      this.root.innerHTML = `
      <section class="tutor-dock" aria-label="\u60AC\u6D6E\u5B9E\u9A8C\u5BFC\u5E08">
        <button class="dock-face" data-open aria-label="\u5C55\u5F00\u5B9E\u9A8C\u5BFC\u5E08"><img src="${appUrl("assistant/ai-tutor.png")}" alt="AI \u5B9E\u9A8C\u5BFC\u5E08"><span class="voice-orbit"></span></button>
        <button class="dock-content" data-open><span class="dock-eyebrow">AI \u5B9E\u9A8C\u5BFC\u5E08 <span data-connection>\u8FDE\u63A5\u4E2D</span></span><strong data-dock-title>\u4E00\u8D77\u63A2\u7D22\u795E\u7ECF\u7F51\u7EDC</strong><span data-dock-copy>\u5B9E\u9A8C\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u6211\u4F1A\u8DDF\u968F\u4F60\u7684\u6B65\u9AA4\u63D0\u4F9B\u5E2E\u52A9\u3002</span></button>
        <div class="dock-tools"><button data-voice aria-label="\u5F00\u542F\u65C1\u767D">\u266A</button><button data-open aria-label="\u5C55\u5F00\u52A9\u6559\u9762\u677F" title="\u5C55\u5F00\u540E\u4FDD\u6301\u5E38\u5F00\uFF0C\u7531\u4F60\u624B\u52A8\u6536\u8D77">\u2197</button><button data-tuck aria-label="\u5411\u53F3\u6536\u8D77\u5BFC\u5E08" title="\u5411\u53F3\u6536\u8D77\u5BFC\u5E08">\u203A</button><button data-stage-shortcut hidden aria-label="\u5F00\u59CB\u9636\u6BB5\u8BAD\u7EC3" title="\u5F00\u59CB\u9636\u6BB5\u8BAD\u7EC3">\u7EC3</button></div>
      </section>
      <aside class="tutor-panel" hidden aria-label="AI \u5B9E\u9A8C\u5BFC\u5E08\u9762\u677F">
        <header class="tutor-header"><div class="header-face"><img src="${appUrl("assistant/ai-tutor.png")}" alt=""><span class="voice-orbit"></span></div><div class="header-name"><h1>AI \u5B9E\u9A8C\u5BFC\u5E08</h1><p data-status>\u6B63\u5728\u8FDE\u63A5\u5B9E\u9A8C\u2026</p></div><div class="header-tools"><button data-focus-toggle aria-label="\u5173\u95ED\u4F4D\u7F6E\u6307\u5F15" aria-pressed="true" title="\u663E\u793A\u6216\u9690\u85CF\u5F53\u524D\u64CD\u4F5C\u4F4D\u7F6E">\u2316</button><button data-voice aria-label="\u5F00\u542F\u65C1\u767D">\u2669</button><button data-fullscreen aria-label="\u5207\u6362\u5168\u5C4F">\u26F6</button><button data-tuck aria-label="\u5411\u53F3\u6536\u8D77\u5BFC\u5E08" title="\u5411\u53F3\u6536\u8D77\u5BFC\u5E08">\u203A</button><button data-close aria-label="\u6536\u8D77\u52A9\u6559" title="\u6536\u8D77\u540E\u4FDD\u6301\u6298\u53E0\uFF0C\u7531\u4F60\u624B\u52A8\u5C55\u5F00">\xD7</button></div></header>
        <nav class="tutor-tabs" role="tablist" aria-label="\u52A9\u6559\u529F\u80FD"><button role="tab" aria-selected="true" data-tab="guide">\u5F15\u5BFC</button><button role="tab" aria-selected="false" data-tab="chat">\u95EE\u7B54</button><button role="tab" aria-selected="false" data-tab="record">\u8BB0\u5F55</button></nav>
        <div class="tutor-notice" role="status" hidden></div>
        <section data-page="guide" class="tutor-page guide-page">
          <div class="task-heading"><span class="eyebrow" data-module>\u5F53\u524D\u4EFB\u52A1</span><span class="live-mark" data-live>\u7B49\u5F85\u5B9E\u9A8C</span></div><p class="challenge-status" data-challenge hidden></p>
          <h2 data-task-title>\u4E00\u8D77\u63A2\u7D22\u795E\u7ECF\u7F51\u7EDC</h2>
          <div class="narration-card" aria-live="polite"><div class="narration-label"><span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span data-caption-state>\u5BFC\u5E08\u63D0\u793A</span></div><p data-hint></p><span data-feedback-score hidden></span></div>
          <div class="guide-actions"><button class="primary" data-help="hint">\u7ED9\u6211\u63D0\u793A</button><button data-replay>\u91CD\u64AD</button><button data-chat-open>\u5411\u5BFC\u5E08\u63D0\u95EE</button></div>
          <button class="training-entry primary" data-stage-entry hidden></button><button class="training-entry" data-prestudy hidden>\u5F00\u59CB\u9884\u4E60\u68C0\u6D4B</button>
        </section>
        <section data-page="chat" class="tutor-page chat-page" hidden>
          <div class="chat-context"><span>\u5F53\u524D\u4E0A\u4E0B\u6587</span><strong data-chat-context>\u8BFE\u7A0B\u6982\u89C8</strong></div>
          <p class="service-status" data-service>\u6B63\u5728\u68C0\u67E5\u95EE\u7B54\u670D\u52A1\u2026</p>
          <details class="chat-suggestions" open><summary>\u56F4\u7ED5\u8FD9\u4E00\u6B65\u63D0\u95EE</summary><div class="help-actions"><button data-explain="principle">\u8BB2\u89E3\u539F\u7406</button><button data-explain="example">\u770B\u4E2A\u4F8B\u5B50</button></div><div class="suggested-questions"></div></details>
          <div class="chat-messages" role="log" aria-label="\u4E0E\u5BFC\u5E08\u7684\u5BF9\u8BDD"><div class="chat-empty"><span class="empty-symbol">\u2726</span><h2>\u628A\u4E0D\u660E\u767D\u7684\u5730\u65B9\u8BF4\u51FA\u6765</h2><p>\u6211\u4F1A\u7ED3\u5408\u5F53\u524D\u6B65\u9AA4\u548C\u8F93\u5165\uFF0C\u966A\u4F60\u4E00\u8D77\u7406\u6E05\u601D\u8DEF\u3002</p></div></div>
          <form class="chat-form"><label for="tutor-question">\u4F60\u7684\u95EE\u9898</label><textarea id="tutor-question" placeholder="\u4F8B\u5982\uFF1A\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u8981\u52A0\u504F\u7F6E\uFF1F" maxlength="1200" rows="3"></textarea><div class="composer-actions"><span data-chat-state>\u4EC5\u5728\u4F60\u63D0\u95EE\u65F6\u8C03\u7528\u95EE\u7B54\u670D\u52A1</span><button type="button" data-stop hidden>\u505C\u6B62\u751F\u6210</button><button class="primary" type="submit" data-send>\u53D1\u9001 \u2191</button></div></form>
        </section>
        <section data-page="record" class="tutor-page record-page" hidden>
          <div class="section-heading"><h2>\u5B66\u4E60\u8BB0\u5F55</h2><select data-history aria-label="\u9009\u62E9\u7EC3\u4E60\u8BB0\u5F55"><option value="current">\u672C\u6B21\u7EC3\u4E60</option></select></div>
          <p class="quiet" data-record-caption>\u81EA\u52A8\u8BB0\u5F55\u771F\u5B9E\u5B9E\u9A8C\u6821\u9A8C\uFF0C\u4FDD\u5B58\u5728\u672C\u673A\u3002</p>
          <div class="metrics"><div><span>\u6821\u9A8C\u901A\u8FC7</span><strong data-metric-checks>0 / 0</strong></div><div><span>\u7EC3\u4E60\u79EF\u5206</span><strong data-metric-points>0</strong></div><div><span>\u5B9E\u9A8C\u7528\u65F6</span><strong data-metric-time>00:00</strong></div></div>
          <p class="quiet" data-accuracy></p>
          <p class="challenge-record" data-challenge-record></p>
          <div class="score-list"></div><div class="study-summary"><span data-read-pages>\u8BFE\u4EF6\u9605\u8BFB 0 / 37</span><span data-quiz-score>\u77E5\u8BC6\u81EA\u6D4B\uFF1A\u672A\u5B8C\u6210</span></div>
          <div class="training-records"></div><p class="objective-record" data-objective-record hidden></p>
          <p class="review-advice" data-review></p><details class="learning-evidence"><summary>\u67E5\u770B\u5B66\u4E60\u8FC7\u7A0B</summary><div data-learning-evidence></div></details><div class="native-report" data-native-report hidden></div>
          <details class="record-rules"><summary>\u8FD9\u4E9B\u6570\u636E\u600E\u6837\u8BA1\u7B97\uFF1F</summary><p>\u7B54\u9898\u51C6\u786E\u7387\u6309\u63D0\u4EA4\u6B21\u6570\u7EDF\u8BA1\uFF0C\u5305\u542B\u91CD\u8BD5\uFF1B\u81EA\u52A8\u5B8C\u6210\u7684\u6B65\u9AA4\u548C\u62D6\u653E\u53E6\u884C\u8BB0\u5F55\u3002\u6BCF\u9879\u4EFB\u52A1\u9996\u6B21\u5B8C\u6210\u5956\u52B1 1 \u70B9\u3002\u9884\u4E60\u68C0\u6D4B\u3001\u9636\u6BB5\u8BAD\u7EC3\u548C\u5B9E\u9A8C\u6210\u7EE9\u5206\u522B\u5C55\u793A\u3002\u9996\u6B21\u72EC\u7ACB\u901A\u8FC7\u6307\u9996\u6B21\u63D0\u4EA4\u6B63\u786E\u4E14\u6B64\u524D\u672A\u6C42\u52A9\u3002\u6A21\u5757\u5B8C\u6210\u6216\u79BB\u5F00\u540E\u505C\u6B62\u7D2F\u8BA1\u64CD\u4F5C\u7528\u65F6\u3002</p></details>
          <h3 class="journal-title">\u64CD\u4F5C\u56DE\u987E</h3><ol class="journal"></ol><div class="record-actions"><button class="primary" data-export>\u5BFC\u51FA\u672C\u6B21\u8BB0\u5F55</button><button data-restart>\u91CD\u65B0\u5F00\u59CB\u5B9E\u9A8C</button></div>
        </section>
        <section data-page="quiz" class="tutor-page quiz-page" hidden><button class="quiz-back" data-quiz-back>\u2190 \u8FD4\u56DE\u5F15\u5BFC</button><div class="section-heading"><h2 data-quiz-title>\u9636\u6BB5\u8BAD\u7EC3</h2><span class="small-badge" data-quiz-badge></span></div><p class="quiet" data-quiz-intro></p><form class="quiz-form"><div class="quiz-questions"></div><div class="quiz-result" aria-live="polite" hidden></div><button type="submit" class="primary" data-quiz-submit>\u63D0\u4EA4\u7B54\u6848</button><button type="button" data-quiz-retry hidden>\u518D\u7EC3\u4E00\u6B21</button><button type="button" data-quiz-continue hidden>\u5B8C\u6210\u8BAD\u7EC3\uFF0C\u7EE7\u7EED\u5B9E\u9A8C</button></form></section>
      </aside>
      <button class="tutor-restore" data-restore hidden aria-label="\u5C55\u5F00\u5DF2\u6536\u8D77\u7684\u5BFC\u5E08" title="\u5C55\u5F00\u5BFC\u5E08">\u2039</button>
      <div class="native-formula-fix" data-native-formula hidden aria-hidden="true">1. \u2202E/\u2202out h1 = (\u2202Eo1/\u2202net o1) \xD7 w(h1\u2192o1) + (\u2202Eo2/\u2202net o2) \xD7 w(h1\u2192o2)</div>
      <dialog class="restart-dialog"><h2>\u91CD\u65B0\u5F00\u59CB\u672C\u8F6E\u5B9E\u9A8C\uFF1F</h2><p>\u539F\u5B9E\u9A8C\u4F1A\u56DE\u5230\u5165\u53E3\u3002\u5F53\u524D\u5B66\u4E60\u8BB0\u5F55\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u53EF\u4EE5\u5728\u8BB0\u5F55\u9762\u677F\u4E2D\u67E5\u770B\u3002</p><div><button data-cancel-restart>\u7EE7\u7EED\u5F53\u524D\u5B9E\u9A8C</button><button class="primary" data-confirm-restart>\u4FDD\u5B58\u8BB0\u5F55\u5E76\u91CD\u65B0\u5F00\u59CB</button></div></dialog>
      <dialog class="restart-dialog challenge-dialog"><h2 data-challenge-title>\u672C\u8F6E\u9650\u65F6\u6311\u6218\u5DF2\u7ED3\u675F</h2><p data-challenge-message></p><div><button data-review-challenge>\u4FDD\u7559\u7ED3\u679C\uFF0C\u7EE7\u7EED\u590D\u76D8</button><button class="primary" data-retry-challenge>\u4FDD\u5B58\u5E76\u91CD\u65B0\u5B9E\u9A8C</button></div></dialog>
      <div class="objective-viewport" hidden>
        <div class="objective-blocker" aria-hidden="true"></div>
        <section class="objective-sheet" aria-labelledby="objective-title">
          <div class="objective-heading"><span class="objective-tag">\u4EFB\u52A1\u5339\u914D</span><h2 id="objective-title">\u4EFB\u52A1\u4E0E\u635F\u5931\u51FD\u6570\u5339\u914D</h2><strong data-objective-time>03:00</strong></div>
          <div class="objective-scenario"><span class="objective-label">\u89C2\u5BDF\u6837\u672C</span><p data-objective-prompt></p><div class="objective-samples" data-objective-samples></div></div>
          <fieldset class="objective-row"><legend>1. \u6839\u636E\u6837\u672C\u6807\u7B7E\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B</legend><span class="objective-label">\u4EFB\u52A1\u7C7B\u578B</span><div class="objective-choices"><label><input type="radio" name="objective-task" value="regression"> \u56DE\u5F52</label><label><input type="radio" name="objective-task" value="classification"> \u4E8C\u5206\u7C7B</label></div></fieldset>
          <fieldset class="objective-row objective-loss-row"><legend>2. \u628A\u5BF9\u5E94\u635F\u5931\u51FD\u6570\u62D6\u5165\u5339\u914D\u533A</legend><span class="objective-label">\u635F\u5931\u51FD\u6570</span><div class="objective-options"><button type="button" draggable="true" data-objective-loss="mse">\u5747\u65B9\u8BEF\u5DEE MSE</button><button type="button" draggable="true" data-objective-loss="cross-entropy">\u4EA4\u53C9\u71B5</button></div><div class="objective-drop" data-objective-drop tabindex="0">\u62D6\u5165\u6216\u70B9\u51FB\u9009\u62E9</div></fieldset>
          <div class="objective-footer"><p data-objective-feedback role="status">\u4E24\u9879\u5404 2.5 \u5206\uFF0C\u5171 5 \u5206\u3002</p><button type="button" class="primary" data-objective-submit aria-label="\u63D0\u4EA4\u5339\u914D\u5E76\u4FEE\u590D">\u63D0\u4EA4\u5339\u914D</button><button type="button" class="primary" data-objective-continue hidden>\u7EE7\u7EED\u5B9E\u9A8C</button></div>
        </section>
      </div>`;
      document.body.append(this.root);
      this.voice = new TutorVoice(() => this.renderVoice());
      this.focusOverlay = new FocusOverlay(frame);
      this.installEvents();
      new ResizeObserver(() => this.positionObjective()).observe(frame);
      try {
        this.tucked = localStorage.getItem(TUCK_PREFERENCE) === "true";
        this.expand(localStorage.getItem(DISPLAY_PREFERENCE) === "true", false);
      } catch {
        this.notice("\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u663E\u793A\u504F\u597D\uFF0C\u4ECD\u53EF\u624B\u52A8\u5C55\u5F00\u6216\u6536\u8D77\u3002");
      }
      try {
        const raw = sessionStorage.getItem(CHALLENGE_CARRY);
        if (raw) {
          const carry = JSON.parse(raw);
          if (typeof carry.source !== "string" || !Number.isInteger(carry.attempt) || carry.attempt < 1 || !Number.isInteger(carry.failures) || carry.failures < 0) throw new Error();
          this.challenge = new Challenge(() => Date.now(), carry);
        }
      } catch {
        this.challengeStorage = false;
        this.notice("\u672C\u673A\u6311\u6218\u8F6E\u6B21\u8BB0\u5F55\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u672C\u8F6E\u5C06\u5355\u72EC\u8BB0\u5F55\u3002");
      }
      try {
        readHistory(localStorage);
      } catch {
        this.historyError = true;
        this.notice("\u5DF2\u6709\u5B66\u4E60\u8BB0\u5F55\u65E0\u6CD5\u8BFB\u53D6\uFF1B\u5F53\u524D\u5B9E\u9A8C\u4ECD\u53EF\u4F7F\u7528\uFF0C\u8BF7\u5148\u4FDD\u7559\u5E76\u68C0\u67E5\u672C\u673A\u8BB0\u5F55\u3002");
      }
      window.addEventListener("message", (event) => this.receive(event));
      window.addEventListener("pagehide", () => this.persist());
      window.setInterval(() => {
        if (this.session) {
          this.updateObjective();
          this.syncChallenge();
          this.renderMetrics();
          if (Date.now() - this.lastSave > 5e3) this.persist();
        }
      }, 1e3);
      window.CourseTutorHost = { toggleFullscreen: () => {
        void this.toggleFullscreen();
      }, debug: () => ({ bridge: this.bridgeStatus, snapshot: this.snapshot, session: this.session?.view(), aiReady: this.aiReady, voiceReady: this.voiceReady, voice: { enabled: this.voice.enabled, state: this.voice.state, error: this.voice.error }, chat: this.chat }) };
      void this.health();
    }
    element(selector) {
      const result = this.root.querySelector(selector);
      if (!result) throw new Error(`Missing tutor element ${selector}`);
      return result;
    }
    text(selector, text) {
      this.element(selector).textContent = text;
    }
    notice(message) {
      const notice = this.element(".tutor-notice");
      notice.textContent = message;
      notice.hidden = !message;
    }
    installEvents() {
      this.root.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => this.expand(true)));
      this.element("[data-close]").addEventListener("click", () => this.expand(false));
      this.root.querySelectorAll("[data-tuck]").forEach((button) => button.addEventListener("click", () => this.tuck(true)));
      this.element("[data-restore]").addEventListener("click", () => this.tuck(false));
      this.root.querySelectorAll("[data-voice]").forEach((button) => button.addEventListener("click", () => this.toggleVoice()));
      this.element("[data-replay]").addEventListener("click", () => {
        if (this.voice.state === "speaking" || this.voice.state === "loading") {
          this.voice.stop();
          return;
        }
        if (!this.voice.enabled || this.voice.state === "blocked") this.voice.enabled = true;
        this.playCurrent();
      });
      this.element("[data-focus-toggle]").addEventListener("click", () => {
        this.focusEnabled = !this.focusEnabled;
        this.focusOverlay.setEnabled(this.focusEnabled);
        this.element("[data-focus-toggle]").setAttribute("aria-pressed", String(this.focusEnabled));
        this.element("[data-focus-toggle]").setAttribute("aria-label", this.focusEnabled ? "\u5173\u95ED\u4F4D\u7F6E\u6307\u5F15" : "\u5F00\u542F\u4F4D\u7F6E\u6307\u5F15");
      });
      this.element("[data-chat-open]").addEventListener("click", () => {
        this.selectTab("chat");
        this.element("#tutor-question").focus();
      });
      this.root.querySelectorAll("[data-help]").forEach((button) => button.addEventListener("click", () => {
        if (this.objective?.view().status === "answering") {
          this.text("[data-hint]", OBJECTIVE_GUIDANCE);
          this.text("[data-dock-copy]", OBJECTIVE_GUIDANCE);
          return;
        }
        this.session?.requestHelp("hint");
        const message = this.agent.help("hint", this.session?.view(), this.snapshot ?? void 0);
        if (message) this.presentMessage(message, true);
        this.persist();
      }));
      this.root.querySelectorAll("[data-explain]").forEach((button) => button.addEventListener("click", () => this.localExplanation(button.dataset.explain)));
      this.root.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => this.selectTab(button.dataset.tab)));
      this.element(".chat-form").addEventListener("submit", (event) => {
        event.preventDefault();
        void this.ask();
      });
      this.element("#tutor-question").addEventListener("keydown", (event) => {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          void this.ask();
        }
      });
      this.element("[data-stop]").addEventListener("click", () => {
        this.chatRequest?.abort();
        this.voice.stop();
      });
      this.element(".quiz-form").addEventListener("submit", (event) => {
        event.preventDefault();
        this.submitQuiz();
      });
      this.element("[data-prestudy]").addEventListener("click", () => this.openQuiz("prestudy"));
      this.element("[data-stage-entry]").addEventListener("click", () => this.openQuiz(Number(this.element("[data-stage-entry]").dataset.module)));
      this.element("[data-stage-shortcut]").addEventListener("click", () => this.openQuiz(Number(this.element("[data-stage-entry]").dataset.module)));
      this.element("[data-quiz-back]").addEventListener("click", () => this.selectTab("guide"));
      this.element("[data-quiz-retry]").addEventListener("click", () => {
        if (this.quizMode !== null) this.openQuiz(this.quizMode);
      });
      this.element("[data-quiz-continue]").addEventListener("click", () => {
        this.voice.stop();
        this.selectTab("guide");
      });
      this.element("[data-history]").addEventListener("change", () => this.selectHistory());
      this.element("[data-export]").addEventListener("click", () => this.exportRecord());
      this.element("[data-fullscreen]").addEventListener("click", () => {
        void this.toggleFullscreen();
      });
      this.element("[data-restart]").addEventListener("click", () => this.element(".restart-dialog").showModal());
      this.element("[data-cancel-restart]").addEventListener("click", () => this.element(".restart-dialog").close());
      this.element("[data-confirm-restart]").addEventListener("click", () => this.restartAttempt());
      this.element("[data-retry-challenge]").addEventListener("click", () => this.restartAttempt());
      this.element("[data-review-challenge]").addEventListener("click", () => {
        this.challenge.review();
        this.syncChallenge();
        this.persist();
      });
      this.element(".challenge-dialog").addEventListener("cancel", (event) => event.preventDefault());
      this.root.querySelectorAll('[name="objective-task"]').forEach((input) => input.addEventListener("change", () => {
        if (input.checked) {
          try {
            this.objective?.chooseTask(input.value);
          } catch {
            this.updateObjective();
          }
        }
      }));
      this.root.querySelectorAll("[data-objective-loss]").forEach((button) => {
        button.addEventListener("click", () => this.chooseObjectiveLoss(button.dataset.objectiveLoss));
        button.addEventListener("dragstart", (event) => event.dataTransfer?.setData("text/plain", button.dataset.objectiveLoss ?? ""));
      });
      const drop = this.element("[data-objective-drop]");
      drop.addEventListener("dragover", (event) => event.preventDefault());
      drop.addEventListener("drop", (event) => {
        event.preventDefault();
        const value = event.dataTransfer?.getData("text/plain");
        if (value === "mse" || value === "cross-entropy") this.chooseObjectiveLoss(value);
      });
      this.element("[data-objective-submit]").addEventListener("click", () => this.submitObjective());
      this.element("[data-objective-continue]").addEventListener("click", () => this.continueObjective());
      this.element(".objective-viewport").addEventListener("wheel", (event) => {
        const canvas = this.frame.contentDocument?.querySelector("canvas");
        if (!canvas) return;
        const height = canvas.getBoundingClientRect().height;
        if (height <= 0) return;
        const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? height : 1;
        event.preventDefault();
        this.frame.contentWindow?.postMessage({ channel: "neural-lab-tutor", kind: "objective-scroll", delta: event.deltaY * scale / height }, location.origin);
      }, { passive: false });
    }
    expand(value, remember = true) {
      this.expanded = value;
      this.displayTutor();
      if (remember) {
        try {
          localStorage.setItem(DISPLAY_PREFERENCE, String(value));
        } catch {
          this.notice("\u5F53\u524D\u663E\u793A\u72B6\u6001\u5DF2\u5207\u6362\uFF0C\u4F46\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u6B64\u504F\u597D\u3002");
        }
      }
      if (value && this.tab === "record") this.renderRecord();
    }
    tuck(value) {
      this.tucked = value;
      this.displayTutor();
      try {
        localStorage.setItem(TUCK_PREFERENCE, String(value));
      } catch {
        this.notice("\u5F53\u524D\u663E\u793A\u72B6\u6001\u5DF2\u5207\u6362\uFF0C\u4F46\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u6B64\u504F\u597D\u3002");
      }
      if (!value && this.expanded && this.tab === "record") this.renderRecord();
    }
    displayTutor() {
      this.element(".tutor-panel").hidden = this.tucked || !this.expanded;
      this.element(".tutor-dock").hidden = this.tucked || this.expanded;
      this.element("[data-restore]").hidden = !this.tucked;
      this.root.querySelectorAll("[data-open]").forEach((button) => button.setAttribute("aria-expanded", String(this.expanded && !this.tucked)));
    }
    selectTab(tab) {
      this.tab = tab;
      this.root.dataset.tab = tab;
      if (tab === "guide") this.focusOverlay.clear();
      this.root.querySelectorAll("[data-page]").forEach((page) => {
        page.hidden = page.dataset.page !== tab;
      });
      this.root.querySelectorAll("[data-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.tab === tab)));
      if (tab === "record") {
        this.selectedHistory = null;
        this.fillHistory();
        this.renderRecord();
      }
    }
    async toggleFullscreen() {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
      } catch {
        this.notice("\u672C\u6B21\u5168\u5C4F\u8BF7\u6C42\u6CA1\u6709\u5B8C\u6210\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u3002");
      }
    }
    receive(event) {
      if (event.source !== this.frame.contentWindow || event.origin !== location.origin || event.data?.channel !== "neural-lab-tutor") return;
      const message = event.data;
      if (message.kind === "voice-error") {
        this.voice.disable();
        this.notice("\u539F\u5B9E\u9A8C\u8BED\u97F3\u6682\u65F6\u65E0\u6CD5\u534F\u8C03\uFF0C\u5DF2\u505C\u6B62\u52A9\u6559\u65C1\u767D\uFF1B\u5B57\u5E55\u4ECD\u53EF\u4F7F\u7528\u3002");
        return;
      }
      if (message.kind === "objective-area" && message.sourceSession === this.snapshot?.sourceSession && this.snapshot?.module === 4 && this.objective) {
        this.snapshot = { ...this.snapshot, objectiveArea: message.area };
        this.positionObjective();
        return;
      }
      if (message.kind === "state" && message.snapshot && typeof message.snapshot.sourceSession === "string") {
        this.bridgeStatus = message.status;
        this.setSession(message.snapshot.sourceSession);
        this.snapshot = message.snapshot;
        if (message.status === "connected") {
          this.session.observe(message.snapshot);
          this.challenge.observe(message.snapshot);
        }
        if (message.status === "error") this.challenge.interrupt();
        if (message.status === "error") this.notice("\u5B9E\u9A8C\u8FDB\u5EA6\u8FDE\u63A5\u4E2D\u65AD\u3002\u8BF7\u5148\u5BFC\u51FA\u5B66\u4E60\u8BB0\u5F55\uFF0C\u518D\u91CD\u65B0\u6253\u5F00\u5B9E\u9A8C\uFF1B\u5F53\u524D\u63D0\u793A\u53EF\u80FD\u4E0D\u662F\u6700\u65B0\u6B65\u9AA4\u3002");
        this.syncChallenge();
        this.maybeStartObjective();
        this.positionObjective();
        this.render();
        this.renderVoice();
      } else if (message.kind === "call" && message.call?.snapshot?.sourceSession) {
        this.setSession(message.call.snapshot.sourceSession);
        this.snapshot = message.call.snapshot;
        this.session.nativeCall(message.call);
        this.challenge.observe(message.call.snapshot);
        this.syncChallenge();
        this.maybeStartObjective();
        this.positionObjective();
        this.render();
        this.persist();
      }
    }
    setSession(id) {
      if (this.session?.id === id) return;
      if (this.session) this.persist();
      this.chatRequest?.abort();
      if (this.guideTimer !== null) window.clearTimeout(this.guideTimer);
      this.guideTimer = null;
      this.voice.stop();
      this.session = new LearningSession(id);
      this.agent = new TutorAgent();
      this.renderKey = "";
      this.muteKey = "";
      this.selectedHistory = null;
      this.quizMode = null;
      this.trainingPlan = null;
      this.objective = null;
      this.objectiveRequested = false;
      this.element(".objective-viewport").hidden = true;
      if (this.tab === "quiz") this.selectTab("guide");
      this.challenge.attach(id);
      this.focusOverlay.clear();
    }
    maybeStartObjective() {
      const snapshot = this.snapshot, challenge = this.challenge.view();
      if (!this.session || this.objective || !snapshot || snapshot.mode !== "experiment" || snapshot.module !== 4 || !Array.isArray(snapshot.values.repaired) || snapshot.values.repaired[0] !== true) return;
      if (challenge.status === "failed" && !challenge.reviewing) return;
      if (!this.objectiveRequested) {
        this.objectiveRequested = true;
        this.challenge.pause();
        this.syncChallenge();
        this.frame.contentWindow?.postMessage({ channel: "neural-lab-tutor", kind: "objective-open" }, location.origin);
        return;
      }
      if (!snapshot.objectiveArea) return;
      this.objective = new ObjectiveExercise();
      this.renderKey = "";
      this.voice.stop();
      this.root.querySelectorAll(".objective-sheet fieldset").forEach((fieldset) => fieldset.disabled = false);
      this.root.querySelectorAll('[name="objective-task"]').forEach((input) => input.checked = false);
      this.root.querySelectorAll("[data-objective-loss]").forEach((button) => button.setAttribute("aria-pressed", "false"));
      this.text("[data-objective-drop]", "\u5C06\u635F\u5931\u51FD\u6570\u62D6\u5230\u8FD9\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u70B9\u51FB\u9009\u53D6");
      this.element("[data-objective-submit]").hidden = false;
      this.element("[data-objective-continue]").hidden = true;
      const view = this.objective.view();
      this.text("[data-objective-prompt]", view.prompt);
      const samples = this.element("[data-objective-samples]");
      samples.replaceChildren(...view.labels.map((value) => node("span", "", value)));
      this.text("[data-objective-feedback]", "\u4E24\u9879\u5404 2.5 \u5206\uFF0C\u5171 5 \u5206\u3002");
      this.updateObjective();
    }
    positionObjective() {
      const viewport = this.element(".objective-viewport"), area = this.snapshot?.objectiveArea;
      const canvas = this.frame.contentDocument?.querySelector("canvas");
      if (!this.objective || this.snapshot?.module !== 4 || this.snapshot.mode !== "experiment" || !area || !canvas) {
        viewport.hidden = true;
        return;
      }
      const frame = this.frame.getBoundingClientRect(), box = canvas.getBoundingClientRect(), clip = area.viewport, question = area.question;
      if (box.width <= 0 || box.height <= 0) {
        viewport.hidden = true;
        return;
      }
      viewport.hidden = false;
      Object.assign(viewport.style, { left: `${frame.left + box.left + clip.x * box.width}px`, top: `${frame.top + box.top + clip.y * box.height}px`, width: `${clip.width * box.width}px`, height: `${clip.height * box.height}px` });
      const sheet = this.element(".objective-sheet");
      Object.assign(sheet.style, { left: `${(question.x - clip.x) * box.width}px`, top: `${(question.y - clip.y) * box.height}px`, width: `${question.width * box.width}px`, height: `${question.height * box.height}px` });
      const blocker = this.element(".objective-blocker"), height = clip.height * box.height;
      blocker.hidden = this.objective.view().status !== "answering";
      const start = Math.max(0, Math.min(height, (question.y + question.height - clip.y) * box.height));
      Object.assign(blocker.style, { top: `${start}px`, height: `${height - start}px` });
    }
    chooseObjectiveLoss(value) {
      if (!this.objective || this.objective.view().status !== "answering") return;
      try {
        this.objective.chooseLoss(value);
      } catch {
        this.updateObjective();
        return;
      }
      this.text("[data-objective-drop]", value === "mse" ? "\u5DF2\u653E\u5165\uFF1A\u5747\u65B9\u8BEF\u5DEE MSE" : "\u5DF2\u653E\u5165\uFF1A\u4EA4\u53C9\u71B5");
      this.root.querySelectorAll("[data-objective-loss]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.objectiveLoss === value)));
    }
    updateObjective() {
      if (!this.objective) return;
      const result = this.objective.finishIfExpired() ?? (!this.session?.view().objectiveResult ? this.objective.view().result : null);
      if (result) this.finishObjective(result);
      this.text("[data-objective-time]", duration(this.objective.view().remainingMs));
    }
    submitObjective() {
      if (!this.objective) return;
      try {
        this.finishObjective(this.objective.submit());
      } catch (error) {
        this.text("[data-objective-feedback]", error instanceof Error ? error.message : "\u8BF7\u5B8C\u6210\u4E24\u9879\u9009\u62E9\u3002");
      }
    }
    finishObjective(result) {
      this.session?.recordObjective(result);
      this.persist();
      const task = result.scenario === "regression" ? "\u56DE\u5F52" : "\u4E8C\u5206\u7C7B", loss = result.scenario === "regression" ? "\u5747\u65B9\u8BEF\u5DEE MSE" : "\u4EA4\u53C9\u71B5";
      this.text("[data-objective-feedback]", `${result.expired ? "\u65F6\u95F4\u5230\u3002" : ""}\u5F97\u5206 ${result.score}/5\u3002\u4EFB\u52A1\u7C7B\u578B${result.taskCorrect ? "\u6B63\u786E" : "\u9700\u4FEE\u6B63"}\uFF0C\u635F\u5931\u51FD\u6570${result.lossCorrect ? "\u6B63\u786E" : "\u9700\u4FEE\u6B63"}\u3002\u672C\u9898\u4E3A${task}\u4EFB\u52A1\uFF0C\u5339\u914D${loss}\u3002`);
      this.root.querySelectorAll(".objective-sheet fieldset").forEach((fieldset) => fieldset.disabled = true);
      this.element("[data-objective-submit]").hidden = true;
      this.element("[data-objective-continue]").hidden = false;
      this.challenge.resume();
      if (this.snapshot) this.challenge.observe(this.snapshot);
      this.syncChallenge();
      this.renderKey = "";
      this.positionObjective();
      const previous = this.agent.replay();
      if (previous) this.presentMessage(previous, false);
      this.render();
    }
    continueObjective() {
      if (this.objective?.view().status !== "finished") return;
      this.frame.contentWindow?.postMessage({ channel: "neural-lab-tutor", kind: "objective-continue" }, location.origin);
    }
    render() {
      if (!this.session) return;
      const view = this.session.view(), step2 = view.step;
      const matching = this.objective?.view().status === "answering" && this.snapshot?.module === 4;
      this.renderNativeFormula();
      if (!matching && this.snapshot && this.bridgeStatus === "connected") this.focusOverlay.update(this.snapshot, view);
      else this.focusOverlay.clear();
      const message = !matching && this.bridgeStatus === "connected" && this.snapshot ? this.agent.observe(view, this.snapshot) : null;
      const key = JSON.stringify({ step: step2.id, feedback: view.feedback?.id, help: view.learning.helpRequests, completed: view.completedModules, training: view.stageTraining.map((item) => item.attempts.length), canPrestudy: view.canPrestudy, availableTraining: view.availableTraining, status: this.bridgeStatus });
      const changed = key !== this.renderKey;
      if (changed) {
        this.renderKey = key;
        const connection = this.bridgeStatus === "connected" ? "\u8DDF\u968F\u4E2D" : this.bridgeStatus === "error" ? "\u8FDE\u63A5\u5F02\u5E38" : "\u8FDE\u63A5\u4E2D";
        this.text("[data-connection]", connection);
        this.text("[data-status]", this.bridgeStatus === "connected" ? "\u5B9E\u65F6\u8DDF\u968F\u4F60\u7684\u5B9E\u9A8C" : "\u6B63\u5728\u8FDE\u63A5\u5B9E\u9A8C\u72B6\u6001\u2026");
        this.text("[data-live]", this.snapshot?.mode === "preview" ? `\u8BFE\u4EF6 ${this.snapshot.previewPage} / 37` : connection);
        this.text("[data-module]", step2.module ? `\u6A21\u5757 ${step2.module} \xB7 ${MODULES[step2.module - 1].title}` : "\u5B66\u4E60\u5BFC\u822A");
        this.text("[data-task-title]", step2.title);
        this.text("[data-dock-title]", step2.title);
        this.text("[data-chat-context]", step2.title);
        const questions = this.element(".suggested-questions");
        questions.replaceChildren();
        for (const question of step2.questions) {
          const button = node("button", "question-chip", question + " \u2197");
          button.type = "button";
          button.addEventListener("click", () => {
            this.selectTab("chat");
            this.element("#tutor-question").value = question;
            this.element("#tutor-question").focus();
          });
          questions.append(button);
        }
        const pending = suggestTraining(view.availableTraining, view.stageTraining, step2.id.startsWith("complete.") ? step2.module : null);
        const entry = this.element("[data-stage-entry]");
        entry.hidden = pending === void 0;
        if (pending !== void 0) {
          entry.dataset.module = String(pending);
          entry.textContent = `\u5F00\u59CB${MODULES[pending - 1].title}\u9636\u6BB5\u8BAD\u7EC3 \xB7 2 \u9898`;
        }
        this.element("[data-stage-shortcut]").hidden = pending === void 0;
        this.element("[data-prestudy]").hidden = !view.canPrestudy;
        if (this.tab === "quiz" && (this.quizMode === "prestudy" ? !view.canPrestudy : !view.availableTraining.includes(this.quizMode ?? 0))) this.selectTab("guide");
      }
      if (matching) {
        this.text("[data-task-title]", "\u5339\u914D\u4EFB\u52A1\u4E0E\u635F\u5931\u51FD\u6570");
        this.text("[data-dock-title]", "\u5339\u914D\u4EFB\u52A1\u4E0E\u635F\u5931\u51FD\u6570");
        this.text("[data-hint]", OBJECTIVE_GUIDANCE);
        this.text("[data-dock-copy]", OBJECTIVE_GUIDANCE);
        this.text("[data-caption-state]", "\u5F53\u524D\u4EFB\u52A1");
        this.root.dataset.feedback = "normal";
        this.element("[data-feedback-score]").hidden = true;
      } else if (message) this.presentMessage(message, true);
      this.renderMetrics();
      if (changed && this.tab === "record" && this.expanded) this.renderRecord();
    }
    renderNativeFormula() {
      const element = this.element("[data-native-formula]"), snapshot = this.snapshot;
      const anchor = snapshot?.module === 4 ? snapshot.anchors?.find((item) => item.id === "m4.updated.0") : void 0;
      if (!anchor) {
        element.hidden = true;
        return;
      }
      const frame = this.frame.getBoundingClientRect(), left = anchor.x - anchor.width * 1.13, top = anchor.y - anchor.height * 1.95;
      if (top < 0.13 || top + anchor.height * 1.7 > 1) {
        element.hidden = true;
        return;
      }
      element.hidden = false;
      element.style.left = `${frame.left + left * frame.width}px`;
      element.style.top = `${frame.top + top * frame.height}px`;
      element.style.width = `${anchor.width * 6.6 * frame.width}px`;
      element.style.height = `${anchor.height * 1.7 * frame.height}px`;
      element.style.fontSize = `${Math.max(10, Math.min(18, anchor.height * frame.height * 0.52))}px`;
    }
    presentMessage(message, automatic) {
      this.text("[data-hint]", message.text);
      this.text("[data-dock-copy]", message.text);
      this.text("[data-caption-state]", message.label);
      this.root.dataset.agent = message.kind;
      const feedback = message.kind === "feedback" ? this.session?.view().feedback : null;
      this.root.dataset.feedback = feedback?.kind ?? "normal";
      const score = this.element("[data-feedback-score]"), parts = [];
      if (feedback?.pointsEarned) parts.push(`\u7EC3\u4E60\u79EF\u5206 +${feedback.pointsEarned}`);
      if (feedback?.nativeScore != null) parts.push(`\u539F\u5B9E\u9A8C ${feedback.nativeScore} \u5206${feedback.nativeDelta ? `\uFF08${feedback.nativeDelta > 0 ? "+" : ""}${feedback.nativeDelta}\uFF09` : ""}`);
      score.hidden = !parts.length;
      score.textContent = parts.join(" \xB7 ");
      if (message.supportLevel && message.supportFor) this.session?.recordSupport(message.supportFor, message.supportLevel);
      if (this.guideTimer !== null) window.clearTimeout(this.guideTimer);
      const inDialogue = this.expanded && this.tab === "chat";
      if (inDialogue) return;
      this.voice.stop();
      if (automatic && message.speak && this.voice.enabled && !this.chatRequest && this.tab !== "quiz") this.guideTimer = window.setTimeout(() => this.playCurrent(), 250);
    }
    renderMetrics() {
      const view = this.session?.view();
      if (!view) return;
      if (this.tab === "record" && !this.selectedHistory) {
        this.text("[data-metric-time]", duration(view.elapsedMs));
      }
    }
    restartAttempt() {
      this.persist();
      this.voice.stop();
      this.chatRequest?.abort();
      this.focusOverlay.clear();
      this.root.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
      this.restart();
    }
    syncChallenge() {
      if (!this.session) return;
      const view = this.challenge.view();
      this.session.updateChallenge(view);
      const status = this.element("[data-challenge]");
      status.hidden = view.status === "not-started";
      status.textContent = view.status === "running" && view.remainingMs !== null ? `${view.label} \xB7 \u5269\u4F59 ${duration(view.remainingMs)}` : view.status === "completed" ? "\u672C\u8F6E\u9650\u65F6\u6311\u6218\u5DF2\u5B8C\u6210" : view.status === "failed" ? view.reviewing ? "\u672C\u8F6E\u5DF2\u8D85\u65F6 \xB7 \u5F53\u524D\u4E3A\u590D\u76D8\u7EC3\u4E60" : "\u672C\u8F6E\u9650\u65F6\u6311\u6218\u672A\u901A\u8FC7" : view.status === "interrupted" ? "\u8FDB\u5EA6\u8FDE\u63A5\u4E2D\u65AD \xB7 \u672C\u8F6E\u6311\u6218\u505C\u6B62" : "\u672C\u9636\u6BB5\u5B8C\u6210\uFF0C\u8BF7\u7EE7\u7EED\u4E0B\u4E00\u6A21\u5757";
      this.root.dataset.challenge = view.status;
      const dialog = this.element(".challenge-dialog");
      if ((view.status === "failed" || view.status === "interrupted") && !view.reviewing) {
        if (!dialog.open) {
          this.voice.stop();
          this.text("[data-challenge-title]", view.status === "failed" ? "\u672C\u8F6E\u9650\u65F6\u6311\u6218\u672A\u5B8C\u6210" : "\u672C\u8F6E\u6311\u6218\u56E0\u8FDE\u63A5\u4E2D\u65AD\u800C\u505C\u6B62");
          this.text("[data-challenge-message]", view.status === "failed" ? `${view.label}\u5DF2\u8D85\u65F6\uFF0C\u672C\u8F6E\u7ED3\u679C\u5DF2\u4FDD\u5B58\u3002\u53EF\u4EE5\u91CD\u65B0\u6311\u6218\uFF0C\u4E5F\u53EF\u4EE5\u7559\u5728\u5F53\u524D\u5B9E\u9A8C\u590D\u76D8\u3002` : "\u8FDB\u5EA6\u8FDE\u63A5\u4E2D\u65AD\u3002\u53EF\u4EE5\u4FDD\u5B58\u8BB0\u5F55\u540E\u91CD\u65B0\u5B9E\u9A8C\uFF0C\u6216\u7EE7\u7EED\u590D\u76D8\u3002");
          dialog.showModal();
          this.persist();
        }
      } else if (dialog.open) dialog.close();
      if (this.challengeStorage) {
        try {
          sessionStorage.setItem(CHALLENGE_CARRY, JSON.stringify(this.challenge.carry()));
        } catch {
          this.challengeStorage = false;
          this.notice("\u6311\u6218\u8F6E\u6B21\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\uFF0C\u8BF7\u5728\u79BB\u5F00\u524D\u5BFC\u51FA\u8BB0\u5F55\u3002");
        }
      }
    }
    renderVoice() {
      if (!this.voice) return;
      this.root.dataset.voice = this.voice.state;
      this.text("[data-replay]", this.voice.state === "speaking" || this.voice.state === "loading" ? "\u505C\u6B62\u8BB2\u89E3" : "\u91CD\u64AD");
      this.root.querySelectorAll("[data-voice]").forEach((button) => {
        const label2 = this.voice.enabled && this.voice.state !== "blocked" ? "\u5173\u95ED\u65C1\u767D" : "\u5F00\u542F\u65C1\u767D";
        button.setAttribute("aria-label", label2);
        button.setAttribute("aria-pressed", String(this.voice.enabled));
        button.textContent = button.closest(".dock-tools,.header-tools") ? this.voice.enabled ? "\u266A" : "\u2669" : label2;
      });
      this.text("[data-caption-state]", this.spokenSource === "guide" && this.voice.state === "speaking" ? "\u6B63\u5728\u8BB2\u89E3" : this.spokenSource === "guide" && this.voice.state === "loading" ? "\u51C6\u5907\u8BED\u97F3\u2026" : this.agent.message?.label ?? "\u5BFC\u5E08\u63D0\u793A");
      if (this.voice.error) this.notice(this.voice.error);
      const muted = this.voice.enabled && this.voice.activated;
      const key = `${this.snapshot?.sourceSession}:${this.bridgeStatus}:${muted}`;
      if (key !== this.muteKey) {
        this.muteKey = key;
        this.frame.contentWindow?.postMessage({ channel: "neural-lab-tutor", kind: "speech-mute", muted }, location.origin);
      }
    }
    toggleVoice() {
      if (this.voice.enabled && this.voice.state !== "blocked") this.voice.disable();
      else {
        this.voice.enabled = true;
        this.notice("");
        this.playCurrent();
      }
      this.renderVoice();
    }
    playCurrent() {
      this.spokenSource = "guide";
      if (this.guideTimer !== null) {
        window.clearTimeout(this.guideTimer);
        this.guideTimer = null;
      }
      if (this.objective?.view().status === "answering") {
        if (this.voiceReady) void this.voice.play(OBJECTIVE_GUIDANCE, void 0, true);
        return;
      }
      const message = this.agent.replay(), step2 = this.session?.view().step;
      if (!step2) return;
      if (!message) {
        void this.voice.play(step2.narration, step2.id, this.voiceReady);
        return;
      }
      if (!message.cue && !this.voiceReady) {
        const cue = message.kind === "feedback" ? `feedback.${this.session?.view().feedback?.kind ?? "correct"}` : step2.id;
        void this.voice.play(VOICE_CUES2[cue], cue, false);
        return;
      }
      const tone = message.kind === "complete" ? "summary" : message.kind === "feedback" && this.session?.view().feedback?.kind === "correct" ? "encourage" : message.kind === "hint" ? "focus" : "calm";
      void this.voice.play(message.text, message.cue, this.voiceReady, tone);
    }
    async health() {
      try {
        const response = await fetch(appUrl("api/health"), { signal: AbortSignal.timeout(5e3) });
        if (!response.ok) throw new Error();
        const data = await response.json();
        this.aiReady = data.aiReady === true;
        this.voiceReady = data.voiceReady === true;
      } catch {
        this.aiReady = false;
        this.voiceReady = false;
      }
      this.text("[data-service]", this.aiReady ? "\u95EE\u7B54\u670D\u52A1\u5C31\u7EEA \xB7 \u7ED3\u5408\u5F53\u524D\u6B65\u9AA4\u3001\u8F93\u5165\u548C\u8BFE\u7A0B\u539F\u7406\u8BB2\u89E3" : "\u95EE\u7B54\u670D\u52A1\u672A\u914D\u7F6E\u3002\u5206\u5C42\u63D0\u793A\u3001\u539F\u7406\u3001\u793A\u4F8B\u548C\u81EA\u52A8\u5F15\u5BFC\u4ECD\u53EF\u4F7F\u7528\u3002");
      this.element("[data-send]").disabled = !this.aiReady;
    }
    questionInputs() {
      const snapshot = this.snapshot;
      if (!snapshot) return {};
      const values = snapshot.values;
      const inputs = values.inputs;
      if (snapshot.module === 1 && Array.isArray(inputs)) return Object.fromEntries(["x1", "w1", "xw1", "x2", "w2", "xw2", "bias", "sum", "output"].map((name, index) => [name, String(inputs[index] ?? "")]));
      if (snapshot.module === 2 && Array.isArray(inputs)) return { outputs: inputs };
      return Object.fromEntries(["outputs", "dimensions", "forward", "loss", "weights", "updatedWeights"].filter((key) => Array.isArray(values[key])).map((key) => [key, values[key]]));
    }
    appendChat(role, text, context) {
      const list = this.element(".chat-messages");
      list.querySelector(".chat-empty")?.remove();
      this.element(".chat-suggestions").open = false;
      const bubble = node("article", `chat-bubble ${role}`);
      bubble.append(node("span", "chat-role", role === "user" ? "\u4F60" : "\u5B9E\u9A8C\u5BFC\u5E08"));
      if (context) bubble.append(node("span", "chat-tag", context));
      const content = node("p", "chat-copy", text);
      bubble.append(content);
      list.append(bubble);
      list.scrollTop = list.scrollHeight;
      return content;
    }
    localExplanation(kind) {
      const step2 = this.session?.view().step;
      if (!step2) return;
      this.session?.requestHelp(kind);
      this.persist();
      const question = kind === "principle" ? "\u8BF7\u8BB2\u89E3\u8FD9\u4E00\u6B65\u7684\u539F\u7406\u3002" : "\u8BF7\u7ED9\u6211\u4E00\u4E2A\u6570\u503C\u793A\u4F8B\u3002", answer = teachingFor(step2)[kind];
      this.chat.push({ role: "user", content: question, context: step2.title }, { role: "assistant", content: answer, context: step2.title });
      this.appendChat("user", question, step2.title);
      this.appendChat("assistant", answer, step2.title);
      if (this.voice.enabled) {
        this.spokenSource = "chat";
        void this.voice.play(answer, `${step2.id}.${kind}`, this.voiceReady);
      }
    }
    async ask() {
      const input = this.element("#tutor-question");
      const question = input.value.trim();
      if (!question) return;
      const command = voiceCommand(question);
      if (command) {
        input.value = "";
        this.runVoiceCommand(command);
        return;
      }
      if (this.chatRequest) return;
      if (!this.aiReady) {
        this.notice("\u8BF7\u901A\u8FC7\u672C\u5730\u52A9\u6559\u670D\u52A1\u542F\u52A8\u9875\u9762\u540E\u4F7F\u7528\u95EE\u7B54\u3002");
        return;
      }
      const step2 = this.session?.view().step;
      if (!step2) return;
      this.session?.requestHelp("question");
      this.persist();
      this.voice.stop();
      if (this.guideTimer !== null) {
        window.clearTimeout(this.guideTimer);
        this.guideTimer = null;
      }
      const history = this.chat.slice(-6).map(({ role, content }) => ({ role, content }));
      this.chat.push({ role: "user", content: question, context: step2.title });
      this.appendChat("user", question, step2.title);
      input.value = "";
      const output = this.appendChat("assistant", "\u6B63\u5728\u6574\u7406\u601D\u8DEF\u2026", step2.title);
      let answer = "";
      const request = new AbortController();
      this.chatRequest = request;
      this.root.dataset.thinking = "true";
      const speechToken = this.voice.enabled && this.voiceReady ? this.voice.startStream() : null;
      const sourceSession = this.snapshot?.sourceSession;
      this.spokenSource = "chat";
      this.element("[data-send]").disabled = true;
      this.element("[data-stop]").hidden = false;
      this.text("[data-chat-state]", "\u6B63\u5728\u751F\u6210\u8BB2\u89E3\u2026");
      try {
        const feedback = this.session?.view().feedback;
        const evidence = this.session?.view().learning.steps.find((item) => item.stepId === step2.id);
        const coaching = evidence ? { attempts: evidence.attempts, errors: evidence.errors, errorStreak: evidence.errorStreak, hintLevel: evidence.supportLevel, helpRequests: evidence.helpRequests, status: evidence.status, scoreLoss: evidence.scoreLoss } : null;
        const focusTargets = this.snapshot?.anchors?.map(({ id, label: label2 }) => ({ id, label: label2 })) ?? [];
        const response = await fetch(appUrl("api/ask"), { method: "POST", signal: request.signal, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question, stepId: step2.id, sourceSession, focusTargets, inputs: this.questionInputs(), history, coaching, feedback: feedback ? { kind: feedback.kind, stepId: feedback.stepId, message: feedback.message } : null }) });
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error ?? "\u95EE\u7B54\u8BF7\u6C42\u672A\u6210\u529F");
        }
        if (!response.body) throw new Error("\u6CA1\u6709\u6536\u5230\u56DE\u590D\u5185\u5BB9");
        let finished = false;
        for await (const frame of readSse(response.body)) {
          const data = JSON.parse(frame);
          if (data.type === "delta" && typeof data.text === "string") {
            answer += data.text;
            output.textContent = answer;
            if (speechToken !== null) this.voice.appendStream(data.text, speechToken);
            const list = this.element(".chat-messages");
            if (list.scrollHeight - list.scrollTop - list.clientHeight < 100) list.scrollTop = list.scrollHeight;
          } else if (data.type === "action" && data.action?.kind === "focus" && data.sourceSession === this.snapshot?.sourceSession && data.stepId === this.session?.view().step.id && typeof data.action.targetId === "string") {
            this.focusOverlay.showTarget(this.snapshot, data.action.targetId);
          } else if (data.type === "error") throw new Error(data.message);
          else if (data.type === "done") finished = true;
        }
        if (!finished || !answer) throw new Error("\u56DE\u590D\u672A\u5B8C\u6574\u63A5\u6536\uFF0C\u8BF7\u91CD\u8BD5\u3002");
        this.chat.push({ role: "assistant", content: answer, context: step2.title });
        if (speechToken !== null) this.voice.finishStream(speechToken);
        else if (this.voice.enabled && this.session?.view().step.id === step2.id) {
          this.spokenSource = "chat";
          void this.voice.play(answer, void 0, this.voiceReady);
        }
      } catch (error) {
        const reason = request.signal.aborted ? "\u5DF2\u505C\u6B62\u751F\u6210\u3002" : error instanceof Error ? error.message : "\u95EE\u7B54\u6682\u65F6\u4E2D\u65AD\u3002";
        if (speechToken !== null) this.voice.stop();
        output.textContent = (answer ? answer + "\n\n" : "") + reason;
        output.closest(".chat-bubble")?.classList.add("interrupted");
      } finally {
        if (this.chatRequest === request) this.chatRequest = null;
        this.root.dataset.thinking = "false";
        this.element("[data-send]").disabled = !this.aiReady;
        this.element("[data-stop]").hidden = true;
        this.text("[data-chat-state]", "\u4EC5\u5728\u4F60\u63D0\u95EE\u65F6\u8C03\u7528\u95EE\u7B54\u670D\u52A1");
      }
    }
    runVoiceCommand(command) {
      if (command === "stop") {
        this.voice.stop();
        this.chatRequest?.abort();
        this.notice("\u5DF2\u505C\u6B62\u5F53\u524D\u8BB2\u89E3\u3002");
      } else if (command === "slower" || command === "faster") {
        this.voice.setRate(this.voice.rate + (command === "slower" ? -0.1 : 0.1));
        this.notice(`\u6717\u8BFB\u901F\u5EA6\uFF1A${this.voice.rate.toFixed(1)} \u500D\u3002`);
      } else if (command === "replay") {
        this.voice.enabled = true;
        const last = this.chat.filter((item) => item.role === "assistant").at(-1);
        if (this.tab === "chat" && last) {
          this.spokenSource = "chat";
          void this.voice.play(last.content, void 0, this.voiceReady);
        } else this.playCurrent();
      } else {
        this.session?.requestHelp("hint");
        const message = this.agent.help("hint", this.session?.view(), this.snapshot ?? void 0);
        if (message) this.presentMessage(message, true);
      }
    }
    persist() {
      if (!this.session || this.historyError) return;
      const view = this.session.view();
      if (!view.journal.length && !view.visitedPages.length && !view.quiz) return;
      try {
        saveHistory(localStorage, view);
        this.lastSave = Date.now();
      } catch {
        this.historyError = true;
        this.notice("\u5B66\u4E60\u8BB0\u5F55\u672A\u80FD\u4FDD\u5B58\u3002\u8BF7\u5148\u5BFC\u51FA\u672C\u6B21\u8BB0\u5F55\uFF0C\u907F\u514D\u4E22\u5931\u3002");
      }
    }
    fillHistory() {
      const select = this.element("[data-history]");
      select.replaceChildren(new Option("\u672C\u6B21\u7EC3\u4E60", "current"));
      if (this.historyError) return;
      try {
        for (const item of readHistory(localStorage).reverse()) {
          if (item.id !== this.session?.id) select.add(new Option(dateLabel(item.startedAt), item.id));
        }
      } catch {
        this.notice("\u5386\u53F2\u8BB0\u5F55\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u3002");
      }
    }
    selectHistory() {
      const id = this.element("[data-history]").value;
      try {
        this.selectedHistory = id === "current" ? null : readHistory(localStorage).find((item) => item.id === id) ?? null;
        this.renderRecord();
      } catch {
        this.notice("\u5386\u53F2\u8BB0\u5F55\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u3002");
      }
    }
    renderRecord() {
      const view = this.selectedHistory ?? this.session?.view();
      if (!view) return;
      this.text("[data-record-caption]", this.selectedHistory ? `\u5386\u53F2\u7EC3\u4E60 \xB7 ${dateLabel(view.startedAt)}` : this.historyError ? "\u672C\u6B21\u8BB0\u5F55\u5C1A\u672A\u4FDD\u5B58\uFF0C\u8BF7\u5148\u5BFC\u51FA\u3002" : "\u81EA\u52A8\u8BB0\u5F55\u771F\u5B9E\u5B9E\u9A8C\u6821\u9A8C\uFF0C\u4FDD\u5B58\u5728\u672C\u673A\u3002");
      this.text("[data-metric-checks]", `${view.correct} / ${view.attempts}`);
      this.text("[data-metric-points]", String(view.practicePoints));
      this.text("[data-metric-time]", duration(view.elapsedMs));
      this.text("[data-accuracy]", `\u7B54\u9898\u51C6\u786E\u7387 ${view.accuracy === null ? "\u5C1A\u65E0\u6821\u9A8C" : Math.round(view.accuracy * 100) + "%"} \xB7 \u6821\u9A8C\u9519\u8BEF ${view.errors} \u6B21 \xB7 \u62D6\u653E\u8C03\u6574 ${view.operationErrors ?? 0} \u6B21`);
      const challenge = view.challenge;
      this.text("[data-challenge-record]", challenge ? `\u7B2C ${challenge.attempt} \u8F6E \xB7 \u6311\u6218${{ running: "\u8FDB\u884C\u4E2D", failed: "\u672A\u901A\u8FC7", completed: "\u5DF2\u5B8C\u6210", interrupted: "\u4E2D\u65AD", "not-started": "\u672A\u5F00\u59CB" }[challenge.status]} \xB7 \u7D2F\u8BA1\u8D85\u65F6\u5931\u8D25 ${challenge.failures} \u6B21${challenge.reviewing ? " \xB7 \u590D\u76D8\u8BB0\u5F55" : ""}` : "\u6B64\u65E7\u8BB0\u5F55\u5C1A\u672A\u542F\u7528\u9650\u65F6\u6311\u6218\u3002");
      const scores = this.element(".score-list");
      scores.replaceChildren();
      for (const module of MODULES) {
        const row = node("div", "score-row");
        row.append(node("span", "", `${module.id}. ${module.title}`));
        row.append(node("strong", "", view.moduleScores[module.id - 1] === null ? "\u5F85\u5B8C\u6210" : String(view.moduleScores[module.id - 1]) + " \u5206"));
        row.append(node("span", "score-time", duration(view.moduleElapsed[module.id - 1] ?? 0)));
        scores.append(row);
        const evidence = view.evaluation?.find((item) => item.module === module.id);
        if (evidence) scores.append(node("p", "evaluation-note", `\u64CD\u4F5C\u6821\u9A8C ${evidence.correct}/${evidence.checks} \xB7 \u9884\u4E60\u81EA\u6D4B ${evidence.quizCorrect === null ? "\u672A\u4F5C\u7B54" : evidence.quizCorrect + "/" + evidence.quizTotal}\u3002${evidence.advice}`));
      }
      this.text("[data-read-pages]", `\u8BFE\u4EF6\u9605\u8BFB ${view.visitedPages.length} / 37`);
      this.text("[data-quiz-score]", view.quiz ? `${view.quizPurpose === "prestudy" ? "\u9884\u4E60\u68C0\u6D4B" : "\u5386\u53F2\u81EA\u6D4B"} ${view.quiz.score} \u5206` : "\u9884\u4E60\u68C0\u6D4B\uFF1A\u672A\u5B8C\u6210");
      const training = this.element(".training-records");
      training.replaceChildren(node("h3", "", "\u9636\u6BB5\u8BAD\u7EC3"));
      for (const module of MODULES) {
        const record = view.stageTraining?.find((item) => item.module === module.id), last = record?.attempts.at(-1);
        const row = node("div", "training-record");
        row.append(node("span", "", `${module.title}\uFF1A${last ? `${last.score} \u5206 \xB7 ${record.attempts.length} \u6B21` : view.completedModules.includes(module.id) ? "\u5F85\u8BAD\u7EC3" : "\u6A21\u5757\u5C1A\u672A\u5B8C\u6210"}`));
        if (!this.selectedHistory && (view.availableTraining ?? []).includes(module.id)) {
          const button = node("button", "", last ? "\u518D\u6B21\u8BAD\u7EC3" : "\u5F00\u59CB\u8BAD\u7EC3");
          button.addEventListener("click", () => this.openQuiz(module.id));
          row.append(button);
        }
        if (last) {
          const detail = node("details"), summary = node("summary", "", "\u67E5\u770B\u672C\u6B21\u89E3\u6790");
          detail.append(summary);
          if (last.reason) detail.append(node("p", "", last.reason));
          for (const item of last.items) {
            const question = QUIZ.find((question2) => question2.id === item.id);
            detail.append(node("p", "", `${item.correct ? "\u2713" : "\u9700\u590D\u4E60"} ${item.question ?? question?.question ?? item.id} ${item.explanation}`));
          }
          row.append(detail);
        }
        training.append(row);
      }
      const analysis = analyzeLearning(view.learning, view.quizPurpose === "prestudy" ? view.quiz : null, view.stageTraining ?? []);
      const objectiveRecord = this.element("[data-objective-record]");
      objectiveRecord.hidden = !view.objectiveResult;
      if (view.objectiveResult) objectiveRecord.textContent = `\u4EFB\u52A1\u4E0E\u635F\u5931\u51FD\u6570\u5339\u914D\uFF1A${view.objectiveResult.score}/5 \u5206${view.objectiveResult.expired ? "\uFF08\u8D85\u65F6\uFF09" : ""}\u3002`;
      const review = analysis.filter((item) => item.needsReview).slice(0, 3);
      this.text("[data-review]", review.length ? `\u5EFA\u8BAE\u68C0\u67E5\uFF1A${review.map((item) => `${MODULES[item.module - 1]?.title} \xB7 ${item.label}`).join("\uFF1B")}\u3002` : analysis.length ? "\u672C\u6B21\u5B66\u4E60\u8FC7\u7A0B\u5DF2\u8BB0\u5F55\uFF0C\u53EF\u7ED3\u5408\u9636\u6BB5\u8BAD\u7EC3\u7EE7\u7EED\u5DE9\u56FA\u3002" : "\u63D0\u4EA4\u6821\u9A8C\u540E\uFF0C\u8FD9\u91CC\u4F1A\u6839\u636E\u5B9E\u9645\u8BB0\u5F55\u6574\u7406\u590D\u4E60\u65B9\u5411\u3002");
      const evidenceList = this.element("[data-learning-evidence]");
      evidenceList.replaceChildren();
      for (const item of analysis) {
        const parts = [];
        if (item.prestudy) parts.push(`\u9884\u4E60 ${item.prestudy.correct}/${item.prestudy.total}`);
        if (item.firstPassTotal) parts.push(`\u9996\u6B21\u63D0\u4EA4\u901A\u8FC7 ${item.firstPassCorrect}/${item.firstPassTotal}`);
        if (item.attempts) parts.push(`\u64CD\u4F5C\u6821\u9A8C ${item.correct}/${item.attempts}`);
        if (item.operationErrors) parts.push(`\u62D6\u653E\u8C03\u6574 ${item.operationErrors} \u6B21`);
        if (item.helpRequests) parts.push(`\u6C42\u52A9 ${item.helpRequests} \u6B21`);
        if (item.training) parts.push(`\u6700\u8FD1\u9636\u6BB5\u8BAD\u7EC3 ${item.training.correct}/${item.training.total}`);
        evidenceList.append(node("p", "", `${MODULES[item.module - 1]?.title} \xB7 ${item.label}\uFF1A${parts.join("\uFF0C") || (item.completed ? `\u5DF2\u5B8C\u6210 ${item.completed} \u4E2A\u6B65\u9AA4` : "\u5B66\u4E60\u4E2D")}\u3002${item.advice}`));
      }
      const states = { working: "\u8FDB\u884C\u4E2D", independent: "\u9996\u6B21\u72EC\u7ACB\u6821\u9A8C\u901A\u8FC7", corrected: "\u4FEE\u6B63\u540E\u901A\u8FC7", supported: "\u83B7\u5F97\u5E2E\u52A9\u540E\u901A\u8FC7", completed: "\u5DF2\u81EA\u52A8\u786E\u8BA4\u5B8C\u6210", review: "\u4ECD\u9700\u4FEE\u6B63" };
      for (const item of view.learning?.steps ?? []) {
        evidenceList.append(node("p", "", `${item.title}\uFF1A${states[item.status]}\u3002\u6821\u9A8C ${item.correct}/${item.attempts}\uFF0C\u4E3B\u52A8\u6C42\u52A9 ${item.helpRequests} \u6B21${item.scoreLoss ? `\uFF0C\u672C\u6B65\u9AA4\u539F\u5B9E\u9A8C\u6263\u5206 ${item.scoreLoss}` : ""}\u3002`));
      }
      if (!view.learning?.steps.length && !analysis.length) evidenceList.append(node("p", "quiet", view.recordVersion === 2 ? "\u5F00\u59CB\u64CD\u4F5C\u540E\uFF0C\u8FD9\u91CC\u4F1A\u8BB0\u5F55\u4F60\u7684\u7EC3\u4E60\u8FC7\u7A0B\u3002" : "\u8FD9\u4EFD\u65E7\u8BB0\u5F55\u672A\u91C7\u96C6\u63D0\u793A\u4F7F\u7528\u548C\u4FEE\u6B63\u8FC7\u7A0B\u3002"));
      const native = this.element("[data-native-report]");
      native.hidden = !view.nativeReport;
      if (view.nativeReport) native.textContent = view.nativeReport.verified ? `\u539F\u7A0B\u5E8F\u62A5\u544A\uFF1A\u603B\u5206 ${view.nativeReport.total ?? "\u2014"}\uFF0C\u64CD\u4F5C ${view.nativeReport.operations ?? "\u2014"}\uFF0C\u5FC3\u5F97 ${view.nativeReport.reflection ?? "\u2014"}\u3002` : "\u65E7\u7248\u8BB0\u5F55\u4E2D\u7684\u62A5\u544A\u72B6\u6001\u672A\u7ECF\u6838\u9A8C\uFF0C\u8BF7\u4EE5\u539F\u5B9E\u9A8C\u5B9E\u9645\u62A5\u544A\u4E3A\u51C6\u3002";
      const journal = this.element(".journal");
      journal.replaceChildren();
      for (const item of view.journal.slice(-18).reverse()) {
        const row = node("li", `journal-entry ${item.kind}`);
        row.append(node("span", "journal-time", duration(item.elapsedMs)), node("strong", "", item.title), node("p", "", item.message));
        journal.append(row);
      }
      if (!view.journal.length) journal.append(node("li", "empty-journal", "\u5F00\u59CB\u5B9E\u9A8C\u540E\uFF0C\u64CD\u4F5C\u8BB0\u5F55\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"));
      this.element("[data-export]").textContent = this.selectedHistory ? "\u5BFC\u51FA\u8FD9\u6B21\u8BB0\u5F55" : "\u5BFC\u51FA\u672C\u6B21\u8BB0\u5F55";
    }
    exportRecord() {
      const view = this.selectedHistory ?? this.session?.view();
      if (!view) return;
      const analysis = analyzeLearning(view.learning, view.quizPurpose === "prestudy" ? view.quiz : null, view.stageTraining ?? []);
      const blob = new Blob([JSON.stringify({ format: "ai-neural-lab-report", version: 1, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), definitions: { accuracy: "\u5DF2\u8BC6\u522B\u7684\u63D0\u4EA4\u6838\u5BF9\u901A\u8FC7\u6B21\u6570/\u6838\u5BF9\u603B\u6B21\u6570\uFF0C\u5305\u542B\u91CD\u8BD5\u4E0E\u7B2C\u56DB\u6A21\u5757\u8BEF\u5DEE\u548C\u68AF\u5EA6\u56E0\u5B50\u6838\u5BF9\uFF1B\u81EA\u52A8\u9636\u6BB5\u786E\u8BA4\u548C\u62D6\u653E\u53E6\u8BA1", practicePoints: "\u6838\u5BF9\u3001\u539F\u751F\u786E\u8BA4\u9636\u6BB5\u6216\u6709\u6548\u62D6\u653E\u76EE\u6807\u9996\u6B21\u901A\u8FC7+1\uFF0C\u4E0D\u5E76\u5165\u539F\u5B9E\u9A8C\u6210\u7EE9", quiz: "\u6807\u8BB0 prestudy \u7684\u4E3A\u5B9E\u9A8C\u524D\u9884\u4E60\u68C0\u6D4B\uFF1B\u65E7\u8BB0\u5F55\u672A\u6807\u8BB0\u8005\u4E3A\u5386\u53F2\u81EA\u6D4B", stageTraining: "\u6A21\u5757\u5B8C\u6210\u540E\u6309\u6613\u9519\u70B9\u9009\u62E9\u7684\u65B0\u9898\uFF0C\u4FDD\u7559\u6BCF\u6B21\u4F5C\u7B54\u4E0E\u9898\u76EE\u5FEB\u7167", learning: "\u9996\u6B21\u72EC\u7ACB\u901A\u8FC7\u3001\u4FEE\u6B63\u540E\u901A\u8FC7\u3001\u83B7\u5F97\u5E2E\u52A9\u540E\u901A\u8FC7\u63CF\u8FF0\u89C2\u5BDF\u5230\u7684\u8FC7\u7A0B", conceptAnalysis: "\u6309\u6A21\u5757\u548C\u77E5\u8BC6\u70B9\u6C47\u603B\u9884\u4E60\u3001\u63D0\u4EA4\u6838\u5BF9\u3001\u6C42\u52A9\u4E0E\u8BE5\u77E5\u8BC6\u70B9\u6700\u8FD1\u4E00\u6B21\u9636\u6BB5\u8BAD\u7EC3" }, conceptAnalysis: analysis, session: view }, null, 2)], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `\u795E\u7ECF\u7F51\u7EDC\u5B9E\u9A8C\u8BB0\u5F55-${view.startedAt.slice(0, 10)}.json`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
    }
    openQuiz(mode) {
      const view = this.session?.view();
      if (!view) return;
      if (mode === "prestudy" ? !view.canPrestudy : !view.availableTraining.includes(mode)) {
        this.notice(mode === "prestudy" ? "\u9884\u4E60\u68C0\u6D4B\u5B89\u6392\u5728\u5B9E\u9A8C\u5F00\u59CB\u524D\u3002" : "\u9636\u6BB5\u8BAD\u7EC3\u5728\u5BF9\u5E94\u6A21\u5757\u5B8C\u6210\u540E\u8FDB\u884C\uFF0C\u8BF7\u5148\u5B8C\u6210\u5F53\u524D\u5B9E\u9A8C\u64CD\u4F5C\u3002");
        return;
      }
      this.quizMode = mode;
      this.voice.stop();
      if (this.guideTimer !== null) {
        window.clearTimeout(this.guideTimer);
        this.guideTimer = null;
      }
      this.trainingPlan = mode === "prestudy" ? null : this.session.beginStageTraining(mode);
      const questions = this.trainingPlan?.questions ?? QUIZ;
      this.text("[data-quiz-title]", mode === "prestudy" ? "\u9884\u4E60\u68C0\u6D4B" : `${MODULES[mode - 1].title} \xB7 \u9636\u6BB5\u8BAD\u7EC3`);
      this.text("[data-quiz-badge]", `${questions.length} \u9898`);
      this.text("[data-quiz-intro]", mode === "prestudy" ? "\u5728\u5B9E\u9A8C\u524D\u68C0\u9A8C\u57FA\u7840\u6982\u5FF5\uFF0C\u5B8C\u6210\u540E\u518D\u5F00\u59CB\u64CD\u4F5C\u3002" : this.trainingPlan.reason);
      this.text("[data-quiz-continue]", mode === "prestudy" ? "\u5B8C\u6210\u68C0\u6D4B\uFF0C\u8FD4\u56DE\u5B9E\u9A8C" : "\u5B8C\u6210\u8BAD\u7EC3\uFF0C\u7EE7\u7EED\u5B9E\u9A8C");
      this.element(".quiz-result").hidden = true;
      this.element("[data-quiz-submit]").hidden = false;
      this.element("[data-quiz-retry]").hidden = true;
      this.element("[data-quiz-continue]").hidden = true;
      const container = this.element(".quiz-questions");
      container.replaceChildren();
      for (const [index, question] of questions.entries()) {
        const field = node("fieldset", "quiz-question");
        field.append(node("legend", "", `${index + 1}. ${question.question}`));
        for (const [answer, option] of question.options.entries()) {
          const label2 = node("label", "quiz-option");
          const radio = node("input");
          radio.type = "radio";
          radio.name = question.id;
          radio.value = String(answer);
          label2.append(radio, node("span", "", option));
          field.append(label2);
        }
        const explanation = node("p", "quiz-explanation");
        explanation.dataset.explanation = question.id;
        explanation.hidden = true;
        field.append(explanation);
        container.append(field);
      }
      this.selectTab("quiz");
      this.expand(true);
      this.element('[data-page="quiz"]').scrollTop = 0;
    }
    submitQuiz() {
      if (!this.session || this.quizMode === null) return;
      const data = new FormData(this.element(".quiz-form"));
      const answers = Object.fromEntries([...data.entries()].map(([key, value]) => [key, Number(value)]));
      const result = this.element(".quiz-result");
      result.hidden = false;
      try {
        const quiz = this.quizMode === "prestudy" ? this.session.answerQuiz(answers) : this.session.answerStageQuiz(this.quizMode, answers, this.trainingPlan.id);
        const weak = [...new Set(quiz.items.filter((item) => !item.correct && item.concept).map((item) => CONCEPTS[item.concept]))];
        result.textContent = `\u672C\u6B21 ${quiz.score} \u5206 \xB7 ${quiz.correct}/${quiz.total} \u9898\u6B63\u786E\u3002${quiz.correct === quiz.total ? "\u5168\u90E8\u7B54\u5BF9\u4E86\uFF0C\u63A5\u4E0B\u6765\u8BD5\u7740\u628A\u8FD9\u4E9B\u6982\u5FF5\u7528\u5230\u5B9E\u9A8C\u91CC\u3002" : weak.length ? `\u4E0B\u4E00\u6B21\u91CD\u70B9\u7EC3\u4E60${weak.join("\u3001")}\uFF0C\u5148\u770B\u89E3\u6790\u518D\u6362\u4E00\u9053\u9898\u8BD5\u8BD5\u3002` : "\u5148\u770B\u9519\u9898\u89E3\u6790\uFF0C\u518D\u7528\u65B0\u7684\u5C1D\u8BD5\u68C0\u67E5\u7406\u89E3\u3002"}`;
        for (const item of quiz.items) {
          const element = this.element(`[data-explanation="${item.id}"]`);
          element.hidden = false;
          element.textContent = (item.correct ? "\u2713 \u6B63\u786E\u3002" : "\u9700\u8981\u518D\u68C0\u67E5\u3002") + item.explanation;
          element.dataset.correct = String(item.correct);
        }
        this.element("[data-quiz-submit]").hidden = true;
        this.element("[data-quiz-retry]").hidden = false;
        this.element("[data-quiz-continue]").hidden = false;
        this.root.querySelectorAll(".quiz-questions input").forEach((input) => {
          input.disabled = true;
        });
        this.persist();
        this.render();
        result.scrollIntoView({ block: "nearest" });
        if (this.voice.enabled && this.voiceReady) {
          this.spokenSource = "training";
          void this.voice.play(result.textContent ?? "", void 0, true);
        }
      } catch (error) {
        result.textContent = error instanceof Error ? error.message : "\u81EA\u6D4B\u63D0\u4EA4\u672A\u6210\u529F";
      }
    }
  };

  // assistant/launch.ts
  async function launch() {
    const status = document.getElementById("launch-status");
    const frame = document.getElementById("lab");
    let documentSource = "";
    let loadingObserver = null;
    new TutorApp(frame, () => {
      if (documentSource) {
        status.hidden = false;
        frame.srcdoc = documentSource;
      }
    });
    try {
      const response = await fetch(appUrl(document.documentElement.dataset.unityEntry ?? "index.html"), { cache: "no-store" });
      if (!response.ok) throw new Error(`\u5B9E\u9A8C\u5165\u53E3\u52A0\u8F7D\u5931\u8D25\uFF08${response.status}\uFF09`);
      const original = await response.text();
      const marker = '<script src="Build/UnityLoader.js"><\/script>';
      if (original.split(marker).length !== 2) throw new Error("\u5B9E\u9A8C\u5165\u53E3\u7ED3\u6784\u4E0E\u5DF2\u9A8C\u8BC1\u7248\u672C\u4E0D\u4E00\u81F4");
      const html = original.replace("<head>", `<head><base href="${appUrl("")}"><link rel="stylesheet" href="assistant/game-skin.css">`).replace('src="TemplateData/img/Logo.png"', `src="${appUrl("assistant/loading-logo.png")}" alt="\u6D59\u6C5F\u4F20\u5A92\u5B66\u9662\u4EBA\u5DE5\u795E\u7ECF\u7F51\u7EDC\u67B6\u6784\u8BBE\u8BA1\u865A\u62DF\u4EFF\u771F\u5B9E\u9A8C"`).replace(
        marker,
        `${marker}<script src="assistant/bridge.js"><\/script>`
      );
      documentSource = html;
      frame.addEventListener("load", () => {
        status.hidden = true;
        loadingObserver?.disconnect();
        const loader = frame.contentDocument?.getElementById("loadingBlock"), root = document.getElementById("tutor-root");
        if (!loader || !root) return;
        const sync = () => {
          root.dataset.loading = String(frame.contentWindow?.getComputedStyle(loader).display !== "none");
        };
        loadingObserver = new MutationObserver(sync);
        loadingObserver.observe(loader, { attributes: true, attributeFilter: ["style"] });
        sync();
      });
      frame.srcdoc = html;
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : "\u5B9E\u9A8C\u8F7D\u5165\u5931\u8D25";
      const original = document.createElement("a");
      original.href = appUrl(document.documentElement.dataset.unityEntry ?? "index.html");
      original.textContent = "\u6253\u5F00\u539F\u5B9E\u9A8C";
      original.style.color = "#a7c9ff";
      status.append(original);
    }
  }
  void launch();
})();
