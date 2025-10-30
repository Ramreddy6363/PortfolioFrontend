# Portfolio Frontend

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Clean and modern design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Easy to customize
- 📦 Component-based architecture

## Tech Stack

- React 18
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ramreddy6363/Portfolio-frontend.git
cd Portfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
Portfolio-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## Customization

To customize the portfolio:

1. Update personal information in the component files
2. Add your projects in `src/components/Projects.jsx`
3. Modify colors and styles in the CSS files
4. Replace the contact links in `src/components/Contact.jsx`
   - **Important**: Update the placeholder email `contact@example.com` with your actual email address

## Deployment

Build the project:
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

MIT