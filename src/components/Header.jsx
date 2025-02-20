"use client";

import { FaCoins } from "react-icons/fa6";

import Link from "next/link";
import { usePoints } from "@/context/PointsContext";

const Header = () => {
  const { points } = usePoints();

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <Link
        href="/"
        className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
      >
        ERMA
      </Link>
    </header>
  );
};

export default Header;
