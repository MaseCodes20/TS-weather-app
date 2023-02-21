import { useState } from 'react'
import { getWeather } from './api/weaterAPI'

function App() {
  getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div>
      <h1 className='text-3xl font-bold'>Weather App!</h1>
    </div>
  )
}

export default App
