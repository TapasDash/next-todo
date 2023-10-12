import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // shadow shadow-slate-800 have to put this for box-shadow
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded shadow shadow-slate-800">
      <Link className="text-white font-bold" href={"/"}>
        Tapas Codes
      </Link>
      <Link className="bg-white p-2 rounded " href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
