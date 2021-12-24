export type FORM = {
  firstName: string;
  portfolioName: string;
  profile: string;
  email: string;
  description: string;
  about: string;
  inTouch: string;
  address: string;
  phone: number | undefined;
  template: string;
  imageName: string;
  resumeName: string;
};

export interface IUserPortfolio {
  about: string;
  address: string;
  description: string;
  phone?: number;
  firstName: string;
  portfolioName: string;
  profile: string;
  inTouch: string;
  email: string;
  template: string;
  userId: string;
  url?: string;
}

export type IUser = {
  id: string;
  username: string;
  githubId: string;
};
export interface ICheckRepoDTO {
  repoName: string;
}
