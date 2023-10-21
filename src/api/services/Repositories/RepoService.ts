import { api } from "../..";
import { userRepositoriesMapper } from "../User/Mapper";

class RepositoryService {
  async findDetails(name: string) {
    const repo = await api.get(`/repos/${name}`);
    return userRepositoriesMapper(repo.data);
  }
}

export default new RepositoryService();
