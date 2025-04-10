// app/components/TopLoader.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const TopLoader = () => {
  const pathname = usePathname()
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.continuousStart()
    const timeout = setTimeout(() => {
      ref.current?.complete()
    }, 400) // Simulated loading time

    return () => clearTimeout(timeout)
  }, [pathname])

  return <LoadingBar color="#ee8734" ref={ref} height={2} />
}

export default TopLoader
