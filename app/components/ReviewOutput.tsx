'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReviewMode } from '../page'
import { MessageSquare, Flame, Sparkles, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface ReviewOutputProps {
  review: string
  isLoading: boolean
  mode: ReviewMode
}

export function ReviewOutput({ review, isLoading, mode }: ReviewOutputProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(review)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">AI Review</h2>
        </div>
        
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-pulse-slow mb-4">
              {mode === 'roast' ? (
                <Flame className="w-12 h-12 text-secondary-500 mx-auto" />
              ) : (
                <Sparkles className="w-12 h-12 text-primary-500 mx-auto" />
              )}
            </div>
            <p className="text-slate-600">
              {mode === 'roast' 
                ? 'Preparing the roast... 🔥' 
                : 'Analyzing your code... 🤔'
              }
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!review) {
    return (
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-slate-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-slate-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">AI Review</h2>
        </div>
        
        <div className="flex items-center justify-center h-64 text-slate-500">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Your code review will appear here</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${mode === 'roast' ? 'bg-secondary-100' : 'bg-primary-100'}`}>
            {mode === 'roast' ? (
              <Flame className="w-5 h-5 text-secondary-600" />
            ) : (
              <Sparkles className="w-5 h-5 text-primary-600" />
            )}
          </div>
          <h2 className="text-xl font-bold text-slate-800">
            {mode === 'roast' ? 'Roast Review 🔥' : 'Professional Review ✨'}
          </h2>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="syntax-highlight">
        <SyntaxHighlighter
          language="markdown"
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '14px',
            lineHeight: '1.5'
          }}
        >
          {review}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}