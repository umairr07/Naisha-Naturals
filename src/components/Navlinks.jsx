import { Link, useLocation } from "react-router-dom";

const lists = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/product-cards",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
];

const Navlinks = () => {
  const location = useLocation();

  return (
    <div>
      <ul className="lg:flex lg:flex-row lg:justify-around lg:items-center lg:gap-14 md:flex md:flex-row md:justify-around md:items-center md:gap-10 sm:flex sm:flex-col sm:flex-wrap sm:gap-5 text-gray-700">
        {lists.map((item, idx) => {
          return location.pathname === item.path ? (
            <Link
              to={item.path}
              className="cursor-pointer lg:text-[17px] md:text-[15px] text-green-400 transition-all duration-300 underline-offset-4 underline"
            >
              {item.name}
            </Link>
          ) : (
            <Link
              to={item.path}
              className="cursor-pointer lg:text-[17px] md:text-[15px] hover:text-green-400 transition-all duration-300 underline-offset-4 hover:underline"
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
