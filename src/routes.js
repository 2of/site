// /routes.js
import { NotFoundPage } from "./pages/404";
import { AboutPage } from "./pages/AboutPage";
import { DirPage } from "./pages/DirPage";
import { FunkyHome } from "./pages/funkyhome";

import { HomePage2 } from "./pages/HomePageMosaic";
import ModelUploadPage from "./pages/ModelUpload";
import NonsensePage from "./pages/NonsensePage";
import { ProjPage } from "./pages/ProjPage";
import WritingPage from "./pages/WritingsPage";
const routes = [
  { path: "/", label: "home", element: <HomePage2 />, showlinks: true, showInNav: true, transparentNav: true },
  { path: "/dir", label: "dir", element: <DirPage />, showlinks: true, showInNav: true, transparentNav: false },
  { path: "/about", label: "about", element: <AboutPage />, showlinks: true, showInNav: true, transparentNav: false },
  { path: "/projects", label: "projects", element: <ProjPage />, showlinks: true, showInNav: true, transparentNav: true },
  // { path: "/funkyhome", label: "homefunky", element: <FunkyHome />, showlinks: true, showInNav: true, transparentNav: false },
  { path: "/words", label: "words", element: <WritingPage />, showlinks: true, showInNav: true, transparentNav: false },
  // { path: "/modelup1", label: "upload to model", element: <ModelUploadPage />, showlinks: true, showInNav: true, transparentNav: false }, // transparent nav for this page
  { path: "/testarea", label: "nonsense", element: <NonsensePage />, showlinks: true, showInNav: false, transparentNav: false },
  { path: "/contact", label: "contact", element: <h1>Contact</h1>, showlinks: false, showInNav: false, transparentNav: false },
  { path: "/services", label: "services", element: <h1>Services</h1>, showlinks: false, showInNav: false, transparentNav: false },
  { path: "/404", label: "404", element: <NotFoundPage />, showlinks: true, showInNav: false, transparentNav: false },
];


export default routes;