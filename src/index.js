import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/pageerreur";
import TodoList from "./pages/todo";
import WindowWidth from "./pages/windowidth";
import Navbar from "./pages/navbar";
import { Data } from './context/taskcontext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Liste from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Liste/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo",
    element: <TodoList/>
  },
  {
    path: "/window",
    element: <WindowWidth/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <Data>
      <RouterProvider router={router} />
    </Data>
  </React.StrictMode>
);



