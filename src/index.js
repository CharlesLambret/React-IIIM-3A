import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/pageerreur";
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
import { SignUp } from "./composants/modal/register/signup";
import LandingPage from "./routes/landingpage/landingpage";
import { ModalContextProvider } from "./context/modalcontext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/kanban",
    element: <Kanban/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/window",
    element: <WindowWidth/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RegisterStateProvider>
      <ModalContextProvider>
      <Navbar/>
      <Taskdata>
        <RouterProvider router={router} />
      </Taskdata>
      </ModalContextProvider>
    </RegisterStateProvider>
  </div>
  

);



