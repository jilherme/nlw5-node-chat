import { getCustomRepository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Verificar se o usuário existe
    const userExists = await usersRepository.findOne({
      email
    })
    // Se não existir salvar no BD
    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);

    //Se existir, retornar user
    return user;
  }
}
export { UsersService };