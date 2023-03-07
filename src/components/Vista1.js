import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import Xarrow from "react-xarrows"; 
import React, { useRef } from "react";
import NavigationMenu from "./NavigationMenu.js";
export default function Vista1() {
    const developerRef = useRef(null);
    const leaderRef = useRef(null);
    const nameRef = useRef(null);
    const beingRef = useRef(null);
    const engineerRef = useRef(null);

return (
<React.Fragment>
<div className="v13c">
        <SocialNetworks />
        <div className="v1c">
          <div className="developer" ref={developerRef}></div>
          <div className="v1w dev"><span>Web Developer</span></div>
          <div className="leader" ref={leaderRef}></div>
          <div className="v1w lead"><span>Social Leader</span></div>
          <div className="name" ref={nameRef}></div>
          <div className="v1w na"><span>DANIELA CÁRCAMO POSADA</span></div>
          <div className="being" ref={beingRef}></div>
          <div className="v1w be"><span>Human Being</span></div>
          <div className="engineer" ref={engineerRef}></div>
          <div className="v1w en"><span>Engineer</span></div>
        </div>
        <NavigationMenu/>
      </div>
      <Xarrow 
                start={nameRef} 
                end={developerRef} 
                color="black" 
                startAnchor="top" 
                endAnchor="bottom"
            />
            <Xarrow 
                start={nameRef} 
                end={leaderRef} 
                color="black" 
                startAnchor="right" 
                endAnchor="bottom"
            />
            <Xarrow 
                start={nameRef} 
                end={beingRef} 
                color="black" 
                startAnchor="left" 
                endAnchor="top"
            />
            <Xarrow 
                start={nameRef} 
                end={engineerRef} 
                color="black" 
                startAnchor="bottom" 
                endAnchor="top"
            />
</React.Fragment>
  );
}
