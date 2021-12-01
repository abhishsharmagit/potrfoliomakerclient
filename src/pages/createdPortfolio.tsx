import { NextPage } from "next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getPortfolioById } from "../store/thunk/portfolio";
import { getMe } from "../store/thunk/user";
import cookie from "js-cookie";

const createdPortfolio: NextPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<any>(
    (state) => Object.values(state.user.entities)[0]
  );
  const portfolios = useAppSelector((state) => state.portfolio.portfolio);
  useEffect(() => {
    const token = cookie.get("token");
    //@ts-ignore
    user && dispatch(getPortfolioById(user.id));
    if (!user) {
      //@ts-ignore
      dispatch(getMe(token));
    }
  }, [user]);
  type TableHead = {
    id: string;
    PortfolioUrl: string;
  };
  const tableHead: TableHead = {
    id: "S No.",
    PortfolioUrl: "PortfolioUrl",
  };

  return (
    <div>
      <p className="mx-auto text-3xl items-center text-center text-black py-10">
        Portfolio
      </p>
      <table>
        <thead>
          <tr>
            {Object.values(tableHead).map((col) => {
              return <th>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {portfolios.map((row) => {
            console.log(row, "row");
            return (
              <tr>
                {Object.values(row).map((data: any, id) => {
                  return <th key={id}>{data}</th>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default createdPortfolio;
