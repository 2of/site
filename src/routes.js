// /routes.js
import HomePage from "./pages/HomePage";
import WritingPage from "./pages/WritingsPage";

const routes = [
  { path: "/", label: "Dear God Hire Me", element: <HomePage /> },
  { path: "/fun", label: "Fun", element:<HomePage/> },
  { path: "/projects", label: "Projects", element: <h1>Projects</h1> },
  { path: "/words", label: "Writing", element: <WritingPage/>},
  { path: "/contact", label: "Contact", element: <h1>Contact</h1> }
];

export default routes;