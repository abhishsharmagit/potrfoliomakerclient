import { AppDispatch } from "..";
import { portfolioService } from "../../service";
import {
  getPortfolioByIdError,
  getPortfolioByIdStart,
  getPortfolioByIdSuccess,
} from "../slice/portfolio";

export const getPortfolioById =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getPortfolioByIdStart());
      const data = await portfolioService.getPortfolioById(id);
      dispatch(getPortfolioByIdSuccess(data));
    } catch (error) {
      dispatch(getPortfolioByIdError(error));
    }
  };
