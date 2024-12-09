// /routes.js
import { DirPage } from "./pages/DirPage";
import HomePage from "./pages/HomePage";
import ModelUploadPage from "./pages/ModelUpload";
import NonsensePage from "./pages/NonsensePage";
import WritingPage from "./pages/WritingsPage";

const routes = [
  { path: "/", label: "home", element: <HomePage />, showlinks: false },
  { path: "/dir", label: "dir", element: <DirPage/>, showlinks: true },
  { path: "/projects", label: "projects", element: <h1>Projects</h1>, showlinks: true },
  { path: "/words", label: "articles", element: <WritingPage />, showlinks: true },
  { path: "/modelup1", label: "upload to model", element: <ModelUploadPage/>, showlinks: true },
  { path: "/testarea", label: "nonsense", element: <NonsensePage/>, showlinks: true }
];

export default routes;