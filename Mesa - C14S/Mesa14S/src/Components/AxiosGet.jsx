import { useState, useEffect } from 'react'
import axios from 'axios'

const AxiosGet = () => {
    const [ comentario, setComentario ] = useState([{}]);

    /*
    const [ nuevoComentario, setNuevoComentario ] = useState({
        name: '',
        email: '',
        body: ''
    });
    */

    const url = 'https://jsonplaceholder.typicode.com/comments';

    useEffect(() => {
        axios.get(url).then((res) => {
            setComentario(res.data)
            console.log(comentario)
        });
    }, []);

    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, nuevoComentario);
    }
     */

    return (
        <>
            <ul>
                {comentario.map((item, index) => <li key={index}>{item.email}</li>)}
            </ul>
            {/*
            * Si quiero que solo me traiga el comentario 7
            * {comentario.map((item, index) => (index === 7) ? <li key={index}>{item.email}</li> : console.log("nada"))}
            */}

            {/*
            * && significa en caso de que "gatito" sea o no Undefined, tenga contenido 
            {comentario && <p>{comentario[0]?.url} alt={`comentario${index}`} />}
            */}
            
            {/*
            *
            <h1>Form: </h1>
            <div>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', margin:'10px', padding:'10px'}}>
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setNuevoComentario((prevState) => ({...prevState, name: e.target.value}))} />
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setNuevoComentario((prevState) => ({...prevState, email: e.target.value}))} ></input>
                    <label>Comment: </label>
                    <input type="text" onChange={(e) => setNuevoComentario((prevState) => ({...prevState, body: e.target.value}))} ></input>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
            */}
        </>
    )

}

export default AxiosGet;