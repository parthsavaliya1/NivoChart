import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'Sparkline',
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

const SparklineChart = () => (
  <div style={{ width: '1000px', height: '500px' }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      xScale={{ type: 'linear' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      enableArea={false}
      enableSlices="x"
      curve="monotoneX"
      colors={{ scheme: 'nivo' }}
    />
  </div>
);

export default SparklineChart;
