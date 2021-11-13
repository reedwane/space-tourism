import { useContext, useState } from "react";
import { DataContext } from "../Context/dataContext";

import LaunchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import Spaceport from '../assets/technology/image-spaceport-landscape.jpg';

import LaunchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';

const Tech = () => {
    const {data} = useContext(DataContext);

    const [name, setName] = useState(data.technology[0].name.split(' ')[0]);

    const [technologyData, setTechData] = useState(data.technology[0]);


    const techData = (index,e) => {
        document.querySelectorAll('.tech-nav p').forEach(nav => nav.classList.remove('active'));
        const defView = document.querySelector('.tech-nav p:first-of-type');
        if(e.target === defView){
            defView.style.color = 'hsl(230, 35%, 7%)';
            defView.style.backgroundColor = 'hsl(0, 0%, 100%)';
        }else{
            defView.style.color = 'hsl(0, 0%, 100%)';
            defView.style.backgroundColor = 'hsla(0, 0%, 0%, 0)';
        }
        e.target.classList.toggle('active');

        setTechData(data.technology[index]);
        setName(data.technology[index].name.split(' ')[0]);
    }


    const findImage = (name) => {
        if(window.screen.width > 1024){
            return (name === 'Spaceport') ? SpaceportPortrait
            : (name === 'Space') ? SpaceCapsulePortrait
            : LaunchVehiclePortrait;
        }else{
            return (name === 'Spaceport') ? Spaceport
            : (name === 'Space') ? SpaceCapsule
            : LaunchVehicle;
        }
        
    }


    return ( 
        <div>
            

            <div className='tech-section one'>
                <img src={findImage(name)} alt="destination" />
            </div>

            <div className="tech-nav">
                {data && data.technology.map((tech) => (
                                    <p key={tech.name} onClick={(e) => techData(data.technology.indexOf(tech),e)}>{data.technology.indexOf(tech)+1}</p>
                                ))}
            </div>

            <div className='tech-section details'>
                <h5>THE TERMINOLOGY ...</h5>
                <h3>{technologyData.name}</h3>
                <p>{technologyData.description}</p>
            </div>
            
            

        </div>
     );
}
 
export default Tech;