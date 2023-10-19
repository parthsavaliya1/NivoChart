
import { ResponsiveTreeMap } from '@nivo/treemap'

const data = {
    "name": "nivo",
    "color": "hsl(45, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(100, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(263, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(223, 70%, 50%)",
                "loc": 164095
              },
              {
                "name": "xAxis",
                "color": "hsl(266, 70%, 50%)",
                "loc": 94655
              },
              {
                "name": "yAxis",
                "color": "hsl(149, 70%, 50%)",
                "loc": 128422
              },
              {
                "name": "layers",
                "color": "hsl(58, 70%, 50%)",
                "loc": 173447
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(260, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(209, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(346, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(153, 70%, 50%)",
                        "loc": 15158
                      },
                      {
                        "name": "slices",
                        "color": "hsl(5, 70%, 50%)",
                        "loc": 59808
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(265, 70%, 50%)",
                        "loc": 44784
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(291, 70%, 50%)",
                    "loc": 76515
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(56, 70%, 50%)",
                    "loc": 51144
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(5, 70%, 50%)",
                "loc": 81230
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(142, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(330, 70%, 50%)",
            "loc": 113068
          },
          {
            "name": "hsl",
            "color": "hsl(229, 70%, 50%)",
            "loc": 144883
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(205, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(117, 70%, 50%)",
            "loc": 198543
          },
          {
            "name": "resetClock",
            "color": "hsl(274, 70%, 50%)",
            "loc": 77994
          },
          {
            "name": "noop",
            "color": "hsl(61, 70%, 50%)",
            "loc": 106382
          },
          {
            "name": "tick",
            "color": "hsl(87, 70%, 50%)",
            "loc": 154003
          },
          {
            "name": "forceGC",
            "color": "hsl(244, 70%, 50%)",
            "loc": 68599
          },
          {
            "name": "stackTrace",
            "color": "hsl(248, 70%, 50%)",
            "loc": 1163
          },
          {
            "name": "dbg",
            "color": "hsl(103, 70%, 50%)",
            "loc": 78090
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(77, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(39, 70%, 50%)",
            "loc": 2686
          },
          {
            "name": "city",
            "color": "hsl(121, 70%, 50%)",
            "loc": 19040
          },
          {
            "name": "animal",
            "color": "hsl(336, 70%, 50%)",
            "loc": 79717
          },
          {
            "name": "movie",
            "color": "hsl(83, 70%, 50%)",
            "loc": 121031
          },
          {
            "name": "user",
            "color": "hsl(138, 70%, 50%)",
            "loc": 101127
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(31, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(109, 70%, 50%)",
            "loc": 28702
          },
          {
            "name": "intersect",
            "color": "hsl(173, 70%, 50%)",
            "loc": 28967
          },
          {
            "name": "merge",
            "color": "hsl(189, 70%, 50%)",
            "loc": 99332
          },
          {
            "name": "reverse",
            "color": "hsl(58, 70%, 50%)",
            "loc": 35867
          },
          {
            "name": "toArray",
            "color": "hsl(241, 70%, 50%)",
            "loc": 7146
          },
          {
            "name": "toObject",
            "color": "hsl(343, 70%, 50%)",
            "loc": 34245
          },
          {
            "name": "fromCSV",
            "color": "hsl(49, 70%, 50%)",
            "loc": 15517
          },
          {
            "name": "slice",
            "color": "hsl(140, 70%, 50%)",
            "loc": 88502
          },
          {
            "name": "append",
            "color": "hsl(245, 70%, 50%)",
            "loc": 129742
          },
          {
            "name": "prepend",
            "color": "hsl(359, 70%, 50%)",
            "loc": 75850
          },
          {
            "name": "shuffle",
            "color": "hsl(224, 70%, 50%)",
            "loc": 43999
          },
          {
            "name": "pick",
            "color": "hsl(71, 70%, 50%)",
            "loc": 20926
          },
          {
            "name": "plouc",
            "color": "hsl(355, 70%, 50%)",
            "loc": 37457
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(38, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(221, 70%, 50%)",
            "loc": 100050
          },
          {
            "name": "slugify",
            "color": "hsl(307, 70%, 50%)",
            "loc": 156891
          },
          {
            "name": "snakeCase",
            "color": "hsl(34, 70%, 50%)",
            "loc": 162503
          },
          {
            "name": "camelCase",
            "color": "hsl(47, 70%, 50%)",
            "loc": 100162
          },
          {
            "name": "repeat",
            "color": "hsl(192, 70%, 50%)",
            "loc": 170872
          },
          {
            "name": "padLeft",
            "color": "hsl(9, 70%, 50%)",
            "loc": 136792
          },
          {
            "name": "padRight",
            "color": "hsl(261, 70%, 50%)",
            "loc": 46799
          },
          {
            "name": "sanitize",
            "color": "hsl(193, 70%, 50%)",
            "loc": 34209
          },
          {
            "name": "ploucify",
            "color": "hsl(287, 70%, 50%)",
            "loc": 44066
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(257, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(306, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(217, 70%, 50%)",
                "loc": 81548
              },
              {
                "name": "HOWDY",
                "color": "hsl(160, 70%, 50%)",
                "loc": 142069
              },
              {
                "name": "aloha",
                "color": "hsl(119, 70%, 50%)",
                "loc": 64791
              },
              {
                "name": "AHOY",
                "color": "hsl(15, 70%, 50%)",
                "loc": 141578
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(292, 70%, 50%)",
            "loc": 31307
          },
          {
            "name": "path",
            "color": "hsl(146, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(353, 70%, 50%)",
                "loc": 42282
              },
              {
                "name": "pathB",
                "color": "hsl(328, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(346, 70%, 50%)",
                    "loc": 89455
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(69, 70%, 50%)",
                    "loc": 55281
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(298, 70%, 50%)",
                    "loc": 22932
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(225, 70%, 50%)",
                    "loc": 153272
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(315, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(239, 70%, 50%)",
                    "loc": 4245
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(251, 70%, 50%)",
                    "loc": 134340
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(285, 70%, 50%)",
                    "loc": 151843
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(129, 70%, 50%)",
                    "loc": 126530
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(321, 70%, 50%)",
                    "loc": 92207
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(120, 70%, 50%)",
                    "loc": 56977
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(289, 70%, 50%)",
                    "loc": 76954
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(270, 70%, 50%)",
                    "loc": 5126
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(311, 70%, 50%)",
                    "loc": 23373
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }


export const MyResponsiveTreeMap = () => (
    <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.2
                ]
            ]
        }}
        parentLabelPosition="left"
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.1
                ]
            ]
        }}
    />
)
