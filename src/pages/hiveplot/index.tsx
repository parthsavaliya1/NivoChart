import HivePlotChart from '@/component/HivePlotChart/HivePlotChart'
import React from 'react'

const data = [
    {
      name: 'Node 1',
      axes: [
        { axis: 'Axis 1', value: 50 },
        { axis: 'Axis 2', value: 80 },
        { axis: 'Axis 3', value: 30 },
      ],
    },
    {
      name: 'Node 2',
      axes: [
        { axis: 'Axis 1', value: 70 },
        { axis: 'Axis 2', value: 40 },
        { axis: 'Axis 3', value: 60 },
      ],
    },
    {
      name: 'Node 3',
      axes: [
        { axis: 'Axis 1', value: 30 },
        { axis: 'Axis 2', value: 60 },
        { axis: 'Axis 3', value: 70 },
      ],
    },
    {
      name: 'Node 4',
      axes: [
        { axis: 'Axis 1', value: 80 },
        { axis: 'Axis 2', value: 50 },
        { axis: 'Axis 3', value: 40 },
      ],
    },
    {
      name: 'Node 5',
      axes: [
        { axis: 'Axis 1', value: 60 },
        { axis: 'Axis 2', value: 40 },
        { axis: 'Axis 3', value: 70 },
      ],
    },
    {
      name: 'Node 6',
      axes: [
        { axis: 'Axis 1', value: 40 },
        { axis: 'Axis 2', value: 70 },
        { axis: 'Axis 3', value: 50 },
      ],
    },
    // Add more data points
  ];
function HivePlot() {
  return (
    <div>
     <HivePlotChart data={data} width={500} height={500}/> 
    </div>
  )
}

export default HivePlot
