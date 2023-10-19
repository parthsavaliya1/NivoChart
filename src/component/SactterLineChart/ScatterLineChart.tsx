import React from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';

const data: Serie[] = [
  {
    id: 'Series 1',
    data: [
      { x: 0, y: 5 },
      { x: 1, y: 9 },
      { x: 2, y: 7 },
      { x: 3, y: 12 },
      { x: 4, y: 6 },
      { x: 5, y: 8 },
    ],
  },
];

const ScatterLineChart: React.FC = () => (
  <div style={{ width: '500px', height: '300px' }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
      xScale={{ type: 'linear' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
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
      enableGridX={false}
      enableGridY={true}
      enablePoints={true}
      enableArea={false}
      enableSlices="x"
      curve="natural"
      colors={{ scheme: 'nivo' }}
    />
  </div>
);

export default ScatterLineChart;
