// /routes.js
import { NotFoundPage } from "./pages/404";
import { DirPage } from "./pages/DirPage";

import { HomePage2 } from "./pages/HomePageMosaic";
import ModelUploadPage from "./pages/ModelUpload";
import NonsensePage from "./pages/NonsensePage";
import { ProjPage } from "./pages/ProjPage";
import WritingPage from "./pages/WritingsPage";
const routes = [
  { path: "/", label: "home", element: <HomePage2 />, showlinks: false, showInNav: true },
  { path: "/dir", label: "dir", element: <DirPage />, showlinks: true, showInNav: true },
  { path: "/projects", label: "projects", element: <ProjPage/>, showlinks: true, showInNav: true },
  // { path: "/home2", label: "home2", element: <HomePage2/>, showlinks: false, showInNav: true },
  { path: "/words", label: "articles", element: <WritingPage />, showlinks: true, showInNav: true },
  { path: "/modelup1", label: "upload to model", element: <ModelUploadPage />, showlinks: true, showInNav: true },
  { path: "/testarea", label: "nonsense", element: <NonsensePage />, showlinks: true, showInNav: false },
  { path: "/about", label: "about", element: <h1>About</h1>, showlinks: false, showInNav: false },
  { path: "/contact", label: "contact", element: <h1>Contact</h1>, showlinks: false, showInNav: false },
  { path: "/services", label: "services", element: <h1>Services</h1>, showlinks: false, showInNav: false },
  { path: "/team", label: "team", element: <h1>Team</h1>, showlinks: false, showInNav: false },
  { path: "/careers", label: "careers", element: <h1>Careers</h1>, showlinks: false, showInNav: false },
  { path: "/blog", label: "blog", element: <h1>Blog</h1>, showlinks: false, showInNav: false },
  { path: "/faq", label: "faq", element: <h1>FAQ</h1>, showlinks: false, showInNav: false },
  { path: "/terms", label: "terms", element: <h1>Terms</h1>, showlinks: false, showInNav: false },
  { path: "/privacy", label: "privacy", element: <h1>Privacy Policy</h1>, showlinks: false, showInNav: false },
  { path: "/test1", label: "test1", element: <h1>Test 1</h1>, showlinks: false, showInNav: false },
  { path: "/test2", label: "test2", element: <h1>Test 2</h1>, showlinks: false, showInNav: false },
  { path: "/test3", label: "test3", element: <h1>Test 3</h1>, showlinks: false, showInNav: false },
  { path: "/test4", label: "test4", element: <h1>Test 4</h1>, showlinks: false, showInNav: false },
  { path: "/test5", label: "test5", element: <h1>Test 5</h1>, showlinks: false, showInNav: false },
  { path: "/test6", label: "test6", element: <h1>Test 6</h1>, showlinks: false, showInNav: false },
  {path: "/404", label: "404", element: <NotFoundPage />, showlinks: true, showInNav: false },  // Add this route to catch all undefined paths
];
export default routes;