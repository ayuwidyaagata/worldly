import Head from "next/head";
import Navbar from "./components/Navbar";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const { data: session, status } = useSession();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const authenticated = status === "authenticated";

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  return (
    <>
      <Head>
        <title>Worldly {authenticated ? "| Home" : ""}</title>
      </Head>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <Navbar />
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute w-full h-[80vh] bg-lime-300 rounded-t-full bottom-0 left-0"></div>
          {authenticated ? (
            <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-4">
              <p className="text-8xl my-5">🙋🏻‍♂️</p>
              <h1 className="text-4xl md:text-7xl font-medium text-black mb-2">
                Hello,
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold underline text-black mb-2">
                {session?.user?.name}!
              </h1>
              <p className="mt-8 text-gray-600 max-w-md mx-auto">
                Welcome to your personal gateway to the world. Browse through a
                curated list of countries.
              </p>
              <Link href="/country">
                <button className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full inline-block">
                  Explore Country List <span className="animate-pulse">🚀</span>
                </button>
              </Link>
            </div>
          ) : (
            <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-4">
              <p className="text-5xl text-black my-5">✦•✦</p>
              <h1 className="text-4xl md:text-6xl xl:text-8xl font-normal text-black">
                Explore <span className="font-bold">Countries</span>,
              </h1>
              <div className="flex">
                <h1 className="text-4xl md:text-6xl xl:text-8xl flex text-black mb-2 underline">
                  Expand Your Horizons
                </h1>
                <p className="md:ml-2 text-4xl md:text-6xl xl:text-8xl">✢</p>
              </div>
              <p className="mt-8 text-sm lg:text-xl text-gray-600 mx-w-sm md:max-w-lg mx-auto">
                Unlock access to a comprehensive list of countries with just one
                click. Sign in to explore detailed information.
              </p>
              <p className="my-3 text-5xl">〰️</p>
              <button
                onClick={openLoginModal}
                className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full animate-bounce"
              >
                Sign In to Explore ↗️
              </button>
            </div>
          )}
        </div>
        {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      </div>
    </>
  );
};

export default Home;
