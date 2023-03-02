import { getIconUrl } from '../../utils/helpers'

interface IWeather {
  iconCode: number
  maxTemp: number
  lowTemp: number
  timestamp: number
}

function Weather({ iconCode, maxTemp, lowTemp, timestamp }: IWeather) {
  return (
    <div>
      <div className='flex items-center'>
        <img src={getIconUrl(iconCode)} alt='weather icon' className='h-12' />
        {/* <p className='text-5xl m-2 font-bold'>
  {currentTemp}
  <span>&deg;</span>
</p> */}
        <div className='ml-4'>
          <p>
            {maxTemp}
            <span>&deg;</span>
          </p>
          <p>
            {lowTemp}
            <span>&deg;</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Weather
