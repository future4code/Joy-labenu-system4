import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function setClassStudent(
  req: Request,
  res: Response
): Promise<void> {
  const { classId } = req.body;
  try {
    await connection("student")
      .update({
        class_id: classId,
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Mudou o piazinho de sala! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
