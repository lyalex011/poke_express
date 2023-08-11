import React from 'react'

export default function Show({ pok } ) {

    return (
        <div>
            <h1>Show</h1>
            <img src={`${pok.img}.jpg`} alt="image" />
            <p>Name: {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}</p>
            <a href="/pokemon"><button>Back</button></a>
        </div>
    )
}