import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import gmail from '../img/gmail.png'
import cv from '../img/cv.png'
import dani from '../img/dani.png'


export default function SocialNetworks(){
    return(
        <div className="socialNetworks">
            <a href="https://github.com/DaniKPosada"><img className="github" src={github} alt="" href=""/></a>
            <a href="https://www.linkedin.com/in/danielacarcamo"><img className="linkedin" src={linkedin} alt=""/></a>
            <img className="gmail" src={gmail} alt=""/>
            <img className="cv" src={cv} alt=""/>
            <img className='dani' src={dani} alt=""/>
        </div>
    );
}