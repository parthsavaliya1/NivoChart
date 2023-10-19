
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

const data = {
    "name": "nivo",
    "color": "hsl(242, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(56, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(5, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(323, 70%, 50%)",
                "loc": 11942
              },
              {
                "name": "xAxis",
                "color": "hsl(220, 70%, 50%)",
                "loc": 56985
              },
              {
                "name": "yAxis",
                "color": "hsl(325, 70%, 50%)",
                "loc": 35549
              },
              {
                "name": "layers",
                "color": "hsl(154, 70%, 50%)",
                "loc": 135756
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(241, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(138, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(308, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(27, 70%, 50%)",
                        "loc": 45149
                      },
                      {
                        "name": "slices",
                        "color": "hsl(354, 70%, 50%)",
                        "loc": 180003
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(206, 70%, 50%)",
                        "loc": 185438
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(140, 70%, 50%)",
                    "loc": 116346
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(169, 70%, 50%)",
                    "loc": 142965
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(174, 70%, 50%)",
                "loc": 34843
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(57, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(293, 70%, 50%)",
            "loc": 133865
          },
          {
            "name": "hsl",
            "color": "hsl(354, 70%, 50%)",
            "loc": 165184
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(344, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(260, 70%, 50%)",
            "loc": 34000
          },
          {
            "name": "resetClock",
            "color": "hsl(277, 70%, 50%)",
            "loc": 169785
          },
          {
            "name": "noop",
            "color": "hsl(343, 70%, 50%)",
            "loc": 62160
          },
          {
            "name": "tick",
            "color": "hsl(169, 70%, 50%)",
            "loc": 36795
          },
          {
            "name": "forceGC",
            "color": "hsl(131, 70%, 50%)",
            "loc": 183395
          },
          {
            "name": "stackTrace",
            "color": "hsl(354, 70%, 50%)",
            "loc": 135943
          },
          {
            "name": "dbg",
            "color": "hsl(122, 70%, 50%)",
            "loc": 187326
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(167, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(116, 70%, 50%)",
            "loc": 185153
          },
          {
            "name": "city",
            "color": "hsl(277, 70%, 50%)",
            "loc": 22701
          },
          {
            "name": "animal",
            "color": "hsl(85, 70%, 50%)",
            "loc": 162256
          },
          {
            "name": "movie",
            "color": "hsl(19, 70%, 50%)",
            "loc": 58816
          },
          {
            "name": "user",
            "color": "hsl(301, 70%, 50%)",
            "loc": 21908
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(63, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(27, 70%, 50%)",
            "loc": 118634
          },
          {
            "name": "intersect",
            "color": "hsl(341, 70%, 50%)",
            "loc": 59204
          },
          {
            "name": "merge",
            "color": "hsl(182, 70%, 50%)",
            "loc": 147922
          },
          {
            "name": "reverse",
            "color": "hsl(73, 70%, 50%)",
            "loc": 16993
          },
          {
            "name": "toArray",
            "color": "hsl(163, 70%, 50%)",
            "loc": 41113
          },
          {
            "name": "toObject",
            "color": "hsl(175, 70%, 50%)",
            "loc": 164753
          },
          {
            "name": "fromCSV",
            "color": "hsl(133, 70%, 50%)",
            "loc": 67739
          },
          {
            "name": "slice",
            "color": "hsl(356, 70%, 50%)",
            "loc": 145788
          },
          {
            "name": "append",
            "color": "hsl(225, 70%, 50%)",
            "loc": 47876
          },
          {
            "name": "prepend",
            "color": "hsl(337, 70%, 50%)",
            "loc": 33391
          },
          {
            "name": "shuffle",
            "color": "hsl(111, 70%, 50%)",
            "loc": 135417
          },
          {
            "name": "pick",
            "color": "hsl(264, 70%, 50%)",
            "loc": 149251
          },
          {
            "name": "plouc",
            "color": "hsl(169, 70%, 50%)",
            "loc": 115970
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(208, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(8, 70%, 50%)",
            "loc": 106323
          },
          {
            "name": "slugify",
            "color": "hsl(96, 70%, 50%)",
            "loc": 175540
          },
          {
            "name": "snakeCase",
            "color": "hsl(264, 70%, 50%)",
            "loc": 35747
          },
          {
            "name": "camelCase",
            "color": "hsl(73, 70%, 50%)",
            "loc": 104788
          },
          {
            "name": "repeat",
            "color": "hsl(143, 70%, 50%)",
            "loc": 121595
          },
          {
            "name": "padLeft",
            "color": "hsl(315, 70%, 50%)",
            "loc": 45764
          },
          {
            "name": "padRight",
            "color": "hsl(317, 70%, 50%)",
            "loc": 78156
          },
          {
            "name": "sanitize",
            "color": "hsl(248, 70%, 50%)",
            "loc": 101056
          },
          {
            "name": "ploucify",
            "color": "hsl(188, 70%, 50%)",
            "loc": 40036
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(193, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(119, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(5, 70%, 50%)",
                "loc": 150249
              },
              {
                "name": "HOWDY",
                "color": "hsl(213, 70%, 50%)",
                "loc": 13774
              },
              {
                "name": "aloha",
                "color": "hsl(16, 70%, 50%)",
                "loc": 38629
              },
              {
                "name": "AHOY",
                "color": "hsl(107, 70%, 50%)",
                "loc": 9764
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(348, 70%, 50%)",
            "loc": 103644
          },
          {
            "name": "path",
            "color": "hsl(132, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(46, 70%, 50%)",
                "loc": 154773
              },
              {
                "name": "pathB",
                "color": "hsl(244, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(156, 70%, 50%)",
                    "loc": 113020
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(192, 70%, 50%)",
                    "loc": 172858
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(30, 70%, 50%)",
                    "loc": 57323
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(88, 70%, 50%)",
                    "loc": 77886
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(280, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(143, 70%, 50%)",
                    "loc": 180741
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(155, 70%, 50%)",
                    "loc": 57363
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(206, 70%, 50%)",
                    "loc": 78313
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(175, 70%, 50%)",
                    "loc": 93674
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(83, 70%, 50%)",
                    "loc": 138857
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(345, 70%, 50%)",
                    "loc": 23860
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(133, 70%, 50%)",
                    "loc": 185656
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(209, 70%, 50%)",
                    "loc": 28737
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(250, 70%, 50%)",
                    "loc": 193997
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
}

export const MyResponsiveCirclePacking = () => (
    <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.4
                ]
            ]
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={n=>2===n.node.depth}
        labelsSkipRadius={10}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.5
                ]
            ]
        }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[
            {
                match: {
                    depth: 1
                },
                id: 'lines'
            }
        ]}
    />
)