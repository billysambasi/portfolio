# Billy Sambasi — Portfolio

A personal portfolio website for Billy Sambasi, Data Scientist & Machine Learning Engineer. Built with Next.js, React, Tailwind CSS v4, and TypeScript.

## Features

- **Hero section** — introduction with links to projects and GitHub profile
- **Projects section** — dynamically fetches and displays public GitHub repositories via the GitHub API, sorted by stars
- **About section** — background, skills, and technologies overview
- **Contact/Footer** — social links (GitHub, LinkedIn, Twitter, Email)
- **Responsive design** — mobile-friendly layout with a collapsible navbar
- **Dark/Light mode** — automatically adapts to the user's OS theme preference
- **Scroll animations** — elements animate into view as the user scrolls

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.2.3 |
| React | 19.2.4 |
| Tailwind CSS | 4 |
| TypeScript | 5 |
| react-icons | 5.6.0 |

## Getting Started

### Prerequisites

- Node.js 18+
- A GitHub account

### Environment Variables

Create a `.env.local` file in the root of the project:

```bash
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_EMAIL=your_email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   └── page.tsx          # Homepage
├── components/
│   ├── Hero.tsx          # Landing hero section
│   ├── Navbar.tsx        # Responsive navigation bar
│   ├── ProjectsSection.tsx  # GitHub repos grid
│   ├── ProjectCard.tsx   # Individual project card
│   ├── ProjectCardSkeleton.tsx  # Loading skeleton
│   ├── AboutSection.tsx  # About me section
│   ├── Footer.tsx        # Footer with social links
│   └── ScrollAnimation.tsx  # Intersection Observer scroll wrapper
└── lib/
    └── github.ts         # GitHub API fetch utilities
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Connect your GitHub repository and add the environment variables in the Vercel dashboard.

```bash
npm run build
```

Make sure to set the `NEXT_PUBLIC_*` environment variables in your hosting platform's settings.
