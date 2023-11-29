'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'

export function MobileSidebar() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const onOpen = useMobileSidebar(state => state.onOpen)
  const onClose = useMobileSidebar(state => state.onClose)
  const isOpen = useMobileSidebar(state => state.isOpen)

  // Has never reach this part, make sure it's rendered on client side
  // Hydration error in React
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted)
    return null
  return (
    <div>
      hwllo
    </div>
  )
}
