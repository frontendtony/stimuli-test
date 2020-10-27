import { Bar } from 'react-chartjs-2';

export default function NewUsersChart() {
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Active',
        data: [200, 400, 300, 400, 200],
        backgroundColor: ['#A0D7E7', '#0049C6', '#A0D7E7', '#A0D7E7', '#A0D7E7'],
        barThickness: 21,
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
