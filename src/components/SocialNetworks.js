import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import gmail from '../img/gmail.png'
import cv from '../img/cv.png'
import dani from '../img/dani.png'
import React from 'react'

export default function SocialNetworks(){
      function copyToClipboard(text){
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Ocultar el mensaje después de 2 segundos
        });
    
          }
      const [copied, setCopied] = React.useState(false);
    return(
        <div className="socialNetworks">
            <a href="https://github.com/DaniKPosada"><img className="github" src={github} alt="" href=""/></a>
            <a href="https://www.linkedin.com/in/danielacarcamo"><img className="linkedin" src={linkedin} alt=""/></a>
            <img onClick={() => copyToClipboard('d.posada1044@gmail.com')} className="gmail" src={gmail} alt=""/>
            <div className='mensajeCopiado'>{copied && <p>¡El correo se ha copiado en su portapapeles!</p>}</div>
            <a href="https://drive.google.com/file/d/11MQja5nwOq7yefEFeHCFECYL7N7YOmGU/view?usp=sharing"><img className="cv" src={cv} alt=""/></a>
            <img className='dani' src={dani} alt=""/>
        </div>
    );
}