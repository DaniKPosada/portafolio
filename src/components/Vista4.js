import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import React from "react";
import NavigationMenu from "./NavigationMenu.js";

export default function Vista4() {
    const iframeUrl = 'https://sabujcha-sjb7.vercel.app/';
    return (
    <React.Fragment>
    <div className="v13c">
            <SocialNetworks />
            <div className="v3c">
                <div className="v4Projects"></div>
                <div className="title"><span>PROJECTS</span></div>
                <div className="gridProjects">
                <div className="slot1">
                    <iframe src={iframeUrl} 
                    title="Miniatura del sitio web"  
                    style={{ width: "500px", height: '250px',overflow:"none" }}></iframe>
                    <span>Página web con diseño front responsive fiel a una maquetación predeterminada. 
                        Tecnologías HTML y CSS. 
                    </span>
                </div>
                </div>
            </div>
            <NavigationMenu/>
        </div>
    </React.Fragment>
    );
}
