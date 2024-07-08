import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { HomePage } from './Pages/HomePage/home';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import { Reports } from './Pages/Reports/reports';
import { Work } from './Pages/AddWork/work';
import './index.css';

export const App: React.FC = () => {
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
      { path: '/reports', element: <Reports /> },
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