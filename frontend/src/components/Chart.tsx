import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#0ea5e9', '#f87171'],
        borderColor: ['#0ea5e9', '#f87171'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;