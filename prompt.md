You are an AI assistant helping to create a new React project using Vite, TypeScript, and Tailwind CSS (version 3.x).

**Goal:** Build the barebones structure for a resource website focused on DS-ASD (Down syndrome & Autism) and PDA (Pathological Demand Avoidance). The design should be **minimal, clean, and beautiful**, utilizing Tailwind CSS effectively for styling.

**Project Setup:**

1.  Initialize a new project using `npm create vite@latest project-name --template react-ts`.
2.  Navigate into the project directory: `cd project-name`.
3.  Install Tailwind CSS and its dependencies: `npm install -D tailwindcss postcss autoprefixer`.
4.  Generate Tailwind configuration files: `npx tailwindcss init -p`.
5.  Configure Tailwind template paths in `tailwind.config.js`:
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
6.  Add Tailwind directives to `./src/index.css` (replace existing content):
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
7.  Ensure `index.css` is imported in `src/main.tsx`.
8.  Install `react-router-dom`: `npm install react-router-dom`.

**Website Structure & Content:**

1.  **Core Pages:** Create basic page components in `src/pages/` for:
    *   `HomePage.tsx`: Simple welcome message, brief intro, maybe two call-to-action buttons.
    *   `AboutPage.tsx`: Placeholder text for explaining DS-ASD.
    *   `UnderstandingPDAPage.tsx`: Placeholder text for explaining PDA.
    *   `ResourcesPage.tsx`: Placeholder text indicating where resources will be listed.
    *   `ContactPage.tsx`: Simple contact message (no form needed yet).

2.  **Layout:** Create a `MainLayout.tsx` component in `src/layouts/` that includes:
    *   A header containing the `Navbar` component.
    *   A `main` content area where the page components will be rendered using `<Outlet />` from `react-router-dom`.
    *   A simple `Footer` component.

3.  **Navigation:** Create a `Navbar.tsx` component in `src/components/`:
    *   Display the site name/logo (e.g., "DS-ASD Support").
    *   Include links to Home, About, Understanding PDA, Resources, and Contact.
    *   Use Tailwind for clean styling. Make it responsive (hamburger menu for mobile).

4.  **Footer:** Create a `Footer.tsx` component in `src/components/`:
    *   Simple copyright notice (e.g., "© [Current Year] DS-ASD Support").

5.  **Routing:** Set up routing in `src/App.tsx` using `react-router-dom` to link the paths (e.g., `/`, `/about`, `/understanding-pda`, `/resources`, `/contact`) to their respective page components within the `MainLayout`.

**Design & Styling (Tailwind CSS):**

*   **Aesthetic:** Focus on whitespace, clean typography, and a limited, soft color palette.
    *   Use a modern sans-serif font stack (Tailwind's default is fine).
    *   Choose a subtle primary color for links and accents.
*   **Layout:** Use Tailwind utility classes for layout (flexbox, grid), padding, margins, etc.
*   **Components:** Style the Navbar, Buttons, and Footer using `@apply` or utility classes for a consistent, minimal look.
*   **Responsiveness:** Ensure the layout and navbar adapt gracefully to smaller screens.
*   **Minimalism:** Avoid complex animations, overly decorative elements, or heavy shadows.

**Output:** Provide the complete code for `tailwind.config.js`, `src/index.css`, `src/App.tsx`, `src/main.tsx`, and all created component files (`MainLayout.tsx`, `Navbar.tsx`, `Footer.tsx`, `HomePage.tsx`, `AboutPage.tsx`, `UnderstandingPDAPage.tsx`, `ResourcesPage.tsx`, `ContactPage.tsx`). 