// pages/_app.js
import React, { ReactNode } from 'react';
import {HeroUIProvider} from '@heroui/react'

interface Myapppropos {
  children :ReactNode
}

function MyApp({children}:Myapppropos) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}

export default MyApp;