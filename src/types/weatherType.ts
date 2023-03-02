export type WeatherDaTa = {
  current: TCurrentWeather
  daily: Daily[]
  hourly: HourlyWeather
}

export type TCurrentWeather = {
  currentTemp: number
  highFeelsLike: number
  highTemp: number
  iconCode: number
  lowFeelsLike: number
  lowTemp: number
  precip: number
  windSpeed: number
}

export type Daily = {
  iconCode: number
  lowTemp: number
  maxTemp: number
  timestamp: number
}

export type HourlyWeather = {
  temp: number
  timestamp: number
}
