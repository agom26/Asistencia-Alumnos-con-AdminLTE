import React, {useState,useEffect, useSyncExternalStore} from 'react';
import axios from "axios";
import {Link } from "react-router-dom";
const AsistenciaList = () => {
const [asistencias,setAsistencia]=useState([]);

useEffect(()=>{
    getAsistencias();
},[]);

const getAsistencias=async()=>{
    const response=await axios.get('http://localhost:5000/asistencias');
    setAsistencia(response.data);
};

const deleteAsistencia=async(id)=>{
    try {
        await axios.delete(`http://localhost:5000/asistencias/${id}`);
        getAsistencias();
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div>
      <div className="columns mt-5 mr-5 ml-5" >
        <div className="column ">
            <Link to={`add`} className='btn btn-success'>Crear asistencia</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre Estudiante</th>
                        <th>Hora de entrada</th>
                        <th>Hora de salida</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {asistencias.map((asistencia,index)=>(
                         <tr key={asistencia.id}>
                         <td>{index+1}</td>
                         <td>{asistencia.student_name}</td>
                         <td>{asistencia.checkin}</td>
                         <td>{asistencia.checkout}</td>
                         <td>{asistencia.date}</td>
                         <td>
                            <Link to={`edit/${asistencia.id}`} className='btn btn-primary'>Editar</Link>{"  "}
                            <button onClick={()=>deleteAsistencia(asistencia.id)} className='btn btn-danger'>Eliminar</button>
                         </td>
                     </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
      </div>

    </div>
  )
}

export default AsistenciaList
