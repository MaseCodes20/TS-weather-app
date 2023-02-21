import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'

function Weather() {
  const { data } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  console.log(data)
  return <div>Weather</div>
}

export default Weather
