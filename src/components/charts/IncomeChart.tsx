import { Bar } from 'react-chartjs-2';

export default function IncomeChart() {
  const data = {
    labels: ['1', '2', '3'],
    datasets: [
      {
        label: 'Active',
        data: [60, 45, 35],
        backgroundColor: '#6C5DD3',
      },
      {
        label: 'Active',
        data: [50, 35, 25],
        backgroundColor: '#A0D7E7',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#808191',
          },
          gridLines: false,
        },
      ],
      xAxes: [
        {
          barPercentage: 0.8,
          stacked: false,
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
