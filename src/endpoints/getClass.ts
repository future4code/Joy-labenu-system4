import { Request, Response } from "express";
import { connection } from "../data/connection";
// import { Class } from "../classes/class";

export async function getClass(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("class");
    res.status(201).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
