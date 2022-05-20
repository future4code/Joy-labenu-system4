import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Students } from "../classes/student"
import { v4 as uuidv4 } from "uuid";

export async function createStudents(req: Request, res: Response): Promise<void> {
  try {
    const studentId: string = uuidv4();
    const { studentName, email, birthDate, classId, hobbies } = req.body;

    const newStudent = new Students (studentId, studentName, email, birthDate, classId, hobbies);

    await connection("student").insert({
      id: newStudent.getId(),
      name: newStudent.getStudentName(),
      email: newStudent.getEmail(),
      birth_date: newStudent.getBirthDate(),
      class_id: newStudent.getclassId()
    });
    
    res.status(201).send({ message: "Piazinho criado com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
