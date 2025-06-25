'use client'

import { useState } from 'react'
import { CodeInput } from './components/CodeInput'
import { ReviewOutput } from './components/ReviewOutput'
import { ModeToggle } from './components/ModeToggle'
import { Header } from './components/Header'
import { reviewCode } from './lib/bolt-api'

export type ReviewMode = 'professional' | 'roast'

export default function Home() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mode, setMode] = useState<ReviewMode>('professional')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError('Please enter some code to review')
      return
    }

    setIsLoading(true)
    setError('')
    setReview('')

    try {
      const result = await reviewCode(code, mode)
      setReview(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get code review')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setCode('')
    setReview('')
    setError('')
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">Code Input</h2>
                <ModeToggle mode={mode} onModeChange={setMode} />
              </div>
              
              <CodeInput
                value={code}
                onChange={setCode}
                placeholder="Paste your code here for review..."
              />
              
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !code.trim()}
                  className={`flex-1 ${mode === 'roast' ? 'btn-secondary' : 'btn-primary'} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="loading-dots">
                        <div style={{'--i': 0} as any}></div>
                        <div style={{'--i': 1} as any}></div>
                        <div style={{'--i': 2} as any}></div>
                      </div>
                      <span>Reviewing...</span>
                    </div>
                  ) : (
                    `${mode === 'roast' ? '🔥 Roast' : '🔍 Review'} My Code`
                  )}
                </button>
                
                <button
                  onClick={handleClear}
                  className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Clear
                </button>
              </div>
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <ReviewOutput
              review={review}
              isLoading={isLoading}
              mode={mode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}