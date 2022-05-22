import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function setClassStudent(req: Request, res: Response): Promise<void> {
  const { classId } = req.body.id;
  try {
    await connection("student")
      .update({
        classId: classId,
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Mudança de turma do estudante alterada com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
