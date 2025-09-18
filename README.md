# Her Guard - Women's Safety Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite)](https://vitejs.dev/)

Her Guard is a modern web application designed to empower women with personal safety solutions. This platform provides information, resources, and tools to help women feel more secure in their daily lives.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React 18, Vite, and modern JavaScript
- **State Management**: Redux Toolkit with Redux Persist for state management
- **Authentication**: Google OAuth integration for secure user authentication
- **Accessibility**: WCAG 2.1 compliant components and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions
- **Animations**: Subtle animations with AOS (Animate On Scroll)

## 🛠 Tech Stack

- **Frontend**: React 18, React Router 6
- **Styling**: CSS Modules, CSS Variables, Flexbox/Grid
- **State Management**: Redux Toolkit, Redux Persist
- **Authentication**: Google OAuth
- **UI Components**: Custom components with Font Awesome icons
- **Build Tool**: Vite 4
- **Linting & Formatting**: ESLint, Prettier
- **Deployment**: Vercel/Netlify ready

## 📦 Prerequisites

- Node.js 16.14.0 or later
- npm 8.5.0 or later (or yarn/pnpm)
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/herguard.git
cd herguard
```

### 2. Install dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_APP_NAME="Her Guard"
VITE_APP_DESCRIPTION="Empowering women with personal safety solutions"
VITE_APP_URL="http://localhost:5173"
VITE_GOOGLE_OAUTH_CLIENT_ID="your-google-oauth-client-id.apps.googleusercontent.com"
VITE_API_BASE_URL="http://localhost:3000/api"
```

### 4. Start the development server

```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗 Project Structure

```
src/
├── assets/            # Static assets (images, fonts, etc.)
├── components/        # Reusable UI components
│   ├── common/       # Shared components (Button, Loader, etc.)
│   ├── Contact/      # Contact form component
│   ├── Features/     # Features section
│   ├── Footer/       # Footer component
│   ├── Header/       # Header/Navigation component
│   ├── Hero/         # Hero section
│   ├── Products/     # Products showcase
│   └── Testimonials/ # Customer testimonials
├── data/             # Static data files
├── redux/            # Redux store, actions, and reducers
├── styles/           # Global styles and CSS variables
└── utils/            # Utility functions and helpers
```

## 🔧 Available Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build locally
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `test`: Run tests

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Font Awesome](https://fontawesome.com/)
- [AOS](https://michalsnik.github.io/aos/)
- And all the amazing open-source libraries we use!

---

Made with ❤️ by [Your Name] | [Website](https://your-website.com)
