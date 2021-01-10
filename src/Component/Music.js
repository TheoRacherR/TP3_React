import React, { useEffect, useState } from 'react'

const Music = ({email}) => {

    const [data,setData] = useState([]);

    const style = {
        textDecoration: 'none',
        color: 'white'
    }

    useEffect((data) => {
        fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre')
        .then(response => response.json())
        .then(dat => setData(dat))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <a style={style} href={"https://www.google.com/search?q="+data} target="_blank">{data}</a>
            <h3>- Son adresse mail : </h3>{email}
        </div>
    );
}

export default Music;