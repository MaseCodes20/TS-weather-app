import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'
import { WeatherDaTa } from '../types/weatherType'
import CurrentWeather from './weather/CurrentWeather'

function Weather() {
  const { data, isSuccess } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  console.log(data)
  return <div className='flex items-center justify-center min-h-screen'>{isSuccess && <CurrentWeather current={data!.current} />}</div>
}

export default Weather
