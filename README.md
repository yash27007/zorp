# Zorp

[![View Repository](https://img.shields.io/badge/GitHub-View_Repository-blue?logo=github)](https://github.com/yash27007/zorp)


## Tech Stack

This project is built using the following technologies:

* **Frontend Library/Framework:** React
* **Language:** TypeScript
* **CSS Framework:** Tailwind CSS
* **Build Tool/Bundler:** Vite
* **Animation Library:** Framer Motion
* **Routing:** React Router

## Project Structure

The repository is organized as follows:

* `/public`: Contains all static assets, primarily images used in the application.
* `/src`: Contains all the source code for the application.
    * `/components`: Houses reusable UI components and common UI elements used across different pages.
    * `/constants`: Includes data files like `data.ts`, which maps data (e.g., vegetables to their images).
    * `/pages`: Contains individual page components that represent distinct views/routes in the application.
    * `App.tsx`: The main application component where routing and component rendering are likely set up.
    * `index.css`: Initializes Tailwind CSS styles and may contain global or base styles, including color definitions.
    * `main.tsx`: The entry point of the React application, responsible for rendering the root component (`App.tsx`) into the DOM.
