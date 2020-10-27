import { Bar } from 'react-chartjs-2';

export default function PageViewsChart() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Active',
        data: [400, 400, 400, 400, 400, 400, 400],
        backgroundColor: '#ffffff',
        barThickness: 4,
      },
      {
        label: 'Inactive',
        data: [200, 0, 0, 200, 200, 0, 0],
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        barThickness: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: '#ffffff',
          },
          gridLines: false,
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={{ ...options, legend: { display: false } }} />;
}
