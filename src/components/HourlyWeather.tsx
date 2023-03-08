import { THourly } from '../types/weatherType'
import Hourly from './weather/Hourly'
import { Line } from 'react-chartjs-2'
import LineChart from './LineChart'

interface IHourlyWeather {
  hourly: THourly[]
}

function HourlyWeather({ hourly }: IHourlyWeather) {
  const timestamps = hourly.map(weather => weather.timestamp).slice(0, 25)
  const temps = hourly.map(weather => weather.temp).slice(0, 25)

  return (
    <div className=''>
      <LineChart timestamps={timestamps} temps={temps} />
    </div>
  )
}

export default HourlyWeather
