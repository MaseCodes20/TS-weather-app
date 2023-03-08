import { THourly } from '../types/weatherType'
import LineChart from './LineChart'

interface IHourlyWeather {
  hourly: THourly[]
}

function HourlyWeather({ hourly }: IHourlyWeather) {
  const timestamps = hourly.map(weather => weather.timestamp).slice(0, 25)
  const temps = hourly.map(weather => weather.temp).slice(0, 25)

  return (
    <div className='flex items-center justify-center'>
      <LineChart timestamps={timestamps} temps={temps} />
    </div>
  )
}

export default HourlyWeather
