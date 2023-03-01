export type WeatherDaTa = {
  current: TCurrentWeather
  daily: DailyWeather[]
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
