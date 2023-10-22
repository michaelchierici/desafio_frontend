import { api } from "../..";
import { userRepositoriesMapper } from "../User/Mapper";

class RepositoryService {
  async findDetails(user_name: string, repo_name: string) {
    const repo = await api.get(`/repos/${user_name}/${repo_name}`);
    return userRepositoriesMapper(repo.data);
  }
}

export default new RepositoryService();
