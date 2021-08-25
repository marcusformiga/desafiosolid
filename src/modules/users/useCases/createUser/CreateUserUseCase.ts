import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new Error(`Usuário com email ${email} já está cadastrado`);
    }
    if (name === " " || email === "") {
      throw new Error("Os campos não podem ser vazios");
    }
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
