import React from 'react'

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action='/pokemon' method='POST'>

                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' name='name'></input><br /><br /><br />

                <label htmlFor='color'>Image:</label><br />
                <input type='text' id='color' name='color'></input><br /><br />

                <button>Submit</button>
                
            </form>
            <br />
            <a href={`/pokemon/`}><button>Back</button></a>
        </div>
    )
}

export default New;