import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Class } from "../classes/class";
import { v4 as uuidv4 } from "uuid";

export async function createClass(req: Request, res: Response): Promise<void> {
  try {
    const classId: string = uuidv4();
    const name: string = req.body.name;
    const module: number = req.body.module;
    const teachers: string[] = req.body.teachers;
    const students: string[] = req.body.students;
    // const { name, module, teachers, students } = req.body;

    const newClass = new Class (classId, name, module, teachers, students);

    await connection("class").insert({
        // TODO: CONFERIR COMO INSERIR DADOS DO BODY NA TABELA
      id: newClass.getId(),
      name: newClass.getClassName(),
      module: newClass.setModule(module)
    });
    
    res.status(201).send({ message: "Turmitcha criada com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
