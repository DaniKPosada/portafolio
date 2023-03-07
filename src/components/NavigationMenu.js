
import community from '../img/community.png'
import projects from '../img/projects.png'
import experience from '../img/experience.png'
import education from '../img/education.png'
import home from '../img/home.png'

export default function NavigationMenu(){
    return(
        <div className="navbar">
            <div className="community">
            <img className="imgCommunity" src={community} alt=""/>
                Community
            </div>
            <div className="projects">
            <img className="imgProjects" src={projects} alt=""/>
                Projects
            </div>
            <div className="experience">
            <img className="imgExperience" src={experience} alt=""/>
                Work experience
            </div>
            <div className="education">
            <img className="imgEducation" src={education} alt=""/>
                Education
            </div>
            <div className="home">
            <img className="imgHome" src={home} alt=""/>
                Home
            </div>
        </div>
    );
}