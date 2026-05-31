# pss2k24-arrowflicks |🎬 Movie Search & Rating App

> A modern movie discovery and rating application built with Next.js 14 and Mantine UI.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Mantine](https://img.shields.io/badge/Mantine-7-purple?logo=mantine)](https://mantine.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-1-green?logo=vitest)](https://vitest.dev/)

## 📖 What is This Project?

A movie search and rating application that allows users to discover movies, filter by genre/year/rating, view detailed information, and rate their favorites. Built as a test assignment for [Startup Summer '24](https://startup-summer.paralect.com/).

**🚀 Live Demo:** [pss2k24-arrowflicks.vercel.app](https://pss2k24-arrowflicks.vercel.app/)

### Key Features

- 🔍 **Movie Discovery** - Browse and search movies via TMDB API
- 🎛️ **Advanced Filtering** - Filter by genre, release year, and rating range
- ⭐ **Movie Rating** - Rate movies and save favorites to LocalStorage
- 📄 **Pagination** - Navigate through movie results efficiently
- 📱 **Responsive Design** - Works on desktop and mobile (320px+)
- 🎨 **Mantine UI** - Consistent, accessible component library
- 🧪 **Comprehensive Testing** - Unit and integration tests with Vitest

## 🛠️ Tech Stack

| Category | Technology |
| ---------- | ------------ |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [Mantine 7](https://mantine.dev/) |
| **Styling** | CSS Modules + PostCSS |
| **Testing** | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) |
| **Linting** | ESLint + Prettier |
| **Git Hooks** | Husky + lint-staged |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Data Source** | [TMDB API](https://developer.themoviedb.org/) |

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology for clean, maintainable code:

```
src/
├── app/              # Next.js App Router pages & layouts
├── entities/         # Entity models (Movie, UserRating, etc.)
├── features/         # User-facing features (Search, Filter, Rate)
├── lib/              # API services & utilities
├── pages/            # Page components
├── shared/           # Reusable components, configs, types
│   ├── configs/      # Constants, theme, sort maps
│   ├── lib/          # Utility functions
│   ├── ui/           # Reusable UI components
│   └── utils/        # Helper utilities
└── widgets/          # Composed UI sections
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pss2k24-arrowflicks.git
cd pss2k24-arrowflicks

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Add your TMDB API key to .env.local
# TMDB_API_KEY=your_api_key_here
```

### Development

```bash
# Start development server
npm run dev
# Opens http://localhost:3000

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Open test UI
npm run test:ui
```

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📜 Available Scripts

| Script | Description |
| -------- | ------------- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix linting issues |
| `npm run format:fix` | Format code with Prettier |
| `npm test` | Run all tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:ui` | Open Vitest UI |

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Watch mode for TDD
npm run test:watch
```

Tests are located alongside their source files and follow the Feature-Sliced Design structure.

## 📝 Code Quality

This project enforces high code quality standards:

- **ESLint** - Static code analysis with TypeScript and React plugins
- **Prettier** - Consistent code formatting
- **Husky + lint-staged** - Pre-commit hooks for automatic linting
- **TypeScript** - Strict type checking
- **Feature-Sliced Design** - Clean architecture methodology

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format:fix
```

## 📚 Documentation

- [Functional Requirements Document](./docs/FRD.md) - Original project requirements
- [TMDB API Docs](https://developer.themoviedb.org/) - API reference
- [Mantine Docs](https://mantine.dev/) - UI component library
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

## 📄 License

This project is licensed under the [GNU General Public License v3.0](./LICENSE).

## 👤 Maintainer

This project was developed as a test assignment for Startup Summer '24 by Paralect.

### Original Requirements

Due to previous experience with React and NextJS I have chosen to use NextJS with App Router to implement fuctionality provided in functional requirements document (FRD).

- [Startup Summer '24 Assignment](https://paralect-global.notion.site/c3a7adc40e5d4e0d9d3d3e5462a576bc)
- [Functional Requirements](./docs/FRD.md)
- [Design Mockup](https://www.figma.com/file/VkLZt5T4dZQQ3cEhWcnhyG/Movie-Search-App-(Copy))
