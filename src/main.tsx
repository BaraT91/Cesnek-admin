import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { HomePage } from './Pages/HomePage/home';
import { Header } from './Pages/Components/Header/header';
import { Footer } from './Pages/Components/Footer/footer';
import { Workers } from './Pages/Workers/workers';
import { Work } from './Pages/AddWork/work';
import './index.css';

export const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/workers', element: <Workers /> },
      { path: '/work', element: <Work /> },
    ],
  },
]);

const rootElement = document.getElementById('app');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
