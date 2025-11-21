import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import JflowgPage from './pages/Jflowg';
import ProjectDetail from './pages/ProjectDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/jflowg',
    element: <JflowgPage />,
  },
  {
    path: '/projects/:projectId',
    element: <ProjectDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
