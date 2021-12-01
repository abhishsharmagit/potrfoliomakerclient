import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EntityLoadingState, PortfolioState, UsersState } from "../types";

const initialState = {
  portfolio: [],
  loading: "idle",
  error: "",
} as PortfolioState;

const portfolioSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPortfolioByIdStart: (state) => {
      state.loading = EntityLoadingState.PENDING;
    },
    getPortfolioByIdSuccess: (state, { payload }: PayloadAction<any>) => {
      state.portfolio = payload;
    },
    getPortfolioByIdError: (state, { payload }: PayloadAction<any>) => {
      state.loading = EntityLoadingState.FAILED;
      state.error = payload;
    },
    clearUserState: () => {
      return initialState;
    },
  },
});

export const reducer = portfolioSlice.reducer;

export const {
  getPortfolioByIdError,
  getPortfolioByIdStart,
  getPortfolioByIdSuccess,
} = portfolioSlice.actions;
