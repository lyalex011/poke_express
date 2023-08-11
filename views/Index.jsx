import React from 'react'

function Index({databasePokemon}) {
    
    return (
        <div>
            <h1>Index</h1>
            {databasePokemon.map((pok, i) =>  <a href={`/pokemon/${pok._id}`}><p key={i}>{pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}</p></a>)}
            <a href="pokemon/new"><button>Add new</button></a>
        </div>
    )
}

export default Index;