import SocialNetworks from "./SocialNetworks.js";
import "../App.css";
import Xarrow from "react-xarrows"; 
import React, { useRef } from "react";
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
          <div className="v1w dev">Web Developer</div>
          <div className="leader" ref={leaderRef}></div>
          <div className="v1w lead">Social Leader</div>
          <div className="name" ref={nameRef}></div>
          <div className="v1w na">DANIELA CÁRCAMO POSADA</div>
          <div className="being" ref={beingRef}></div>
          <div className="v1w be">Human Being</div>
          <div className="engineer" ref={engineerRef}></div>
          <div className="v1w en">Engineer</div>
        </div>
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
