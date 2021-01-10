import React from 'react'

const Customer = ({customer}) => {

    // const style = {
    //     display : display ? 'block' : 'none'
    // }

    
    return (
        <div>
            <p>
                La personne qui regarde cette page s'appelle {customer}
            </p>
        </div>
    )
}

export default Customer;