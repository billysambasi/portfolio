# Billy Sambasi Portfolio

A modern, responsive portfolio website for Billy Sambasi, Data Scientist & Machine Learning Engineer. Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

🌐 **Live Site**: [https://billysambasi.github.io/portfolio](https://billysambasi.github.io/portfolio)

## ✨ Features

- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Dynamic Projects Section** - Automatically fetches and displays public GitHub repositories via GitHub API v2022-11-28
  - Sorted by most recently updated
  - Filters out archived repositories
  - Shows repository stats (stars, forks, language)
  - Displays repository topics/tags
  - Loading skeletons for better UX
- **About Section** - Professional background, skills, and technology stack
- **Contact/Footer** - Social media links (GitHub, LinkedIn, Twitter, Email)
- **Responsive Design** - Mobile-first approach with collapsible navigation
- **Theme Support** - Automatically adapts to user's OS theme preference (dark/light mode)
- **Scroll Animations** - Smooth intersection observer-based animations
- **SEO Optimized** - Complete metadata, Open Graph, and Twitter Card support
- **Static Export** - Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | React framework with App Router |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4 | Utility-first CSS framework |
| TypeScript | 5 | Type-safe JavaScript |
| react-icons | 5.6.0 | Icon library |
| PostCSS | Latest | CSS processing |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (recommended)
- **npm** or **yarn**
- **GitHub account** (for fetching repositories)

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Required for local development
NEXT_PUBLIC_GITHUB_USERNAME=billysambasi
NEXT_PUBLIC_EMAIL=bnsambasi@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: GitHub token for higher API rate limits (recommended)
GITHUB_TOKEN=your_github_personal_access_token
# or
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
```

**Note**: Without a GitHub token, you're limited to 60 API requests per hour. With authentication, you get 5,000 requests per hour.

### Installation

```bash
# Clone the repository
git clone https://github.com/billysambasi/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Building for Static Export (GitHub Pages)

```bash
# Build static export
EXPORT_MODE=true npm run build

# Output will be in the 'out' directory
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD pipeline
├── app/
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata and providers
│   └── page.tsx                 # Homepage composition
├── components/
│   ├── AboutSection.tsx         # About me section
│   ├── Footer.tsx               # Footer with social links
│   ├── Hero.tsx                 # Landing hero section
│   ├── Navbar.tsx               # Responsive navigation bar
│   ├── ProjectCard.tsx          # Individual project card component
│   ├── ProjectCardSkeleton.tsx  # Loading skeleton for projects
│   ├── ProjectsSection.tsx      # GitHub repos grid container
│   └── ScrollAnimation.tsx      # Intersection Observer wrapper
├── lib/
│   └── github.ts                # GitHub API utilities with auth & caching
├── public/                      # Static assets
├── .env.local                   # Environment variables (not in repo)
├── next.config.ts               # Next.js configuration with export mode
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🔧 Configuration

### Next.js Config (`next.config.ts`)

The configuration supports two modes:

1. **Development/Production Mode** - Standard Next.js server
2. **Export Mode** - Static site generation for GitHub Pages
   - Enabled via `EXPORT_MODE=true` environment variable
   - Sets `basePath: '/portfolio'` for GitHub Pages
   - Disables image optimization for static hosting

### GitHub API Integration (`lib/github.ts`)

Features:
- ✅ GitHub API v2022-11-28 compliance
- ✅ Authentication support (GITHUB_TOKEN)
- ✅ Request caching (1-hour revalidation)
- ✅ Error handling with detailed logging
- ✅ Filters archived repositories
- ✅ Fetches user info and repositories

## 🚢 Deployment

### GitHub Pages (Current Setup)

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

**Workflow Features:**
- ✅ Automated builds on push to main
- ✅ Static export generation
- ✅ GitHub API authentication via `GITHUB_TOKEN`
- ✅ Environment variable fallbacks
- ✅ Artifact upload and deployment

**Setup:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. (Optional) Add repository variables:
   - `NEXT_PUBLIC_GITHUB_USERNAME`
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`

The workflow uses fallback defaults if variables aren't set.

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/billysambasi/portfolio)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GITHUB_USERNAME`
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
   - `GITHUB_TOKEN` (optional, for higher rate limits)
3. Deploy automatically on push

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- **Netlify** - Use `npm run build` and deploy the `out` folder
- **Cloudflare Pages** - Connect repository and set build command
- **AWS Amplify** - Configure build settings for Next.js

## 🔑 API Rate Limits

| Authentication | Rate Limit | Recommended For |
|---|---|---|
| No token | 60 requests/hour | Testing only |
| With GITHUB_TOKEN | 5,000 requests/hour | Production |

**To create a GitHub token:**
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `public_repo` scope
4. Add to `.env.local` or deployment environment

## 🧪 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- **ESLint** - Configured with Next.js recommended rules
- **TypeScript** - Strict type checking enabled
- **Tailwind CSS** - Utility-first styling with v4 features

## 📝 Customization

To customize for your own portfolio:

1. Update environment variables in `.env.local`
2. Modify content in components:
   - `Hero.tsx` - Your introduction
   - `AboutSection.tsx` - Your background and skills
   - `Footer.tsx` - Your social links
3. Update metadata in `app/layout.tsx`
4. Replace favicon in `app/favicon.ico`
5. Update GitHub username in workflow file (if using GitHub Pages)

## 🐛 Troubleshooting

### GitHub API Rate Limiting
- **Issue**: "API rate limit exceeded" error
- **Solution**: Add `GITHUB_TOKEN` to environment variables

### Build Failures
- **Issue**: Build fails in GitHub Actions
- **Solution**: Check workflow logs, ensure all dependencies are in `package.json`

### Styling Issues
- **Issue**: Tailwind styles not applying
- **Solution**: Ensure `globals.css` imports Tailwind directives

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Billy Sambasi**
- GitHub: [@billysambasi](https://github.com/billysambasi)
- Email: bnsambasi@gmail.com
- Portfolio: [https://billysambasi.github.io/portfolio](https://billysambasi.github.io/portfolio)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [react-icons](https://react-icons.github.io/react-icons/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

⭐ If you found this portfolio template helpful, consider giving it a star!
