import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Auth0Provider almacena el estado de autentificacion de nuestros usuarios y proveé metodos para loguear y desloguear a los usuarios
    Nos da tambien un hook que es auth0 */}
    <Auth0Provider
      domain="dev-eh02kkn3v23spo8p.us.auth0.com"
      clientId="EH3kVHOiGMZpEr7HOEGR8p3NqGjazKb5"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
