import { createContext, useContext } from 'react'

// Extend this interface as query hooks are wired up
interface HomeContextValue {}

const HomeContext = createContext<HomeContextValue | null>(null)

export function useHomeContext() {
  const ctx = useContext(HomeContext)
  if (!ctx) throw new Error('useHomeContext must be used within HomeProvider')
  return ctx
}

export function HomeProvider({ children }: { children: React.ReactNode }) {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>
}
