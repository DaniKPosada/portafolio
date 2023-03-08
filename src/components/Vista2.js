import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import React from "react";
import NavigationMenu from "./NavigationMenu.js";
import programateLogo from '../img/programate.png'
import uniandes from '../img/uniandes.png'

export default function Vista2() {

return (
  <React.Fragment>
  <div className="v13c">
          <SocialNetworks />
          <div className="v2c">
            <div className="v2Education"></div>
            <div className="title"><span>EDUCATION</span></div>
            <div className="gridStudies">
              <div className="programate">
                <img classname="programateLogo" src={programateLogo} alt=""/>
                <span>Web Developer HTML, CSS, JS, React, MongoDB.<br></br>March 2023</span>
              </div>
              <div className="uniandes" >
              <img classname="uniandes" src={uniandes} alt=""/>
              <span><br></br> Electrical Engineer Emphasis: Alternative Energies.<br></br> Nov 2021</span>
              </div>
              <div className="uniandes" >
              <img classname="uniandes" src={uniandes} alt=""/>
              <span><br></br>Electronic Engineer Emphasis: Electronic Systems <br></br> Sep 2021</span>
              </div>
            </div>
          </div>
          <NavigationMenu/>
    </div>
  </React.Fragment>
  );
}
