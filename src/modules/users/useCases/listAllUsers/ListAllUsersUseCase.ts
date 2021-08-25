import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user.admin) {
      throw new Error(`User com id ${user_id} não é um admin`);
    }
    if (!user) {
      throw new Error(`Não existe user com id ${user_id}`);
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
