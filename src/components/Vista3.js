import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import React, { useRef } from "react";
import NavigationMenu from "./NavigationMenu.js";
import siemens from '../img/siemens.png'
import colenergy from '../img/colenergy.png'
export default function Vista3() {

return (
  <React.Fragment>
  <div className="v13c">
          <SocialNetworks />
          <div className="v3c">
            <div className="v3Experience"></div>
            <div className="title"><span>WORK EXPERIENCE</span></div>
            <div className="gridExperience">
              <div className="siemens" >
              <img classname="siemensLogo" src={siemens} alt=""/>
              <span><br></br> Trainee Administrative.<br></br> Nov 2021 - March 2022 </span>
              </div>
              <div className="colenergy" >
              <img classname="colenergyLogo" src={colenergy} alt=""/>
              <span><br></br>Photovoltaic Projects Assistant.<br></br>June 2017 - December 2017 </span>
              </div>
            </div>
          </div>
          <NavigationMenu/>
    </div>
  </React.Fragment>
  );
}
