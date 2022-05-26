import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getStudents(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("student");
    res.status(201).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}