import Asistencia from "../models/AsistenciaModel.js";

export const getAsistencias=async(req,res)=>{
    try {
        const response=await Asistencia.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAsistenciaById=async(req,res)=>{
    try {
        const response=await Asistencia.findOne({
            where:{
                id: req.params.id 
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createAsistencia=async(req,res)=>{
    try {
        await Asistencia.create(req.body);
        res.status(201).json({msg:"Asistencia creada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAsistencia=async(req,res)=>{
    try {
        await Asistencia.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Asistencia actualizada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAsistencia=async(req,res)=>{
    try {
        await Asistencia.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Asistencia eliminada"});
    } catch (error) {
        console.log(error.message);
    }
}
