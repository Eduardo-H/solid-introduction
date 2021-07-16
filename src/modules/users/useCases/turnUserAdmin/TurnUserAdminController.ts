import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  user: User;

  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }

    return response.status(201).json(this.user);
  }
}

export { TurnUserAdminController };
