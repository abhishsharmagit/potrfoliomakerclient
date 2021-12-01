import axios, { AxiosRequestConfig } from "axios";
import { IcreatePortfolioDTO } from "../store/types";
import cookie from "js-cookie";

const getMe = async (token: string) => {
  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const user = await axios(`${process.env.BACKEND_URL}/me`, config);
  return user.data;
};

const createPortfolio = async (dto: IcreatePortfolioDTO) => {
  const token = getToken();

  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: dto,
  };
  const user = await axios(`${process.env.BACKEND_URL}/create`, config);
  return user.data;
};

const checkRepoExist = async (repoName: string) => {
  const token = getToken();
console.log('service')
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { repoName },
  };
  const user = await axios(`${process.env.BACKEND_URL}/repoExist`, config);
  console.log(user,'user')
  return user.data;
};

const uploadImage = async (dto?: FormData) => {
  const token = getToken();
  console.log(dto, "dto");
  try {
    const user = await axios.post(
      `${process.env.BACKEND_URL}/uploadImage`,
      dto,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return user.data;
  } catch (e) {
    console.log(e);
  }
};

const uploadResume = async (dto?: FormData) => {
  const token = getToken();
  console.log(dto, "dto");
  try {
    const user = await axios.post(
      `${process.env.BACKEND_URL}/uploadResume`,
      dto,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return user.data;
  } catch (e) {
    console.log(e);
  }
};

const getToken = () => {
  return cookie.get("token");
};

export default {
  getMe,
  createPortfolio,
  uploadImage,
  uploadResume,
  getToken,
  checkRepoExist,
};
