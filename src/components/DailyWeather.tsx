import { Daily } from '../types/weatherType'
import Weather from './weather/Weather'

interface IDailyWeather {
  daily: Daily[]
}

function DailyWeather({ daily }: IDailyWeather) {
  return (
    <div className='flex items-center'>
      {daily.slice(1).map(day => (
        <Weather key={day.timestamp} timestamp={day.timestamp} iconCode={day.iconCode} lowTemp={day.lowTemp} maxTemp={day.maxTemp} />
      ))}
    </div>
  )
}

export default DailyWeather
