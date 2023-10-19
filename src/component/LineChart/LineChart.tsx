import { ResponsiveLine } from '@nivo/line'
const data =[
    {
      "id": "japan",
      "color": "hsl(83, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 82
        },
        {
          "x": "helicopter",
          "y": 235
        },
        {
          "x": "boat",
          "y": 114
        },
        {
          "x": "train",
          "y": 40
        },
        {
          "x": "subway",
          "y": 262
        },
        {
          "x": "bus",
          "y": 195
        },
        {
          "x": "car",
          "y": 90
        },
        {
          "x": "moto",
          "y": 167
        },
        {
          "x": "bicycle",
          "y": 8
        },
        {
          "x": "horse",
          "y": 39
        },
        {
          "x": "skateboard",
          "y": 44
        },
        {
          "x": "others",
          "y": 152
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(17, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 292
        },
        {
          "x": "helicopter",
          "y": 125
        },
        {
          "x": "boat",
          "y": 150
        },
        {
          "x": "train",
          "y": 261
        },
        {
          "x": "subway",
          "y": 284
        },
        {
          "x": "bus",
          "y": 225
        },
        {
          "x": "car",
          "y": 296
        },
        {
          "x": "moto",
          "y": 204
        },
        {
          "x": "bicycle",
          "y": 143
        },
        {
          "x": "horse",
          "y": 152
        },
        {
          "x": "skateboard",
          "y": 239
        },
        {
          "x": "others",
          "y": 35
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(200, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 16
        },
        {
          "x": "helicopter",
          "y": 229
        },
        {
          "x": "boat",
          "y": 88
        },
        {
          "x": "train",
          "y": 143
        },
        {
          "x": "subway",
          "y": 38
        },
        {
          "x": "bus",
          "y": 148
        },
        {
          "x": "car",
          "y": 225
        },
        {
          "x": "moto",
          "y": 159
        },
        {
          "x": "bicycle",
          "y": 233
        },
        {
          "x": "horse",
          "y": 135
        },
        {
          "x": "skateboard",
          "y": 136
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(106, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 179
        },
        {
          "x": "helicopter",
          "y": 70
        },
        {
          "x": "boat",
          "y": 207
        },
        {
          "x": "train",
          "y": 101
        },
        {
          "x": "subway",
          "y": 151
        },
        {
          "x": "bus",
          "y": 72
        },
        {
          "x": "car",
          "y": 33
        },
        {
          "x": "moto",
          "y": 192
        },
        {
          "x": "bicycle",
          "y": 207
        },
        {
          "x": "horse",
          "y": 83
        },
        {
          "x": "skateboard",
          "y": 105
        },
        {
          "x": "others",
          "y": 148
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(26, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 274
        },
        {
          "x": "helicopter",
          "y": 215
        },
        {
          "x": "boat",
          "y": 209
        },
        {
          "x": "train",
          "y": 180
        },
        {
          "x": "subway",
          "y": 0
        },
        {
          "x": "bus",
          "y": 68
        },
        {
          "x": "car",
          "y": 130
        },
        {
          "x": "moto",
          "y": 98
        },
        {
          "x": "bicycle",
          "y": 178
        },
        {
          "x": "horse",
          "y": 183
        },
        {
          "x": "skateboard",
          "y": 62
        },
        {
          "x": "others",
          "y": 157
        }
      ]
    }
  ]
export const MyResponsiveLine = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)