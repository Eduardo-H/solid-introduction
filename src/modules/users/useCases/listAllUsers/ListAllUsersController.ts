import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  users: User[];

  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = String(user_id);

    try {
      this.users = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(200).json(this.users);
  }
}

export { ListAllUsersController };
