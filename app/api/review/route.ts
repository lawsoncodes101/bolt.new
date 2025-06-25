import { NextRequest, NextResponse } from 'next/server'
import { reviewCode } from '../../lib/bolt-api'

export async function POST(request: NextRequest) {
  try {
    const { code, mode } = await request.json()

    if (!code || !code.trim()) {
      return NextResponse.json(
        { error: 'Code is required' },
        { status: 400 }
      )
    }

    if (!mode || !['professional', 'roast'].includes(mode)) {
      return NextResponse.json(
        { error: 'Valid mode is required (professional or roast)' },
        { status: 400 }
      )
    }

    const review = await reviewCode(code, mode)

    return NextResponse.json({ review })
  } catch (error) {
    console.error('Error reviewing code:', error)
    return NextResponse.json(
      { error: 'Failed to review code' },
      { status: 500 }
    )
  }
}