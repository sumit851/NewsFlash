import Logo from "./company-logo/logo";
import Menulogo from "./menu-logo/menulogo";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md font-roboto h-16 sm:h-20 fixed w-full z-8">
        <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 relative">
          <Menulogo />
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
