import { Code2, Sparkles, Flame } from 'lucide-react'

export function Header() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Bolt Code Reviewer
        </h1>
      </div>
      
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Get AI-powered code reviews with a twist. Choose between professional feedback 
        <Sparkles className="inline w-5 h-5 mx-1 text-primary-500" />
        or prepare to get roasted
        <Flame className="inline w-5 h-5 mx-1 text-secondary-500" />
      </p>
    </div>
  )
}