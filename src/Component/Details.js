import React,{useState} from 'react'
import Customer from './Customer'

const Details = () => {

    const [update,setUpdate] = useState('');

    // const func = () => {
    //     update === '' ? setDisplay(false) : setDisplay(true)
    // }
    // {func()}

    return (
        <div>
            Cette page a été réalisé pour le tp3 de React.
            <p>Voulez vous renseigner votre Prénom : </p>
            <input type='text' placeholder='Votre Prénom' onChange={e => setUpdate(e.target.value)}/>
            <Customer customer={update}/>
        </div>
    )
}

export default Details;