import { ReviewMode } from '../page'

// Mock implementation - using this by default since real API requires authentication
export async function reviewCode(code: string, mode: ReviewMode): Promise<string> {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mode === 'roast') {
        resolve(generateRoastReview(code))
      } else {
        resolve(generateProfessionalReview(code))
      }
    }, 2000)
  })
}

function generateProfessionalReview(code: string): string {
  const codeLines = code.split('\n').length
  const hasComments = code.includes('//') || code.includes('/*')
  const hasConsoleLog = code.includes('console.log')
  
  return `# Professional Code Review

## Overview
I've analyzed your ${codeLines}-line code submission. Here's my professional assessment:

## Strengths
✅ **Code Structure**: The code demonstrates a clear understanding of the problem domain
✅ **Readability**: Variable names are descriptive and follow good conventions
${hasComments ? '✅ **Documentation**: Good use of comments to explain complex logic' : ''}

## Areas for Improvement

### Code Quality
- Consider extracting complex logic into smaller, more focused functions
- Add error handling for edge cases and unexpected inputs
- Implement proper input validation

### Best Practices
${hasConsoleLog ? '- Replace console.log statements with proper logging mechanisms' : ''}
- Add unit tests to ensure code reliability
- Consider using TypeScript for better type safety
- Follow consistent code formatting standards

### Performance Considerations
- Review algorithm complexity for potential optimizations
- Consider memory usage patterns
- Implement caching where appropriate

## Recommendations
1. **Refactoring**: Break down large functions into smaller, testable units
2. **Testing**: Add comprehensive test coverage
3. **Documentation**: Include JSDoc comments for public APIs
4. **Security**: Validate and sanitize all inputs

## Overall Rating: B+
Your code shows solid fundamentals with room for professional polish. Focus on testing and error handling to elevate it to production quality.`
}

function generateRoastReview(code: string): string {
  const codeLines = code.split('\n').length
  const hasConsoleLog = code.includes('console.log')
  const hasVarDeclarations = code.includes('var ')
  const hasLongLines = code.split('\n').some(line => line.length > 120)
  
  return `# Code Roast 🔥

## First Impressions
Oh boy, where do I even start with this ${codeLines}-line masterpiece? 😅

## The Good News
Well... at least it's not written in Comic Sans! 🎉

## The Roast Begins 🔥

### Naming Conventions
Your variable names are about as descriptive as a mime's autobiography. I've seen more creativity in a tax form!

${hasConsoleLog ? '### Debug Statements\nStill using console.log like it\'s 2010? What\'s next, alert() for user notifications? 😂' : ''}

${hasVarDeclarations ? '### Variable Declarations\nUsing \`var\`? Did you time travel here from 2005? Even Internet Explorer is judging you right now! 💀' : ''}

${hasLongLines ? '### Line Length\nYour lines are longer than a CVS receipt! My monitor needs to scroll horizontally just to see where your thoughts end! 📜' : ''}

### Error Handling
Error handling? What error handling? You're living life on the edge like you're base jumping without a parachute! 🪂

### Comments
Your code has fewer comments than a controversial tweet. Future you is going to hate present you SO much! 😤

## The Brutal Truth
This code works about as well as a chocolate teapot. It's like you took every "what not to do" tutorial and used it as a checklist! 

But hey, at least you tried! And in the grand tradition of participation trophies, here's yours: 🏆

## Survival Tips
1. **Learn to love the debugger** - console.log is not a debugging strategy
2. **Comments are your friend** - explain WHY, not just WHAT
3. **Error handling exists for a reason** - use it before your users find your bugs
4. **Refactor like your job depends on it** - because it might!

## Final Verdict
Rating: 2/10 (and that's being generous because it probably runs... sometimes)

Remember: Every expert was once a beginner who refused to give up. You're just... still in the "beginner who writes questionable code" phase! 😉

*P.S. - This roast comes with love. We've all written code that made us question our life choices!* ❤️`
}

/*
// Real Bolt.ai API implementation (commented out by default)
// Uncomment this section and comment out the mock implementation above to use real API
// Make sure to set BOLT_API_KEY in your .env.local file

const BOLT_API_ENDPOINT = process.env.BOLT_API_ENDPOINT || 'https://api.bolt.new/v1/chat/completions'

export async function reviewCode(code: string, mode: ReviewMode): Promise<string> {
  const prompt = mode === 'roast' 
    ? `Please provide a humorous but constructive "roast" review of this code. Be funny but also educational:\n\n${code}`
    : `Please provide a professional code review with constructive feedback:\n\n${code}`

  const response = await fetch(BOLT_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BOLT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'bolt-ai',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: mode === 'roast' ? 0.8 : 0.3
    })
  })

  if (!response.ok) {
    throw new Error('Failed to get code review from Bolt.ai')
  }

  const data = await response.json()
  return data.choices[0].message.content
}
*/