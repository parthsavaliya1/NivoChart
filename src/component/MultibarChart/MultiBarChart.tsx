import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    country: 'USA',
    '2021': 300,
    '2022': 350,
    '2023': 400,
  },
  {
    country: 'Canada',
    '2021': 200,
    '2022': 250,
    '2023': 300,
  },
  {
    country: 'Mexico',
    '2021': 150,
    '2022': 175,
    '2023': 200,
  },
];

const VerticalMultibarChart: React.FC = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={['2021', '2022', '2023']}
        indexBy="country"
        margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        layout="vertical"  // Set layout to "vertical"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
            itemTextColor: '#999',
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default VerticalMultibarChart;
