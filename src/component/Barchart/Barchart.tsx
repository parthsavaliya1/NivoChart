
import { ResponsiveBar } from '@nivo/bar'

interface DataPoint {
  country: string;
  'hot dog': number;
  'burger': number;
  'sandwich': number;
  'kebab': number;
  'fries': number;
  'donut': number;
}

const data = [
    {
      "country": "AD",
      "hot dog": 6,
      "hot dogColor": "hsl(209, 70%, 50%)",
      "burger": 110,
      "burgerColor": "hsl(101, 70%, 50%)",
      "sandwich": 114,
      "sandwichColor": "hsl(78, 70%, 50%)",
      "kebab": 80,
      "kebabColor": "hsl(320, 70%, 50%)",
      "fries": 0,
      "friesColor": "hsl(336, 70%, 50%)",
      "donut": 126,
      "donutColor": "hsl(196, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 81,
      "hot dogColor": "hsl(347, 70%, 50%)",
      "burger": 14,
      "burgerColor": "hsl(104, 70%, 50%)",
      "sandwich": 96,
      "sandwichColor": "hsl(43, 70%, 50%)",
      "kebab": 124,
      "kebabColor": "hsl(253, 70%, 50%)",
      "fries": 130,
      "friesColor": "hsl(231, 70%, 50%)",
      "donut": 148,
      "donutColor": "hsl(213, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 92,
      "hot dogColor": "hsl(313, 70%, 50%)",
      "burger": 123,
      "burgerColor": "hsl(154, 70%, 50%)",
      "sandwich": 187,
      "sandwichColor": "hsl(97, 70%, 50%)",
      "kebab": 26,
      "kebabColor": "hsl(327, 70%, 50%)",
      "fries": 68,
      "friesColor": "hsl(41, 70%, 50%)",
      "donut": 139,
      "donutColor": "hsl(141, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 140,
      "hot dogColor": "hsl(305, 70%, 50%)",
      "burger": 75,
      "burgerColor": "hsl(166, 70%, 50%)",
      "sandwich": 105,
      "sandwichColor": "hsl(170, 70%, 50%)",
      "kebab": 200,
      "kebabColor": "hsl(305, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(144, 70%, 50%)",
      "donut": 37,
      "donutColor": "hsl(278, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 113,
      "hot dogColor": "hsl(106, 70%, 50%)",
      "burger": 37,
      "burgerColor": "hsl(312, 70%, 50%)",
      "sandwich": 84,
      "sandwichColor": "hsl(196, 70%, 50%)",
      "kebab": 3,
      "kebabColor": "hsl(80, 70%, 50%)",
      "fries": 179,
      "friesColor": "hsl(99, 70%, 50%)",
      "donut": 128,
      "donutColor": "hsl(171, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 49,
      "hot dogColor": "hsl(337, 70%, 50%)",
      "burger": 23,
      "burgerColor": "hsl(234, 70%, 50%)",
      "sandwich": 17,
      "sandwichColor": "hsl(310, 70%, 50%)",
      "kebab": 15,
      "kebabColor": "hsl(346, 70%, 50%)",
      "fries": 175,
      "friesColor": "hsl(144, 70%, 50%)",
      "donut": 57,
      "donutColor": "hsl(92, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 55,
      "hot dogColor": "hsl(76, 70%, 50%)",
      "burger": 20,
      "burgerColor": "hsl(180, 70%, 50%)",
      "sandwich": 71,
      "sandwichColor": "hsl(111, 70%, 50%)",
      "kebab": 151,
      "kebabColor": "hsl(27, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(148, 70%, 50%)",
      "donut": 178,
      "donutColor": "hsl(283, 70%, 50%)"
    }
  ]

export const MyResponsiveBar = () => {
  const castData: DataPoint[] = data as DataPoint[];
  console.log(castData)

  return (
    <ResponsiveBar
        data={castData}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
    />
)}