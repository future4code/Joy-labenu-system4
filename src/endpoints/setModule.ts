import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function setModule(req: Request, res: Response): Promise<void> {
  const { module } = req.body;
  try {
    await connection("class")
      .update({
        module: module,
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Turmitcha editada com sucesso! " });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
