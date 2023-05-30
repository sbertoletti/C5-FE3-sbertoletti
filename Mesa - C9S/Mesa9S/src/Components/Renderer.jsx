import React from 'react'


const Renderer = ({selected, info, iterador}) => {

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

                        if (selected === item.id){
                                
                            return (
                                    <tr key={item.id}>
                                        <td>{item.materia}</td>
                                        <td>{iterador.cantidadEstudiantes}</td>
                                        <td>{iterador.promedio}</td>
                                    </tr>
                            )
                        }})}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Renderer;
