import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/pageerreur";
import WindowWidth from "./routes/windowidth";
import Kanban from "./routes/accueil/home";
import { TaskContextProvider } from './context/taskcontext';
import { RegisterStateProvider } from "./context/registercontext";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { SignUp } from "./routes/signup/signup";
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
    element: <SignUp/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
      
      
      
      <RegisterStateProvider>
        
          <ModalContextProvider>
          
            <TaskContextProvider>
              <RouterProvider router={router}>
                
              </RouterProvider>
            </TaskContextProvider>
          </ModalContextProvider>
      </RegisterStateProvider>
    
  </div>
  

);



