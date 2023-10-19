
import { ResponsiveSankey } from '@nivo/sankey'

const data = {
    "nodes": [
      {
        "id": "John",
        "nodeColor": "hsl(322, 70%, 50%)"
      },
      {
        "id": "Raoul",
        "nodeColor": "hsl(327, 70%, 50%)"
      },
      {
        "id": "Jane",
        "nodeColor": "hsl(247, 70%, 50%)"
      },
      {
        "id": "Marcel",
        "nodeColor": "hsl(345, 70%, 50%)"
      },
      {
        "id": "Ibrahim",
        "nodeColor": "hsl(77, 70%, 50%)"
      },
      {
        "id": "Junko",
        "nodeColor": "hsl(12, 70%, 50%)"
      }
    ],
    "links": [
      {
        "source": "Raoul",
        "target": "Marcel",
        "value": 195
      },
      {
        "source": "Raoul",
        "target": "John",
        "value": 105
      },
      {
        "source": "Raoul",
        "target": "Ibrahim",
        "value": 47
      },
      {
        "source": "Raoul",
        "target": "Junko",
        "value": 54
      },
      {
        "source": "Ibrahim",
        "target": "Jane",
        "value": 120
      },
      {
        "source": "Ibrahim",
        "target": "Junko",
        "value": 75
      },
      {
        "source": "Ibrahim",
        "target": "John",
        "value": 200
      },
      {
        "source": "Jane",
        "target": "Marcel",
        "value": 31
      },
      {
        "source": "Jane",
        "target": "Junko",
        "value": 66
      },
      {
        "source": "John",
        "target": "Marcel",
        "value": 97
      },
      {
        "source": "Marcel",
        "target": "Junko",
        "value": 28
      }
    ]
  }

export const MyResponsiveSankey = () => (
    <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.8
                ]
            ]
        }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: 'right-to-left',
                itemsSpacing: 2,
                itemTextColor: '#999',
                symbolSize: 14,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)