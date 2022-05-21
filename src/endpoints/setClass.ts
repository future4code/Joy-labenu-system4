import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Teachers } from "../classes/teacher"
import { v4 as uuidv4 } from "uuid";

export async function setClass(req: Request, res: Response): Promise<void> {
  try {
    const teacherId: string = uuidv4();
    const { name, email, birth_date, classId, specialities } = req.body;

    const newTeacher = new Teachers (teacherId, name, email, birth_date, classId, specialities);

    await connection("teacher").insert({

      id: newTeacher.getId(),
      name: newTeacher.getTeacherName(),
      email: newTeacher.getEmail(),
      birth_date: newTeacher.getBirthDate(),
      class_id: newTeacher.getclassId()
    });
    
    res.status(201).send({ message: "Tio criado com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
