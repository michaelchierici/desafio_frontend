import { api } from "../..";
import { userMapper, userRepositoriesMapper } from "./Mapper";

class UserService {
  async findDetails(name: string) {
    const user = await api.get(`/users/${name}`);
    return userMapper(user.data);
  }

  async findRepositories(name: string) {
    const repositories = await api.get(`/users/${name}/repos`);
    return repositories.data.map(userRepositoriesMapper);
  }
}

export default new UserService();
