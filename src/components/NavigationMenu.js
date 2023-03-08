
import community from '../img/community.png'
import projects from '../img/projects.png'
import experience from '../img/experience.png'
import education from '../img/education.png'
import home from '../img/home.png'
import React from "react";
import { Link } from 'react-router-dom'

export default function NavigationMenu(){
    return(
        <React.Fragment>
        <div className="navbar">
            <Link to="/Vista1">
            <div className="community">
                <img className="imgCommunity" src={community} alt=""/>
                <span>Community</span>
            </div>
            </Link>
            <div className="projects">
            <img className="imgProjects" src={projects} alt=""/>
            <span>Projects</span>
            </div>
            <Link to="/Vista3">
            <div className="experience">
                <img className="imgExperience" src={experience} alt=""/>
                <span> Work experience</span>
            </div>
            </Link>
            <Link to="/Vista2">
            <div className="education">
                <img className="imgEducation" src={education} alt=""/>
                <span> Education</span>
            </div>
            </Link>
            <Link to="/Vista1">
            <div className="home">
                <img className="imgHome" src={home} alt=""/>
                <span> Home</span>
            </div>
            </Link>
        </div>
        </React.Fragment>
    );
}