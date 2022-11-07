//importar la conexion 
import db from "../database/Database.js";
 
//importar Sequelize
import {  DataTypes } from "sequelize";

const Asistencia=db.define('asistencia',{
    student_name:DataTypes.STRING,
    checkin: DataTypes.STRING,
    checkout: DataTypes.STRING,
    date:DataTypes.DATE
},{
    freezeTableName:true
});
export default Asistencia;

(async()=>{
    await db.sync();
})();
