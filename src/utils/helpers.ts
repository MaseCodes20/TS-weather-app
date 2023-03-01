import { ICON_MAP } from './iconMap'

export type CurrentWeather = {
  current_weather: CurrentWeatherOBJ
  daily: Daily
  hourly: Hourly
}

type CurrentWeatherOBJ = {
  temperature: number
  time: number
  weathercode: number
  winddirection: number
  windspeed: number
}

type Daily = {
  apparent_temperature_max: number[]
  apparent_temperature_min: number[]
  precipitation_sum: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  time: number[]
  weathercode: number[]
}

type Hourly = {
  temperature_2m: number[]
  time: number[]
}

export const parseCurrentWeather = ({ current_weather, daily }: CurrentWeather) => {
  const { temperature: currentTemp, windspeed: windSpeed, weathercode: iconCode } = current_weather
  const {
    temperature_2m_max: [highTemp],
    temperature_2m_min: [lowTemp],
    apparent_temperature_max: [highFeelsLike],
    apparent_temperature_min: [lowFeelsLike],
    precipitation_sum: [precip],
  } = daily

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(highTemp),
    lowTemp: Math.round(lowTemp),
    highFeelsLike: Math.round(highFeelsLike),
    lowFeelsLike: Math.round(lowFeelsLike),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precip * 100) / 100,
    iconCode,
  }
}

export const parseDailyWeather = ({ daily }: CurrentWeather) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weathercode[index],
      maxTemp: Math.round(daily.temperature_2m_max[index]),
      lowTemp: Math.round(daily.apparent_temperature_min[index]),
    }
  })
}

export const parseHourlyWeather = ({ hourly, current_weather }: CurrentWeather) => {
  return hourly.time
    .map((time, index) => {
      return {
        timestamp: time * 1000,
        temp: Math.round(hourly.temperature_2m[index]),
      }
    })
    .filter(({ timestamp }) => timestamp >= current_weather.time * 1000)
}

export const getIconUrl = (iconCode: number) => {
  return `icons/${ICON_MAP.get(iconCode)}.svg`
}
