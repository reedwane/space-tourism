import { useContext, useState } from "react";
import { DataContext } from "../Context/dataContext";

import Anousheh from '../assets/crew/image-anousheh-ansari.png';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';

const CrewMan = () => {
    const {data} = useContext(DataContext);

    const [name, setName] = useState(data.crew[0].name.split(' ')[0]);

    const [person, setPersonData] = useState(data.crew[0]);


    const crewData = (index,e) => {
        document.querySelectorAll('.crew-nav p').forEach(nav => nav.classList.remove('active'));
        const defView = document.querySelector('.crew-nav p:first-of-type');
        if(e.target === defView){
            defView.style.backgroundColor = 'hsl(0, 0%, 100%)';
        }else{
            defView.style.backgroundColor = '#9797976b';
        }
        e.target.classList.toggle('active');

        setPersonData(data.crew[index]);
        setName(data.crew[index].name.split(' ')[0]);
    }


    const findImage = (name) => {
        return (name === 'Anousheh') ? Anousheh : (name === 'Mark') ? Mark : (name === 'Victor') ? Victor : Douglas;
    }


    return ( 
        <div>
            <div className='crew-section one'>
                <img src={findImage(name)} alt="destination" />
            </div>

            <div className="crew-nav">
                    {data && data.crew.map((crew) => (
                            <p key={crew.name} onClick={(e) => crewData(data.crew.indexOf(crew),e)}></p>
                        ))}
            </div>

            <div className='crew-section details'>
                <h4>{person.role}</h4>

                <h3 className='name'>{person.name}</h3>

                <p>{person.bio}</p>
            </div>
           

        </div>
     );
}
 
export default CrewMan;