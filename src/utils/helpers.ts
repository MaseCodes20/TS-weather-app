export type CurrentWeather = {
  current_weather: CurrentWeatherOBJ
  daily: Daily
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

export const parseDailyWeather = () => {}

export const parseHourlyWeather = () => {}
