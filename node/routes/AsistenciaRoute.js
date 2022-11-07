import express from "express";
import {getAsistencias,getAsistenciaById,createAsistencia,updateAsistencia,deleteAsistencia} from "../controllers/AsistenciaController.js"

const router=express.Router();

router.get('/asistencias',getAsistencias);
router.get('/asistencias/:id',getAsistenciaById);
router.post('/asistencias',createAsistencia);
router.put('/asistencias/:id',updateAsistencia);
router.delete('/asistencias/:id',deleteAsistencia);
export default router;