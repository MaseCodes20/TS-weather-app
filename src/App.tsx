import { QueryClient, QueryClientProvider } from 'react-query'
import { getWeather } from './api/weaterAPI'
import Weather from './components/Weather'

const queryClient = new QueryClient()

function App() {
  getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  )
}

export default App
