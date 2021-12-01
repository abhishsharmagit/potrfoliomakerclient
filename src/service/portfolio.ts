import axios, { AxiosRequestConfig } from "axios";
import cookie from "js-cookie";

const getPortfolioById = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    data: { id },
  };
  const user = await axios(
    `${process.env.BACKEND_URL}/getPortfolioById`,
    config
  );
  return user.data;
};
const getToken = () => {
  return cookie.get("token");
};
export default {
  getPortfolioById,
};
