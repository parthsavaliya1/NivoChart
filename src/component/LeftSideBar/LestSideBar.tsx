// LeftSidebar.js
import Link from 'next/link';

function LeftSidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link passHref href="/line">Line Chart</Link>
        </li>
        <li>
          <Link passHref href="/bar">Bar Chart</Link>
        </li>
        <li>
          <Link passHref href="/chord">Chord Chart</Link>
        </li>
        <li>
          <Link passHref href="/circle-packing">Circle Packing Chart</Link>
        </li>
        <li>
          <Link passHref href="/cumulative-line">Cumulative Line Chart</Link>
        </li>
        <li>
          <Link passHref href="/dounghnut">Dounghnut Chart</Link>
        </li>
        <li>
          <Link passHref href="/hirarchical-edge">Hirarchical Edge Chart</Link>
        </li>
        <li>
          <Link passHref href="/historical-bar">Historical Bar Chart</Link>
        </li>
        <li>
          <Link passHref href="/hiveplot">Hiveplot Chart</Link>
        </li>
        <li>
          <Link passHref href="/line-bar">Line Bar Chart</Link>
        </li>
        <li>
          <Link passHref href="/line-with-focus">Line With Focus Chart</Link>
        </li>
        <li>
          <Link passHref href="/multi-bar-horizontal">Multibar Horizontal Chart</Link>
        </li>
        <li>
          <Link passHref href="/multi-bar">Multibar Chart</Link>
        </li>
        <li>
          <Link passHref href="/network">Network Chart</Link>
        </li>
        <li>
          <Link passHref href="/ohlc">OHLC Chart</Link>
        </li>
        <li>
          <Link passHref href="/parallel-cordinate">Parallel Cordinate Chart</Link>
        </li>
        <li>
          <Link passHref href="/pie">Pie Chart</Link>
        </li>
        <li>
          <Link passHref href="/radar">Radar Chart</Link>
        </li>
        <li>
          <Link passHref href="/sankey">Sankey Chart</Link>
        </li>
        <li>
          <Link passHref href="/scatter-line">Scatter Line Chart</Link>
        </li>
        <li>
          <Link passHref href="/scatter-plot">Scatter Plot Chart</Link>
        </li>
        <li>
          <Link passHref href="/spark-line">Spark Line Chart</Link>
        </li>
        <li>
          <Link passHref href="/stacked-area">Stacked Area Chart</Link>
        </li>
        <li>
          <Link passHref href="/subburst">Subburst Chart</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default LeftSidebar;
