import "./landingpage.css";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function LandingPage (){

    const kanban = require("../../Image/work.jpg") 
    const entreprise = require("../../Image/Logo-TotalEnergies.png");
    const logo = require("../../Image/kanban.png");
    const chevron = require("../../Image/down-chevron.png");
    const instagram = require("../../Image/instagram.png");
    const youtube = require("../../Image/youtube.png");
    const facebook = require("../../Image/facebook.png");

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/kanban")
    }

    return(
        <div className="global">
            <div className="hero">
                
                <div className="gauche" >
                    <h1>Organisez vos projets de manière efficace grâce à ProPlanner.</h1> 
                    <p> ProPlanner est une plateforme en ligne de <b>gestion de projet</b> qui aide à <b>visualiser et organiser les tâches </b>  de manière efficace.
                        Il propose <b>une vue d'ensemble</b> complète des projets sous forme de <b>kanban</b>  ou listepour une gestion plus productive.</p>
                    <Button variant="contained" id="bouton1" onClick={handleClick}>Découvrir</Button>
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
                    <Button variant="contained" id="bouton1" onClick={handleClick}>Découvrir</Button>
            </div>
            <footer>
                <div id="logo">
                    <div className="logo"><img src={logo} /> ProPlanner</div>
                    <div id="reseaux">
                        <span> <img src={instagram}/> </span>
                        <span> <img src={youtube}/> </span>
                        <span> <img src={facebook}/> </span>
                    </div>
                </div>

                <div id='box1'>
                <div id='box2'>
                <div>
                    <h3>Entreprise</h3>
                    <ul>
                        <li>Pourquoi ProPlanner ?</li>
                        <li>A propos de ProPlanner ?</li>
                        <li>On recrute ! </li>
                    </ul>
                </div>
                <div>
                    <h3>Ressource</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Glossaire</li>
                        <li>Centre d'aide</li>
                    </ul>
                </div>

                <div id="chevron">
                  <a href="#top">  <img src={chevron} /></a>
                </div>

                </div> </div>
               

            
            </footer>
            <div id="white">
            <div id='box3'>
                    <p>© ProPlanner</p>

                    <div>
                        <p>Politique Données Personnelles</p>
                        <p>Mentions légales</p>
                        <p>Paramètres Cookies</p>
                        <p>Langue: <b>Français</b> </p>
                    </div>
            </div>
            </div>
        </div>
        

    )
}