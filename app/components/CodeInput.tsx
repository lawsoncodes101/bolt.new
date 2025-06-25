'use client'

import { ChangeEvent } from 'react'

interface CodeInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function CodeInput({ value, onChange, placeholder }: CodeInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-96 p-4 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        spellCheck={false}
      />
      
      {value && (
        <div className="absolute bottom-3 right-3 text-xs text-slate-500 bg-white px-2 py-1 rounded shadow">
          {value.split('\n').length} lines, {value.length} chars
        </div>
      )}
    </div>
  )
}