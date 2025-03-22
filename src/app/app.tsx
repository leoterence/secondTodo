// pages/_app.js
import {HeroUIProvider} from '@heroui/react'

function MyApp({children}) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}

export default MyApp;