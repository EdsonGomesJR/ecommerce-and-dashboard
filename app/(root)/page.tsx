'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { useEffect } from 'react'

export default function SetupPage() {
  // This way cause if we use storeModal on useEffect it's doesn't works well
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return <div>RootPage</div>
}
