import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'
import DailyWeather from './DailyWeather'
import CurrentWeather from './weather/CurrentWeather'

function DailyForecast() {
  const { data, isSuccess } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  console.log(data)
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {isSuccess && (
        <>
          <CurrentWeather current={data!.current} /> <DailyWeather daily={data!.daily} />{' '}
        </>
      )}
    </div>
  )
}

export default DailyForecast
