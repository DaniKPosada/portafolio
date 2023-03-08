import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import React from "react";
import NavigationMenu from "./NavigationMenu.js";
import calculadora from '../img/calculadora.png'
import SabujCha from '../img/SabujCha.png'
import emociones from '../img/dashboardEmociones.png'
import tributo from '../img/tributos.png'
import juego from '../img/juego.png'
import todolist from '../img/todolist.png'

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
                        <a href="https://sabujcha-sjb7.vercel.app/">
                        <img 
                        className="calculadora" 
                        src={SabujCha} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span>A web page with a front-end responsive design faithful to a predetermined layout, 
                            using HTML and CSS technologies.
                        </span>
                    </div>
                    <div className="slot2">
                        <a href="https://6369d946280e5366538e6a50--inquisitive-klepon-8b2b5e.netlify.app/">
                        <img 
                        className="calculadora" 
                        src={calculadora} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span><br></br>A calculator developed in JavaScript with a responsive web design.</span>
                    </div>
                    <div className="slot3">
                        <a href="https://neon-sfogliatella-5dfada.netlify.app/">
                        <img 
                        className="calculadora" 
                        src={emociones} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span><br></br>Front-end dashboard displaying mood vs tasks variations.
                        Developed using Figma, HTML and CSS with animations. </span>
                    </div>
                    <div className="slot4">
                        <a href="https://tributo-psi.vercel.app/">
                        <img 
                        className="calculadora" 
                        src={tributo} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span><br></br>My first tribute web page in HTML.</span>
                    </div>
                    <div className="slot5">
                    <a href="https://lambent-axolotl-7d7967.netlify.app/">
                        <img 
                        className="calculadora" 
                        src={juego} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span><br></br>Game responsive developed in javascript.</span>
                    </div>
                    <div className="slot6">
                        <a href="https://sabujcha-sjb7.vercel.app/"><img 
                        className="calculadora" 
                        src={todolist} 
                        alt="Miniatura del proyecto calculadora" 
                        />
                        </a>
                        <span><br></br>Todolist front and back developed with MongoDB and React</span>
                    </div>
                </div>
            </div>
            <NavigationMenu/>
        </div>
    </React.Fragment>
    );
}
