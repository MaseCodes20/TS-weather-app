import { useQuery } from 'react-query'
import { getWeather } from '../api/weaterAPI'

function Weather() {
  const { data } = useQuery('weather', () => getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone))

  console.log(data)
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div>
        <div className='w-[300px] h-[300px] bg-fuchsia-300 rounded-md p-3'>
          <p className='text-5xl m-2 font-bold'>
            {data?.current.currentTemp}
            <span>&deg;</span>
          </p>

          <div className='flex items-center justify-between w-[100px]'>
            <div>
              <p>High</p>
              <p>
                {data?.current.highTemp}
                <span>&deg;</span>
              </p>
            </div>
            <div>
              <p>Low</p>
              <p>
                {data?.current.lowTemp}
                <span>&deg;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
