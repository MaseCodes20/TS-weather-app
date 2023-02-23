import axios from 'axios'
import { parseCurrentWeather, parseDailyWeather, parseHourlyWeather } from '../utils/helpers'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

export const getWeather = async (lat: number, lon: number, timezone: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=${timezone}`
    )

    const { data } = response

    return {
      current: parseCurrentWeather(data),
      // daily: parseDailyWeather(data),
      // hourly: parseHourlyWeather(data)
    }
  } catch (error) {
    console.log(error)
  }
}
