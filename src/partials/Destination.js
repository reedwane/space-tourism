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

    const destData = (index) => {
        setDestData(data.destinations[index]);
        setImage(findImage(data.destinations[index].name));
        console.log(image);
    }
    

    // console.log(destName, destination);

    return ( 
        <div>
            <h1>{destination.name.toUpperCase()}</h1>
            <img src={image} alt="destination" className='dest-image'/>

            {data && data.destinations.map((destination) => (
                            <p key={destination.name} onClick={() => destData(data.destinations.indexOf(destination))}>{destination.name}</p>
                        ))}

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