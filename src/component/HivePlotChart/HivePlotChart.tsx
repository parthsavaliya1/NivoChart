import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node {
  name: string;
  axes: { axis: string; value: number }[];
}

interface Props {
  data: Node[];
  width: number;
  height: number;
}

const HivePlotChart: React.FC<Props> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const axisNames = data[0].axes.map((d) => d.axis);
    const numAxes = axisNames.length;

    const radius = Math.min(width, height) / 2 - 50;
    const angleSlice = (Math.PI * 2) / numAxes;

    // Create scales for each axis
    const scales: Record<string, d3.ScaleLinear<number, number>> = {};
    axisNames.forEach((axis, index) => {
      scales[axis] = d3.scaleLinear()
        .domain([0, 100]) // Customize the domain based on your data
        .range([0, radius])
        .nice();
    });

    // Draw axes
    axisNames.forEach((axis, index) => {
      const angle = index * angleSlice;
      const line = d3.line()([
        [width / 2, height / 2],
        [
          width / 2 + scales[axis](100) * Math.cos(angle - Math.PI / 2),
          height / 2 + scales[axis](100) * Math.sin(angle - Math.PI / 2),
        ],
      ]);

      svg.append('path')
        .datum(data)
        .attr('d', line)
        .attr('class', 'radar-line')
        .style('stroke', 'gray')
        .style('stroke-width', '1')
        .style('fill', 'none');
    });

    // Draw nodes and links
    data.forEach((d) => {
      const coordinates = d.axes.map((axis) => {
        const scale = scales[axis.axis];
        const angle = axisNames.indexOf(axis.axis) * angleSlice;
        return [
          width / 2 + scale(axis.value) * Math.cos(angle - Math.PI / 2),
          height / 2 + scale(axis.value) * Math.sin(angle - Math.PI / 2),
        ];
      });

      // Draw links
svg.append('path')
.datum(coordinates.map((d) => ({ x: d[0], y: d[1] })))
.attr('d', d3.line().curve(d3.curveCardinalClosed) as any) // Cast to 'any' to avoid TypeScript error
.style('fill', 'none')
.style('stroke', 'blue')
.style('stroke-width', '1');

      // Draw nodes
      svg.selectAll('.node')
        .data(coordinates)
        .enter()
        .append('circle')
        .attr('class', 'node')
        .attr('cx', (d:any) => d[0])
        .attr('cy', (d:any) => d[1])
        .attr('r', 5)
        .style('fill', 'red');
    });
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default HivePlotChart;
