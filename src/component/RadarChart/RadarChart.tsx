import React from 'react';
import { ResponsiveRadar, RadarProps } from '@nivo/radar';

const data = [
  {
    "taste": "fruity",
    "chardonay": 106,
    "carmenere": 24,
    "syrah": 37
  },
  {
    "taste": "bitter",
    "chardonay": 48,
    "carmenere": 82,
    "syrah": 38
  },
  {
    "taste": "heavy",
    "chardonay": 71,
    "carmenere": 101,
    "syrah": 51
  },
  {
    "taste": "strong",
    "chardonay": 102,
    "carmenere": 39,
    "syrah": 37
  },
  {
    "taste": "sunny",
    "chardonay": 107,
    "carmenere": 31,
    "syrah": 54
  }
];

const MyResponsiveRadar: React.FC = () => (
  <div style={{ width: '500px', height: '500px' }}>
    <ResponsiveRadar
      data={data}
      keys={['chardonay', 'carmenere', 'syrah']}
      indexBy="taste"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'nivo' }}
      blendMode="multiply"
    //   motionConfig="wobbly"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
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
  </div>
);

export default MyResponsiveRadar;
