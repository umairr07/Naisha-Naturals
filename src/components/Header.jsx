import { Link, useLocation, useNavigate } from "react-router-dom";
import Navlinks from "./Navlinks";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import johnImage from "../images/johndoe.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { handleSuccess } from "../utils/Toast";
import logo from "../images/logon-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const naviagte = useNavigate();
  const location = useLocation();

  const { user, setUser } = useContext(UserContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleLogout = () => {
    setUser(false);
    handleSuccess("Logged Out Successfully!!");
    naviagte("/signup");
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white-400 shadow-md">
        <div className="flex justify-between flex-wrap lg:px-10 sm:px-3 py-6 border-b border-white-400 items-center">
          <div>
            <Link
              to={"/"}
              className="lg:text-xl sm:text-[18px] font-semibold italic text-green-400"
            >
              Naisha Naturals
            </Link>
            {/* <img src={logo} alt="" className="w-24 h-10" /> */}
          </div>

          <div className="sm:hidden lg:flex md:flex">
            <Navlinks />
          </div>

          <div className="flex items-center gap-2 justify-center">
            {user ? (
              <div className="flex items-center gap-5">
                {location.pathname === "/cart" ? (
                  <Link to={"/cart"}>
                    <MdOutlineShoppingCart
                      size={30}
                      className="cursor-pointer text-green-400 underline"
                    />
                  </Link>
                ) : (
                  <Link to={"/cart"}>
                    <MdOutlineShoppingCart
                      size={30}
                      className="cursor-pointer text-grayForPageHeading hover:text-green-400 transition-all"
                    />
                  </Link>
                )}
                <div className="relative">
                  <img
                    src={johnImage}
                    alt=""
                    onClick={toggleProfile}
                    className="lg:w-10 sm:w-8 border border-gray-400 cursor-pointer rounded-full "
                  />
                  {isProfile && (
                    <ul className="absolute z-10 right-5 mt-2 w-56 bg-white-400 border border-gray-300 rounded-lg shadow-lg p-3 text-grayForPageHeading">
                      <li
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => {
                          naviagte("/myprofile");
                          toggleProfile(!isProfile);
                        }}
                      >
                        Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => {
                          naviagte("/settings");
                          toggleProfile(!isProfile);
                        }}
                      >
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer "
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600 text-white-400">
                  <Link to={"/signup"}>Signup</Link>
                </div>
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600  text-white-400">
                  <Link to={"/login"}>Login</Link>
                </div>
              </div>
            )}

            <div className="lg:hidden md:hidden sm:mt-2">
              <button onClick={handleToggle}>
                {isOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-56 bg-white-400 shadow-xl flex flex-col justify-start items-start py-5 z-50">
          <button
            className="ml-auto mr-4 mt-4 text-gray-500 hover:text-red-500"
            onClick={() => setIsOpen(false)} // Add a close button
          >
            <BiX size={30} />
          </button>
          <div className="px-4 w-full">
            <Navlinks />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
