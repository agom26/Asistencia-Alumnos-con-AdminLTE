import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddAsistencia = () => {
  const [student_name, setStudentName] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const saveAsistencia = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/asistencias", {
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
  return (
    <div className="columns mt-5">
      <div className="column">
        <form action="" className="mr-5 ml-5" onSubmit={saveAsistencia}>
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
            <div className="control">
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
            <div className="control">
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
            <div className="control">
              <input
                type="date"
                className="input form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="aaaa-mm-dd"
              />
            </div>
          </div>

          <div className="field mt-3">
            <button type="submit" className="btn btn-success">
              {" "}
              Agregar{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsistencia;
