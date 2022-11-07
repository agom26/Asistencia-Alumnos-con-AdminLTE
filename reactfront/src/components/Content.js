import React from 'react'
import {BrowserRouter,Routes,Route } from "react-router-dom";
import AsistenciaList from './AsistenciaList'
import AddAsistencia from './AddAsistencia';
import EditAsistencia from './EditAsistencia';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Content() {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AsistenciaList/>}/>
          <Route path='add' element={<AddAsistencia/>}/>
          <Route path='edit/:id' element={<EditAsistencia/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
