import { THourly } from '../types/weatherType'
import Hourly from './weather/Hourly'

interface IHourlyWeather {
  hourly: THourly[]
}

function HourlyWeather({ hourly }: IHourlyWeather) {
  return (
    <div>
      {hourly.map(weather => {
        return <Hourly key={weather.timestamp} temp={weather.temp} timestamp={weather.timestamp} />
      })}
    </div>
  )
}

export default HourlyWeather
