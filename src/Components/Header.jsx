import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
        <>
          {/*  background styles for header */}
          <header className="bg-glass [backdrop-filter:blur(30px)] rounded-3xl mt-5 px-4 md:px-1 mx-8 py-5 sticky top-2">
            {/* For All header items */}
            <div className="flex justify-between items-center pr-4">
              {/* for logo and header */}
              <div className="flex gap-4 items-center">
                <img
                  src="/logo.jpg"
                  alt="logo"
                  className="cursor-pointer w-24 h-16 rounded-full"
                />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-Tourney  text-primary font-extrabold select-none">
                  TabularInsight
                </h3>
              </div>
              <div className="gap-6 lg:gap-16 hidden md:flex font-Poppins">
                <div>About</div>
                <div>Services</div>
                <div>Contact Us</div>
              </div>
              <div className="flex items-center gap-1 outline rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transform duration-500 delay-100  ">
                <button >Login</button>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </header>
    </>
  );
};

export default Header;
