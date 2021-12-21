import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useEffect } from "react";
import Link from "next/link";
import useAuth from "../../hooks";

const Home = () => {
  const { user, getUser } = useAuth();

  const router = useRouter();

  const token: string = router.query.token as string;
  cookie.set("token", token, { expires: 1 });
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <>
      <div className="flex w-full mt-20 px-20">
        <div className="flex w-1/3">
          <img src="../images/homepageimg.jpg" />
        </div>
        <div className="flex flex-col w-2/3">
          <p className="mx-auto items-center text-center text-4xl font-extrabold py-20 px-16">
            Welcome {user?.username} u are logged in! Create Awesome portfolio
            by just one click
          </p>
          <Link href="/template">
            <button className="mx-auto hover:bg-red-400 flex rounded-full items-center text-xl focus:outline-none outline-none border-none font-poppins border px-8 py-2 font-semibold bg-green-500">
              Create Portfolio
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
