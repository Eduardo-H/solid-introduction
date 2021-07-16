import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  user: User;

  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.user = this.showUserProfileUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }

    return response.status(200).json(this.user);
  }
}

export { ShowUserProfileController };
