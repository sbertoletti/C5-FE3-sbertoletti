import { useState } from 'react';

{/*
const dataSelector = (s) => {
    switch (s) {
        case "database":
            return 1
        case "backend":
            return 2
        case "frontend":
            return 3
        case "devops":
            return 4
        }
    }
*/}

const Selector = ({info, setSelected}) => {

    const handleChange = (event) => {
            const iterator = event.target.value;

            event.preventDefault(event.target.value);
            
            const validate = (i) => {
                if ( i === "database" ){
                    return 1;
                } else if ( i === "frontend" ){
                    return 2;
                } else if ( i === "backend" ){
                    return 3;
                } else if ( i === "devops"){
                    return 4;
                } else {
                    return 0;
                }
            };

            const valor = validate(iterator);
            
            setSelected(valor);

        }


    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <>

            <form className="form" id="selector" onSubmit={handleSubmit}>
                <select onChange={handleChange}>
                    <option selected disabled>Selecione una carrera</option>
                    {info.map((item) => {
                        return (
                        <option key={item.id} value={item.value}>{item.materia}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Ver" />
            </form>
            
        </>
    )
}

export default Selector;

{/*
<form className="form2">
    <input />
    <input type="submit" value="Grabar" />
</form>
 */}