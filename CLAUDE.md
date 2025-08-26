# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Techvel is a company portfolio website showcasing software development services, with separate frontend and backend components. The frontend is built with React + Vite and Material Tailwind, while the backend is an Express server for handling contact form submissions.

## Architecture

### Frontend (`Frontend/`)
- **Framework**: React 18 with Vite build tool
- **UI Library**: Material Tailwind (@material-tailwind/react) with Tailwind CSS
- **Routing**: React Router DOM with client-side routing
- **State Management**: Component-level React state (no global state management)
- **Analytics**: Google Analytics 4 integration via react-ga4
- **Icons**: Heroicons and React Icons (Lucide)

### Backend (`server/`)
- **Framework**: Express.js Node.js server
- **Email Service**: Nodemailer with SMTP configuration for contact form
- **CORS**: Configured to allow all origins for development
- **Environment**: Uses dotenv for environment variables

### Key Architectural Patterns
- **Barrel Exports**: Centralized exports in index.js files (`src/pages/index.js`, `src/data/index.js`, `src/widgets/layout/index.js`)
- **Path Aliases**: `@/` alias configured for `src/` directory in Vite config
- **Component Structure**: 
  - Pages in `src/pages/`
  - Reusable components in `src/widgets/`
  - Data configurations in `src/data/`
  - Utilities in `src/utils/`

## Development Commands

### Frontend Development
```bash
cd Frontend
npm install --legacy-peer-deps  # Required for Material Tailwind compatibility
npm run dev                     # Start development server (Vite)
npm run build                   # Build for production
npm run preview                 # Preview production build
```

### Backend Development
```bash
cd server
npm install
npm run dev                     # Start with nodemon (development)
npm start                      # Start production server
```

### Environment Setup
Backend requires `.env` file in `server/` directory:
```
PORT=8000
EMAIL_PASSWORD=your_email_password
```

## Code Conventions

### Import Organization
- Use path aliases: `@/pages`, `@/widgets`, `@/data`, `@/utils`
- Barrel exports from index.js files
- External libraries imported before internal modules

### Component Structure
- Functional components with hooks
- PropTypes for type checking
- Material Tailwind components for UI consistency
- Tailwind CSS classes for styling

### Routing Configuration
Routes defined in `src/routes.jsx` with `show` property to control navbar visibility.

## API Integration

### Frontend-Backend Communication
- Development: Vite proxy configured to forward `/api` requests to `https://techvel-server.vercel.app`
- Production: Direct API calls to deployed backend

### Available Endpoints
- `GET /api/health` - Server health check
- `POST /api/contact` - Contact form submission (requires name, email, message)

## Deployment

### Frontend Deployment
- **Platform**: Genezio (configured in `genezio.yaml`)
- **Build Output**: `dist/` folder
- **Build Command**: `npm install --legacy-peer-deps && npm run build`

### Backend Deployment
- **Platform**: Vercel (configured in `vercel.json`)
- **Entry Point**: `server.js`
- **Environment Variables**: EMAIL_PASSWORD required

## Portfolio Projects

Portfolio images stored in `public/img/portfolio/` with subdirectories for each project. Each project should have numbered images (`img-0.png`, `img-1.png`, etc.).

## Analytics Integration

Google Analytics 4 configured with measurement ID `G-MY4CQTHX85`. Analytics utilities in `src/utils/analytics.js` provide page tracking, event logging, and error reporting functions.