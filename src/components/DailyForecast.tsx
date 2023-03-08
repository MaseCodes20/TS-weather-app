import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'
import DailyWeather from './DailyWeather'
import HourlyWeather from './HourlyWeather'
import CurrentWeather from './weather/CurrentWeather'

function DailyForecast() {
  const { data, isSuccess } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {isSuccess && (
        <div>
          <div className='flex items-center justify-center'>
            <CurrentWeather current={data!.current} /> <DailyWeather daily={data!.daily} />{' '}
          </div>
          <HourlyWeather hourly={data!.hourly} />
        </div>
      )}
    </div>
  )
}

export default DailyForecast
