import { useRouteError } from "react-router-dom";
import "./pageerreur.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Une erreur s'est produite dans le code </h1>
      <p>Veuillez nous excuser, l'erreur suivante s'est produite :</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}