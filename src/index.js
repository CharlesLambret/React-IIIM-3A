import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/pageerreur";
import TodoList from "./routes/todo";
import WindowWidth from "./routes/windowidth";
import Kanban from "./routes/accueil/home";
import {Navbar} from "./composants/navbar/navbar";
import { Taskdata } from './context/taskcontext';
import { RegisterStateProvider } from "./context/registercontext";
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
  <>
    <RegisterStateProvider>
      <Navbar/>
      <Taskdata>
        <RouterProvider router={router} />
      </Taskdata>
    <RegisterStateProvider/>
  </>
  

);



