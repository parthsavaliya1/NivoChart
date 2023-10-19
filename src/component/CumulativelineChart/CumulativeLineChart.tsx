import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const CumulativeLineChart = () => {
  // Sample data for the cumulative line chart
  const data = [
    {
      id: 'Series 1',
      data: [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
        { x: 3, y: 40 },
        { x: 4, y: 50 },
        { x: 5, y: 60 },
        { x: 6, y: 70 },
        { x: 7, y: 80 },
        { x: 8, y: 90 },
        { x: 9, y: 100 },
      ],
    },
    {
      id: 'Series 2',
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 15 },
        { x: 2, y: 25 },
        { x: 3, y: 35 },
        { x: 4, y: 45 },
        { x: 5, y: 55 },
        { x: 6, y: 65 },
        { x: 7, y: 75 },
        { x: 8, y: 85 },
        { x: 9, y: 95 },
      ],
    },
  ];

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legend: 'X Axis',
          legendOffset: 36,
        }}
        axisLeft={{
          legend: 'Y Axis',
          legendOffset: -40,
        }}
        enableGridX
        enablePoints={true}
        enableArea={true}
        lineWidth={2}
        colors={['#3e9b00']}
      />
    </div>
  );
};

export default CumulativeLineChart;
