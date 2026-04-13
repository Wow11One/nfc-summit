import { HomeProvider } from './home-provider'
import { HomeDetails } from './home-details'

export default function HomePage() {
  return (
    <HomeProvider>
      <HomeDetails />
    </HomeProvider>
  )
}
