import React from "react";
import { Bar } from "@nivo/bar";
import { line, curveCatmullRom } from "d3-shape";

const barColor = "#bd7a0f";
const lineColor = "rgba(200, 30, 15, 1)";

const data = [
  { x: "0", v: 2.7 },
  { x: "1", v: 3.3 },
  { x: "2", v: 3.8 },
  { x: "3", v: 4.3 },
  { x: "4", v: 1.7 },
  { x: "5", v: 2.2 },
  { x: "6", v: 5.5 },
  { x: "7", v: 6.0 },
];

const Scatter = ({ bars, xScale, yScale }: any) => {
  return (
    <>
      {bars.map((bar: any) => (
        <circle
          key={`point-${bar.data.data.x}`}
          cx={xScale(bar.data.index) + bar.width / 2}
          cy={yScale(bar.data.data.v + 0.2)}
          r={3}
          fill="black"
          stroke="black"
          style={{ pointerEvents: "none" }}
        />
      ))}
    </>
  );
};

const Line = ({ bars, xScale, yScale }: any) => {
  const lineGenerator = line<any>()
    .x((bar) => xScale(bar.data.index) + bar.width / 2)
    .y((bar) => yScale(bar.data.data.v + 0.2))
    .curve(curveCatmullRom.alpha(0.5));

  return (
    <>
      <path
        d={lineGenerator(bars) || ""}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: "none", strokeWidth: "2" }}
      />
    </>
  );
};

const LineBarChart: React.FC = () => (
  <div className="App">
    <Bar
      width={500}
      height={400}
      data={data}
      keys={["v"]}
      maxValue={6.6}
      padding={0.6}
      margin={{
        top: 10,
        right: 10,
        bottom: 36,
        left: 36,
      }}
      indexBy="x"
      enableLabel={false}
      colors={[barColor]}
      borderRadius={2}
      axisLeft={{
        tickValues: 7,
      }}
      layers={["grid", "axes", "bars", Scatter, Line, "markers", "legends"]}
    />
  </div>
);

export default LineBarChart;
