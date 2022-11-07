import express from "express";
import cors from "cors";
import AsistenciaRoute from "./routes/AsistenciaRoute.js";
const app= express();
app.use(cors());
app.use(express.json());
app.use(AsistenciaRoute);

app.listen(5000,()=>console.log('Server up and running...'))