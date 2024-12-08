// /routes.js
import HomePage from "./pages/HomePage";
import WritingPage from "./pages/WritingsPage";

const routes = [
  { path: "/", label: "Home", element: <HomePage />, showlinks: false },
  { path: "/fun", label: "Fun", element: <h1>fun</h1>, showlinks: true },
  { path: "/projects", label: "Projects", element: <h1>Projects</h1>, showlinks: true },
  { path: "/words", label: "Writing", element: <WritingPage />, showlinks: true },
  { path: "/modelup1", label: "Model Upload", element: <h1>Contact</h1>, showlinks: false }
];

export default routes;