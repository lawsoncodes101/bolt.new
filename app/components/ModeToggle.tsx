'use client'

import { ReviewMode } from '../page'
import { Sparkles, Flame } from 'lucide-react'
import { clsx } from 'clsx'

interface ModeToggleProps {
  mode: ReviewMode
  onModeChange: (mode: ReviewMode) => void
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
        <Sparkles className="w-4 h-4" />
        Professional
      </div>
      
      <button
        onClick={() => onModeChange(mode === 'professional' ? 'roast' : 'professional')}
        className={clsx(
          'toggle-switch',
          mode === 'roast' ? 'bg-secondary-500' : 'bg-slate-300'
        )}
      >
        <span
          className={clsx(
            'toggle-switch-thumb',
            mode === 'roast' ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
      
      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
        <Flame className="w-4 h-4" />
        Roast Mode
      </div>
    </div>
  )
}