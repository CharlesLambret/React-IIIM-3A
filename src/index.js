import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/pageerreur";
import { TaskContextProvider } from './context/taskcontext';
import { RegisterStateProvider } from "./context/registercontext";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { SignUp } from "./routes/register/signup/signup";
import LandingPage from "./routes/landingpage/landingpage";
import { ModalContextProvider } from "./context/modalcontext";
import Connexion from "./routes/Connexion/connexion"
import Footer from "./composants/footer/footer";

const router = createBrowserRouter([
  

  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
        element: <Home/>,
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
      
      
      
      <RegisterStateProvider >
          <ModalContextProvider>
          
            <TaskContextProvider>
              <RouterProvider router={router}>
                
              </RouterProvider>
            </TaskContextProvider>
          </ModalContextProvider>
      </RegisterStateProvider>
      <Footer/>
    
  </div>
  

);



