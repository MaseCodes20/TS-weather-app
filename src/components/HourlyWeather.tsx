import { THourly } from '../types/weatherType'

interface IHourlyWeather {
  hourly: THourly[]
}

function HourlyWeather({ hourly }: IHourlyWeather) {
  return (
    <div>
      {hourly.map(weather => {
        const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: 'numeric' })

        return (
          <div key={weather.timestamp}>
            <h3>{DAY_FORMATTER.format(weather.timestamp)}</h3>
            <p>
              {weather.temp}
              <span>&deg;</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default HourlyWeather
