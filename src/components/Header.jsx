import { Link, useLocation, useNavigate } from "react-router-dom";
import Navlinks from "./Navlinks";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import johnImage from "../images/johndoe.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { handleSuccess } from "../utils/Toast";
import logo from "../images/logon.jpg";

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
            {/* <img src={logo} alt="" className="w-20 h-10 " /> */}
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
                    className="w-10 border border-gray-400 cursor-pointer rounded-full "
                  />
                  {isProfile && (
                    <div className="absolute z-10 right-5 mt-2 w-56 bg-white-400 border border-gray-300 rounded-lg shadow-lg p-3 flex">
                      <div className="space-y-3 text-grayForPageHeading">
                        <h1 className="font-bold">Profile</h1>
                        <h1 className="text-[15px]">Name : John Doe</h1>
                        <h1 className="text-[15px]">
                          Email : johndoe@gmail.com
                        </h1>
                        <button
                          className="bg-green-400 text-white-400 text-[15px] p-1 px-2 rounded-lg"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 text-white-400">
                <Link to={"/signup"}>Login / Signup</Link>
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
        <div className="flex flex-col flex-wrap gap-3 justify-end basis-full shadow-xl rounded-xl items-center mt-28 py-5">
          <Navlinks />
        </div>
      )}
    </>
  );
};

export default Header;
