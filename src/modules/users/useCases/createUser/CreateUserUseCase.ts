import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userEmailAlreadyExists = this.usersRepository.findByEmail(email);

    if (userEmailAlreadyExists) {
      throw new Error("This e-mail has already been taken.");
    }

    const createdUser = this.usersRepository.create({ name, email });

    return createdUser;
  }
}

export { CreateUserUseCase };
