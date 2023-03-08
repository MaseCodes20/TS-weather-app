import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface ILineChart {
  timestamps: number[]
  temps: number[]
}

function LineChart({ timestamps, temps }: ILineChart) {
  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: 'numeric' })

  const timeLabels = timestamps.map((time: number) => DAY_FORMATTER.format(time))

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  const data = {
    labels: [...timeLabels],
    datasets: [
      {
        label: 'Hourly weather',
        data: [...temps],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return <Line options={options} data={data} />
}

export default LineChart
