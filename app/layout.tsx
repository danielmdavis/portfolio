'use client'
import './globals.css'
import React from 'react'
import useMouse from '@react-hook/mouse-position'
import { AppWrapper, useAppContext } from './state'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let globalState = useAppContext()

  const xPos = mouse.x / window.innerWidth
  const yPos = mouse.y / window.innerHeight

  const averagePos = ((xPos + yPos) / 2) * 100
  console.log(globalState.palate)

  return (
    <html style={{ background: `linear-gradient(170deg, rgba(0,0,0,1) ${averagePos}%, rgb(22, 8, 37) 95%)` }} ref={ref} lang="en">
      <AppWrapper>
        <body className={globalState.palate} style={{ background: `linear-gradient(170deg, rgba(0,0,0,1) ${averagePos}%, rgb(22, 8, 37) 95%)` }}>
          <nav className='navbar'>Daniel Davis</nav>
          {children}
        </body>
      </AppWrapper>
    </html>
  )
}
