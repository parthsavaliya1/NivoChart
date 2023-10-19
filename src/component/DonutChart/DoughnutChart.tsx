import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  { id: 'Category A', value: 300, color: 'hsl(120, 70%, 50%)' },
  { id: 'Category B', value: 200, color: 'hsl(240, 70%, 50%)' },
  { id: 'Category C', value: 100, color: 'hsl(60, 70%, 50%)' },
];

const MyDoughnutChart: React.FC = () => (
  <div style={{ height: '400px' }}>
    <ResponsivePie
      data={data}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
         />
  </div>
);

export default MyDoughnutChart;
