// /routes.js
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", label: "Home", element: <HomePage /> },
  { path: "/about", label: "About", element:<HomePage/> },
  { path: "/projects", label: "Projects", element: <h1>Projects</h1> },
  { path: "/contact", label: "Contact", element: <h1>Contact</h1> }
];

export default routes;