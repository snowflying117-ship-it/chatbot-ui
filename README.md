# Chatbot UI — Community Maintained Fork

The open-source AI chat app for everyone.

**This is a community-maintained fork** of [mckaywrigley/chatbot-ui](https://github.com/mckaywrigley/chatbot-ui), actively updated with new models, bug fixes, and improvements.

<img src="./public/readme/screenshot.png" alt="Chatbot UI" width="600">

## Why This Fork?

The original chatbot-ui (33K+ stars) has been inactive since August 2024. This fork aims to:

- ✅ Keep up with the latest AI models (GPT-4.1, Claude 4, Gemini 2.5, etc.)
- ✅ Fix critical bugs (login, file upload, code copy)
- ✅ Add Docker Compose support for easy deployment
- ✅ Maintain compatibility with the latest Next.js and Supabase
- ✅ Provide Chinese localization support

## What's New (v2.1.0)

### Latest Models (Updated May 2026)

**OpenAI:**
- GPT-4.1 / GPT-4.1 Mini / GPT-4.1 Nano
- o3 / o3-mini / o4-mini (reasoning models)
- GPT-4o / GPT-4o Mini

**Anthropic:**
- Claude 4 Opus / Claude 4 Sonnet
- Claude 3.7 Sonnet
- Claude 3.5 Sonnet v2 / Claude 3.5 Haiku

**Google:**
- Gemini 2.5 Pro / Gemini 2.5 Flash
- Gemini 2.0 Flash

### Bug Fixes
- Fixed code block copy button
- Fixed Supabase RLS policy for file uploads
- Improved error handling for auth

### Infrastructure
- Added Dockerfile for containerized deployment
- Added docker-compose.yml with environment variable support
- Updated dependencies to latest versions

## Quick Start

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repo
git clone https://github.com/snowflying117-ship-it/chatbot-ui.git
cd chatbot-ui

# Copy env template
cp .env.local.example .env.local

# Edit .env.local with your keys
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY
# - OPENAI_API_KEY (or other provider keys)

# Run with Docker
docker-compose up -d
```

### Option 2: Local Development

```bash
# Clone the repo
git clone https://github.com/snowflying117-ship-it/chatbot-ui.git
cd chatbot-ui

# Install dependencies
npm install

# Set up Supabase (requires Docker)
supabase start

# Copy env template
cp .env.local.example .env.local

# Edit .env.local with your keys

# Run development server
npm run dev
```

## Environment Variables

See `.env.local.example` for all available environment variables.

Required:
- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Your Supabase anon key

Optional (one or more):
- `OPENAI_API_KEY` — OpenAI API key
- `ANTHROPIC_API_KEY` — Anthropic API key
- `GOOGLE_GEMINI_API_KEY` — Google Gemini API key
- `MISTRAL_API_KEY` — Mistral API key
- `GROQ_API_KEY` — Groq API key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License — see [LICENSE](./license) for details.

## Credits

Original project by [Mckay Wrigley](https://github.com/mckaywrigley).

## Sponsor

If you find this project useful, please consider sponsoring the maintenance of this fork.
