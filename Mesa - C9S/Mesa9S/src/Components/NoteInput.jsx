import React, { useState } from 'react'

const NoteInput = () => {

    const [ vote, setVote ] = useState(0);

    const inputHandler = (event) => {
        event.preventDefault();
        const valor = event.target.value;

        console.log(valor);

        setVote(...vote, valor);
    }

    return (
        <div>
            <form>
                <input type="text"/>
                <input type="submit" value="Salvar" onSubmit={inputHandler}/>
            </form>
        </div>
    )
}

export default NoteInput