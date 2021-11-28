import type { NextPage } from "next";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { FORM } from "../types";
import { EntityLoadingState } from "../store/types";
import Template1 from "../component/Templates/Template1";
import Template2 from "../component/Templates/Template2";
import { createPortfolio } from "../store/thunk/user";

const Form: NextPage = () => {
  const dispatch = useAppDispatch();
  const [preview, setPreview] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [resume, setResume] = useState<any>();
  const [formValue, setFormValue] = useState<FORM>({
    firstName: "",
    portfolio: "",
    profile: "developer",
    email: "",
    description: "",
    about: "",
    inTouch: "",
    address: "",
    phone: "",
    template: "",
    imageName: "",
    resumeName: "",
  });
  const user = useAppSelector<any>((state) => state.user.portfolioUrl);
  const usersState = useAppSelector<any>((state) => state.user.loading);
  const handleFieldChange = (value: string | boolean | File, key: string) => {
    setFormValue({ ...formValue, [key]: value });
  };
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPortfolio(formValue, image, resume));
  };
  const router = useRouter();

  useEffect(() => {
    const { template } = router.query;
    //@ts-ignore
    handleFieldChange(template, "template");
    user && Router.push("/result");
  }, [user]);

  return (
    <>
      {!preview ? (
        <div className="box-border px-10 py-20">
          <form
            onSubmit={submitForm}
            className="flex flex-col border-gray-600 rounded border w-2/3 mx-auto p-5"
          >
            <label className="pl-8 text-xl text-blue-400 font-semibold">
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              required={true}
              type="text"
              name="firstname"
              placeholder="Your name.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "firstName")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />

            <label
              htmlFor="portfolio"
              className="pl-8 text-xl text-blue-400 font-semibold"
            >
              Portfolio Name <span className="text-red-400">*</span>
            </label>
            <input
              required={true}
              type="text"
              id="portfolio"
              name="portfolioName"
              placeholder="Your Portfolio Repo Name.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "portfolio")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />

            <label
              htmlFor="profile"
              className="pl-8 text-xl text-blue-400 font-semibold"
            >
              Profile
            </label>
            <select
              id="profile"
              name="profile"
              value={formValue.profile}
              onChange={(event) =>
                handleFieldChange(event.target.value, "profile")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            >
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Devops">Devops</option>
            </select>

            <label
              htmlFor="subject"
              className="pl-8 text-xl text-blue-400 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "email")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />

            <label
              htmlFor="description"
              className="pl-8 text-xl text-blue-400 font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write something.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "description")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            ></textarea>

            <label className="pl-8 text-xl text-blue-400 font-semibold">
              About Me
            </label>
            <textarea
              id="about"
              name="about"
              placeholder="Write something about urself.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "about")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            ></textarea>
            <label className="pl-8 text-xl text-blue-400 font-semibold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your phone.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "phone")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />

            <label className="pl-8 text-xl text-blue-400 font-semibold">
              Get In touch (column)
            </label>
            <textarea
              id="inTouch"
              name="inTouch"
              placeholder="write something htmlFor get in touch column"
              onChange={(event) =>
                handleFieldChange(event.target.value, "inTouch")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            ></textarea>

            <label className="pl-8 text-xl text-blue-400 font-semibold">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your address.."
              onChange={(event) =>
                handleFieldChange(event.target.value, "address")
              }
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />
            <span className="text-red-400">{errorMsg}</span>
            <label
              className="pl-8 text-xl text-blue-400 font-semibold"
              htmlFor="customFile"
            >
              Upload Image
            </label>
            <input
              type="file"
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              id="customFile"
              onChange={(event) => {
                if (
                  event.target.files![0].type == "image/png" ||
                  event.target.files![0].type == "image/jpeg"
                ) {
                  setImage(event.target.files![0]);
                  handleFieldChange(event.target.files![0].name, "imageName");
                  setErrorMsg("");
                } else {
                  setErrorMsg("Only png/jpg type image supported");
                }
              }}
            />
            <span className="text-red-400">{errorMsg}</span>
            <label
              className="pl-8 text-xl text-blue-400 font-semibold"
              htmlFor="customFile"
            >
              Upload Resume
            </label>
            <input
              type="file"
              className="my-5 w-full h-11 p-2 border px-6 rounded-lg mt-3 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              id="customFile"
              onChange={(event) => {
                if (event.target.files![0].type == "application/pdf") {
                  setResume(event.target.files![0]);
                  handleFieldChange(event.target.files![0].name, "resumeName");
                  setErrorMsg("");
                } else {
                  setErrorMsg("Only pdf type file supported");
                }
              }}
            />

            <div className="flex">
              <button
                type="submit"
                disabled={usersState === EntityLoadingState.PENDING}
                className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-green-500"
              >
                {usersState === EntityLoadingState.PENDING
                  ? "loading..."
                  : "Submit"}
              </button>
              <button
                type="submit"
                onClick={() => setPreview(!preview)}
                className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
              >
                Preview
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex bg-red-100">
            <button
              type="button"
              value="Preview"
              onClick={() => setPreview(!preview)}
              className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
            >
              Back to form
            </button>
            <button
              type="submit"
              value="Create"
              onClick={submitForm}
              disabled={usersState === EntityLoadingState.PENDING}
              className=" my-5 mx-auto text-xl flex rounded-full items-center focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-red-200"
            >
              {usersState === EntityLoadingState.PENDING
                ? "loading..."
                : "Create Portfolio"}
            </button>
          </div>
          {formValue.template === "template1" ? (
            <Template1 value={formValue} image={image} />
          ) : (
            <Template2 value={formValue} image={image} />
          )}
        </div>
      )}
    </>
  );
};

export default Form;
