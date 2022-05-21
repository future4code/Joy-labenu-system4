import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Class } from "../classes/class";
import { v4 as uuidv4 } from "uuid";

export async function setModule(req: Request, res: Response): Promise<void> {
  try {
    const classId: string = req.body.classId;
    const token = req.headers.authorization
    
 
   const mudarModulo = await connection("class").select().update({classId: classId});
    
    res.status(201).send({ message: "Modulo da turma alterado!", mudarModulo});
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
