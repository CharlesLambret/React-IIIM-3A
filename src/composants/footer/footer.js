

export default function Footer (){
    const instagram = require("../../Image/instagram.png");
    const youtube = require("../../Image/youtube.png");
    const facebook = require("../../Image/facebook.png");
    const logo = require("../../Image/kanban.png");
    const chevron = require("../../Image/down-chevron.png");

    return (
        <div>
            <footer>
                <div id="logo">
                    <div className="logo"><img src={logo} /> ProPlanner</div>
                    <div id="reseaux">
                        <span> <img src={instagram} alt="Icône instagram"/> </span>
                        <span> <img src={youtube} alt="Icône youtube"/> </span>
                        <span> <img src={facebook}alt="Icône facebook"/> </span>
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