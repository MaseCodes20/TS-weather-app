import { CurrentWeather } from '../../types/weatherType'
import { getIconUrl } from '../../utils/helpers'

interface ICurrentWeather {
  current: CurrentWeather
}

function CurrentWeather({ current }: ICurrentWeather) {
  return (
    <div>
      <div className='w-[300px] h-[300px] bg-fuchsia-300 rounded-md p-3'>
        <p className='text-5xl m-2 font-bold'>
          {current.currentTemp}
          <span>&deg;</span>
        </p>

        <img src={getIconUrl(current.iconCode)} alt='weather icon' />

        <div className='flex items-center justify-between w-[100px]'>
          <div>
            <p>High</p>
            <p>
              {current.highTemp}
              <span>&deg;</span>
            </p>
          </div>
          <div>
            <p>Low</p>
            <p>
              {current.lowTemp}
              <span>&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
