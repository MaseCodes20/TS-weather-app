import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'
import { WeatherDaTa } from '../types/weatherType'
import { getIconUrl } from '../utils/helpers'
import CurrentWeather from './weather/CurrentWeather'

type TData = {
  data: WeatherDaTa
}

function Weather() {
  const { data } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  console.log(data)
  return <div className='flex items-center justify-center min-h-screen'>{/* <CurrentWeather current={current} /> */}</div>
}

export default Weather
