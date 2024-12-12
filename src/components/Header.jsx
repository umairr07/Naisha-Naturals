import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white-400 shadow-md">
        <div className="flex justify-between flex-wrap lg:px-10 sm:px-3 py-6 border-b border-white-400 items-center">
          <div>
            <h1 className="lg:text-xl sm:text-[18px] font-semibold italic text-green-400">
              Naisha Naturals
            </h1>
            {/* <img src= alt="" /> */}
          </div>

          <div className="sm:hidden lg:flex md:flex">
            <Navlinks />
          </div>

          <div className="flex items-center gap-2 justify-center">
            <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 text-white-400">
              <Link to={"/signup"}>Login / Signup</Link>
            </div>

            <div className="lg:hidden md:hidden sm:mt-2">
              <button onClick={handleToggle}>
                {isOpen ? <BiX size={30} /> : <BiMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col flex-wrap gap-3 justify-end basis-full items-center mt-28">
          <Navlinks />
        </div>
      )}
    </>
  );
};

export default Header;
