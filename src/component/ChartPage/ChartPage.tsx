import { useRouter } from 'next/router';
import { MyResponsiveLine } from '../LineChart/LineChart';
import { MyResponsiveBar } from '../Barchart/Barchart';

function ChartPage() {
  const router = useRouter();
  const { chartType } = router.query;

  // Based on the chartType, conditionally render the corresponding chart component
  let ChartComponent;

  if (chartType === 'line') {
    ChartComponent = MyResponsiveLine;
  } else if (chartType === 'bar') {
    ChartComponent = MyResponsiveBar;
  } else {
    // Handle unknown chart types or provide a default component
    ChartComponent = MyResponsiveBar;
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">Selected Chart</h2>
      <div id="chartContainer" className="border p-4 bg-white">
        <ChartComponent />
      </div>
    </div>
  );
}

export default ChartPage;
