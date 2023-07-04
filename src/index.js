import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "design-system-ls/dist/main.css";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import BtsButtonPage from './pages/BtsButtonPages';
import BtsTypographyPage from './pages/BtsTypographyPage';
import BtsLinkPage from './pages/BtsLinkPage';
import BtsInlineMessage from './pages/BtsInlineMessage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: < Home />
      },
      {
        path: "bts-buttons",
        element: <BtsButtonPage/>
      },
      {
        path: "bts-typography",
        element: <BtsTypographyPage />
      },
      {
        path: "bts-link",
        element: <BtsLinkPage />
      },
      {
        path: "bts-inline-message",
        element: <BtsInlineMessage />
      }


    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
