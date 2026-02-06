import { Loader2 } from 'lucide-react'
import type React from 'react'

export function Loading(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-white">
      <Loader2 className="h-12 w-12 animate-spin text-white" aria-hidden="true" />
      <p className="text-lg font-medium">Loading…</p>
    </div>
  )
}
