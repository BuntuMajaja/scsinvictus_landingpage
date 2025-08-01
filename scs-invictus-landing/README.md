# SCS-Invictus South Africa Landing Page

This repository contains the source code for the official landing page of SCS-Invictus South Africa (Pty) Ltd. This static website is designed to establish the company's credibility, showcase its services, and highlight its connection to the broader global consulting group, particularly for purposes such as critical skills visa applications.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## Features

- **Professional Design:** Clean, modern, and responsive layout suitable for desktop and mobile devices.
- **Company Overview:** Details about SCS-Invictus South Africa, its mission, and vision.
- **Services Offered:** Comprehensive breakdown of accounting, tax, consulting, and outsourcing services.
- **Leadership Team:** Introduction to key team members, including Daisuke Hora (Director), Buntu Majaja (Director), and Seiya Matsumoto (Business Development Manager).
- **Open Roles:** Section highlighting current and upcoming job opportunities, specifically emphasizing roles for talented South Africans.
- **Global Reach:** Showcases the company's international presence and client base.
- **Contact Information:** Easy access to company email and phone number.
- **Interactive Elements:** "Learn More" button for smooth scrolling to the About Us section and a "Contact Us Today" button that initiates an email.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Lucide React:** A collection of beautiful open-source icons.

## Setup and Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd scs-invictus-landing
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    (If you don't have pnpm, you can install it via `npm install -g pnpm`)

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
scs-invictus-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── accounting_firm.jpg
│   │   ├── global_network.jpg
│   │   └── south_africa_business.jpg
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.css
│   └── App.jsx
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
└── vite.config.js
```

- `.github/workflows/`: Contains GitHub Actions workflow for automated deployment.
- `public/`: Contains static assets that are served directly.
- `src/`: Contains the main source code for the React application.
  - `assets/`: Stores images used in the website.
  - `components/ui/`: Contains reusable UI components (e.g., `button.jsx`).
  - `App.css`: Global CSS styles for the application.
  - `App.jsx`: The main React component for the landing page.
- `index.html`: The main HTML file that serves the React application.
- `package.json`: Defines project metadata and dependencies.
- `vite.config.js`: Vite configuration file.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push changes to the `main` branch, the workflow will:

1. Install dependencies
2. Build the production-ready files
3. Deploy to GitHub Pages

To manually build the production-ready files:

```bash
pnpm run build
```

This command will create a `dist` directory in the root of your project. The contents of this `dist` folder are the optimized and minified files ready for deployment.

For **GitHub Pages** specifically:
1. Push your entire project to a GitHub repository.
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site.
3. In your repository settings, navigate to "Pages" and ensure the source is set to "GitHub Actions".

## Contact

For inquiries, please contact:

- **Email:** info@scsinvictus.co.za
- **Phone:** (+27) 087 821 3944

---

© 2024 SCS-Invictus South Africa (Pty) Ltd
Part of SCS-Invictus Holdings Pte Ltd | 10 Anson Road, #14-06 International Plaza, Singapore 079903

