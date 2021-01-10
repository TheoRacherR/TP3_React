import React, { useEffect, useState } from 'react';
import Music from './Music';


const Person = () => {
    const [data,setData] = useState([]);

    useEffect((data) => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
            // console.log(response);
        .then(dat => setData(dat.results))
        .catch(error => console.error(error))
        console.log(data);
    },[])



    return (
        <div>
            {data.map((e) => 
                <div>
                    
                    <h1>App de générateur de personne aléatoire</h1>
                    <h2>- Personne : </h2>
                    <img src={e.picture.large} alt="person"/>
                    <h3>- Identité : </h3>{e.name.title} {e.name.first} {e.name.last}
                    <h3>- Sexe : {e.gender}</h3>
                    {/* <p>Latitude : {e.location.coordinates.latitude} et Longitude : {e.location.coordinates.longitude}</p> */}
                    <p><h3>- Son style de musique préféré : </h3><Music email={e.email}/></p>
                </div>
            )}
            
        </div>
    );
}

export default Person;