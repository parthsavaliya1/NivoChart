
import { ResponsiveSunburst } from '@nivo/sunburst'

const data = {
    "name": "nivo",
    "color": "hsl(263, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(84, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(149, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(211, 70%, 50%)",
                "loc": 61595
              },
              {
                "name": "xAxis",
                "color": "hsl(249, 70%, 50%)",
                "loc": 86726
              },
              {
                "name": "yAxis",
                "color": "hsl(294, 70%, 50%)",
                "loc": 10392
              },
              {
                "name": "layers",
                "color": "hsl(356, 70%, 50%)",
                "loc": 50481
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(153, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(287, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(190, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(42, 70%, 50%)",
                        "loc": 127017
                      },
                      {
                        "name": "slices",
                        "color": "hsl(176, 70%, 50%)",
                        "loc": 73858
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(303, 70%, 50%)",
                        "loc": 192046
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(50, 70%, 50%)",
                    "loc": 190840
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(225, 70%, 50%)",
                    "loc": 80347
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(209, 70%, 50%)",
                "loc": 188909
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(281, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(204, 70%, 50%)",
            "loc": 91273
          },
          {
            "name": "hsl",
            "color": "hsl(3, 70%, 50%)",
            "loc": 30019
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(259, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(132, 70%, 50%)",
            "loc": 85275
          },
          {
            "name": "resetClock",
            "color": "hsl(91, 70%, 50%)",
            "loc": 62160
          },
          {
            "name": "noop",
            "color": "hsl(34, 70%, 50%)",
            "loc": 73423
          },
          {
            "name": "tick",
            "color": "hsl(326, 70%, 50%)",
            "loc": 156157
          },
          {
            "name": "forceGC",
            "color": "hsl(181, 70%, 50%)",
            "loc": 56239
          },
          {
            "name": "stackTrace",
            "color": "hsl(25, 70%, 50%)",
            "loc": 101901
          },
          {
            "name": "dbg",
            "color": "hsl(311, 70%, 50%)",
            "loc": 41612
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(44, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(256, 70%, 50%)",
            "loc": 34224
          },
          {
            "name": "city",
            "color": "hsl(281, 70%, 50%)",
            "loc": 143208
          },
          {
            "name": "animal",
            "color": "hsl(350, 70%, 50%)",
            "loc": 28817
          },
          {
            "name": "movie",
            "color": "hsl(160, 70%, 50%)",
            "loc": 185999
          },
          {
            "name": "user",
            "color": "hsl(55, 70%, 50%)",
            "loc": 18305
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(320, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(306, 70%, 50%)",
            "loc": 2147
          },
          {
            "name": "intersect",
            "color": "hsl(199, 70%, 50%)",
            "loc": 96593
          },
          {
            "name": "merge",
            "color": "hsl(359, 70%, 50%)",
            "loc": 62689
          },
          {
            "name": "reverse",
            "color": "hsl(184, 70%, 50%)",
            "loc": 159756
          },
          {
            "name": "toArray",
            "color": "hsl(15, 70%, 50%)",
            "loc": 12307
          },
          {
            "name": "toObject",
            "color": "hsl(228, 70%, 50%)",
            "loc": 31812
          },
          {
            "name": "fromCSV",
            "color": "hsl(97, 70%, 50%)",
            "loc": 110268
          },
          {
            "name": "slice",
            "color": "hsl(0, 70%, 50%)",
            "loc": 60341
          },
          {
            "name": "append",
            "color": "hsl(288, 70%, 50%)",
            "loc": 71801
          },
          {
            "name": "prepend",
            "color": "hsl(188, 70%, 50%)",
            "loc": 99678
          },
          {
            "name": "shuffle",
            "color": "hsl(38, 70%, 50%)",
            "loc": 66182
          },
          {
            "name": "pick",
            "color": "hsl(323, 70%, 50%)",
            "loc": 175561
          },
          {
            "name": "plouc",
            "color": "hsl(254, 70%, 50%)",
            "loc": 97639
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(187, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(242, 70%, 50%)",
            "loc": 148297
          },
          {
            "name": "slugify",
            "color": "hsl(134, 70%, 50%)",
            "loc": 103727
          },
          {
            "name": "snakeCase",
            "color": "hsl(196, 70%, 50%)",
            "loc": 191586
          },
          {
            "name": "camelCase",
            "color": "hsl(5, 70%, 50%)",
            "loc": 164325
          },
          {
            "name": "repeat",
            "color": "hsl(234, 70%, 50%)",
            "loc": 188454
          },
          {
            "name": "padLeft",
            "color": "hsl(257, 70%, 50%)",
            "loc": 130252
          },
          {
            "name": "padRight",
            "color": "hsl(56, 70%, 50%)",
            "loc": 102223
          },
          {
            "name": "sanitize",
            "color": "hsl(124, 70%, 50%)",
            "loc": 108204
          },
          {
            "name": "ploucify",
            "color": "hsl(32, 70%, 50%)",
            "loc": 143318
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(291, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(359, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(173, 70%, 50%)",
                "loc": 107184
              },
              {
                "name": "HOWDY",
                "color": "hsl(132, 70%, 50%)",
                "loc": 94133
              },
              {
                "name": "aloha",
                "color": "hsl(255, 70%, 50%)",
                "loc": 40416
              },
              {
                "name": "AHOY",
                "color": "hsl(356, 70%, 50%)",
                "loc": 22862
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(187, 70%, 50%)",
            "loc": 51123
          },
          {
            "name": "path",
            "color": "hsl(216, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(192, 70%, 50%)",
                "loc": 18130
              },
              {
                "name": "pathB",
                "color": "hsl(196, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(197, 70%, 50%)",
                    "loc": 143662
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(287, 70%, 50%)",
                    "loc": 73911
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(137, 70%, 50%)",
                    "loc": 59113
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(2, 70%, 50%)",
                    "loc": 127019
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(124, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(323, 70%, 50%)",
                    "loc": 196897
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(323, 70%, 50%)",
                    "loc": 60002
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(321, 70%, 50%)",
                    "loc": 69348
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(195, 70%, 50%)",
                    "loc": 172039
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(72, 70%, 50%)",
                    "loc": 51382
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(259, 70%, 50%)",
                    "loc": 5857
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(126, 70%, 50%)",
                    "loc": 196793
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(274, 70%, 50%)",
                    "loc": 34878
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(18, 70%, 50%)",
                    "loc": 132963
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  
export const MyResponsiveSunburst = () => (
    <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.1
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.4
                ]
            ]
        }}
    />
)