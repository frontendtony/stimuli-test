import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: '#6C5DD3',
      pointRadius: 0,
      label: false,
    },
  ],
};

const options = {
  legend: { display: false },
  axes: { display: false },
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: false,
      },
    ],
    xAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: false,
      },
    ],
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
