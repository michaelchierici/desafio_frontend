import { api } from "../..";
import { userMapper, userRepositoriesMapper } from "./Mapper";

class UserService {
  async findDetails(name: string) {
    const user = await api.get(`/users/${name}`);
    return userMapper(user.data);
  }

  async findRepositories(name: string, page: number, take: number | undefined) {
    const repositories = await api.get(
      `/users/${name}/repos?page=${page}&per_page=${take}`
    );
    return repositories.data.map(userRepositoriesMapper);
  }
}

export default new UserService();
