import "./landingpage.css";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function LandingPage (){

    let IlluKanban = require("../../Image/kanban.jpg")
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/kanban")
    }
    return(
        <div className="global">
            <div className="hero">
                <div className="gauche" >
                    <h1>ProPlanner</h1> 
                    <p> Bienvenue sur ProPlanner, l'outil en ligne de gestion de projet idéal pour vous aider à visualiser et à organiser vos tâches de manière efficace. 
                        Avec ProPlanner, vous pouvez visualiser vos tâches sous forme de kanban ou de liste, ce qui vous permet d'avoir une vue d'ensemble complète de vos projets et de les gérer de manière plus productive. 
                        Cliquez sur le bouton "Découvrir" pour en savoir plus sur les fonctionnalités de ProPlanner.</p>
                    <Button variant="contained" id="bouton1" onClick={handleClick}>Découvrir</Button>
                </div>
                <img src={IlluKanban} alt="Kanban"/>
            </div>
        </div>

    )
}
