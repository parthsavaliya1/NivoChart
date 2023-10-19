import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'Series 1',
    data: [
      { x: '2023-01-01', y: 10 },
      { x: '2023-02-01', y: 20 },
      { x: '2023-03-01', y: 15 },
      { x: '2023-04-01', y: 30},
      { x: '2023-05-01', y: 40 },
      { x: '2023-06-01', y: 10 },
    ],
  },
];

const LineChartWithFocus: React.FC = () => {
  const [highlightedData, setHighlightedData] = useState<null | any[]>(null);

  const handleDataPointClick = (point: any) => {
    // Handle data point click (e.g., show details)
    console.log('Data Point Clicked:', point);
  };

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 50, left: 60 }}
        xScale={{ type: 'time', format: '%Y-%m-%d', useUTC: false }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 1 month',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
        }}
        enableSlices="x"
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 2,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
          },
        ]}
        enablePointLabel={true}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        sliceTooltip={({ slice }) => {
          setHighlightedData(slice.points);
          return null;
        }}
        onClick={handleDataPointClick}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 12,
              },
            },
          },
        }}
      />
     
    </div>
  );
};

export default LineChartWithFocus;
