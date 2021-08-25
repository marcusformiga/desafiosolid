import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <{ user_id: string }>request.headers;
    const users = this.listAllUsersUseCase.execute({ user_id });
    return response.status(200).send(users);
  }
}

export { ListAllUsersController };
