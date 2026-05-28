# N7 Fintech Landing Page - Frontend Assessment

This repository contains the frontend implementation of the N7 Landing Page, developed as part of the Software Development Engineer (SDE) – Full Stack technical assignment for Codelinear.

## 🚀 Live Demo

*(Add your Vercel deployment link here)*

## 🛠 Tech Stack & Architecture

- **React 19 & Vite**: Chosen for maximum performance, fast HMR, and modern React features.
- **TypeScript**: Strictly typed to ensure a robust, maintainable, and scalable codebase.
- **Tailwind CSS v4**: Utilized for pixel-perfect styling, rapid responsive design, and maintaining a strict design system (colors, spacing, and typography) directly integrated via the `@theme` engine.
- **Framer Motion**: Implemented for premium, subtle scroll-reveal animations and interactive hover micro-interactions, elevating the user experience.
- **Lucide React**: Clean, consistent vector icons.

## ✨ Key Features & Requirements Met

1. **Pixel-Perfect Accuracy**: Carefully matched typography, spacing, and brand colors based on the provided design specifications.
2. **Fully Responsive**: Fluid layouts that adapt elegantly across mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
3. **Component-Driven Architecture**: 
   - `src/sections/`: Modular page sections (Hero, Features, AppShowcase, etc.) for high readability.
   - `src/components/`: Reusable, isolated UI components (Container, Button) designed for scalability.
4. **Smooth Interactions**: Staggered entrance animations and hover states added to breathe life into the static design without compromising performance.
5. **Modern Best Practices**: ESLint configurations, semantic HTML, modular folder structure, and optimized asset loading.

## 💻 Local Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/chaitanya0807/codeline-.git
   cd codeline-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗 Build for Production

To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist` folder.
