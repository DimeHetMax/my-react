# React and TypeScript Practice Project

This is a learning project created to practise the fundamentals of React,
TypeScript, component composition, props, state, event handling, and styling.

## Technologies Used

- **React 19** for building the user interface with reusable components.
- **TypeScript** for static typing of component props, state, objects, and event
  handlers.
- **Vite** as the development server and production build tool.
- **React Compiler** through the Vite React plugin and Babel integration.
- **CSS Modules** for component-scoped styles.
- **modern-normalize** for consistent default browser styles.
- **clsx** for conditional CSS class names.
- **React Icons** for reusable SVG icons.
- **ESLint** for code quality checks.

## React Concepts Demonstrated

- Functional components
- Typed component props
- Passing data and callback functions through props
- Local state with `useState`
- Functional state updates
- Conditional rendering
- Rendering arrays with `map` and stable keys
- Updating object state
- Event handling
- Component composition
- Optional props and union types

The application includes examples such as a click counter, conditional
messages, a product list, a mailbox status, alerts, a user menu, a book list,
and object state updates.

## Styling

`modern-normalize` is imported before the application's global styles in
`src/main.tsx`:

```tsx
import "modern-normalize";
import "./index.css";
```

This removes common browser inconsistencies first, while allowing the custom
rules in `index.css` to override the normalized styles when necessary.
Component-specific styles are organised with CSS Modules.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages

The project is configured for deployment at:

https://dimehetmax.github.io/my-react/

Every push to the `main` branch starts the GitHub Actions workflow, builds the
application, and publishes the contents of the `dist` directory.

To enable the first deployment:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push the project to the `main` branch or run the workflow manually from the
   **Actions** tab.

The Vite `base` option is set to `/my-react/` so that scripts, styles, and other
assets load correctly from the repository's GitHub Pages subdirectory.
