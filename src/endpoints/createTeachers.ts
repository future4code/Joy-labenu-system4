import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Teachers } from "../classes/teacher"
import { v4 as uuidv4 } from "uuid";

export async function createTeachers(req: Request, res: Response): Promise<void> {
  try {
    const teacherId: string = uuidv4();
    const { teacherName, email, birthDate, classId, specialities } = req.body;

    const newTeacher = new Teachers (teacherId, teacherName, email, birthDate, classId, specialities);

    await connection("teacher").insert({

      id: newTeacher.getId(),
      teacherName: newTeacher.getTeacherName(),
      email: newTeacher.getEmail(),
      birthDate: newTeacher.getBirthDate(),
      classId: newTeacher.getclassId()
    });
    
    res.status(201).send({ message: "Tio criado com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
