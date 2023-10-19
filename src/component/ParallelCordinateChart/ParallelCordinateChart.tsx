import React from 'react';
import { ResponsiveParallelCoordinates, ParallelCoordinatesProps } from '@nivo/parallel-coordinates';

const MyResponsiveParallelCoordinates: React.FC = () => {
  const chartData = [
    {
      "temp": 0.32522522783048124,
      "cost": 31091,
      "weight": 293,
      "volume": 4.6847521484687205,
      "id": "A"
    },
    {
      "temp": 15.816267141436011,
      "cost": 39617,
      "weight": 233,
      "volume": 3.0392083930516716,
      "id": "B"
    },
    {
      "temp": 1.1835695712086292,
      "cost": 36322,
      "weight": 159,
      "volume": 2.9863030125958483,
      "id": "C"
    },
    {
      "temp": 29.233810719892837,
      "cost": 29298,
      "weight": 102,
      "volume": 2.868562325251363,
      "id": "D"
    },
    {
      "temp": 26.510352594547477,
      "cost": 36794,
      "weight": 57,
      "volume": 3.659007292561714,
      "id": "E"
    },
    {
      "temp": 4.331764524168278,
      "cost": 28994,
      "weight": 242,
      "volume": 2.6873649375096655,
      "id": "F"
    },
    {
      "temp": -6.999975538999883,
      "cost": 22089,
      "weight": 137,
      "volume": 6.136578919857695,
      "id": "G"
    },
    {
      "temp": 30.97863687434735,
      "cost": 8404,
      "weight": 252,
      "volume": 2.3383705982671947,
      "id": "H"
    },
    {
      "temp": 5.977399349325417,
      "cost": 3411,
      "weight": 38,
      "volume": 3.2446688087943754,
      "id": "I"
    },
    {
      "temp": 0.6369869683355702,
      "cost": 15994,
      "weight": 139,
      "volume": 4.202476114923169,
      "id": "J"
    }
  ];

  const chartProps: ParallelCoordinatesProps = {
    data: chartData,
    variables: [
      {
        id: 'temp',
        key: 'temp', // Use 'key' instead of 'value'
        type: 'linear', // Specify the scale type
        min: 'auto',
        max: 'auto',
        ticksPosition: 'before',
        legendPosition: 'start',
        legendOffset: 20
      },
      {
        id: 'cost',
        key: 'cost',
        type: 'linear',
        min: 0,
        max: 'auto',
        ticksPosition: 'before',
        legendPosition: 'start',
        legendOffset: 20
      },
      {
        id: 'weight',
        key: 'weight',
        type: 'linear',
        min: 'auto',
        max: 'auto',
        legendPosition: 'start',
        legendOffset: -20
      },
      {
        id: 'volume',
        key: 'volume',
        type: 'linear',
        min: 0,
        max: 'auto',
        legendPosition: 'start',
        legendOffset: -20
      }
    ],
    margin: { top: 50, right: 120, bottom: 50, left: 60 },
    lineWidth: 3,
    legends: [
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 60,
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
    ],
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <ResponsiveParallelCoordinates {...chartProps} />
    </div>
  );
};

export default MyResponsiveParallelCoordinates;
