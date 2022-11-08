import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams,Link } from "react-router-dom";
const EditAsistencia = () => {
  const [student_name, setStudentName] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    getAsistenciaById();
  },[]);

  const updateAsistencia = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/asistencias/${id}`, {
        student_name,
        checkin,
        checkout,
        date,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getAsistenciaById=async()=>{
    const response=await axios.get(`http://localhost:5000/asistencias/${id}`);
    setStudentName(response.data.student_name);
    setCheckin(response.data.checkin);
    setCheckout(response.data.checkout);
    setDate(response.data.date);
  }

  return (
    <div className="columns mt-5">
      <div className="column">
        <form action="" className="mr-5 ml-5" onSubmit={updateAsistencia}>
          <div className="field">
            <label className="label">Nombre de estudiante: </label>
            <div className="control mb-3">
              <input
                type="text"
                className="input form-control"
                value={student_name}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Nombre de estudiante"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Hora de entrada: </label>
            <div className="control mb-3">
              <input
                type="text"
                className="input form-control"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                placeholder="Hora de entrada"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Hora de salida: </label>
            <div className="control mb-3">
              <input
                type="text"
                className="input form-control"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                placeholder="Hora de salida"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Fecha: </label>
            <div className="control mb-3">
              <input
                type="date"
                className="input form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="aaaa-mm-dd"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="btn btn-success ">
              Actualizar
            </button>{"  "}
            <Link to={`/`} className='btn btn-secondary'>Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAsistencia;
