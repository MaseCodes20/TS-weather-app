import { getIconUrl } from '../../utils/helpers'

interface IWeather {
  iconCode: number
  maxTemp: number
  lowTemp: number
  timestamp: number
}

function Weather({ iconCode, maxTemp, lowTemp, timestamp }: IWeather) {
  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long', day: 'numeric' })
  const [date, weekday] = DAY_FORMATTER.format(timestamp).split(' ')

  return (
    <div className='bg-fuchsia-300 rounded-md p-3'>
      <h2 className='font-semibold'>
        {weekday} {date}
      </h2>
      <div className='flex items-center'>
        <img src={getIconUrl(iconCode)} alt='weather icon' className='h-12' />
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
