# NasaWeb

A web application that showcases NASA data and imagery using NASA's APIs. This project provides interactive experiences for exploring Earth imagery, Mars rover photos, NASA's image library, and the Astronomy Picture of the Day.

https://nasa-web-jfc.vercel.app/

## Features

- **Home Page**: Overview of available NASA experiences
- **Earth Imagery**: View satellite imagery of Earth
- **Mars Experience**: Explore photos from Mars rovers
- **NASA Image Library**: Browse NASA's extensive image collection
- **Photo of the Day**: View NASA's Astronomy Picture of the Day

## Technologies Used

- [Astro](https://astro.build/) - Web framework for content-focused websites
- [React](https://reactjs.org/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Three.js](https://threejs.org/) - 3D graphics library for web browsers
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Material UI](https://mui.com/) - React UI component library
- [Vercel](https://vercel.com/) - Deployment platform

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NasaWeb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PUBLIC_API_URL = "https://nasa-api-seven-sage.vercel.app"
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application at `http://localhost:4321` (or another port if 4321 is in use).

## Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. Connect your repository to Vercel for automatic deployments.

## API

This project uses a custom NASA API proxy hosted at:
```
https://nasa-api-seven-sage.vercel.app
```

This proxy service interfaces with various NASA APIs, including:
- Mars Rover Photos API
- NASA Image and Video Library API
- Astronomy Picture of the Day API

