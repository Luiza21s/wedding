'use client'

import { useEffect, useState } from 'react'
import { IntroScreen } from '@/components/intro-screen'
import { Invitation } from '@/components/invitation'

export default function Page() {
  const [introDone, setIntroDone] = useState(false)

  // Lock scrolling while the intro is on screen
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  return (
    <>
      <Invitation />
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}
    </>
  )
}
