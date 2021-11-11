import { useContext, useState } from "react";
import { DataContext } from "../Context/dataContext";
import Moon from '../assets/destination/image-moon.png';
import Europa from '../assets/destination/image-europa.png';
import Mars from '../assets/destination/image-mars.png';
import Titan from '../assets/destination/image-titan.png';


// setDest(data.destinations.find(destination => {return destination.name === dest} ))

const Destination = () => {
    const {data} = useContext(DataContext);

    const [destination, setDestData] = useState(data.destinations[0]);
   

    const findImage = (name) => {
        return (name === 'Mars') ? Mars : (name === 'Europa') ? Europa : (name === 'Titan') ? Titan : Moon;
    }

    const [image, setImage] = useState(Moon);
    
    // document.querySelector('.comp-nav p:first-of-type').classList.add('active')
    

    const destData = (index,e) => {
        document.querySelectorAll('.comp-nav p').forEach(nav => nav.classList.remove('active'));
        const defView = document.querySelector('.comp-nav p:first-of-type');
        if(e.target === defView){
            defView.style.borderBottom = '3px solid #FFFFFF';
        }else{
            defView.style.borderBottom = 'none';
        }
        e.target.classList.toggle('active');
        setDestData(data.destinations[index]);
        setImage(findImage(data.destinations[index].name));
    }
    

    // console.log(destName, destination);

    return ( 
        <div>
           
            <img src={image} alt="destination" className='dest-image'/>
            
            <div className="comp-nav">
                {data && data.destinations.map((destination) => (
                                <p key={destination.name} onClick={(e) => destData(data.destinations.indexOf(destination),e)}>{destination.name}</p>
                            ))}
            </div>
            

            <h2>{destination.name.toUpperCase()}</h2>
            <p className='description'>
                {destination.description}
            </p>

            <div className='travel-time'>
                <p>AVG. DISTANCE
                    <span className='distance'>{destination.distance}</span>
                </p>
                
                <p>
                    EST. TRAVEL TIME
                    <span className='travel'>{destination.travel}</span>
                </p>
            </div>
        </div>
     );
}
 
export default Destination;