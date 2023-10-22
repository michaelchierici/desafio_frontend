import { RepositoryProps } from "../../../types/Repository";
import { UserProps } from "../../../types/User";

export function userMapper(user: UserProps) {
  return {
    name: user.name,
    bio: user.bio,
    email: user.email,
    followers: user.followers,
    following: user.following,
    avatar_url: user.avatar_url,
  };
}

export function userRepositoriesMapper(repo: RepositoryProps) {
  return {
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    html_url: repo.html_url,
    full_name: repo.full_name,
  };
}
