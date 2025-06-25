# Bolt Code Reviewer

A Next.js application that uses Bolt.ai to provide AI-powered code reviews with two distinct modes:

- **Professional Mode**: Constructive, detailed feedback focused on best practices
- **Roast Mode**: Humorous but educational critiques that make learning fun

## Features

- 🎯 **Dual Review Modes**: Toggle between professional feedback and entertaining roasts
- 🎨 **Syntax Highlighting**: Beautiful code display with proper formatting
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- ⚡ **Real-time Processing**: Fast code analysis with loading states
- 📋 **Copy to Clipboard**: Easy sharing of review results
- 🎭 **Interactive UI**: Smooth animations and micro-interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Bolt.ai API key (for production use)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bolt-code-reviewer
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your Bolt.ai API key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Paste Your Code**: Enter any code snippet in the textarea
2. **Choose Your Mode**: Toggle between Professional and Roast mode
3. **Get Review**: Click the review button to get AI-powered feedback
4. **Copy Results**: Use the copy button to share the review

## API Integration

The app includes a mock implementation of the Bolt.ai API. To use the real API:

1. Get your API key from Bolt.ai
2. Update the `BOLT_API_KEY` in your `.env.local`
3. Uncomment the real implementation in `app/lib/bolt-api.ts`

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom components
- **Syntax Highlighting**: react-syntax-highlighter
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── CodeInput.tsx   # Code input textarea
│   ├── ReviewOutput.tsx # Review display with syntax highlighting
│   ├── ModeToggle.tsx  # Professional/Roast mode toggle
│   └── Header.tsx      # App header
├── lib/
│   └── bolt-api.ts     # Bolt.ai API integration
├── api/
│   └── review/         # API route for code reviews
├── globals.css         # Global styles and animations
├── layout.tsx          # Root layout
└── page.tsx           # Main application page
```

## Customization

### Adding New Review Modes

1. Update the `ReviewMode` type in `app/page.tsx`
2. Add the new mode to the toggle component
3. Implement the review logic in `bolt-api.ts`

### Styling

The app uses Tailwind CSS with custom components. Key classes:
- `.glass-effect`: Glassmorphism styling
- `.btn-primary` / `.btn-secondary`: Button styles
- `.toggle-switch`: Custom toggle component

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npx vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

---

Built with ❤️ using Next.js and Bolt.ai