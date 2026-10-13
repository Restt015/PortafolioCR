import { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import QaCasePage from './pages/QaCase';
import NotFound from './pages/NotFound';

function Root() {
  const { pathname, hash } = useLocation();

  // Los enlaces del menú apuntan a /#seccion: se desplaza hasta ella al llegar
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:projectId', element: <ProjectPage /> },
      { path: '/qa/:caseId', element: <QaCasePage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
