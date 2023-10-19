import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { format } from 'date-fns';

const HistoricalBarChart: React.FC = () => {
  // Example historical data
  const data = [
    {
      date: '2023-01-01',
      data1: 10,
      data2: 15,
    },
    {
      date: '2023-02-01',
      data1: 20,
      data2: 25,
    },
    {
      date: '2023-03-01',
      data1: 15,
      data2: 30,
    },
    // Add more data points here
  ];

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBar
        data={data}
        keys={['data1', 'data2']}
        indexBy="date"
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        padding={0.2}
        enableGridX={true}
        enableGridY={true}
        axisBottom={{
            format: (value) => format(new Date(value), 'MMM yyyy'), // Format date using date-fns
            tickValues: 'every 1 month',
          }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="black"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            itemWidth: 60,
            itemHeight: 20,
          },
        ]}
      />
    </div>
  );
};

export default HistoricalBarChart;
