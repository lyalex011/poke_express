import React from 'react'

function Index(props) {
    
    return (
        <div>
            <h1>Index</h1>
            {props.pokemon.map((pok, i) =>  <a href={`/pokemon/${i}`}><p key={i}>{pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}</p></a>)}
        </div>
    )
}

export default Index;