import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  user: User;

  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    try {
      this.user = this.createUserUseCase.execute({ email, name });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).json(this.user);
  }
}

export { CreateUserController };
