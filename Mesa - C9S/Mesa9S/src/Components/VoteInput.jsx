

const VoteInput = ({info, setInfo, setIterador, iterador}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <table border="1" className="line_title">
                    <thead>
                        <tr>
                            <th>Carrera</th>
                            <th>Cantidad de Estudiantes</th>
                            <th>Promedio de Calificaciones de los Estudiantes</th>
                        </tr>
                    </thead>

                    <tbody>

                        {info.map((item) => {
                            
                            const handler = (e) => {
                                e.preventDefault();
                                if (item.id === iterador.id) {
                                    setIterador({
                                        id: item.id,
                                        materia: item.materia,
                                        value: item.value
                                    })
                                } else {
                                    console.log('No, acá VoteInput.jsx line 34');
                                }
                            }
                            return (
                                <>
                                    <tr key={item.id}>
                                        <td>{item.materia}</td>
                                        <td>
                                            <form onSubmit={handler}>
                                                <input type="number" id="cantidadEstudiantes" name="cantidadEstudiantes" onChange={(e) => setIterador((prevIterador) => ({...prevIterador, cantidadEstudiantes: (e.target.value)}))} />
                                                <button type="submit" id='cantidadEstudiantes'>Enviar</button>
                                            </form>
                                        </td>
                                        <td>
                                            <form onSubmit={handler}>
                                                <input type="number" id="promedio" name="promedio" onChange={(e) => setIterador((prevIterador) => ({...prevIterador, promedio: (e.target.value)}))} />
                                                <button type="submit" id='promedio'>Enviar</button>
                                            </form>
                                        </td>
                                    </tr>
                                </>
                            )})}
                        </tbody>
                </table>
            </div>
        </>
    )
}

export default VoteInput;