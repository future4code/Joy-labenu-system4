import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function setClassMate(
  req: Request,
  res: Response
): Promise<void> {
  const { classId } = req.body;
  try {
    await connection("teacher")
      .update({
        class_id: classId,
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Mudou o tio de sala! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}