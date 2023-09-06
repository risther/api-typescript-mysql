import { Ejemplo } from "../interfaces/ejemplo.interface";
import { connect } from '../config/mysql'

/*const insertCar =async (item: Car) =>{ //recibimos un parametro de tipo Car
    const responseInsert= await ItemModel.create(item)// esperamos a que se cree segun el esquema ya definido
    return responseInsert;
};*/

  const getEjemplo = async () => {
    const conn = await connect();
    const sql = "SELECT * FROM ejemplo";
    const [result] = await conn.query(sql);
    return result;
  };

  const insertEjemplo = async (body:Ejemplo) => {
    const conn = await connect();
    const sql = 'INSERT INTO ejemplo SET ?';
    try {
      const affectedRows = await conn.query(sql, [body]);
      return affectedRows;
    } catch (e) {
      return e;
    }
  };

  const updateEjemplo = async (idEjemplo: number, body:Ejemplo) => {
    const conn = await connect();
    const sql = 'UPDATE ejemplo set ? WHERE idEjemplo = ?';
    try {
      const affectedRows = await conn.query(sql, [body,idEjemplo]);
      return affectedRows;
    } catch (e) {
      return e;
    }
  };
  
  const deleteEjemplo = async (idEjemplo: number) => {
    const conn = await connect();
    const sql = 'DELETE FROM ejemplo WHERE idEjemplo = ?';
    try {
      const affectedRows = await conn.query(sql, [idEjemplo]);
      return affectedRows;
    } catch (e) {
      return e;
    }
  };

export{  getEjemplo, updateEjemplo,insertEjemplo,deleteEjemplo};  