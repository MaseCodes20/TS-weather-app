import { TCurrentWeather } from '../../types/weatherType'
import { getIconUrl } from '../../utils/helpers'

interface ICurrentWeather {
  current: TCurrentWeather
}

function CurrentWeather({ current }: ICurrentWeather) {
  const wdisplay = {
    0: 'sun',
    1: 'sun',
    2: 'gloomy',
    3: 'cloudy',
    45: 'smog',
    48: 'smog',
    51: 'Heavy rain',
    53: 'Heavy rain',
    55: 'Heavy rain',
    56: 'Heavy rain',
    57: 'Heavy rain',
    61: 'Heavy rain',
    63: 'Heavy rain',
    65: 'Heavy rain',
    66: 'Heavy rain',
    67: 'Heavy rain',
    80: 'Heavy rain',
    81: 'Heavy rain',
    82: 'Heavy rain',
    71: 'snow',
    73: 'snow',
    75: 'snow',
    77: 'snow',
    85: 'snow',
    86: 'snow',
    95: 'Thunder storm',
    96: 'Thunder storm',
    99: 'Thunder storm',
  }

  return (
    <div>
      <div className='w-[300px] bg-fuchsia-300 rounded-md p-3 mr-4'>
        <h2 className='font-semibold text-[#046]'>Today</h2>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='relative flex items-center'>
              <img src={getIconUrl(current.iconCode)} alt='weather icon' className='h-12' />
            </div>

            <div className='ml-4'>
              <p>
                {current.highTemp}
                <span>&deg;</span>
              </p>
              <p>
                {current.lowTemp}
                <span>&deg;</span>
              </p>
            </div>
          </div>

          <div className='text-center text-white bg-[#046] p-2 rounded-md'>
            {/* <p>Current</p> */}
            <p className='text-xl font-bold '>
              {current.currentTemp}
              <span>&deg;</span>
            </p>
          </div>

          <div>
            <p className='text-[#046]'>Mostly {wdisplay[current.iconCode as keyof typeof wdisplay]}</p>
            <p className='text-right'>☂️ {current.precip}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
