import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface OHLCData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}


  

const OHLCChart: React.FC<{ data: OHLCData[]; width: number; height: number }> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (data.length === 0 || !svgRef.current) return;

    const xScale = d3.scaleTime()
      .domain([d3.min(data, d => d.date)!, d3.max(data, d => d.date)!])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.low)!, d3.max(data, d => d.high)!])
      .range([height, 0]);

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create the OHLC bars
    svg.selectAll('line.ohlc')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'ohlc') // Add a class for styling
      .attr('x1', d => xScale(d.date))
      .attr('x2', d => xScale(d.date))
      .attr('y1', d => yScale(d.high))
      .attr('y2', d => yScale(d.low))
      .attr('stroke', 'black')
      .attr('stroke-width', 2);

    // Create open/close tick marks
    svg.selectAll('line.open')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'open') // Add a class for styling
      .attr('x1', d => xScale(d.date) - 10)
      .attr('x2', d => xScale(d.date))
      .attr('y1', d => yScale(d.open))
      .attr('y2', d => yScale(d.open))
      .attr('stroke', 'green')
      .attr('stroke-width', 2);

    svg.selectAll('line.close')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'close') // Add a class for styling
      .attr('x1', d => xScale(d.date))
      .attr('x2', d => xScale(d.date) + 10)
      .attr('y1', d => yScale(d.close))
      .attr('y2', d => yScale(d.close))
      .attr('stroke', 'red')
      .attr('stroke-width', 2);

    // Define x and y scales based on data
    

    // You can add axis or additional chart elements here if needed.

  }, [data, width, height]);

  return <svg ref={svgRef} />;
};

export default OHLCChart;
