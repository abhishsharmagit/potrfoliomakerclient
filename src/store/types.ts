import { IUser, IUserPortfolio } from "../types";

export type UsersState = {
  entities: {};
  portfolioUrl: "";
  loading: EntityLoadingState;
};
export type PortfolioState = {
  portfolio: IUserPortfolio[];
  loading: EntityLoadingState;
  error?: string;
  repoExist: boolean;
};
export enum EntityLoadingState {
  IDLE = "idle",
  PENDING = "pending",
  FAILED = "failed",
  SUCCEEDED = "succeeded",
}
export interface IcreatePortfolioDTO {
  about: string;
  address: string;
  description: string;
  phone: number | undefined;
  firstName: string;
  portfolioName: string;
  profile?: string;
  inTouch: string;
  email: string;
  template: string;
}
