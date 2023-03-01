export type WeatherDaTa = {
  current: CurrentWeather
  daily: DailyWeather[]
  hourly: HourlyWeather
}

export type CurrentWeather = {
  currentTemp: number
  highFeelsLike: number
  highTemp: number
  iconCode: number
  lowFeelsLike: number
  lowTemp: number
  precip: number
  windSpeed: number
}

type DailyWeather = {
  iconCode: number
  lowTemp: number
  maxTemp: number
  timestamp: number
}

type HourlyWeather = {
  temp: number
  timestamp: number
}
