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
import { Work } from './Pages/LogWork/work';
import './index.css';
import { Packed } from './Pages/Reports/packed';
import { Ordered } from './Pages/Reports/ordered';
import { Admin } from './Pages/Admin/admin';
import {WorkType} from './Pages/Admin/WorkType/type';
import {Workers} from './Pages/Admin/Workers/workers';
import { Wages } from './Pages/Wages/wages';

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
      { path: '/prehledy', element: <Reports /> },
      { path: '/prehledy/nabaleno', element: <Packed /> },
      { path: '/prehledy/objednano', element: <Ordered /> },
      { path: '/zadatpraci', element: <Work /> },
      { path: '/sprava', element: <Admin /> },
      { path: '/sprava/pracovnici', element: <Workers /> },
      { path: '/sprava/cinnosti', element: <WorkType /> },
      { path: '/sprava/prehledy', element: <Admin /> },
      { path: '/mzdy', element: <Wages /> },
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
