import React, { useState } from "react";
import { createContext } from "react";

export const ModalLoginContext = createContext();

export function ModalLoginState(props){

    const [showModalLogin, setshowModalLogin] = useState(false);

}