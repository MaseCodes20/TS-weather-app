import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import DailyForecast from './components/DailyForecast'
import DarkModeButton from './components/DarkModeButton'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DarkModeButton />
        <DailyForecast />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
