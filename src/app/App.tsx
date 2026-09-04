import { useEffect } from 'react'
import { AppProviders } from './providers/AppProviders'
import { AppRouter } from './router'

export default function App() {
  useEffect(() => {
    // Progressive enhancement: reveal opacity/translate rules only apply once
    // this class is present, so no-JS visitors see fully visible content.
    document.documentElement.classList.add('js-anim')
  }, [])

  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}
