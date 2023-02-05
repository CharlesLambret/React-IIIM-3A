import "./connexion.css";


const logo = require('../../Image/kanban.png');

export default function Connexion() {

    const logo = require("../../Image/kanban.png");

  return ( 
    <div className="Container">
       
            <div className="row">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                 <label className="nom" id="nom1">Username</label>
                 <input type="text" name="email" className="field" id="field1"/>

                <label className="nom" id="nom2">Mot de passe</label>
                <input type='password' name="password" className="field" id="field2"/>

                <div className="box-bouton">
                    <button type="submit" id="bouton-login">Se Connecter</button>
                </div>
            </div>
                 
       </div>
  );
}

