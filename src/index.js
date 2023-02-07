import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Details from "./pages/Details";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Adventure from "./pages/Adventure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/adventure",
    element: <Adventure />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);

reportWebVitals();
