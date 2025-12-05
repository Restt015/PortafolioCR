import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import JflowgPage from './pages/Jflowg';
import AlarmberPage from './pages/Alarmber';
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
    path: '/projects/alarmber',
    element: <AlarmberPage />,
  },
  {
    path: '/projects/:projectId',
    element: <ProjectDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
