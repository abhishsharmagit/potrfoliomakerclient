export type UsersState = {
  entities: {};
  portfolioUrl: "";
  loading: EntityLoadingState;
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
  phone: string;
  firstName: string;
  portfolio: string;
  profile?: string;
  inTouch: string;
  email: string;
  template: string;
}
