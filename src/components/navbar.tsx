import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Why Us", link: "#why-us" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-[1000] flex justify-center">
      <div className="w-[95%] max-w-6xl rounded-3xl border border-gray-200 bg-gray-100/80 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-6 md:px-[75px] py-[14px]">
          {/* Logo */}
          <div className="flex items-center gap-[6px]">
            <img
              src={Logo}
              alt="Next Epoch Labs Logo"
              className="w-[50px] h-[30px]"
            />
            <p className="font-bold text-[1.15rem] mt-[6px]">NEXT EP0CH L4BS</p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="px-4 py-2 text-gray-700 font-medium transition-all duration-200 hover:text-[#FFD700]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-gray-200/60"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mx-4 mb-4 rounded-2xl bg-white/90 shadow border border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#FFD700]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
