import React from 'react';
import { ResponsiveStream } from '@nivo/stream';

const data = [
  {
    id: 'Category A',
    data: [
      { x: 0, y: 5 },
      { x: 1, y: 8 },
      { x: 2, y: 12 },
      { x: 3, y: 10 },
      { x: 4, y: 6 },
      { x: 5, y: 4 },
    ],
  },
  {
    id: 'Category B',
    data: [
      { x: 0, y: 7 },
      { x: 1, y: 10 },
      { x: 2, y: 8 },
      { x: 3, y: 15 },
      { x: 4, y: 12 },
      { x: 5, y: 7 },
    ],
  },
  {
    id: 'Category C',
    data: [
      { x: 0, y: 2 },
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 5 },
      { x: 4, y: 3 },
      { x: 5, y: 2 },
    ],
  },
];

const StackedAreaChart = () => (
  <div style={{ width: '500px', height: '300px' }}>
    <ResponsiveStream
      data={data}
      keys={['Category A', 'Category B', 'Category C']}
      margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
      xScale={{ type: 'linear' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      axisBottom={{
        legend: 'X Axis',
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        legend: 'Y Axis',
        legendPosition: 'middle',
        legendOffset: -70,
      }}
      curve="monotoneX"
      colors={{ scheme: 'nivo' }}
    />
  </div>
);

export default StackedAreaChart;
