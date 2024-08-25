import Link from "next/link";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="w-full flex flex-col justify-center py-5">
      <Link
        href="/"
        className="text-3xl lg:text-4xl text-center font-medium text-gray-700"
      >
        w✦rldly
      </Link>
      <div className="flex justify-center items-center gap-2 mt-2">
        <Link
          href="/country"
          className="text-lg md:text-2xl text-gray-800 border-r-2 border-gray-800 pr-2 hover:underline"
        >
          Country List
        </Link>
        <button
          onClick={openModal}
          className="text-lg md:text-2xl text-red-500 hover:underline"
        >
          Sign Out
        </button>
      </div>
      {isModalOpen && <LogoutModal closeModal={closeModal} />}
    </header>
  );
};

export default Navbar;
