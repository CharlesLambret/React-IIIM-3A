import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/pageerreur";
import TodoList from "./routes/todo";
import WindowWidth from "./routes/windowidth";
import Kanban from "./routes/accueil/home";
import Navbar from "./routes/navbar";
import { Taskdata } from './context/taskcontext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Kanban/>,
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
    <Taskdata>
      <RouterProvider router={router} />
    </Taskdata>
  </React.StrictMode>
);



