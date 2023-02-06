import "./landingpage.css";
import { Button } from "@mui/material"
import { useNavigate } from "react-router";
import Navbar from "../../composants/navbar/navbar";
import Footer from "../../composants/footer/footer";

export default function LandingPage (){

    const kanban = require("../../Image/work.jpg") 
    const entreprise = require("../../Image/Logo-TotalEnergies.png");
    let navigate = useNavigate();
    const NavigateKanban = () => { navigate("/kanban") }



    return(
        
        <div className="global">
            <Navbar/>
            <div className="hero">
                
                <div className="gauche" >
                    <h1>Organisez vos projets de manière efficace grâce à ProPlanner.</h1> 
                    <p> ProPlanner est une plateforme en ligne de <b>gestion de projet</b> qui aide à <b>visualiser et organiser les tâches </b>  de manière efficace.
                        Il propose <b>une vue d'ensemble</b> complète des projets sous forme de <b>kanban</b>  ou listepour une gestion plus productive.</p>
                    <Button variant="contained" id="bouton1" onClick={NavigateKanban} >Découvrir</Button>
                </div>
                <img src={kanban} alt="Kanban" id="img-landing-page" />
            </div>
            <div className="main">
                <h2>ils nous ont fait confiance.</h2> 
                <div>
                    <img src={entreprise} />
                    <img src={entreprise} />
                    <img src={entreprise} />
                    <img src={entreprise} />
                    <img src={entreprise} />
                </div>
                
            </div>
            <div className="foot">
                    <h1>Vous voulez en savoir plus ?</h1>
                    <p>Adopter dès maintenant une solution efficace de gestion de projet.</p>
                    <Button variant="contained" id="bouton1" onClick={NavigateKanban}>Découvrir</Button>
            </div>
        </div>
    )
}