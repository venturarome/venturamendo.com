import { StrictMode as ReactStrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PublicLayout from "./layouts/PublicLayout";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route> 
  )
);
const App = () => {
  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
  <ReactStrictMode>
    <App />
  </ReactStrictMode>,
)

export default App